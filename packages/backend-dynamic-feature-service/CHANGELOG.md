# @devtools/backend-dynamic-feature-service

## 0.5.3-next.0

### Patch Changes

- 8379bf4: Remove usages of `PluginDatabaseManager` and `PluginEndpointDiscovery` and replace with their equivalent service types
- Updated dependencies
  - @devtools/backend-defaults@0.7.0-next.0
  - @devtools/plugin-scaffolder-node@0.6.3-next.0
  - @devtools/backend-app-api@1.1.1-next.0
  - @devtools/config-loader@1.9.5-next.0
  - @devtools/plugin-catalog-backend@1.30.0-next.0
  - @devtools/plugin-permission-node@0.8.7-next.0
  - @devtools/plugin-events-backend@0.4.1-next.0
  - @devtools/plugin-auth-node@0.5.6-next.0
  - @devtools/backend-plugin-api@1.1.1-next.0
  - @devtools/cli-common@0.1.15
  - @devtools/cli-node@0.2.11
  - @devtools/config@1.3.1
  - @devtools/errors@1.2.6
  - @devtools/types@1.2.0
  - @devtools/plugin-app-node@0.1.29-next.0
  - @devtools/plugin-events-node@0.4.7-next.0
  - @devtools/plugin-permission-common@0.8.3
  - @devtools/plugin-search-backend-node@1.3.7-next.0
  - @devtools/plugin-search-common@1.2.16

## 0.5.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-defaults@0.6.0
  - @devtools/plugin-catalog-backend@1.29.0
  - @devtools/plugin-auth-node@0.5.5
  - @devtools/backend-plugin-api@1.1.0
  - @devtools/backend-app-api@1.1.0
  - @devtools/plugin-events-node@0.4.6
  - @devtools/plugin-scaffolder-node@0.6.2
  - @devtools/cli-node@0.2.11
  - @devtools/plugin-events-backend@0.4.0
  - @devtools/plugin-permission-node@0.8.6
  - @devtools/plugin-search-backend-node@1.3.6
  - @devtools/config-loader@1.9.3
  - @devtools/errors@1.2.6
  - @devtools/cli-common@0.1.15
  - @devtools/config@1.3.1
  - @devtools/types@1.2.0
  - @devtools/plugin-app-node@0.1.28
  - @devtools/plugin-permission-common@0.8.3
  - @devtools/plugin-search-common@1.2.16

## 0.5.2-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-defaults@0.6.0-next.2
  - @devtools/plugin-catalog-backend@1.29.0-next.2
  - @devtools/backend-plugin-api@1.1.0-next.2
  - @devtools/backend-app-api@1.1.0-next.2
  - @devtools/plugin-permission-node@0.8.6-next.2
  - @devtools/errors@1.2.6-next.0
  - @devtools/plugin-events-backend@0.4.0-next.2
  - @devtools/plugin-search-backend-node@1.3.6-next.2
  - @devtools/plugin-app-node@0.1.28-next.2
  - @devtools/plugin-auth-node@0.5.5-next.2
  - @devtools/plugin-events-node@0.4.6-next.2
  - @devtools/plugin-scaffolder-node@0.6.2-next.2
  - @devtools/cli-node@0.2.11-next.1
  - @devtools/config-loader@1.9.3-next.1
  - @devtools/cli-common@0.1.15
  - @devtools/config@1.3.1-next.0
  - @devtools/types@1.2.0
  - @devtools/plugin-permission-common@0.8.3-next.0
  - @devtools/plugin-search-common@1.2.16-next.0

## 0.5.2-next.1

### Patch Changes

- Updated dependencies
  - @devtools/plugin-auth-node@0.5.5-next.1
  - @devtools/plugin-catalog-backend@1.29.0-next.1
  - @devtools/backend-defaults@0.6.0-next.1
  - @devtools/plugin-events-backend@0.4.0-next.1
  - @devtools/plugin-scaffolder-node@0.6.2-next.1
  - @devtools/plugin-search-backend-node@1.3.6-next.1
  - @devtools/backend-app-api@1.1.0-next.1
  - @devtools/config-loader@1.9.3-next.0
  - @devtools/backend-plugin-api@1.1.0-next.1
  - @devtools/plugin-permission-node@0.8.6-next.1
  - @devtools/cli-common@0.1.15
  - @devtools/cli-node@0.2.11-next.0
  - @devtools/config@1.3.0
  - @devtools/errors@1.2.5
  - @devtools/types@1.2.0
  - @devtools/plugin-app-node@0.1.28-next.1
  - @devtools/plugin-events-node@0.4.6-next.1
  - @devtools/plugin-permission-common@0.8.2
  - @devtools/plugin-search-common@1.2.15

## 0.5.1-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-defaults@0.6.0-next.0
  - @devtools/backend-plugin-api@1.0.3-next.0
  - @devtools/backend-app-api@1.0.3-next.0
  - @devtools/plugin-catalog-backend@1.28.1-next.0
  - @devtools/plugin-events-node@0.4.6-next.0
  - @devtools/plugin-scaffolder-node@0.6.1-next.0
  - @devtools/cli-node@0.2.11-next.0
  - @devtools/plugin-auth-node@0.5.5-next.0
  - @devtools/plugin-events-backend@0.3.17-next.0
  - @devtools/cli-common@0.1.15
  - @devtools/config@1.3.0
  - @devtools/config-loader@1.9.2
  - @devtools/errors@1.2.5
  - @devtools/types@1.2.0
  - @devtools/plugin-app-node@0.1.28-next.0
  - @devtools/plugin-permission-common@0.8.2
  - @devtools/plugin-permission-node@0.8.6-next.0
  - @devtools/plugin-search-backend-node@1.3.6-next.0
  - @devtools/plugin-search-common@1.2.15

## 0.5.0

### Minor Changes

- e939cd7: **BREAKING** The `dynamicPluginsFeatureLoader` options related to the root logger behavior (`transports`, `level`, `format`) are now gathered under a single `logger` option which is a function taking an optional `Config` argument and returning the logger options.

  This breaking change is required for 2 reasons:

  - it's totally possible that the current `Config` would be required to provide the logger options,
  - the logger-related options should be gathered under a common `logger` option because, when the root auditing service is introduced, distinct but similarly-named options would be required for the auditor as well.

### Patch Changes

- 1aeec12: Enhance the `CommonJSModuleLoader` to add support for `resolvePackagePath` calls from backend dynamic plugins, with customizable package resolution, and make the `CommonJSModuleLoader` public API.
  Fixing this backend dynamic plugin limitation related to `resolvePackagePath` is important for backend dynamic plugins which use the database, since database migration scripts systematically use `resolvePackagePath`.
- 8593dfa: Improve the way alpha packages are supported when loading dynamic backend plugins.
  The `ScannedPluginPackage` descriptor of dynamic backend plugins loaded from their alpha `package.json` now contain both the main package manifest and the alpha manifest. Previously it used to contain only the content of the alpha `package.json`, which is nearly empty.
  This will make it easier to use or display metadata of loaded dynamic backend plugins, which is contained in the main manifest.
- Updated dependencies
  - @devtools/config@1.3.0
  - @devtools/plugin-events-node@0.4.5
  - @devtools/backend-defaults@0.5.3
  - @devtools/types@1.2.0
  - @devtools/plugin-catalog-backend@1.28.0
  - @devtools/plugin-events-backend@0.3.16
  - @devtools/config-loader@1.9.2
  - @devtools/plugin-auth-node@0.5.4
  - @devtools/backend-plugin-api@1.0.2
  - @devtools/plugin-search-backend-node@1.3.5
  - @devtools/plugin-permission-common@0.8.2
  - @devtools/backend-app-api@1.0.2
  - @devtools/cli-common@0.1.15
  - @devtools/plugin-scaffolder-node@0.6.0
  - @devtools/cli-node@0.2.10
  - @devtools/errors@1.2.5
  - @devtools/plugin-app-node@0.1.27
  - @devtools/plugin-permission-node@0.8.5
  - @devtools/plugin-search-common@1.2.15

## 0.5.0-next.3

### Patch Changes

- Updated dependencies
  - @devtools/plugin-events-node@0.4.5-next.3
  - @devtools/plugin-events-backend@0.3.16-next.3
  - @devtools/plugin-catalog-backend@1.28.0-next.3
  - @devtools/backend-defaults@0.5.3-next.3
  - @devtools/backend-app-api@1.0.2-next.2
  - @devtools/backend-plugin-api@1.0.2-next.2
  - @devtools/cli-common@0.1.15-next.0
  - @devtools/cli-node@0.2.10-next.0
  - @devtools/config@1.2.0
  - @devtools/config-loader@1.9.2-next.0
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1
  - @devtools/plugin-app-node@0.1.27-next.2
  - @devtools/plugin-auth-node@0.5.4-next.2
  - @devtools/plugin-permission-common@0.8.1
  - @devtools/plugin-permission-node@0.8.5-next.2
  - @devtools/plugin-scaffolder-node@0.5.1-next.3
  - @devtools/plugin-search-backend-node@1.3.5-next.3
  - @devtools/plugin-search-common@1.2.14

## 0.5.0-next.2

### Minor Changes

- e939cd7: **BREAKING** The `dynamicPluginsFeatureLoader` options related to the root logger behavior (`transports`, `level`, `format`) are now gathered under a single `logger` option which is a function taking an optional `Config` argument and returning the logger options.

  This breaking change is required for 2 reasons:

  - it's totally possible that the current `Config` would be required to provide the logger options,
  - the logger-related options should be gathered under a common `logger` option because, when the root auditing service is introduced, distinct but similarly-named options would be required for the auditor as well.

### Patch Changes

- 1aeec12: Enhance the `CommonJSModuleLoader` to add support for `resolvePackagePath` calls from backend dynamic plugins, with customizable package resolution, and make the `CommonJSModuleLoader` public API.
  Fixing this backend dynamic plugin limitation related to `resolvePackagePath` is important for backend dynamic plugins which use the database, since database migration scripts systematically use `resolvePackagePath`.
