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
import {
  AuthMetadata,
  AuthenticationStrategy,
  ClusterDetails,
  KubernetesCredential,
} from '@devtools/plugin-kubernetes-node';
import { KubernetesRequestAuth } from '@devtools/plugin-kubernetes-common';

/**
 *
 * @public
 */
export class AksStrategy implements AuthenticationStrategy {
  public async getCredential(
    _: ClusterDetails,
    requestAuth: KubernetesRequestAuth,
  ): Promise<KubernetesCredential> {
    const token = requestAuth.aks;
    return token
      ? { type: 'bearer token', token: token as string }
      : { type: 'anonymous' };
  }

  public validateCluster(): Error[] {
    return [];
  }

  public presentAuthMetadata(_authMetadata: AuthMetadata): AuthMetadata {
    return {};
  }
}
