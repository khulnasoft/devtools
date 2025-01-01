# @devtools/core-compat-api

## 0.3.4

### Patch Changes

- 1f30730: Updated dependency `@oriflame/devtools-plugin-score-card` to `^0.9.0`.
- Updated dependencies
  - @devtools/frontend-plugin-api@0.9.3
  - @devtools/core-plugin-api@1.10.2
  - @devtools/version-bridge@1.0.10

## 0.3.4-next.2

### Patch Changes

- 1f30730: Updated dependency `@oriflame/devtools-plugin-score-card` to `^0.9.0`.
- Updated dependencies
  - @devtools/core-plugin-api@1.10.2-next.0
  - @devtools/frontend-plugin-api@0.9.3-next.2
  - @devtools/version-bridge@1.0.10

## 0.3.4-next.1

### Patch Changes

- Updated dependencies
  - @devtools/core-plugin-api@1.10.1
  - @devtools/frontend-plugin-api@0.9.3-next.1
  - @devtools/version-bridge@1.0.10

## 0.3.4-next.0

### Patch Changes

- Updated dependencies
  - @devtools/frontend-plugin-api@0.9.3-next.0
  - @devtools/core-plugin-api@1.10.1
  - @devtools/version-bridge@1.0.10

## 0.3.2

### Patch Changes

- Updated dependencies
  - @devtools/core-plugin-api@1.10.1
  - @devtools/frontend-plugin-api@0.9.1
  - @devtools/version-bridge@1.0.10

## 0.3.2-next.2

### Patch Changes

- Updated dependencies
  - @devtools/core-plugin-api@1.10.0
  - @devtools/frontend-plugin-api@0.9.1-next.2
  - @devtools/version-bridge@1.0.10

## 0.3.2-next.1

### Patch Changes

- Updated dependencies
  - @devtools/core-plugin-api@1.10.0
  - @devtools/frontend-plugin-api@0.9.1-next.1
  - @devtools/version-bridge@1.0.10

## 0.3.2-next.0

### Patch Changes

- Updated dependencies
  - @devtools/core-plugin-api@1.10.0
  - @devtools/frontend-plugin-api@0.9.1-next.0
  - @devtools/version-bridge@1.0.10

## 0.3.1

### Patch Changes

- e969dc7: Move `@types/react` to a peer dependency.
- 4a5ba19: Internal update to remove deprecated `DevtoolsPlugin` type and move to `FrontendPlugin`
- Updated dependencies
  - @devtools/frontend-plugin-api@0.9.0
  - @devtools/core-plugin-api@1.10.0
  - @devtools/version-bridge@1.0.10

## 0.3.1-next.2

### Patch Changes

- Updated dependencies
  - @devtools/core-plugin-api@1.10.0-next.1
  - @devtools/frontend-plugin-api@0.9.0-next.2
  - @devtools/version-bridge@1.0.10-next.0

## 0.3.1-next.1

### Patch Changes

- e969dc7: Move `@types/react` to a peer dependency.
- Updated dependencies
  - @devtools/frontend-plugin-api@0.9.0-next.1
  - @devtools/core-plugin-api@1.10.0-next.1
  - @devtools/version-bridge@1.0.10-next.0

## 0.3.1-next.0

### Patch Changes

- 4a5ba19: Internal update to remove deprecated `DevtoolsPlugin` type and move to `FrontendPlugin`
- Updated dependencies
  - @devtools/frontend-plugin-api@0.9.0-next.0
  - @devtools/core-plugin-api@1.10.0-next.0
  - @devtools/version-bridge@1.0.9

## 0.3.0

### Minor Changes

- 6db849e: **BREAKING**: The `namespace` parameter for API's is now defaulted to the `pluginId` which was discovered. This means that if you're overriding API's by using ID's directly, they might have changed to include the plugin ID too.

### Patch Changes

- fec8b57: Updated exports to use the new type parameters for extensions and extension blueprints.
- c816e2d: Added support for new `FrontendPlugin` and `FrontendModule` types.
- 836127c: Updated dependency `@testing-library/react` to `^16.0.0`.
- Updated dependencies
  - @devtools/frontend-plugin-api@0.8.0
  - @devtools/core-plugin-api@1.9.4
  - @devtools/version-bridge@1.0.9

