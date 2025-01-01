# @devtools/plugin-auth-backend-module-azure-easyauth-provider

## 0.2.4-next.0

### Patch Changes

- Updated dependencies
  - @devtools/plugin-auth-node@0.5.6-next.0
  - @devtools/backend-plugin-api@1.1.1-next.0
  - @devtools/catalog-model@1.7.2
  - @devtools/errors@1.2.6

## 0.2.3

### Patch Changes

- Updated dependencies
  - @devtools/plugin-auth-node@0.5.5
  - @devtools/backend-plugin-api@1.1.0
  - @devtools/errors@1.2.6
  - @devtools/catalog-model@1.7.2

## 0.2.3-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@1.1.0-next.2
  - @devtools/errors@1.2.6-next.0
  - @devtools/plugin-auth-node@0.5.5-next.2
  - @devtools/catalog-model@1.7.2-next.0

## 0.2.3-next.1

### Patch Changes

- Updated dependencies
  - @devtools/plugin-auth-node@0.5.5-next.1
  - @devtools/backend-plugin-api@1.1.0-next.1
  - @devtools/catalog-model@1.7.1
  - @devtools/errors@1.2.5

## 0.2.3-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@1.0.3-next.0
  - @devtools/plugin-auth-node@0.5.5-next.0
  - @devtools/catalog-model@1.7.1
  - @devtools/errors@1.2.5

## 0.2.2

### Patch Changes

- Updated dependencies
  - @devtools/plugin-auth-node@0.5.4
  - @devtools/backend-plugin-api@1.0.2
  - @devtools/catalog-model@1.7.1
  - @devtools/errors@1.2.5

## 0.2.2-next.2

### Patch Changes

- Updated dependencies
  - @devtools/plugin-auth-node@0.5.4-next.2
  - @devtools/backend-plugin-api@1.0.2-next.2
  - @devtools/catalog-model@1.7.0
  - @devtools/errors@1.2.4

## 0.2.2-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@1.0.2-next.1
  - @devtools/catalog-model@1.7.0
  - @devtools/errors@1.2.4
  - @devtools/plugin-auth-node@0.5.4-next.1

## 0.2.2-next.0

### Patch Changes

- Updated dependencies
  - @devtools/plugin-auth-node@0.5.4-next.0
  - @devtools/backend-plugin-api@1.0.2-next.0
  - @devtools/catalog-model@1.7.0
  - @devtools/errors@1.2.4

## 0.2.1

### Patch Changes

- Updated dependencies
  - @devtools/plugin-auth-node@0.5.3
  - @devtools/backend-plugin-api@1.0.1
  - @devtools/catalog-model@1.7.0
  - @devtools/errors@1.2.4

## 0.2.1-next.1

### Patch Changes

- Updated dependencies
  - @devtools/plugin-auth-node@0.5.3-next.1
  - @devtools/backend-plugin-api@1.0.1-next.1
  - @devtools/catalog-model@1.7.0
  - @devtools/errors@1.2.4

## 0.2.1-next.0

### Patch Changes

- Updated dependencies
  - @devtools/plugin-auth-node@0.5.3-next.0
  - @devtools/backend-plugin-api@1.0.1-next.0
  - @devtools/catalog-model@1.7.0
  - @devtools/errors@1.2.4

## 0.2.0

### Minor Changes

