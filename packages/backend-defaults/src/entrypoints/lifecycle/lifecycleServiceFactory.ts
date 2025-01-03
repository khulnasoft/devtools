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
  LifecycleService,
  LifecycleServiceShutdownHook,
  LifecycleServiceShutdownOptions,
  LifecycleServiceStartupHook,
  LifecycleServiceStartupOptions,
  LoggerService,
  PluginMetadataService,
  coreServices,
  createServiceFactory,
} from '@devtools/backend-plugin-api';

/** @internal */
export class BackendPluginLifecycleImpl implements LifecycleService {
  constructor(
    private readonly logger: LoggerService,
    private readonly pluginMetadata: PluginMetadataService,
  ) {}

  #hasStarted = false;
  #hasShutdown = false;
  #startupTasks: Array<{
    hook: LifecycleServiceStartupHook;
    options?: LifecycleServiceStartupOptions;
  }> = [];
  #shutdownTasks: Array<{
    hook: LifecycleServiceShutdownHook;
    options?: LifecycleServiceShutdownOptions;
  }> = [];

  addStartupHook(
    hook: LifecycleServiceStartupHook,
    options?: LifecycleServiceStartupOptions,
  ): void {
    if (this.#hasStarted) {
      throw new Error('Attempted to add startup hook after startup');
    }
    this.#startupTasks.push({ hook, options });
  }

  async startup(): Promise<void> {
    if (this.#hasStarted) {
      return;
    }
    this.#hasStarted = true;

    this.logger.debug(
      `Running ${this.#startupTasks.length} plugin startup tasks...`,
    );
    await Promise.all(
      this.#startupTasks.map(async ({ hook, options }) => {
        const logger = options?.logger ?? this.logger;
        try {
          await hook();
          logger.debug(`Plugin startup hook succeeded`);
        } catch (error) {
          logger.error(`Plugin startup hook failed, ${error}`);
        }
      }),
    );
  }

  addShutdownHook(
    hook: LifecycleServiceShutdownHook,
    options?: LifecycleServiceShutdownOptions,
  ): void {
    if (this.#hasShutdown) {
      throw new Error('Attempted to add shutdown hook after shutdown');
    }
    const plugin = this.pluginMetadata.getId();
    const logger = options?.logger?.child({ plugin }) ?? this.logger;
    this.#shutdownTasks.push({
      hook,
      options: {
        ...options,
        logger,
      },
    });
  }

  async shutdown(): Promise<void> {
    if (this.#hasShutdown) {
      return;
    }
    this.#hasShutdown = true;

    this.logger.debug(
      `Running ${this.#shutdownTasks.length} plugin shutdown tasks...`,
    );

    await Promise.all(
      this.#shutdownTasks.map(async ({ hook, options }) => {
        const logger = options?.logger ?? this.logger;
        try {
          await hook();
          logger.debug(`Plugin shutdown hook succeeded`);
        } catch (error) {
          logger.error('Plugin shutdown hook failed', error);
        }
      }),
    );
  }
}

/**
 * Registration of plugin startup and shutdown lifecycle hooks.
 *
 * See {@link @devtools/code-plugin-api#LifecycleService}
 * and {@link https://devtools.khulnasoft.com/docs/backend-system/core-services/lifecycle | the service docs}
 * for more information.
 *
 * @public
 */
export const lifecycleServiceFactory = createServiceFactory({
  service: coreServices.lifecycle,
  deps: {
    logger: coreServices.logger,
    pluginMetadata: coreServices.pluginMetadata,
  },
  async factory({ logger, pluginMetadata }) {
    return new BackendPluginLifecycleImpl(logger, pluginMetadata);
  },
});