- Updated dependencies
  - @devtools/plugin-catalog-backend@1.28.0-next.2
  - @devtools/backend-defaults@0.5.3-next.2
  - @devtools/plugin-events-backend@0.3.16-next.2
  - @devtools/plugin-events-node@0.4.5-next.2
  - @devtools/plugin-auth-node@0.5.4-next.2
  - @devtools/backend-app-api@1.0.2-next.2
  - @devtools/backend-plugin-api@1.0.2-next.2
  - @devtools/cli-common@0.1.15-next.0
  - @devtools/cli-node@0.2.10-next.0
  - @devtools/config@1.2.0
  - @devtools/config-loader@1.9.2-next.0
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1
  - @devtools/plugin-app-node@0.1.27-next.2
  - @devtools/plugin-permission-common@0.8.1
  - @devtools/plugin-permission-node@0.8.5-next.2
  - @devtools/plugin-scaffolder-node@0.5.1-next.2
  - @devtools/plugin-search-backend-node@1.3.5-next.2
  - @devtools/plugin-search-common@1.2.14

## 0.4.4-next.1

### Patch Changes

- Updated dependencies
  - @devtools/cli-common@0.1.15-next.0
  - @devtools/backend-app-api@1.0.2-next.1
  - @devtools/backend-defaults@0.5.3-next.1
  - @devtools/backend-plugin-api@1.0.2-next.1
  - @devtools/cli-node@0.2.10-next.0
  - @devtools/config@1.2.0
  - @devtools/config-loader@1.9.2-next.0
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1
  - @devtools/plugin-app-node@0.1.27-next.1
  - @devtools/plugin-auth-node@0.5.4-next.1
  - @devtools/plugin-catalog-backend@1.27.2-next.1
  - @devtools/plugin-events-backend@0.3.16-next.1
  - @devtools/plugin-events-node@0.4.4-next.1
  - @devtools/plugin-permission-common@0.8.1
  - @devtools/plugin-permission-node@0.8.5-next.1
  - @devtools/plugin-scaffolder-node@0.5.1-next.1
  - @devtools/plugin-search-backend-node@1.3.5-next.1
  - @devtools/plugin-search-common@1.2.14

## 0.4.4-next.0

### Patch Changes

- 8593dfa: Improve the way alpha packages are supported when loading dynamic backend plugins.
  The `ScannedPluginPackage` descriptor of dynamic backend plugins loaded from their alpha `package.json` now contain both the main package manifest and the alpha manifest. Previously it used to contain only the content of the alpha `package.json`, which is nearly empty.
  This will make it easier to use or display metadata of loaded dynamic backend plugins, which is contained in the main manifest.
- Updated dependencies
  - @devtools/plugin-events-node@0.4.3-next.0
  - @devtools/plugin-events-backend@0.3.15-next.0
  - @devtools/plugin-auth-node@0.5.4-next.0
  - @devtools/backend-defaults@0.5.3-next.0
  - @devtools/backend-app-api@1.0.2-next.0
  - @devtools/backend-plugin-api@1.0.2-next.0
  - @devtools/cli-common@0.1.14
  - @devtools/cli-node@0.2.9
  - @devtools/config@1.2.0
  - @devtools/config-loader@1.9.1
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1
  - @devtools/plugin-app-node@0.1.27-next.0
  - @devtools/plugin-catalog-backend@1.27.2-next.0
  - @devtools/plugin-permission-common@0.8.1
  - @devtools/plugin-permission-node@0.8.5-next.0
  - @devtools/plugin-scaffolder-node@0.5.1-next.0
  - @devtools/plugin-search-backend-node@1.3.5-next.0
  - @devtools/plugin-search-common@1.2.14

## 0.4.2

### Patch Changes

- d18d494: Enhance and simplify the activation of the dynamic plugins feature:

  - The dynamic plugins service (which implements the `DynamicPluginsProvider`) is restored, since it is required for plugins to depend on it in order to get the details of loaded dynamic plugins (possibly with loading errors to be surfaced in some UI).
  - A new all-in-one feature loader (`dynamicPluginsFeatureLoader`) is provided that allows a 1-liner activation of both the dynamic features and additional services or plugins required to have the dynamic plugins work correctly with dynamic plugins config schemas. Previous service factories or feature loaders are deprecated.

- e6c0550: Enhance the API of the `DynamicPluginProvider` (available as a service) to:

  - expose the new `getScannedPackage()` method that returns the `ScannedPluginPackage` from which a given plugin has been loaded,
  - add an optional `includeFailed` argument in the plugins list retrieval methods, to include the plugins that could be successfully loaded (`false` by default).

- 4c89e47: Allow passing an async module loader in the `DynamicPluginsFeatureLoaderOptions`.
- 094eaa3: Remove references to in-repo backend-common
- 2f88f88: Updated backend installation instructions.
- Updated dependencies
  - @devtools/backend-defaults@0.5.1
  - @devtools/cli-node@0.2.9
  - @devtools/backend-app-api@1.0.1
  - @devtools/plugin-scaffolder-node@0.5.0
  - @devtools/plugin-auth-node@0.5.3
  - @devtools/plugin-search-backend-node@1.3.3
  - @devtools/plugin-catalog-backend@1.27.0
  - @devtools/plugin-permission-node@0.8.4
  - @devtools/plugin-events-backend@0.3.13
  - @devtools/plugin-events-node@0.4.1
  - @devtools/backend-plugin-api@1.0.1
  - @devtools/cli-common@0.1.14
  - @devtools/config@1.2.0
  - @devtools/config-loader@1.9.1
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1
  - @devtools/plugin-app-node@0.1.26
  - @devtools/plugin-permission-common@0.8.1
  - @devtools/plugin-search-common@1.2.14

## 0.4.2-next.2

### Patch Changes

- Updated dependencies
  - @devtools/cli-node@0.2.9-next.0
  - @devtools/backend-app-api@1.0.1-next.1
  - @devtools/backend-defaults@0.5.1-next.2
  - @devtools/plugin-auth-node@0.5.3-next.1
  - @devtools/plugin-catalog-backend@1.26.2-next.2
  - @devtools/plugin-scaffolder-node@0.5.0-next.2
  - @devtools/backend-plugin-api@1.0.1-next.1
  - @devtools/cli-common@0.1.14
  - @devtools/config@1.2.0
  - @devtools/config-loader@1.9.1
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1
  - @devtools/plugin-app-node@0.1.26-next.1
  - @devtools/plugin-events-backend@0.3.13-next.1
  - @devtools/plugin-events-node@0.4.1-next.1
  - @devtools/plugin-permission-common@0.8.1
  - @devtools/plugin-permission-node@0.8.4-next.1
  - @devtools/plugin-search-backend-node@1.3.3-next.2
  - @devtools/plugin-search-common@1.2.14

## 0.4.2-next.1

### Patch Changes

- Updated dependencies
  - @devtools/plugin-catalog-backend@1.26.2-next.1
  - @devtools/backend-defaults@0.5.1-next.1
  - @devtools/backend-app-api@1.0.1-next.0
  - @devtools/backend-plugin-api@1.0.1-next.0
  - @devtools/cli-common@0.1.14
  - @devtools/cli-node@0.2.8
  - @devtools/config@1.2.0
  - @devtools/config-loader@1.9.1
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1
  - @devtools/plugin-app-node@0.1.26-next.0
  - @devtools/plugin-auth-node@0.5.3-next.0
  - @devtools/plugin-events-backend@0.3.13-next.0
  - @devtools/plugin-events-node@0.4.1-next.0
  - @devtools/plugin-permission-common@0.8.1
  - @devtools/plugin-permission-node@0.8.4-next.0
  - @devtools/plugin-scaffolder-node@0.5.0-next.1
  - @devtools/plugin-search-backend-node@1.3.3-next.1
  - @devtools/plugin-search-common@1.2.14

## 0.4.1-next.0

### Patch Changes

- 094eaa3: Remove references to in-repo backend-common
- 2f88f88: Updated backend installation instructions.
- Updated dependencies
  - @devtools/plugin-scaffolder-node@0.5.0-next.0
  - @devtools/plugin-search-backend-node@1.3.3-next.0
  - @devtools/backend-defaults@0.5.1-next.0
  - @devtools/backend-app-api@1.0.1-next.0
  - @devtools/plugin-catalog-backend@1.26.1-next.0
  - @devtools/plugin-permission-node@0.8.4-next.0
  - @devtools/plugin-events-backend@0.3.13-next.0
  - @devtools/plugin-events-node@0.4.1-next.0
  - @devtools/plugin-auth-node@0.5.3-next.0
  - @devtools/backend-plugin-api@1.0.1-next.0
  - @devtools/cli-common@0.1.14
  - @devtools/cli-node@0.2.8
  - @devtools/config@1.2.0
  - @devtools/config-loader@1.9.1
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1
  - @devtools/plugin-app-node@0.1.26-next.0
  - @devtools/plugin-permission-common@0.8.1
  - @devtools/plugin-search-common@1.2.14

## 0.4.0

### Minor Changes

- 9080f57: **BREAKING**: `dynamicPluginsServiceFactory` is no longer callable as a function. If you need to provide options to make a custom factory, use `dynamicPluginsSchemasServiceFactoryWithOptions` instead.

### Patch Changes

