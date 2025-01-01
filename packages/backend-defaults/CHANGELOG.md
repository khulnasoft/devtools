# @devtools/backend-defaults

## 0.7.0-next.0

### Minor Changes

- ec547b8: Ensure that an error handler middleware exists at the end of each plugin `httpRouter` handler chain. This makes it so that exceptions thrown by plugin routes are caught and encoded in the standard error format.

  If you were using the standard `MiddlewareFactory` just to put an `error` middleware in you router, you can now remove that at your earliest convenience since it's redundant. If you have custom error handlers in your plugin router, those will continue to function as previously. If you were relying on thrown errors propagating all the way down to the root HTTP router, you will find that they no longer do that, and may want to hoist your error handling up to the plugin level instead.

### Patch Changes

- 575613f: Go back to using `node-fetch` for gitlab
- 8ecf8cb: Exclude `@devtools/backend-common` from schema collection if `@devtools/backend-defaults` is present
- 8379bf4: Remove usages of `PluginDatabaseManager` and `PluginEndpointDiscovery` and replace with their equivalent service types
- Updated dependencies
  - @devtools/backend-app-api@1.1.1-next.0
  - @devtools/config-loader@1.9.5-next.0
  - @devtools/plugin-permission-node@0.8.7-next.0
  - @devtools/plugin-auth-node@0.5.6-next.0
  - @devtools/backend-dev-utils@0.1.5
  - @devtools/backend-plugin-api@1.1.1-next.0
  - @devtools/cli-common@0.1.15
  - @devtools/cli-node@0.2.11
  - @devtools/config@1.3.1
  - @devtools/errors@1.2.6
  - @devtools/integration@1.16.0
  - @devtools/integration-aws-node@0.1.14
  - @devtools/types@1.2.0
  - @devtools/plugin-events-node@0.4.7-next.0

## 0.6.0

### Minor Changes

- fd5d337: Added a new `backend.health.headers` configuration that can be used to set additional headers to include in health check responses.

  **BREAKING CONSUMERS**: As part of this change the `createHealthRouter` function exported from `@devtools/backend-defaults/rootHttpRouter` now requires the root config service to be passed through the `config` option.

- 3f34ea9: Throttles Bitbucket Server API calls
- de6f280: **BREAKING** Upgraded @keyv/redis and keyv packages to resolve a bug related to incorrect resolution of cache keys.

  This is a breaking change for clients using the `redis` store for cache with `useRedisSets` option set to false since cache keys will be calculated differently (without the sets:namespace: prefix). For clients with default configuration (or useRedisSets set to false) the cache keys will stay the same, but since @keyv/redis library no longer supports redis sets they won't be utilised anymore.

  If you were using `useRedisSets` option in configuration make sure to remove it from `app-config.yaml`:

  ```diff
  backend:
    cache:
      store: redis
      connection: redis://user:pass@cache.example.com:6379
  -   useRedisSets: false
  ```

- 29180ec: **BREAKING PRODUCERS**: The `LifecycleMiddlewareOptions.startupRequestPauseTimeout` has been removed. Use the `backend.lifecycle.startupRequestPauseTimeout` setting in your `app-config.yaml` file to customize how the `createLifecycleMiddleware` function should behave. Also the root config service is required as an option when calling the `createLifecycleMiddleware` function:

  ```diff
  - createLifecycleMiddleware({ lifecycle, startupRequestPauseTimeout })
  + createLifecycleMiddleware({ config,  lifecycle })
  ```

- 277092a: Implemented `AzureBlobStorageUrlReader` to read from the url of committed location from the entity provider
- 18a2c00: All middleware used by the default `coreServices.http` is now exported for use by custom implementations.

### Patch Changes

- dfc8b41: Updated dependency `@opentelemetry/api` to `^1.9.0`.
- 5b1e68c: Immediately close all connections when shutting down in local development.
- 8863b38: Export `PluginTokenHandler` and `pluginTokenHandlerDecoratorServiceRef` to allow for custom decoration of the plugin token handler without having to re-implement the entire handler.
- 29180ec: Fix server response time by moving the lifecycle startup hooks back to the plugin lifecycle service.
- 57e0b11: The user and plugin token verification in the default `AuthService` implementation will no longer forward verification errors to the caller, and instead log them as warnings.
- 97c6837: Export `DefaultHttpAuthService` to allow for custom token extraction logic.
- e5255f1: Log request and response metadata so it can be used for filtering log messages.
  The format of the request date was also changed from `clf` to `utc`.
- 57e0b11: The default `authServiceFactory` now correctly depends on the plugin scoped `Logger` services rather than the root scoped one.
- fe87fbf: Add task metrics as two gauges that track the last start and end timestamps as epoch seconds.
- 1ac6b72: Support `connection.type: cloudsql` in database client for usage with `@google-cloud/cloud-sql-connector` and `iam` auth
- 0e9c9fa: Implements the `DefaultRootLifecycleService.addBeforeShutdownHook` method, and updates `DefaultRootHttpRouterService` and `DefaultRootHealthService` to listen to that event to stop accepting traffic and close service connections.
- d0cbd82: Remove use of the `stoppable` library on the `DefaultRootHttpRouterService` as Node's native http server [close](https://nodejs.org/api/http.html#serverclosecallback) method already drains requests.
- 5c9cc05: Use native fetch instead of node-fetch
- cf627c6: Fixed an issue in the WinstonLogger where Errors thrown and given to logger.error with field values that could not be cast to a string would throw a TypeError
- Updated dependencies
  - @devtools/integration@1.16.0
  - @devtools/plugin-auth-node@0.5.5
  - @devtools/backend-plugin-api@1.1.0
  - @devtools/backend-app-api@1.1.0
  - @devtools/plugin-events-node@0.4.6
  - @devtools/cli-node@0.2.11
  - @devtools/plugin-permission-node@0.8.6
  - @devtools/config-loader@1.9.3
  - @devtools/errors@1.2.6
  - @devtools/backend-dev-utils@0.1.5
  - @devtools/cli-common@0.1.15
  - @devtools/config@1.3.1
  - @devtools/integration-aws-node@0.1.14
  - @devtools/types@1.2.0

## 0.6.0-next.2

### Minor Changes

- fd5d337: Added a new `backend.health.headers` configuration that can be used to set additional headers to include in health check responses.

  **BREAKING CONSUMERS**: As part of this change the `createHealthRouter` function exported from `@devtools/backend-defaults/rootHttpRouter` now requires the root config service to be passed through the `config` option.

- 3f34ea9: Throttles Bitbucket Server API calls

### Patch Changes

- dfc8b41: Updated dependency `@opentelemetry/api` to `^1.9.0`.
- 57e0b11: The user and plugin token verification in the default `AuthService` implementation will no longer forward verification errors to the caller, and instead log them as warnings.
- 57e0b11: The default `authServiceFactory` now correctly depends on the plugin scoped `Logger` services rather than the root scoped one.
- 0e9c9fa: Implements the `DefaultRootLifecycleService.addBeforeShutdownHook` method, and updates `DefaultRootHttpRouterService` and `DefaultRootHealthService` to listen to that event to stop accepting traffic and close service connections.
- d0cbd82: Remove use of the `stoppable` library on the `DefaultRootHttpRouterService` as Node's native http server [close](https://nodejs.org/api/http.html#serverclosecallback) method already drains requests.
  Also, we pass a new `lifecycleMiddleware` to the `rootHttpRouterServiceFactory` configure function that must be called manually if you don't call `applyDefaults`.
- Updated dependencies
  - @devtools/backend-plugin-api@1.1.0-next.2
  - @devtools/backend-app-api@1.1.0-next.2
  - @devtools/plugin-permission-node@0.8.6-next.2
  - @devtools/errors@1.2.6-next.0
  - @devtools/plugin-auth-node@0.5.5-next.2
  - @devtools/plugin-events-node@0.4.6-next.2
  - @devtools/cli-node@0.2.11-next.1
  - @devtools/config-loader@1.9.3-next.1
  - @devtools/backend-dev-utils@0.1.5
  - @devtools/cli-common@0.1.15
  - @devtools/config@1.3.1-next.0
  - @devtools/integration@1.16.0-next.1
  - @devtools/integration-aws-node@0.1.14-next.0
  - @devtools/types@1.2.0

## 0.6.0-next.1

### Patch Changes

