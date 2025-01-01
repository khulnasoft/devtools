# @devtools/plugin-catalog-node

## 1.15.1-next.0

### Patch Changes

- Updated dependencies
  - @devtools/plugin-permission-node@0.8.7-next.0
  - @devtools/backend-plugin-api@1.1.1-next.0
  - @devtools/catalog-client@1.9.0
  - @devtools/catalog-model@1.7.2
  - @devtools/errors@1.2.6
  - @devtools/types@1.2.0
  - @devtools/plugin-catalog-common@1.1.2
  - @devtools/plugin-permission-common@0.8.3

## 1.15.0

### Minor Changes

- 8edc4cd: Updated the `catalogServiceMock` return type to match both `CatalogService` and `CatalogApi`

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@1.1.0
  - @devtools/catalog-client@1.9.0
  - @devtools/plugin-permission-node@0.8.6
  - @devtools/errors@1.2.6
  - @devtools/catalog-model@1.7.2
  - @devtools/types@1.2.0
  - @devtools/plugin-catalog-common@1.1.2
  - @devtools/plugin-permission-common@0.8.3

## 1.15.0-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@1.1.0-next.2
  - @devtools/plugin-permission-node@0.8.6-next.2
  - @devtools/errors@1.2.6-next.0
  - @devtools/catalog-client@1.9.0-next.2
  - @devtools/catalog-model@1.7.2-next.0
  - @devtools/types@1.2.0
  - @devtools/plugin-catalog-common@1.1.2-next.0
  - @devtools/plugin-permission-common@0.8.3-next.0

## 1.15.0-next.1

### Minor Changes

- 8edc4cd: Updated the `catalogServiceMock` return type to match both `CatalogService` and `CatalogApi`

### Patch Changes

- Updated dependencies
  - @devtools/catalog-client@1.9.0-next.1
  - @devtools/backend-plugin-api@1.1.0-next.1
  - @devtools/plugin-permission-node@0.8.6-next.1
  - @devtools/catalog-model@1.7.1
  - @devtools/errors@1.2.5
  - @devtools/types@1.2.0
  - @devtools/plugin-catalog-common@1.1.1
  - @devtools/plugin-permission-common@0.8.2

## 1.14.1-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@1.0.3-next.0
  - @devtools/catalog-client@1.8.1-next.0
  - @devtools/catalog-model@1.7.1
  - @devtools/errors@1.2.5
  - @devtools/types@1.2.0
  - @devtools/plugin-catalog-common@1.1.1
  - @devtools/plugin-permission-common@0.8.2
  - @devtools/plugin-permission-node@0.8.6-next.0

## 1.14.0

### Minor Changes

- bc13b42: The `catalogServiceRef` now has its own accompanying `CatalogService` interface that requires Devtools `credentials` objects to be passed. This new version of the `catalogServiceRef` has been promoted and is now available via the main `@devtools/plugin-catalog-node` entry point.

  The old `catalogServiceRef` with the old `CatalogApi` type is still available from the `/alpha` entry point.

### Patch Changes

- Updated dependencies
  - @devtools/catalog-client@1.8.0
  - @devtools/types@1.2.0
  - @devtools/backend-plugin-api@1.0.2
  - @devtools/plugin-permission-common@0.8.2
  - @devtools/catalog-model@1.7.1
  - @devtools/errors@1.2.5
  - @devtools/plugin-catalog-common@1.1.1
  - @devtools/plugin-permission-node@0.8.5

## 1.14.0-next.2

### Patch Changes

- Updated dependencies
  - @devtools/catalog-client@1.8.0-next.1
  - @devtools/backend-plugin-api@1.0.2-next.2
  - @devtools/catalog-model@1.7.0
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1
  - @devtools/plugin-catalog-common@1.1.0
  - @devtools/plugin-permission-common@0.8.1
  - @devtools/plugin-permission-node@0.8.5-next.2

## 1.14.0-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@1.0.2-next.1
  - @devtools/catalog-client@1.8.0-next.0
  - @devtools/catalog-model@1.7.0
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1
  - @devtools/plugin-catalog-common@1.1.0
  - @devtools/plugin-permission-common@0.8.1
  - @devtools/plugin-permission-node@0.8.5-next.1

## 1.14.0-next.0

### Minor Changes

- bc13b42: The `catalogServiceRef` now has its own accompanying `CatalogService` interface that requires Devtools `credentials` objects to be passed. This new version of the `catalogServiceRef` has been promoted and is now available via the main `@devtools/plugin-catalog-node` entry point.

  The old `catalogServiceRef` with the old `CatalogApi` type is still available from the `/alpha` entry point.

### Patch Changes

- Updated dependencies
  - @devtools/catalog-client@1.8.0-next.0
  - @devtools/backend-plugin-api@1.0.2-next.0
  - @devtools/catalog-model@1.7.0
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1
  - @devtools/plugin-catalog-common@1.1.0
  - @devtools/plugin-permission-common@0.8.1
  - @devtools/plugin-permission-node@0.8.5-next.0

## 1.13.1

### Patch Changes

- 0801db6: Documentation for the `testUtils` named export
- Updated dependencies
  - @devtools/plugin-permission-node@0.8.4
  - @devtools/catalog-client@1.7.1
  - @devtools/backend-plugin-api@1.0.1
  - @devtools/catalog-model@1.7.0
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1
  - @devtools/plugin-catalog-common@1.1.0
  - @devtools/plugin-permission-common@0.8.1

## 1.13.1-next.1

### Patch Changes

- 0801db6: Documentation for the `testUtils` named export
- Updated dependencies
  - @devtools/catalog-client@1.7.1-next.0
  - @devtools/backend-plugin-api@1.0.1-next.1
  - @devtools/catalog-model@1.7.0
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1
  - @devtools/plugin-catalog-common@1.1.0
  - @devtools/plugin-permission-common@0.8.1
  - @devtools/plugin-permission-node@0.8.4-next.1

## 1.13.1-next.0

### Patch Changes

- Updated dependencies
  - @devtools/plugin-permission-node@0.8.4-next.0
  - @devtools/backend-plugin-api@1.0.1-next.0
  - @devtools/catalog-client@1.7.0
  - @devtools/catalog-model@1.7.0
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1
  - @devtools/plugin-catalog-common@1.1.0
  - @devtools/plugin-permission-common@0.8.1

