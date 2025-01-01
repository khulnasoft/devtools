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
  AuthorizePermissionRequest,
  AuthorizePermissionResponse,
  EvaluatorRequestOptions,
  PermissionEvaluator,
  QueryPermissionRequest,
  QueryPermissionResponse,
} from '@devtools/plugin-permission-common';
import { DevtoolsCredentials } from './AuthService';

/**
 * Options for {@link PermissionsService} requests.
 *
 * @public
 */
export interface PermissionsServiceRequestOptions
  extends EvaluatorRequestOptions {
  credentials: DevtoolsCredentials;
}

/**
 * Permission system integration for authorization of user/service actions.
 *
 * See the {@link https://devtools.khulnasoft.com/docs/permissions/overview | permissions documentation}
 * and the {@link https://devtools.khulnasoft.com/docs/backend-system/core-services/permissions | service documentation}
 * for more details.
 *
 * @public
 */
export interface PermissionsService extends PermissionEvaluator {
  /**
   * Evaluates
   * {@link @devtools/plugin-permission-common#Permission | Permissions} and
   * returns definitive decisions.
   *
   * @remarks
   *
   * The returned array has the same number of items, in the same order, as the
   * given requests.
   */
  authorize(
    requests: AuthorizePermissionRequest[],
    options: PermissionsServiceRequestOptions,
  ): Promise<AuthorizePermissionResponse[]>;

  /**
   * Evaluates {@link @devtools/plugin-permission-common#ResourcePermission | ResourcePermissions} and returns both definitive and
   * conditional decisions, depending on the configured
   * {@link @devtools/plugin-permission-node#PermissionPolicy}.
   *
   * @remarks
   *
   * This method is useful when the
   * caller needs more control over the processing of conditional decisions. For example, a plugin
   * backend may want to use {@link @devtools/plugin-permission-common#PermissionCriteria | conditions} in a database query instead of
   * evaluating each resource in memory.
   *
   * The returned array has the same number of items, in the same order, as the
   * given requests.
   */
  authorizeConditional(
    requests: QueryPermissionRequest[],
    options: PermissionsServiceRequestOptions,
  ): Promise<QueryPermissionResponse[]>;
}