- fe87fbf: Add task metrics as two gauges that track the last start and end timestamps as epoch seconds.
- 1ac6b72: Support `connection.type: cloudsql` in database client for usage with `@google-cloud/cloud-sql-connector` and `iam` auth
- 5c9cc05: Use native fetch instead of node-fetch
- cf627c6: Fixed an issue in the WinstonLogger where Errors thrown and given to logger.error with field values that could not be cast to a string would throw a TypeError
- Updated dependencies
  - @devtools/plugin-auth-node@0.5.5-next.1
  - @devtools/backend-app-api@1.1.0-next.1
  - @devtools/config-loader@1.9.3-next.0
  - @devtools/backend-plugin-api@1.1.0-next.1
  - @devtools/plugin-permission-node@0.8.6-next.1
  - @devtools/backend-dev-utils@0.1.5
  - @devtools/cli-common@0.1.15
  - @devtools/cli-node@0.2.11-next.0
  - @devtools/config@1.3.0
  - @devtools/errors@1.2.5
  - @devtools/integration@1.16.0-next.0
  - @devtools/integration-aws-node@0.1.13
  - @devtools/types@1.2.0
  - @devtools/plugin-events-node@0.4.6-next.1

## 0.6.0-next.0

### Minor Changes

- de6f280: **BREAKING** Upgraded @keyv/redis and keyv packages to resolve a bug related to incorrect resolution of cache keys.

  This is a breaking change for clients using the `redis` store for cache with `useRedisSets` option set to false since cache keys will be calculated differently (without the sets:namespace: prefix). For clients with default configuration (or useRedisSets set to false) the cache keys will stay the same, but since @keyv/redis library no longer supports redis sets they won't be utilised anymore.

  If you were using `useRedisSets` option in configuration make sure to remove it from `app-config.yaml`:

  ```diff
  backend:
    cache:
      store: redis
      connection: redis://user:pass@cache.example.com:6379
  -   useRedisSets: false
  ```

- 277092a: Implemented `AzureBlobStorageUrlReader` to read from the url of committed location from the entity provider
- 18a2c00: All middleware used by the default `coreServices.http` is now exported for use by custom implementations.

### Patch Changes

- 8863b38: Export `PluginTokenHandler` and `pluginTokenHandlerDecoratorServiceRef` to allow for custom decoration of the plugin token handler without having to re-implement the entire handler.
- 97c6837: Export `DefaultHttpAuthService` to allow for custom token extraction logic.
- e5255f1: Log request and response metadata so it can be used for filtering log messages.
  The format of the request date was also changed from `clf` to `utc`.
- Updated dependencies
  - @devtools/integration@1.16.0-next.0
  - @devtools/backend-plugin-api@1.0.3-next.0
  - @devtools/backend-app-api@1.0.3-next.0
  - @devtools/plugin-events-node@0.4.6-next.0
  - @devtools/cli-node@0.2.11-next.0
  - @devtools/plugin-auth-node@0.5.5-next.0
  - @devtools/backend-dev-utils@0.1.5
  - @devtools/cli-common@0.1.15
  - @devtools/config@1.3.0
  - @devtools/config-loader@1.9.2
  - @devtools/errors@1.2.5
  - @devtools/integration-aws-node@0.1.13
  - @devtools/types@1.2.0
  - @devtools/plugin-permission-node@0.8.6-next.0

## 0.5.3

### Patch Changes

- bf306cb: Removed dependency `@devtools/backend-common`.
- e30bb46: Disabling database migrations now correctly uses the `backend.default.skipMigrations` config value.
- d52d7f9: Support ISO and ms string forms of durations in config too
- f6eaec2: Link to proper package in `rootLoggerServiceFactory` doc string.
- ecf6b39: Use `node-fetch` instead of native fetch, as per https://devtools.khulnasoft.com/docs/architecture-decisions/adrs-adr013
- 4e58bc7: Upgrade to uuid v11 internally
- Updated dependencies
  - @devtools/config@1.3.0
  - @devtools/plugin-events-node@0.4.5
  - @devtools/types@1.2.0
  - @devtools/integration-aws-node@0.1.13
  - @devtools/config-loader@1.9.2
  - @devtools/plugin-auth-node@0.5.4
  - @devtools/backend-plugin-api@1.0.2
  - @devtools/backend-app-api@1.0.2
  - @devtools/cli-common@0.1.15
  - @devtools/backend-dev-utils@0.1.5
  - @devtools/cli-node@0.2.10
  - @devtools/errors@1.2.5
  - @devtools/integration@1.15.2
  - @devtools/plugin-permission-node@0.8.5

## 0.5.3-next.3

### Patch Changes

- ecf6b39: Use `node-fetch` instead of native fetch, as per https://devtools.khulnasoft.com/docs/architecture-decisions/adrs-adr013
- Updated dependencies
  - @devtools/integration-aws-node@0.1.13-next.0
  - @devtools/plugin-events-node@0.4.5-next.3
  - @devtools/backend-app-api@1.0.2-next.2
  - @devtools/backend-dev-utils@0.1.5
  - @devtools/backend-plugin-api@1.0.2-next.2
  - @devtools/cli-common@0.1.15-next.0
  - @devtools/cli-node@0.2.10-next.0
  - @devtools/config@1.2.0
  - @devtools/config-loader@1.9.2-next.0
  - @devtools/errors@1.2.4
  - @devtools/integration@1.15.1
  - @devtools/types@1.1.1
  - @devtools/plugin-auth-node@0.5.4-next.2
  - @devtools/plugin-permission-node@0.8.5-next.2

## 0.5.3-next.2

### Patch Changes

- e30bb46: Disabling database migrations now correctly uses the `backend.default.skipMigrations` config value.
- Updated dependencies
  - @devtools/plugin-events-node@0.4.5-next.2
  - @devtools/plugin-auth-node@0.5.4-next.2
  - @devtools/backend-app-api@1.0.2-next.2
  - @devtools/backend-dev-utils@0.1.5
  - @devtools/backend-plugin-api@1.0.2-next.2
  - @devtools/cli-common@0.1.15-next.0
  - @devtools/cli-node@0.2.10-next.0
  - @devtools/config@1.2.0
  - @devtools/config-loader@1.9.2-next.0
  - @devtools/errors@1.2.4
  - @devtools/integration@1.15.1
  - @devtools/integration-aws-node@0.1.12
  - @devtools/types@1.1.1
  - @devtools/plugin-permission-node@0.8.5-next.2

## 0.5.3-next.1

### Patch Changes

- Updated dependencies
  - @devtools/cli-common@0.1.15-next.0
  - @devtools/backend-app-api@1.0.2-next.1
  - @devtools/backend-dev-utils@0.1.5
  - @devtools/backend-plugin-api@1.0.2-next.1
  - @devtools/cli-node@0.2.10-next.0
  - @devtools/config@1.2.0
  - @devtools/config-loader@1.9.2-next.0
  - @devtools/errors@1.2.4
  - @devtools/integration@1.15.1
  - @devtools/integration-aws-node@0.1.12
  - @devtools/types@1.1.1
  - @devtools/plugin-auth-node@0.5.4-next.1
  - @devtools/plugin-events-node@0.4.4-next.1
  - @devtools/plugin-permission-node@0.8.5-next.1

## 0.5.3-next.0

### Patch Changes

- f6eaec2: Link to proper package in `rootLoggerServiceFactory` doc string.
- Updated dependencies
  - @devtools/plugin-events-node@0.4.3-next.0
  - @devtools/plugin-auth-node@0.5.4-next.0
  - @devtools/backend-app-api@1.0.2-next.0
  - @devtools/backend-dev-utils@0.1.5
  - @devtools/backend-plugin-api@1.0.2-next.0
  - @devtools/cli-common@0.1.14
  - @devtools/cli-node@0.2.9
  - @devtools/config@1.2.0
  - @devtools/config-loader@1.9.1
  - @devtools/errors@1.2.4
  - @devtools/integration@1.15.1
  - @devtools/integration-aws-node@0.1.12
  - @devtools/types@1.1.1
  - @devtools/plugin-permission-node@0.8.5-next.0

## 0.5.1

### Patch Changes

- 4b60e0c: Small tweaks to API reports to make them valid
- 321a994: Sensitive internal fields on `DevtoolsCredentials` objects are now defined as read-only properties in order to minimize risk of leakage.
- ffd1f4a: Plugin lifecycle shutdown hooks are now performed before root lifecycle shutdown hooks.
- ffd1f4a: The database manager now attempts to close any database connections in a root lifecycle shutdown hook.
- e36d12f: The task scheduler now attempts to abort any tasks if it detects that Devtools is being shut down.
- fd6e6f4: build(deps): bump `cookie` from 0.6.0 to 0.7.0
- 094eaa3: Remove references to in-repo backend-common
- 720a2f9: Updated dependency `git-url-parse` to `^15.0.0`.
- 920004b: Updating error message for getProjectId when fetching Gitlab project from its url to be more accurate
- d7b44f0: Fix for backend shutdown hanging during local development due to SQLite connection shutdown never resolving.
- 8fd7deb: The default root HTTP service implementation will now pretty-print JSON responses in development.

  If you are overriding the `rootHttpRouterServiceFactory` with a `configure` function that doesn't call `applyDefaults`, you can introduce this functionality by adding the following snippet inside `configure`:

  ```ts
  if (process.env.NODE_ENV === 'development') {
    app.set('json spaces', 2);
  }
  ```

