# @devtools/plugin-scaffolder-backend-module-notifications

## 0.1.6-next.0

### Patch Changes

- Updated dependencies
  - @devtools/plugin-scaffolder-node@0.6.3-next.0
  - @devtools/backend-plugin-api@1.1.1-next.0
  - @devtools/plugin-notifications-common@0.0.7
  - @devtools/plugin-notifications-node@0.2.11-next.0

## 0.1.5

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@1.1.0
  - @devtools/plugin-scaffolder-node@0.6.2
  - @devtools/plugin-notifications-node@0.2.10
  - @devtools/plugin-notifications-common@0.0.7

## 0.1.5-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@1.1.0-next.2
  - @devtools/plugin-notifications-node@0.2.10-next.2
  - @devtools/plugin-scaffolder-node@0.6.2-next.2
  - @devtools/plugin-notifications-common@0.0.7-next.0

## 0.1.5-next.1

### Patch Changes

- Updated dependencies
  - @devtools/plugin-scaffolder-node@0.6.2-next.1
  - @devtools/plugin-notifications-node@0.2.10-next.1
  - @devtools/backend-plugin-api@1.1.0-next.1
  - @devtools/plugin-notifications-common@0.0.6

## 0.1.4-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@1.0.3-next.0
  - @devtools/plugin-scaffolder-node@0.6.1-next.0
  - @devtools/plugin-notifications-common@0.0.6
  - @devtools/plugin-notifications-node@0.2.10-next.0

## 0.1.3

### Patch Changes

- 5d74716: Remove unused backend-common dependency
- Updated dependencies
  - @devtools/backend-plugin-api@1.0.2
  - @devtools/plugin-notifications-common@0.0.6
  - @devtools/plugin-notifications-node@0.2.9
  - @devtools/plugin-scaffolder-node@0.6.0

## 0.1.3-next.3

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@1.0.2-next.2
  - @devtools/plugin-notifications-common@0.0.6-next.0
  - @devtools/plugin-notifications-node@0.2.9-next.3
  - @devtools/plugin-scaffolder-node@0.5.1-next.3

## 0.1.3-next.2

### Patch Changes

- Updated dependencies
  - @devtools/plugin-notifications-node@0.2.9-next.2
  - @devtools/backend-plugin-api@1.0.2-next.2
  - @devtools/plugin-notifications-common@0.0.6-next.0
  - @devtools/plugin-scaffolder-node@0.5.1-next.2

## 0.1.3-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@1.0.2-next.1
  - @devtools/plugin-notifications-common@0.0.6-next.0
  - @devtools/plugin-notifications-node@0.2.9-next.1
  - @devtools/plugin-scaffolder-node@0.5.1-next.1

## 0.1.3-next.0

### Patch Changes

- Updated dependencies
  - @devtools/plugin-notifications-common@0.0.6-next.0
  - @devtools/backend-plugin-api@1.0.2-next.0
  - @devtools/plugin-notifications-node@0.2.9-next.0
  - @devtools/plugin-scaffolder-node@0.5.1-next.0

## 0.1.1

### Patch Changes

- 094eaa3: Remove references to in-repo backend-common
- Updated dependencies
  - @devtools/plugin-scaffolder-node@0.5.0
  - @devtools/plugin-notifications-node@0.2.7
  - @devtools/backend-plugin-api@1.0.1
  - @devtools/plugin-notifications-common@0.0.5

## 0.1.1-next.2

### Patch Changes

- Updated dependencies
  - @devtools/plugin-scaffolder-node@0.5.0-next.2
  - @devtools/backend-plugin-api@1.0.1-next.1
  - @devtools/plugin-notifications-common@0.0.5
  - @devtools/plugin-notifications-node@0.2.7-next.1

## 0.1.1-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@1.0.1-next.0
  - @devtools/plugin-notifications-common@0.0.5
  - @devtools/plugin-notifications-node@0.2.7-next.0
  - @devtools/plugin-scaffolder-node@0.5.0-next.1

## 0.1.1-next.0

### Patch Changes

- 094eaa3: Remove references to in-repo backend-common
- Updated dependencies
  - @devtools/plugin-scaffolder-node@0.5.0-next.0
  - @devtools/plugin-notifications-node@0.2.7-next.0
  - @devtools/backend-plugin-api@1.0.1-next.0
  - @devtools/plugin-notifications-common@0.0.5

