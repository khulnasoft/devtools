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
  DevtoolsNonePrincipal,
  DevtoolsPrincipalAccessRestrictions,
  DevtoolsServicePrincipal,
  DevtoolsUserPrincipal,
} from '@devtools/backend-plugin-api';
import { InternalDevtoolsCredentials } from './types';

export function createCredentialsWithServicePrincipal(
  sub: string,
  token?: string,
  accessRestrictions?: DevtoolsPrincipalAccessRestrictions,
): InternalDevtoolsCredentials<DevtoolsServicePrincipal> {
  return Object.defineProperty(
    {
      $$type: '@devtools/DevtoolsCredentials',
      version: 'v1',
      principal: {
        type: 'service',
        subject: sub,
        accessRestrictions,
      },
    },
    'token',
    {
      enumerable: false,
      configurable: true,
      value: token,
    },
  );
}

export function createCredentialsWithUserPrincipal(
  sub: string,
  token: string,
  expiresAt?: Date,
): InternalDevtoolsCredentials<DevtoolsUserPrincipal> {
  return Object.defineProperty(
    {
      $$type: '@devtools/DevtoolsCredentials',
      version: 'v1',
      expiresAt,
      principal: {
        type: 'user',
        userEntityRef: sub,
      },
    },
    'token',
    {
      enumerable: false,
      configurable: true,
      value: token,
    },
  );
}

export function createCredentialsWithNonePrincipal(): InternalDevtoolsCredentials<DevtoolsNonePrincipal> {
  return {
    $$type: '@devtools/DevtoolsCredentials',
    version: 'v1',
    principal: {
      type: 'none',
    },
  };
}

export function toInternalDevtoolsCredentials(
  credentials: DevtoolsCredentials,
): InternalDevtoolsCredentials<
  DevtoolsUserPrincipal | DevtoolsServicePrincipal | DevtoolsNonePrincipal
> {
  if (credentials.$$type !== '@devtools/DevtoolsCredentials') {
    throw new Error('Invalid credential type');
  }

  const internalCredentials = credentials as InternalDevtoolsCredentials<
    DevtoolsUserPrincipal | DevtoolsServicePrincipal | DevtoolsNonePrincipal
  >;

  if (internalCredentials.version !== 'v1') {
    throw new Error(
      `Invalid credential version ${internalCredentials.version}`,
    );
  }

  return internalCredentials;
}