- Updated dependencies
  - @devtools/cli-node@0.2.9
  - @devtools/backend-app-api@1.0.1
  - @devtools/plugin-auth-node@0.5.3
  - @devtools/plugin-permission-node@0.8.4
  - @devtools/plugin-events-node@0.4.1
  - @devtools/integration@1.15.1
  - @devtools/backend-dev-utils@0.1.5
  - @devtools/backend-plugin-api@1.0.1
  - @devtools/cli-common@0.1.14
  - @devtools/config@1.2.0
  - @devtools/config-loader@1.9.1
  - @devtools/errors@1.2.4
  - @devtools/integration-aws-node@0.1.12
  - @devtools/types@1.1.1

## 0.5.1-next.2

### Patch Changes

- ffd1f4a: Plugin lifecycle shutdown hooks are now performed before root lifecycle shutdown hooks.
- ffd1f4a: The database manager now attempts to close any database connections in a root lifecycle shutdown hook.
- e36d12f: The task scheduler now attempts to abort any tasks if it detects that Devtools is being shut down.
- fd6e6f4: build(deps): bump `cookie` from 0.6.0 to 0.7.0
- 720a2f9: Updated dependency `git-url-parse` to `^15.0.0`.
- Updated dependencies
  - @devtools/cli-node@0.2.9-next.0
  - @devtools/backend-app-api@1.0.1-next.1
  - @devtools/plugin-auth-node@0.5.3-next.1
  - @devtools/integration@1.15.1-next.1
  - @devtools/backend-dev-utils@0.1.5
  - @devtools/backend-plugin-api@1.0.1-next.1
  - @devtools/cli-common@0.1.14
  - @devtools/config@1.2.0
  - @devtools/config-loader@1.9.1
  - @devtools/errors@1.2.4
  - @devtools/integration-aws-node@0.1.12
  - @devtools/types@1.1.1
  - @devtools/plugin-events-node@0.4.1-next.1
  - @devtools/plugin-permission-node@0.8.4-next.1

## 0.5.1-next.1

### Patch Changes

- 920004b: Updating error message for getProjectId when fetching Gitlab project from its url to be more accurate
- Updated dependencies
  - @devtools/integration@1.15.1-next.0
  - @devtools/backend-app-api@1.0.1-next.0
  - @devtools/backend-dev-utils@0.1.5
  - @devtools/backend-plugin-api@1.0.1-next.0
  - @devtools/cli-common@0.1.14
  - @devtools/cli-node@0.2.8
  - @devtools/config@1.2.0
  - @devtools/config-loader@1.9.1
  - @devtools/errors@1.2.4
  - @devtools/integration-aws-node@0.1.12
  - @devtools/types@1.1.1
  - @devtools/plugin-auth-node@0.5.3-next.0
  - @devtools/plugin-events-node@0.4.1-next.0
  - @devtools/plugin-permission-node@0.8.4-next.0

## 0.5.1-next.0

### Patch Changes

- 094eaa3: Remove references to in-repo backend-common
- Updated dependencies
  - @devtools/backend-app-api@1.0.1-next.0
  - @devtools/plugin-permission-node@0.8.4-next.0
  - @devtools/plugin-events-node@0.4.1-next.0
  - @devtools/plugin-auth-node@0.5.3-next.0
  - @devtools/backend-dev-utils@0.1.5
  - @devtools/backend-plugin-api@1.0.1-next.0
  - @devtools/cli-common@0.1.14
  - @devtools/cli-node@0.2.8
  - @devtools/config@1.2.0
  - @devtools/config-loader@1.9.1
  - @devtools/errors@1.2.4
  - @devtools/integration@1.15.0
  - @devtools/integration-aws-node@0.1.12
  - @devtools/types@1.1.1

## 0.5.0

### Minor Changes