## 0.3.0-next.2

### Patch Changes

- 836127c: Updated dependency `@testing-library/react` to `^16.0.0`.
- Updated dependencies
  - @devtools/core-plugin-api@1.9.4-next.0
  - @devtools/frontend-plugin-api@0.8.0-next.2
  - @devtools/version-bridge@1.0.9-next.0

## 0.3.0-next.1

### Minor Changes

- 6db849e: **BREAKING**: The `namespace` parameter for API's is now defaulted to the `pluginId` which was discovered. This means that if you're overriding API's by using ID's directly, they might have changed to include the plugin ID too.

### Patch Changes

- c816e2d: Added support for new `FrontendPlugin` and `FrontendModule` types.
- Updated dependencies
  - @devtools/frontend-plugin-api@0.8.0-next.1
  - @devtools/core-plugin-api@1.9.3
  - @devtools/version-bridge@1.0.8

## 0.2.9-next.0

### Patch Changes

- fec8b57: Updated exports to use the new type parameters for extensions and extension blueprints.
- Updated dependencies
  - @devtools/frontend-plugin-api@0.8.0-next.0
  - @devtools/core-plugin-api@1.9.3
  - @devtools/version-bridge@1.0.8

## 0.2.8

### Patch Changes

- 72754db: Updated usage of `useRouteRef`, which can now always return `undefined`.
- fe1fbb2: Migrating usages of the deprecated `createExtension` `v1` format to the newer `v2` format, and old `create*Extension` extension creators to blueprints.
- 16cf96c: Both `compatWrapper` and `convertLegacyRouteRef` now support converting from the new system to the old.
- 519b8e0: Added new utilities for converting legacy plugins and extensions to the new system. The `convertLegacyPlugin` option will convert an existing plugin to the new system, although you need to supply extensions for the plugin yourself. To help out with this, there is also a new `convertLegacyPageExtension` which converts an existing page extension to the new system.
- 6349099: Added config input type to the extensions
- Updated dependencies
  - @devtools/frontend-plugin-api@0.7.0
  - @devtools/core-plugin-api@1.9.3
  - @devtools/version-bridge@1.0.8

## 0.2.8-next.3

### Patch Changes

- Updated dependencies
  - @devtools/frontend-plugin-api@0.7.0-next.3
  - @devtools/core-plugin-api@1.9.3
  - @devtools/version-bridge@1.0.8

## 0.2.8-next.2

### Patch Changes

- 72754db: Updated usage of `useRouteRef`, which can now always return `undefined`.
- 16cf96c: Both `compatWrapper` and `convertLegacyRouteRef` now support converting from the new system to the old.
- Updated dependencies
  - @devtools/frontend-plugin-api@0.7.0-next.2
  - @devtools/core-plugin-api@1.9.3
  - @devtools/version-bridge@1.0.8

## 0.2.8-next.1

### Patch Changes

- 6349099: Added config input type to the extensions
- Updated dependencies
  - @devtools/frontend-plugin-api@0.6.8-next.1
  - @devtools/core-plugin-api@1.9.3
  - @devtools/version-bridge@1.0.8

## 0.2.8-next.0

### Patch Changes

- Updated dependencies
  - @devtools/frontend-plugin-api@0.6.8-next.0
  - @devtools/core-plugin-api@1.9.3
  - @devtools/version-bridge@1.0.8

## 0.2.7

### Patch Changes

- Updated dependencies
  - @devtools/frontend-plugin-api@0.6.7
  - @devtools/core-plugin-api@1.9.3
  - @devtools/version-bridge@1.0.8

## 0.2.7-next.1

### Patch Changes

- Updated dependencies
  - @devtools/frontend-plugin-api@0.6.7-next.1

## 0.2.7-next.0

### Patch Changes

- Updated dependencies
  - @devtools/frontend-plugin-api@0.6.7-next.0
  - @devtools/core-plugin-api@1.9.3
  - @devtools/version-bridge@1.0.8

## 0.2.6

### Patch Changes

- 35fbe09: Add support for forwarding default target from legacy external route refs.
- Updated dependencies
  - @devtools/core-plugin-api@1.9.3
  - @devtools/frontend-plugin-api@0.6.6
  - @devtools/version-bridge@1.0.8

