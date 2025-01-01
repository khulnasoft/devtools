/*
 * Copyright 2024 The Devtools Authors
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

import {
  Configuration,
  Manifest,
  Project,
  Workspace,
  httpUtils,
} from '@yarnpkg/core';
import { npath, ppath } from '@yarnpkg/fslib';
import { createMockDirectory } from '@devtools/backend-test-utils';

import { beforeWorkspacePacking } from './beforeWorkspacePacking';

const makeWorkspace = (manifest: object) => {
  return {
    manifest: Manifest.fromText(JSON.stringify(manifest)),
    project: new Project(ppath.cwd(), {
      configuration: Configuration.create(ppath.cwd()),
    }),
  } as Workspace;
};

describe('beforeWorkspacePacking', () => {
  const mockDir = createMockDirectory();

  beforeEach(() => {
    jest
      .spyOn(ppath, 'cwd')
      .mockReturnValue(npath.toPortablePath(mockDir.path));

    jest
      .spyOn(process, 'cwd')
      .mockReturnValue(npath.toPortablePath(mockDir.path));

    jest.spyOn(httpUtils, 'get').mockResolvedValue({
      releaseVersion: '1.23.45',
      packages: [
        {
          name: '@devtools/core',
          version: '3.2.1',
        },
        {
          name: '@devtools/plugin-1',
          version: '6.5.4',
        },
        {
          name: '@devtools/plugin-2',
          version: '9.8.7',
        },
      ],
    });

    mockDir.setContent({
      'devtools.json': JSON.stringify({
        version: '1.23.45',
      }),
      'package.json': JSON.stringify({
        workspaces: {
          packages: ['packages/*'],
        },
      }),
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe.each`
    dependencyType
    ${'dependencies'}
    ${'devDependencies'}
    ${'optionalDependencies'}
  `('$dependencyType', ({ dependencyType }) => {
    it(`ignores ${dependencyType} that don't use the devtools: protocol`, () => {
      const result = {
        name: 'test-package',
        [dependencyType]: {
          foo: '^1.1.1',
        },
      };

      beforeWorkspacePacking(makeWorkspace(result), result);

      expect(result).toEqual({
        name: 'test-package',
        [dependencyType]: {
          foo: '^1.1.1',
        },
      });
    });

    it(`throws an error for any devtools: versions with a selector other than ^`, async () => {
      const result = {
        name: 'test-package',
        [dependencyType]: {
          '@devtools/core': 'devtools:^1.1.1',
        },
      };

      await expect(() =>
        beforeWorkspacePacking(makeWorkspace(result), result),
      ).rejects.toThrow(/unexpected version range/i);
    });

    it(`throws an error if the final manifest unexpectedly contains devtools: versions`, async () => {
      const result = {
        name: 'test-package',
        [dependencyType]: {
          get ['@devtools/core']() {
            return 'devtools:^';
          },
          set ['@devtools/core'](_value: unknown) {
            // ignore the attempt to set the value to
            // allow testing the validation logic at
            // the end of the hook.
          },
          '@devtools/plugin-1': 'devtools:^',
          '@devtools/plugin-2': 'devtools:^',
        },
      };

      await expect(() =>
        beforeWorkspacePacking(makeWorkspace(result), result),
      ).rejects.toThrow(/failed to replace all "devtools:" ranges/i);
    });

    it('converts devtools:^ versions to the corresponding package version prefixed by ^', async () => {
      const result = {
        name: 'test-package',
        [dependencyType]: {
          '@devtools/core': 'devtools:^',
        },
      };

      await beforeWorkspacePacking(makeWorkspace(result), result);

      expect(result).toEqual({
        name: 'test-package',
        [dependencyType]: {
          '@devtools/core': '^3.2.1',
        },
      });
    });
  });
});
