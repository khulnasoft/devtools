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
import { createBackendModule } from '@devtools/backend-plugin-api';
import { policyExtensionPoint } from '@devtools/plugin-permission-node/alpha';
import { AllowAllPermissionPolicy } from './policy';

/**
 * A permission policy module that allows all requests.
 *
 * @public
 */
export const permissionModuleAllowAllPolicy = createBackendModule({
  pluginId: 'permission',
  moduleId: 'allow-all-policy',
  register(reg) {
    reg.registerInit({
      deps: { policy: policyExtensionPoint },
      async init({ policy }) {
        policy.setPolicy(new AllowAllPermissionPolicy());
      },
    });
  },
});
