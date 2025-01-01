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
  coreServices,
  createBackendModule,
} from '@devtools/backend-plugin-api';
import { scaffolderActionsExtensionPoint } from '@devtools/plugin-scaffolder-node/alpha';
import {
  createGithubActionsDispatchAction,
  createGithubAutolinksAction,
  createGithubDeployKeyAction,
  createGithubEnvironmentAction,
  createGithubIssuesLabelAction,
  createGithubRepoCreateAction,
  createGithubRepoPushAction,
  createGithubWebhookAction,
  createPublishGithubAction,
  createPublishGithubPullRequestAction,
  createGithubPagesEnableAction,
  createGithubBranchProtectionAction,
} from './actions';
import {
  DefaultGithubCredentialsProvider,
  ScmIntegrations,
} from '@devtools/integration';
import { CatalogClient } from '@devtools/catalog-client';

/**
 * @public
 * The GitHub Module for the Scaffolder Backend
 */
export const githubModule = createBackendModule({
  pluginId: 'scaffolder',
  moduleId: 'github',
  register({ registerInit }) {
    registerInit({
      deps: {
        scaffolder: scaffolderActionsExtensionPoint,
        config: coreServices.rootConfig,
        discovery: coreServices.discovery,
        auth: coreServices.auth,
      },
      async init({ scaffolder, config, discovery, auth }) {
        const integrations = ScmIntegrations.fromConfig(config);
        const githubCredentialsProvider =
          DefaultGithubCredentialsProvider.fromIntegrations(integrations);
        const catalogClient = new CatalogClient({
          discoveryApi: discovery,
        });

        scaffolder.addActions(
          createGithubActionsDispatchAction({
            integrations,
            githubCredentialsProvider,
          }),
          createGithubAutolinksAction({
            integrations,
            githubCredentialsProvider,
          }),
          createGithubDeployKeyAction({
            integrations,
          }),
          createGithubEnvironmentAction({
            integrations,
            catalogClient,
            auth,
          }),
          createGithubIssuesLabelAction({
            integrations,
            githubCredentialsProvider,
          }),
          createGithubRepoCreateAction({
            integrations,
            githubCredentialsProvider,
          }),
          createGithubRepoPushAction({ integrations, config }),
          createGithubWebhookAction({
            integrations,
            githubCredentialsProvider,
          }),
          createPublishGithubAction({
            integrations,
            config,
            githubCredentialsProvider,
          }),
          createPublishGithubPullRequestAction({
            integrations,
            githubCredentialsProvider,
            config,
          }),
          createGithubPagesEnableAction({
            integrations,
            githubCredentialsProvider,
          }),
          createGithubBranchProtectionAction({
            integrations,
          }),
        );
      },
    });
  },
});