# @devtools/plugin-scaffolder-backend-module-gcp

## 0.2.5-next.0

### Patch Changes

- Updated dependencies
  - @devtools/plugin-scaffolder-node@0.6.3-next.0
  - @devtools/backend-plugin-api@1.1.1-next.0
  - @devtools/config@1.3.1
  - @devtools/errors@1.2.6
  - @devtools/integration@1.16.0

## 0.2.4

### Patch Changes

- Updated dependencies
  - @devtools/integration@1.16.0
  - @devtools/backend-plugin-api@1.1.0
  - @devtools/plugin-scaffolder-node@0.6.2
  - @devtools/errors@1.2.6
  - @devtools/config@1.3.1

## 0.2.4-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@1.1.0-next.2
  - @devtools/errors@1.2.6-next.0
  - @devtools/plugin-scaffolder-node@0.6.2-next.2
  - @devtools/config@1.3.1-next.0
  - @devtools/integration@1.16.0-next.1

## 0.2.4-next.1

### Patch Changes

- Updated dependencies
  - @devtools/plugin-scaffolder-node@0.6.2-next.1
  - @devtools/backend-plugin-api@1.1.0-next.1
  - @devtools/config@1.3.0
  - @devtools/errors@1.2.5
  - @devtools/integration@1.16.0-next.0

## 0.2.3-next.0

### Patch Changes

- Updated dependencies
  - @devtools/integration@1.16.0-next.0
  - @devtools/backend-plugin-api@1.0.3-next.0
  - @devtools/plugin-scaffolder-node@0.6.1-next.0
  - @devtools/config@1.3.0
  - @devtools/errors@1.2.5

## 0.2.2

### Patch Changes

- Updated dependencies
  - @devtools/config@1.3.0
  - @devtools/backend-plugin-api@1.0.2
  - @devtools/plugin-scaffolder-node@0.6.0
  - @devtools/errors@1.2.5
  - @devtools/integration@1.15.2

## 0.2.2-next.3

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@1.0.2-next.2
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/integration@1.15.1
  - @devtools/plugin-scaffolder-node@0.5.1-next.3

## 0.2.2-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@1.0.2-next.2
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/integration@1.15.1
  - @devtools/plugin-scaffolder-node@0.5.1-next.2

## 0.2.2-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@1.0.2-next.1
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/integration@1.15.1
  - @devtools/plugin-scaffolder-node@0.5.1-next.1

## 0.2.2-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@1.0.2-next.0
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/integration@1.15.1
  - @devtools/plugin-scaffolder-node@0.5.1-next.0

## 0.2.1

### Patch Changes

- Updated dependencies
  - @devtools/plugin-scaffolder-node@0.5.0
  - @devtools/integration@1.15.1
  - @devtools/backend-plugin-api@1.0.1
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4

## 0.2.1-next.2

### Patch Changes

- Updated dependencies
  - @devtools/integration@1.15.1-next.1
  - @devtools/plugin-scaffolder-node@0.5.0-next.2
  - @devtools/backend-plugin-api@1.0.1-next.1
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4

## 0.2.1-next.1

### Patch Changes

- Updated dependencies
  - @devtools/integration@1.15.1-next.0
  - @devtools/backend-plugin-api@1.0.1-next.0
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/plugin-scaffolder-node@0.5.0-next.1

## 0.2.1-next.0

### Patch Changes

- Updated dependencies
  - @devtools/plugin-scaffolder-node@0.5.0-next.0
  - @devtools/backend-plugin-api@1.0.1-next.0
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/integration@1.15.0

## 0.2.0

### Minor Changes