## 1.13.0

### Minor Changes

- bd35cdb: The `analyze-location` endpoint is now protected by the `catalog.location.analyze` permission.
  The `validate-entity` endpoint is now protected by the `catalog.entity.validate` permission.
- 29e57c7: Add catalog service mocks under the `/testUtils` subpath export.

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@1.0.0
  - @devtools/catalog-model@1.7.0
  - @devtools/catalog-client@1.7.0
  - @devtools/plugin-permission-node@0.8.3
  - @devtools/plugin-catalog-common@1.1.0
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1
  - @devtools/plugin-permission-common@0.8.1

## 1.12.7-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@1.0.0-next.2
  - @devtools/catalog-client@1.7.0-next.1
  - @devtools/plugin-permission-node@0.8.3-next.2
  - @devtools/catalog-model@1.6.0
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1
  - @devtools/plugin-catalog-common@1.0.26
  - @devtools/plugin-permission-common@0.8.1

## 1.12.7-next.1

### Patch Changes

- Updated dependencies
  - @devtools/catalog-client@1.6.7-next.0
  - @devtools/backend-plugin-api@0.9.0-next.1
  - @devtools/catalog-model@1.6.0
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1
  - @devtools/plugin-catalog-common@1.0.26
  - @devtools/plugin-permission-common@0.8.1
  - @devtools/plugin-permission-node@0.8.3-next.1

## 1.12.7-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.9.0-next.0
  - @devtools/plugin-permission-node@0.8.3-next.0
  - @devtools/catalog-client@1.6.6
  - @devtools/catalog-model@1.6.0
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1
  - @devtools/plugin-catalog-common@1.0.26
  - @devtools/plugin-permission-common@0.8.1

## 1.12.5

### Patch Changes

- a629fb2: Added setAllowedLocationTypes while introducing a new extension point called CatalogLocationsExtensionPoint
- 7c5f3b0: Explicit declare if the service ref accepts `single` or `multiple` implementations.
- Updated dependencies
  - @devtools/backend-plugin-api@0.8.0
  - @devtools/plugin-permission-common@0.8.1
  - @devtools/plugin-permission-node@0.8.1
  - @devtools/catalog-model@1.6.0
  - @devtools/catalog-client@1.6.6
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1
  - @devtools/plugin-catalog-common@1.0.26

## 1.12.5-next.3

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.8.0-next.3
  - @devtools/catalog-model@1.6.0-next.0
  - @devtools/catalog-client@1.6.6-next.0
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1
  - @devtools/plugin-catalog-common@1.0.26-next.2
  - @devtools/plugin-permission-common@0.8.1-next.1
  - @devtools/plugin-permission-node@0.8.1-next.3

## 1.12.5-next.2

### Patch Changes

- 7c5f3b0: Explicit declare if the service ref accepts `single` or `multiple` implementations.
- Updated dependencies
  - @devtools/backend-plugin-api@0.8.0-next.2
  - @devtools/plugin-permission-common@0.8.1-next.1
  - @devtools/plugin-permission-node@0.8.1-next.2
  - @devtools/plugin-catalog-common@1.0.26-next.1
  - @devtools/catalog-client@1.6.5
  - @devtools/catalog-model@1.5.0
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1

## 1.12.5-next.1

### Patch Changes

- Updated dependencies
  - @devtools/plugin-permission-common@0.8.1-next.0
  - @devtools/plugin-permission-node@0.8.1-next.1
  - @devtools/backend-plugin-api@0.7.1-next.1
  - @devtools/plugin-catalog-common@1.0.26-next.0
  - @devtools/catalog-client@1.6.5
  - @devtools/catalog-model@1.5.0
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1

## 1.12.5-next.0

### Patch Changes

- a629fb2: Added setAllowedLocationTypes while introducing a new extension point called CatalogLocationsExtensionPoint
- Updated dependencies
  - @devtools/backend-plugin-api@0.7.1-next.0
  - @devtools/catalog-client@1.6.5
  - @devtools/catalog-model@1.5.0
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1
  - @devtools/plugin-catalog-common@1.0.25
  - @devtools/plugin-permission-common@0.8.0
  - @devtools/plugin-permission-node@0.8.1-next.0

## 1.12.4

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.7.0
  - @devtools/plugin-permission-common@0.8.0
  - @devtools/plugin-permission-node@0.8.0
  - @devtools/plugin-catalog-common@1.0.25
  - @devtools/catalog-client@1.6.5
  - @devtools/catalog-model@1.5.0
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1

## 1.12.4-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.6.22-next.1
  - @devtools/catalog-client@1.6.5
  - @devtools/catalog-model@1.5.0
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1
  - @devtools/plugin-catalog-common@1.0.24
  - @devtools/plugin-permission-common@0.7.14
  - @devtools/plugin-permission-node@0.7.33-next.1

## 1.12.3-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.6.21-next.0
  - @devtools/plugin-permission-node@0.7.32-next.0
  - @devtools/catalog-client@1.6.5
  - @devtools/catalog-model@1.5.0
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1
  - @devtools/plugin-catalog-common@1.0.24
  - @devtools/plugin-permission-common@0.7.14

## 1.12.1

### Patch Changes

- 78a0b08: Internal refactor to handle `BackendFeature` contract change.
- d44a20a: Added additional plugin metadata to `package.json`.
- Updated dependencies
  - @devtools/backend-plugin-api@0.6.19
  - @devtools/plugin-permission-node@0.7.30
  - @devtools/plugin-permission-common@0.7.14
  - @devtools/plugin-catalog-common@1.0.24
  - @devtools/catalog-client@1.6.5
  - @devtools/catalog-model@1.5.0
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1

## 1.12.1-next.2

### Patch Changes

- d44a20a: Added additional plugin metadata to `package.json`.
- Updated dependencies
  - @devtools/backend-plugin-api@0.6.19-next.3
  - @devtools/plugin-permission-common@0.7.14-next.0
  - @devtools/plugin-permission-node@0.7.30-next.3
  - @devtools/plugin-catalog-common@1.0.24-next.0
  - @devtools/catalog-client@1.6.5
  - @devtools/catalog-model@1.5.0
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1

## 1.12.1-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.6.19-next.2
  - @devtools/plugin-permission-node@0.7.30-next.2
  - @devtools/catalog-client@1.6.5
  - @devtools/catalog-model@1.5.0
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1
  - @devtools/plugin-catalog-common@1.0.23
  - @devtools/plugin-permission-common@0.7.13

