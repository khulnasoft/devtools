# @devtools/plugin-permission-backend-module-allow-all-policy

## 0.2.4-next.0

### Patch Changes

- Updated dependencies
  - @devtools/plugin-permission-node@0.8.7-next.0
  - @devtools/plugin-auth-node@0.5.6-next.0
  - @devtools/backend-plugin-api@1.1.1-next.0
  - @devtools/plugin-permission-common@0.8.3

## 0.2.3

### Patch Changes

- Updated dependencies
  - @devtools/plugin-auth-node@0.5.5
  - @devtools/backend-plugin-api@1.1.0
  - @devtools/plugin-permission-node@0.8.6
  - @devtools/plugin-permission-common@0.8.3

## 0.2.3-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@1.1.0-next.2
  - @devtools/plugin-permission-node@0.8.6-next.2
  - @devtools/plugin-auth-node@0.5.5-next.2
  - @devtools/plugin-permission-common@0.8.3-next.0

## 0.2.3-next.1

### Patch Changes

- Updated dependencies
  - @devtools/plugin-auth-node@0.5.5-next.1
  - @devtools/backend-plugin-api@1.1.0-next.1
  - @devtools/plugin-permission-node@0.8.6-next.1
  - @devtools/plugin-permission-common@0.8.2

## 0.2.3-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@1.0.3-next.0
  - @devtools/plugin-auth-node@0.5.5-next.0
  - @devtools/plugin-permission-common@0.8.2
  - @devtools/plugin-permission-node@0.8.6-next.0

## 0.2.2

### Patch Changes

- Updated dependencies
  - @devtools/plugin-auth-node@0.5.4
  - @devtools/backend-plugin-api@1.0.2
  - @devtools/plugin-permission-common@0.8.2
  - @devtools/plugin-permission-node@0.8.5

## 0.2.2-next.2

### Patch Changes

- Updated dependencies
  - @devtools/plugin-auth-node@0.5.4-next.2
  - @devtools/backend-plugin-api@1.0.2-next.2
  - @devtools/plugin-permission-common@0.8.1
  - @devtools/plugin-permission-node@0.8.5-next.2

## 0.2.2-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@1.0.2-next.1
  - @devtools/plugin-auth-node@0.5.4-next.1
  - @devtools/plugin-permission-common@0.8.1
  - @devtools/plugin-permission-node@0.8.5-next.1

## 0.2.2-next.0

### Patch Changes

- Updated dependencies
  - @devtools/plugin-auth-node@0.5.4-next.0
  - @devtools/backend-plugin-api@1.0.2-next.0
  - @devtools/plugin-permission-common@0.8.1
  - @devtools/plugin-permission-node@0.8.5-next.0

## 0.2.1

### Patch Changes

- Updated dependencies
  - @devtools/plugin-auth-node@0.5.3
  - @devtools/plugin-permission-node@0.8.4
  - @devtools/backend-plugin-api@1.0.1
  - @devtools/plugin-permission-common@0.8.1

## 0.2.1-next.1

### Patch Changes

- Updated dependencies
  - @devtools/plugin-auth-node@0.5.3-next.1
  - @devtools/backend-plugin-api@1.0.1-next.1
  - @devtools/plugin-permission-common@0.8.1
  - @devtools/plugin-permission-node@0.8.4-next.1

## 0.2.1-next.0

### Patch Changes

- Updated dependencies
  - @devtools/plugin-permission-node@0.8.4-next.0
  - @devtools/plugin-auth-node@0.5.3-next.0
  - @devtools/backend-plugin-api@1.0.1-next.0
  - @devtools/plugin-permission-common@0.8.1

## 0.2.0

### Minor Changes