- cd38da8: Deprecate the `dynamicPluginsServiceRef`, `dynamicPluginsServiceFactory` and `dynamicPluginsServiceFactoryWithOptions` in favor of using the `dynamicPluginsFeatureDiscoveryLoader` to discover dynamic features in a new backend system.

  See usage examples below:

  Example using the `dynamicPluginsFeatureDiscoveryLoader` loader in a backend instance:

  ```ts
  import { createBackend } from '@devtools/backend-defaults';
  import { dynamicPluginsFeatureDiscoveryLoader } from '@devtools/backend-dynamic-feature-service';
  //...

  const backend = createBackend();
  backend.add(dynamicPluginsFeatureDiscoveryLoader);
  //...
  backend.start();
  ```

  Passing options to the `dynamicPluginsFeatureDiscoveryLoader` loader in a backend instance:

  ```ts
  import { createBackend } from '@devtools/backend-defaults';
  import { dynamicPluginsFeatureDiscoveryLoader } from '@devtools/backend-dynamic-feature-service';
  import { myCustomModuleLoader } from './myCustomModuleLoader';
  //...

  const backend = createBackend();
  backend.add(
    dynamicPluginsFeatureDiscoveryLoader({
      moduleLoader: myCustomModuleLoader,
    }),
  );
  //...
  backend.start();
  ```

- e27f889: Relax type check for a plugin's default export to also accept a BackendFeature defined as a function instead of an object
- d425fc4: Modules, plugins, and services are now `BackendFeature`, not a function that returns a feature.
- Updated dependencies
  - @devtools/backend-defaults@0.5.0
  - @devtools/backend-common@0.25.0
  - @devtools/backend-app-api@1.0.0
  - @devtools/backend-plugin-api@1.0.0
  - @devtools/plugin-auth-node@0.5.2
  - @devtools/plugin-catalog-backend@1.26.0
  - @devtools/plugin-app-node@0.1.25
  - @devtools/cli-node@0.2.8
  - @devtools/plugin-permission-node@0.8.3
  - @devtools/plugin-events-backend@0.3.12
  - @devtools/config-loader@1.9.1
  - @devtools/plugin-events-node@0.4.0
  - @devtools/cli-common@0.1.14
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1
  - @devtools/plugin-permission-common@0.8.1
  - @devtools/plugin-scaffolder-node@0.4.11
  - @devtools/plugin-search-backend-node@1.3.2
  - @devtools/plugin-search-common@1.2.14

## 0.4.0-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-app-api@1.0.0-next.2
  - @devtools/backend-common@0.25.0-next.2
  - @devtools/backend-defaults@0.5.0-next.2
  - @devtools/plugin-auth-node@0.5.2-next.2
  - @devtools/backend-plugin-api@1.0.0-next.2
  - @devtools/cli-node@0.2.8-next.0
  - @devtools/plugin-catalog-backend@1.26.0-next.2
  - @devtools/config-loader@1.9.1-next.0
  - @devtools/plugin-events-backend@0.3.12-next.2
  - @devtools/plugin-permission-node@0.8.3-next.2
  - @devtools/cli-common@0.1.14
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1
  - @devtools/plugin-app-node@0.1.25-next.2
  - @devtools/plugin-events-node@0.4.0-next.2
  - @devtools/plugin-permission-common@0.8.1
  - @devtools/plugin-scaffolder-node@0.4.11-next.2
  - @devtools/plugin-search-backend-node@1.3.2-next.2
  - @devtools/plugin-search-common@1.2.14

## 0.4.0-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-defaults@0.5.0-next.1
  - @devtools/backend-common@0.25.0-next.1
  - @devtools/plugin-auth-node@0.5.2-next.1
  - @devtools/backend-app-api@0.10.0-next.1
  - @devtools/plugin-catalog-backend@1.25.3-next.1
  - @devtools/backend-plugin-api@0.9.0-next.1
  - @devtools/cli-common@0.1.14
  - @devtools/cli-node@0.2.7
  - @devtools/config@1.2.0
  - @devtools/config-loader@1.9.0
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1
  - @devtools/plugin-app-node@0.1.25-next.1
  - @devtools/plugin-events-backend@0.3.12-next.1
  - @devtools/plugin-events-node@0.4.0-next.1
  - @devtools/plugin-permission-common@0.8.1
  - @devtools/plugin-permission-node@0.8.3-next.1
  - @devtools/plugin-scaffolder-node@0.4.11-next.1
  - @devtools/plugin-search-backend-node@1.3.2-next.1
  - @devtools/plugin-search-common@1.2.14

## 0.4.0-next.0

### Minor Changes

- 9080f57: **BREAKING**: `dynamicPluginsServiceFactory` is no longer callable as a function. If you need to provide options to make a custom factory, use `dynamicPluginsSchemasServiceFactoryWithOptions` instead.

### Patch Changes

- cd38da8: Deprecate the `dynamicPluginsServiceRef`, `dynamicPluginsServiceFactory` and `dynamicPluginsServiceFactoryWithOptions` in favor of using the `dynamicPluginsFeatureDiscoveryLoader` to discover dynamic features in a new backend system.

  See usage examples below:

  Example using the `dynamicPluginsFeatureDiscoveryLoader` loader in a backend instance:

  ```ts
  import { createBackend } from '@devtools/backend-defaults';
  import { dynamicPluginsFeatureDiscoveryLoader } from '@devtools/backend-dynamic-feature-service';
  //...

  const backend = createBackend();
  backend.add(dynamicPluginsFeatureDiscoveryLoader);
  //...
  backend.start();
  ```

  Passing options to the `dynamicPluginsFeatureDiscoveryLoader` loader in a backend instance:

  ```ts
  import { createBackend } from '@devtools/backend-defaults';
  import { dynamicPluginsFeatureDiscoveryLoader } from '@devtools/backend-dynamic-feature-service';
  import { myCustomModuleLoader } from './myCustomModuleLoader';
  //...

  const backend = createBackend();
  backend.add(
    dynamicPluginsFeatureDiscoveryLoader({
      moduleLoader: myCustomModuleLoader,
    }),
  );
  //...
  backend.start();
  ```

- e27f889: Relax type check for a plugin's default export to also accept a BackendFeature defined as a function instead of an object
- d425fc4: Modules, plugins, and services are now `BackendFeature`, not a function that returns a feature.
- Updated dependencies
  - @devtools/backend-app-api@0.10.0-next.0
  - @devtools/backend-plugin-api@0.9.0-next.0
  - @devtools/plugin-app-node@0.1.25-next.0
  - @devtools/backend-defaults@0.5.0-next.0
  - @devtools/plugin-permission-node@0.8.3-next.0
  - @devtools/backend-common@0.25.0-next.0
  - @devtools/plugin-catalog-backend@1.25.3-next.0
  - @devtools/plugin-events-backend@0.3.12-next.0
  - @devtools/plugin-events-node@0.4.0-next.0
  - @devtools/plugin-auth-node@0.5.2-next.0
  - @devtools/plugin-scaffolder-node@0.4.11-next.0
  - @devtools/plugin-search-backend-node@1.3.2-next.0
  - @devtools/cli-common@0.1.14
  - @devtools/cli-node@0.2.7
  - @devtools/config@1.2.0
  - @devtools/config-loader@1.9.0
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1
  - @devtools/plugin-permission-common@0.8.1
  - @devtools/plugin-search-common@1.2.14

## 0.3.0

### Minor Changes

- fc24d9e: Stop using `@devtools/backend-tasks` as it will be deleted in near future.

### Patch Changes

- 389f5a4: Update deprecated url-reader-related imports.
- b63d378: Update internal imports
- Updated dependencies
  - @devtools/backend-defaults@0.4.2
  - @devtools/backend-app-api@0.9.0
  - @devtools/backend-plugin-api@0.8.0
  - @devtools/backend-common@0.24.0
  - @devtools/plugin-catalog-backend@1.25.0
  - @devtools/plugin-search-backend-node@1.3.0
  - @devtools/plugin-scaffolder-node@0.4.9
  - @devtools/plugin-permission-common@0.8.1
  - @devtools/config-loader@1.9.0
  - @devtools/plugin-auth-node@0.5.0
  - @devtools/plugin-permission-node@0.8.1
  - @devtools/plugin-search-common@1.2.14
  - @devtools/cli-common@0.1.14
  - @devtools/cli-node@0.2.7
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1
  - @devtools/plugin-app-node@0.1.23
  - @devtools/plugin-events-backend@0.3.10
  - @devtools/plugin-events-node@0.3.9

## 0.2.16-next.3

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.8.0-next.3
  - @devtools/backend-common@0.23.4-next.3
  - @devtools/backend-app-api@0.8.1-next.3
  - @devtools/backend-tasks@0.5.28-next.3
  - @devtools/cli-common@0.1.14
  - @devtools/cli-node@0.2.7
  - @devtools/config@1.2.0
  - @devtools/config-loader@1.9.0-next.2
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1
  - @devtools/plugin-app-node@0.1.23-next.3
  - @devtools/plugin-auth-node@0.5.0-next.3
  - @devtools/plugin-catalog-backend@1.24.1-next.3
  - @devtools/plugin-events-backend@0.3.10-next.3
  - @devtools/plugin-events-node@0.3.9-next.3
  - @devtools/plugin-permission-common@0.8.1-next.1
  - @devtools/plugin-permission-node@0.8.1-next.3
  - @devtools/plugin-scaffolder-node@0.4.9-next.3
  - @devtools/plugin-search-backend-node@1.2.28-next.3
  - @devtools/plugin-search-common@1.2.14-next.1

## 0.2.16-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.8.0-next.2
  - @devtools/backend-app-api@0.8.1-next.2
  - @devtools/plugin-scaffolder-node@0.4.9-next.2
  - @devtools/plugin-permission-common@0.8.1-next.1
  - @devtools/backend-common@0.23.4-next.2
  - @devtools/plugin-catalog-backend@1.24.1-next.2
  - @devtools/config-loader@1.9.0-next.2
  - @devtools/plugin-auth-node@0.5.0-next.2
  - @devtools/plugin-permission-node@0.8.1-next.2
  - @devtools/plugin-search-backend-node@1.2.28-next.2
  - @devtools/plugin-search-common@1.2.14-next.1
  - @devtools/backend-tasks@0.5.28-next.2
  - @devtools/plugin-app-node@0.1.23-next.2
  - @devtools/plugin-events-backend@0.3.10-next.2
  - @devtools/plugin-events-node@0.3.9-next.2
  - @devtools/cli-node@0.2.7
  - @devtools/cli-common@0.1.14
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1