## 1.12.1-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.6.19-next.0
  - @devtools/plugin-permission-node@0.7.30-next.0
  - @devtools/catalog-client@1.6.5
  - @devtools/catalog-model@1.5.0
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1
  - @devtools/plugin-catalog-common@1.0.23
  - @devtools/plugin-permission-common@0.7.13

## 1.12.0

### Minor Changes

- f2a2a83: Added `LocationAnalyzer` type, moved from `@devtools/plugin-catalog-backend`.
- f2a2a83: Breaking change to `/alpha` API where the `catalogAnalysisExtensionPoint` has been reworked. The `addLocationAnalyzer` method has been renamed to `addScmLocationAnalyzer`, and a new `setLocationAnalyzer` method has been added which allows the full `LocationAnalyzer` implementation to be overridden.

### Patch Changes

- Updated dependencies
  - @devtools/catalog-model@1.5.0
  - @devtools/backend-plugin-api@0.6.18
  - @devtools/catalog-client@1.6.5
  - @devtools/plugin-catalog-common@1.0.23
  - @devtools/plugin-permission-node@0.7.29

## 1.12.0-next.2

### Minor Changes

- f2a2a83: Added `LocationAnalyzer` type, moved from `@devtools/plugin-catalog-backend`.
- f2a2a83: Breaking change to `/alpha` API where the `catalogAnalysisExtensionPoint` has been reworked. The `addLocationAnalyzer` method has been renamed to `addScmLocationAnalyzer`, and a new `setLocationAnalyzer` method has been added which allows the full `LocationAnalyzer` implementation to be overridden.

## 1.11.2-next.1

### Patch Changes

- Updated dependencies
  - @devtools/plugin-permission-node@0.7.29-next.1
  - @devtools/backend-plugin-api@0.6.18-next.1

## 1.11.2-next.0

### Patch Changes

- Updated dependencies
  - @devtools/catalog-model@1.5.0-next.0
  - @devtools/backend-plugin-api@0.6.18-next.0
  - @devtools/catalog-client@1.6.5-next.0
  - @devtools/plugin-catalog-common@1.0.23-next.0
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1
  - @devtools/plugin-permission-common@0.7.13
  - @devtools/plugin-permission-node@0.7.29-next.0

## 1.11.1

### Patch Changes

- Updated dependencies
  - @devtools/plugin-permission-node@0.7.28
  - @devtools/backend-plugin-api@0.6.17
  - @devtools/catalog-client@1.6.4
  - @devtools/catalog-model@1.4.5
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1
  - @devtools/plugin-catalog-common@1.0.22
  - @devtools/plugin-permission-common@0.7.13

## 1.11.1-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.6.17-next.1
  - @devtools/catalog-client@1.6.4-next.0
  - @devtools/plugin-permission-node@0.7.28-next.1
  - @devtools/catalog-model@1.4.5
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1
  - @devtools/plugin-catalog-common@1.0.22
  - @devtools/plugin-permission-common@0.7.13

## 1.11.1-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.6.17-next.0
  - @devtools/catalog-client@1.6.3
  - @devtools/catalog-model@1.4.5
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1
  - @devtools/plugin-catalog-common@1.0.22
  - @devtools/plugin-permission-common@0.7.13
  - @devtools/plugin-permission-node@0.7.28-next.0

## 1.11.0

### Minor Changes

- f3e2e86: Added the ability to inject custom permissions from modules, on `CatalogBuilder` and `CatalogPermissionExtensionPoint`

### Patch Changes

- Updated dependencies
  - @devtools/catalog-client@1.6.3
  - @devtools/backend-plugin-api@0.6.16
  - @devtools/plugin-permission-node@0.7.27
  - @devtools/catalog-model@1.4.5
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1
  - @devtools/plugin-catalog-common@1.0.22
  - @devtools/plugin-permission-common@0.7.13

## 1.10.0

### Minor Changes

- f3e2e86: Added the ability to inject custom permissions from modules, on `CatalogBuilder` and `CatalogPermissionExtensionPoint`

### Patch Changes

- Updated dependencies
  - @devtools/catalog-client@1.6.2
  - @devtools/plugin-permission-node@0.7.26
  - @devtools/backend-plugin-api@0.6.15
  - @devtools/catalog-model@1.4.5
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1
  - @devtools/plugin-catalog-common@1.0.22
  - @devtools/plugin-permission-common@0.7.13

## 1.9.0

### Minor Changes

- 9c7fb30: Added the ability to inject custom permissions from modules, on `CatalogBuilder` and `CatalogPermissionExtensionPoint`

## 1.8.0

### Minor Changes

- df12231: Allow setting EntityDataParser using CatalogModelExtensionPoint

### Patch Changes

- Updated dependencies
  - @devtools/errors@1.2.4
  - @devtools/backend-plugin-api@0.6.14
  - @devtools/plugin-permission-common@0.7.13
  - @devtools/catalog-client@1.6.1
  - @devtools/plugin-permission-node@0.7.25
  - @devtools/catalog-model@1.4.5
  - @devtools/types@1.1.1
  - @devtools/plugin-catalog-common@1.0.22

## 1.8.0-next.2

### Patch Changes

- Updated dependencies
  - @devtools/catalog-client@1.6.1-next.1
  - @devtools/backend-plugin-api@0.6.14-next.2
  - @devtools/catalog-model@1.4.5-next.0
  - @devtools/errors@1.2.4-next.0
  - @devtools/types@1.1.1
  - @devtools/plugin-catalog-common@1.0.22-next.1
  - @devtools/plugin-permission-common@0.7.13-next.1
  - @devtools/plugin-permission-node@0.7.25-next.2

## 1.8.0-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.6.14-next.1
  - @devtools/plugin-permission-common@0.7.13-next.1
  - @devtools/plugin-permission-node@0.7.25-next.1
  - @devtools/catalog-client@1.6.1-next.0
  - @devtools/catalog-model@1.4.5-next.0
  - @devtools/errors@1.2.4-next.0
  - @devtools/types@1.1.1
  - @devtools/plugin-catalog-common@1.0.22-next.1

## 1.8.0-next.0

### Minor Changes

