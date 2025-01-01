# @devtools/plugin-catalog-backend-module-devtools-openapi

## 0.4.4-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-openapi-utils@0.4.1-next.0
  - @devtools/backend-plugin-api@1.1.1-next.0
  - @devtools/catalog-model@1.7.2
  - @devtools/config@1.3.1
  - @devtools/errors@1.2.6
  - @devtools/plugin-catalog-node@1.15.1-next.0

## 0.4.3

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@1.1.0
  - @devtools/plugin-catalog-node@1.15.0
  - @devtools/backend-openapi-utils@0.4.0
  - @devtools/errors@1.2.6
  - @devtools/catalog-model@1.7.2
  - @devtools/config@1.3.1

## 0.4.3-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@1.1.0-next.2
  - @devtools/backend-openapi-utils@0.4.0-next.2
  - @devtools/errors@1.2.6-next.0
  - @devtools/plugin-catalog-node@1.15.0-next.2
  - @devtools/catalog-model@1.7.2-next.0
  - @devtools/config@1.3.1-next.0

## 0.4.3-next.1

### Patch Changes

- Updated dependencies
  - @devtools/plugin-catalog-node@1.15.0-next.1
  - @devtools/backend-plugin-api@1.1.0-next.1
  - @devtools/backend-openapi-utils@0.3.1-next.1
  - @devtools/catalog-model@1.7.1
  - @devtools/config@1.3.0
  - @devtools/errors@1.2.5

## 0.4.3-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@1.0.3-next.0
  - @devtools/backend-openapi-utils@0.3.1-next.0
  - @devtools/catalog-model@1.7.1
  - @devtools/config@1.3.0
  - @devtools/errors@1.2.5
  - @devtools/plugin-catalog-node@1.14.1-next.0

## 0.4.2

### Patch Changes

- 4e58bc7: Upgrade to uuid v11 internally
- Updated dependencies
  - @devtools/config@1.3.0
  - @devtools/plugin-catalog-node@1.14.0
  - @devtools/backend-plugin-api@1.0.2
  - @devtools/backend-openapi-utils@0.3.0
  - @devtools/catalog-model@1.7.1
  - @devtools/errors@1.2.5

## 0.4.2-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-openapi-utils@0.3.0-next.2
  - @devtools/plugin-catalog-node@1.14.0-next.2
  - @devtools/backend-plugin-api@1.0.2-next.2
  - @devtools/catalog-model@1.7.0
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4

## 0.4.2-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-openapi-utils@0.2.1-next.1
  - @devtools/backend-plugin-api@1.0.2-next.1
  - @devtools/catalog-model@1.7.0
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/plugin-catalog-node@1.14.0-next.1

## 0.4.2-next.0

### Patch Changes

- Updated dependencies
  - @devtools/plugin-catalog-node@1.14.0-next.0
  - @devtools/backend-openapi-utils@0.2.1-next.0
  - @devtools/backend-plugin-api@1.0.2-next.0
  - @devtools/catalog-model@1.7.0
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4

## 0.4.1

### Patch Changes

- Updated dependencies
  - @devtools/plugin-catalog-node@1.13.1
  - @devtools/backend-openapi-utils@0.2.0
  - @devtools/backend-plugin-api@1.0.1
  - @devtools/catalog-model@1.7.0
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4

## 0.4.1-next.1

### Patch Changes

- Updated dependencies
  - @devtools/plugin-catalog-node@1.13.1-next.1
  - @devtools/backend-openapi-utils@0.2.0-next.1
  - @devtools/backend-plugin-api@1.0.1-next.1
  - @devtools/catalog-model@1.7.0
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4

## 0.4.1-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-openapi-utils@0.1.19-next.0
  - @devtools/backend-plugin-api@1.0.1-next.0
  - @devtools/catalog-model@1.7.0
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/plugin-catalog-node@1.13.1-next.0

## 0.4.0

### Minor Changes