## 0.2.16-next.1

### Patch Changes

- Updated dependencies
  - @devtools/config-loader@1.9.0-next.1
  - @devtools/plugin-permission-common@0.8.1-next.0
  - @devtools/plugin-catalog-backend@1.24.1-next.1
  - @devtools/plugin-permission-node@0.8.1-next.1
  - @devtools/backend-plugin-api@0.7.1-next.1
  - @devtools/backend-app-api@0.8.1-next.1
  - @devtools/backend-common@0.23.4-next.1
  - @devtools/plugin-app-node@0.1.23-next.1
  - @devtools/plugin-search-backend-node@1.2.28-next.1
  - @devtools/plugin-search-common@1.2.14-next.0
  - @devtools/backend-tasks@0.5.28-next.1
  - @devtools/cli-common@0.1.14
  - @devtools/cli-node@0.2.7
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1
  - @devtools/plugin-auth-node@0.4.18-next.1
  - @devtools/plugin-events-backend@0.3.10-next.1
  - @devtools/plugin-events-node@0.3.9-next.1
  - @devtools/plugin-scaffolder-node@0.4.9-next.1

## 0.2.16-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.23.4-next.0
  - @devtools/plugin-catalog-backend@1.24.1-next.0
  - @devtools/config-loader@1.8.2-next.0
  - @devtools/backend-app-api@0.8.1-next.0
  - @devtools/backend-plugin-api@0.7.1-next.0
  - @devtools/backend-tasks@0.5.28-next.0
  - @devtools/cli-common@0.1.14
  - @devtools/cli-node@0.2.7
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1
  - @devtools/plugin-app-node@0.1.23-next.0
  - @devtools/plugin-auth-node@0.4.18-next.0
  - @devtools/plugin-events-backend@0.3.10-next.0
  - @devtools/plugin-events-node@0.3.9-next.0
  - @devtools/plugin-permission-common@0.8.0
  - @devtools/plugin-permission-node@0.8.1-next.0
  - @devtools/plugin-scaffolder-node@0.4.9-next.0
  - @devtools/plugin-search-backend-node@1.2.28-next.0
  - @devtools/plugin-search-common@1.2.13

## 0.2.15

### Patch Changes

- b05e1e1: Service factories exported by this package have been updated to use the new service factory format that doesn't use a callback.
- Updated dependencies
  - @devtools/backend-plugin-api@0.7.0
  - @devtools/backend-app-api@0.8.0
  - @devtools/backend-common@0.23.3
  - @devtools/cli-node@0.2.7
  - @devtools/backend-tasks@0.5.27
  - @devtools/plugin-permission-common@0.8.0
  - @devtools/plugin-permission-node@0.8.0
  - @devtools/plugin-scaffolder-node@0.4.8
  - @devtools/plugin-events-node@0.3.8
  - @devtools/plugin-auth-node@0.4.17
  - @devtools/plugin-catalog-backend@1.24.0
  - @devtools/plugin-app-node@0.1.22
  - @devtools/plugin-events-backend@0.3.9
  - @devtools/plugin-search-backend-node@1.2.27
  - @devtools/config-loader@1.8.1
  - @devtools/plugin-search-common@1.2.13
  - @devtools/cli-common@0.1.14
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1

## 0.2.15-next.1

### Patch Changes

- Updated dependencies
  - @devtools/plugin-catalog-backend@1.24.0-next.1
  - @devtools/backend-common@0.23.3-next.1
  - @devtools/backend-app-api@0.7.10-next.1
  - @devtools/backend-plugin-api@0.6.22-next.1
  - @devtools/backend-tasks@0.5.27-next.1
  - @devtools/cli-common@0.1.14
  - @devtools/cli-node@0.2.6
  - @devtools/config@1.2.0
  - @devtools/config-loader@1.8.1
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1
  - @devtools/plugin-app-node@0.1.22-next.1
  - @devtools/plugin-auth-node@0.4.17-next.1
  - @devtools/plugin-events-backend@0.3.9-next.1
  - @devtools/plugin-events-node@0.3.8-next.1
  - @devtools/plugin-permission-common@0.7.14
  - @devtools/plugin-permission-node@0.7.33-next.1
  - @devtools/plugin-scaffolder-node@0.4.8-next.1
  - @devtools/plugin-search-backend-node@1.2.27-next.1
  - @devtools/plugin-search-common@1.2.12

## 0.2.14-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.6.21-next.0
  - @devtools/backend-common@0.23.2-next.0
  - @devtools/backend-tasks@0.5.26-next.0
  - @devtools/plugin-scaffolder-node@0.4.7-next.0
  - @devtools/backend-app-api@0.7.9-next.0
  - @devtools/plugin-app-node@0.1.21-next.0
  - @devtools/plugin-auth-node@0.4.16-next.0
  - @devtools/plugin-catalog-backend@1.23.2-next.0
  - @devtools/plugin-events-backend@0.3.8-next.0
  - @devtools/plugin-events-node@0.3.7-next.0
  - @devtools/plugin-permission-node@0.7.32-next.0
  - @devtools/plugin-search-backend-node@1.2.26-next.0
  - @devtools/cli-common@0.1.14
  - @devtools/cli-node@0.2.6
  - @devtools/config@1.2.0
  - @devtools/config-loader@1.8.1
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1
  - @devtools/plugin-permission-common@0.7.14
  - @devtools/plugin-search-common@1.2.12

## 0.2.11

### Patch Changes

- 78a0b08: Internal refactor to handle `BackendFeature` contract change.
- Updated dependencies
  - @devtools/cli-node@0.2.6
  - @devtools/backend-app-api@0.7.6
  - @devtools/backend-common@0.23.0
  - @devtools/backend-plugin-api@0.6.19
  - @devtools/backend-tasks@0.5.24
  - @devtools/plugin-auth-node@0.4.14
  - @devtools/plugin-catalog-backend@1.23.0
  - @devtools/plugin-events-backend@0.3.6
  - @devtools/plugin-search-backend-node@1.2.24
  - @devtools/plugin-events-node@0.3.5
  - @devtools/plugin-permission-node@0.7.30
  - @devtools/plugin-permission-common@0.7.14
  - @devtools/plugin-scaffolder-node@0.4.5
  - @devtools/plugin-search-common@1.2.12
  - @devtools/plugin-app-node@0.1.19
  - @devtools/cli-common@0.1.14
  - @devtools/config-loader@1.8.1
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1

## 0.2.11-next.3

### Patch Changes

- Updated dependencies
  - @devtools/cli-node@0.2.6-next.2
  - @devtools/backend-plugin-api@0.6.19-next.3
  - @devtools/plugin-auth-node@0.4.14-next.3
  - @devtools/plugin-search-backend-node@1.2.24-next.3
  - @devtools/plugin-permission-common@0.7.14-next.0
  - @devtools/plugin-catalog-backend@1.23.0-next.3
  - @devtools/plugin-permission-node@0.7.30-next.3
  - @devtools/plugin-scaffolder-node@0.4.5-next.3
  - @devtools/plugin-events-backend@0.3.6-next.3
  - @devtools/plugin-search-common@1.2.12-next.0
  - @devtools/plugin-events-node@0.3.5-next.2
  - @devtools/plugin-app-node@0.1.19-next.2
  - @devtools/cli-common@0.1.14-next.0
  - @devtools/backend-tasks@0.5.24-next.3
  - @devtools/backend-common@0.23.0-next.3
  - @devtools/backend-app-api@0.7.6-next.3
  - @devtools/config-loader@1.8.1-next.0
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1

## 0.2.11-next.2

### Patch Changes

- Updated dependencies
  - @devtools/cli-node@0.2.6-next.1
  - @devtools/backend-plugin-api@0.6.19-next.2
  - @devtools/backend-common@0.23.0-next.2
  - @devtools/plugin-permission-node@0.7.30-next.2
  - @devtools/backend-app-api@0.7.6-next.2
  - @devtools/backend-tasks@0.5.24-next.2
  - @devtools/plugin-app-node@0.1.19-next.1
  - @devtools/plugin-auth-node@0.4.14-next.2
  - @devtools/plugin-catalog-backend@1.23.0-next.2
  - @devtools/plugin-events-backend@0.3.6-next.2
  - @devtools/plugin-events-node@0.3.5-next.1
  - @devtools/plugin-scaffolder-node@0.4.5-next.2
  - @devtools/plugin-search-backend-node@1.2.24-next.2
  - @devtools/config-loader@1.8.0
  - @devtools/cli-common@0.1.13
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1
  - @devtools/plugin-permission-common@0.7.13
  - @devtools/plugin-search-common@1.2.11

## 0.2.11-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-app-api@0.7.6-next.1
  - @devtools/backend-tasks@0.5.24-next.1
  - @devtools/backend-plugin-api@0.6.19-next.1
  - @devtools/plugin-permission-node@0.7.30-next.1
  - @devtools/backend-common@0.23.0-next.1
  - @devtools/plugin-catalog-backend@1.23.0-next.1
  - @devtools/cli-node@0.2.6-next.0
  - @devtools/config-loader@1.8.0
  - @devtools/plugin-auth-node@0.4.14-next.1
  - @devtools/plugin-events-backend@0.3.6-next.1
  - @devtools/plugin-events-node@0.3.5-next.0
  - @devtools/plugin-scaffolder-node@0.4.5-next.1
  - @devtools/plugin-search-backend-node@1.2.24-next.1

