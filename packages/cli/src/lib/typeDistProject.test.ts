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

import { PackageRole } from '@devtools/cli-node';
import createFeatureEnvironment from './__testUtils__/createFeatureEnvironment';
import {
  getEntryPointDefaultFeatureType,
  DevtoolsPackageFeatureType,
} from './typeDistProject';

describe('typeDistProject', () => {
  describe('for package role', () => {
    // This Record makes sure we're checking all package roles
    const packageRoles: Record<PackageRole, boolean> = {
      // Allowed
      'backend-plugin': true,
      'backend-plugin-module': true,
      'frontend-plugin': true,
      'frontend-plugin-module': true,
      'web-library': true,
      'node-library': true,
      // Disallowed
      frontend: false,
      backend: false,
      cli: false,
      'common-library': false,
    };

    const allowedPackageRoles = Object.keys(packageRoles).filter(
      role => packageRoles[role as PackageRole],
    );

    const disallowedPackageRoles = Object.keys(packageRoles).filter(
      role => !packageRoles[role as PackageRole],
    );

    it.each(allowedPackageRoles)(`returns features for %s`, r => {
      const { project, role, dir, entryPoint } = createFeatureEnvironment({
        role: r as PackageRole,
      });

      expect(
        getEntryPointDefaultFeatureType(role, dir, project, entryPoint),
      ).toEqual('@devtools/BackendFeature');
    });

    it.each(disallowedPackageRoles)(`does not return features for %s`, r => {
      const { project, role, dir, entryPoint } = createFeatureEnvironment({
        role: r as PackageRole,
      });

      expect(
        getEntryPointDefaultFeatureType(role, dir, project, entryPoint),
      ).toEqual(null);
    });
  });

  describe('for feature $$type', () => {
    // This Record makes sure we're checking all feature types
    const featureTypes: Record<DevtoolsPackageFeatureType | string, boolean> =
      {
        // Allowed
        '@devtools/BackendFeature': true,
        '@devtools/DevtoolsPlugin': true,
        '@devtools/FrontendPlugin': true,
        '@devtools/FrontendModule': true,
        // Disallowed
        '@devtools/Extension': false,
        '@devtools/RouteRef': false,
      };

    const allowedFeatureTypes = Object.keys(featureTypes).filter(
      $$type => featureTypes[$$type as DevtoolsPackageFeatureType],
    );

    const disallowedFeatureTypes = Object.keys(featureTypes).filter(
      $$type => !featureTypes[$$type as DevtoolsPackageFeatureType],
    );

    it.each(allowedFeatureTypes)(`returns features for "%s" $$type`, $$type => {
      const { project, role, dir, entryPoint } = createFeatureEnvironment({
        $$type: $$type as DevtoolsPackageFeatureType,
      });

      expect(
        getEntryPointDefaultFeatureType(role, dir, project, entryPoint),
      ).toEqual($$type);
    });

    it.each(disallowedFeatureTypes)(
      `does not return features for "%s" $$type`,
      $$type => {
        const { project, role, dir, entryPoint } = createFeatureEnvironment({
          $$type: $$type as DevtoolsPackageFeatureType,
        });

        expect(
          getEntryPointDefaultFeatureType(role, dir, project, entryPoint),
        ).toEqual(null);
      },
    );
  });

  it.each([
    'DefaultExportAssignment',
    'DefaultExportFromFile',
    'DefaultExportFromFileAsDefault',
    'DefaultExportFromFileWithSibling',
  ] as const)('returns features for format "%s"', format => {
    const { project, role, dir, entryPoint } = createFeatureEnvironment({
      format,
    });

    expect(
      getEntryPointDefaultFeatureType(role, dir, project, entryPoint),
    ).toEqual('@devtools/BackendFeature');
  });
});
