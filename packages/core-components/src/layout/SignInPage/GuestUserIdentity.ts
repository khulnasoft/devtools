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

import {
  IdentityApi,
  ProfileInfo,
  DevtoolsUserIdentity,
} from '@devtools/core-plugin-api';

/**
 * @deprecated Use `@devtools/plugin-auth-backend-module-guest-provider` instead.
 */
export class GuestUserIdentity implements IdentityApi {
  getUserId(): string {
    return 'guest';
  }

  async getIdToken(): Promise<string | undefined> {
    return undefined;
  }

  getProfile(): ProfileInfo {
    return {
      email: 'guest@example.com',
      displayName: 'Guest',
    };
  }

  async getProfileInfo(): Promise<ProfileInfo> {
    return {
      email: 'guest@example.com',
      displayName: 'Guest',
    };
  }

  async getDevtoolsIdentity(): Promise<DevtoolsUserIdentity> {
    const userEntityRef = `user:default/guest`;
    return {
      type: 'user',
      userEntityRef,
      ownershipEntityRefs: [userEntityRef],
    };
  }

  async getCredentials(): Promise<{ token?: string | undefined }> {
    return {};
  }

  async signOut(): Promise<void> {}
}