## 0.2.11-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-app-api@0.7.6-next.0
  - @devtools/cli-node@0.2.6-next.0
  - @devtools/backend-tasks@0.5.24-next.0
  - @devtools/backend-common@0.22.1-next.0
  - @devtools/plugin-catalog-backend@1.23.0-next.0
  - @devtools/plugin-search-backend-node@1.2.24-next.0
  - @devtools/plugin-events-node@0.3.5-next.0
  - @devtools/backend-plugin-api@0.6.19-next.0
  - @devtools/plugin-auth-node@0.4.14-next.0
  - @devtools/plugin-events-backend@0.3.6-next.0
  - @devtools/plugin-permission-node@0.7.30-next.0
  - @devtools/plugin-scaffolder-node@0.4.5-next.0
  - @devtools/plugin-app-node@0.1.19-next.0
  - @devtools/config-loader@1.8.0
  - @devtools/cli-common@0.1.13
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1
  - @devtools/plugin-permission-common@0.7.13
  - @devtools/plugin-search-common@1.2.11

## 0.2.10

### Patch Changes

- b192752: Updated `README.md` to point to `packages/backend` instead of `packages/backend-next`.
- d229dc4: Move path utilities from `backend-common` to the `backend-plugin-api` package.
- b611fd0: Updates the `scanRoot` method in the `PluginScanner` class to specifically ignore the `lost+found` directory, which is a system-generated directory used for file recovery on Unix-like systems. Skipping this directory avoids unnecessary errors.
- Updated dependencies
  - @devtools/plugin-catalog-backend@1.22.0
  - @devtools/backend-app-api@0.7.3
  - @devtools/backend-common@0.22.0
  - @devtools/backend-plugin-api@0.6.18
  - @devtools/plugin-scaffolder-node@0.4.4
  - @devtools/backend-tasks@0.5.23
  - @devtools/plugin-search-backend-node@1.2.22
  - @devtools/plugin-events-node@0.3.4
  - @devtools/plugin-auth-node@0.4.13
  - @devtools/plugin-app-node@0.1.18
  - @devtools/plugin-events-backend@0.3.5
  - @devtools/plugin-permission-node@0.7.29

## 0.2.10-next.2

### Patch Changes

- b192752: Updated `README.md` to point to `packages/backend` instead of `packages/backend-next`.
- Updated dependencies
  - @devtools/plugin-catalog-backend@1.22.0-next.2
  - @devtools/backend-common@0.22.0-next.2
  - @devtools/plugin-scaffolder-node@0.4.4-next.2
  - @devtools/plugin-events-node@0.3.4-next.2

## 0.2.10-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-app-api@0.7.2-next.1
  - @devtools/backend-common@0.22.0-next.1
  - @devtools/plugin-catalog-backend@1.22.0-next.1
  - @devtools/plugin-scaffolder-node@0.4.4-next.1
  - @devtools/backend-tasks@0.5.23-next.1
  - @devtools/plugin-auth-node@0.4.13-next.1
  - @devtools/plugin-events-backend@0.3.5-next.1
  - @devtools/plugin-events-node@0.3.4-next.1
  - @devtools/plugin-permission-node@0.7.29-next.1
  - @devtools/plugin-search-backend-node@1.2.22-next.1
  - @devtools/cli-node@0.2.5
  - @devtools/config-loader@1.8.0
  - @devtools/backend-plugin-api@0.6.18-next.1
  - @devtools/plugin-app-node@0.1.18-next.1

## 0.2.10-next.0

### Patch Changes

- b611fd0: Updates the `scanRoot` method in the `PluginScanner` class to specifically ignore the `lost+found` directory, which is a system-generated directory used for file recovery on Unix-like systems. Skipping this directory avoids unnecessary errors.
- Updated dependencies
  - @devtools/plugin-catalog-backend@1.22.0-next.0
  - @devtools/backend-app-api@0.7.1-next.0
  - @devtools/plugin-search-backend-node@1.2.22-next.0
  - @devtools/plugin-auth-node@0.4.13-next.0
  - @devtools/backend-common@0.21.8-next.0
  - @devtools/backend-plugin-api@0.6.18-next.0
  - @devtools/plugin-scaffolder-node@0.4.4-next.0
  - @devtools/backend-tasks@0.5.23-next.0
  - @devtools/cli-common@0.1.13
  - @devtools/cli-node@0.2.5
  - @devtools/config@1.2.0
  - @devtools/config-loader@1.8.0
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1
  - @devtools/plugin-app-node@0.1.18-next.0
  - @devtools/plugin-events-backend@0.3.5-next.0
  - @devtools/plugin-events-node@0.3.4-next.0
  - @devtools/plugin-permission-common@0.7.13
  - @devtools/plugin-permission-node@0.7.29-next.0
  - @devtools/plugin-search-common@1.2.11

## 0.2.9

### Patch Changes

- 82ff03e: Use `PackageRole` type explicitly
- Updated dependencies
  - @devtools/backend-common@0.21.7
  - @devtools/config-loader@1.8.0
  - @devtools/backend-app-api@0.7.0
  - @devtools/plugin-permission-node@0.7.28
  - @devtools/plugin-catalog-backend@1.21.1
  - @devtools/plugin-events-backend@0.3.4
  - @devtools/backend-plugin-api@0.6.17
  - @devtools/plugin-search-backend-node@1.2.21
  - @devtools/backend-tasks@0.5.22
  - @devtools/plugin-auth-node@0.4.12
  - @devtools/cli-node@0.2.5
  - @devtools/plugin-events-node@0.3.3
  - @devtools/plugin-scaffolder-node@0.4.3
  - @devtools/plugin-app-node@0.1.17
  - @devtools/cli-common@0.1.13
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1
  - @devtools/plugin-permission-common@0.7.13
  - @devtools/plugin-search-common@1.2.11

## 0.2.9-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.21.7-next.1
  - @devtools/backend-app-api@0.7.0-next.1
  - @devtools/plugin-events-backend@0.3.4-next.1
  - @devtools/backend-plugin-api@0.6.17-next.1
  - @devtools/plugin-auth-node@0.4.12-next.1
  - @devtools/plugin-catalog-backend@1.21.1-next.1
  - @devtools/backend-tasks@0.5.22-next.1
  - @devtools/plugin-events-node@0.3.3-next.1
  - @devtools/plugin-permission-node@0.7.28-next.1
  - @devtools/plugin-scaffolder-node@0.4.3-next.1
  - @devtools/plugin-search-backend-node@1.2.21-next.1
  - @devtools/cli-common@0.1.13
  - @devtools/cli-node@0.2.4
  - @devtools/config@1.2.0
  - @devtools/config-loader@1.8.0-next.0
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1
  - @devtools/plugin-app-node@0.1.17-next.1
  - @devtools/plugin-permission-common@0.7.13
  - @devtools/plugin-search-common@1.2.11

## 0.2.8-next.0

### Patch Changes

- Updated dependencies
  - @devtools/plugin-catalog-backend@1.21.1-next.0
  - @devtools/backend-app-api@0.6.3-next.0
  - @devtools/backend-common@0.21.7-next.0
  - @devtools/config-loader@1.8.0-next.0
  - @devtools/backend-plugin-api@0.6.17-next.0
  - @devtools/backend-tasks@0.5.22-next.0
  - @devtools/cli-common@0.1.13
  - @devtools/cli-node@0.2.4
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1
  - @devtools/plugin-app-node@0.1.17-next.0
  - @devtools/plugin-auth-node@0.4.12-next.0
  - @devtools/plugin-events-backend@0.3.3-next.0
  - @devtools/plugin-events-node@0.3.3-next.0
  - @devtools/plugin-permission-common@0.7.13
  - @devtools/plugin-permission-node@0.7.28-next.0
  - @devtools/plugin-scaffolder-node@0.4.3-next.0
  - @devtools/plugin-search-backend-node@1.2.21-next.0
  - @devtools/plugin-search-common@1.2.11

## 0.2.7

### Patch Changes

- Updated dependencies
  - @devtools/plugin-catalog-backend@1.21.0
  - @devtools/backend-app-api@0.6.2
  - @devtools/plugin-auth-node@0.4.11
  - @devtools/backend-common@0.21.6
  - @devtools/backend-plugin-api@0.6.16
  - @devtools/plugin-permission-node@0.7.27
  - @devtools/backend-tasks@0.5.21
  - @devtools/plugin-events-backend@0.3.2
  - @devtools/plugin-events-node@0.3.2
  - @devtools/plugin-scaffolder-node@0.4.2
  - @devtools/plugin-search-backend-node@1.2.20
  - @devtools/cli-common@0.1.13
  - @devtools/cli-node@0.2.4
  - @devtools/config@1.2.0
  - @devtools/config-loader@1.7.0
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1
  - @devtools/plugin-app-node@0.1.16
  - @devtools/plugin-permission-common@0.7.13
  - @devtools/plugin-search-common@1.2.11

## 0.2.6

### Patch Changes

- Updated dependencies
  - @devtools/plugin-catalog-backend@1.20.0
  - @devtools/backend-app-api@0.6.1
  - @devtools/backend-common@0.21.5
  - @devtools/plugin-auth-node@0.4.10
  - @devtools/backend-tasks@0.5.20
  - @devtools/plugin-events-backend@0.3.1
  - @devtools/plugin-events-node@0.3.1
  - @devtools/plugin-permission-node@0.7.26
  - @devtools/plugin-scaffolder-node@0.4.1
  - @devtools/plugin-search-backend-node@1.2.19
  - @devtools/backend-plugin-api@0.6.15
  - @devtools/cli-common@0.1.13
  - @devtools/cli-node@0.2.4
  - @devtools/config@1.2.0
  - @devtools/config-loader@1.7.0
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1
  - @devtools/plugin-app-node@0.1.15
  - @devtools/plugin-permission-common@0.7.13
  - @devtools/plugin-search-common@1.2.11

## 0.2.5

### Patch Changes

- Updated dependencies
  - @devtools/plugin-catalog-backend@1.19.0

## 0.2.4

### Patch Changes

