# @devtools/plugin-search-backend-module-stack-overflow-collator

## 0.3.5-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@1.1.1-next.0
  - @devtools/config@1.3.1
  - @devtools/plugin-search-backend-node@1.3.7-next.0
  - @devtools/plugin-search-common@1.2.16

## 0.3.4

### Patch Changes

- 5c9cc05: Use native fetch instead of node-fetch
- Updated dependencies
  - @devtools/backend-plugin-api@1.1.0
  - @devtools/plugin-search-backend-node@1.3.6
  - @devtools/config@1.3.1
  - @devtools/plugin-search-common@1.2.16

## 0.3.4-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@1.1.0-next.2
  - @devtools/plugin-search-backend-node@1.3.6-next.2
  - @devtools/config@1.3.1-next.0
  - @devtools/plugin-search-common@1.2.16-next.0

## 0.3.4-next.1

### Patch Changes

- 5c9cc05: Use native fetch instead of node-fetch
- Updated dependencies
  - @devtools/plugin-search-backend-node@1.3.6-next.1
  - @devtools/backend-plugin-api@1.1.0-next.1
  - @devtools/config@1.3.0
  - @devtools/plugin-search-common@1.2.15

## 0.3.4-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@1.0.3-next.0
  - @devtools/config@1.3.0
  - @devtools/plugin-search-backend-node@1.3.6-next.0
  - @devtools/plugin-search-common@1.2.15

## 0.3.3

### Patch Changes

- 5d74716: Remove unused backend-common dependency
- Updated dependencies
  - @devtools/config@1.3.0
  - @devtools/backend-plugin-api@1.0.2
  - @devtools/plugin-search-backend-node@1.3.5
  - @devtools/plugin-search-common@1.2.15

## 0.3.3-next.3

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@1.0.2-next.2
  - @devtools/config@1.2.0
  - @devtools/plugin-search-backend-node@1.3.5-next.3
  - @devtools/plugin-search-common@1.2.14

## 0.3.3-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@1.0.2-next.2
  - @devtools/config@1.2.0
  - @devtools/plugin-search-backend-node@1.3.5-next.2
  - @devtools/plugin-search-common@1.2.14

## 0.3.3-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@1.0.2-next.1
  - @devtools/config@1.2.0
  - @devtools/plugin-search-backend-node@1.3.5-next.1
  - @devtools/plugin-search-common@1.2.14

## 0.3.3-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@1.0.2-next.0
  - @devtools/config@1.2.0
  - @devtools/plugin-search-backend-node@1.3.5-next.0
  - @devtools/plugin-search-common@1.2.14

## 0.3.1

### Patch Changes

- bc71718: Updated installation instructions in README to not include `/alpha`.
- 094eaa3: Remove references to in-repo backend-common
- Updated dependencies
  - @devtools/plugin-search-backend-node@1.3.3
  - @devtools/backend-plugin-api@1.0.1
  - @devtools/config@1.2.0
  - @devtools/plugin-search-common@1.2.14

## 0.3.1-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@1.0.1-next.1
  - @devtools/config@1.2.0
  - @devtools/plugin-search-backend-node@1.3.3-next.2
  - @devtools/plugin-search-common@1.2.14

## 0.3.1-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@1.0.1-next.0
  - @devtools/config@1.2.0
  - @devtools/plugin-search-backend-node@1.3.3-next.1
  - @devtools/plugin-search-common@1.2.14

## 0.3.1-next.0

### Patch Changes

- 094eaa3: Remove references to in-repo backend-common
- Updated dependencies
  - @devtools/plugin-search-backend-node@1.3.3-next.0
  - @devtools/backend-plugin-api@1.0.1-next.0
  - @devtools/config@1.2.0
  - @devtools/plugin-search-common@1.2.14

## 0.3.0

### Minor Changes

