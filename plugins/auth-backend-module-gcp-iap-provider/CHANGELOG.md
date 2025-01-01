# @devtools/plugin-auth-backend-module-gcp-iap-provider

## 0.3.4-next.0

### Patch Changes

- Updated dependencies
  - @devtools/plugin-auth-node@0.5.6-next.0
  - @devtools/backend-plugin-api@1.1.1-next.0
  - @devtools/errors@1.2.6
  - @devtools/types@1.2.0

## 0.3.3

### Patch Changes

- Updated dependencies
  - @devtools/plugin-auth-node@0.5.5
  - @devtools/backend-plugin-api@1.1.0
  - @devtools/errors@1.2.6
  - @devtools/types@1.2.0

## 0.3.3-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@1.1.0-next.2
  - @devtools/errors@1.2.6-next.0
  - @devtools/plugin-auth-node@0.5.5-next.2
  - @devtools/types@1.2.0

## 0.3.3-next.1

### Patch Changes

- Updated dependencies
  - @devtools/plugin-auth-node@0.5.5-next.1
  - @devtools/backend-plugin-api@1.1.0-next.1
  - @devtools/errors@1.2.5
  - @devtools/types@1.2.0

## 0.3.3-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@1.0.3-next.0
  - @devtools/plugin-auth-node@0.5.5-next.0
  - @devtools/errors@1.2.5
  - @devtools/types@1.2.0

## 0.3.2

### Patch Changes

- Updated dependencies
  - @devtools/types@1.2.0
  - @devtools/plugin-auth-node@0.5.4
  - @devtools/backend-plugin-api@1.0.2
  - @devtools/errors@1.2.5

## 0.3.2-next.2

### Patch Changes

- Updated dependencies
  - @devtools/plugin-auth-node@0.5.4-next.2
  - @devtools/backend-plugin-api@1.0.2-next.2
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1

## 0.3.2-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@1.0.2-next.1
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1
  - @devtools/plugin-auth-node@0.5.4-next.1

## 0.3.2-next.0

### Patch Changes

- Updated dependencies
  - @devtools/plugin-auth-node@0.5.4-next.0
  - @devtools/backend-plugin-api@1.0.2-next.0
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1

## 0.3.1

### Patch Changes

- 217458a: Updated configuration schema to include the new `allowedDomains` option for the `emailLocalPartMatchingUserEntityName` sign-in resolver.
- Updated dependencies
  - @devtools/plugin-auth-node@0.5.3
  - @devtools/backend-plugin-api@1.0.1
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1

## 0.3.1-next.1

### Patch Changes

- 217458a: Updated configuration schema to include the new `allowedDomains` option for the `emailLocalPartMatchingUserEntityName` sign-in resolver.
- Updated dependencies
  - @devtools/plugin-auth-node@0.5.3-next.1
  - @devtools/backend-plugin-api@1.0.1-next.1
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1

## 0.3.1-next.0

### Patch Changes

- Updated dependencies
  - @devtools/plugin-auth-node@0.5.3-next.0
  - @devtools/backend-plugin-api@1.0.1-next.0
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1

## 0.3.0

### Minor Changes