- 5247909: Add `events: EventsService` to `LegacyPluginEnvironment`.
- Updated dependencies
  - @devtools/plugin-scaffolder-node@0.4.0
  - @devtools/plugin-events-backend@0.3.0
  - @devtools/plugin-events-node@0.3.0
  - @devtools/plugin-catalog-backend@1.18.0
  - @devtools/backend-common@0.21.4
  - @devtools/plugin-auth-node@0.4.9
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/backend-plugin-api@0.6.14
  - @devtools/backend-app-api@0.6.0
  - @devtools/config-loader@1.7.0
  - @devtools/plugin-permission-common@0.7.13
  - @devtools/plugin-search-common@1.2.11
  - @devtools/backend-tasks@0.5.19
  - @devtools/plugin-search-backend-node@1.2.18
  - @devtools/plugin-permission-node@0.7.25
  - @devtools/cli-node@0.2.4
  - @devtools/cli-common@0.1.13
  - @devtools/types@1.1.1
  - @devtools/plugin-app-node@0.1.14

## 0.2.4-next.2

### Patch Changes

- Updated dependencies
  - @devtools/plugin-scaffolder-node@0.4.0-next.2
  - @devtools/plugin-catalog-backend@1.18.0-next.2
  - @devtools/backend-app-api@0.6.0-next.2
  - @devtools/backend-common@0.21.4-next.2
  - @devtools/plugin-auth-node@0.4.9-next.2
  - @devtools/backend-plugin-api@0.6.14-next.2
  - @devtools/backend-tasks@0.5.19-next.2
  - @devtools/cli-common@0.1.13
  - @devtools/cli-node@0.2.4-next.0
  - @devtools/config@1.2.0-next.1
  - @devtools/config-loader@1.7.0-next.1
  - @devtools/errors@1.2.4-next.0
  - @devtools/types@1.1.1
  - @devtools/plugin-app-node@0.1.14-next.2
  - @devtools/plugin-events-backend@0.3.0-next.2
  - @devtools/plugin-events-node@0.3.0-next.2
  - @devtools/plugin-permission-common@0.7.13-next.1
  - @devtools/plugin-permission-node@0.7.25-next.2
  - @devtools/plugin-search-backend-node@1.2.18-next.2
  - @devtools/plugin-search-common@1.2.11-next.1

## 0.2.4-next.1

### Patch Changes

- Updated dependencies
  - @devtools/config@1.2.0-next.1
  - @devtools/plugin-scaffolder-node@0.4.0-next.1
  - @devtools/config-loader@1.7.0-next.1
  - @devtools/backend-app-api@0.6.0-next.1
  - @devtools/backend-common@0.21.4-next.1
  - @devtools/backend-plugin-api@0.6.14-next.1
  - @devtools/backend-tasks@0.5.19-next.1
  - @devtools/plugin-auth-node@0.4.9-next.1
  - @devtools/plugin-catalog-backend@1.18.0-next.1
  - @devtools/plugin-events-backend@0.3.0-next.1
  - @devtools/plugin-permission-common@0.7.13-next.1
  - @devtools/plugin-permission-node@0.7.25-next.1
  - @devtools/plugin-search-backend-node@1.2.18-next.1
  - @devtools/plugin-app-node@0.1.14-next.1
  - @devtools/cli-common@0.1.13
  - @devtools/cli-node@0.2.4-next.0
  - @devtools/errors@1.2.4-next.0
  - @devtools/types@1.1.1
  - @devtools/plugin-events-node@0.3.0-next.1
  - @devtools/plugin-search-common@1.2.11-next.1

## 0.2.3-next.0

### Patch Changes

- 5247909: Add `events: EventsService` to `LegacyPluginEnvironment`.
- Updated dependencies
  - @devtools/plugin-events-backend@0.3.0-next.0
  - @devtools/plugin-events-node@0.3.0-next.0
  - @devtools/backend-common@0.21.3-next.0
  - @devtools/plugin-auth-node@0.4.8-next.0
  - @devtools/errors@1.2.4-next.0
  - @devtools/plugin-scaffolder-node@0.3.3-next.0
  - @devtools/backend-plugin-api@0.6.13-next.0
  - @devtools/backend-app-api@0.6.0-next.0
  - @devtools/plugin-catalog-backend@1.18.0-next.0
  - @devtools/plugin-permission-common@0.7.13-next.0
  - @devtools/plugin-search-common@1.2.11-next.0
  - @devtools/backend-tasks@0.5.18-next.0
  - @devtools/plugin-search-backend-node@1.2.17-next.0
  - @devtools/plugin-permission-node@0.7.24-next.0
  - @devtools/cli-node@0.2.4-next.0
  - @devtools/config-loader@1.6.3-next.0
  - @devtools/config@1.1.2-next.0
  - @devtools/plugin-app-node@0.1.13-next.0
  - @devtools/cli-common@0.1.13
  - @devtools/types@1.1.1

## 0.2.0

### Minor Changes

- d7adbbf: Implement the discovery of additional individual configuration schemas for dynamic plugins, and provide:

  - an alternate implementation of the root logger service that takes them into account,
  - an extension to the App backend plugin to set a global configuration schema that takes them into account.

### Patch Changes

- 8723c5a: Fix wrong `alpha` support in dynamic plugins support: the `alpha` sub-package should not be required for the dynamic plugins to be loaded under the new backend system.
- 8472188: Added or fixed the `repository` field in `package.json`.
- 6bb6f3e: Updated dependency `fs-extra` to `^11.2.0`.
  Updated dependency `@types/fs-extra` to `^11.0.0`.
- Updated dependencies
  - @devtools/backend-common@0.21.0
  - @devtools/plugin-auth-node@0.4.4
  - @devtools/cli-node@0.2.3
  - @devtools/backend-app-api@0.5.11
  - @devtools/backend-plugin-api@0.6.10
  - @devtools/plugin-catalog-backend@1.17.0
  - @devtools/backend-tasks@0.5.15
  - @devtools/plugin-events-backend@0.2.19
  - @devtools/config-loader@1.6.2
  - @devtools/plugin-scaffolder-node@0.3.0
  - @devtools/plugin-app-node@0.1.10
  - @devtools/plugin-permission-node@0.7.21
  - @devtools/plugin-search-backend-node@1.2.14
  - @devtools/cli-common@0.1.13
  - @devtools/config@1.1.1
  - @devtools/errors@1.2.3
  - @devtools/types@1.1.1
  - @devtools/plugin-events-node@0.2.19
  - @devtools/plugin-permission-common@0.7.12
  - @devtools/plugin-search-common@1.2.10

## 0.2.0-next.3

### Minor Changes

- d7adbbf: Implement the discovery of additional individual configuration schemas for dynamic plugins, and provide:

  - an alternate implementation of the root logger service that takes them into account,
  - an extension to the App backend plugin to set a global configuration schema that takes them into account.

### Patch Changes

- 8472188: Added or fixed the `repository` field in `package.json`.
- Updated dependencies
  - @devtools/backend-common@0.21.0-next.3
  - @devtools/cli-node@0.2.3-next.0
  - @devtools/backend-app-api@0.5.11-next.3
  - @devtools/backend-tasks@0.5.15-next.3
  - @devtools/config-loader@1.6.2-next.0
  - @devtools/plugin-app-node@0.1.10-next.3
  - @devtools/plugin-catalog-backend@1.17.0-next.3
  - @devtools/plugin-auth-node@0.4.4-next.3
  - @devtools/plugin-events-backend@0.2.19-next.3
  - @devtools/plugin-permission-node@0.7.21-next.3
  - @devtools/plugin-scaffolder-node@0.3.0-next.3
  - @devtools/plugin-search-backend-node@1.2.14-next.3
  - @devtools/backend-plugin-api@0.6.10-next.3
  - @devtools/cli-common@0.1.13
  - @devtools/config@1.1.1
  - @devtools/errors@1.2.3
  - @devtools/types@1.1.1
  - @devtools/plugin-events-node@0.2.19-next.3
  - @devtools/plugin-permission-common@0.7.12
  - @devtools/plugin-search-common@1.2.10

## 0.1.1-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.21.0-next.2
  - @devtools/backend-plugin-api@0.6.10-next.2
  - @devtools/plugin-catalog-backend@1.17.0-next.2
  - @devtools/backend-tasks@0.5.15-next.2
  - @devtools/plugin-events-backend@0.2.19-next.2
  - @devtools/plugin-auth-node@0.4.4-next.2
  - @devtools/plugin-permission-node@0.7.21-next.2
  - @devtools/plugin-scaffolder-node@0.3.0-next.2
  - @devtools/plugin-search-backend-node@1.2.14-next.2
  - @devtools/plugin-events-node@0.2.19-next.2
  - @devtools/config@1.1.1
  - @devtools/cli-common@0.1.13
  - @devtools/cli-node@0.2.2
  - @devtools/errors@1.2.3
  - @devtools/types@1.1.1
  - @devtools/plugin-permission-common@0.7.12
  - @devtools/plugin-search-common@1.2.10

## 0.1.1-next.1

### Patch Changes

- 8723c5a: Fix wrong `alpha` support in dynamic plugins support: the `alpha` sub-package should not be required for the dynamic plugins to be loaded under the new backend system.
- Updated dependencies
  - @devtools/plugin-catalog-backend@1.17.0-next.1
  - @devtools/backend-plugin-api@0.6.10-next.1
  - @devtools/backend-common@0.21.0-next.1
  - @devtools/plugin-scaffolder-node@0.3.0-next.1
  - @devtools/backend-tasks@0.5.15-next.1
  - @devtools/cli-common@0.1.13
  - @devtools/cli-node@0.2.2
  - @devtools/config@1.1.1
  - @devtools/errors@1.2.3
  - @devtools/types@1.1.1
  - @devtools/plugin-auth-node@0.4.4-next.1
  - @devtools/plugin-events-backend@0.2.19-next.1
  - @devtools/plugin-events-node@0.2.19-next.1
  - @devtools/plugin-permission-common@0.7.12
  - @devtools/plugin-permission-node@0.7.21-next.1
  - @devtools/plugin-search-backend-node@1.2.14-next.1
  - @devtools/plugin-search-common@1.2.10