- 479808f: Always set default request parameters for requests to stackoverflow while allow to overwrite them. Remove site parameter as causing the request to fail.
- d425fc4: **BREAKING**: The return values from `createBackendPlugin`, `createBackendModule`, and `createServiceFactory` are now simply `BackendFeature` and `ServiceFactory`, instead of the previously deprecated form of a function that returns them. For this reason, `createServiceFactory` also no longer accepts the callback form where you provide direct options to the service. This also affects all `coreServices.*` service refs.

  This may in particular affect tests; if you were effectively doing `createBackendModule({...})()` (note the parentheses), you can now remove those extra parentheses at the end. You may encounter cases of this in your `packages/backend/src/index.ts` too, where you add plugins, modules, and services. If you were using `createServiceFactory` with a function as its argument for the purpose of passing in options, this pattern has been deprecated for a while and is no longer supported. You may want to explore the new multiton patterns to achieve your goals, or moving settings to app-config.

  As part of this change, the `IdentityFactoryOptions` type was removed, and can no longer be used to tweak that service. The identity service was also deprecated some time ago, and you will want to [migrate to the new auth system](https://devtools.khulnasoft.com/docs/tutorials/auth-service-migration) if you still rely on it.

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.25.0
  - @devtools/backend-plugin-api@1.0.0
  - @devtools/config@1.2.0
  - @devtools/plugin-search-backend-node@1.3.2
  - @devtools/plugin-search-common@1.2.14

## 0.3.0-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.25.0-next.2
  - @devtools/backend-plugin-api@1.0.0-next.2
  - @devtools/config@1.2.0
  - @devtools/plugin-search-backend-node@1.3.2-next.2
  - @devtools/plugin-search-common@1.2.14

## 0.3.0-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.25.0-next.1
  - @devtools/backend-plugin-api@0.9.0-next.1
  - @devtools/config@1.2.0
  - @devtools/plugin-search-backend-node@1.3.2-next.1
  - @devtools/plugin-search-common@1.2.14

## 0.3.0-next.0

### Minor Changes

- d425fc4: **BREAKING**: The return values from `createBackendPlugin`, `createBackendModule`, and `createServiceFactory` are now simply `BackendFeature` and `ServiceFactory`, instead of the previously deprecated form of a function that returns them. For this reason, `createServiceFactory` also no longer accepts the callback form where you provide direct options to the service. This also affects all `coreServices.*` service refs.

  This may in particular affect tests; if you were effectively doing `createBackendModule({...})()` (note the parentheses), you can now remove those extra parentheses at the end. You may encounter cases of this in your `packages/backend/src/index.ts` too, where you add plugins, modules, and services. If you were using `createServiceFactory` with a function as its argument for the purpose of passing in options, this pattern has been deprecated for a while and is no longer supported. You may want to explore the new multiton patterns to achieve your goals, or moving settings to app-config.

  As part of this change, the `IdentityFactoryOptions` type was removed, and can no longer be used to tweak that service. The identity service was also deprecated some time ago, and you will want to [migrate to the new auth system](https://devtools.khulnasoft.com/docs/tutorials/auth-service-migration) if you still rely on it.

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.9.0-next.0
  - @devtools/backend-common@0.25.0-next.0
  - @devtools/plugin-search-backend-node@1.3.2-next.0
  - @devtools/config@1.2.0
  - @devtools/plugin-search-common@1.2.14

## 0.2.0

### Minor Changes

- fc24d9e: Stop using `@devtools/backend-tasks` as it will be deleted in near future.

### Patch Changes

- 93095ee: Make sure node-fetch is version 2.7.0 or greater
- Updated dependencies
  - @devtools/backend-plugin-api@0.8.0
  - @devtools/backend-common@0.24.0
  - @devtools/plugin-search-backend-node@1.3.0
  - @devtools/plugin-search-common@1.2.14
  - @devtools/config@1.2.0

## 0.1.16-next.3

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.8.0-next.3
  - @devtools/backend-common@0.23.4-next.3
  - @devtools/backend-tasks@0.5.28-next.3
  - @devtools/config@1.2.0
  - @devtools/plugin-search-backend-node@1.2.28-next.3
  - @devtools/plugin-search-common@1.2.14-next.1

## 0.1.16-next.2

### Patch Changes

- 93095ee: Make sure node-fetch is version 2.7.0 or greater
- Updated dependencies
  - @devtools/backend-plugin-api@0.8.0-next.2
  - @devtools/backend-common@0.23.4-next.2
  - @devtools/plugin-search-backend-node@1.2.28-next.2
  - @devtools/plugin-search-common@1.2.14-next.1
  - @devtools/backend-tasks@0.5.28-next.2
  - @devtools/config@1.2.0

## 0.1.16-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.7.1-next.1
  - @devtools/backend-common@0.23.4-next.1
  - @devtools/plugin-search-backend-node@1.2.28-next.1
  - @devtools/plugin-search-common@1.2.14-next.0
  - @devtools/backend-tasks@0.5.28-next.1
  - @devtools/config@1.2.0

## 0.1.16-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.23.4-next.0
  - @devtools/backend-plugin-api@0.7.1-next.0
  - @devtools/backend-tasks@0.5.28-next.0
  - @devtools/config@1.2.0
  - @devtools/plugin-search-backend-node@1.2.28-next.0
  - @devtools/plugin-search-common@1.2.13

## 0.1.15

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.7.0
  - @devtools/backend-common@0.23.3
  - @devtools/backend-tasks@0.5.27
  - @devtools/plugin-search-backend-node@1.2.27
  - @devtools/plugin-search-common@1.2.13
  - @devtools/config@1.2.0

## 0.1.15-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.23.3-next.1
  - @devtools/backend-plugin-api@0.6.22-next.1
  - @devtools/backend-tasks@0.5.27-next.1
  - @devtools/config@1.2.0
  - @devtools/plugin-search-backend-node@1.2.27-next.1
  - @devtools/plugin-search-common@1.2.12

## 0.1.14-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.6.21-next.0
  - @devtools/backend-common@0.23.2-next.0
  - @devtools/backend-tasks@0.5.26-next.0
  - @devtools/plugin-search-backend-node@1.2.26-next.0
  - @devtools/config@1.2.0
  - @devtools/plugin-search-common@1.2.12

## 0.1.12

### Patch Changes

- 78a0b08: Internal refactor to handle `BackendFeature` contract change.
- d44a20a: Added additional plugin metadata to `package.json`.
- Updated dependencies
  - @devtools/backend-common@0.23.0
  - @devtools/backend-plugin-api@0.6.19
  - @devtools/backend-tasks@0.5.24
  - @devtools/plugin-search-backend-node@1.2.24
  - @devtools/plugin-search-common@1.2.12
  - @devtools/config@1.2.0

## 0.1.12-next.3

### Patch Changes

- d44a20a: Added additional plugin metadata to `package.json`.
- Updated dependencies
  - @devtools/backend-plugin-api@0.6.19-next.3
  - @devtools/plugin-search-backend-node@1.2.24-next.3
  - @devtools/plugin-search-common@1.2.12-next.0
  - @devtools/backend-tasks@0.5.24-next.3
  - @devtools/backend-common@0.23.0-next.3
  - @devtools/config@1.2.0

## 0.1.12-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.6.19-next.2
  - @devtools/backend-common@0.23.0-next.2
  - @devtools/backend-tasks@0.5.24-next.2
  - @devtools/plugin-search-backend-node@1.2.24-next.2
  - @devtools/config@1.2.0
  - @devtools/plugin-search-common@1.2.11

## 0.1.12-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-tasks@0.5.24-next.1
  - @devtools/backend-plugin-api@0.6.19-next.1
  - @devtools/backend-common@0.23.0-next.1
  - @devtools/plugin-search-backend-node@1.2.24-next.1

## 0.1.12-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-tasks@0.5.24-next.0
  - @devtools/backend-common@0.22.1-next.0
  - @devtools/plugin-search-backend-node@1.2.24-next.0
  - @devtools/backend-plugin-api@0.6.19-next.0
  - @devtools/config@1.2.0
  - @devtools/plugin-search-common@1.2.11

## 0.1.11

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.22.0
  - @devtools/backend-plugin-api@0.6.18
  - @devtools/backend-tasks@0.5.23
  - @devtools/plugin-search-backend-node@1.2.22

## 0.1.11-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.22.0-next.1
  - @devtools/backend-tasks@0.5.23-next.1
  - @devtools/plugin-search-backend-node@1.2.22-next.1
  - @devtools/backend-plugin-api@0.6.18-next.1

## 0.1.11-next.0

### Patch Changes

- Updated dependencies
  - @devtools/plugin-search-backend-node@1.2.22-next.0
  - @devtools/backend-common@0.21.8-next.0
  - @devtools/backend-plugin-api@0.6.18-next.0
  - @devtools/backend-tasks@0.5.23-next.0
  - @devtools/config@1.2.0
  - @devtools/plugin-search-common@1.2.11

## 0.1.10

### Patch Changes

- d5a1fe1: Replaced winston logger with `LoggerService`
- Updated dependencies
  - @devtools/backend-common@0.21.7
  - @devtools/backend-plugin-api@0.6.17
  - @devtools/plugin-search-backend-node@1.2.21
  - @devtools/backend-tasks@0.5.22
  - @devtools/config@1.2.0
  - @devtools/plugin-search-common@1.2.11

## 0.1.10-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.21.7-next.1
  - @devtools/backend-plugin-api@0.6.17-next.1
  - @devtools/backend-tasks@0.5.22-next.1
  - @devtools/plugin-search-backend-node@1.2.21-next.1
  - @devtools/config@1.2.0
  - @devtools/plugin-search-common@1.2.11

## 0.1.10-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.21.7-next.0
  - @devtools/backend-plugin-api@0.6.17-next.0
  - @devtools/backend-tasks@0.5.22-next.0
  - @devtools/config@1.2.0
  - @devtools/plugin-search-backend-node@1.2.21-next.0
  - @devtools/plugin-search-common@1.2.11

## 0.1.9

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.21.6
  - @devtools/backend-plugin-api@0.6.16
  - @devtools/backend-tasks@0.5.21
  - @devtools/plugin-search-backend-node@1.2.20
  - @devtools/config@1.2.0
  - @devtools/plugin-search-common@1.2.11

## 0.1.8

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.21.5
  - @devtools/backend-tasks@0.5.20
  - @devtools/plugin-search-backend-node@1.2.19
  - @devtools/backend-plugin-api@0.6.15
  - @devtools/config@1.2.0
  - @devtools/plugin-search-common@1.2.11

## 0.1.7

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.21.4
  - @devtools/config@1.2.0
  - @devtools/backend-plugin-api@0.6.14
  - @devtools/plugin-search-common@1.2.11
  - @devtools/backend-tasks@0.5.19
  - @devtools/plugin-search-backend-node@1.2.18

## 0.1.7-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.21.4-next.2
  - @devtools/backend-plugin-api@0.6.14-next.2
  - @devtools/backend-tasks@0.5.19-next.2
  - @devtools/config@1.2.0-next.1
  - @devtools/plugin-search-backend-node@1.2.18-next.2
  - @devtools/plugin-search-common@1.2.11-next.1

## 0.1.7-next.1

### Patch Changes

- Updated dependencies
  - @devtools/config@1.2.0-next.1
  - @devtools/backend-common@0.21.4-next.1
  - @devtools/backend-plugin-api@0.6.14-next.1
  - @devtools/backend-tasks@0.5.19-next.1
  - @devtools/plugin-search-backend-node@1.2.18-next.1
  - @devtools/plugin-search-common@1.2.11-next.1

## 0.1.6-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.21.3-next.0
  - @devtools/backend-plugin-api@0.6.13-next.0
  - @devtools/plugin-search-common@1.2.11-next.0
  - @devtools/backend-tasks@0.5.18-next.0
  - @devtools/plugin-search-backend-node@1.2.17-next.0
  - @devtools/config@1.1.2-next.0

## 0.1.3

### Patch Changes

- 9aac2b0: Use `--cwd` as the first `yarn` argument
- 8472188: Added or fixed the `repository` field in `package.json`.
- Updated dependencies
  - @devtools/backend-common@0.21.0
  - @devtools/backend-plugin-api@0.6.10
  - @devtools/backend-tasks@0.5.15
  - @devtools/plugin-search-backend-node@1.2.14
  - @devtools/config@1.1.1
  - @devtools/plugin-search-common@1.2.10

## 0.1.3-next.3

### Patch Changes

- 8472188: Added or fixed the `repository` field in `package.json`.
- Updated dependencies
  - @devtools/backend-common@0.21.0-next.3
  - @devtools/backend-tasks@0.5.15-next.3
  - @devtools/plugin-search-backend-node@1.2.14-next.3
  - @devtools/backend-plugin-api@0.6.10-next.3
  - @devtools/config@1.1.1
  - @devtools/plugin-search-common@1.2.10

## 0.1.3-next.2

### Patch Changes

- 9aac2b0: Use `--cwd` as the first `yarn` argument
- Updated dependencies
  - @devtools/backend-common@0.21.0-next.2
  - @devtools/backend-plugin-api@0.6.10-next.2
  - @devtools/backend-tasks@0.5.15-next.2
  - @devtools/plugin-search-backend-node@1.2.14-next.2
  - @devtools/config@1.1.1
  - @devtools/plugin-search-common@1.2.10

## 0.1.3-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.6.10-next.1
  - @devtools/backend-common@0.21.0-next.1
  - @devtools/backend-tasks@0.5.15-next.1
  - @devtools/config@1.1.1
  - @devtools/plugin-search-backend-node@1.2.14-next.1
  - @devtools/plugin-search-common@1.2.10

## 0.1.3-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.21.0-next.0
  - @devtools/backend-tasks@0.5.15-next.0
  - @devtools/plugin-search-backend-node@1.2.14-next.0
  - @devtools/backend-plugin-api@0.6.10-next.0
  - @devtools/config@1.1.1
  - @devtools/plugin-search-common@1.2.10

## 0.1.2

### Patch Changes

- 2e6c56b: Update wording to show that the backend system no longer is in alpha
- Updated dependencies
  - @devtools/backend-common@0.20.1
  - @devtools/backend-plugin-api@0.6.9
  - @devtools/backend-tasks@0.5.14
  - @devtools/plugin-search-backend-node@1.2.13
  - @devtools/config@1.1.1
  - @devtools/plugin-search-common@1.2.10

## 0.1.2-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.6.9-next.2
  - @devtools/backend-common@0.20.1-next.2
  - @devtools/plugin-search-backend-node@1.2.13-next.2
  - @devtools/backend-tasks@0.5.14-next.2

## 0.1.2-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.20.1-next.1
  - @devtools/config@1.1.1
  - @devtools/backend-tasks@0.5.14-next.1
  - @devtools/plugin-search-backend-node@1.2.13-next.1
  - @devtools/backend-plugin-api@0.6.9-next.1
  - @devtools/plugin-search-common@1.2.9

## 0.1.2-next.0

### Patch Changes

- 2e6c56b: Update wording to show that the backend system no longer is in alpha
- Updated dependencies
  - @devtools/backend-common@0.20.1-next.0
  - @devtools/backend-plugin-api@0.6.9-next.0
  - @devtools/backend-tasks@0.5.14-next.0
  - @devtools/config@1.1.1
  - @devtools/plugin-search-backend-node@1.2.13-next.0
  - @devtools/plugin-search-common@1.2.9

## 0.1.1

### Patch Changes

- cc4228e: Switched module ID to use kebab-case.
- Updated dependencies
  - @devtools/backend-common@0.20.0
  - @devtools/backend-tasks@0.5.13
  - @devtools/plugin-search-backend-node@1.2.12
  - @devtools/backend-plugin-api@0.6.8
  - @devtools/config@1.1.1
  - @devtools/plugin-search-common@1.2.9

## 0.1.1-next.3

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.20.0-next.3
  - @devtools/backend-plugin-api@0.6.8-next.3
  - @devtools/backend-tasks@0.5.13-next.3
  - @devtools/config@1.1.1
  - @devtools/plugin-search-backend-node@1.2.12-next.3
  - @devtools/plugin-search-common@1.2.8

## 0.1.1-next.2

### Patch Changes

- cc4228e: Switched module ID to use kebab-case.
- Updated dependencies
  - @devtools/backend-common@0.20.0-next.2
  - @devtools/backend-plugin-api@0.6.8-next.2
  - @devtools/backend-tasks@0.5.13-next.2
  - @devtools/config@1.1.1
  - @devtools/plugin-search-backend-node@1.2.12-next.2
  - @devtools/plugin-search-common@1.2.8

## 0.1.1-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.20.0-next.1
  - @devtools/backend-plugin-api@0.6.8-next.1
  - @devtools/backend-tasks@0.5.13-next.1
  - @devtools/config@1.1.1
  - @devtools/plugin-search-backend-node@1.2.12-next.1
  - @devtools/plugin-search-common@1.2.8

## 0.1.1-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.20.0-next.0
  - @devtools/backend-tasks@0.5.13-next.0
  - @devtools/plugin-search-backend-node@1.2.12-next.0
  - @devtools/backend-plugin-api@0.6.8-next.0
  - @devtools/config@1.1.1
  - @devtools/plugin-search-common@1.2.8

## 0.1.0

### Minor Changes

- 46f0f1700e: Extract a package for the Stack Overflow new backend system plugin.

### Patch Changes

- Updated dependencies
  - @devtools/plugin-search-backend-node@1.2.11
  - @devtools/backend-common@0.19.9
  - @devtools/backend-plugin-api@0.6.7
  - @devtools/backend-tasks@0.5.12
  - @devtools/config@1.1.1
  - @devtools/plugin-search-common@1.2.8

## 0.1.0-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.6.7-next.2
  - @devtools/backend-common@0.19.9-next.2
  - @devtools/backend-tasks@0.5.12-next.2
  - @devtools/plugin-search-backend-node@1.2.11-next.2

## 0.1.0-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.19.9-next.1
  - @devtools/backend-tasks@0.5.12-next.1
  - @devtools/plugin-search-backend-node@1.2.11-next.1
  - @devtools/backend-plugin-api@0.6.7-next.1
  - @devtools/config@1.1.1
  - @devtools/plugin-search-common@1.2.7

## 0.1.0-next.0

### Minor Changes

- 46f0f1700e: Extract a package for the Stack Overflow new backend system plugin.

### Patch Changes

- Updated dependencies
  - @devtools/plugin-search-backend-node@1.2.11-next.0
  - @devtools/backend-common@0.19.9-next.0
  - @devtools/backend-plugin-api@0.6.7-next.0
  - @devtools/backend-tasks@0.5.12-next.0
  - @devtools/config@1.1.1
  - @devtools/plugin-search-common@1.2.7