- a4bac3c: **BREAKING**: You can no longer supply a `basePath` option to the host discovery implementation. In the new backend system, the ability to choose this path has been removed anyway at the plugin router level.
- 359fcd7: **BREAKING**: The backwards compatibility with plugins using legacy auth through the token manager service has been removed. This means that instead of falling back to using the old token manager, requests towards plugins that don't support the new auth system will simply fail. Please make sure that all plugins in your deployment are hosted within a backend instance from the new backend system.
- baeef13: **BREAKING** Removed `createLifecycleMiddleware` and `LifecycleMiddlewareOptions` to clean up API surface. These exports have no external usage and do not provide value in its current form. If you were using these exports, please reach out to the maintainers to discuss your use case.
- d425fc4: **BREAKING**: The return values from `createBackendPlugin`, `createBackendModule`, and `createServiceFactory` are now simply `BackendFeature` and `ServiceFactory`, instead of the previously deprecated form of a function that returns them. For this reason, `createServiceFactory` also no longer accepts the callback form where you provide direct options to the service. This also affects all `coreServices.*` service refs.

  This may in particular affect tests; if you were effectively doing `createBackendModule({...})()` (note the parentheses), you can now remove those extra parentheses at the end. You may encounter cases of this in your `packages/backend/src/index.ts` too, where you add plugins, modules, and services. If you were using `createServiceFactory` with a function as its argument for the purpose of passing in options, this pattern has been deprecated for a while and is no longer supported. You may want to explore the new multiton patterns to achieve your goals, or moving settings to app-config.

  As part of this change, the `IdentityFactoryOptions` type was removed, and can no longer be used to tweak that service. The identity service was also deprecated some time ago, and you will want to [migrate to the new auth system](https://devtools.khulnasoft.com/docs/tutorials/auth-service-migration) if you still rely on it.

- 19ff127: **BREAKING**: The default backend instance no longer provides implementations for the identity and token manager services, which have been removed from `@devtools/backend-plugin-api`.

  If you rely on plugins that still require these services, you can add them to your own backend by re-creating the service reference and factory.

  The following can be used to implement the identity service:

  ```ts
  import {
    coreServices,
    createServiceFactory,
    createServiceRef,
  } from '@devtools/backend-plugin-api';
  import {
    DefaultIdentityClient,
    IdentityApi,
  } from '@devtools/plugin-auth-node';

  backend.add(
    createServiceFactory({
      service: createServiceRef<IdentityApi>({ id: 'core.identity' }),
      deps: {
        discovery: coreServices.discovery,
      },
      async factory({ discovery }) {
        return DefaultIdentityClient.create({ discovery });
      },
    }),
  );
  ```

  The following can be used to implement the token manager service:

  ```ts
  import { ServerTokenManager, TokenManager } from '@devtools/backend-common';
  import { createBackend } from '@devtools/backend-defaults';
  import {
    coreServices,
    createServiceFactory,
    createServiceRef,
  } from '@devtools/backend-plugin-api';

  backend.add(
    createServiceFactory({
      service: createServiceRef<TokenManager>({ id: 'core.tokenManager' }),
      deps: {
        config: coreServices.rootConfig,
        logger: coreServices.rootLogger,
      },
      createRootContext({ config, logger }) {
        return ServerTokenManager.fromConfig(config, {
          logger,
          allowDisabledTokenManager: true,
        });
      },
      async factory(_deps, tokenManager) {
        return tokenManager;
      },
    }),
  );
  ```

- 055b75b: **BREAKING**: Simplifications and cleanup as part of the Backend System 1.0 work.

  For the `/database` subpath exports:

  - The deprecated `dropDatabase` function has now been removed, without replacement.
  - The deprecated `LegacyRootDatabaseService` type has now been removed.
  - The return type from `DatabaseManager.forPlugin` is now directly a `DatabaseService`, as arguably expected.
  - `DatabaseManager.forPlugin` now requires the `deps` argument, with the logger and lifecycle services.

  For the `/cache` subpath exports:

  - The `PluginCacheManager` type has been removed. You can still import it from `@devtools/backend-common`, but it's deprecated there, and you should move off of that package by migrating fully to the new backend system.
  - Accordingly, `CacheManager.forPlugin` immediately returns a `CacheService` instead of a `PluginCacheManager`. The outcome of this is that you no longer need to make the extra `.getClient()` call. The old `CacheManager` with the old behavior still exists on `@devtools/backend-common`, but the above recommendations apply.

### Patch Changes

- 213664e: Fixed an issue where the `useRedisSets` configuration for the cache service would have no effect.
- 6ed9264: chore(deps): bump `path-to-regexp` from 6.2.2 to 8.0.0
- 622360e: Move down the discovery config to be in the root
- 7f779c7: `auth.externalAccess` should be optional in the config schema
- fe6fd8c: Accept `ConfigService` instead of `Config` in constructors/factories
- 82539fe: Updated dependency `archiver` to `^7.0.0`.
- c2b63ab: Updated dependency `supertest` to `^7.0.0`.
- 5705424: Wrap scheduled tasks from the scheduler core service now in OpenTelemetry spans
- 7a72ec8: Exports the `discoveryFeatureLoader` as a replacement for the deprecated `featureDiscoveryService`.
  The `discoveryFeatureLoader` is a new backend system [feature loader](https://devtools.khulnasoft.com/docs/backend-system/architecture/feature-loaders/) that discovers backend features from the current `package.json` and its dependencies.
  Here is an example using the `discoveryFeatureLoader` loader in a new backend instance:

  ```ts
  import { createBackend } from '@devtools/backend-defaults';
  import { discoveryFeatureLoader } from '@devtools/backend-defaults';
  //...

  const backend = createBackend();
  //...
  backend.add(discoveryFeatureLoader);
  //...
  backend.start();
  ```

- b2a329d: Properly indent the config schema
- 66dbf0a: Allow the cache service to accept the human duration format for TTL
- 5a8fcb4: Added the option to skip database migrations by setting `skipMigrations: true` in config. This can be done globally in the database config or by plugin id.
- 0b2a402: Updates to the config schema to match reality
- Updated dependencies
  - @devtools/backend-common@0.25.0
  - @devtools/backend-app-api@1.0.0
  - @devtools/backend-plugin-api@1.0.0
  - @devtools/plugin-auth-node@0.5.2
  - @devtools/cli-node@0.2.8
  - @devtools/plugin-permission-node@0.8.3
  - @devtools/integration@1.15.0
  - @devtools/config-loader@1.9.1
  - @devtools/plugin-events-node@0.4.0
  - @devtools/backend-dev-utils@0.1.5
  - @devtools/cli-common@0.1.14
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/integration-aws-node@0.1.12
  - @devtools/types@1.1.1

## 0.5.0-next.2

### Minor Changes

- baeef13: **BREAKING** Removed `createLifecycleMiddleware` and `LifecycleMiddlewareOptions` to clean up API surface. These exports have no external usage and do not provide value in its current form. If you were using these exports, please reach out to the maintainers to discuss your use case.

### Patch Changes

- 6ed9264: chore(deps): bump `path-to-regexp` from 6.2.2 to 8.0.0
- c2b63ab: Updated dependency `supertest` to `^7.0.0`.
- Updated dependencies
  - @devtools/backend-app-api@1.0.0-next.2
  - @devtools/backend-common@0.25.0-next.2
  - @devtools/plugin-auth-node@0.5.2-next.2
  - @devtools/backend-plugin-api@1.0.0-next.2
  - @devtools/cli-node@0.2.8-next.0
  - @devtools/integration@1.15.0-next.0
  - @devtools/config-loader@1.9.1-next.0
  - @devtools/plugin-permission-node@0.8.3-next.2
  - @devtools/backend-dev-utils@0.1.5
  - @devtools/cli-common@0.1.14
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/integration-aws-node@0.1.12
  - @devtools/types@1.1.1
  - @devtools/plugin-events-node@0.4.0-next.2

## 0.5.0-next.1

### Minor Changes

- a4bac3c: **BREAKING**: You can no longer supply a `basePath` option to the host discovery implementation. In the new backend system, the ability to choose this path has been removed anyway at the plugin router level.
- 055b75b: **BREAKING**: Simplifications and cleanup as part of the Backend System 1.0 work.

  For the `/database` subpath exports:

  - The deprecated `dropDatabase` function has now been removed, without replacement.
  - The deprecated `LegacyRootDatabaseService` type has now been removed.
  - The return type from `DatabaseManager.forPlugin` is now directly a `DatabaseService`, as arguably expected.
  - `DatabaseManager.forPlugin` now requires the `deps` argument, with the logger and lifecycle services.

  For the `/cache` subpath exports:

  - The `PluginCacheManager` type has been removed. You can still import it from `@devtools/backend-common`, but it's deprecated there, and you should move off of that package by migrating fully to the new backend system.
  - Accordingly, `CacheManager.forPlugin` immediately returns a `CacheService` instead of a `PluginCacheManager`. The outcome of this is that you no longer need to make the extra `.getClient()` call. The old `CacheManager` with the old behavior still exists on `@devtools/backend-common`, but the above recommendations apply.

### Patch Changes

- 622360e: Move down the discovery config to be in the root
- fe6fd8c: Accept `ConfigService` instead of `Config` in constructors/factories
- 5705424: Wrap scheduled tasks from the scheduler core service now in OpenTelemetry spans
- b2a329d: Properly indent the config schema
- Updated dependencies
  - @devtools/backend-common@0.25.0-next.1
  - @devtools/plugin-auth-node@0.5.2-next.1
  - @devtools/backend-app-api@0.10.0-next.1
  - @devtools/backend-dev-utils@0.1.5
  - @devtools/backend-plugin-api@0.9.0-next.1
  - @devtools/cli-common@0.1.14
  - @devtools/cli-node@0.2.7
  - @devtools/config@1.2.0
  - @devtools/config-loader@1.9.0
  - @devtools/errors@1.2.4
  - @devtools/integration@1.14.0
  - @devtools/integration-aws-node@0.1.12
  - @devtools/types@1.1.1
  - @devtools/plugin-events-node@0.4.0-next.1
  - @devtools/plugin-permission-node@0.8.3-next.1

## 0.5.0-next.0

### Minor Changes

- 359fcd7: **BREAKING**: The backwards compatibility with plugins using legacy auth through the token manager service has been removed. This means that instead of falling back to using the old token manager, requests towards plugins that don't support the new auth system will simply fail. Please make sure that all plugins in your deployment are hosted within a backend instance from the new backend system.
- d425fc4: **BREAKING**: The return values from `createBackendPlugin`, `createBackendModule`, and `createServiceFactory` are now simply `BackendFeature` and `ServiceFactory`, instead of the previously deprecated form of a function that returns them. For this reason, `createServiceFactory` also no longer accepts the callback form where you provide direct options to the service. This also affects all `coreServices.*` service refs.

  This may in particular affect tests; if you were effectively doing `createBackendModule({...})()` (note the parentheses), you can now remove those extra parentheses at the end. You may encounter cases of this in your `packages/backend/src/index.ts` too, where you add plugins, modules, and services. If you were using `createServiceFactory` with a function as its argument for the purpose of passing in options, this pattern has been deprecated for a while and is no longer supported. You may want to explore the new multiton patterns to achieve your goals, or moving settings to app-config.

  As part of this change, the `IdentityFactoryOptions` type was removed, and can no longer be used to tweak that service. The identity service was also deprecated some time ago, and you will want to [migrate to the new auth system](https://devtools.khulnasoft.com/docs/tutorials/auth-service-migration) if you still rely on it.

- 19ff127: **BREAKING**: The default backend instance no longer provides implementations for the identity and token manager services, which have been removed from `@devtools/backend-plugin-api`.

  If you rely on plugins that still require these services, you can add them to your own backend by re-creating the service reference and factory.

  The following can be used to implement the identity service:

  ```ts
  import {
    coreServices,
    createServiceFactory,
    createServiceRef,
  } from '@devtools/backend-plugin-api';
  import {
    DefaultIdentityClient,
    IdentityApi,
  } from '@devtools/plugin-auth-node';

  backend.add(
    createServiceFactory({
      service: createServiceRef<IdentityApi>({ id: 'core.identity' }),
      deps: {
        discovery: coreServices.discovery,
      },
      async factory({ discovery }) {
        return DefaultIdentityClient.create({ discovery });
      },
    }),
  );
  ```

  The following can be used to implement the token manager service:

  ```ts
  import { ServerTokenManager, TokenManager } from '@devtools/backend-common';
  import { createBackend } from '@devtools/backend-defaults';
  import {
    coreServices,
    createServiceFactory,
    createServiceRef,
  } from '@devtools/backend-plugin-api';

  backend.add(
    createServiceFactory({
      service: createServiceRef<TokenManager>({ id: 'core.tokenManager' }),
      deps: {
        config: coreServices.rootConfig,
        logger: coreServices.rootLogger,
      },
      createRootContext({ config, logger }) {
        return ServerTokenManager.fromConfig(config, {
          logger,
          allowDisabledTokenManager: true,
        });
      },
      async factory(_deps, tokenManager) {
        return tokenManager;
      },
    }),
  );
  ```

### Patch Changes

- 7f779c7: `auth.externalAccess` should be optional in the config schema
- 7a72ec8: Exports the `discoveryFeatureLoader` as a replacement for the deprecated `featureDiscoveryService`.
  The `discoveryFeatureLoader` is a new backend system [feature loader](https://devtools.khulnasoft.com/docs/backend-system/architecture/feature-loaders/) that discovers backend features from the current `package.json` and its dependencies.
  Here is an example using the `discoveryFeatureLoader` loader in a new backend instance:

  ```ts
  import { createBackend } from '@devtools/backend-defaults';
  import { discoveryFeatureLoader } from '@devtools/backend-defaults';
  //...

  const backend = createBackend();
  //...
  backend.add(discoveryFeatureLoader);
  //...
  backend.start();
  ```

- 66dbf0a: Allow the cache service to accept the human duration format for TTL
- 5a8fcb4: Added the option to skip database migrations by setting `skipMigrations: true` in config. This can be done globally in the database config or by plugin id.
- 0b2a402: Updates to the config schema to match reality
- Updated dependencies
  - @devtools/backend-app-api@0.10.0-next.0
  - @devtools/backend-plugin-api@0.9.0-next.0
  - @devtools/plugin-permission-node@0.8.3-next.0
  - @devtools/backend-common@0.25.0-next.0
  - @devtools/plugin-events-node@0.4.0-next.0
  - @devtools/plugin-auth-node@0.5.2-next.0
  - @devtools/backend-dev-utils@0.1.5
  - @devtools/cli-common@0.1.14
  - @devtools/cli-node@0.2.7
  - @devtools/config@1.2.0
  - @devtools/config-loader@1.9.0
  - @devtools/errors@1.2.4
  - @devtools/integration@1.14.0
  - @devtools/integration-aws-node@0.1.12
  - @devtools/types@1.1.1

## 0.4.2

### Patch Changes

- 0d16b52: Add access restrictions to the JWKS external access method config schema
- 93095ee: Make sure node-fetch is version 2.7.0 or greater
- 3b429fb: Added deprecation warning to urge users to perform the auth service migration or implement their own token manager service.
  See https://devtools.khulnasoft.com/docs/tutorials/auth-service-migration for more information.
- 7681b17: update the `morgan` middleware to use a custom format to prevent PII from being logged
- 4e79d19: The `createHealthRouter` utility that allows you to create a health check router is now exported via `@devtools/backend-defaults/rootHttpRouter`.
- ba9abf4: The `SchedulerService` now allows tasks with `frequency: { trigger: 'manual' }`. This means that the task will not be scheduled, but rather run only when manually triggered with `SchedulerService.triggerTask`.
- 78c1329: Updated `GitlabUrlReader.readUrl` and `GitlabUrlReader.readTree` to accept a user-provided token, supporting both bearer and private tokens.
- 8e967da: Fixed the routing of the new health check service, the health endpoints should now properly be available at `/.devtools/health/v1/readiness` and `/.devtools/health/v1/liveness`.
- 7c5f3b0: Update the `UrlReader` service to depends on multiple instances of `UrlReaderFactoryProvider` service.
- 81f930a: use formatted query to prevent chance of SQL-injection
- 1d5f298: Avoid excessive numbers of error listeners on cache clients
- Updated dependencies
  - @devtools/backend-app-api@0.9.0
  - @devtools/backend-plugin-api@0.8.0
  - @devtools/backend-common@0.24.0
  - @devtools/config-loader@1.9.0
  - @devtools/plugin-auth-node@0.5.0
  - @devtools/plugin-permission-node@0.8.1
  - @devtools/backend-dev-utils@0.1.5
  - @devtools/integration@1.14.0
  - @devtools/cli-common@0.1.14
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/integration-aws-node@0.1.12
  - @devtools/types@1.1.1
  - @devtools/plugin-events-node@0.3.9

## 0.4.2-next.3

### Patch Changes

- 81f930a: use formatted query to prevent chance of SQL-injection
- Updated dependencies
  - @devtools/backend-plugin-api@0.8.0-next.3
  - @devtools/backend-common@0.23.4-next.3
  - @devtools/backend-app-api@0.8.1-next.3
  - @devtools/backend-dev-utils@0.1.4
  - @devtools/cli-common@0.1.14
  - @devtools/config@1.2.0
  - @devtools/config-loader@1.9.0-next.2
  - @devtools/errors@1.2.4
  - @devtools/integration@1.14.0-next.0
  - @devtools/integration-aws-node@0.1.12
  - @devtools/types@1.1.1
  - @devtools/plugin-auth-node@0.5.0-next.3
  - @devtools/plugin-events-node@0.3.9-next.3
  - @devtools/plugin-permission-node@0.8.1-next.3

## 0.4.2-next.2

### Patch Changes

- 0d16b52: Add access restrictions to the JWKS external access method config schema
- 93095ee: Make sure node-fetch is version 2.7.0 or greater
- ba9abf4: The `SchedulerService` now allows tasks with `frequency: { trigger: 'manual' }`. This means that the task will not be scheduled, but rather run only when manually triggered with `SchedulerService.triggerTask`.
- 7c5f3b0: Update the `UrlReader` service to depends on multiple instances of `UrlReaderFactoryProvider` service.
- 1d5f298: Avoid excessive numbers of error listeners on cache clients
- Updated dependencies
  - @devtools/backend-plugin-api@0.8.0-next.2
  - @devtools/backend-app-api@0.8.1-next.2
  - @devtools/backend-common@0.23.4-next.2
  - @devtools/config-loader@1.9.0-next.2
  - @devtools/plugin-auth-node@0.5.0-next.2
  - @devtools/plugin-permission-node@0.8.1-next.2
  - @devtools/plugin-events-node@0.3.9-next.2
  - @devtools/integration@1.14.0-next.0
  - @devtools/integration-aws-node@0.1.12
  - @devtools/backend-dev-utils@0.1.4
  - @devtools/cli-common@0.1.14
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1

## 0.4.2-next.1

### Patch Changes

- Updated dependencies
  - @devtools/config-loader@1.9.0-next.1
  - @devtools/plugin-permission-node@0.8.1-next.1
  - @devtools/backend-plugin-api@0.7.1-next.1
  - @devtools/backend-app-api@0.8.1-next.1
  - @devtools/backend-common@0.23.4-next.1
  - @devtools/integration@1.14.0-next.0
  - @devtools/integration-aws-node@0.1.12
  - @devtools/backend-dev-utils@0.1.4
  - @devtools/cli-common@0.1.14
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1
  - @devtools/plugin-auth-node@0.4.18-next.1
  - @devtools/plugin-events-node@0.3.9-next.1

## 0.4.2-next.0

### Patch Changes

- 4e79d19: The `createHealthRouter` utility that allows you to create a health check router is now exported via `@devtools/backend-defaults/rootHttpRouter`.
- 78c1329: Updated `GitlabUrlReader.readUrl` and `GitlabUrlReader.readTree` to accept a user-provided token, supporting both bearer and private tokens.
- 8e967da: Fixed the routing of the new health check service, the health endpoints should now properly be available at `/.devtools/health/v1/readiness` and `/.devtools/health/v1/liveness`.
- Updated dependencies
  - @devtools/backend-common@0.23.4-next.0
  - @devtools/integration@1.14.0-next.0
  - @devtools/config-loader@1.8.2-next.0
  - @devtools/backend-app-api@0.8.1-next.0
  - @devtools/backend-dev-utils@0.1.4
  - @devtools/backend-plugin-api@0.7.1-next.0
  - @devtools/cli-common@0.1.14
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/integration-aws-node@0.1.12
  - @devtools/types@1.1.1
  - @devtools/plugin-auth-node@0.4.18-next.0
  - @devtools/plugin-events-node@0.3.9-next.0
  - @devtools/plugin-permission-node@0.8.1-next.0

## 0.4.0

### Minor Changes

- 1cb84d7: **BREAKING**: Removed the depreacted `getPath` option from `httpRouterServiceFactory`, as well as the `HttpRouterFactoryOptions` type.

### Patch Changes

- 53ced70: Added a new Root Health Service which adds new endpoints for health checks.
- 2f99178: The `ServiceFactoryTest.get` method was deprecated and the `ServiceFactoryTest.getSubject` should be used instead. The `getSubject` method has the same behavior, but has a better method name to indicate that the service instance returned is the subject currently being tested.
- 083eaf9: Fix bug where ISO durations could no longer be used for schedules
- b05e1e1: Service factories exported by this package have been updated to use the new service factory format that doesn't use a callback.
- 419f387: Refactor of `rootHttpRouterServiceFactory` to allow it to be constructed with options, but without declaring options via `createServiceFactory`.
- cb14a05: Repack the package to fix issues with typescript with named exports
- b9ed1bb: bumped better-sqlite3 from ^9.0.0 to ^11.0.0
- e28af58: Refactor of `rootConfigServiceFactory` to allow it to be constructed with options, but without declaring options via `createServiceFactory`.
- Updated dependencies
  - @devtools/backend-plugin-api@0.7.0
  - @devtools/backend-app-api@0.8.0
  - @devtools/backend-common@0.23.3
  - @devtools/plugin-permission-node@0.8.0
  - @devtools/integration@1.13.0
  - @devtools/plugin-events-node@0.3.8
  - @devtools/plugin-auth-node@0.4.17
  - @devtools/config-loader@1.8.1
  - @devtools/backend-dev-utils@0.1.4
  - @devtools/cli-common@0.1.14
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/integration-aws-node@0.1.12
  - @devtools/types@1.1.1

## 0.3.4-next.1

### Patch Changes

- b9ed1bb: bumped better-sqlite3 from ^9.0.0 to ^11.0.0
- Updated dependencies
  - @devtools/backend-common@0.23.3-next.1
  - @devtools/backend-app-api@0.7.10-next.1
  - @devtools/backend-dev-utils@0.1.4
  - @devtools/backend-plugin-api@0.6.22-next.1
  - @devtools/cli-common@0.1.14
  - @devtools/config@1.2.0
  - @devtools/config-loader@1.8.1
  - @devtools/errors@1.2.4
  - @devtools/integration@1.13.0-next.0
  - @devtools/integration-aws-node@0.1.12
  - @devtools/types@1.1.1
  - @devtools/plugin-auth-node@0.4.17-next.1
  - @devtools/plugin-events-node@0.3.8-next.1
  - @devtools/plugin-permission-node@0.7.33-next.1

## 0.3.3-next.0

### Patch Changes

- 53ced70: Added a new Root Health Service which adds new endpoints for health checks.
- 083eaf9: Fix bug where ISO durations could no longer be used for schedules
- cb14a05: Repack the package to fix issues with typescript with named exports
- Updated dependencies
  - @devtools/backend-plugin-api@0.6.21-next.0
  - @devtools/backend-common@0.23.2-next.0
  - @devtools/integration@1.13.0-next.0
  - @devtools/backend-app-api@0.7.9-next.0
  - @devtools/plugin-auth-node@0.4.16-next.0
  - @devtools/plugin-events-node@0.3.7-next.0
  - @devtools/plugin-permission-node@0.7.32-next.0
  - @devtools/backend-dev-utils@0.1.4
  - @devtools/cli-common@0.1.14
  - @devtools/config@1.2.0
  - @devtools/config-loader@1.8.1
  - @devtools/errors@1.2.4
  - @devtools/integration-aws-node@0.1.12
  - @devtools/types@1.1.1

## 0.3.0

### Minor Changes

- 662dce8: **BREAKING**: The `workdir` argument have been removed from The `GerritUrlReader` constructor.

  **BREAKING**: The Gerrit `readTree` implementation will now only use the Gitiles api. Support
  for using git to clone the repo has been removed.

- 02103be: Deprecated and moved over core services to `@devtools/backend-defaults`

### Patch Changes

- 1897169: Exposed `DefaultSchedulerService`
- b5bc997: Refactor cache manager inline types.
- e171620: Remove dependency with `@devtools/backend-commons` package.
- 6551b3d: Added core service factories and implementations from
  `@devtools/backend-app-api`. They are now available as subpath exports, e.g.
  `@devtools/backend-defaults/scheduler` is where the service factory and default
  implementation of `coreServices.scheduler` now lives. They have been marked as
  deprecated in their old locations.
- 8aab451: Internal minor refactors of the database connectors
- 0634fdc: Deprecated `dropDatabase`
- b2ee7f3: Moved over all URL reader functionality from `@devtools/backend-common` to `@devtools/backend-defaults/urlReader`. Please update your imports.
- 9539a0b: Added `@devtools/backend-defaults/auth`, `@devtools/backend-defaults/httpAuth`, and `@devtools/backend-defaults/userInfo` to house their respective backend service factories. You should now import these services from those new locations, instead of `@devtools/backend-app-api`.
- Updated dependencies
  - @devtools/backend-app-api@0.7.6
  - @devtools/backend-common@0.23.0
  - @devtools/backend-plugin-api@0.6.19
  - @devtools/plugin-auth-node@0.4.14
  - @devtools/integration@1.12.0
  - @devtools/plugin-events-node@0.3.5
  - @devtools/plugin-permission-node@0.7.30
  - @devtools/cli-common@0.1.14
  - @devtools/config-loader@1.8.1
  - @devtools/backend-dev-utils@0.1.4
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/integration-aws-node@0.1.12
  - @devtools/types@1.1.1

## 0.3.0-next.3

### Patch Changes

- 1897169: Exposed `DefaultSchedulerService`
- 8aab451: Internal minor refactors of the database connectors
- b2ee7f3: Moved over all URL reader functionality from `@devtools/backend-common` to `@devtools/backend-defaults/urlReader`. Please update your imports.
- Updated dependencies
  - @devtools/backend-plugin-api@0.6.19-next.3
  - @devtools/integration@1.12.0-next.1
  - @devtools/plugin-permission-node@0.7.30-next.3
  - @devtools/plugin-events-node@0.3.5-next.2
  - @devtools/backend-common@0.23.0-next.3
  - @devtools/backend-app-api@0.7.6-next.3
  - @devtools/config-loader@1.8.1-next.0
  - @devtools/backend-dev-utils@0.1.4
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/integration-aws-node@0.1.12
  - @devtools/types@1.1.1

## 0.3.0-next.2

### Patch Changes

- 0634fdc: Deprecated `dropDatabase`
- Updated dependencies
  - @devtools/backend-plugin-api@0.6.19-next.2
  - @devtools/backend-common@0.23.0-next.2
  - @devtools/plugin-permission-node@0.7.30-next.2
  - @devtools/backend-app-api@0.7.6-next.2
  - @devtools/plugin-events-node@0.3.5-next.1
  - @devtools/config-loader@1.8.0
  - @devtools/backend-dev-utils@0.1.4
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1

## 0.3.0-next.1

### Minor Changes

- 02103be: Deprecated and moved over core services to `@devtools/backend-defaults`

### Patch Changes

- Updated dependencies
  - @devtools/backend-app-api@0.7.6-next.1
  - @devtools/backend-plugin-api@0.6.19-next.1
  - @devtools/plugin-permission-node@0.7.30-next.1
  - @devtools/backend-common@0.23.0-next.1
  - @devtools/config-loader@1.8.0
  - @devtools/plugin-events-node@0.3.5-next.0

## 0.2.19-next.0

### Patch Changes

- 6551b3d: Added core service factories and implementations from
  `@devtools/backend-app-api`. They are now available as subpath exports, e.g.
  `@devtools/backend-defaults/scheduler` is where the service factory and default
  implementation of `coreServices.scheduler` now lives. They have been marked as
  deprecated in their old locations.
- Updated dependencies
  - @devtools/backend-app-api@0.7.6-next.0
  - @devtools/backend-common@0.22.1-next.0
  - @devtools/plugin-events-node@0.3.5-next.0
  - @devtools/backend-plugin-api@0.6.19-next.0
  - @devtools/plugin-permission-node@0.7.30-next.0
  - @devtools/config-loader@1.8.0
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1

## 0.2.18

### Patch Changes

- 7e5a50d: added `eventsServiceFactory` to `defaultServiceFactories` to resolve issue where different instances of the EventsServices could be used
- Updated dependencies
  - @devtools/backend-app-api@0.7.3
  - @devtools/backend-common@0.22.0
  - @devtools/plugin-events-node@0.3.4

## 0.2.18-next.2

### Patch Changes

- 7e5a50d: added `eventsServiceFactory` to `defaultServiceFactories` to resolve issue where different instances of the EventsServices could be used
- Updated dependencies
  - @devtools/backend-common@0.22.0-next.2
  - @devtools/plugin-events-node@0.3.4-next.2

## 0.2.18-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-app-api@0.7.2-next.1
  - @devtools/backend-common@0.22.0-next.1

## 0.2.18-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-app-api@0.7.1-next.0
  - @devtools/backend-common@0.21.8-next.0

## 0.2.17

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.21.7
  - @devtools/backend-app-api@0.7.0

## 0.2.17-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.21.7-next.1
  - @devtools/backend-app-api@0.7.0-next.1

## 0.2.17-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-app-api@0.6.3-next.0
  - @devtools/backend-common@0.21.7-next.0

## 0.2.16

### Patch Changes

- Updated dependencies
  - @devtools/backend-app-api@0.6.2
  - @devtools/backend-common@0.21.6

## 0.2.15

### Patch Changes

- Updated dependencies
  - @devtools/backend-app-api@0.6.1
  - @devtools/backend-common@0.21.5

## 0.2.14

### Patch Changes

- 7cbb760: Added support for the new auth services, which are now installed by default. See the [migration guide](https://devtools.khulnasoft.com/docs/tutorials/auth-service-migration) for details.
- Updated dependencies
  - @devtools/backend-common@0.21.4
  - @devtools/backend-app-api@0.6.0

## 0.2.14-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-app-api@0.6.0-next.2
  - @devtools/backend-common@0.21.4-next.2

## 0.2.14-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-app-api@0.6.0-next.1
  - @devtools/backend-common@0.21.4-next.1

## 0.2.13-next.0

### Patch Changes

- 7cbb760: Added support for the new auth services, which are now installed by default. See the [migration guide](https://devtools.khulnasoft.com/docs/tutorials/auth-service-migration) for details.
- Updated dependencies
  - @devtools/backend-common@0.21.3-next.0
  - @devtools/backend-app-api@0.6.0-next.0

## 0.2.10

### Patch Changes

- 9aac2b0: Use `--cwd` as the first `yarn` argument
- Updated dependencies
  - @devtools/backend-common@0.21.0
  - @devtools/backend-app-api@0.5.11

## 0.2.10-next.3

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.21.0-next.3
  - @devtools/backend-app-api@0.5.11-next.3

## 0.2.10-next.2

### Patch Changes

- 9aac2b0: Use `--cwd` as the first `yarn` argument
- Updated dependencies
  - @devtools/backend-common@0.21.0-next.2
  - @devtools/backend-plugin-api@0.6.10-next.2
  - @devtools/backend-app-api@0.5.11-next.2

## 0.2.10-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.6.10-next.1
  - @devtools/backend-common@0.21.0-next.1
  - @devtools/backend-app-api@0.5.11-next.1

## 0.2.10-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.21.0-next.0
  - @devtools/backend-app-api@0.5.11-next.0
  - @devtools/backend-plugin-api@0.6.10-next.0

## 0.2.9

### Patch Changes

- 516fd3e: Updated README to reflect release status
- Updated dependencies
  - @devtools/backend-common@0.20.1
  - @devtools/backend-plugin-api@0.6.9
  - @devtools/backend-app-api@0.5.10

## 0.2.9-next.2

### Patch Changes

- 516fd3e: Updated README to reflect release status
- Updated dependencies
  - @devtools/backend-plugin-api@0.6.9-next.2
  - @devtools/backend-app-api@0.5.10-next.2
  - @devtools/backend-common@0.20.1-next.2

## 0.2.9-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-app-api@0.5.10-next.1
  - @devtools/backend-common@0.20.1-next.1
  - @devtools/backend-plugin-api@0.6.9-next.1

## 0.2.9-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.20.1-next.0
  - @devtools/backend-app-api@0.5.10-next.0
  - @devtools/backend-plugin-api@0.6.9-next.0

## 0.2.8

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.20.0
  - @devtools/backend-app-api@0.5.9
  - @devtools/backend-plugin-api@0.6.8

## 0.2.8-next.3

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.20.0-next.3
  - @devtools/backend-app-api@0.5.9-next.3
  - @devtools/backend-plugin-api@0.6.8-next.3

## 0.2.8-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.20.0-next.2
  - @devtools/backend-app-api@0.5.9-next.2
  - @devtools/backend-plugin-api@0.6.8-next.2

## 0.2.8-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-app-api@0.5.9-next.1
  - @devtools/backend-common@0.20.0-next.1
  - @devtools/backend-plugin-api@0.6.8-next.1

## 0.2.8-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.20.0-next.0
  - @devtools/backend-app-api@0.5.9-next.0
  - @devtools/backend-plugin-api@0.6.8-next.0

## 0.2.7

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.19.9
  - @devtools/backend-plugin-api@0.6.7
  - @devtools/backend-app-api@0.5.8

## 0.2.7-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.6.7-next.2
  - @devtools/backend-common@0.19.9-next.2
  - @devtools/backend-app-api@0.5.8-next.2

## 0.2.7-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.19.9-next.1
  - @devtools/backend-app-api@0.5.8-next.1
  - @devtools/backend-plugin-api@0.6.7-next.1

## 0.2.7-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-app-api@0.5.8-next.0
  - @devtools/backend-common@0.19.9-next.0
  - @devtools/backend-plugin-api@0.6.7-next.0

## 0.2.6

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.19.8
  - @devtools/backend-app-api@0.5.6
  - @devtools/backend-plugin-api@0.6.6

## 0.2.6-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.19.8-next.2
  - @devtools/backend-app-api@0.5.6-next.2
  - @devtools/backend-plugin-api@0.6.6-next.2

## 0.2.5-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.19.7-next.1
  - @devtools/backend-app-api@0.5.5-next.1
  - @devtools/backend-plugin-api@0.6.5-next.1

## 0.2.5-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.19.7-next.0
  - @devtools/backend-app-api@0.5.5-next.0
  - @devtools/backend-plugin-api@0.6.5-next.0

## 0.2.3

### Patch Changes

- Updated dependencies
  - @devtools/backend-app-api@0.5.3
  - @devtools/backend-common@0.19.5
  - @devtools/backend-plugin-api@0.6.3

## 0.2.3-next.3

### Patch Changes

- Updated dependencies
  - @devtools/backend-app-api@0.5.3-next.3
  - @devtools/backend-plugin-api@0.6.3-next.3
  - @devtools/backend-common@0.19.5-next.3

## 0.2.3-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-app-api@0.5.3-next.2
  - @devtools/backend-common@0.19.5-next.2
  - @devtools/backend-plugin-api@0.6.3-next.2

## 0.2.3-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-app-api@0.5.3-next.1
  - @devtools/backend-common@0.19.5-next.1
  - @devtools/backend-plugin-api@0.6.3-next.1

## 0.2.2-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.19.4-next.0
  - @devtools/backend-app-api@0.5.2-next.0
  - @devtools/backend-plugin-api@0.6.2-next.0

## 0.2.0

### Minor Changes

- d008aefef808: **BREAKING**: Removing shared environments concept from the new experimental backend system.
- a6d7983f349c: **BREAKING**: Removed the `services` option from `createBackend`. Service factories are now `BackendFeature`s and should be installed with `backend.add(...)` instead. The following should be migrated:

  ```ts
  const backend = createBackend({ services: [myCustomServiceFactory] });
  ```

  To instead pass the service factory via `backend.add(...)`:

  ```ts
  const backend = createBackend();
  backend.add(customRootLoggerServiceFactory);
  ```

### Patch Changes

- 629cbd194a87: Use `coreServices.rootConfig` instead of `coreService.config`
- Updated dependencies
  - @devtools/backend-common@0.19.2
  - @devtools/backend-app-api@0.5.0
  - @devtools/backend-plugin-api@0.6.0

## 0.2.0-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-app-api@0.5.0-next.2
  - @devtools/backend-plugin-api@0.6.0-next.2
  - @devtools/backend-common@0.19.2-next.2

## 0.2.0-next.1

### Minor Changes

- d008aefef808: **BREAKING**: Removing shared environments concept from the new experimental backend system.

### Patch Changes

- 629cbd194a87: Use `coreServices.rootConfig` instead of `coreService.config`
- Updated dependencies
  - @devtools/backend-common@0.19.2-next.1
  - @devtools/backend-app-api@0.5.0-next.1
  - @devtools/backend-plugin-api@0.6.0-next.1

## 0.1.13-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-app-api@0.4.6-next.0
  - @devtools/backend-common@0.19.2-next.0
  - @devtools/backend-plugin-api@0.5.5-next.0

## 0.1.12

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.19.1
  - @devtools/backend-app-api@0.4.5
  - @devtools/backend-plugin-api@0.5.4

## 0.1.12-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.19.1-next.0
  - @devtools/backend-app-api@0.4.5-next.0
  - @devtools/backend-plugin-api@0.5.4-next.0

## 0.1.11

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.19.0
  - @devtools/backend-app-api@0.4.4
  - @devtools/backend-plugin-api@0.5.3

## 0.1.11-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.19.0-next.2
  - @devtools/backend-app-api@0.4.4-next.2
  - @devtools/backend-plugin-api@0.5.3-next.2

## 0.1.11-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.19.0-next.1
  - @devtools/backend-app-api@0.4.4-next.1
  - @devtools/backend-plugin-api@0.5.3-next.1

## 0.1.11-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-app-api@0.4.4-next.0
  - @devtools/backend-common@0.18.6-next.0
  - @devtools/backend-plugin-api@0.5.3-next.0

## 0.1.10

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.18.5
  - @devtools/backend-app-api@0.4.3
  - @devtools/backend-plugin-api@0.5.2

## 0.1.10-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.18.5-next.1
  - @devtools/backend-app-api@0.4.3-next.1
  - @devtools/backend-plugin-api@0.5.2-next.1

## 0.1.10-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.18.5-next.0
  - @devtools/backend-app-api@0.4.3-next.0
  - @devtools/backend-plugin-api@0.5.2-next.0

## 0.1.9

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.18.4
  - @devtools/backend-app-api@0.4.2
  - @devtools/backend-plugin-api@0.5.1

## 0.1.9-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-app-api@0.4.2-next.2
  - @devtools/backend-common@0.18.4-next.2
  - @devtools/backend-plugin-api@0.5.1-next.2

## 0.1.9-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-app-api@0.4.2-next.1
  - @devtools/backend-common@0.18.4-next.1
  - @devtools/backend-plugin-api@0.5.1-next.1

## 0.1.9-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-app-api@0.4.2-next.0
  - @devtools/backend-common@0.18.4-next.0
  - @devtools/backend-plugin-api@0.5.1-next.0

## 0.1.8

### Patch Changes

- 928a12a9b3e: Internal refactor of `/alpha` exports.
- 482dae5de1c: Updated link to docs.
- 5d0693edc09: Added a workaround for the cyclic dependency bug across `@devtools/backend-common` and `@devtools/backend-app-api`.
- Updated dependencies
  - @devtools/backend-common@0.18.3
  - @devtools/backend-plugin-api@0.5.0
  - @devtools/backend-app-api@0.4.1

## 0.1.8-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.18.3-next.2
  - @devtools/backend-app-api@0.4.1-next.2
  - @devtools/backend-plugin-api@0.4.1-next.2

## 0.1.8-next.1

### Patch Changes

- 482dae5de1c: Updated link to docs.
- 5d0693edc09: Added a workaround for the cyclic dependency bug across `@devtools/backend-common` and `@devtools/backend-app-api`.
- Updated dependencies
  - @devtools/backend-common@0.18.3-next.1
  - @devtools/backend-plugin-api@0.4.1-next.1
  - @devtools/backend-app-api@0.4.1-next.1

## 0.1.8-next.0

### Patch Changes

- 928a12a9b3: Internal refactor of `/alpha` exports.
- Updated dependencies
  - @devtools/backend-plugin-api@0.4.1-next.0
  - @devtools/backend-app-api@0.4.1-next.0

## 0.1.7

### Patch Changes

- 725383f69d: Tweaked messaging in the README.
- e412d33025: Use the new `*ServiceFactory` exports from `@devtools/backend-app-api`
- Updated dependencies
  - @devtools/backend-app-api@0.4.0
  - @devtools/backend-plugin-api@0.4.0

## 0.1.7-next.2

### Patch Changes

- e412d33025: Use the new `*ServiceFactory` exports from `@devtools/backend-app-api`
- Updated dependencies
  - @devtools/backend-app-api@0.4.0-next.2
  - @devtools/backend-plugin-api@0.4.0-next.2

## 0.1.7-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.3.2-next.1
  - @devtools/backend-app-api@0.3.2-next.1

## 0.1.7-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-app-api@0.3.2-next.0
  - @devtools/backend-plugin-api@0.3.2-next.0

## 0.1.5

### Patch Changes

- 6cfd4d7073: Include implementations for the new `rootLifecycleServiceRef`.
- ecc6bfe4c9: Use new `ServiceFactoryOrFunction` type.
- 015a6dced6: Updated to make sure that service implementations replace default service implementations.
- 843a0a158c: Added factory for the new core identity service to the set of default service factories.
- 5b7bcd3c5e: Added support to supply a shared environment to `createBackend`, which can be created using `createSharedEnvironment` from `@devtools/backend-plugin-api`.
- 02b119ff93: The new root HTTP router service is now installed by default.
- Updated dependencies
  - @devtools/backend-plugin-api@0.3.0
  - @devtools/backend-app-api@0.3.0

## 0.1.5-next.1

### Patch Changes

- ecc6bfe4c9: Use new `ServiceFactoryOrFunction` type.
- 015a6dced6: Updated to make sure that service implementations replace default service implementations.
- 02b119ff93: The new root HTTP router service is now installed by default.
- Updated dependencies
  - @devtools/backend-app-api@0.3.0-next.1
  - @devtools/backend-plugin-api@0.3.0-next.1

## 0.1.5-next.0

### Patch Changes

- 6cfd4d7073: Include implementations for the new `rootLifecycleServiceRef`.
- Updated dependencies
  - @devtools/backend-plugin-api@0.2.1-next.0
  - @devtools/backend-app-api@0.2.5-next.0

## 0.1.4

### Patch Changes

- d6dbf1792b: Added `lifecycleFactory` to default service factories.
- Updated dependencies
  - @devtools/backend-app-api@0.2.4
  - @devtools/backend-plugin-api@0.2.0

## 0.1.4-next.3

### Patch Changes

- Updated dependencies
  - @devtools/backend-app-api@0.2.4-next.3
  - @devtools/backend-plugin-api@0.2.0-next.3

## 0.1.4-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-app-api@0.2.4-next.2
  - @devtools/backend-plugin-api@0.2.0-next.2

## 0.1.4-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-app-api@0.2.4-next.1
  - @devtools/backend-plugin-api@0.1.5-next.1

## 0.1.4-next.0

### Patch Changes

- d6dbf1792b: Added `lifecycleFactory` to default service factories.
- Updated dependencies
  - @devtools/backend-app-api@0.2.4-next.0
  - @devtools/backend-plugin-api@0.1.5-next.0

## 0.1.3

### Patch Changes

- Updated dependencies
  - @devtools/backend-app-api@0.2.3
  - @devtools/backend-plugin-api@0.1.4

## 0.1.3-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-app-api@0.2.3-next.1
  - @devtools/backend-plugin-api@0.1.4-next.1

## 0.1.3-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-app-api@0.2.3-next.0
  - @devtools/backend-plugin-api@0.1.4-next.0

## 0.1.2

### Patch Changes

- 96d288a02d: Added root logger service to the set of default services.
- Updated dependencies
  - @devtools/backend-app-api@0.2.2
  - @devtools/backend-plugin-api@0.1.3

## 0.1.2-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-app-api@0.2.2-next.2
  - @devtools/backend-plugin-api@0.1.3-next.2

## 0.1.2-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.1.3-next.1
  - @devtools/backend-app-api@0.2.2-next.1

## 0.1.2-next.0

### Patch Changes

- 96d288a02d: Added root logger service to the set of default services.
- Updated dependencies
  - @devtools/backend-app-api@0.2.2-next.0
  - @devtools/backend-plugin-api@0.1.3-next.0

## 0.1.1

### Patch Changes

- 854ba37357: Updated to support new `ServiceFactory` formats.
- de3347ca74: Updated usages of `ServiceFactory`.
- Updated dependencies
  - @devtools/backend-app-api@0.2.1
  - @devtools/backend-plugin-api@0.1.2

## 0.1.1-next.1

### Patch Changes

- 854ba37357: Updated to support new `ServiceFactory` formats.
- Updated dependencies
  - @devtools/backend-plugin-api@0.1.2-next.2
  - @devtools/backend-app-api@0.2.1-next.2

## 0.1.1-next.0

### Patch Changes

- de3347ca74: Updated usages of `ServiceFactory`.
- Updated dependencies
  - @devtools/backend-plugin-api@0.1.2-next.0
  - @devtools/backend-app-api@0.2.1-next.0

## 0.1.0

### Minor Changes

- 5df230d48c: Introduced a new `backend-defaults` package carrying `createBackend` which was previously exported from `backend-app-api`.
  The `backend-app-api` package now exports the `createSpecializedBacked` that does not add any service factories by default.

### Patch Changes

- Updated dependencies
  - @devtools/backend-app-api@0.2.0
  - @devtools/backend-plugin-api@0.1.1