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
import { createBackendModule } from '@devtools/backend-plugin-api';
import {
  authProvidersExtensionPoint,
  commonSignInResolvers,
  createOAuthProviderFactory,
} from '@devtools/plugin-auth-node';
import { bitbucketServerAuthenticator } from './authenticator';
import { bitbucketServerSignInResolvers } from './resolvers';

/** @public */
export const authModuleBitbucketServerProvider = createBackendModule({
  pluginId: 'auth',
  moduleId: 'bitbucket-server-provider',
  register(reg) {
    reg.registerInit({
      deps: {
        providers: authProvidersExtensionPoint,
      },
      async init({ providers }) {
        providers.registerProvider({
          providerId: 'bitbucketServer',
          factory: createOAuthProviderFactory({
            authenticator: bitbucketServerAuthenticator,
            signInResolverFactories: {
              ...bitbucketServerSignInResolvers,
              ...commonSignInResolvers,
            },
          }),
        });
      },
    });
  },
});