- d425fc4: **BREAKING**: The return values from `createBackendPlugin`, `createBackendModule`, and `createServiceFactory` are now simply `BackendFeature` and `ServiceFactory`, instead of the previously deprecated form of a function that returns them. For this reason, `createServiceFactory` also no longer accepts the callback form where you provide direct options to the service. This also affects all `coreServices.*` service refs.

  This may in particular affect tests; if you were effectively doing `createBackendModule({...})()` (note the parentheses), you can now remove those extra parentheses at the end. You may encounter cases of this in your `packages/backend/src/index.ts` too, where you add plugins, modules, and services. If you were using `createServiceFactory` with a function as its argument for the purpose of passing in options, this pattern has been deprecated for a while and is no longer supported. You may want to explore the new multiton patterns to achieve your goals, or moving settings to app-config.

  As part of this change, the `IdentityFactoryOptions` type was removed, and can no longer be used to tweak that service. The identity service was also deprecated some time ago, and you will want to [migrate to the new auth system](https://devtools.khulnasoft.com/docs/tutorials/auth-service-migration) if you still rely on it.

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@1.0.0
  - @devtools/integration@1.15.0
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/plugin-scaffolder-node@0.4.11

## 0.2.0-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@1.0.0-next.2
  - @devtools/integration@1.15.0-next.0
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/plugin-scaffolder-node@0.4.11-next.2

## 0.2.0-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.9.0-next.1
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/integration@1.14.0
  - @devtools/plugin-scaffolder-node@0.4.11-next.1

## 0.2.0-next.0

### Minor Changes

- d425fc4: **BREAKING**: The return values from `createBackendPlugin`, `createBackendModule`, and `createServiceFactory` are now simply `BackendFeature` and `ServiceFactory`, instead of the previously deprecated form of a function that returns them. For this reason, `createServiceFactory` also no longer accepts the callback form where you provide direct options to the service. This also affects all `coreServices.*` service refs.

  This may in particular affect tests; if you were effectively doing `createBackendModule({...})()` (note the parentheses), you can now remove those extra parentheses at the end. You may encounter cases of this in your `packages/backend/src/index.ts` too, where you add plugins, modules, and services. If you were using `createServiceFactory` with a function as its argument for the purpose of passing in options, this pattern has been deprecated for a while and is no longer supported. You may want to explore the new multiton patterns to achieve your goals, or moving settings to app-config.

  As part of this change, the `IdentityFactoryOptions` type was removed, and can no longer be used to tweak that service. The identity service was also deprecated some time ago, and you will want to [migrate to the new auth system](https://devtools.khulnasoft.com/docs/tutorials/auth-service-migration) if you still rely on it.

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.9.0-next.0
  - @devtools/plugin-scaffolder-node@0.4.11-next.0
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/integration@1.14.0

## 0.1.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.8.0
  - @devtools/plugin-scaffolder-node@0.4.9
  - @devtools/integration@1.14.0
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4

## 0.1.1-next.3

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.8.0-next.3
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/integration@1.14.0-next.0
  - @devtools/plugin-scaffolder-node@0.4.9-next.3

## 0.1.1-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.8.0-next.2
  - @devtools/plugin-scaffolder-node@0.4.9-next.2
  - @devtools/integration@1.14.0-next.0
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4

## 0.1.1-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.7.1-next.1
  - @devtools/integration@1.14.0-next.0
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/plugin-scaffolder-node@0.4.9-next.1

## 0.1.1-next.0

### Patch Changes

- Updated dependencies
  - @devtools/integration@1.14.0-next.0
  - @devtools/backend-plugin-api@0.7.1-next.0
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/plugin-scaffolder-node@0.4.9-next.0

## 0.1.0

### Minor Changes

- 0b52438: Serialization of the scaffolder workspace into GCP bucket

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.7.0
  - @devtools/integration@1.13.0
  - @devtools/plugin-scaffolder-node@0.4.8
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4

## 0.1.0-next.3

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.6.22-next.1
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/integration@1.13.0-next.0
  - @devtools/plugin-scaffolder-node@0.4.8-next.1

## 0.1.0-next.2

### Minor Changes

- 0b52438: Serialization of the scaffolder workspace into GCP bucket

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.6.21-next.0
  - @devtools/integration@1.13.0-next.0
  - @devtools/plugin-scaffolder-node@0.4.7-next.0
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4

## 0.0.1