## 0.2.6-next.2

### Patch Changes

- Updated dependencies
  - @devtools/frontend-plugin-api@0.6.6-next.2
  - @devtools/core-plugin-api@1.9.3-next.0
  - @devtools/version-bridge@1.0.8

## 0.2.6-next.1

### Patch Changes

- 35fbe09: Add support for forwarding default target from legacy external route refs.
- Updated dependencies
  - @devtools/core-plugin-api@1.9.3-next.0
  - @devtools/frontend-plugin-api@0.6.6-next.1
  - @devtools/version-bridge@1.0.8

## 0.2.6-next.0

### Patch Changes

- Updated dependencies
  - @devtools/core-plugin-api@1.9.2
  - @devtools/frontend-plugin-api@0.6.6-next.0
  - @devtools/version-bridge@1.0.8

## 0.2.5

### Patch Changes

- 5d99272: Update local development dependencies.
- Updated dependencies
  - @devtools/frontend-plugin-api@0.6.5

## 0.2.5-next.1

### Patch Changes

- Updated dependencies
  - @devtools/frontend-plugin-api@0.6.5-next.1

## 0.2.5-next.0

### Patch Changes

- 5d99272: Update local development dependencies.
- Updated dependencies
  - @devtools/core-plugin-api@1.9.2
  - @devtools/frontend-plugin-api@0.6.5-next.0
  - @devtools/version-bridge@1.0.8

## 0.2.4

### Patch Changes

- d05d4bd: Moved `@devtools/core-app-api` to dev dependencies.
- abfbcfc: Updated dependency `@testing-library/react` to `^15.0.0`.
- Updated dependencies
  - @devtools/core-plugin-api@1.9.2
  - @devtools/frontend-plugin-api@0.6.4
  - @devtools/version-bridge@1.0.8

## 0.2.4-next.1

### Patch Changes

- Updated dependencies
  - @devtools/core-app-api@1.12.4-next.0
  - @devtools/frontend-plugin-api@0.6.4-next.1
  - @devtools/core-plugin-api@1.9.1
  - @devtools/version-bridge@1.0.7

## 0.2.4-next.0

### Patch Changes

- Updated dependencies
  - @devtools/core-app-api@1.12.3
  - @devtools/core-plugin-api@1.9.1
  - @devtools/frontend-plugin-api@0.6.4-next.0
  - @devtools/version-bridge@1.0.7

## 0.2.3

### Patch Changes

- Updated dependencies
  - @devtools/core-app-api@1.12.3
  - @devtools/frontend-plugin-api@0.6.3
  - @devtools/core-plugin-api@1.9.1
  - @devtools/version-bridge@1.0.7

## 0.2.2

### Patch Changes

- Updated dependencies
  - @devtools/core-app-api@1.12.2
  - @devtools/frontend-plugin-api@0.6.2
  - @devtools/core-plugin-api@1.9.1
  - @devtools/version-bridge@1.0.7

## 0.2.1

### Patch Changes

- Updated dependencies
  - @devtools/core-app-api@1.12.1
  - @devtools/core-plugin-api@1.9.1
  - @devtools/frontend-plugin-api@0.6.1
  - @devtools/version-bridge@1.0.7

## 0.2.1-next.2

### Patch Changes

- Updated dependencies
  - @devtools/frontend-plugin-api@0.6.1-next.2
  - @devtools/core-app-api@1.12.1-next.1
  - @devtools/core-plugin-api@1.9.1-next.1
  - @devtools/version-bridge@1.0.7

## 0.2.1-next.1

### Patch Changes

- Updated dependencies
  - @devtools/core-app-api@1.12.1-next.1
  - @devtools/core-plugin-api@1.9.1-next.1
  - @devtools/frontend-plugin-api@0.6.1-next.1
  - @devtools/version-bridge@1.0.7

## 0.2.1-next.0

### Patch Changes

- Updated dependencies
  - @devtools/core-plugin-api@1.9.1-next.0
  - @devtools/frontend-plugin-api@0.6.1-next.0
  - @devtools/core-app-api@1.12.1-next.0
  - @devtools/version-bridge@1.0.7

