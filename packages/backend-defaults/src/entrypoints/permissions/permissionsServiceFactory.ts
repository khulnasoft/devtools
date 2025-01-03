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

import {
  coreServices,
  createServiceFactory,
} from '@devtools/backend-plugin-api';
import { ServerPermissionClient } from '@devtools/plugin-permission-node';

/**
 * Permission system integration for authorization of user actions.
 *
 * See {@link @devtools/code-plugin-api#PermissionsService}
 * and {@link https://devtools.khulnasoft.com/docs/backend-system/core-services/permissions | the service docs}
 * for more information.
 *
 * @public
 */
export const permissionsServiceFactory = createServiceFactory({
  service: coreServices.permissions,
  deps: {
    auth: coreServices.auth,
    config: coreServices.rootConfig,
    discovery: coreServices.discovery,
  },
  async factory({ auth, config, discovery }) {
    return ServerPermissionClient.fromConfig(config, {
      auth,
      discovery,
    });
  },
});