- d425fc4: **BREAKING**: The return values from `createBackendPlugin`, `createBackendModule`, and `createServiceFactory` are now simply `BackendFeature` and `ServiceFactory`, instead of the previously deprecated form of a function that returns them. For this reason, `createServiceFactory` also no longer accepts the callback form where you provide direct options to the service. This also affects all `coreServices.*` service refs.

  This may in particular affect tests; if you were effectively doing `createBackendModule({...})()` (note the parentheses), you can now remove those extra parentheses at the end. You may encounter cases of this in your `packages/backend/src/index.ts` too, where you add plugins, modules, and services. If you were using `createServiceFactory` with a function as its argument for the purpose of passing in options, this pattern has been deprecated for a while and is no longer supported. You may want to explore the new multiton patterns to achieve your goals, or moving settings to app-config.

  As part of this change, the `IdentityFactoryOptions` type was removed, and can no longer be used to tweak that service. The identity service was also deprecated some time ago, and you will want to [migrate to the new auth system](https://devtools.khulnasoft.com/docs/tutorials/auth-service-migration) if you still rely on it.

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@1.0.0
  - @devtools/plugin-auth-node@0.5.2
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1

## 0.3.0-next.2

### Patch Changes

- Updated dependencies
  - @devtools/plugin-auth-node@0.5.2-next.2
  - @devtools/backend-plugin-api@1.0.0-next.2
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1

## 0.3.0-next.1

### Patch Changes

- Updated dependencies
  - @devtools/plugin-auth-node@0.5.2-next.1
  - @devtools/backend-plugin-api@0.9.0-next.1
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1

## 0.3.0-next.0

### Minor Changes

- d425fc4: **BREAKING**: The return values from `createBackendPlugin`, `createBackendModule`, and `createServiceFactory` are now simply `BackendFeature` and `ServiceFactory`, instead of the previously deprecated form of a function that returns them. For this reason, `createServiceFactory` also no longer accepts the callback form where you provide direct options to the service. This also affects all `coreServices.*` service refs.

  This may in particular affect tests; if you were effectively doing `createBackendModule({...})()` (note the parentheses), you can now remove those extra parentheses at the end. You may encounter cases of this in your `packages/backend/src/index.ts` too, where you add plugins, modules, and services. If you were using `createServiceFactory` with a function as its argument for the purpose of passing in options, this pattern has been deprecated for a while and is no longer supported. You may want to explore the new multiton patterns to achieve your goals, or moving settings to app-config.

  As part of this change, the `IdentityFactoryOptions` type was removed, and can no longer be used to tweak that service. The identity service was also deprecated some time ago, and you will want to [migrate to the new auth system](https://devtools.khulnasoft.com/docs/tutorials/auth-service-migration) if you still rely on it.

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.9.0-next.0
  - @devtools/plugin-auth-node@0.5.2-next.0
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1

## 0.2.18

### Patch Changes

- c8f1cae: Add `signIn` to authentication provider configuration schema
- 13a9c63: Corrected the documentation for the GCP IAP auth module and updated the configuration to follow proxy configuration conventions by ignoring authEnv
- Updated dependencies
  - @devtools/backend-plugin-api@0.8.0
  - @devtools/plugin-auth-node@0.5.0
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1

## 0.2.18-next.3

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.8.0-next.3
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1
  - @devtools/plugin-auth-node@0.5.0-next.3

## 0.2.18-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.8.0-next.2
  - @devtools/plugin-auth-node@0.5.0-next.2
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1

## 0.2.18-next.1

### Patch Changes

- c8f1cae: Add `signIn` to authentication provider configuration schema
- Updated dependencies
  - @devtools/backend-plugin-api@0.7.1-next.1
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1
  - @devtools/plugin-auth-node@0.4.18-next.1

## 0.2.18-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.7.1-next.0
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1
  - @devtools/plugin-auth-node@0.4.18-next.0

## 0.2.17

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.7.0
  - @devtools/plugin-auth-node@0.4.17
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1

## 0.2.17-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.6.22-next.1
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1
  - @devtools/plugin-auth-node@0.4.17-next.1

## 0.2.16-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.6.21-next.0
  - @devtools/plugin-auth-node@0.4.16-next.0
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1

## 0.2.14

### Patch Changes

- 78a0b08: Internal refactor to handle `BackendFeature` contract change.
- d44a20a: Added additional plugin metadata to `package.json`.
- Updated dependencies
  - @devtools/backend-plugin-api@0.6.19
  - @devtools/plugin-auth-node@0.4.14
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1

## 0.2.14-next.2

### Patch Changes

- d44a20a: Added additional plugin metadata to `package.json`.
- Updated dependencies
  - @devtools/backend-plugin-api@0.6.19-next.3
  - @devtools/plugin-auth-node@0.4.14-next.3
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1

## 0.2.14-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.6.19-next.2
  - @devtools/plugin-auth-node@0.4.14-next.2
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1

## 0.2.14-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.6.19-next.0
  - @devtools/plugin-auth-node@0.4.14-next.0
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1

## 0.2.13

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.6.18
  - @devtools/plugin-auth-node@0.4.13

## 0.2.13-next.1

### Patch Changes

- Updated dependencies
  - @devtools/plugin-auth-node@0.4.13-next.1
  - @devtools/backend-plugin-api@0.6.18-next.1

## 0.2.13-next.0

### Patch Changes

- Updated dependencies
  - @devtools/plugin-auth-node@0.4.13-next.0
  - @devtools/backend-plugin-api@0.6.18-next.0
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1

## 0.2.12

### Patch Changes

- e0ed31c: Add user id annotation sign-in resolver
- Updated dependencies
  - @devtools/backend-plugin-api@0.6.17
  - @devtools/plugin-auth-node@0.4.12
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1

## 0.2.12-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.6.17-next.1
  - @devtools/plugin-auth-node@0.4.12-next.1
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1

## 0.2.12-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.6.17-next.0
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1
  - @devtools/plugin-auth-node@0.4.12-next.0

## 0.2.11

### Patch Changes

- Updated dependencies
  - @devtools/plugin-auth-node@0.4.11
  - @devtools/backend-plugin-api@0.6.16
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1

## 0.2.10

### Patch Changes

- Updated dependencies
  - @devtools/plugin-auth-node@0.4.10
  - @devtools/backend-plugin-api@0.6.15
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1

## 0.2.9

### Patch Changes

- 38af71a: Updated dependency `google-auth-library` to `^9.0.0`.
- b1b012d: Fix issue with `providerInfo` not being set properly for some proxy providers, by making `providerInfo` an explicit optional return from `authenticate`
- Updated dependencies
  - @devtools/plugin-auth-node@0.4.9
  - @devtools/errors@1.2.4
  - @devtools/backend-plugin-api@0.6.14
  - @devtools/types@1.1.1

## 0.2.9-next.2

### Patch Changes

- Updated dependencies
  - @devtools/plugin-auth-node@0.4.9-next.2
  - @devtools/backend-plugin-api@0.6.14-next.2
  - @devtools/errors@1.2.4-next.0
  - @devtools/types@1.1.1

## 0.2.9-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.6.14-next.1
  - @devtools/plugin-auth-node@0.4.9-next.1
  - @devtools/errors@1.2.4-next.0
  - @devtools/types@1.1.1

## 0.2.8-next.0

### Patch Changes

- 38af71a: Updated dependency `google-auth-library` to `^9.0.0`.
- b1b012d: Fix issue with `providerInfo` not being set properly for some proxy providers, by making `providerInfo` an explicit optional return from `authenticate`
- Updated dependencies
  - @devtools/plugin-auth-node@0.4.8-next.0
  - @devtools/errors@1.2.4-next.0
  - @devtools/backend-plugin-api@0.6.13-next.0
  - @devtools/types@1.1.1

## 0.2.4

### Patch Changes

- Updated dependencies
  - @devtools/plugin-auth-node@0.4.4
  - @devtools/backend-plugin-api@0.6.10
  - @devtools/errors@1.2.3
  - @devtools/types@1.1.1

## 0.2.4-next.3

### Patch Changes

- Updated dependencies
  - @devtools/plugin-auth-node@0.4.4-next.3
  - @devtools/backend-plugin-api@0.6.10-next.3
  - @devtools/errors@1.2.3
  - @devtools/types@1.1.1

## 0.2.4-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.6.10-next.2
  - @devtools/plugin-auth-node@0.4.4-next.2
  - @devtools/errors@1.2.3
  - @devtools/types@1.1.1

## 0.2.4-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.6.10-next.1
  - @devtools/errors@1.2.3
  - @devtools/types@1.1.1
  - @devtools/plugin-auth-node@0.4.4-next.1

## 0.2.4-next.0

### Patch Changes

- Updated dependencies
  - @devtools/plugin-auth-node@0.4.4-next.0
  - @devtools/backend-plugin-api@0.6.10-next.0
  - @devtools/errors@1.2.3
  - @devtools/types@1.1.1

## 0.2.3

### Patch Changes

- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @devtools/backend-plugin-api@0.6.9
  - @devtools/plugin-auth-node@0.4.3
  - @devtools/errors@1.2.3
  - @devtools/types@1.1.1

## 0.2.3-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.6.9-next.2
  - @devtools/plugin-auth-node@0.4.3-next.2

## 0.2.3-next.1

### Patch Changes

- Updated dependencies
  - @devtools/plugin-auth-node@0.4.3-next.1
  - @devtools/backend-plugin-api@0.6.9-next.1
  - @devtools/errors@1.2.3
  - @devtools/types@1.1.1

## 0.2.3-next.0

### Patch Changes

- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @devtools/backend-plugin-api@0.6.9-next.0
  - @devtools/errors@1.2.3
  - @devtools/types@1.1.1
  - @devtools/plugin-auth-node@0.4.3-next.0

## 0.2.2

### Patch Changes

- cc4228e: Switched module ID to use kebab-case.
- Updated dependencies
  - @devtools/plugin-auth-node@0.4.2
  - @devtools/backend-plugin-api@0.6.8
  - @devtools/errors@1.2.3
  - @devtools/types@1.1.1

## 0.2.2-next.3

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.6.8-next.3
  - @devtools/errors@1.2.3
  - @devtools/types@1.1.1
  - @devtools/plugin-auth-node@0.4.2-next.3

## 0.2.2-next.2

### Patch Changes

- cc4228e: Switched module ID to use kebab-case.
- Updated dependencies
  - @devtools/plugin-auth-node@0.4.2-next.2
  - @devtools/backend-plugin-api@0.6.8-next.2
  - @devtools/errors@1.2.3
  - @devtools/types@1.1.1

## 0.2.2-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.6.8-next.1
  - @devtools/errors@1.2.3
  - @devtools/types@1.1.1
  - @devtools/plugin-auth-node@0.4.2-next.1

## 0.2.2-next.0

### Patch Changes

- Updated dependencies
  - @devtools/plugin-auth-node@0.4.2-next.0
  - @devtools/backend-plugin-api@0.6.8-next.0
  - @devtools/errors@1.2.3
  - @devtools/types@1.1.1

## 0.2.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.6.7
  - @devtools/errors@1.2.3
  - @devtools/types@1.1.1
  - @devtools/plugin-auth-node@0.4.1

## 0.2.1-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.6.7-next.2
  - @devtools/plugin-auth-node@0.4.1-next.2

## 0.2.1-next.1

### Patch Changes

- Updated dependencies
  - @devtools/plugin-auth-node@0.4.1-next.1
  - @devtools/backend-plugin-api@0.6.7-next.1
  - @devtools/errors@1.2.3
  - @devtools/types@1.1.1

## 0.2.1-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.6.7-next.0
  - @devtools/errors@1.2.3
  - @devtools/types@1.1.1
  - @devtools/plugin-auth-node@0.4.1-next.0

## 0.2.0

### Minor Changes

- 6f142d5356: **BREAKING** `gcpIapAuthenticator.initialize()` is no longer `async`

### Patch Changes

- Updated dependencies
  - @devtools/plugin-auth-node@0.4.0
  - @devtools/errors@1.2.3
  - @devtools/backend-plugin-api@0.6.6
  - @devtools/types@1.1.1

## 0.2.0-next.2

### Minor Changes

- 6f142d5356: **BREAKING** `gcpIapAuthenticator.initialize()` is no longer `async`

### Patch Changes

- Updated dependencies
  - @devtools/plugin-auth-node@0.4.0-next.2
  - @devtools/errors@1.2.3-next.0
  - @devtools/backend-plugin-api@0.6.6-next.2
  - @devtools/types@1.1.1

## 0.1.2-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.6.5-next.1
  - @devtools/plugin-auth-node@0.3.2-next.1
  - @devtools/errors@1.2.2
  - @devtools/types@1.1.1

## 0.1.2-next.0

### Patch Changes

- Updated dependencies
  - @devtools/plugin-auth-node@0.3.2-next.0
  - @devtools/backend-plugin-api@0.6.5-next.0
  - @devtools/errors@1.2.2
  - @devtools/types@1.1.1

## 0.1.0

### Minor Changes

- 8513cd7d00e3: New module for `@devtools/plugin-auth-backend` that adds a GCP IAP auth provider.

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
  - @devtools/plugin-auth-node@0.3.0
  - @devtools/errors@1.2.2
  - @devtools/types@1.1.1
  - @devtools/backend-plugin-api@0.6.3

## 0.1.0-next.3

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
  - @devtools/errors@1.2.2-next.0
  - @devtools/types@1.1.1-next.0
  - @devtools/backend-plugin-api@0.6.3-next.3
  - @devtools/plugin-auth-node@0.3.0-next.3

## 0.1.0-next.2

### Patch Changes

- Updated dependencies
  - @devtools/plugin-auth-node@0.3.0-next.2
  - @devtools/backend-plugin-api@0.6.3-next.2
  - @devtools/errors@1.2.1
  - @devtools/types@1.1.0

## 0.1.0-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.6.3-next.1
  - @devtools/plugin-auth-node@0.3.0-next.1
  - @devtools/errors@1.2.1
  - @devtools/types@1.1.0

## 0.1.0-next.0

### Minor Changes

- 8513cd7d00e3: New module for `@devtools/plugin-auth-backend` that adds a GCP IAP auth provider.

### Patch Changes

- Updated dependencies
  - @devtools/plugin-auth-node@0.3.0-next.0
  - @devtools/backend-plugin-api@0.6.2-next.0
  - @devtools/errors@1.2.1
  - @devtools/types@1.1.0