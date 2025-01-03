/*
 * Copyright 2020 The Devtools Authors
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

import fs from 'fs-extra';
import { Command } from 'commander';
import * as runObj from '../../lib/run';
import bump, { bumpDevtoolsJsonVersion, createVersionFinder } from './bump';
import { registerMswTestHooks, withLogCollector } from '@devtools/test-utils';
import { YarnInfoInspectData } from '../../lib/versioning/packages';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import { NotFoundError } from '@devtools/errors';
import {
  MockDirectory,
  createMockDirectory,
} from '@devtools/backend-test-utils';

// Avoid mutating the global http(s) agent used in other tests
jest.mock('global-agent/bootstrap', () => {});

// Remove log coloring to simplify log matching
jest.mock('chalk', () => ({
  bold: (str: string) => str,
  red: (str: string) => str,
  blue: (str: string) => str,
  cyan: (str: string) => str,
  green: (str: string) => str,
  magenta: (str: string) => str,
  yellow: (str: string) => str,
}));

jest.mock('ora', () => ({
  __esModule: true,
  default({ prefixText }: any) {
    console.log(prefixText);
    return {
      start: () => ({
        succeed: () => {},
      }),
    };
  },
}));

let mockDir: MockDirectory;
jest.mock('@devtools/cli-common', () => ({
  ...jest.requireActual('@devtools/cli-common'),
  findPaths: () => ({
    resolveTargetRoot(filename: string) {
      return mockDir.resolve(filename);
    },
    get targetDir() {
      return mockDir.path;
    },
  }),
}));

jest.mock('../../lib/run', () => {
  return {
    run: jest.fn(),
  };
});

const mockFetchPackageInfo = jest.fn();
jest.mock('../../lib/versioning/packages', () => {
  const actual = jest.requireActual('../../lib/versioning/packages');
  return {
    ...actual,
    fetchPackageInfo: (name: string) => mockFetchPackageInfo(name),
  };
});

const REGISTRY_VERSIONS: { [name: string]: string } = {
  '@devtools/core': '1.0.6',
  '@devtools/core-api': '1.0.7',
  '@devtools/theme': '2.0.0',
  '@devtools-extra/custom': '1.1.0',
  '@devtools-extra/custom-two': '2.0.0',
  '@devtools/create-app': '1.0.0',
};

const yarnRcMock = `plugins:
  - checksum: cafedead
    path: .yarn/plugins/@yarnpkg/plugin-devtools.cjs
    spec: 'https://versions.devtools.khulnasoft.com/v1/releases/0.0.0/yarn-plugin'
`;

const HEADER = `# THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
# yarn lockfile v1

`;

const lockfileMock = `${HEADER}
"@devtools/core@^1.0.5":
  version "1.0.6"
  dependencies:
    "@devtools/core-api" "^1.0.6"

"@devtools/core@^1.0.3":
  version "1.0.3"
  dependencies:
    "@devtools/core-api" "^1.0.3"

"@devtools/theme@^1.0.0":
  version "1.0.0"

"@devtools/core-api@^1.0.6":
  version "1.0.6"

"@devtools/core-api@^1.0.3":
  version "1.0.3"
`;

// Avoid flakes by comparing sorted log lines. File system access is async, which leads to the log line order being indeterministic
const expectLogsToMatch = (
  recievedLogs: String[],
  expected: String[],
): void => {
  expect(recievedLogs.filter(Boolean).sort()).toEqual(expected.sort());
};

describe('bump', () => {
  mockDir = createMockDirectory();

  beforeEach(() => {
    mockFetchPackageInfo.mockImplementation(async name => ({
      name: name,
      'dist-tags': {
        latest: REGISTRY_VERSIONS[name],
      },
    }));
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  const worker = setupServer();
  registerMswTestHooks(worker);

  it('should bump devtools dependencies', async () => {
    mockDir.setContent({
      'yarn.lock': lockfileMock,
      'package.json': JSON.stringify({
        workspaces: {
          packages: ['packages/*'],
        },
      }),
      packages: {
        a: {
          'package.json': JSON.stringify({
            name: 'a',
            dependencies: {
              '@devtools/core': '^1.0.5',
            },
          }),
        },
        b: {
          'package.json': JSON.stringify({
            name: 'b',
            dependencies: {
              '@devtools/core': '^1.0.3',
              '@devtools/theme': '^1.0.0',
            },
          }),
        },
      },
    });

    jest.spyOn(runObj, 'run').mockResolvedValue(undefined);
    worker.use(
      rest.get(
        'https://versions.devtools.khulnasoft.com/v1/tags/main/manifest.json',
        (_, res, ctx) =>
          res(
            ctx.status(200),
            ctx.json({
              packages: [],
            }),
          ),
      ),
    );
    const { log: logs } = await withLogCollector(['log', 'warn'], async () => {
      await bump({ pattern: null, release: 'main' } as unknown as Command);
    });
    expectLogsToMatch(logs, [
      'Using default pattern glob @devtools/*',
      'Checking for updates of @devtools/core',
      'Checking for updates of @devtools/theme',
      'Some packages are outdated, updating',
      'bumping @devtools/core in a to ^1.0.6',
      'bumping @devtools/core in b to ^1.0.6',
      'bumping @devtools/theme in b to ^2.0.0',
      'Running yarn install to install new versions',
      'Checking for moved packages to the @devtools-community namespace...',
      '⚠️  The following packages may have breaking changes:',
      '  @devtools/theme : 1.0.0 ~> 2.0.0',
      '    https://github.com/khulnasoft/devtools/blob/master/packages/theme/CHANGELOG.md',
      'Version bump complete!',
    ]);

    expect(mockFetchPackageInfo).toHaveBeenCalledTimes(2);
    expect(mockFetchPackageInfo).toHaveBeenCalledWith('@devtools/core');
    expect(mockFetchPackageInfo).toHaveBeenCalledWith('@devtools/theme');

    expect(runObj.run).toHaveBeenCalledTimes(1);
    expect(runObj.run).toHaveBeenCalledWith(
      'yarn',
      ['install'],
      expect.any(Object),
    );

    const packageA = await fs.readJson(
      mockDir.resolve('packages/a/package.json'),
    );
    expect(packageA).toEqual({
      name: 'a',
      dependencies: {
        '@devtools/core': '^1.0.6',
      },
    });
    const packageB = await fs.readJson(
      mockDir.resolve('packages/b/package.json'),
    );
    expect(packageB).toEqual({
      name: 'b',
      dependencies: {
        '@devtools/core': '^1.0.6',
        '@devtools/theme': '^2.0.0',
      },
    });
  });

  it('should bump devtools dependencies but not install them', async () => {
    mockDir.setContent({
      'yarn.lock': lockfileMock,
      'package.json': JSON.stringify({
        workspaces: {
          packages: ['packages/*'],
        },
      }),
      packages: {
        a: {
          'package.json': JSON.stringify({
            name: 'a',
            dependencies: {
              '@devtools/core': '^1.0.5',
            },
          }),
        },
        b: {
          'package.json': JSON.stringify({
            name: 'b',
            dependencies: {
              '@devtools/core': '^1.0.3',
              '@devtools/theme': '^1.0.0',
            },
          }),
        },
      },
    });

    jest.spyOn(runObj, 'run').mockResolvedValue(undefined);
    worker.use(
      rest.get(
        'https://versions.devtools.khulnasoft.com/v1/tags/main/manifest.json',
        (_, res, ctx) =>
          res(
            ctx.status(200),
            ctx.json({
              packages: [],
            }),
          ),
      ),
    );
    const { log: logs } = await withLogCollector(['log', 'warn'], async () => {
      await bump({
        pattern: null,
        release: 'main',
        skipInstall: true,
      } as unknown as Command);
    });
    expectLogsToMatch(logs, [
      'Using default pattern glob @devtools/*',
      'Checking for updates of @devtools/core',
      'Checking for updates of @devtools/theme',
      'Some packages are outdated, updating',
      'bumping @devtools/core in a to ^1.0.6',
      'bumping @devtools/core in b to ^1.0.6',
      'bumping @devtools/theme in b to ^2.0.0',
      'Skipping yarn install',
      'Checking for moved packages to the @devtools-community namespace...',
      '⚠️  The following packages may have breaking changes:',
      '  @devtools/theme : 1.0.0 ~> 2.0.0',
      '    https://github.com/khulnasoft/devtools/blob/master/packages/theme/CHANGELOG.md',
      'Version bump complete!',
    ]);

    expect(mockFetchPackageInfo).toHaveBeenCalledTimes(2);
    expect(mockFetchPackageInfo).toHaveBeenCalledWith('@devtools/core');
    expect(mockFetchPackageInfo).toHaveBeenCalledWith('@devtools/theme');

    expect(runObj.run).not.toHaveBeenCalledWith(
      'yarn',
      ['install'],
      expect.any(Object),
    );

    const packageA = await fs.readJson(
      mockDir.resolve('packages/a/package.json'),
    );
    expect(packageA).toEqual({
      name: 'a',
      dependencies: {
        '@devtools/core': '^1.0.6',
      },
    });
    const packageB = await fs.readJson(
      mockDir.resolve('packages/b/package.json'),
    );
    expect(packageB).toEqual({
      name: 'b',
      dependencies: {
        '@devtools/core': '^1.0.6',
        '@devtools/theme': '^2.0.0',
      },
    });
  });

  it('should prefer dependency versions from release manifest', async () => {
    mockDir.setContent({
      'yarn.lock': lockfileMock,
      'package.json': JSON.stringify({
        workspaces: {
          packages: ['packages/*'],
        },
      }),
      packages: {
        a: {
          'package.json': JSON.stringify({
            name: 'a',
            dependencies: {
              '@devtools/core': '^1.0.5',
            },
          }),
        },
        b: {
          'package.json': JSON.stringify({
            name: 'b',
            dependencies: {
              '@devtools/core': '^1.0.3',
              '@devtools/theme': '^1.0.0',
            },
          }),
        },
      },
    });

    jest.spyOn(runObj, 'run').mockResolvedValue(undefined);
    worker.use(
      rest.get(
        'https://versions.devtools.khulnasoft.com/v1/tags/main/manifest.json',
        (_, res, ctx) =>
          res(
            ctx.status(200),
            ctx.json({
              releaseVersion: '0.0.1',
              packages: [
                {
                  name: '@devtools/theme',
                  version: '5.0.0',
                },
                {
                  name: '@devtools/create-app',
                  version: '3.0.0',
                },
              ],
            }),
          ),
      ),
    );
    const { log: logs } = await withLogCollector(['log', 'warn'], async () => {
      await bump({ pattern: null, release: 'main' } as unknown as Command);
    });
    expectLogsToMatch(logs, [
      'Using default pattern glob @devtools/*',
      'Checking for updates of @devtools/core',
      'Checking for updates of @devtools/theme',
      'Some packages are outdated, updating',
      'bumping @devtools/theme in b to ^5.0.0',
      'bumping @devtools/core in b to ^1.0.6',
      'bumping @devtools/core in a to ^1.0.6',
      'Your project is now at version 0.0.1, which has been written to devtools.json',
      'Running yarn install to install new versions',
      'Checking for moved packages to the @devtools-community namespace...',
      '⚠️  The following packages may have breaking changes:',
      '  @devtools/theme : 1.0.0 ~> 5.0.0',
      '    https://github.com/khulnasoft/devtools/blob/master/packages/theme/CHANGELOG.md',
      'Version bump complete!',
    ]);

    expect(mockFetchPackageInfo).toHaveBeenCalledTimes(1);
    expect(mockFetchPackageInfo).toHaveBeenCalledWith('@devtools/core');

    expect(runObj.run).toHaveBeenCalledTimes(1);
    expect(runObj.run).toHaveBeenCalledWith(
      'yarn',
      ['install'],
      expect.any(Object),
    );

    const packageA = await fs.readJson(
      mockDir.resolve('packages/a/package.json'),
    );
    expect(packageA).toEqual({
      name: 'a',
      dependencies: {
        '@devtools/core': '^1.0.6',
      },
    });
    const packageB = await fs.readJson(
      mockDir.resolve('packages/b/package.json'),
    );
    expect(packageB).toEqual({
      name: 'b',
      dependencies: {
        '@devtools/core': '^1.0.6',
        '@devtools/theme': '^5.0.0',
      },
    });
  });

  it('should use devtools:^ versions for packages in the release manifest when the yarn plugin is installed', async () => {
    mockDir.setContent({
      '.yarnrc.yml': yarnRcMock,
      'yarn.lock': lockfileMock,
      'package.json': JSON.stringify({
        workspaces: {
          packages: ['packages/*'],
        },
      }),
      packages: {
        a: {
          'package.json': JSON.stringify({
            name: 'a',
            dependencies: {
              '@devtools/core': '^1.0.5',
            },
          }),
        },
        b: {
          'package.json': JSON.stringify({
            name: 'b',
            dependencies: {
              '@devtools/core': '^1.0.3',
              '@devtools/theme': '^1.0.0',
            },
          }),
        },
      },
    });

    jest.spyOn(runObj, 'run').mockResolvedValue(undefined);
    worker.use(
      rest.get(
        'https://versions.devtools.khulnasoft.com/v1/tags/main/manifest.json',
        (_, res, ctx) =>
          res(
            ctx.status(200),
            ctx.json({
              releaseVersion: '0.0.1',
              packages: [
                {
                  name: '@devtools/theme',
                  version: '5.0.0',
                },
                {
                  name: '@devtools/create-app',
                  version: '3.0.0',
                },
              ],
            }),
          ),
      ),
    );
    const { log: logs } = await withLogCollector(['log', 'warn'], async () => {
      await bump({ pattern: null, release: 'main' } as unknown as Command);
    });
    expectLogsToMatch(logs, [
      'Using default pattern glob @devtools/*',
      'Checking for updates of @devtools/core',
      'Checking for updates of @devtools/theme',
      'NOTE: this bump used devtools:^ versions in package.json files, since the Devtools yarn plugin was detected in the repository. To migrate back to explicit npm versions, remove the plugin by running "yarn plugin remove @yarnpkg/plugin-devtools", then repeat this command.',
      'Some packages are outdated, updating',
      'bumping @devtools/theme in b to ^5.0.0',
      'bumping @devtools/core in b to ^1.0.6',
      'bumping @devtools/core in a to ^1.0.6',
      'Updating yarn plugin to v0.0.1...',
      'Your project is now at version 0.0.1, which has been written to devtools.json',
      'Running yarn install to install new versions',
      'Checking for moved packages to the @devtools-community namespace...',
      '⚠️  The following packages may have breaking changes:',
      '  @devtools/theme : 1.0.0 ~> 5.0.0',
      '    https://github.com/khulnasoft/devtools/blob/master/packages/theme/CHANGELOG.md',
      'Version bump complete!',
    ]);

    expect(mockFetchPackageInfo).toHaveBeenCalledTimes(1);
    expect(mockFetchPackageInfo).toHaveBeenCalledWith('@devtools/core');

    expect(runObj.run).toHaveBeenCalledTimes(2);
    expect(runObj.run).toHaveBeenCalledWith('yarn', [
      'plugin',
      'import',
      'https://versions.devtools.khulnasoft.com/v1/releases/0.0.1/yarn-plugin',
    ]);
    expect(runObj.run).toHaveBeenCalledWith(
      'yarn',
      ['install'],
      expect.any(Object),
    );

    const packageA = await fs.readJson(
      mockDir.resolve('packages/a/package.json'),
    );
    expect(packageA).toEqual({
      name: 'a',
      dependencies: {
        '@devtools/core': '^1.0.6',
      },
    });
    const packageB = await fs.readJson(
      mockDir.resolve('packages/b/package.json'),
    );
    expect(packageB).toEqual({
      name: 'b',
      dependencies: {
        '@devtools/core': '^1.0.6',
        '@devtools/theme': 'devtools:^',
      },
    });
  });

  it('should only bump packages in the manifest when a specific release is specified', async () => {
    mockDir.setContent({
      'yarn.lock': lockfileMock,
      'package.json': JSON.stringify({
        workspaces: {
          packages: ['packages/*'],
        },
      }),
      packages: {
        a: {
          'package.json': JSON.stringify({
            name: 'a',
            dependencies: {
              '@devtools/core': '^1.0.5',
            },
          }),
        },
        b: {
          'package.json': JSON.stringify({
            name: 'b',
            dependencies: {
              '@devtools/core': '^1.0.3',
              '@devtools/theme': '^1.0.0',
            },
          }),
        },
      },
    });

    jest.spyOn(runObj, 'run').mockResolvedValue(undefined);
    worker.use(
      rest.get(
        'https://versions.devtools.khulnasoft.com/v1/releases/999.0.1/manifest.json',
        (_, res, ctx) => res(ctx.status(404), ctx.json({})),
      ),
    );
    const { log: logs } = await withLogCollector(['log', 'warn'], async () => {
      await expect(
        bump({ pattern: null, release: '999.0.1' } as unknown as Command),
      ).rejects.toThrow('No release found for 999.0.1 version');
    });
    expect(logs.filter(Boolean)).toEqual([
      'Using default pattern glob @devtools/*',
    ]);

    expect(runObj.run).toHaveBeenCalledTimes(0);

    const packageA = await fs.readJson(
      mockDir.resolve('packages/a/package.json'),
    );
    expect(packageA).toEqual({
      name: 'a',
      dependencies: {
        '@devtools/core': '^1.0.5',
      },
    });
    const packageB = await fs.readJson(
      mockDir.resolve('packages/b/package.json'),
    );
    expect(packageB).toEqual({
      name: 'b',
      dependencies: {
        '@devtools/core': '^1.0.3',
        '@devtools/theme': '^1.0.0',
      },
    });
  });

  // eslint-disable-next-line jest/expect-expect
  it('should prefer versions from the highest manifest version when main is not specified', async () => {
    mockDir.setContent({
      'yarn.lock': lockfileMock,
      'package.json': JSON.stringify({
        workspaces: {
          packages: ['packages/*'],
        },
      }),
      packages: {
        a: {
          'package.json': JSON.stringify({
            name: 'a',
            dependencies: {
              '@devtools/core': '^1.0.5',
            },
          }),
        },
        b: {
          'package.json': JSON.stringify({
            name: 'b',
            dependencies: {
              '@devtools/core': '^1.0.3',
              '@devtools/theme': '^1.0.0',
            },
          }),
        },
      },
    });

    jest.spyOn(runObj, 'run').mockResolvedValue(undefined);
    worker.use(
      rest.get(
        'https://versions.devtools.khulnasoft.com/v1/tags/main/manifest.json',
        (_, res, ctx) =>
          res(
            ctx.status(200),
            ctx.json({
              releaseVersion: '1.0.0',
              packages: [
                {
                  name: '@devtools/theme',
                  version: '5.0.0',
                },
                {
                  name: '@devtools/create-app',
                  version: '3.0.0',
                },
              ],
            }),
          ),
      ),
      rest.get(
        'https://versions.devtools.khulnasoft.com/v1/tags/next/manifest.json',
        (_, res, ctx) =>
          res(
            ctx.status(200),
            ctx.json({
              releaseVersion: '1.0.0-next.1',
              packages: [
                {
                  name: '@devtools/theme',
                  version: '4.0.0',
                },
                {
                  name: '@devtools/create-app',
                  version: '2.0.0',
                },
              ],
            }),
          ),
      ),
    );
    const { log: logs } = await withLogCollector(['log', 'warn'], async () => {
      await bump({ pattern: null, release: 'next' } as unknown as Command);
    });
    expectLogsToMatch(logs, [
      'Using default pattern glob @devtools/*',
      'Checking for updates of @devtools/core',
      'Checking for updates of @devtools/theme',
      'Some packages are outdated, updating',
      'bumping @devtools/theme in b to ^5.0.0',
      'bumping @devtools/core in b to ^1.0.6',
      'bumping @devtools/core in a to ^1.0.6',
      'Your project is now at version 1.0.0, which has been written to devtools.json',
      'Running yarn install to install new versions',
      'Checking for moved packages to the @devtools-community namespace...',
      '⚠️  The following packages may have breaking changes:',
      '  @devtools/theme : 1.0.0 ~> 5.0.0',
      '    https://github.com/khulnasoft/devtools/blob/master/packages/theme/CHANGELOG.md',
      'Version bump complete!',
    ]);
  });

  it('should bump devtools dependencies and dependencies matching pattern glob', async () => {
    const customLockfileMock = `${lockfileMock}
"@devtools-extra/custom@^1.1.0":
  version "1.1.0"

"@devtools-extra/custom@^1.0.1":
  version "1.0.1"

"@devtools-extra/custom-two@^1.0.0":
  version "1.0.0"
`;
    mockDir.setContent({
      'yarn.lock': customLockfileMock,
      'package.json': JSON.stringify({
        workspaces: {
          packages: ['packages/*'],
        },
      }),
      packages: {
        a: {
          'package.json': JSON.stringify({
            name: 'a',
            dependencies: {
              '@devtools/core': '^1.0.5',
              '@devtools-extra/custom': '^1.0.1',
              '@devtools-extra/custom-two': '^1.0.0',
            },
          }),
        },
        b: {
          'package.json': JSON.stringify({
            name: 'b',
            dependencies: {
              '@devtools/core': '^1.0.3',
              '@devtools/theme': '^1.0.0',
              '@devtools-extra/custom': '^1.1.0',
              '@devtools-extra/custom-two': '^1.0.0',
            },
          }),
        },
      },
    });

    jest.spyOn(runObj, 'run').mockResolvedValue(undefined);
    worker.use(
      rest.get(
        'https://versions.devtools.khulnasoft.com/v1/tags/main/manifest.json',
        (_, res, ctx) =>
          res(
            ctx.status(200),
            ctx.json({
              packages: [],
            }),
          ),
      ),
    );
    const { log: logs } = await withLogCollector(['log', 'warn'], async () => {
      await bump({
        pattern: '@{devtools,devtools-extra}/*',
        release: 'main',
      } as any);
    });
    expectLogsToMatch(logs, [
      'Using custom pattern glob @{devtools,devtools-extra}/*',
      'Checking for updates of @devtools/core',
      'Checking for updates of @devtools-extra/custom',
      'Checking for updates of @devtools-extra/custom-two',
      'Checking for updates of @devtools/theme',
      'Some packages are outdated, updating',
      'bumping @devtools/core in a to ^1.0.6',
      'bumping @devtools-extra/custom in a to ^1.1.0',
      'bumping @devtools-extra/custom-two in a to ^2.0.0',
      'bumping @devtools/core in b to ^1.0.6',
      'bumping @devtools-extra/custom in b to ^1.1.0',
      'bumping @devtools-extra/custom-two in b to ^2.0.0',
      'bumping @devtools/theme in b to ^2.0.0',
      'Skipping devtools.json update as custom pattern is used',
      'Running yarn install to install new versions',
      'Checking for moved packages to the @devtools-community namespace...',
      '⚠️  The following packages may have breaking changes:',
      '  @devtools-extra/custom-two : 1.0.0 ~> 2.0.0',
      '  @devtools/theme : 1.0.0 ~> 2.0.0',
      '    https://github.com/khulnasoft/devtools/blob/master/packages/theme/CHANGELOG.md',
      'Version bump complete!',
    ]);

    expect(mockFetchPackageInfo).toHaveBeenCalledTimes(4);
    expect(mockFetchPackageInfo).toHaveBeenCalledWith('@devtools/core');
    expect(mockFetchPackageInfo).toHaveBeenCalledWith('@devtools/theme');

    expect(runObj.run).toHaveBeenCalledTimes(1);
    expect(runObj.run).toHaveBeenCalledWith(
      'yarn',
      ['install'],
      expect.any(Object),
    );

    const packageA = await fs.readJson(
      mockDir.resolve('packages/a/package.json'),
    );
    expect(packageA).toEqual({
      name: 'a',
      dependencies: {
        '@devtools-extra/custom': '^1.1.0',
        '@devtools-extra/custom-two': '^2.0.0',
        '@devtools/core': '^1.0.6',
      },
    });
    const packageB = await fs.readJson(
      mockDir.resolve('packages/b/package.json'),
    );
    expect(packageB).toEqual({
      name: 'b',
      dependencies: {
        '@devtools-extra/custom': '^1.1.0',
        '@devtools-extra/custom-two': '^2.0.0',
        '@devtools/core': '^1.0.6',
        '@devtools/theme': '^2.0.0',
      },
    });
  });

  it('should ignore not found packages', async () => {
    mockDir.setContent({
      'yarn.lock': lockfileMock,
      'package.json': JSON.stringify({
        workspaces: {
          packages: ['packages/*'],
        },
      }),
      packages: {
        a: {
          'package.json': JSON.stringify({
            name: 'a',
            dependencies: {
              '@devtools/core': '^1.0.5',
            },
          }),
        },
        b: {
          'package.json': JSON.stringify({
            name: 'b',
            dependencies: {
              '@devtools/core': '^1.0.3',
              '@devtools/theme': '^2.0.0',
            },
          }),
        },
      },
    });

    mockFetchPackageInfo.mockRejectedValue(new NotFoundError('Nope'));
    jest.spyOn(runObj, 'run').mockResolvedValue(undefined);
    worker.use(
      rest.get(
        'https://versions.devtools.khulnasoft.com/v1/tags/main/manifest.json',
        (_, res, ctx) =>
          res(
            ctx.status(200),
            ctx.json({
              packages: [],
            }),
          ),
      ),
    );
    const { log: logs } = await withLogCollector(['log', 'warn'], async () => {
      await bump({ pattern: null, release: 'main' } as unknown as Command);
    });
    expectLogsToMatch(logs, [
      'Using default pattern glob @devtools/*',
      'Checking for updates of @devtools/core',
      'Checking for updates of @devtools/theme',
      'Package info not found, ignoring package @devtools/core',
      'Package info not found, ignoring package @devtools/theme',
      'All Devtools packages are up to date!',
    ]);

    expect(runObj.run).toHaveBeenCalledTimes(0);

    const packageA = await fs.readJson(
      mockDir.resolve('packages/a/package.json'),
    );
    expect(packageA).toEqual({
      name: 'a',
      dependencies: {
        '@devtools/core': '^1.0.5', // not bumped
      },
    });
    const packageB = await fs.readJson(
      mockDir.resolve('packages/b/package.json'),
    );
    expect(packageB).toEqual({
      name: 'b',
      dependencies: {
        '@devtools/core': '^1.0.3', // not bumped
        '@devtools/theme': '^2.0.0', // not bumped
      },
    });
  });
});

describe('bumpDevtoolsJsonVersion', () => {
  mockDir = createMockDirectory();

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should bump version in devtools.json', async () => {
    mockDir.setContent({
      'devtools.json': JSON.stringify({ version: '0.0.1' }),
    });

    const { log } = await withLogCollector(async () => {
      await bumpDevtoolsJsonVersion('1.4.1');
    });
    expect(await fs.readJson(mockDir.resolve('devtools.json'))).toEqual({
      version: '1.4.1',
    });
    expect(log).toEqual([
      'Upgraded from release 0.0.1 to 1.4.1, please review these template changes:',
      undefined,
      '  https://devtools.github.io/upgrade-helper/?from=0.0.1&to=1.4.1',
      undefined,
    ]);
  });

  it("should create devtools.json if doesn't exist", async () => {
    mockDir.clear(); // empty temp test folder
    const latest = '1.4.1';

    const { log } = await withLogCollector(async () => {
      await bumpDevtoolsJsonVersion(latest);
    });
    expect(await fs.readJson(mockDir.resolve('devtools.json'))).toEqual({
      version: latest,
    });
    expect(log).toEqual([
      'Your project is now at version 1.4.1, which has been written to devtools.json',
    ]);
  });
});

describe('createVersionFinder', () => {
  async function findVersion(tag: string, data: Partial<YarnInfoInspectData>) {
    const fetcher = () =>
      Promise.resolve({
        name: '@devtools/core',
        'dist-tags': {},
        versions: [],
        time: {},
        ...data,
      });

    const versionFinder = createVersionFinder({
      releaseLine: tag,
      packageInfoFetcher: fetcher,
    });
    let result;
    await withLogCollector(async () => {
      result = await versionFinder('@devtools/core');
    });
    return result;
  }

  it('should create version finder', async () => {
    await expect(
      findVersion('latest', {
        time: { '1.0.0': '2020-01-01T00:00:00.000Z' },
        'dist-tags': { latest: '1.0.0' },
      }),
    ).resolves.toBe('1.0.0');

    await expect(
      findVersion('main', {
        time: { '1.0.0': '2020-01-01T00:00:00.000Z' },
        'dist-tags': { latest: '1.0.0' },
      }),
    ).resolves.toBe('1.0.0');

    await expect(
      findVersion('next', {
        time: { '1.0.0': '2020-01-01T00:00:00.000Z' },
        'dist-tags': { latest: '1.0.0' },
      }),
    ).resolves.toBe('1.0.0');

    await expect(
      findVersion('next', {
        time: {
          '1.0.0': '2020-01-01T00:00:00.000Z',
          '0.9.0': '2010-01-01T00:00:00.000Z',
        },
        'dist-tags': { latest: '1.0.0', next: '0.9.0' },
      }),
    ).resolves.toBe('1.0.0');

    await expect(
      findVersion('next', {
        time: {
          '1.0.0': '2020-01-01T00:00:00.000Z',
          '0.9.0': '2020-02-01T00:00:00.000Z',
        },
        'dist-tags': { latest: '1.0.0', next: '0.9.0' },
      }),
    ).resolves.toBe('0.9.0');

    await expect(findVersion('next', {})).rejects.toThrow(
      "No target 'latest' version found for @devtools/core",
    );

    await expect(
      findVersion('next', {
        time: {
          '0.9.0': '2020-02-01T00:00:00.000Z',
        },
        'dist-tags': { latest: '1.0.0', next: '0.9.0' },
      }),
    ).rejects.toThrow(
      "No time available for version '1.0.0' of @devtools/core",
    );

    await expect(
      findVersion('next', {
        time: {
          '1.0.0': '2020-01-01T00:00:00.000Z',
        },
        'dist-tags': { latest: '1.0.0', next: '0.9.0' },
      }),
    ).rejects.toThrow(
      "No time available for version '0.9.0' of @devtools/core",
    );
  });
});
