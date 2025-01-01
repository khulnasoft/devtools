/*
 * Copyright 2023 The Devtools Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { PluginScanner } from './plugin-scanner';
import { LogContent, Logs, MockedLogger } from '../__testUtils__/testUtils';
import { Config, ConfigReader } from '@devtools/config';
import path, { join } from 'path';
import { ScannedPluginPackage } from './types';
import { mkdtempSync, rmSync } from 'fs';
import { mkdir, writeFile, rm } from 'fs/promises';
import { tmpdir } from 'os';
import waitForExpect from 'wait-for-expect';

describe('plugin-scanner', () => {
  describe('rootDirectoryWatcher', () => {
    let devtoolsRootDirectory: string;
    beforeEach(() => {
      devtoolsRootDirectory = mkdtempSync(
        path.join(tmpdir(), 'devtools-plugin-scanner-test'),
      );
    });
    afterEach(() => {
      if (devtoolsRootDirectory) {
        rmSync(devtoolsRootDirectory, { recursive: true, force: true });
      }
    });
    process.on('beforeExit', () => {
      if (devtoolsRootDirectory) {
        rmSync(devtoolsRootDirectory, { recursive: true, force: true });
      }
    });

    it('watch for config and file system changes', async () => {
      const logger = new MockedLogger();

      await mkdir(join(devtoolsRootDirectory, 'first-dir'));
      await mkdir(join(devtoolsRootDirectory, 'second-dir'));

      const config: Config = new ConfigReader({
        dynamicPlugins: {
          rootDirectory: 'first-dir',
        },
      });
      const getOptional = jest.spyOn(config, 'getOptional');

      let onConfigChange: (() => Promise<void>) | undefined;
      const configUnsubscribe = jest.fn();
      config.subscribe = onChange => {
        onConfigChange = onChange as any;
        return {
          unsubscribe: configUnsubscribe,
        };
      };
      const pluginScanner = PluginScanner.create({
        config,
        logger,
        devtoolsRoot: devtoolsRootDirectory,
        preferAlpha: false,
      });
      await pluginScanner.trackChanges();

      expect(onConfigChange).toBeDefined();

      let scannedPlugins: ScannedPluginPackage[] = (
        await pluginScanner.scanRoot()
      ).packages;
      expect(scannedPlugins).toEqual([]);

      const rootDirectorySubscriber = jest.fn(async () => {
        scannedPlugins = (await pluginScanner.scanRoot()).packages;
      });
      pluginScanner.subscribeToRootDirectoryChange(rootDirectorySubscriber);

      await mkdir(
        join(devtoolsRootDirectory, 'first-dir', 'test-backend-plugin'),
      );
      await writeFile(
        join(
          devtoolsRootDirectory,
          'first-dir',
          'test-backend-plugin',
          'package.json',
        ),
        JSON.stringify({
          name: 'test-backend-plugin-dynamic',
          version: '0.0.0',
          main: 'dist/index.cjs.js',
          devtools: { role: 'backend-plugin' },
        }),
      );

      await waitForExpect(() => {
        expect(rootDirectorySubscriber).toHaveBeenCalledTimes(1);
      });
      rootDirectorySubscriber.mockClear();
      await waitForExpect(() => {
        expect(scannedPlugins).toEqual([
          {
            location: new URL(
              `file://${devtoolsRootDirectory}/first-dir/test-backend-plugin`,
            ),
            manifest: {
              devtools: {
                role: 'backend-plugin',
              },
              main: 'dist/index.cjs.js',
              name: 'test-backend-plugin-dynamic',
              version: '0.0.0',
            },
          },
        ]);
      });

      expect(logger.logs).toEqual<Logs>({
        infos: expect.arrayContaining([
          {
            message: `rootDirectory changed (addDir - ${path.resolve(
              devtoolsRootDirectory,
              'first-dir/test-backend-plugin',
            )}): scanning plugins again`,
          },
          {
            message: `rootDirectory changed (add - ${path.resolve(
              devtoolsRootDirectory,
              'first-dir/test-backend-plugin/package.json',
            )}): scanning plugins again`,
          },
        ]),
      });
      logger.logs = {};

      getOptional.mockReturnValue({
        rootDirectory: 'second-dir',
      });
      await onConfigChange!();

      await waitForExpect(() => {
        expect(rootDirectorySubscriber).toHaveBeenCalledTimes(1);
      });
      rootDirectorySubscriber.mockClear();
      await waitForExpect(() => {
        expect(scannedPlugins).toEqual([]);
      });

      expect(logger.logs).toEqual<Logs>({
        infos: expect.arrayContaining([
          {
            message: `rootDirectory changed in Config from '${path.resolve(
              devtoolsRootDirectory,
              'first-dir',
            )}' to '${path.resolve(devtoolsRootDirectory, 'second-dir')}'`,
          },
        ]),
      });
      logger.logs = {};

      await mkdir(
        join(
          devtoolsRootDirectory,
          'second-dir',
          'second-test-backend-plugin',
        ),
      );
      await writeFile(
        join(
          devtoolsRootDirectory,
          'second-dir',
          'second-test-backend-plugin',
          'package.json',
        ),
        JSON.stringify({
          name: 'second-test-backend-plugin-dynamic',
          version: '1.0.3',
          main: 'dist/index.cjs.js',
          devtools: { role: 'backend-plugin' },
        }),
      );

      await waitForExpect(() => {
        expect(rootDirectorySubscriber).toHaveBeenCalledTimes(1);
      });
      rootDirectorySubscriber.mockClear();
      await waitForExpect(() => {
        expect(scannedPlugins).toEqual([
          {
            location: new URL(
              `file://${devtoolsRootDirectory}/second-dir/second-test-backend-plugin`,
            ),
            manifest: {
              devtools: {
                role: 'backend-plugin',
              },
              main: 'dist/index.cjs.js',
              name: 'second-test-backend-plugin-dynamic',
              version: '1.0.3',
            },
          },
        ]);
      });

      expect(logger.logs).toEqual<Logs>({
        infos: expect.arrayContaining([
          {
            message: `rootDirectory changed (addDir - ${path.resolve(
              devtoolsRootDirectory,
              'second-dir/second-test-backend-plugin',
            )}): scanning plugins again`,
          },
          {
            message: `rootDirectory changed (add - ${path.resolve(
              devtoolsRootDirectory,
              'second-dir/second-test-backend-plugin/package.json',
            )}): scanning plugins again`,
          },
        ]),
      });
      logger.logs = {};

      const debug = jest.spyOn(logger, 'debug');
      const info = jest.spyOn(logger, 'info');

      // Check that not all file changes trigger a new scan of plugins
      await mkdir(
        join(
          devtoolsRootDirectory,
          'second-dir',
          'second-test-backend-plugin',
          'sub-directory',
        ),
      );
      await waitForExpect(() => {
        expect(debug).toHaveBeenCalled();
      });
      expect(info).toHaveBeenCalledTimes(0);
      debug.mockClear();

      await writeFile(
        join(
          devtoolsRootDirectory,
          'second-dir',
          'second-test-backend-plugin',
          'not-package.json',
        ),
        'content',
      );
      await waitForExpect(() => {
        expect(debug).toHaveBeenCalled();
      });
      expect(info).toHaveBeenCalledTimes(0);
      debug.mockClear();

      await rm(
        join(
          devtoolsRootDirectory,
          'second-dir',
          'second-test-backend-plugin',
          'not-package.json',
        ),
      );
      await waitForExpect(() => {
        expect(debug).toHaveBeenCalled();
      });
      expect(info).toHaveBeenCalledTimes(0);
      debug.mockClear();

      await rm(
        join(
          devtoolsRootDirectory,
          'second-dir',
          'second-test-backend-plugin',
          'sub-directory',
        ),
        { recursive: true },
      );
      await waitForExpect(() => {
        expect(debug).toHaveBeenCalled();
      });
      expect(info).toHaveBeenCalledTimes(0);
      debug.mockClear();

      // Order of events is not fixed on Windows.
      // Windows sometimes even adds a 'change' event when a file is unlinked.
      // So let's not try to tes the detail of received events on Windows
      expect(logger.logs).toEqual<Logs>({
        debugs: expect.arrayContaining([
          {
            message: `rootDirectory changed (addDir - ${path.resolve(
              devtoolsRootDirectory,
              'second-dir/second-test-backend-plugin/sub-directory',
            )}): no need to scan plugins again`,
          },
          {
            message: `rootDirectory changed (add - ${path.resolve(
              devtoolsRootDirectory,
              'second-dir/second-test-backend-plugin/not-package.json',
            )}): no need to scan plugins again`,
          },
          {
            message: `rootDirectory changed (unlink - ${path.resolve(
              devtoolsRootDirectory,
              'second-dir/second-test-backend-plugin/not-package.json',
            )}): no need to scan plugins again`,
          },
          {
            message: `rootDirectory changed (unlinkDir - ${path.resolve(
              devtoolsRootDirectory,
              'second-dir/second-test-backend-plugin/sub-directory',
            )}): no need to scan plugins again`,
          },
        ]),
      });
      logger.logs = {};

      // Now check that removal of some plugin home directory triggers a new scan of plugins

      await rm(
        join(
          devtoolsRootDirectory,
          'second-dir',
          'second-test-backend-plugin',
          'package.json',
        ),
      );
      await waitForExpect(() => {
        expect(rootDirectorySubscriber).toHaveBeenCalledTimes(1);
      });
      rootDirectorySubscriber.mockClear();
      await waitForExpect(() => {
        expect(scannedPlugins).toEqual([]);
      });

      expect(logger.logs.infos).toEqual<LogContent[] | undefined>(
        expect.arrayContaining([
          {
            message: `rootDirectory changed (unlink - ${path.resolve(
              devtoolsRootDirectory,
              'second-dir/second-test-backend-plugin/package.json',
            )}): scanning plugins again`,
          },
        ]),
      );
      expect(logger.logs.errors).toEqual<LogContent[] | undefined>(
        expect.arrayContaining([
          {
            message: `failed to load dynamic plugin manifest from '${path.resolve(
              devtoolsRootDirectory,
              'second-dir/second-test-backend-plugin',
            )}'`,
            meta: {
              code: 'ENOENT',
              errno: path.sep === '\\' ? -4058 : -2,
              message: `ENOENT: no such file or directory, open '${path.resolve(
                devtoolsRootDirectory,
                'second-dir/second-test-backend-plugin/package.json',
              )}'`,
              name: 'Error',
              path: `${path.resolve(
                devtoolsRootDirectory,
                'second-dir/second-test-backend-plugin/package.json',
              )}`,
              syscall: 'open',
            },
          },
        ]),
      );
      logger.logs = {};

      await rm(
        join(
          devtoolsRootDirectory,
          'second-dir',
          'second-test-backend-plugin',
        ),
        { recursive: true },
      );
      await waitForExpect(() => {
        expect(rootDirectorySubscriber).toHaveBeenCalledTimes(1);
      });
      rootDirectorySubscriber.mockClear();

      expect(logger.logs).toEqual<Logs>({
        infos: expect.arrayContaining([
          {
            message: `rootDirectory changed (unlinkDir - ${path.resolve(
              devtoolsRootDirectory,
              'second-dir/second-test-backend-plugin',
            )}): scanning plugins again`,
          },
        ]),
      });
      logger.logs = {};

      getOptional.mockReturnValue({
        rootDirectory: '/somewhere-else/second-dir',
      });
      await onConfigChange!();

      expect(logger.logs).toEqual<Logs>({
        errors: expect.arrayContaining([
          {
            message: 'failed to apply new config for dynamic plugins',
            meta: {
              message: `Dynamic plugins under '${path.resolve(
                '/somewhere-else/second-dir',
              )}' cannot access devtools modules in '${path.resolve(
                devtoolsRootDirectory,
                'node_modules',
              )}'.
Please add '${path.resolve(
                devtoolsRootDirectory,
                'node_modules',
              )}' to the 'NODE_PATH' when running the devtools backend.`,
              name: 'Error',
            },
          },
        ]),
      });
    }, 120000);
  });
});
