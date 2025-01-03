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
  createServiceFactory,
  coreServices,
} from '@devtools/backend-plugin-api';
import {
  WinstonLogger,
  WinstonLoggerOptions,
} from '@devtools/backend-defaults/rootLogger';
import { createConfigSecretEnumerator } from '@devtools/backend-defaults/rootConfig';
import { transports, format } from 'winston';
import { loadConfigSchema } from '@devtools/config-loader';
import { getPackages } from '@manypkg/get-packages';
import { dynamicPluginsSchemasServiceRef } from './schemas';

/**
 * @public
 */
export type DynamicPluginsRootLoggerFactoryOptions = Omit<
  WinstonLoggerOptions,
  'meta'
>;

const dynamicPluginsRootLoggerServiceFactoryWithOptions = (
  options?: DynamicPluginsRootLoggerFactoryOptions,
) =>
  createServiceFactory({
    service: coreServices.rootLogger,
    deps: {
      config: coreServices.rootConfig,
      schemas: dynamicPluginsSchemasServiceRef,
    },
    async factory({ config, schemas }) {
      const logger = WinstonLogger.create({
        level: process.env.LOG_LEVEL || 'info',
        format:
          process.env.NODE_ENV === 'production'
            ? format.json()
            : WinstonLogger.colorFormat(),
        transports: [new transports.Console()],
        ...options,
        meta: {
          service: 'devtools',
        },
      });

      const configSchema = await loadConfigSchema({
        dependencies: (
          await getPackages(process.cwd())
        ).packages.map(p => p.packageJson.name),
      });

      const secretEnumerator = await createConfigSecretEnumerator({
        logger,
        schema: (await schemas.addDynamicPluginsSchemas(configSchema)).schema,
      });
      logger.addRedactions(secretEnumerator(config));
      config.subscribe?.(() => logger.addRedactions(secretEnumerator(config)));

      return logger;
    },
  });

/**
 * @public
 * @deprecated Use {@link dynamicPluginsFeatureLoader} instead, which gathers all services and features required for dynamic plugins.
 */
export const dynamicPluginsRootLoggerServiceFactory = Object.assign(
  dynamicPluginsRootLoggerServiceFactoryWithOptions,
  dynamicPluginsRootLoggerServiceFactoryWithOptions(),
);
