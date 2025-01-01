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
  DevtoolsCredentials,
  PermissionsService,
} from '@devtools/backend-plugin-api';
import { NotAllowedError } from '@devtools/errors';
import {
  AuthorizeResult,
  BasicPermission,
} from '@devtools/plugin-permission-common';

export type checkPermissionOptions = {
  credentials: DevtoolsCredentials;
  permissions: BasicPermission[];
  permissionService?: PermissionsService;
};

/**
 * Does a basic check on permissions. Throws 403 error if any permission responds with AuthorizeResult.DENY
 * @public
 */
export async function checkPermission(options: checkPermissionOptions) {
  const { permissions, permissionService, credentials } = options;
  if (permissionService) {
    const permissionRequest = permissions.map(permission => ({
      permission,
    }));
    const authorizationResponses = await permissionService.authorize(
      permissionRequest,
      { credentials: credentials },
    );

    for (const response of authorizationResponses) {
      if (response.result === AuthorizeResult.DENY) {
        throw new NotAllowedError();
      }
    }
  }
}