- df12231: Allow setting EntityDataParser using CatalogModelExtensionPoint

### Patch Changes

- Updated dependencies
  - @devtools/errors@1.2.4-next.0
  - @devtools/backend-plugin-api@0.6.13-next.0
  - @devtools/plugin-permission-common@0.7.13-next.0
  - @devtools/plugin-permission-node@0.7.24-next.0
  - @devtools/catalog-client@1.6.1-next.0
  - @devtools/catalog-model@1.4.5-next.0
  - @devtools/types@1.1.1
  - @devtools/plugin-catalog-common@1.0.22-next.0

## 1.7.0

### Minor Changes

- d8a54d0: Adds support for supplying field validators to the new backend's catalog plugin. If you're using entity policies, you should use the new `transformLegacyPolicyToProcessor` function to install them as processors instead.

  ```ts
  import {
    catalogProcessingExtensionPoint,
    catalogModelExtensionPoint,
  } from '@devtools/plugin-catalog-node/alpha';
  import {myPolicy} from './my-policy';

  export const catalogModulePolicyProvider = createBackendModule({
    pluginId: 'catalog',
    moduleId: 'internal-policy-provider',
    register(reg) {
      reg.registerInit({
        deps: {
          modelExtensions: catalogModelExtensionPoint,
          processingExtensions: catalogProcessingExtensionPoint,
        },
        async init({ modelExtensions, processingExtensions }) {
          modelExtensions.setFieldValidators({
            ...
          });
          processingExtensions.addProcessors(transformLegacyPolicyToProcessor(myPolicy))
        },
      });
    },
  });
  ```

### Patch Changes

- 9b2eb3f: Add support for `onProcessingError` handler at the catalog plugin (new backend system).

  You can use `setOnProcessingErrorHandler` at the `catalogProcessingExtensionPoint`
  as replacement for

  ```ts
  catalogBuilder.subscribe({
    onProcessingError: hander,
  });
  ```

- Updated dependencies
  - @devtools/backend-plugin-api@0.6.10
  - @devtools/catalog-model@1.4.4
  - @devtools/catalog-client@1.6.0
  - @devtools/plugin-permission-node@0.7.21
  - @devtools/errors@1.2.3
  - @devtools/types@1.1.1
  - @devtools/plugin-catalog-common@1.0.21
  - @devtools/plugin-permission-common@0.7.12

## 1.6.2-next.3

### Patch Changes

- 9b2eb3f: Add support for `onProcessingError` handler at the catalog plugin (new backend system).

  You can use `setOnProcessingErrorHandler` at the `catalogProcessingExtensionPoint`
  as replacement for

  ```ts
  catalogBuilder.subscribe({
    onProcessingError: hander,
  });
  ```

- Updated dependencies
  - @devtools/plugin-permission-node@0.7.21-next.3
  - @devtools/backend-plugin-api@0.6.10-next.3
  - @devtools/catalog-client@1.6.0-next.1
  - @devtools/catalog-model@1.4.4-next.0
  - @devtools/errors@1.2.3
  - @devtools/types@1.1.1
  - @devtools/plugin-catalog-common@1.0.21-next.0
  - @devtools/plugin-permission-common@0.7.12

## 1.6.2-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.6.10-next.2
  - @devtools/plugin-permission-node@0.7.21-next.2
  - @devtools/catalog-client@1.6.0-next.1
  - @devtools/catalog-model@1.4.4-next.0
  - @devtools/errors@1.2.3
  - @devtools/types@1.1.1
  - @devtools/plugin-catalog-common@1.0.21-next.0
  - @devtools/plugin-permission-common@0.7.12

## 1.6.2-next.1

### Patch Changes

- Updated dependencies
  - @devtools/catalog-model@1.4.4-next.0
  - @devtools/catalog-client@1.6.0-next.1
  - @devtools/backend-plugin-api@0.6.10-next.1
  - @devtools/errors@1.2.3
  - @devtools/types@1.1.1
  - @devtools/plugin-catalog-common@1.0.21-next.0
  - @devtools/plugin-permission-common@0.7.12
  - @devtools/plugin-permission-node@0.7.21-next.1

## 1.6.2-next.0

### Patch Changes

- Updated dependencies
  - @devtools/catalog-client@1.6.0-next.0
  - @devtools/plugin-permission-node@0.7.21-next.0
  - @devtools/backend-plugin-api@0.6.10-next.0
  - @devtools/catalog-model@1.4.3
  - @devtools/errors@1.2.3
  - @devtools/types@1.1.1
  - @devtools/plugin-catalog-common@1.0.20
  - @devtools/plugin-permission-common@0.7.12

## 1.6.1

### Patch Changes

- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @devtools/catalog-client@1.5.2
  - @devtools/backend-plugin-api@0.6.9
  - @devtools/plugin-permission-common@0.7.12
  - @devtools/plugin-permission-node@0.7.20
  - @devtools/catalog-model@1.4.3
  - @devtools/errors@1.2.3
  - @devtools/types@1.1.1
  - @devtools/plugin-catalog-common@1.0.20

## 1.6.1-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.6.9-next.2
  - @devtools/plugin-permission-node@0.7.20-next.2

## 1.6.1-next.1

### Patch Changes

- Updated dependencies
  - @devtools/plugin-permission-node@0.7.20-next.1
  - @devtools/backend-plugin-api@0.6.9-next.1
  - @devtools/catalog-client@1.5.2-next.0
  - @devtools/catalog-model@1.4.3
  - @devtools/errors@1.2.3
  - @devtools/types@1.1.1
  - @devtools/plugin-catalog-common@1.0.19
  - @devtools/plugin-permission-common@0.7.11

## 1.6.1-next.0

### Patch Changes

- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @devtools/catalog-client@1.5.2-next.0
  - @devtools/backend-plugin-api@0.6.9-next.0
  - @devtools/catalog-model@1.4.3
  - @devtools/errors@1.2.3
  - @devtools/types@1.1.1
  - @devtools/plugin-catalog-common@1.0.19
  - @devtools/plugin-permission-common@0.7.11
  - @devtools/plugin-permission-node@0.7.20-next.0

## 1.6.0

### Minor Changes

- a168507: Added `EntitiesSearchFilter` and `EntityFilter` from `@devtools/plugin-catalog-backend`, for reuse
- 7804597: Permission rules can now be added for the Catalog plugin through the `CatalogPermissionExtensionPoint` interface.

