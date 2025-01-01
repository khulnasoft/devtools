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
  MockDirectory,
  createMockDirectory,
} from '@devtools/backend-test-utils';
import * as run from '../../lib/run';
import migrate from './migrate';
import { withLogCollector } from '@devtools/test-utils';
import fs from 'fs-extra';
import { expectLogsToMatch } from '../../lib/new/factories/common/testUtils';

// Remove log coloring to simplify log matching
jest.mock('chalk', () => ({
  red: (str: string) => str,
  blue: (str: string) => str,
  cyan: (str: string) => str,
  green: (str: string) => str,
  magenta: (str: string) => str,
  yellow: (str: string) => str,
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

describe('versions:migrate', () => {
  mockDir = createMockDirectory();

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should bump to the moved version when the package is moved', async () => {
    mockDir.setContent({
      'package.json': JSON.stringify({
        workspaces: {
          packages: ['packages/*'],
        },
      }),
      node_modules: {
        '@devtools': {
          custom: {
            'package.json': JSON.stringify({
              name: '@devtools-extra/custom',
              version: '1.0.1',
              devtools: {
                moved: '@devtools-community/custom',
              },
            }),
          },
          'custom-two': {
            'package.json': JSON.stringify({
              name: '@devtools-extra/custom-two',
              version: '1.0.0',
              devtools: {
                moved: '@devtools-community/custom-two',
              },
            }),
          },
        },
      },
      packages: {
        a: {
          'package.json': JSON.stringify({
            name: 'a',
            dependencies: {
              '@devtools/core': '^1.0.5',
              '@devtools/custom': '^1.0.1',
              '@devtools/custom-two': '^1.0.0',
            },
          }),
        },
        b: {
          'package.json': JSON.stringify({
            name: 'b',
            dependencies: {
              '@devtools/core': '^1.0.3',
              '@devtools/theme': '^1.0.0',
              '@devtools/custom': '^1.1.0',
              '@devtools/custom-two': '^1.0.0',
            },
          }),
        },
      },
    });

    jest.spyOn(run, 'run').mockResolvedValue(undefined);

    const { warn, log: logs } = await withLogCollector(async () => {
      await migrate({});
    });

    expectLogsToMatch(logs, [
      'Checking for moved packages to the @devtools-community namespace...',
      'Found a moved package @devtools/custom@^1.0.1 -> @devtools-community/custom in a (dependencies)',
      'Found a moved package @devtools/custom-two@^1.0.0 -> @devtools-community/custom-two in a (dependencies)',
      'Found a moved package @devtools/custom@^1.1.0 -> @devtools-community/custom in b (dependencies)',
      'Found a moved package @devtools/custom-two@^1.0.0 -> @devtools-community/custom-two in b (dependencies)',
    ]);

    expectLogsToMatch(warn, [
      'Could not find package.json for @devtools/core@^1.0.5 in a (dependencies)',
      'Could not find package.json for @devtools/core@^1.0.3 in b (dependencies)',
      'Could not find package.json for @devtools/theme@^1.0.0 in b (dependencies)',
    ]);

    expect(run.run).toHaveBeenCalledTimes(1);
    expect(run.run).toHaveBeenCalledWith(
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
        '@devtools-community/custom': '^1.0.1',
        '@devtools-community/custom-two': '^1.0.0',
        '@devtools/core': '^1.0.5',
      },
    });
    const packageB = await fs.readJson(
      mockDir.resolve('packages/b/package.json'),
    );
    expect(packageB).toEqual({
      name: 'b',
      dependencies: {
        '@devtools-community/custom': '^1.1.0',
        '@devtools-community/custom-two': '^1.0.0',
        '@devtools/core': '^1.0.3',
        '@devtools/theme': '^1.0.0',
      },
    });
  });

  it('should replace the occurences of the moved package in files inside the correct package', async () => {
    mockDir.setContent({
      'package.json': JSON.stringify({
        workspaces: {
          packages: ['packages/*'],
        },
      }),
      node_modules: {
        '@devtools': {
          custom: {
            'package.json': JSON.stringify({
              name: '@devtools-extra/custom',
              version: '1.0.1',
              devtools: {
                moved: '@devtools-community/custom',
              },
            }),
          },
          'custom-two': {
            'package.json': JSON.stringify({
              name: '@devtools-extra/custom-two',
              version: '1.0.0',
              devtools: {
                moved: '@devtools-community/custom-two',
              },
            }),
          },
        },
      },
      packages: {
        a: {
          'package.json': JSON.stringify({
            name: 'a',
            dependencies: {
              '@devtools/core': '^1.0.5',
              '@devtools/custom': '^1.0.1',
              '@devtools/custom-two': '^1.0.0',
            },
          }),
          src: {
            'index.ts': "import { myThing } from '@devtools/custom';",
            'index.test.ts': "import { myThing } from '@devtools/custom-two';",
          },
        },
        b: {
          'package.json': JSON.stringify({
            name: 'b',
            dependencies: {
              '@devtools/core': '^1.0.3',
              '@devtools/theme': '^1.0.0',
              '@devtools/custom': '^1.1.0',
              '@devtools/custom-two': '^1.0.0',
            },
          }),
        },
      },
    });

    jest.spyOn(run, 'run').mockResolvedValue(undefined);

    await withLogCollector(async () => {
      await migrate({});
    });

    expect(run.run).toHaveBeenCalledTimes(1);
    expect(run.run).toHaveBeenCalledWith(
      'yarn',
      ['install'],
      expect.any(Object),
    );

    const indexA = await fs.readFile(
      mockDir.resolve('packages/a/src/index.ts'),
      'utf-8',
    );

    expect(indexA).toEqual(
      "import { myThing } from '@devtools-community/custom';",
    );

    const indexTestA = await fs.readFile(
      mockDir.resolve('packages/a/src/index.test.ts'),
      'utf-8',
    );

    expect(indexTestA).toEqual(
      "import { myThing } from '@devtools-community/custom-two';",
    );
  });

  it('should replaces the occurences of changed packages, and is careful', async () => {
    mockDir.setContent({
      'package.json': JSON.stringify({
        workspaces: {
          packages: ['packages/*'],
        },
      }),
      node_modules: {
        '@devtools': {
          custom: {
            'package.json': JSON.stringify({
              name: '@devtools-extra/custom',
              version: '1.0.1',
              devtools: {
                moved: '@devtools-community/custom',
              },
            }),
          },
          'custom-two': {
            'package.json': JSON.stringify({
              name: '@devtools-extra/custom-two',
              version: '1.0.0',
            }),
          },
        },
      },
      packages: {
        a: {
          'package.json': JSON.stringify({
            name: 'a',
            dependencies: {
              '@devtools/core': '^1.0.5',
              '@devtools/custom': '^1.0.1',
              '@devtools/custom-two': '^1.0.0',
            },
          }),
          src: {
            'index.ts': "import { myThing } from '@devtools/custom';",
            'index.test.ts': "import { myThing } from '@devtools/custom-two';",
          },
        },
        b: {
          'package.json': JSON.stringify({
            name: 'b',
            dependencies: {
              '@devtools/core': '^1.0.3',
              '@devtools/theme': '^1.0.0',
              '@devtools/custom': '^1.1.0',
              '@devtools/custom-two': '^1.0.0',
            },
          }),
        },
      },
    });

    jest.spyOn(run, 'run').mockResolvedValue(undefined);

    await withLogCollector(async () => {
      await migrate({});
    });

    expect(run.run).toHaveBeenCalledTimes(1);
    expect(run.run).toHaveBeenCalledWith(
      'yarn',
      ['install'],
      expect.any(Object),
    );

    const indexA = await fs.readFile(
      mockDir.resolve('packages/a/src/index.ts'),
      'utf-8',
    );

    expect(indexA).toEqual(
      "import { myThing } from '@devtools-community/custom';",
    );

    const indexTestA = await fs.readFile(
      mockDir.resolve('packages/a/src/index.test.ts'),
      'utf-8',
    );

    expect(indexTestA).toEqual(
      "import { myThing } from '@devtools/custom-two';",
    );
  });
});
