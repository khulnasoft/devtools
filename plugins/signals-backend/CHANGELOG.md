# @devtools/plugin-signals-backend

## 0.3.0-next.1

### Minor Changes

- f59ea1d: Removed support for the old backend system. If you were using the old `createRouter` export, please migrate to [the new backend system](https://devtools.khulnasoft.com/docs/backend-system/).

## 0.2.5-next.0

### Patch Changes

- Updated dependencies
  - @devtools/plugin-auth-node@0.5.6-next.0
  - @devtools/backend-plugin-api@1.1.1-next.0
  - @devtools/config@1.3.1
  - @devtools/types@1.2.0
  - @devtools/plugin-events-node@0.4.7-next.0
  - @devtools/plugin-signals-node@0.1.16-next.0

## 0.2.4

### Patch Changes

- 1e624ca: Restrict `@types/express` version range from `*` to `^4.17.6`.
- 5c9cc05: Use native fetch instead of node-fetch
- Updated dependencies
  - @devtools/plugin-auth-node@0.5.5
  - @devtools/backend-plugin-api@1.1.0
  - @devtools/plugin-events-node@0.4.6
  - @devtools/config@1.3.1
  - @devtools/types@1.2.0
  - @devtools/plugin-signals-node@0.1.15

## 0.2.4-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@1.1.0-next.2
  - @devtools/plugin-auth-node@0.5.5-next.2
  - @devtools/plugin-events-node@0.4.6-next.2
  - @devtools/plugin-signals-node@0.1.15-next.2
  - @devtools/config@1.3.1-next.0
  - @devtools/types@1.2.0

## 0.2.4-next.1

### Patch Changes

- 5c9cc05: Use native fetch instead of node-fetch
- Updated dependencies
  - @devtools/plugin-auth-node@0.5.5-next.1
  - @devtools/backend-plugin-api@1.1.0-next.1
  - @devtools/plugin-signals-node@0.1.15-next.1
  - @devtools/config@1.3.0
  - @devtools/types@1.2.0
  - @devtools/plugin-events-node@0.4.6-next.1

## 0.2.4-next.0

### Patch Changes

- 1e624ca: Restrict `@types/express` version range from `*` to `^4.17.6`.
- Updated dependencies
  - @devtools/backend-plugin-api@1.0.3-next.0
  - @devtools/plugin-events-node@0.4.6-next.0
  - @devtools/plugin-auth-node@0.5.5-next.0
  - @devtools/config@1.3.0
  - @devtools/types@1.2.0
  - @devtools/plugin-signals-node@0.1.15-next.0

## 0.2.3

### Patch Changes

- a1e01ff: The signals backend now supports scaled deployments where clients may be connecting to one of many signal backend instances.
- 4e58bc7: Upgrade to uuid v11 internally
- Updated dependencies
  - @devtools/config@1.3.0
  - @devtools/plugin-events-node@0.4.5
  - @devtools/types@1.2.0
  - @devtools/plugin-auth-node@0.5.4
  - @devtools/backend-plugin-api@1.0.2
  - @devtools/plugin-signals-node@0.1.14

## 0.2.3-next.3

### Patch Changes

- Updated dependencies
  - @devtools/plugin-events-node@0.4.5-next.3
  - @devtools/backend-plugin-api@1.0.2-next.2
  - @devtools/config@1.2.0
  - @devtools/types@1.1.1
  - @devtools/plugin-auth-node@0.5.4-next.2
  - @devtools/plugin-signals-node@0.1.14-next.3

## 0.2.3-next.2

### Patch Changes

- Updated dependencies
  - @devtools/plugin-events-node@0.4.5-next.2
  - @devtools/plugin-auth-node@0.5.4-next.2
  - @devtools/backend-plugin-api@1.0.2-next.2
  - @devtools/config@1.2.0
  - @devtools/types@1.1.1
  - @devtools/plugin-signals-node@0.1.14-next.2

## 0.2.3-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@1.0.2-next.1
  - @devtools/config@1.2.0
  - @devtools/types@1.1.1
  - @devtools/plugin-auth-node@0.5.4-next.1
  - @devtools/plugin-events-node@0.4.4-next.1
  - @devtools/plugin-signals-node@0.1.14-next.1

## 0.2.3-next.0

### Patch Changes

- a1e01ff: The signals backend now supports scaled deployments where clients may be connecting to one of many signal backend instances.
- Updated dependencies
  - @devtools/plugin-events-node@0.4.3-next.0
  - @devtools/plugin-auth-node@0.5.4-next.0
  - @devtools/backend-plugin-api@1.0.2-next.0
  - @devtools/config@1.2.0
  - @devtools/types@1.1.1
  - @devtools/plugin-signals-node@0.1.14-next.0

## 0.2.1

### Patch Changes

- 094eaa3: Remove references to in-repo backend-common
- Updated dependencies
  - @devtools/plugin-auth-node@0.5.3
  - @devtools/plugin-signals-node@0.1.12
  - @devtools/plugin-events-node@0.4.1
  - @devtools/backend-plugin-api@1.0.1
  - @devtools/config@1.2.0
  - @devtools/types@1.1.1

## 0.2.1-next.1

### Patch Changes

- Updated dependencies
  - @devtools/plugin-auth-node@0.5.3-next.1
  - @devtools/backend-plugin-api@1.0.1-next.1
  - @devtools/config@1.2.0
  - @devtools/types@1.1.1
  - @devtools/plugin-events-node@0.4.1-next.1
  - @devtools/plugin-signals-node@0.1.12-next.1

## 0.2.1-next.0

### Patch Changes

- 094eaa3: Remove references to in-repo backend-common
- Updated dependencies
  - @devtools/plugin-signals-node@0.1.12-next.0
  - @devtools/plugin-events-node@0.4.1-next.0
  - @devtools/plugin-auth-node@0.5.3-next.0
  - @devtools/backend-plugin-api@1.0.1-next.0
  - @devtools/config@1.2.0
  - @devtools/types@1.1.1

## 0.2.0

### Minor Changes

- d425fc4: **BREAKING**: The return values from `createBackendPlugin`, `createBackendModule`, and `createServiceFactory` are now simply `BackendFeature` and `ServiceFactory`, instead of the previously deprecated form of a function that returns them. For this reason, `createServiceFactory` also no longer accepts the callback form where you provide direct options to the service. This also affects all `coreServices.*` service refs.

  This may in particular affect tests; if you were effectively doing `createBackendModule({...})()` (note the parentheses), you can now remove those extra parentheses at the end. You may encounter cases of this in your `packages/backend/src/index.ts` too, where you add plugins, modules, and services. If you were using `createServiceFactory` with a function as its argument for the purpose of passing in options, this pattern has been deprecated for a while and is no longer supported. You may want to explore the new multiton patterns to achieve your goals, or moving settings to app-config.

  As part of this change, the `IdentityFactoryOptions` type was removed, and can no longer be used to tweak that service. The identity service was also deprecated some time ago, and you will want to [migrate to the new auth system](https://devtools.khulnasoft.com/docs/tutorials/auth-service-migration) if you still rely on it.

### Patch Changes

- a0f1f0d: Bump the `ws` library
- 3ec5ccb: The `createRouter` and its related types has been marked as deprecared. This backend should instead be initialized using the new backend system.
- 19ff127: Internal refactor to remove dependencies on the identity and token manager services, which have been removed. Public APIs no longer require the identity service or token manager to be provided.
- c2b63ab: Updated dependency `supertest` to `^7.0.0`.
- Updated dependencies
  - @devtools/backend-common@0.25.0
  - @devtools/plugin-signals-node@0.1.11
  - @devtools/backend-plugin-api@1.0.0
  - @devtools/plugin-auth-node@0.5.2
  - @devtools/plugin-events-node@0.4.0
  - @devtools/config@1.2.0
  - @devtools/types@1.1.1

## 0.2.0-next.2

### Patch Changes

- c2b63ab: Updated dependency `supertest` to `^7.0.0`.
- Updated dependencies
  - @devtools/backend-common@0.25.0-next.2
  - @devtools/plugin-auth-node@0.5.2-next.2
  - @devtools/backend-plugin-api@1.0.0-next.2
  - @devtools/config@1.2.0
  - @devtools/types@1.1.1
  - @devtools/plugin-events-node@0.4.0-next.2
  - @devtools/plugin-signals-node@0.1.11-next.2

## 0.2.0-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.25.0-next.1
  - @devtools/plugin-auth-node@0.5.2-next.1
  - @devtools/backend-plugin-api@0.9.0-next.1
  - @devtools/config@1.2.0
  - @devtools/types@1.1.1
  - @devtools/plugin-events-node@0.4.0-next.1
  - @devtools/plugin-signals-node@0.1.11-next.1

## 0.2.0-next.0

### Minor Changes

- d425fc4: **BREAKING**: The return values from `createBackendPlugin`, `createBackendModule`, and `createServiceFactory` are now simply `BackendFeature` and `ServiceFactory`, instead of the previously deprecated form of a function that returns them. For this reason, `createServiceFactory` also no longer accepts the callback form where you provide direct options to the service. This also affects all `coreServices.*` service refs.

  This may in particular affect tests; if you were effectively doing `createBackendModule({...})()` (note the parentheses), you can now remove those extra parentheses at the end. You may encounter cases of this in your `packages/backend/src/index.ts` too, where you add plugins, modules, and services. If you were using `createServiceFactory` with a function as its argument for the purpose of passing in options, this pattern has been deprecated for a while and is no longer supported. You may want to explore the new multiton patterns to achieve your goals, or moving settings to app-config.

  As part of this change, the `IdentityFactoryOptions` type was removed, and can no longer be used to tweak that service. The identity service was also deprecated some time ago, and you will want to [migrate to the new auth system](https://devtools.khulnasoft.com/docs/tutorials/auth-service-migration) if you still rely on it.

### Patch Changes

- 3ec5ccb: The `createRouter` and its related types has been marked as deprecared. This backend should instead be initialized using the new backend system.
- 19ff127: Internal refactor to remove dependencies on the identity and token manager services, which have been removed. Public APIs no longer require the identity service or token manager to be provided.
- Updated dependencies
  - @devtools/backend-plugin-api@0.9.0-next.0
  - @devtools/backend-common@0.25.0-next.0
  - @devtools/plugin-events-node@0.4.0-next.0
  - @devtools/plugin-auth-node@0.5.2-next.0
  - @devtools/plugin-signals-node@0.1.11-next.0
  - @devtools/config@1.2.0
  - @devtools/types@1.1.1

## 0.1.9

### Patch Changes

- 93095ee: Make sure node-fetch is version 2.7.0 or greater
- Updated dependencies
  - @devtools/backend-plugin-api@0.8.0
  - @devtools/backend-common@0.24.0
  - @devtools/plugin-auth-node@0.5.0
  - @devtools/config@1.2.0
  - @devtools/types@1.1.1
  - @devtools/plugin-events-node@0.3.9
  - @devtools/plugin-signals-node@0.1.9

## 0.1.9-next.3

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.8.0-next.3
  - @devtools/backend-common@0.23.4-next.3
  - @devtools/config@1.2.0
  - @devtools/types@1.1.1
  - @devtools/plugin-auth-node@0.5.0-next.3
  - @devtools/plugin-events-node@0.3.9-next.3
  - @devtools/plugin-signals-node@0.1.9-next.3

## 0.1.9-next.2

### Patch Changes

- 93095ee: Make sure node-fetch is version 2.7.0 or greater
- Updated dependencies
  - @devtools/backend-plugin-api@0.8.0-next.2
  - @devtools/backend-common@0.23.4-next.2
  - @devtools/plugin-auth-node@0.5.0-next.2
  - @devtools/plugin-events-node@0.3.9-next.2
  - @devtools/plugin-signals-node@0.1.9-next.2
  - @devtools/config@1.2.0
  - @devtools/types@1.1.1

## 0.1.9-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.7.1-next.1
  - @devtools/backend-common@0.23.4-next.1
  - @devtools/config@1.2.0
  - @devtools/types@1.1.1
  - @devtools/plugin-auth-node@0.4.18-next.1
  - @devtools/plugin-events-node@0.3.9-next.1
  - @devtools/plugin-signals-node@0.1.9-next.1

## 0.1.9-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.23.4-next.0
  - @devtools/backend-plugin-api@0.7.1-next.0
  - @devtools/config@1.2.0
  - @devtools/types@1.1.1
  - @devtools/plugin-auth-node@0.4.18-next.0
  - @devtools/plugin-events-node@0.3.9-next.0
  - @devtools/plugin-signals-node@0.1.9-next.0

## 0.1.8

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.7.0
  - @devtools/backend-common@0.23.3
  - @devtools/plugin-events-node@0.3.8
  - @devtools/plugin-auth-node@0.4.17
  - @devtools/plugin-signals-node@0.1.8
  - @devtools/config@1.2.0
  - @devtools/types@1.1.1

## 0.1.8-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.23.3-next.1
  - @devtools/backend-plugin-api@0.6.22-next.1
  - @devtools/config@1.2.0
  - @devtools/types@1.1.1
  - @devtools/plugin-auth-node@0.4.17-next.1
  - @devtools/plugin-events-node@0.3.8-next.1
  - @devtools/plugin-signals-node@0.1.8-next.1

## 0.1.7-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.6.21-next.0
  - @devtools/backend-common@0.23.2-next.0
  - @devtools/plugin-auth-node@0.4.16-next.0
  - @devtools/plugin-events-node@0.3.7-next.0
  - @devtools/plugin-signals-node@0.1.7-next.0
  - @devtools/config@1.2.0
  - @devtools/types@1.1.1

## 0.1.5

### Patch Changes

- 78a0b08: Internal refactor to handle `BackendFeature` contract change.
- 6a576dc: Replace the usage of `getVoidLogger` with `mockServices.logger.mock` in order to remove the dependency with the soon-to-be-deprecated `backend-common` package.
- d44a20a: Added additional plugin metadata to `package.json`.
- Updated dependencies
  - @devtools/backend-common@0.23.0
  - @devtools/backend-plugin-api@0.6.19
  - @devtools/plugin-auth-node@0.4.14
  - @devtools/plugin-events-node@0.3.5
  - @devtools/plugin-signals-node@0.1.5
  - @devtools/config@1.2.0
  - @devtools/types@1.1.1

## 0.1.5-next.3

### Patch Changes

- d44a20a: Added additional plugin metadata to `package.json`.
- Updated dependencies
  - @devtools/backend-plugin-api@0.6.19-next.3
  - @devtools/plugin-auth-node@0.4.14-next.3
  - @devtools/plugin-signals-node@0.1.5-next.3
  - @devtools/plugin-events-node@0.3.5-next.2
  - @devtools/backend-common@0.23.0-next.3
  - @devtools/config@1.2.0
  - @devtools/types@1.1.1

## 0.1.5-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.6.19-next.2
  - @devtools/backend-common@0.23.0-next.2
  - @devtools/plugin-auth-node@0.4.14-next.2
  - @devtools/plugin-events-node@0.3.5-next.1
  - @devtools/plugin-signals-node@0.1.5-next.2
  - @devtools/config@1.2.0
  - @devtools/types@1.1.1

## 0.1.5-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.6.19-next.1
  - @devtools/backend-common@0.23.0-next.1
  - @devtools/plugin-auth-node@0.4.14-next.1
  - @devtools/plugin-events-node@0.3.5-next.0
  - @devtools/plugin-signals-node@0.1.5-next.1

## 0.1.5-next.0

### Patch Changes

- 6a576dc: Replace the usage of `getVoidLogger` with `mockServices.logger.mock` in order to remove the dependency with the soon-to-be-deprecated `backend-common` package.
- Updated dependencies
  - @devtools/backend-common@0.22.1-next.0
  - @devtools/plugin-events-node@0.3.5-next.0
  - @devtools/backend-plugin-api@0.6.19-next.0
  - @devtools/plugin-auth-node@0.4.14-next.0
  - @devtools/plugin-signals-node@0.1.5-next.0
  - @devtools/config@1.2.0
  - @devtools/types@1.1.1

## 0.1.4

### Patch Changes

- 845d56a: Improved signal lifecycle management and added server side pinging of connections
- Updated dependencies
  - @devtools/backend-common@0.22.0
  - @devtools/backend-plugin-api@0.6.18
  - @devtools/plugin-events-node@0.3.4
  - @devtools/plugin-auth-node@0.4.13
  - @devtools/plugin-signals-node@0.1.4

## 0.1.4-next.2

### Patch Changes

- 845d56a: Improved signal lifecycle management and added server side pinging of connections
- Updated dependencies
  - @devtools/backend-common@0.22.0-next.2
  - @devtools/plugin-events-node@0.3.4-next.2

## 0.1.4-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.22.0-next.1
  - @devtools/plugin-auth-node@0.4.13-next.1
  - @devtools/plugin-events-node@0.3.4-next.1
  - @devtools/plugin-signals-node@0.1.4-next.1
  - @devtools/backend-plugin-api@0.6.18-next.1

## 0.1.4-next.0

### Patch Changes

- Updated dependencies
  - @devtools/plugin-auth-node@0.4.13-next.0
  - @devtools/backend-common@0.21.8-next.0
  - @devtools/backend-plugin-api@0.6.18-next.0
  - @devtools/config@1.2.0
  - @devtools/types@1.1.1
  - @devtools/plugin-events-node@0.3.4-next.0
  - @devtools/plugin-signals-node@0.1.4-next.0

## 0.1.3

### Patch Changes

- 5f9877b: Fix unauthorized signals connection by allowing unauthenticated requests
- 9a41a7b: Migrate signals and notifications to the new backend in local development
- Updated dependencies
  - @devtools/backend-common@0.21.7
  - @devtools/backend-plugin-api@0.6.17
  - @devtools/plugin-auth-node@0.4.12
  - @devtools/plugin-events-node@0.3.3
  - @devtools/plugin-signals-node@0.1.3
  - @devtools/config@1.2.0
  - @devtools/types@1.1.1

## 0.1.3-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.21.7-next.1
  - @devtools/backend-plugin-api@0.6.17-next.1
  - @devtools/plugin-auth-node@0.4.12-next.1
  - @devtools/plugin-events-node@0.3.3-next.1
  - @devtools/plugin-signals-node@0.1.3-next.1
  - @devtools/config@1.2.0
  - @devtools/types@1.1.1

## 0.1.3-next.0

### Patch Changes

- 5f9877b: Fix unauthorized signals connection by allowing unauthenticated requests
- Updated dependencies
  - @devtools/backend-common@0.21.7-next.0
  - @devtools/backend-plugin-api@0.6.17-next.0
  - @devtools/config@1.2.0
  - @devtools/types@1.1.1
  - @devtools/plugin-auth-node@0.4.12-next.0
  - @devtools/plugin-events-node@0.3.3-next.0
  - @devtools/plugin-signals-node@0.1.3-next.0

## 0.1.2

### Patch Changes

- Updated dependencies
  - @devtools/plugin-auth-node@0.4.11
  - @devtools/backend-common@0.21.6
  - @devtools/backend-plugin-api@0.6.16
  - @devtools/plugin-signals-node@0.1.2
  - @devtools/plugin-events-node@0.3.2
  - @devtools/config@1.2.0
  - @devtools/types@1.1.1

## 0.1.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.21.5
  - @devtools/plugin-auth-node@0.4.10
  - @devtools/plugin-events-node@0.3.1
  - @devtools/plugin-signals-node@0.1.1
  - @devtools/backend-plugin-api@0.6.15
  - @devtools/config@1.2.0
  - @devtools/types@1.1.1

## 0.1.0

### Minor Changes

- 6c1547a: **BREAKING** Type definition added to signal recipients

  Update to use `{type: 'broadcast'}` instead `null` and `{type: 'user', entityRef: ''}`
  instead string entity references

- daf85dc: BREAKING CHANGE: Migrates signals to use the `EventsService` and makes it mandatory

### Patch Changes

- 4467036: Allow unauthenticated access to health check endpoint.
- 0fb419b: Updated dependency `uuid` to `^9.0.0`.
  Updated dependency `@types/uuid` to `^9.0.0`.
- 6d84ee6: Changed to use the refactored signal service naming
- df45710: Improved error logging and fixed authentication
- Updated dependencies
  - @devtools/plugin-events-node@0.3.0
  - @devtools/backend-common@0.21.4
  - @devtools/plugin-auth-node@0.4.9
  - @devtools/config@1.2.0
  - @devtools/plugin-signals-node@0.1.0
  - @devtools/backend-plugin-api@0.6.14
  - @devtools/types@1.1.1

## 0.1.0-next.2

### Patch Changes

- 6d84ee6: Changed to use the refactored signal service naming
- Updated dependencies
  - @devtools/plugin-signals-node@0.1.0-next.2
  - @devtools/backend-common@0.21.4-next.2
  - @devtools/plugin-auth-node@0.4.9-next.2
  - @devtools/backend-plugin-api@0.6.14-next.2
  - @devtools/config@1.2.0-next.1
  - @devtools/types@1.1.1
  - @devtools/plugin-events-node@0.3.0-next.2

## 0.1.0-next.1

### Minor Changes

- daf85dc: BREAKING CHANGE: Migrates signals to use the `EventsService` and makes it mandatory

### Patch Changes

- df45710: Improved error logging and fixed authentication
- Updated dependencies
  - @devtools/config@1.2.0-next.1
  - @devtools/plugin-signals-node@0.1.0-next.1
  - @devtools/backend-common@0.21.4-next.1
  - @devtools/backend-plugin-api@0.6.14-next.1
  - @devtools/plugin-auth-node@0.4.9-next.1
  - @devtools/types@1.1.1
  - @devtools/plugin-events-node@0.3.0-next.1

## 0.0.4-next.0

### Patch Changes

- 0fb419b: Updated dependency `uuid` to `^9.0.0`.
  Updated dependency `@types/uuid` to `^9.0.0`.
- Updated dependencies
  - @devtools/plugin-events-node@0.3.0-next.0
  - @devtools/backend-common@0.21.3-next.0
  - @devtools/plugin-auth-node@0.4.8-next.0
  - @devtools/backend-plugin-api@0.6.13-next.0
  - @devtools/plugin-signals-node@0.0.4-next.0
  - @devtools/config@1.1.2-next.0
  - @devtools/types@1.1.1

## 0.0.1

### Patch Changes

- 447d210: Fix disconnect loop on server start
- 8472188: Added or fixed the `repository` field in `package.json`.
- 047bead: Add support to subscribe and publish messages through signals plugins
- Updated dependencies
  - @devtools/backend-common@0.21.0
  - @devtools/plugin-auth-node@0.4.4
  - @devtools/plugin-signals-node@0.0.1
  - @devtools/backend-plugin-api@0.6.10
  - @devtools/config@1.1.1
  - @devtools/types@1.1.1
  - @devtools/plugin-events-node@0.2.19

## 0.0.1-next.3

### Patch Changes

- 8472188: Added or fixed the `repository` field in `package.json`.
- Updated dependencies
  - @devtools/backend-common@0.21.0-next.3
  - @devtools/plugin-signals-node@0.0.1-next.3
  - @devtools/plugin-auth-node@0.4.4-next.3
  - @devtools/backend-plugin-api@0.6.10-next.3
  - @devtools/config@1.1.1
  - @devtools/types@1.1.1
  - @devtools/plugin-events-node@0.2.19-next.3

## 0.0.1-next.2

### Patch Changes

- 447d210: Fix disconnect loop on server start
- Updated dependencies
  - @devtools/backend-common@0.21.0-next.2
  - @devtools/plugin-signals-node@0.0.1-next.2
  - @devtools/backend-plugin-api@0.6.10-next.2
  - @devtools/plugin-auth-node@0.4.4-next.2
  - @devtools/plugin-events-node@0.2.19-next.2
  - @devtools/config@1.1.1
  - @devtools/types@1.1.1

## 0.0.1-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.6.10-next.1
  - @devtools/backend-common@0.21.0-next.1
  - @devtools/config@1.1.1
  - @devtools/types@1.1.1
  - @devtools/plugin-auth-node@0.4.4-next.1
  - @devtools/plugin-events-node@0.2.19-next.1
  - @devtools/plugin-signals-node@0.0.1-next.1

## 0.0.1-next.0

### Patch Changes

- 047bead: Add support to subscribe and publish messages through signals plugins
- Updated dependencies
  - @devtools/backend-common@0.21.0-next.0
  - @devtools/plugin-signals-node@0.0.1-next.0
  - @devtools/plugin-auth-node@0.4.4-next.0
  - @devtools/backend-plugin-api@0.6.10-next.0
  - @devtools/config@1.1.1
  - @devtools/types@1.1.1
  - @devtools/plugin-events-node@0.2.19-next.0