### Patch Changes

- Updated dependencies
  - @devtools/catalog-client@1.5.0
  - @devtools/plugin-permission-common@0.7.11
  - @devtools/plugin-permission-node@0.7.19
  - @devtools/backend-plugin-api@0.6.8
  - @devtools/catalog-model@1.4.3
  - @devtools/errors@1.2.3
  - @devtools/types@1.1.1
  - @devtools/plugin-catalog-common@1.0.19

## 1.6.0-next.3

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.6.8-next.3
  - @devtools/catalog-client@1.5.0-next.1
  - @devtools/catalog-model@1.4.3
  - @devtools/errors@1.2.3
  - @devtools/types@1.1.1
  - @devtools/plugin-catalog-common@1.0.18
  - @devtools/plugin-permission-common@0.7.10
  - @devtools/plugin-permission-node@0.7.19-next.3

## 1.6.0-next.2

### Minor Changes

- a168507: Added `EntitiesSearchFilter` and `EntityFilter` from `@devtools/plugin-catalog-backend`, for reuse
- 7804597: Permission rules can now be added for the Catalog plugin through the `CatalogPermissionExtensionPoint` interface.

### Patch Changes

- Updated dependencies
  - @devtools/catalog-client@1.5.0-next.1
  - @devtools/backend-plugin-api@0.6.8-next.2
  - @devtools/catalog-model@1.4.3
  - @devtools/errors@1.2.3
  - @devtools/types@1.1.1
  - @devtools/plugin-catalog-common@1.0.18
  - @devtools/plugin-permission-common@0.7.10
  - @devtools/plugin-permission-node@0.7.19-next.2

## 1.5.1-next.1

### Patch Changes

- Updated dependencies
  - @devtools/catalog-client@1.5.0-next.0
  - @devtools/backend-plugin-api@0.6.8-next.1
  - @devtools/catalog-model@1.4.3
  - @devtools/errors@1.2.3
  - @devtools/types@1.1.1
  - @devtools/plugin-catalog-common@1.0.18

## 1.5.1-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.6.8-next.0
  - @devtools/catalog-client@1.4.6
  - @devtools/catalog-model@1.4.3
  - @devtools/errors@1.2.3
  - @devtools/types@1.1.1
  - @devtools/plugin-catalog-common@1.0.18

## 1.5.0

### Minor Changes

- e5bf3749ad: Support adding location analyzers in new catalog analysis extension point and move `AnalyzeOptions` and `ScmLocationAnalyzer` types to `@devtools/plugin-catalog-node`

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.6.7
  - @devtools/catalog-client@1.4.6
  - @devtools/catalog-model@1.4.3
  - @devtools/errors@1.2.3
  - @devtools/types@1.1.1
  - @devtools/plugin-catalog-common@1.0.18

## 1.5.0-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.6.7-next.2

## 1.5.0-next.1

### Minor Changes

- e5bf3749ad: Support adding location analyzers in new catalog analysis extension point and move `AnalyzeOptions` and `ScmLocationAnalyzer` types to `@devtools/plugin-catalog-node`

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.6.7-next.1
  - @devtools/catalog-client@1.4.5
  - @devtools/catalog-model@1.4.3
  - @devtools/errors@1.2.3
  - @devtools/types@1.1.1
  - @devtools/plugin-catalog-common@1.0.17

## 1.4.8-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.6.7-next.0
  - @devtools/catalog-client@1.4.5
  - @devtools/catalog-model@1.4.3
  - @devtools/errors@1.2.3
  - @devtools/types@1.1.1
  - @devtools/plugin-catalog-common@1.0.17

## 1.4.7

### Patch Changes

- 7a2e2924c7: Added docs to `processingResult`
- Updated dependencies
  - @devtools/catalog-model@1.4.3
  - @devtools/errors@1.2.3
  - @devtools/backend-plugin-api@0.6.6
  - @devtools/catalog-client@1.4.5
  - @devtools/types@1.1.1
  - @devtools/plugin-catalog-common@1.0.17

## 1.4.7-next.2

### Patch Changes

- Updated dependencies
  - @devtools/catalog-model@1.4.3-next.0
  - @devtools/errors@1.2.3-next.0
  - @devtools/backend-plugin-api@0.6.6-next.2
  - @devtools/catalog-client@1.4.5-next.0
  - @devtools/types@1.1.1
  - @devtools/plugin-catalog-common@1.0.17-next.0

## 1.4.6-next.1

### Patch Changes

- 7a2e2924c7: Added docs to `processingResult`
- Updated dependencies
  - @devtools/backend-plugin-api@0.6.5-next.1
  - @devtools/catalog-client@1.4.4
  - @devtools/catalog-model@1.4.2
  - @devtools/errors@1.2.2
  - @devtools/types@1.1.1
  - @devtools/plugin-catalog-common@1.0.16

## 1.4.6-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.6.5-next.0
  - @devtools/catalog-client@1.4.4
  - @devtools/catalog-model@1.4.2
  - @devtools/errors@1.2.2
  - @devtools/types@1.1.1
  - @devtools/plugin-catalog-common@1.0.16

## 1.4.4

### Patch Changes

- Updated dependencies
  - @devtools/catalog-client@1.4.4
  - @devtools/catalog-model@1.4.2
  - @devtools/errors@1.2.2
  - @devtools/plugin-catalog-common@1.0.16
  - @devtools/types@1.1.1
  - @devtools/backend-plugin-api@0.6.3

## 1.4.4-next.3

### Patch Changes

- Updated dependencies
  - @devtools/catalog-client@1.4.4-next.2
  - @devtools/catalog-model@1.4.2-next.2
  - @devtools/errors@1.2.2-next.0
  - @devtools/plugin-catalog-common@1.0.16-next.2
  - @devtools/types@1.1.1-next.0
  - @devtools/backend-plugin-api@0.6.3-next.3

## 1.4.4-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.6.3-next.2
  - @devtools/catalog-model@1.4.2-next.1
  - @devtools/catalog-client@1.4.4-next.1
  - @devtools/errors@1.2.1
  - @devtools/types@1.1.0
  - @devtools/plugin-catalog-common@1.0.16-next.1