- d425fc4: **BREAKING**: The return values from `createBackendPlugin`, `createBackendModule`, and `createServiceFactory` are now simply `BackendFeature` and `ServiceFactory`, instead of the previously deprecated form of a function that returns them. For this reason, `createServiceFactory` also no longer accepts the callback form where you provide direct options to the service. This also affects all `coreServices.*` service refs.

  This may in particular affect tests; if you were effectively doing `createBackendModule({...})()` (note the parentheses), you can now remove those extra parentheses at the end. You may encounter cases of this in your `packages/backend/src/index.ts` too, where you add plugins, modules, and services. If you were using `createServiceFactory` with a function as its argument for the purpose of passing in options, this pattern has been deprecated for a while and is no longer supported. You may want to explore the new multiton patterns to achieve your goals, or moving settings to app-config.

  As part of this change, the `IdentityFactoryOptions` type was removed, and can no longer be used to tweak that service. The identity service was also deprecated some time ago, and you will want to [migrate to the new auth system](https://devtools.khulnasoft.com/docs/tutorials/auth-service-migration) if you still rely on it.

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@1.0.0
  - @devtools/plugin-auth-node@0.5.2
  - @devtools/catalog-model@1.7.0
  - @devtools/errors@1.2.4

## 0.2.0-next.2

### Patch Changes

- Updated dependencies
  - @devtools/plugin-auth-node@0.5.2-next.2
  - @devtools/backend-plugin-api@1.0.0-next.2
  - @devtools/catalog-model@1.6.0
  - @devtools/errors@1.2.4

## 0.2.0-next.1

### Patch Changes

- Updated dependencies
  - @devtools/plugin-auth-node@0.5.2-next.1
  - @devtools/backend-plugin-api@0.9.0-next.1
  - @devtools/catalog-model@1.6.0
  - @devtools/errors@1.2.4

## 0.2.0-next.0

### Minor Changes

- d425fc4: **BREAKING**: The return values from `createBackendPlugin`, `createBackendModule`, and `createServiceFactory` are now simply `BackendFeature` and `ServiceFactory`, instead of the previously deprecated form of a function that returns them. For this reason, `createServiceFactory` also no longer accepts the callback form where you provide direct options to the service. This also affects all `coreServices.*` service refs.

  This may in particular affect tests; if you were effectively doing `createBackendModule({...})()` (note the parentheses), you can now remove those extra parentheses at the end. You may encounter cases of this in your `packages/backend/src/index.ts` too, where you add plugins, modules, and services. If you were using `createServiceFactory` with a function as its argument for the purpose of passing in options, this pattern has been deprecated for a while and is no longer supported. You may want to explore the new multiton patterns to achieve your goals, or moving settings to app-config.

  As part of this change, the `IdentityFactoryOptions` type was removed, and can no longer be used to tweak that service. The identity service was also deprecated some time ago, and you will want to [migrate to the new auth system](https://devtools.khulnasoft.com/docs/tutorials/auth-service-migration) if you still rely on it.

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.9.0-next.0
  - @devtools/plugin-auth-node@0.5.2-next.0
  - @devtools/catalog-model@1.6.0
  - @devtools/errors@1.2.4

## 0.1.6

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.8.0
  - @devtools/plugin-auth-node@0.5.0
  - @devtools/catalog-model@1.6.0
  - @devtools/errors@1.2.4

## 0.1.6-next.3

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.8.0-next.3
  - @devtools/catalog-model@1.6.0-next.0
  - @devtools/errors@1.2.4
  - @devtools/plugin-auth-node@0.5.0-next.3

## 0.1.6-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.8.0-next.2
  - @devtools/plugin-auth-node@0.5.0-next.2
  - @devtools/catalog-model@1.5.0
  - @devtools/errors@1.2.4

## 0.1.6-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.7.1-next.1
  - @devtools/catalog-model@1.5.0
  - @devtools/errors@1.2.4
  - @devtools/plugin-auth-node@0.4.18-next.1

## 0.1.6-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.7.1-next.0
  - @devtools/catalog-model@1.5.0
  - @devtools/errors@1.2.4
  - @devtools/plugin-auth-node@0.4.18-next.0

## 0.1.5

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.7.0
  - @devtools/plugin-auth-node@0.4.17
  - @devtools/catalog-model@1.5.0
  - @devtools/errors@1.2.4

## 0.1.5-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.6.22-next.1
  - @devtools/catalog-model@1.5.0
  - @devtools/errors@1.2.4
  - @devtools/plugin-auth-node@0.4.17-next.1

## 0.1.4-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.6.21-next.0
  - @devtools/plugin-auth-node@0.4.16-next.0
  - @devtools/catalog-model@1.5.0
  - @devtools/errors@1.2.4

## 0.1.2

### Patch Changes

- 78a0b08: Internal refactor to handle `BackendFeature` contract change.
- d44a20a: Added additional plugin metadata to `package.json`.
- Updated dependencies
  - @devtools/backend-plugin-api@0.6.19
  - @devtools/plugin-auth-node@0.4.14
  - @devtools/catalog-model@1.5.0
  - @devtools/errors@1.2.4

## 0.1.2-next.2

### Patch Changes

- d44a20a: Added additional plugin metadata to `package.json`.
- Updated dependencies
  - @devtools/backend-plugin-api@0.6.19-next.3
  - @devtools/plugin-auth-node@0.4.14-next.3
  - @devtools/catalog-model@1.5.0
  - @devtools/errors@1.2.4

## 0.1.2-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.6.19-next.2
  - @devtools/plugin-auth-node@0.4.14-next.2
  - @devtools/catalog-model@1.5.0
  - @devtools/errors@1.2.4

## 0.1.2-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.6.19-next.0
  - @devtools/plugin-auth-node@0.4.14-next.0
  - @devtools/catalog-model@1.5.0
  - @devtools/errors@1.2.4

## 0.1.1

### Patch Changes

- Updated dependencies
  - @devtools/catalog-model@1.5.0
  - @devtools/backend-plugin-api@0.6.18
  - @devtools/plugin-auth-node@0.4.13

## 0.1.1-next.1

### Patch Changes

- Updated dependencies
  - @devtools/plugin-auth-node@0.4.13-next.1
  - @devtools/backend-plugin-api@0.6.18-next.1

## 0.1.1-next.0

### Patch Changes

- Updated dependencies
  - @devtools/catalog-model@1.5.0-next.0
  - @devtools/plugin-auth-node@0.4.13-next.0
  - @devtools/backend-plugin-api@0.6.18-next.0
  - @devtools/errors@1.2.4

## 0.1.0

### Minor Changes

- 06a6725: New auth backend module to add `azure-easyauth` provider. Note that as part of this change the default provider ID has been changed from `easyAuth` to `azureEasyAuth`, which means that if you switch to this new module you need to update your app config as well as the `provider` prop of the `ProxiedSignInPage` in the frontend.

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.6.17
  - @devtools/plugin-auth-node@0.4.12
  - @devtools/catalog-model@1.4.5
  - @devtools/errors@1.2.4
