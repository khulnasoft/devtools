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

import assert from 'assert';
import { valid as semverValid } from 'semver';
import { ppath, xfs } from '@yarnpkg/fslib';
import { DEVTOOLS_JSON } from '@devtools/cli-common';
import { memoize } from './memoize';
import { getWorkspaceRoot } from './getWorkspaceRoot';

export const getCurrentDevtoolsVersion = memoize(() => {
  const devtoolsJsonPath = ppath.join(getWorkspaceRoot(), DEVTOOLS_JSON);

  let devtoolsVersion: string | null = null;
  try {
    devtoolsVersion = semverValid(xfs.readJsonSync(devtoolsJsonPath).version);

    assert(devtoolsVersion !== null);
  } catch {
    throw new Error('Valid version string not found in devtools.json');
  }

  return devtoolsVersion;
});