## 1.4.4-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.6.3-next.1
  - @devtools/catalog-model@1.4.2-next.0
  - @devtools/catalog-client@1.4.4-next.0
  - @devtools/plugin-catalog-common@1.0.16-next.0
  - @devtools/errors@1.2.1
  - @devtools/types@1.1.0

## 1.4.3-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.6.2-next.0
  - @devtools/catalog-client@1.4.3
  - @devtools/catalog-model@1.4.1
  - @devtools/errors@1.2.1
  - @devtools/types@1.1.0
  - @devtools/plugin-catalog-common@1.0.15

## 1.4.1

### Patch Changes

- 12a8c94eda8d: Add package repository and homepage metadata
- Updated dependencies
  - @devtools/backend-plugin-api@0.6.0
  - @devtools/catalog-client@1.4.3
  - @devtools/catalog-model@1.4.1
  - @devtools/errors@1.2.1
  - @devtools/types@1.1.0
  - @devtools/plugin-catalog-common@1.0.15

## 1.4.1-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.6.0-next.2

## 1.4.1-next.1

### Patch Changes

- 12a8c94eda8d: Add package repository and homepage metadata
- Updated dependencies
  - @devtools/backend-plugin-api@0.6.0-next.1
  - @devtools/catalog-client@1.4.3
  - @devtools/catalog-model@1.4.1
  - @devtools/errors@1.2.1
  - @devtools/types@1.1.0
  - @devtools/plugin-catalog-common@1.0.15

## 1.4.1-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.5.5-next.0
  - @devtools/catalog-client@1.4.3
  - @devtools/catalog-model@1.4.1
  - @devtools/errors@1.2.1
  - @devtools/types@1.1.0
  - @devtools/plugin-catalog-common@1.0.15

## 1.4.0

### Minor Changes

- f06f0e46ba88: Support placeholder resolvers in the CatalogPlugin, also moves `PlaceholderResolver` and related types from `@devtools/plugin-catalog-backend` to `@devtools/plugin-catalog-node`.

### Patch Changes

- Updated dependencies
  - @devtools/errors@1.2.1
  - @devtools/backend-plugin-api@0.5.4
  - @devtools/catalog-client@1.4.3
  - @devtools/catalog-model@1.4.1
  - @devtools/types@1.1.0
  - @devtools/plugin-catalog-common@1.0.15

## 1.4.0-next.0

### Minor Changes

- f06f0e46ba88: Support placeholder resolvers in the CatalogPlugin, also moves `PlaceholderResolver` and related types from `@devtools/plugin-catalog-backend` to `@devtools/plugin-catalog-node`.

### Patch Changes

- Updated dependencies
  - @devtools/errors@1.2.1-next.0
  - @devtools/backend-plugin-api@0.5.4-next.0
  - @devtools/catalog-client@1.4.3-next.0
  - @devtools/catalog-model@1.4.1-next.0
  - @devtools/types@1.1.0
  - @devtools/plugin-catalog-common@1.0.15-next.0

## 1.3.7

### Patch Changes

- Updated dependencies
  - @devtools/catalog-client@1.4.2
  - @devtools/types@1.1.0
  - @devtools/catalog-model@1.4.0
  - @devtools/errors@1.2.0
  - @devtools/backend-plugin-api@0.5.3
  - @devtools/plugin-catalog-common@1.0.14

## 1.3.7-next.2

### Patch Changes

- Updated dependencies
  - @devtools/catalog-model@1.4.0-next.1
  - @devtools/backend-plugin-api@0.5.3-next.2
  - @devtools/catalog-client@1.4.2-next.2
  - @devtools/errors@1.2.0-next.0
  - @devtools/types@1.0.2
  - @devtools/plugin-catalog-common@1.0.14-next.1

## 1.3.7-next.1

### Patch Changes

- Updated dependencies
  - @devtools/errors@1.2.0-next.0
  - @devtools/backend-plugin-api@0.5.3-next.1
  - @devtools/catalog-model@1.4.0-next.0
  - @devtools/catalog-client@1.4.2-next.1
  - @devtools/plugin-catalog-common@1.0.14-next.0
  - @devtools/types@1.0.2

## 1.3.7-next.0

### Patch Changes

- Updated dependencies
  - @devtools/catalog-client@1.4.2-next.0
  - @devtools/backend-plugin-api@0.5.3-next.0
  - @devtools/catalog-model@1.3.0
  - @devtools/errors@1.1.5
  - @devtools/types@1.0.2
  - @devtools/plugin-catalog-common@1.0.13

## 1.3.6

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.5.2
  - @devtools/catalog-client@1.4.1
  - @devtools/catalog-model@1.3.0
  - @devtools/errors@1.1.5
  - @devtools/types@1.0.2
  - @devtools/plugin-catalog-common@1.0.13

## 1.3.6-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.5.2-next.1

## 1.3.6-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.5.2-next.0
  - @devtools/catalog-client@1.4.1
  - @devtools/catalog-model@1.3.0
  - @devtools/errors@1.1.5
  - @devtools/types@1.0.2
  - @devtools/plugin-catalog-common@1.0.13

## 1.3.5

### Patch Changes

- Updated dependencies
  - @devtools/catalog-client@1.4.1
  - @devtools/catalog-model@1.3.0
  - @devtools/backend-plugin-api@0.5.1
  - @devtools/errors@1.1.5
  - @devtools/types@1.0.2
  - @devtools/plugin-catalog-common@1.0.13

## 1.3.5-next.3

### Patch Changes

- Updated dependencies
  - @devtools/catalog-model@1.3.0-next.0
  - @devtools/backend-plugin-api@0.5.1-next.2
  - @devtools/catalog-client@1.4.1-next.1
  - @devtools/errors@1.1.5
  - @devtools/types@1.0.2
  - @devtools/plugin-catalog-common@1.0.13-next.1

## 1.3.5-next.2

### Patch Changes

- Updated dependencies
  - @devtools/catalog-client@1.4.1-next.0
  - @devtools/backend-plugin-api@0.5.1-next.2
  - @devtools/catalog-model@1.2.1
  - @devtools/errors@1.1.5
  - @devtools/types@1.0.2
  - @devtools/plugin-catalog-common@1.0.13-next.0

## 1.3.5-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.5.1-next.1
  - @devtools/catalog-client@1.4.0
  - @devtools/catalog-model@1.2.1
  - @devtools/errors@1.1.5
  - @devtools/types@1.0.2
  - @devtools/plugin-catalog-common@1.0.13-next.0