## 0.1.1-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.21.0-next.0
  - @devtools/plugin-catalog-backend@1.17.0-next.0
  - @devtools/plugin-scaffolder-node@0.3.0-next.0
  - @devtools/backend-tasks@0.5.15-next.0
  - @devtools/cli-node@0.2.2
  - @devtools/plugin-auth-node@0.4.4-next.0
  - @devtools/plugin-events-backend@0.2.19-next.0
  - @devtools/plugin-permission-node@0.7.21-next.0
  - @devtools/plugin-search-backend-node@1.2.14-next.0
  - @devtools/backend-plugin-api@0.6.10-next.0
  - @devtools/cli-common@0.1.13
  - @devtools/config@1.1.1
  - @devtools/errors@1.2.3
  - @devtools/types@1.1.1
  - @devtools/plugin-events-node@0.2.19-next.0
  - @devtools/plugin-permission-common@0.7.12
  - @devtools/plugin-search-common@1.2.10

## 0.1.0

### Minor Changes

- eb81f42: New `backend-dynamic-feature-service` package, for the discovery of dynamic frontend and backend plugins (and modules) and the loading of the backend ones inside the backend application.

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.20.1
  - @devtools/cli-node@0.2.2
  - @devtools/plugin-events-backend@0.2.18
  - @devtools/backend-plugin-api@0.6.9
  - @devtools/plugin-permission-common@0.7.12
  - @devtools/plugin-permission-node@0.7.20
  - @devtools/plugin-catalog-backend@1.16.1
  - @devtools/backend-tasks@0.5.14
  - @devtools/plugin-auth-node@0.4.3
  - @devtools/plugin-scaffolder-node@0.2.10
  - @devtools/plugin-search-backend-node@1.2.13
  - @devtools/cli-common@0.1.13
  - @devtools/config@1.1.1
  - @devtools/errors@1.2.3
  - @devtools/types@1.1.1
  - @devtools/plugin-events-node@0.2.18
  - @devtools/plugin-search-common@1.2.10

## 0.0.5-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.6.9-next.2
  - @devtools/backend-common@0.20.1-next.2
  - @devtools/plugin-auth-node@0.4.3-next.2
  - @devtools/plugin-catalog-backend@1.16.1-next.2
  - @devtools/plugin-events-backend@0.2.18-next.2
  - @devtools/plugin-events-node@0.2.18-next.2
  - @devtools/plugin-permission-node@0.7.20-next.2
  - @devtools/plugin-scaffolder-node@0.2.10-next.2
  - @devtools/plugin-search-backend-node@1.2.13-next.2
  - @devtools/backend-tasks@0.5.14-next.2
  - @devtools/cli-node@0.2.2-next.0

## 0.0.5-next.1

### Patch Changes

- Updated dependencies
  - @devtools/cli-node@0.2.2-next.0
  - @devtools/backend-common@0.20.1-next.1
  - @devtools/config@1.1.1
  - @devtools/backend-tasks@0.5.14-next.1
  - @devtools/plugin-auth-node@0.4.3-next.1
  - @devtools/plugin-catalog-backend@1.16.1-next.1
  - @devtools/plugin-events-backend@0.2.18-next.1
  - @devtools/plugin-permission-node@0.7.20-next.1
  - @devtools/plugin-scaffolder-node@0.2.10-next.1
  - @devtools/plugin-search-backend-node@1.2.13-next.1
  - @devtools/backend-plugin-api@0.6.9-next.1
  - @devtools/cli-common@0.1.13
  - @devtools/errors@1.2.3
  - @devtools/types@1.1.1
  - @devtools/plugin-events-node@0.2.18-next.1
  - @devtools/plugin-permission-common@0.7.11
  - @devtools/plugin-search-common@1.2.9

## 0.0.5-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.20.1-next.0
  - @devtools/backend-plugin-api@0.6.9-next.0
  - @devtools/backend-tasks@0.5.14-next.0
  - @devtools/cli-common@0.1.13
  - @devtools/cli-node@0.2.1
  - @devtools/config@1.1.1
  - @devtools/errors@1.2.3
  - @devtools/types@1.1.1
  - @devtools/plugin-auth-node@0.4.3-next.0
  - @devtools/plugin-catalog-backend@1.16.1-next.0
  - @devtools/plugin-events-backend@0.2.18-next.0
  - @devtools/plugin-events-node@0.2.18-next.0
  - @devtools/plugin-permission-common@0.7.11
  - @devtools/plugin-permission-node@0.7.20-next.0
  - @devtools/plugin-scaffolder-node@0.2.10-next.0
  - @devtools/plugin-search-backend-node@1.2.13-next.0
  - @devtools/plugin-search-common@1.2.9

## 0.0.4

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.20.0
  - @devtools/plugin-catalog-backend@1.16.0
  - @devtools/plugin-scaffolder-node@0.2.9
  - @devtools/backend-tasks@0.5.13
  - @devtools/plugin-auth-node@0.4.2
  - @devtools/plugin-permission-common@0.7.11
  - @devtools/plugin-permission-node@0.7.19
  - @devtools/cli-node@0.2.1
  - @devtools/plugin-events-backend@0.2.17
  - @devtools/plugin-search-backend-node@1.2.12
  - @devtools/backend-plugin-api@0.6.8
  - @devtools/cli-common@0.1.13
  - @devtools/config@1.1.1
  - @devtools/errors@1.2.3
  - @devtools/types@1.1.1
  - @devtools/plugin-events-node@0.2.17
  - @devtools/plugin-search-common@1.2.9

## 0.0.4-next.3

### Patch Changes

- Updated dependencies
  - @devtools/plugin-scaffolder-node@0.2.9-next.3
  - @devtools/backend-common@0.20.0-next.3
  - @devtools/backend-plugin-api@0.6.8-next.3
  - @devtools/backend-tasks@0.5.13-next.3
  - @devtools/cli-common@0.1.13
  - @devtools/cli-node@0.2.0
  - @devtools/config@1.1.1
  - @devtools/errors@1.2.3
  - @devtools/types@1.1.1
  - @devtools/plugin-auth-node@0.4.2-next.3
  - @devtools/plugin-catalog-backend@1.16.0-next.3
  - @devtools/plugin-events-backend@0.2.17-next.3
  - @devtools/plugin-events-node@0.2.17-next.3
  - @devtools/plugin-permission-common@0.7.10
  - @devtools/plugin-permission-node@0.7.19-next.3
  - @devtools/plugin-search-backend-node@1.2.12-next.3
  - @devtools/plugin-search-common@1.2.8

## 0.0.4-next.2

### Patch Changes

- Updated dependencies
  - @devtools/plugin-catalog-backend@1.16.0-next.2
  - @devtools/backend-common@0.20.0-next.2
  - @devtools/plugin-auth-node@0.4.2-next.2
  - @devtools/plugin-events-backend@0.2.17-next.2
  - @devtools/backend-plugin-api@0.6.8-next.2
  - @devtools/backend-tasks@0.5.13-next.2
  - @devtools/cli-common@0.1.13
  - @devtools/cli-node@0.2.0
  - @devtools/config@1.1.1
  - @devtools/errors@1.2.3
  - @devtools/types@1.1.1
  - @devtools/plugin-events-node@0.2.17-next.2
  - @devtools/plugin-permission-common@0.7.10
  - @devtools/plugin-permission-node@0.7.19-next.2
  - @devtools/plugin-scaffolder-node@0.2.9-next.2
  - @devtools/plugin-search-backend-node@1.2.12-next.2
  - @devtools/plugin-search-common@1.2.8

## 0.0.4-next.1

### Patch Changes

- Updated dependencies
  - @devtools/plugin-catalog-backend@1.15.1-next.1
  - @devtools/backend-common@0.20.0-next.1
  - @devtools/backend-plugin-api@0.6.8-next.1
  - @devtools/backend-tasks@0.5.13-next.1
  - @devtools/cli-common@0.1.13
  - @devtools/cli-node@0.2.0
  - @devtools/config@1.1.1
  - @devtools/errors@1.2.3
  - @devtools/types@1.1.1
  - @devtools/plugin-auth-node@0.4.2-next.1
  - @devtools/plugin-events-backend@0.2.17-next.1
  - @devtools/plugin-events-node@0.2.17-next.1
  - @devtools/plugin-permission-common@0.7.10
  - @devtools/plugin-permission-node@0.7.19-next.1
  - @devtools/plugin-scaffolder-node@0.2.9-next.1
  - @devtools/plugin-search-backend-node@1.2.12-next.1
  - @devtools/plugin-search-common@1.2.8

## 0.0.4-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.20.0-next.0
  - @devtools/backend-tasks@0.5.13-next.0
  - @devtools/plugin-auth-node@0.4.2-next.0
  - @devtools/plugin-catalog-backend@1.15.1-next.0
  - @devtools/plugin-events-backend@0.2.17-next.0
  - @devtools/plugin-permission-node@0.7.19-next.0
  - @devtools/plugin-scaffolder-node@0.2.9-next.0
  - @devtools/plugin-search-backend-node@1.2.12-next.0
  - @devtools/backend-plugin-api@0.6.8-next.0
  - @devtools/cli-common@0.1.13
  - @devtools/cli-node@0.2.0
  - @devtools/config@1.1.1
  - @devtools/errors@1.2.3
  - @devtools/types@1.1.1
  - @devtools/plugin-events-node@0.2.17-next.0
  - @devtools/plugin-permission-common@0.7.10
  - @devtools/plugin-search-common@1.2.8

## 0.0.3

### Patch Changes

- Updated dependencies
  - @devtools/plugin-catalog-backend@1.15.0
  - @devtools/cli-node@0.2.0
  - @devtools/plugin-search-backend-node@1.2.11
  - @devtools/backend-common@0.19.9
  - @devtools/backend-plugin-api@0.6.7
  - @devtools/backend-tasks@0.5.12
  - @devtools/plugin-permission-common@0.7.10
  - @devtools/plugin-scaffolder-node@0.2.8
  - @devtools/cli-common@0.1.13
  - @devtools/config@1.1.1
  - @devtools/errors@1.2.3
  - @devtools/types@1.1.1
  - @devtools/plugin-auth-node@0.4.1
  - @devtools/plugin-events-backend@0.2.16
  - @devtools/plugin-events-node@0.2.16
  - @devtools/plugin-permission-node@0.7.18
  - @devtools/plugin-search-common@1.2.8

