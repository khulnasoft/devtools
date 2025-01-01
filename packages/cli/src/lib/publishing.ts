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

import { DevtoolsPackage } from '@devtools/cli-node';

/**
 * A basic check that throws if a packages doesn't contain required devtools metadata for publishing
 */
export function publishPreflightCheck(pkg: DevtoolsPackage): void {
  const { name, devtools } = pkg.packageJson;
  if (!devtools || !name) {
    return;
  }

  const { role } = devtools;

  if (
    role === 'backend-plugin' ||
    role === 'backend-plugin-module' ||
    role === 'frontend-plugin'
    // TODO(Rugvip): We currently support plugin-less frontend modules for the new frontend system, but it needs a different solution
    // || role === 'frontend-plugin-module'
  ) {
    if (!devtools.pluginId) {
      throw new Error(
        `Plugin package ${name} is missing a devtools.pluginId, please run 'devtools-cli repo fix --publish'`,
      );
    }
  }

  if (role === 'backend-plugin' || role === 'frontend-plugin') {
    if (!devtools.pluginPackages) {
      throw new Error(
        `Plugin package ${name} is missing a devtools.pluginPackages, please run 'devtools-cli repo fix --publish'`,
      );
    }
  }

  if (
    devtools.pluginId &&
    (role === 'common-library' ||
      role === 'node-library' ||
      role === 'web-library')
  ) {
    if (!devtools.pluginPackages) {
      throw new Error(
        `Plugin library package ${name} is missing a devtools.pluginPackages, please run 'devtools-cli repo fix --publish'`,
      );
    }
  }

  if (role === 'backend-plugin-module' || role === 'frontend-plugin-module') {
    // TODO(Rugvip): Remove this .pluginId check once frontend modules are required to have a plugin ID
    if (devtools.pluginId && !devtools.pluginPackage) {
      throw new Error(
        `Plugin module package ${name} is missing a devtools.pluginPackage, please run 'devtools-cli repo fix --publish'`,
      );
    }
  }
}