## 1.3.5-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.5.1-next.0
  - @devtools/catalog-client@1.4.0
  - @devtools/catalog-model@1.2.1
  - @devtools/errors@1.1.5
  - @devtools/types@1.0.2
  - @devtools/plugin-catalog-common@1.0.12

## 1.3.4

### Patch Changes

- e675f902980: Added `locationSpecToMetadataName` and `locationSpecToLocationEntity` as their new home, moved over from the backend package where they now are marked as deprecated.
- 928a12a9b3e: Internal refactor of `/alpha` exports.
- Updated dependencies
  - @devtools/catalog-client@1.4.0
  - @devtools/errors@1.1.5
  - @devtools/backend-plugin-api@0.5.0
  - @devtools/catalog-model@1.2.1
  - @devtools/plugin-catalog-common@1.0.12
  - @devtools/types@1.0.2

## 1.3.4-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.4.1-next.2

## 1.3.4-next.1

### Patch Changes

- Updated dependencies
  - @devtools/errors@1.1.5-next.0
  - @devtools/catalog-client@1.4.0-next.1
  - @devtools/backend-plugin-api@0.4.1-next.1
  - @devtools/catalog-model@1.2.1-next.1
  - @devtools/types@1.0.2
  - @devtools/plugin-catalog-common@1.0.12-next.1

## 1.3.4-next.0

### Patch Changes

- 928a12a9b3: Internal refactor of `/alpha` exports.
- Updated dependencies
  - @devtools/catalog-client@1.4.0-next.0
  - @devtools/backend-plugin-api@0.4.1-next.0
  - @devtools/catalog-model@1.2.1-next.0
  - @devtools/plugin-catalog-common@1.0.12-next.0
  - @devtools/errors@1.1.4
  - @devtools/types@1.0.2

## 1.3.3

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.4.0
  - @devtools/catalog-model@1.2.0
  - @devtools/catalog-client@1.3.1
  - @devtools/errors@1.1.4
  - @devtools/types@1.0.2
  - @devtools/plugin-catalog-common@1.0.11

## 1.3.3-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.4.0-next.2
  - @devtools/catalog-model@1.2.0-next.1
  - @devtools/catalog-client@1.3.1-next.1
  - @devtools/errors@1.1.4
  - @devtools/types@1.0.2
  - @devtools/plugin-catalog-common@1.0.11-next.1

## 1.3.3-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.3.2-next.1
  - @devtools/catalog-client@1.3.1-next.0
  - @devtools/catalog-model@1.1.6-next.0
  - @devtools/errors@1.1.4
  - @devtools/types@1.0.2
  - @devtools/plugin-catalog-common@1.0.11-next.0

## 1.3.3-next.0

### Patch Changes

- Updated dependencies
  - @devtools/catalog-model@1.1.6-next.0
  - @devtools/catalog-client@1.3.1-next.0
  - @devtools/plugin-catalog-common@1.0.11-next.0
  - @devtools/backend-plugin-api@0.3.2-next.0

## 1.3.1

### Patch Changes

- 483e907eaf: Internal updates of `createServiceFactory` from `@devtools/backend-plugin-api`.
- Updated dependencies
  - @devtools/backend-plugin-api@0.3.0
  - @devtools/catalog-model@1.1.5
  - @devtools/catalog-client@1.3.0
  - @devtools/errors@1.1.4
  - @devtools/types@1.0.2
  - @devtools/plugin-catalog-common@1.0.10

## 1.3.1-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.3.0-next.1
  - @devtools/catalog-client@1.3.0-next.2
  - @devtools/catalog-model@1.1.5-next.1
  - @devtools/errors@1.1.4
  - @devtools/types@1.0.2
  - @devtools/plugin-catalog-common@1.0.10-next.1

## 1.3.1-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.2.1-next.0
  - @devtools/catalog-client@1.3.0-next.1
  - @devtools/catalog-model@1.1.5-next.1
  - @devtools/errors@1.1.4
  - @devtools/types@1.0.2
  - @devtools/plugin-catalog-common@1.0.10-next.1

## 1.3.1-next.0

### Patch Changes

- Updated dependencies
  - @devtools/catalog-model@1.1.5-next.0
  - @devtools/catalog-client@1.3.0-next.0
  - @devtools/backend-plugin-api@0.2.0
  - @devtools/errors@1.1.4
  - @devtools/types@1.0.2
  - @devtools/plugin-catalog-common@1.0.10-next.0

## 1.3.0

### Minor Changes

- eacc8e2b55: Make it possible for entity providers to supply only entity refs, instead of full entities, in `delta` mutation deletions.

### Patch Changes

- 884d749b14: Refactored to use `coreServices` from `@devtools/backend-plugin-api`.
- Updated dependencies
  - @devtools/catalog-client@1.2.0
  - @devtools/errors@1.1.4
  - @devtools/backend-plugin-api@0.2.0
  - @devtools/types@1.0.2
  - @devtools/catalog-model@1.1.4
  - @devtools/plugin-catalog-common@1.0.9

## 1.3.0-next.3

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.2.0-next.3
  - @devtools/catalog-client@1.2.0-next.1
  - @devtools/catalog-model@1.1.4-next.1
  - @devtools/errors@1.1.4-next.1
  - @devtools/types@1.0.2-next.1
  - @devtools/plugin-catalog-common@1.0.9-next.3

## 1.3.0-next.2

### Minor Changes

- eacc8e2b55: Make it possible for entity providers to supply only entity refs, instead of full entities, in `delta` mutation deletions.

### Patch Changes

- 884d749b14: Refactored to use `coreServices` from `@devtools/backend-plugin-api`.
- Updated dependencies
  - @devtools/backend-plugin-api@0.2.0-next.2
  - @devtools/catalog-client@1.2.0-next.1
  - @devtools/catalog-model@1.1.4-next.1
  - @devtools/errors@1.1.4-next.1
  - @devtools/types@1.0.2-next.1
  - @devtools/plugin-catalog-common@1.0.9-next.2

## 1.2.2-next.1

### Patch Changes

- Updated dependencies
  - @devtools/types@1.0.2-next.1
  - @devtools/backend-plugin-api@0.1.5-next.1
  - @devtools/catalog-client@1.2.0-next.1
  - @devtools/catalog-model@1.1.4-next.1
  - @devtools/errors@1.1.4-next.1
  - @devtools/plugin-catalog-common@1.0.9-next.1

