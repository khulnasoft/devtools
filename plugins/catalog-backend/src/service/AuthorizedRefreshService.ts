/*
 * Copyright 2021 The Devtools Authors
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

import { NotAllowedError } from '@devtools/errors';
import { catalogEntityRefreshPermission } from '@devtools/plugin-catalog-common/alpha';
import { AuthorizeResult } from '@devtools/plugin-permission-common';
import { RefreshOptions, RefreshService } from './types';
import { PermissionsService } from '@devtools/backend-plugin-api';

export class AuthorizedRefreshService implements RefreshService {
  constructor(
    private readonly service: RefreshService,
    private readonly permissionApi: PermissionsService,
  ) {}

  async refresh(options: RefreshOptions) {
    const authorizeDecision = (
      await this.permissionApi.authorize(
        [
          {
            permission: catalogEntityRefreshPermission,
            resourceRef: options.entityRef,
          },
        ],
        { credentials: options.credentials },
      )
    )[0];
    if (authorizeDecision.result !== AuthorizeResult.ALLOW) {
      throw new NotAllowedError();
    }
    await this.service.refresh(options);
  }
}
