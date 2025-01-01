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
  coreServices,
  createServiceFactory,
} from '@devtools/backend-plugin-api';
import { ConfigReader } from '@devtools/config';
import { DatabaseManager } from './DatabaseManager';

/**
 * Database access and management via `knex`.
 *
 * See {@link @devtools/code-plugin-api#DatabaseService}
 * and {@link https://devtools.khulnasoft.com/docs/backend-system/core-services/database | the service docs}
 * for more information.
 *
 * @public
 */
export const databaseServiceFactory = createServiceFactory({
  service: coreServices.database,
  deps: {
    config: coreServices.rootConfig,
    lifecycle: coreServices.lifecycle,
    logger: coreServices.logger,
    pluginMetadata: coreServices.pluginMetadata,
    rootLifecycle: coreServices.rootLifecycle,
    rootLogger: coreServices.rootLogger,
  },
  async createRootContext({ config, rootLifecycle, rootLogger }) {
    return config.getOptional('backend.database')
      ? DatabaseManager.fromConfig(config, { rootLifecycle, rootLogger })
      : DatabaseManager.fromConfig(
          new ConfigReader({
            backend: {
              database: { client: 'better-sqlite3', connection: ':memory:' },
            },
          }),
          { rootLifecycle, rootLogger },
        );
  },
  async factory({ pluginMetadata, lifecycle, logger }, databaseManager) {
    return databaseManager.forPlugin(pluginMetadata.getId(), {
      lifecycle,
      logger,
    });
  },
});