## 0.2.0

### Minor Changes

- e586f79: Add support to the new analytics api.

### Patch Changes

- 1fa5041: The backwards compatibility provider will now use the new `ComponentsApi` and `IconsApi` when implementing the old `AppContext`.
- edfd3a5: Updated dependency `@oriflame/devtools-plugin-score-card` to `^0.8.0`.
- bc621aa: Updates to use the new `RouteResolutionsApi`.
- 7155c30: Added `convertLegacyRouteRefs` for bulk conversion of plugin routes.
- 46b63de: Allow external route refs in the new system to have a `defaultTarget` pointing to a route that it'll resolve to by default if no explicit bindings were made by the adopter.
- 2f2a1d2: Plugins converted by `convertLegacyApp` now have their `routes` and `externalRoutes` included as well, allowing them to be used to bind external routes in configuration.
- 1184990: collectLegacyRoutes throws in case invalid <Route /> element is found
- Updated dependencies
  - @devtools/frontend-plugin-api@0.6.0
  - @devtools/core-app-api@1.12.0
  - @devtools/core-plugin-api@1.9.0
  - @devtools/version-bridge@1.0.7

## 0.2.0-next.3

### Patch Changes

- Updated dependencies
  - @devtools/core-app-api@1.12.0-next.1
  - @devtools/core-plugin-api@1.9.0-next.1
  - @devtools/frontend-plugin-api@0.6.0-next.3
  - @devtools/version-bridge@1.0.7

## 0.2.0-next.2

### Patch Changes

- Updated dependencies
  - @devtools/core-app-api@1.12.0-next.1
  - @devtools/core-plugin-api@1.9.0-next.1
  - @devtools/frontend-plugin-api@0.6.0-next.2
  - @devtools/version-bridge@1.0.7

## 0.2.0-next.1

### Minor Changes

- e586f79: Add support to the new analytics api.

### Patch Changes

- edfd3a5: Updated dependency `@oriflame/devtools-plugin-score-card` to `^0.8.0`.
- bc621aa: Updates to use the new `RouteResolutionsApi`.
- 46b63de: Allow external route refs in the new system to have a `defaultTarget` pointing to a route that it'll resolve to by default if no explicit bindings were made by the adopter.
- Updated dependencies
  - @devtools/frontend-plugin-api@0.6.0-next.1
  - @devtools/core-plugin-api@1.8.3-next.0
  - @devtools/core-app-api@1.11.4-next.0
  - @devtools/version-bridge@1.0.7

## 0.1.2-next.0

### Patch Changes

- 1fa5041: The backwards compatibility provider will now use the new `ComponentsApi` and `IconsApi` when implementing the old `AppContext`.
- 7155c30: Added `convertLegacyRouteRefs` for bulk conversion of plugin routes.
- 2f2a1d2: Plugins converted by `convertLegacyApp` now have their `routes` and `externalRoutes` included as well, allowing them to be used to bind external routes in configuration.
- 1184990: collectLegacyRoutes throws in case invalid <Route /> element is found
- Updated dependencies
  - @devtools/frontend-plugin-api@0.5.1-next.0
  - @devtools/core-app-api@1.11.3
  - @devtools/core-plugin-api@1.8.2
  - @devtools/version-bridge@1.0.7

## 0.1.1

### Patch Changes

- 4c1f50c: Make `convertLegacyApp` wrap discovered routes with `compatWrapper`.
- Updated dependencies
  - @devtools/frontend-plugin-api@0.5.0
  - @devtools/core-plugin-api@1.8.2
  - @devtools/core-app-api@1.11.3
  - @devtools/version-bridge@1.0.7

## 0.1.1-next.2

### Patch Changes

- 4c1f50c: Make `convertLegacyApp` wrap discovered routes with `compatWrapper`.
- Updated dependencies
  - @devtools/frontend-plugin-api@0.4.1-next.2

## 0.1.1-next.1

### Patch Changes

- Updated dependencies
  - @devtools/core-plugin-api@1.8.2-next.0
  - @devtools/core-app-api@1.11.3-next.0
  - @devtools/frontend-plugin-api@0.4.1-next.1
  - @devtools/version-bridge@1.0.7

