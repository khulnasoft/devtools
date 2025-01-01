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

import { Backend, createSpecializedBackend } from '@devtools/backend-app-api';
import { authServiceFactory } from '@devtools/backend-defaults/auth';
import { cacheServiceFactory } from '@devtools/backend-defaults/cache';
import { databaseServiceFactory } from '@devtools/backend-defaults/database';
import { discoveryServiceFactory } from '@devtools/backend-defaults/discovery';
import { httpAuthServiceFactory } from '@devtools/backend-defaults/httpAuth';
import { httpRouterServiceFactory } from '@devtools/backend-defaults/httpRouter';
import { lifecycleServiceFactory } from '@devtools/backend-defaults/lifecycle';
import { loggerServiceFactory } from '@devtools/backend-defaults/logger';
import { permissionsServiceFactory } from '@devtools/backend-defaults/permissions';
import { rootConfigServiceFactory } from '@devtools/backend-defaults/rootConfig';
import { rootHealthServiceFactory } from '@devtools/backend-defaults/rootHealth';
import { rootHttpRouterServiceFactory } from '@devtools/backend-defaults/rootHttpRouter';
import { rootLifecycleServiceFactory } from '@devtools/backend-defaults/rootLifecycle';
import { rootLoggerServiceFactory } from '@devtools/backend-defaults/rootLogger';
import { schedulerServiceFactory } from '@devtools/backend-defaults/scheduler';
import { urlReaderServiceFactory } from '@devtools/backend-defaults/urlReader';
import { userInfoServiceFactory } from '@devtools/backend-defaults/userInfo';
import { eventsServiceFactory } from '@devtools/plugin-events-node';

export const defaultServiceFactories = [
  authServiceFactory,
  cacheServiceFactory,
  rootConfigServiceFactory,
  databaseServiceFactory,
  discoveryServiceFactory,
  httpAuthServiceFactory,
  httpRouterServiceFactory,
  lifecycleServiceFactory,
  loggerServiceFactory,
  permissionsServiceFactory,
  rootHealthServiceFactory,
  rootHttpRouterServiceFactory,
  rootLifecycleServiceFactory,
  rootLoggerServiceFactory,
  schedulerServiceFactory,
  userInfoServiceFactory,
  urlReaderServiceFactory,
  eventsServiceFactory,
];

/**
 * @public
 */
export function createBackend(): Backend {
  return createSpecializedBackend({ defaultServiceFactories });
}
