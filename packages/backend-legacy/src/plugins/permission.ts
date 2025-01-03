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

import { DevtoolsIdentityResponse } from '@devtools/plugin-auth-node';
import { createRouter } from '@devtools/plugin-permission-backend';
import {
  AuthorizeResult,
  PolicyDecision,
} from '@devtools/plugin-permission-common';
import {
  PermissionPolicy,
  PolicyQuery,
} from '@devtools/plugin-permission-node';
import { Router } from 'express';
import { PluginEnvironment } from '../types';

class ExamplePermissionPolicy implements PermissionPolicy {
  async handle(
    _request: PolicyQuery,
    _user?: DevtoolsIdentityResponse,
  ): Promise<PolicyDecision> {
    // some logic to determine if the user is allowed to access the resource

    return {
      result: AuthorizeResult.ALLOW,
    };
  }
}

export default async function createPlugin(
  env: PluginEnvironment,
): Promise<Router> {
  return await createRouter({
    config: env.config,
    logger: env.logger,
    discovery: env.discovery,
    policy: new ExamplePermissionPolicy(),
    identity: env.identity,
  });
}
