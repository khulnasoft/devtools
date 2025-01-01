/*
 * Copyright 2022 The Devtools Authors
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

import { PackageRoles } from './PackageRoles';

describe('getRoleInfo', () => {
  it('provides role info by role', () => {
    expect(PackageRoles.getRoleInfo('web-library')).toEqual({
      role: 'web-library',
      platform: 'web',
      output: ['types', 'esm'],
    });

    expect(PackageRoles.getRoleInfo('frontend')).toEqual({
      role: 'frontend',
      platform: 'web',
      output: ['bundle'],
    });

    expect(() => PackageRoles.getRoleInfo('invalid')).toThrow(
      `Unknown package role 'invalid'`,
    );
  });
});

describe('getRoleFromPackage', () => {
  it('reads explicit package roles', () => {
    expect(
      PackageRoles.getRoleFromPackage({
        devtools: {
          role: 'web-library',
        },
      }),
    ).toEqual('web-library');

    expect(
      PackageRoles.getRoleFromPackage({
        devtools: {
          role: 'frontend',
        },
      }),
    ).toEqual('frontend');

    expect(() =>
      PackageRoles.getRoleFromPackage({
        name: 'test',
        devtools: {},
      }),
    ).toThrow('Package test must specify a role in the "devtools" field');

    expect(() =>
      PackageRoles.getRoleFromPackage({
        name: 'test',
        devtools: { role: 'invalid' },
      }),
    ).toThrow(`Unknown package role 'invalid'`);
  });
});

describe('detectRoleFromPackage', () => {
  it('detects the role of example-app', () => {
    expect(
      PackageRoles.detectRoleFromPackage({
        name: 'example-app',
        private: true,
        bundled: true,
        scripts: {
          start: 'devtools-cli app:serve',
          build: 'devtools-cli app:build',
          clean: 'devtools-cli clean',
          test: 'devtools-cli test',
          'test:e2e':
            'start-server-and-test start http://localhost:3000 cy:dev',
          'test:e2e:ci':
            'start-server-and-test start http://localhost:3000 cy:run',
          lint: 'devtools-cli lint',
          'cy:dev': 'cypress open',
          'cy:run': 'cypress run',
        },
      }),
    ).toEqual('frontend');
  });

  it('detects the role of example-backend', () => {
    expect(
      PackageRoles.detectRoleFromPackage({
        name: 'example-backend',
        main: 'dist/index.cjs.js',
        types: 'src/index.ts',
        scripts: {
          build: 'devtools-cli backend:bundle',
          'build-image':
            'docker build ../.. -f Dockerfile --tag example-backend',
          start: 'devtools-cli backend:dev',
          lint: 'devtools-cli lint',
          test: 'devtools-cli test',
          clean: 'devtools-cli clean',
        },
      }),
    ).toEqual('backend');
  });

  it('detects the role of @devtools/plugin-catalog', () => {
    expect(
      PackageRoles.detectRoleFromPackage({
        name: '@devtools/plugin-catalog',
        main: 'src/index.ts',
        types: 'src/index.ts',
        publishConfig: {
          access: 'public',
          main: 'dist/index.esm.js',
          types: 'dist/index.d.ts',
        },
        scripts: {
          build: 'devtools-cli plugin:build',
          start: 'devtools-cli plugin:serve',
          lint: 'devtools-cli lint',
          test: 'devtools-cli test',
          diff: 'devtools-cli plugin:diff',
          prepack: 'devtools-cli prepack',
          postpack: 'devtools-cli postpack',
          clean: 'devtools-cli clean',
        },
      }),
    ).toEqual('frontend-plugin');
  });

  it('detects the role of @devtools/plugin-catalog-backend', () => {
    expect(
      PackageRoles.detectRoleFromPackage({
        name: '@devtools/plugin-catalog-backend',
        main: 'src/index.ts',
        types: 'src/index.ts',
        publishConfig: {
          access: 'public',
          main: 'dist/index.cjs.js',
          types: 'dist/index.d.ts',
        },
        scripts: {
          start: 'devtools-cli backend:dev',
          build: 'devtools-cli backend:build',
          lint: 'devtools-cli lint',
          test: 'devtools-cli test',
          prepack: 'devtools-cli prepack',
          postpack: 'devtools-cli postpack',
          clean: 'devtools-cli clean',
        },
      }),
    ).toEqual('backend-plugin');
  });

  it('detects the role of @devtools/plugin-catalog-react', () => {
    expect(
      PackageRoles.detectRoleFromPackage({
        name: '@devtools/plugin-catalog-react',
        main: 'src/index.ts',
        types: 'src/index.ts',
        publishConfig: {
          access: 'public',
          main: 'dist/index.esm.js',
          types: 'dist/index.d.ts',
        },
        scripts: {
          build: 'devtools-cli build',
          lint: 'devtools-cli lint',
          test: 'devtools-cli test',
          prepack: 'devtools-cli prepack',
          postpack: 'devtools-cli postpack',
          clean: 'devtools-cli clean',
        },
      }),
    ).toEqual('web-library');
  });

  it('detects the role of @devtools/plugin-catalog-common', () => {
    expect(
      PackageRoles.detectRoleFromPackage({
        name: '@devtools/plugin-catalog-common',
        main: 'src/index.ts',
        types: 'src/index.ts',
        publishConfig: {
          access: 'public',
          main: 'dist/index.cjs.js',
          module: 'dist/index.esm.js',
          types: 'dist/index.d.ts',
        },
        scripts: {
          build: 'devtools-cli build',
          lint: 'devtools-cli lint',
          test: 'devtools-cli test --passWithNoTests',
          prepack: 'devtools-cli prepack',
          postpack: 'devtools-cli postpack',
          clean: 'devtools-cli clean',
        },
      }),
    ).toEqual('common-library');
  });

  it('detects the role of @devtools/plugin-catalog-backend-module-ldap', () => {
    expect(
      PackageRoles.detectRoleFromPackage({
        name: '@devtools/plugin-catalog-backend-module-ldap',
        main: 'src/index.ts',
        types: 'src/index.ts',
        publishConfig: {
          access: 'public',
          main: 'dist/index.cjs.js',
          types: 'dist/index.d.ts',
        },
        scripts: {
          build: 'devtools-cli backend:build',
          lint: 'devtools-cli lint',
          test: 'devtools-cli test',
          prepack: 'devtools-cli prepack',
          postpack: 'devtools-cli postpack',
          clean: 'devtools-cli clean',
        },
      }),
    ).toEqual('backend-plugin-module');
  });

  it('detects the role of @devtools/plugin-permission-node', () => {
    expect(
      PackageRoles.detectRoleFromPackage({
        name: '@devtools/plugin-permission-node',
        main: 'src/index.ts',
        types: 'src/index.ts',
        homepage: 'https://devtools.khulnasoft.com',
        publishConfig: {
          access: 'public',
          main: 'dist/index.cjs.js',
          types: 'dist/index.d.ts',
        },
        scripts: {
          build: 'devtools-cli backend:build',
          lint: 'devtools-cli lint',
          test: 'devtools-cli test',
          prepack: 'devtools-cli prepack',
          postpack: 'devtools-cli postpack',
          clean: 'devtools-cli clean',
        },
      }),
    ).toEqual('node-library');
  });

  it('detects the role of @devtools/plugin-analytics-module-ga', () => {
    expect(
      PackageRoles.detectRoleFromPackage({
        name: '@devtools/plugin-analytics-module-ga',
        main: 'src/index.ts',
        types: 'src/index.ts',
        publishConfig: {
          access: 'public',
          main: 'dist/index.esm.js',
          types: 'dist/index.d.ts',
        },
        scripts: {
          build: 'devtools-cli plugin:build',
          start: 'devtools-cli plugin:serve',
          lint: 'devtools-cli lint',
          test: 'devtools-cli test',
          diff: 'devtools-cli plugin:diff',
          prepack: 'devtools-cli prepack',
          postpack: 'devtools-cli postpack',
          clean: 'devtools-cli clean',
        },
      }),
    ).toEqual('frontend-plugin-module');
  });
});