## 0.1.1-next.0

### Patch Changes

- Updated dependencies
  - @devtools/frontend-plugin-api@0.4.1-next.0
  - @devtools/core-app-api@1.11.2
  - @devtools/core-plugin-api@1.8.1
  - @devtools/version-bridge@1.0.7

## 0.1.0

### Minor Changes

- cf5cc4c: Discover plugins and routes recursively beneath the root routes in `collectLecacyRoutes`
- af7bc3e: Switched all core extensions to instead use the namespace `'app'`.
- f63dd72: The `collectLegacyRoutes` has been removed and is replaced by `convertLegacyApp` now being able to convert a `FlatRoutes` element directly.

### Patch Changes

- 03d0b6d: Added `convertLegacyRouteRef` utility to convert existing route refs to be used with the new experimental packages.
- a379243: Leverage the new `FrontendFeature` type to simplify interfaces
- 8226442: Added `compatWrapper`, which can be used to wrap any React element to provide bi-directional interoperability between the `@devtools/core-*-api` and `@devtools/frontend-*-api` APIs.
- 8f5d6c1: Updates to match the new extension input wrapping.
- c219b16: Made package public so it can be published
- b7adf24: Delete alpha DI compatibility helper for components, migrating components should be simple without a helper.
- 046e443: Updates for compatibility with the new extension IDs.
- Updated dependencies
  - @devtools/core-plugin-api@1.8.1
  - @devtools/frontend-plugin-api@0.4.0
  - @devtools/core-app-api@1.11.2
  - @devtools/version-bridge@1.0.7

## 0.1.0-next.3

### Patch Changes

- Updated dependencies
  - @devtools/core-app-api@1.11.2-next.1
  - @devtools/core-plugin-api@1.8.1-next.1
  - @devtools/frontend-plugin-api@0.4.0-next.3
  - @devtools/version-bridge@1.0.7

## 0.1.0-next.2

### Minor Changes

- cf5cc4c: Discover plugins and routes recursively beneath the root routes in `collectLecacyRoutes`

### Patch Changes

- 8226442: Added `compatWrapper`, which can be used to wrap any React element to provide bi-directional interoperability between the `@devtools/core-*-api` and `@devtools/frontend-*-api` APIs.
- 8f5d6c1: Updates to match the new extension input wrapping.
- b7adf24: Delete alpha DI compatibility helper for components, migrating components should be simple without a helper.
- 046e443: Updates for compatibility with the new extension IDs.
- Updated dependencies
  - @devtools/frontend-plugin-api@0.4.0-next.2
  - @devtools/core-app-api@1.11.2-next.1
  - @devtools/core-plugin-api@1.8.1-next.1
  - @devtools/version-bridge@1.0.7

## 0.0.1-next.1

### Patch Changes

- Updated dependencies
  - @devtools/frontend-plugin-api@0.4.0-next.1
  - @devtools/core-plugin-api@1.8.1-next.1
  - @devtools/core-app-api@1.11.2-next.1

## 0.0.1-next.0

### Patch Changes

- c219b168aa: Made package public so it can be published

## 0.0.2-next.0

### Patch Changes

- 03d0b6dcdc: Added `convertLegacyRouteRef` utility to convert existing route refs to be used with the new experimental packages.
- Updated dependencies
  - @devtools/core-plugin-api@1.8.1-next.0
  - @devtools/frontend-plugin-api@0.3.1-next.0
  - @devtools/core-app-api@1.11.2-next.0

## 0.0.1

### Patch Changes

- Updated dependencies
  - @devtools/frontend-plugin-api@0.3.0
  - @devtools/core-plugin-api@1.8.0

## 0.0.1-next.2

### Patch Changes

- Updated dependencies
  - @devtools/frontend-plugin-api@0.3.0-next.2

## 0.0.1-next.1

### Patch Changes

- Updated dependencies
  - @devtools/frontend-plugin-api@0.3.0-next.1
  - @devtools/core-plugin-api@1.8.0-next.0

## 0.0.1-next.0

### Patch Changes

- Updated dependencies
  - @devtools/frontend-plugin-api@0.3.0-next.0
  - @devtools/core-plugin-api@1.8.0-next.0