## 0.1.0

### Minor Changes

- d425fc4: **BREAKING**: The return values from `createBackendPlugin`, `createBackendModule`, and `createServiceFactory` are now simply `BackendFeature` and `ServiceFactory`, instead of the previously deprecated form of a function that returns them. For this reason, `createServiceFactory` also no longer accepts the callback form where you provide direct options to the service. This also affects all `coreServices.*` service refs.

  This may in particular affect tests; if you were effectively doing `createBackendModule({...})()` (note the parentheses), you can now remove those extra parentheses at the end. You may encounter cases of this in your `packages/backend/src/index.ts` too, where you add plugins, modules, and services. If you were using `createServiceFactory` with a function as its argument for the purpose of passing in options, this pattern has been deprecated for a while and is no longer supported. You may want to explore the new multiton patterns to achieve your goals, or moving settings to app-config.

  As part of this change, the `IdentityFactoryOptions` type was removed, and can no longer be used to tweak that service. The identity service was also deprecated some time ago, and you will want to [migrate to the new auth system](https://devtools.khulnasoft.com/docs/tutorials/auth-service-migration) if you still rely on it.

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.25.0
  - @devtools/backend-plugin-api@1.0.0
  - @devtools/plugin-notifications-common@0.0.5
  - @devtools/plugin-notifications-node@0.2.6
  - @devtools/plugin-scaffolder-node@0.4.11

## 0.1.0-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.25.0-next.2
  - @devtools/backend-plugin-api@1.0.0-next.2
  - @devtools/plugin-notifications-common@0.0.5
  - @devtools/plugin-notifications-node@0.2.6-next.2
  - @devtools/plugin-scaffolder-node@0.4.11-next.2

## 0.1.0-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.25.0-next.1
  - @devtools/backend-plugin-api@0.9.0-next.1
  - @devtools/plugin-notifications-common@0.0.5
  - @devtools/plugin-notifications-node@0.2.6-next.1
  - @devtools/plugin-scaffolder-node@0.4.11-next.1

## 0.1.0-next.0

### Minor Changes

- d425fc4: **BREAKING**: The return values from `createBackendPlugin`, `createBackendModule`, and `createServiceFactory` are now simply `BackendFeature` and `ServiceFactory`, instead of the previously deprecated form of a function that returns them. For this reason, `createServiceFactory` also no longer accepts the callback form where you provide direct options to the service. This also affects all `coreServices.*` service refs.

  This may in particular affect tests; if you were effectively doing `createBackendModule({...})()` (note the parentheses), you can now remove those extra parentheses at the end. You may encounter cases of this in your `packages/backend/src/index.ts` too, where you add plugins, modules, and services. If you were using `createServiceFactory` with a function as its argument for the purpose of passing in options, this pattern has been deprecated for a while and is no longer supported. You may want to explore the new multiton patterns to achieve your goals, or moving settings to app-config.

  As part of this change, the `IdentityFactoryOptions` type was removed, and can no longer be used to tweak that service. The identity service was also deprecated some time ago, and you will want to [migrate to the new auth system](https://devtools.khulnasoft.com/docs/tutorials/auth-service-migration) if you still rely on it.

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.9.0-next.0
  - @devtools/backend-common@0.25.0-next.0
  - @devtools/plugin-notifications-node@0.2.6-next.0
  - @devtools/plugin-scaffolder-node@0.4.11-next.0
  - @devtools/plugin-notifications-common@0.0.5

## 0.0.6

### Patch Changes

- 6fc03c7: Add examples for notification:send scaffolder action & improve related tests
- Updated dependencies
  - @devtools/backend-plugin-api@0.8.0
  - @devtools/backend-common@0.24.0
  - @devtools/plugin-scaffolder-node@0.4.9
  - @devtools/plugin-notifications-node@0.2.4
  - @devtools/plugin-notifications-common@0.0.5

## 0.0.6-next.3

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.8.0-next.3
  - @devtools/backend-common@0.23.4-next.3
  - @devtools/plugin-notifications-common@0.0.5
  - @devtools/plugin-notifications-node@0.2.4-next.3
  - @devtools/plugin-scaffolder-node@0.4.9-next.3

## 0.0.6-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.8.0-next.2
  - @devtools/plugin-scaffolder-node@0.4.9-next.2
  - @devtools/plugin-notifications-node@0.2.4-next.2
  - @devtools/backend-common@0.23.4-next.2
  - @devtools/plugin-notifications-common@0.0.5

## 0.0.6-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.7.1-next.1
  - @devtools/backend-common@0.23.4-next.1
  - @devtools/plugin-notifications-common@0.0.5
  - @devtools/plugin-notifications-node@0.2.4-next.1
  - @devtools/plugin-scaffolder-node@0.4.9-next.1

## 0.0.6-next.0

### Patch Changes

- 6fc03c7: Add examples for notification:send scaffolder action & improve related tests
- Updated dependencies
  - @devtools/backend-common@0.23.4-next.0
  - @devtools/backend-plugin-api@0.7.1-next.0
  - @devtools/plugin-notifications-common@0.0.5
  - @devtools/plugin-notifications-node@0.2.4-next.0
  - @devtools/plugin-scaffolder-node@0.4.9-next.0

## 0.0.5

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.7.0
  - @devtools/backend-common@0.23.3
  - @devtools/plugin-scaffolder-node@0.4.8
  - @devtools/plugin-notifications-common@0.0.5
  - @devtools/plugin-notifications-node@0.2.3

## 0.0.5-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.23.3-next.1
  - @devtools/backend-plugin-api@0.6.22-next.1
  - @devtools/plugin-notifications-common@0.0.4
  - @devtools/plugin-notifications-node@0.2.3-next.1
  - @devtools/plugin-scaffolder-node@0.4.8-next.1

## 0.0.4-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.6.21-next.0
  - @devtools/backend-common@0.23.2-next.0
  - @devtools/plugin-scaffolder-node@0.4.7-next.0
  - @devtools/plugin-notifications-node@0.2.2-next.0
  - @devtools/plugin-notifications-common@0.0.4

## 0.0.2

### Patch Changes

- 78a0b08: Internal refactor to handle `BackendFeature` contract change.
- d44a20a: Added additional plugin metadata to `package.json`.
- Updated dependencies
  - @devtools/backend-common@0.23.0
  - @devtools/backend-plugin-api@0.6.19
  - @devtools/plugin-notifications-node@0.2.0
  - @devtools/plugin-notifications-common@0.0.4
  - @devtools/plugin-scaffolder-node@0.4.5

## 0.0.2-next.3

### Patch Changes

- d44a20a: Added additional plugin metadata to `package.json`.
- Updated dependencies
  - @devtools/backend-plugin-api@0.6.19-next.3
  - @devtools/plugin-notifications-common@0.0.4-next.0
  - @devtools/plugin-notifications-node@0.2.0-next.3
  - @devtools/plugin-scaffolder-node@0.4.5-next.3
  - @devtools/backend-common@0.23.0-next.3

## 0.0.2-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.6.19-next.2
  - @devtools/backend-common@0.23.0-next.2
  - @devtools/plugin-notifications-node@0.2.0-next.2
  - @devtools/plugin-scaffolder-node@0.4.5-next.2
  - @devtools/plugin-notifications-common@0.0.3

## 0.0.2-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.6.19-next.1
  - @devtools/plugin-notifications-node@0.2.0-next.1
  - @devtools/backend-common@0.23.0-next.1
  - @devtools/plugin-scaffolder-node@0.4.5-next.1

## 0.0.2-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.22.1-next.0
  - @devtools/backend-plugin-api@0.6.19-next.0
  - @devtools/plugin-notifications-node@0.1.5-next.0
  - @devtools/plugin-scaffolder-node@0.4.5-next.0
  - @devtools/plugin-notifications-common@0.0.3

## 0.0.1

### Patch Changes

- 503d769: Add a new scaffolder action to allow sending notifications from templates
- Updated dependencies
  - @devtools/backend-common@0.22.0
  - @devtools/plugin-notifications-node@0.1.4
  - @devtools/backend-plugin-api@0.6.18
  - @devtools/plugin-scaffolder-node@0.4.4

## 0.0.1-next.0

### Patch Changes

- 503d769: Add a new scaffolder action to allow sending notifications from templates
- Updated dependencies
  - @devtools/backend-common@0.22.0-next.2
  - @devtools/plugin-scaffolder-node@0.4.4-next.2