## 1.2.2-next.0

### Patch Changes

- Updated dependencies
  - @devtools/catalog-client@1.2.0-next.0
  - @devtools/types@1.0.2-next.0
  - @devtools/backend-plugin-api@0.1.5-next.0
  - @devtools/catalog-model@1.1.4-next.0
  - @devtools/errors@1.1.4-next.0
  - @devtools/plugin-catalog-common@1.0.9-next.0

## 1.2.1

### Patch Changes

- Updated dependencies
  - @devtools/catalog-model@1.1.3
  - @devtools/types@1.0.1
  - @devtools/backend-plugin-api@0.1.4
  - @devtools/catalog-client@1.1.2
  - @devtools/errors@1.1.3
  - @devtools/plugin-catalog-common@1.0.8

## 1.2.1-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.1.4-next.1
  - @devtools/catalog-client@1.1.2-next.0
  - @devtools/catalog-model@1.1.3-next.0
  - @devtools/errors@1.1.3-next.0
  - @devtools/types@1.0.1-next.0
  - @devtools/plugin-catalog-common@1.0.8-next.0

## 1.2.1-next.0

### Patch Changes

- Updated dependencies
  - @devtools/catalog-model@1.1.3-next.0
  - @devtools/types@1.0.1-next.0
  - @devtools/backend-plugin-api@0.1.4-next.0
  - @devtools/catalog-client@1.1.2-next.0
  - @devtools/errors@1.1.3-next.0
  - @devtools/plugin-catalog-common@1.0.8-next.0

## 1.2.0

### Minor Changes

- 404366c853: Deprecated the `LocationSpec` type. It got moved from this package to the `@devtools/plugin-catalog-common` so make sure imports are updated.

### Patch Changes

- Updated dependencies
  - @devtools/catalog-model@1.1.2
  - @devtools/plugin-catalog-common@1.0.7
  - @devtools/backend-plugin-api@0.1.3
  - @devtools/catalog-client@1.1.1
  - @devtools/errors@1.1.2
  - @devtools/types@1.0.0

## 1.2.0-next.2

### Minor Changes

- 404366c853: Deprecated the `LocationSpec` type. It got moved from this package to the `@devtools/plugin-catalog-common` so make sure imports are updated.

### Patch Changes

- Updated dependencies
  - @devtools/plugin-catalog-common@1.0.7-next.2
  - @devtools/backend-plugin-api@0.1.3-next.2
  - @devtools/catalog-client@1.1.1-next.2
  - @devtools/catalog-model@1.1.2-next.2
  - @devtools/errors@1.1.2-next.2
  - @devtools/types@1.0.0

## 1.1.1-next.1

### Patch Changes

- Updated dependencies
  - @devtools/catalog-client@1.1.1-next.1
  - @devtools/backend-plugin-api@0.1.3-next.1
  - @devtools/catalog-model@1.1.2-next.1
  - @devtools/errors@1.1.2-next.1
  - @devtools/types@1.0.0

## 1.1.1-next.0

### Patch Changes

- Updated dependencies
  - @devtools/catalog-model@1.1.2-next.0
  - @devtools/backend-plugin-api@0.1.3-next.0
  - @devtools/catalog-client@1.1.1-next.0
  - @devtools/errors@1.1.2-next.0
  - @devtools/types@1.0.0

## 1.1.0

### Minor Changes

- 9743bc788c: Added refresh function to the `EntityProviderConnection` to be able to schedule refreshes from entity providers.

### Patch Changes

- 7d7d947352: Adds experimental `catalogServiceRef` for obtaining a `CatalogClient` in the new backend system.
- 409ed984e8: Updated usage of experimental backend service APIs.
- 62788b2ee8: The experimental `CatalogProcessingExtensionPoint` now accepts multiple providers and processors at once.
- Updated dependencies
  - @devtools/backend-plugin-api@0.1.2
  - @devtools/catalog-client@1.1.0
  - @devtools/catalog-model@1.1.1
  - @devtools/errors@1.1.1

## 1.1.0-next.2

### Minor Changes

- 9743bc788c: Added refresh function to the `EntityProviderConnection` to be able to schedule refreshes from entity providers.

### Patch Changes

- 409ed984e8: Updated usage of experimental backend service APIs.
- Updated dependencies
  - @devtools/backend-plugin-api@0.1.2-next.2
  - @devtools/catalog-client@1.1.0-next.2
  - @devtools/catalog-model@1.1.1-next.0
  - @devtools/errors@1.1.1-next.0

## 1.0.2-next.1

### Patch Changes

- 7d7d947352: Adds experimental `catalogServiceRef` for obtaining a `CatalogClient` in the new backend system.
- Updated dependencies
  - @devtools/backend-plugin-api@0.1.2-next.1
  - @devtools/catalog-client@1.0.5-next.1

## 1.0.2-next.0

### Patch Changes

- 62788b2ee8: The experimental `CatalogProcessingExtensionPoint` now accepts multiple providers and processors at once.
- Updated dependencies
  - @devtools/backend-plugin-api@0.1.2-next.0

## 1.0.1

### Patch Changes

- 0599732ec0: Refactored experimental backend system with new type names.
- 56e1b4b89c: Fixed typos in alpha types.
- Updated dependencies
  - @devtools/backend-plugin-api@0.1.1

## 1.0.1-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.1.1-next.0

## 1.0.0

### Major Changes

- 9a6aba1d85: This package houses stable types from the `@devtools/plugin-catalog-backend` package and is intended for creation of catalog modules. Prefer importing from this package over the `@devtools/plugin-catalog-backend` package.

### Minor Changes

- 91c1d12123: Added alpha exports for the new experimental backend system.

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.1.0
  - @devtools/catalog-model@1.1.0
  - @devtools/errors@1.1.0

## 1.0.0-next.0

### Major Changes

- 9a6aba1d85: This package houses stable types from the `@devtools/plugin-catalog-backend` package and is intended for creation of catalog modules. Prefer importing from this package over the `@devtools/plugin-catalog-backend` package.

### Minor Changes

- 91c1d12123: Added alpha exports for the new experimental backend system.

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.1.0-next.0
  - @devtools/catalog-model@1.1.0-next.3