- d425fc4: **BREAKING**: The return values from `createBackendPlugin`, `createBackendModule`, and `createServiceFactory` are now simply `BackendFeature` and `ServiceFactory`, instead of the previously deprecated form of a function that returns them. For this reason, `createServiceFactory` also no longer accepts the callback form where you provide direct options to the service. This also affects all `coreServices.*` service refs.

  This may in particular affect tests; if you were effectively doing `createBackendModule({...})()` (note the parentheses), you can now remove those extra parentheses at the end. You may encounter cases of this in your `packages/backend/src/index.ts` too, where you add plugins, modules, and services. If you were using `createServiceFactory` with a function as its argument for the purpose of passing in options, this pattern has been deprecated for a while and is no longer supported. You may want to explore the new multiton patterns to achieve your goals, or moving settings to app-config.

  As part of this change, the `IdentityFactoryOptions` type was removed, and can no longer be used to tweak that service. The identity service was also deprecated some time ago, and you will want to [migrate to the new auth system](https://devtools.khulnasoft.com/docs/tutorials/auth-service-migration) if you still rely on it.

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@1.0.0
  - @devtools/plugin-auth-node@0.5.2
  - @devtools/plugin-permission-node@0.8.3
  - @devtools/plugin-permission-common@0.8.1

## 0.2.0-next.2

### Patch Changes

- Updated dependencies
  - @devtools/plugin-auth-node@0.5.2-next.2
  - @devtools/backend-plugin-api@1.0.0-next.2
  - @devtools/plugin-permission-node@0.8.3-next.2
  - @devtools/plugin-permission-common@0.8.1

## 0.2.0-next.1

### Patch Changes

- Updated dependencies
  - @devtools/plugin-auth-node@0.5.2-next.1
  - @devtools/backend-plugin-api@0.9.0-next.1
  - @devtools/plugin-permission-common@0.8.1
  - @devtools/plugin-permission-node@0.8.3-next.1

## 0.2.0-next.0

### Minor Changes

- d425fc4: **BREAKING**: The return values from `createBackendPlugin`, `createBackendModule`, and `createServiceFactory` are now simply `BackendFeature` and `ServiceFactory`, instead of the previously deprecated form of a function that returns them. For this reason, `createServiceFactory` also no longer accepts the callback form where you provide direct options to the service. This also affects all `coreServices.*` service refs.

  This may in particular affect tests; if you were effectively doing `createBackendModule({...})()` (note the parentheses), you can now remove those extra parentheses at the end. You may encounter cases of this in your `packages/backend/src/index.ts` too, where you add plugins, modules, and services. If you were using `createServiceFactory` with a function as its argument for the purpose of passing in options, this pattern has been deprecated for a while and is no longer supported. You may want to explore the new multiton patterns to achieve your goals, or moving settings to app-config.

  As part of this change, the `IdentityFactoryOptions` type was removed, and can no longer be used to tweak that service. The identity service was also deprecated some time ago, and you will want to [migrate to the new auth system](https://devtools.khulnasoft.com/docs/tutorials/auth-service-migration) if you still rely on it.

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.9.0-next.0
  - @devtools/plugin-permission-node@0.8.3-next.0
  - @devtools/plugin-auth-node@0.5.2-next.0
  - @devtools/plugin-permission-common@0.8.1

## 0.1.20

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.8.0
  - @devtools/plugin-permission-common@0.8.1
  - @devtools/plugin-auth-node@0.5.0
  - @devtools/plugin-permission-node@0.8.1

## 0.1.20-next.3

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.8.0-next.3
  - @devtools/plugin-auth-node@0.5.0-next.3
  - @devtools/plugin-permission-common@0.8.1-next.1
  - @devtools/plugin-permission-node@0.8.1-next.3

## 0.1.20-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.8.0-next.2
  - @devtools/plugin-permission-common@0.8.1-next.1
  - @devtools/plugin-auth-node@0.5.0-next.2
  - @devtools/plugin-permission-node@0.8.1-next.2

## 0.1.20-next.1

### Patch Changes

- Updated dependencies
  - @devtools/plugin-permission-common@0.8.1-next.0
  - @devtools/plugin-permission-node@0.8.1-next.1
  - @devtools/backend-plugin-api@0.7.1-next.1
  - @devtools/plugin-auth-node@0.4.18-next.1

## 0.1.20-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.7.1-next.0
  - @devtools/plugin-auth-node@0.4.18-next.0
  - @devtools/plugin-permission-common@0.8.0
  - @devtools/plugin-permission-node@0.8.1-next.0

## 0.1.19

### Patch Changes

- ed10fd2: Internal refactor to use new `PolicyQueryUser` type.
- Updated dependencies
  - @devtools/backend-plugin-api@0.7.0
  - @devtools/plugin-permission-common@0.8.0
  - @devtools/plugin-permission-node@0.8.0
  - @devtools/plugin-auth-node@0.4.17

## 0.1.19-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.6.22-next.1
  - @devtools/plugin-auth-node@0.4.17-next.1
  - @devtools/plugin-permission-common@0.7.14
  - @devtools/plugin-permission-node@0.7.33-next.1

## 0.1.18-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.6.21-next.0
  - @devtools/plugin-auth-node@0.4.16-next.0
  - @devtools/plugin-permission-node@0.7.32-next.0
  - @devtools/plugin-permission-common@0.7.14

## 0.1.16

### Patch Changes

- 78a0b08: Internal refactor to handle `BackendFeature` contract change.
- d44a20a: Added additional plugin metadata to `package.json`.
- Updated dependencies
  - @devtools/backend-plugin-api@0.6.19
  - @devtools/plugin-auth-node@0.4.14
  - @devtools/plugin-permission-node@0.7.30
  - @devtools/plugin-permission-common@0.7.14

## 0.1.16-next.2

### Patch Changes

- d44a20a: Added additional plugin metadata to `package.json`.
- Updated dependencies
  - @devtools/backend-plugin-api@0.6.19-next.3
  - @devtools/plugin-auth-node@0.4.14-next.3
  - @devtools/plugin-permission-common@0.7.14-next.0
  - @devtools/plugin-permission-node@0.7.30-next.3

## 0.1.16-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.6.19-next.2
  - @devtools/plugin-permission-node@0.7.30-next.2
  - @devtools/plugin-auth-node@0.4.14-next.2
  - @devtools/plugin-permission-common@0.7.13

## 0.1.16-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.6.19-next.0
  - @devtools/plugin-auth-node@0.4.14-next.0
  - @devtools/plugin-permission-node@0.7.30-next.0
  - @devtools/plugin-permission-common@0.7.13

## 0.1.15

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.6.18
  - @devtools/plugin-auth-node@0.4.13
  - @devtools/plugin-permission-node@0.7.29

## 0.1.15-next.1

### Patch Changes

- Updated dependencies
  - @devtools/plugin-auth-node@0.4.13-next.1
  - @devtools/plugin-permission-node@0.7.29-next.1
  - @devtools/backend-plugin-api@0.6.18-next.1

## 0.1.15-next.0

### Patch Changes

- Updated dependencies
  - @devtools/plugin-auth-node@0.4.13-next.0
  - @devtools/backend-plugin-api@0.6.18-next.0
  - @devtools/plugin-permission-common@0.7.13
  - @devtools/plugin-permission-node@0.7.29-next.0

## 0.1.14

### Patch Changes

- Updated dependencies
  - @devtools/plugin-permission-node@0.7.28
  - @devtools/backend-plugin-api@0.6.17
  - @devtools/plugin-auth-node@0.4.12
  - @devtools/plugin-permission-common@0.7.13

## 0.1.14-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.6.17-next.1
  - @devtools/plugin-auth-node@0.4.12-next.1
  - @devtools/plugin-permission-node@0.7.28-next.1
  - @devtools/plugin-permission-common@0.7.13

## 0.1.14-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.6.17-next.0
  - @devtools/plugin-auth-node@0.4.12-next.0
  - @devtools/plugin-permission-common@0.7.13
  - @devtools/plugin-permission-node@0.7.28-next.0

## 0.1.13

### Patch Changes

- Updated dependencies
  - @devtools/plugin-auth-node@0.4.11
  - @devtools/backend-plugin-api@0.6.16
  - @devtools/plugin-permission-node@0.7.27
  - @devtools/plugin-permission-common@0.7.13

## 0.1.12

### Patch Changes

- Updated dependencies
  - @devtools/plugin-auth-node@0.4.10
  - @devtools/plugin-permission-node@0.7.26
  - @devtools/backend-plugin-api@0.6.15
  - @devtools/plugin-permission-common@0.7.13

## 0.1.11

### Patch Changes

- Updated dependencies
  - @devtools/plugin-auth-node@0.4.9
  - @devtools/backend-plugin-api@0.6.14
  - @devtools/plugin-permission-common@0.7.13
  - @devtools/plugin-permission-node@0.7.25

## 0.1.11-next.2

### Patch Changes

- Updated dependencies
  - @devtools/plugin-auth-node@0.4.9-next.2
  - @devtools/backend-plugin-api@0.6.14-next.2
  - @devtools/plugin-permission-common@0.7.13-next.1
  - @devtools/plugin-permission-node@0.7.25-next.2

## 0.1.11-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.6.14-next.1
  - @devtools/plugin-auth-node@0.4.9-next.1
  - @devtools/plugin-permission-common@0.7.13-next.1
  - @devtools/plugin-permission-node@0.7.25-next.1

## 0.1.10-next.0

### Patch Changes

- Updated dependencies
  - @devtools/plugin-auth-node@0.4.8-next.0
  - @devtools/backend-plugin-api@0.6.13-next.0
  - @devtools/plugin-permission-common@0.7.13-next.0
  - @devtools/plugin-permission-node@0.7.24-next.0

## 0.1.7

### Patch Changes

- 8472188: Added or fixed the `repository` field in `package.json`.
- Updated dependencies
  - @devtools/plugin-auth-node@0.4.4
  - @devtools/backend-plugin-api@0.6.10
  - @devtools/plugin-permission-node@0.7.21
  - @devtools/plugin-permission-common@0.7.12

## 0.1.7-next.3

### Patch Changes

- 8472188: Added or fixed the `repository` field in `package.json`.
- Updated dependencies
  - @devtools/plugin-auth-node@0.4.4-next.3
  - @devtools/plugin-permission-node@0.7.21-next.3
  - @devtools/backend-plugin-api@0.6.10-next.3
  - @devtools/plugin-permission-common@0.7.12

## 0.1.7-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.6.10-next.2
  - @devtools/plugin-auth-node@0.4.4-next.2
  - @devtools/plugin-permission-node@0.7.21-next.2
  - @devtools/plugin-permission-common@0.7.12

## 0.1.7-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.6.10-next.1
  - @devtools/plugin-auth-node@0.4.4-next.1
  - @devtools/plugin-permission-common@0.7.12
  - @devtools/plugin-permission-node@0.7.21-next.1

## 0.1.7-next.0

### Patch Changes

- Updated dependencies
  - @devtools/plugin-auth-node@0.4.4-next.0
  - @devtools/plugin-permission-node@0.7.21-next.0
  - @devtools/backend-plugin-api@0.6.10-next.0
  - @devtools/plugin-permission-common@0.7.12

## 0.1.6

### Patch Changes

- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @devtools/backend-plugin-api@0.6.9
  - @devtools/plugin-permission-common@0.7.12
  - @devtools/plugin-permission-node@0.7.20
  - @devtools/plugin-auth-node@0.4.3

## 0.1.6-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.6.9-next.2
  - @devtools/plugin-auth-node@0.4.3-next.2
  - @devtools/plugin-permission-node@0.7.20-next.2

## 0.1.6-next.1

### Patch Changes

- Updated dependencies
  - @devtools/plugin-auth-node@0.4.3-next.1
  - @devtools/plugin-permission-node@0.7.20-next.1
  - @devtools/backend-plugin-api@0.6.9-next.1
  - @devtools/plugin-permission-common@0.7.11

## 0.1.6-next.0

### Patch Changes

- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @devtools/backend-plugin-api@0.6.9-next.0
  - @devtools/plugin-auth-node@0.4.3-next.0
  - @devtools/plugin-permission-common@0.7.11
  - @devtools/plugin-permission-node@0.7.20-next.0

## 0.1.5

### Patch Changes

- cc4228e: Switched module ID to use kebab-case.
- Updated dependencies
  - @devtools/backend-common@0.20.0
  - @devtools/plugin-auth-node@0.4.2
  - @devtools/plugin-permission-common@0.7.11
  - @devtools/plugin-permission-node@0.7.19
  - @devtools/backend-plugin-api@0.6.8

## 0.1.5-next.3

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.20.0-next.3
  - @devtools/backend-plugin-api@0.6.8-next.3
  - @devtools/plugin-auth-node@0.4.2-next.3
  - @devtools/plugin-permission-common@0.7.10
  - @devtools/plugin-permission-node@0.7.19-next.3

## 0.1.5-next.2

### Patch Changes

- cc4228e: Switched module ID to use kebab-case.
- Updated dependencies
  - @devtools/backend-common@0.20.0-next.2
  - @devtools/plugin-auth-node@0.4.2-next.2
  - @devtools/backend-plugin-api@0.6.8-next.2
  - @devtools/plugin-permission-common@0.7.10
  - @devtools/plugin-permission-node@0.7.19-next.2

## 0.1.5-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.20.0-next.1
  - @devtools/backend-plugin-api@0.6.8-next.1
  - @devtools/plugin-auth-node@0.4.2-next.1
  - @devtools/plugin-permission-common@0.7.10
  - @devtools/plugin-permission-node@0.7.19-next.1

## 0.1.5-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.20.0-next.0
  - @devtools/plugin-auth-node@0.4.2-next.0
  - @devtools/plugin-permission-node@0.7.19-next.0
  - @devtools/backend-plugin-api@0.6.8-next.0
  - @devtools/plugin-permission-common@0.7.10

## 0.1.4

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.19.9
  - @devtools/backend-plugin-api@0.6.7
  - @devtools/plugin-permission-common@0.7.10
  - @devtools/plugin-auth-node@0.4.1
  - @devtools/plugin-permission-node@0.7.18

## 0.1.4-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.6.7-next.2
  - @devtools/backend-common@0.19.9-next.2
  - @devtools/plugin-auth-node@0.4.1-next.2
  - @devtools/plugin-permission-node@0.7.18-next.2

## 0.1.4-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.19.9-next.1
  - @devtools/plugin-auth-node@0.4.1-next.1
  - @devtools/plugin-permission-node@0.7.18-next.1
  - @devtools/backend-plugin-api@0.6.7-next.1
  - @devtools/plugin-permission-common@0.7.9

## 0.1.4-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.19.9-next.0
  - @devtools/backend-plugin-api@0.6.7-next.0
  - @devtools/plugin-auth-node@0.4.1-next.0
  - @devtools/plugin-permission-common@0.7.9
  - @devtools/plugin-permission-node@0.7.18-next.0

## 0.1.3

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.19.8
  - @devtools/plugin-auth-node@0.4.0
  - @devtools/backend-plugin-api@0.6.6
  - @devtools/plugin-permission-node@0.7.17
  - @devtools/plugin-permission-common@0.7.9

## 0.1.3-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.19.8-next.2
  - @devtools/plugin-auth-node@0.4.0-next.2
  - @devtools/plugin-permission-node@0.7.17-next.2
  - @devtools/backend-plugin-api@0.6.6-next.2
  - @devtools/plugin-permission-common@0.7.9-next.0

## 0.1.2-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.19.7-next.1
  - @devtools/backend-plugin-api@0.6.5-next.1
  - @devtools/plugin-auth-node@0.3.2-next.1
  - @devtools/plugin-permission-node@0.7.16-next.1
  - @devtools/plugin-permission-common@0.7.8

## 0.1.2-next.0

### Patch Changes

- Updated dependencies
  - @devtools/plugin-auth-node@0.3.2-next.0
  - @devtools/backend-common@0.19.7-next.0
  - @devtools/backend-plugin-api@0.6.5-next.0
  - @devtools/plugin-permission-common@0.7.8
  - @devtools/plugin-permission-node@0.7.16-next.0

## 0.1.0

### Minor Changes

- 5f7b2153526b: Created package with policy `permissionModuleAllowAllPolicy`

### Patch Changes

- 71114ac50e02: The export for the new backend system has been moved to be the `default` export.

  For example, if you are currently importing the plugin using the following pattern:

  ```ts
  import { examplePlugin } from '@devtools/plugin-example-backend';

  backend.add(examplePlugin);
  ```

  It should be migrated to this:

  ```ts
  backend.add(import('@devtools/plugin-example-backend'));
  ```

- Updated dependencies
  - @devtools/backend-common@0.19.5
  - @devtools/plugin-auth-node@0.3.0
  - @devtools/plugin-permission-common@0.7.8
  - @devtools/plugin-permission-node@0.7.14
  - @devtools/backend-plugin-api@0.6.3

## 0.1.0-next.1

### Patch Changes

- 71114ac50e02: The export for the new backend system has been moved to be the `default` export.

  For example, if you are currently importing the plugin using the following pattern:

  ```ts
  import { examplePlugin } from '@devtools/plugin-example-backend';

  backend.add(examplePlugin);
  ```

  It should be migrated to this:

  ```ts
  backend.add(import('@devtools/plugin-example-backend'));
  ```

- Updated dependencies
  - @devtools/plugin-permission-common@0.7.8-next.2
  - @devtools/plugin-permission-node@0.7.14-next.3
  - @devtools/backend-plugin-api@0.6.3-next.3
  - @devtools/backend-common@0.19.5-next.3
  - @devtools/plugin-auth-node@0.3.0-next.3

## 0.1.0-next.0

### Minor Changes

- 5f7b2153526b: Created package with policy `permissionModuleAllowAllPolicy`

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.19.5-next.2
  - @devtools/plugin-auth-node@0.3.0-next.2
  - @devtools/plugin-permission-node@0.7.14-next.2
  - @devtools/backend-plugin-api@0.6.3-next.2
  - @devtools/plugin-permission-common@0.7.8-next.1