## 0.0.3-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.6.7-next.2
  - @devtools/backend-common@0.19.9-next.2
  - @devtools/plugin-catalog-backend@1.15.0-next.2
  - @devtools/backend-tasks@0.5.12-next.2
  - @devtools/plugin-auth-node@0.4.1-next.2
  - @devtools/plugin-events-backend@0.2.16-next.2
  - @devtools/plugin-events-node@0.2.16-next.2
  - @devtools/plugin-permission-node@0.7.18-next.2
  - @devtools/plugin-scaffolder-node@0.2.8-next.2
  - @devtools/plugin-search-backend-node@1.2.11-next.2

## 0.0.3-next.1

### Patch Changes

- Updated dependencies
  - @devtools/plugin-catalog-backend@1.15.0-next.1
  - @devtools/backend-common@0.19.9-next.1
  - @devtools/plugin-scaffolder-node@0.2.8-next.1
  - @devtools/backend-tasks@0.5.12-next.1
  - @devtools/plugin-auth-node@0.4.1-next.1
  - @devtools/plugin-events-backend@0.2.16-next.1
  - @devtools/plugin-permission-node@0.7.18-next.1
  - @devtools/plugin-search-backend-node@1.2.11-next.1
  - @devtools/backend-plugin-api@0.6.7-next.1
  - @devtools/cli-common@0.1.13
  - @devtools/cli-node@0.2.0-next.0
  - @devtools/config@1.1.1
  - @devtools/errors@1.2.3
  - @devtools/types@1.1.1
  - @devtools/plugin-events-node@0.2.16-next.1
  - @devtools/plugin-permission-common@0.7.9
  - @devtools/plugin-search-common@1.2.7

## 0.0.3-next.0

### Patch Changes

- Updated dependencies
  - @devtools/cli-node@0.2.0-next.0
  - @devtools/plugin-search-backend-node@1.2.11-next.0
  - @devtools/plugin-catalog-backend@1.15.0-next.0
  - @devtools/plugin-scaffolder-node@0.2.8-next.0
  - @devtools/backend-common@0.19.9-next.0
  - @devtools/backend-plugin-api@0.6.7-next.0
  - @devtools/backend-tasks@0.5.12-next.0
  - @devtools/cli-common@0.1.13
  - @devtools/config@1.1.1
  - @devtools/errors@1.2.3
  - @devtools/types@1.1.1
  - @devtools/plugin-auth-node@0.4.1-next.0
  - @devtools/plugin-events-backend@0.2.16-next.0
  - @devtools/plugin-events-node@0.2.16-next.0
  - @devtools/plugin-permission-common@0.7.9
  - @devtools/plugin-permission-node@0.7.18-next.0
  - @devtools/plugin-search-common@1.2.7

## 0.0.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-tasks@0.5.11
  - @devtools/backend-common@0.19.8
  - @devtools/plugin-catalog-backend@1.14.0
  - @devtools/plugin-auth-node@0.4.0
  - @devtools/errors@1.2.3
  - @devtools/cli-common@0.1.13
  - @devtools/backend-plugin-api@0.6.6
  - @devtools/plugin-search-backend-node@1.2.10
  - @devtools/plugin-events-backend@0.2.15
  - @devtools/plugin-permission-node@0.7.17
  - @devtools/plugin-scaffolder-node@0.2.6
  - @devtools/cli-node@0.1.5
  - @devtools/config@1.1.1
  - @devtools/types@1.1.1
  - @devtools/plugin-events-node@0.2.15
  - @devtools/plugin-permission-common@0.7.9
  - @devtools/plugin-search-common@1.2.7

## 0.0.2-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.19.8-next.2
  - @devtools/plugin-auth-node@0.4.0-next.2
  - @devtools/plugin-catalog-backend@1.14.0-next.2
  - @devtools/errors@1.2.3-next.0
  - @devtools/backend-tasks@0.5.11-next.2
  - @devtools/plugin-events-backend@0.2.15-next.2
  - @devtools/plugin-permission-node@0.7.17-next.2
  - @devtools/plugin-scaffolder-node@0.2.6-next.2
  - @devtools/plugin-search-backend-node@1.2.10-next.2
  - @devtools/backend-plugin-api@0.6.6-next.2
  - @devtools/cli-common@0.1.13-next.0
  - @devtools/cli-node@0.1.5-next.1
  - @devtools/config@1.1.1-next.0
  - @devtools/types@1.1.1
  - @devtools/plugin-events-node@0.2.15-next.2
  - @devtools/plugin-permission-common@0.7.9-next.0
  - @devtools/plugin-search-common@1.2.7-next.0

## 0.0.2-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-tasks@0.5.10-next.1
  - @devtools/plugin-catalog-backend@1.14.0-next.1
  - @devtools/backend-common@0.19.7-next.1
  - @devtools/backend-plugin-api@0.6.5-next.1
  - @devtools/plugin-search-backend-node@1.2.9-next.1
  - @devtools/plugin-auth-node@0.3.2-next.1
  - @devtools/plugin-events-backend@0.2.14-next.1
  - @devtools/plugin-permission-node@0.7.16-next.1
  - @devtools/plugin-scaffolder-node@0.2.5-next.1
  - @devtools/config@1.1.0
  - @devtools/cli-common@0.1.13-next.0
  - @devtools/cli-node@0.1.5-next.0
  - @devtools/errors@1.2.2
  - @devtools/types@1.1.1
  - @devtools/plugin-events-node@0.2.14-next.1
  - @devtools/plugin-permission-common@0.7.8
  - @devtools/plugin-search-common@1.2.6

## 0.0.2-next.0

### Patch Changes

- Updated dependencies
  - @devtools/plugin-catalog-backend@1.14.0-next.0
  - @devtools/plugin-auth-node@0.3.2-next.0
  - @devtools/cli-common@0.1.13-next.0
  - @devtools/backend-common@0.19.7-next.0
  - @devtools/plugin-scaffolder-node@0.2.5-next.0
  - @devtools/config@1.1.0
  - @devtools/backend-plugin-api@0.6.5-next.0
  - @devtools/backend-tasks@0.5.10-next.0
  - @devtools/cli-node@0.1.5-next.0
  - @devtools/errors@1.2.2
  - @devtools/types@1.1.1
  - @devtools/plugin-events-backend@0.2.14-next.0
  - @devtools/plugin-events-node@0.2.14-next.0
  - @devtools/plugin-permission-common@0.7.8
  - @devtools/plugin-permission-node@0.7.16-next.0
  - @devtools/plugin-search-backend-node@1.2.9-next.0
  - @devtools/plugin-search-common@1.2.6

## 0.0.1

### Patch Changes

- Updated dependencies
  - @devtools/plugin-catalog-backend@1.13.0
  - @devtools/plugin-events-backend@0.2.12
  - @devtools/backend-tasks@0.5.8
  - @devtools/backend-common@0.19.5
  - @devtools/plugin-auth-node@0.3.0
  - @devtools/config@1.1.0
  - @devtools/errors@1.2.2
  - @devtools/plugin-permission-common@0.7.8
  - @devtools/plugin-search-common@1.2.6
  - @devtools/types@1.1.1
  - @devtools/plugin-permission-node@0.7.14
  - @devtools/backend-plugin-api@0.6.3
  - @devtools/cli-common@0.1.12
  - @devtools/cli-node@0.1.4
  - @devtools/plugin-events-node@0.2.12
  - @devtools/plugin-scaffolder-node@0.2.3
  - @devtools/plugin-search-backend-node@1.2.7

## 0.0.1-next.1

### Patch Changes

- Updated dependencies
  - @devtools/plugin-catalog-backend@1.13.0-next.3
  - @devtools/plugin-events-backend@0.2.12-next.3
  - @devtools/config@1.1.0-next.2
  - @devtools/errors@1.2.2-next.0
  - @devtools/plugin-permission-common@0.7.8-next.2
  - @devtools/plugin-search-common@1.2.6-next.2
  - @devtools/types@1.1.1-next.0
  - @devtools/plugin-permission-node@0.7.14-next.3
  - @devtools/backend-plugin-api@0.6.3-next.3
  - @devtools/backend-common@0.19.5-next.3
  - @devtools/backend-tasks@0.5.8-next.3
  - @devtools/cli-common@0.1.12
  - @devtools/cli-node@0.1.4-next.0
  - @devtools/plugin-auth-node@0.3.0-next.3
  - @devtools/plugin-events-node@0.2.12-next.3
  - @devtools/plugin-scaffolder-node@0.2.3-next.3
  - @devtools/plugin-search-backend-node@1.2.7-next.3

## 0.0.1-next.0

### Patch Changes

- Updated dependencies
  - @devtools/plugin-catalog-backend@1.13.0-next.2
  - @devtools/config@1.1.0-next.1
  - @devtools/backend-tasks@0.5.8-next.2
  - @devtools/backend-common@0.19.5-next.2
  - @devtools/plugin-auth-node@0.3.0-next.2
  - @devtools/plugin-events-backend@0.2.12-next.2
  - @devtools/plugin-permission-node@0.7.14-next.2
  - @devtools/backend-plugin-api@0.6.3-next.2
  - @devtools/plugin-permission-common@0.7.8-next.1
  - @devtools/plugin-scaffolder-node@0.2.3-next.2
  - @devtools/plugin-search-backend-node@1.2.7-next.2
  - @devtools/cli-common@0.1.12
  - @devtools/cli-node@0.1.3
  - @devtools/errors@1.2.1
  - @devtools/types@1.1.0
  - @devtools/plugin-events-node@0.2.12-next.2
  - @devtools/plugin-search-common@1.2.6-next.1