- d425fc4: **BREAKING**: The return values from `createBackendPlugin`, `createBackendModule`, and `createServiceFactory` are now simply `BackendFeature` and `ServiceFactory`, instead of the previously deprecated form of a function that returns them. For this reason, `createServiceFactory` also no longer accepts the callback form where you provide direct options to the service. This also affects all `coreServices.*` service refs.

  This may in particular affect tests; if you were effectively doing `createBackendModule({...})()` (note the parentheses), you can now remove those extra parentheses at the end. You may encounter cases of this in your `packages/backend/src/index.ts` too, where you add plugins, modules, and services. If you were using `createServiceFactory` with a function as its argument for the purpose of passing in options, this pattern has been deprecated for a while and is no longer supported. You may want to explore the new multiton patterns to achieve your goals, or moving settings to app-config.

  As part of this change, the `IdentityFactoryOptions` type was removed, and can no longer be used to tweak that service. The identity service was also deprecated some time ago, and you will want to [migrate to the new auth system](https://devtools.khulnasoft.com/docs/tutorials/auth-service-migration) if you still rely on it.

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@1.0.0
  - @devtools/catalog-model@1.7.0
  - @devtools/plugin-catalog-node@1.13.0
  - @devtools/backend-openapi-utils@0.1.18
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4

## 0.4.0-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@1.0.0-next.2
  - @devtools/backend-openapi-utils@0.1.18-next.2
  - @devtools/catalog-model@1.6.0
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/plugin-catalog-node@1.12.7-next.2

## 0.4.0-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-openapi-utils@0.1.18-next.1
  - @devtools/backend-plugin-api@0.9.0-next.1
  - @devtools/catalog-model@1.6.0
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/plugin-catalog-node@1.12.7-next.1

## 0.4.0-next.0

### Minor Changes

- d425fc4: **BREAKING**: The return values from `createBackendPlugin`, `createBackendModule`, and `createServiceFactory` are now simply `BackendFeature` and `ServiceFactory`, instead of the previously deprecated form of a function that returns them. For this reason, `createServiceFactory` also no longer accepts the callback form where you provide direct options to the service. This also affects all `coreServices.*` service refs.

  This may in particular affect tests; if you were effectively doing `createBackendModule({...})()` (note the parentheses), you can now remove those extra parentheses at the end. You may encounter cases of this in your `packages/backend/src/index.ts` too, where you add plugins, modules, and services. If you were using `createServiceFactory` with a function as its argument for the purpose of passing in options, this pattern has been deprecated for a while and is no longer supported. You may want to explore the new multiton patterns to achieve your goals, or moving settings to app-config.

  As part of this change, the `IdentityFactoryOptions` type was removed, and can no longer be used to tweak that service. The identity service was also deprecated some time ago, and you will want to [migrate to the new auth system](https://devtools.khulnasoft.com/docs/tutorials/auth-service-migration) if you still rely on it.

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.9.0-next.0
  - @devtools/backend-openapi-utils@0.1.18-next.0
  - @devtools/plugin-catalog-node@1.12.7-next.0
  - @devtools/catalog-model@1.6.0
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4

## 0.3.0

### Minor Changes

- fc24d9e: Stop using `@devtools/backend-tasks` as it will be deleted in near future.

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.8.0
  - @devtools/plugin-catalog-node@1.12.5
  - @devtools/catalog-model@1.6.0
  - @devtools/backend-openapi-utils@0.1.16
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4

## 0.2.6-next.3

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.8.0-next.3
  - @devtools/catalog-model@1.6.0-next.0
  - @devtools/backend-openapi-utils@0.1.16-next.3
  - @devtools/backend-tasks@0.5.28-next.3
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/plugin-catalog-node@1.12.5-next.3

## 0.2.6-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.8.0-next.2
  - @devtools/backend-tasks@0.5.28-next.2
  - @devtools/plugin-catalog-node@1.12.5-next.2
  - @devtools/backend-openapi-utils@0.1.16-next.2
  - @devtools/catalog-model@1.5.0
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4

## 0.2.6-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.7.1-next.1
  - @devtools/plugin-catalog-node@1.12.5-next.1
  - @devtools/backend-openapi-utils@0.1.16-next.1
  - @devtools/backend-tasks@0.5.28-next.1
  - @devtools/catalog-model@1.5.0
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4

## 0.2.6-next.0

### Patch Changes

- Updated dependencies
  - @devtools/plugin-catalog-node@1.12.5-next.0
  - @devtools/backend-openapi-utils@0.1.16-next.0
  - @devtools/backend-plugin-api@0.7.1-next.0
  - @devtools/backend-tasks@0.5.28-next.0
  - @devtools/catalog-model@1.5.0
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4

## 0.2.5

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.7.0
  - @devtools/backend-tasks@0.5.27
  - @devtools/backend-openapi-utils@0.1.15
  - @devtools/plugin-catalog-node@1.12.4
  - @devtools/catalog-model@1.5.0
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4

## 0.2.5-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-openapi-utils@0.1.15-next.1
  - @devtools/backend-plugin-api@0.6.22-next.1
  - @devtools/backend-tasks@0.5.27-next.1
  - @devtools/catalog-model@1.5.0
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/plugin-catalog-node@1.12.4-next.1

## 0.2.4-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.6.21-next.0
  - @devtools/backend-tasks@0.5.26-next.0
  - @devtools/backend-openapi-utils@0.1.14-next.0
  - @devtools/plugin-catalog-node@1.12.3-next.0
  - @devtools/catalog-model@1.5.0
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4

## 0.2.2

### Patch Changes

- 78a0b08: Internal refactor to handle `BackendFeature` contract change.
- d44a20a: Added additional plugin metadata to `package.json`.
- Updated dependencies
  - @devtools/backend-plugin-api@0.6.19
  - @devtools/backend-tasks@0.5.24
  - @devtools/plugin-catalog-node@1.12.1
  - @devtools/backend-openapi-utils@0.1.12
  - @devtools/catalog-model@1.5.0
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4

## 0.2.2-next.2

### Patch Changes

- d44a20a: Added additional plugin metadata to `package.json`.
- Updated dependencies
  - @devtools/backend-plugin-api@0.6.19-next.3
  - @devtools/plugin-catalog-node@1.12.1-next.2
  - @devtools/backend-tasks@0.5.24-next.3
  - @devtools/backend-openapi-utils@0.1.12-next.2
  - @devtools/catalog-model@1.5.0
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4

## 0.2.2-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.6.19-next.2
  - @devtools/backend-openapi-utils@0.1.12-next.1
  - @devtools/backend-tasks@0.5.24-next.2
  - @devtools/plugin-catalog-node@1.12.1-next.1
  - @devtools/catalog-model@1.5.0
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4

## 0.2.2-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-tasks@0.5.24-next.0
  - @devtools/backend-plugin-api@0.6.19-next.0
  - @devtools/backend-openapi-utils@0.1.12-next.0
  - @devtools/plugin-catalog-node@1.12.1-next.0
  - @devtools/catalog-model@1.5.0
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4

## 0.2.1

### Patch Changes

- f3f0281: Fix incorrect dependency import.
- Updated dependencies
  - @devtools/plugin-catalog-node@1.12.0
  - @devtools/catalog-model@1.5.0
  - @devtools/backend-plugin-api@0.6.18
  - @devtools/backend-tasks@0.5.23
  - @devtools/backend-openapi-utils@0.1.11

## 0.2.1-next.2

### Patch Changes

- Updated dependencies
  - @devtools/plugin-catalog-node@1.12.0-next.2

## 0.2.1-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-tasks@0.5.23-next.1
  - @devtools/plugin-catalog-node@1.11.2-next.1
  - @devtools/backend-plugin-api@0.6.18-next.1
  - @devtools/backend-openapi-utils@0.1.11-next.1

## 0.2.1-next.0

### Patch Changes

- f3f0281: Fix incorrect dependency import.
- Updated dependencies
  - @devtools/catalog-model@1.5.0-next.0
  - @devtools/backend-plugin-api@0.6.18-next.0
  - @devtools/plugin-catalog-node@1.11.2-next.0
  - @devtools/backend-openapi-utils@0.1.11-next.0
  - @devtools/backend-tasks@0.5.23-next.0
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4

## 0.2.0

### Minor Changes

- 2e2167a: The name and title of the returned openapi doc entity are now configurable

### Patch Changes

- 58763e8: Use direct access of openapi.json files and not external route
- Updated dependencies
  - @devtools/backend-plugin-api@0.6.17
  - @devtools/backend-tasks@0.5.22
  - @devtools/plugin-catalog-node@1.11.1
  - @devtools/backend-openapi-utils@0.1.10
  - @devtools/catalog-model@1.4.5
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4

## 0.1.11-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.6.17-next.1
  - @devtools/backend-tasks@0.5.22-next.1
  - @devtools/backend-openapi-utils@0.1.10-next.1
  - @devtools/catalog-model@1.4.5
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/plugin-catalog-node@1.11.1-next.1

## 0.1.11-next.0

### Patch Changes

- 58763e8: Use direct access of openapi.json files and not external route
- Updated dependencies
  - @devtools/backend-openapi-utils@0.1.10-next.0
  - @devtools/backend-plugin-api@0.6.17-next.0
  - @devtools/backend-tasks@0.5.22-next.0
  - @devtools/catalog-model@1.4.5
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/plugin-catalog-node@1.11.1-next.0

## 0.1.10

### Patch Changes

- Updated dependencies
  - @devtools/plugin-catalog-node@1.11.0
  - @devtools/backend-plugin-api@0.6.16
  - @devtools/backend-tasks@0.5.21
  - @devtools/backend-openapi-utils@0.1.9
  - @devtools/catalog-model@1.4.5
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4

## 0.1.9

### Patch Changes

- Updated dependencies
  - @devtools/plugin-catalog-node@1.10.0
  - @devtools/backend-tasks@0.5.20
  - @devtools/backend-openapi-utils@0.1.8
  - @devtools/backend-plugin-api@0.6.15
  - @devtools/catalog-model@1.4.5
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4

## 0.1.8

### Patch Changes

- Updated dependencies
  - @devtools/plugin-catalog-node@1.9.0

## 0.1.7

### Patch Changes

- 2bd1410: Removed unused dependencies
- 43a9ae1: Migrated to use new auth service.
- Updated dependencies
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/backend-plugin-api@0.6.14
  - @devtools/plugin-catalog-node@1.8.0
  - @devtools/backend-openapi-utils@0.1.7
  - @devtools/backend-tasks@0.5.19
  - @devtools/catalog-model@1.4.5

## 0.1.7-next.2

### Patch Changes

- 2bd1410: Removed unused dependencies
- Updated dependencies
  - @devtools/plugin-catalog-node@1.8.0-next.2
  - @devtools/backend-openapi-utils@0.1.7-next.2
  - @devtools/backend-plugin-api@0.6.14-next.2
  - @devtools/backend-tasks@0.5.19-next.2
  - @devtools/catalog-model@1.4.5-next.0
  - @devtools/config@1.2.0-next.1
  - @devtools/errors@1.2.4-next.0

## 0.1.7-next.1

### Patch Changes

- Updated dependencies
  - @devtools/config@1.2.0-next.1
  - @devtools/backend-common@0.21.4-next.1
  - @devtools/backend-plugin-api@0.6.14-next.1
  - @devtools/backend-tasks@0.5.19-next.1
  - @devtools/backend-openapi-utils@0.1.7-next.1
  - @devtools/catalog-model@1.4.5-next.0
  - @devtools/errors@1.2.4-next.0
  - @devtools/plugin-catalog-node@1.8.0-next.1

## 0.1.6-next.0

### Patch Changes

- 43a9ae1: Migrated to use new auth service.
- Updated dependencies
  - @devtools/backend-common@0.21.3-next.0
  - @devtools/errors@1.2.4-next.0
  - @devtools/backend-plugin-api@0.6.13-next.0
  - @devtools/plugin-catalog-node@1.8.0-next.0
  - @devtools/backend-openapi-utils@0.1.6-next.0
  - @devtools/backend-tasks@0.5.18-next.0
  - @devtools/catalog-model@1.4.5-next.0
  - @devtools/config@1.1.2-next.0

## 0.1.3

### Patch Changes

- 8472188: Added or fixed the `repository` field in `package.json`.
- Updated dependencies
  - @devtools/backend-common@0.21.0
  - @devtools/backend-plugin-api@0.6.10
  - @devtools/backend-tasks@0.5.15
  - @devtools/catalog-model@1.4.4
  - @devtools/backend-openapi-utils@0.1.3
  - @devtools/plugin-catalog-node@1.7.0
  - @devtools/config@1.1.1
  - @devtools/errors@1.2.3

## 0.1.3-next.3

### Patch Changes

- 8472188: Added or fixed the `repository` field in `package.json`.
- Updated dependencies
  - @devtools/backend-common@0.21.0-next.3
  - @devtools/backend-tasks@0.5.15-next.3
  - @devtools/plugin-catalog-node@1.6.2-next.3
  - @devtools/backend-openapi-utils@0.1.3-next.3
  - @devtools/backend-plugin-api@0.6.10-next.3
  - @devtools/catalog-model@1.4.4-next.0
  - @devtools/config@1.1.1
  - @devtools/errors@1.2.3

## 0.1.3-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.21.0-next.2
  - @devtools/backend-plugin-api@0.6.10-next.2
  - @devtools/backend-tasks@0.5.15-next.2
  - @devtools/backend-openapi-utils@0.1.3-next.2
  - @devtools/plugin-catalog-node@1.6.2-next.2
  - @devtools/config@1.1.1
  - @devtools/catalog-model@1.4.4-next.0
  - @devtools/errors@1.2.3

## 0.1.3-next.1

### Patch Changes

- Updated dependencies
  - @devtools/catalog-model@1.4.4-next.0
  - @devtools/backend-plugin-api@0.6.10-next.1
  - @devtools/backend-common@0.21.0-next.1
  - @devtools/backend-openapi-utils@0.1.3-next.1
  - @devtools/backend-tasks@0.5.15-next.1
  - @devtools/config@1.1.1
  - @devtools/errors@1.2.3
  - @devtools/plugin-catalog-node@1.6.2-next.1

## 0.1.3-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.21.0-next.0
  - @devtools/backend-openapi-utils@0.1.3-next.0
  - @devtools/backend-tasks@0.5.15-next.0
  - @devtools/plugin-catalog-node@1.6.2-next.0
  - @devtools/backend-plugin-api@0.6.10-next.0
  - @devtools/catalog-model@1.4.3
  - @devtools/config@1.1.1
  - @devtools/errors@1.2.3

## 0.1.2

### Patch Changes

- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @devtools/backend-common@0.20.1
  - @devtools/backend-plugin-api@0.6.9
  - @devtools/backend-openapi-utils@0.1.2
  - @devtools/plugin-catalog-node@1.6.1
  - @devtools/backend-tasks@0.5.14
  - @devtools/catalog-model@1.4.3
  - @devtools/config@1.1.1
  - @devtools/errors@1.2.3

## 0.1.2-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.6.9-next.2
  - @devtools/backend-common@0.20.1-next.2
  - @devtools/backend-openapi-utils@0.1.2-next.2
  - @devtools/plugin-catalog-node@1.6.1-next.2
  - @devtools/backend-tasks@0.5.14-next.2

## 0.1.2-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.20.1-next.1
  - @devtools/config@1.1.1
  - @devtools/backend-tasks@0.5.14-next.1
  - @devtools/backend-openapi-utils@0.1.2-next.1
  - @devtools/backend-plugin-api@0.6.9-next.1
  - @devtools/catalog-model@1.4.3
  - @devtools/errors@1.2.3
  - @devtools/plugin-catalog-node@1.6.1-next.1

## 0.1.2-next.0

### Patch Changes

- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @devtools/backend-common@0.20.1-next.0
  - @devtools/backend-openapi-utils@0.1.2-next.0
  - @devtools/plugin-catalog-node@1.6.1-next.0
  - @devtools/backend-plugin-api@0.6.9-next.0
  - @devtools/backend-tasks@0.5.14-next.0
  - @devtools/catalog-model@1.4.3
  - @devtools/config@1.1.1
  - @devtools/errors@1.2.3

## 0.1.1

### Patch Changes

- eb44e92: Support authenticated backends
- Updated dependencies
  - @devtools/backend-common@0.20.0
  - @devtools/plugin-catalog-node@1.6.0
  - @devtools/backend-openapi-utils@0.1.1
  - @devtools/backend-tasks@0.5.13
  - @devtools/backend-plugin-api@0.6.8
  - @devtools/catalog-model@1.4.3
  - @devtools/config@1.1.1
  - @devtools/errors@1.2.3

## 0.1.1-next.3

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.20.0-next.3
  - @devtools/backend-openapi-utils@0.1.1-next.3
  - @devtools/backend-plugin-api@0.6.8-next.3
  - @devtools/backend-tasks@0.5.13-next.3
  - @devtools/catalog-model@1.4.3
  - @devtools/config@1.1.1
  - @devtools/errors@1.2.3
  - @devtools/plugin-catalog-node@1.6.0-next.3

## 0.1.1-next.2

### Patch Changes

- Updated dependencies
  - @devtools/plugin-catalog-node@1.6.0-next.2
  - @devtools/backend-common@0.20.0-next.2
  - @devtools/backend-openapi-utils@0.1.1-next.2
  - @devtools/backend-plugin-api@0.6.8-next.2
  - @devtools/backend-tasks@0.5.13-next.2
  - @devtools/catalog-model@1.4.3
  - @devtools/config@1.1.1
  - @devtools/errors@1.2.3

## 0.1.1-next.1

### Patch Changes

- eb44e92898: Support authenticated backends
- Updated dependencies
  - @devtools/backend-common@0.20.0-next.1
  - @devtools/backend-openapi-utils@0.1.1-next.1
  - @devtools/backend-plugin-api@0.6.8-next.1
  - @devtools/backend-tasks@0.5.13-next.1
  - @devtools/catalog-model@1.4.3
  - @devtools/config@1.1.1
  - @devtools/errors@1.2.3
  - @devtools/plugin-catalog-node@1.5.1-next.1

## 0.1.1-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.20.0-next.0
  - @devtools/backend-openapi-utils@0.1.1-next.0
  - @devtools/backend-tasks@0.5.13-next.0
  - @devtools/plugin-catalog-node@1.5.1-next.0
  - @devtools/backend-plugin-api@0.6.8-next.0
  - @devtools/catalog-model@1.4.3
  - @devtools/config@1.1.1
  - @devtools/errors@1.2.3

## 0.1.0

### Minor Changes

- 785fb1ea75: Adds a new catalog module for ingesting Devtools plugin OpenAPI specs into the catalog for display as an API entity.

### Patch Changes

- 4aa43f62aa: Updated dependency `cross-fetch` to `^4.0.0`.
- Updated dependencies
  - @devtools/plugin-catalog-node@1.5.0
  - @devtools/backend-common@0.19.9
  - @devtools/backend-plugin-api@0.6.7
  - @devtools/backend-tasks@0.5.12
  - @devtools/backend-openapi-utils@0.1.0
  - @devtools/catalog-model@1.4.3
  - @devtools/config@1.1.1
  - @devtools/errors@1.2.3

## 0.1.0-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.6.7-next.2
  - @devtools/backend-common@0.19.9-next.2
  - @devtools/backend-tasks@0.5.12-next.2
  - @devtools/backend-openapi-utils@0.1.0-next.2
  - @devtools/plugin-catalog-node@1.5.0-next.2

## 0.1.0-next.1

### Patch Changes

- Updated dependencies
  - @devtools/plugin-catalog-node@1.5.0-next.1
  - @devtools/backend-common@0.19.9-next.1
  - @devtools/backend-tasks@0.5.12-next.1
  - @devtools/backend-openapi-utils@0.1.0-next.1
  - @devtools/backend-plugin-api@0.6.7-next.1
  - @devtools/catalog-model@1.4.3
  - @devtools/config@1.1.1
  - @devtools/errors@1.2.3

## 0.1.0-next.0

### Minor Changes

- 785fb1ea75: Adds a new catalog module for ingesting Devtools plugin OpenAPI specs into the catalog for display as an API entity.

### Patch Changes

- Updated dependencies
  - @devtools/backend-openapi-utils@0.1.0-next.0
  - @devtools/backend-common@0.19.9-next.0
  - @devtools/backend-plugin-api@0.6.7-next.0
  - @devtools/backend-tasks@0.5.12-next.0
  - @devtools/catalog-model@1.4.3
  - @devtools/config@1.1.1
  - @devtools/errors@1.2.3
  - @devtools/plugin-catalog-node@1.4.8-next.0