# @devtools/plugin-scaffolder-backend-module-confluence-to-markdown

## 0.3.5-next.0

### Patch Changes

- Updated dependencies
  - @devtools/plugin-scaffolder-node@0.6.3-next.0
  - @devtools/backend-plugin-api@1.1.1-next.0
  - @devtools/config@1.3.1
  - @devtools/errors@1.2.6
  - @devtools/integration@1.16.0

## 0.3.4

### Patch Changes

- 5c9cc05: Use native fetch instead of node-fetch
- Updated dependencies
  - @devtools/integration@1.16.0
  - @devtools/backend-plugin-api@1.1.0
  - @devtools/plugin-scaffolder-node@0.6.2
  - @devtools/errors@1.2.6
  - @devtools/config@1.3.1

## 0.3.4-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@1.1.0-next.2
  - @devtools/errors@1.2.6-next.0
  - @devtools/plugin-scaffolder-node@0.6.2-next.2
  - @devtools/config@1.3.1-next.0
  - @devtools/integration@1.16.0-next.1

## 0.3.4-next.1

### Patch Changes

- 5c9cc05: Use native fetch instead of node-fetch
- Updated dependencies
  - @devtools/plugin-scaffolder-node@0.6.2-next.1
  - @devtools/backend-plugin-api@1.1.0-next.1
  - @devtools/config@1.3.0
  - @devtools/errors@1.2.5
  - @devtools/integration@1.16.0-next.0

## 0.3.3-next.0

### Patch Changes

- Updated dependencies
  - @devtools/integration@1.16.0-next.0
  - @devtools/backend-plugin-api@1.0.3-next.0
  - @devtools/plugin-scaffolder-node@0.6.1-next.0
  - @devtools/config@1.3.0
  - @devtools/errors@1.2.5

## 0.3.2

### Patch Changes

- Updated dependencies
  - @devtools/config@1.3.0
  - @devtools/backend-plugin-api@1.0.2
  - @devtools/plugin-scaffolder-node@0.6.0
  - @devtools/errors@1.2.5
  - @devtools/integration@1.15.2

## 0.3.2-next.3

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@1.0.2-next.2
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/integration@1.15.1
  - @devtools/plugin-scaffolder-node@0.5.1-next.3

## 0.3.2-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@1.0.2-next.2
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/integration@1.15.1
  - @devtools/plugin-scaffolder-node@0.5.1-next.2

## 0.3.2-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@1.0.2-next.1
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/integration@1.15.1
  - @devtools/plugin-scaffolder-node@0.5.1-next.1

## 0.3.2-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@1.0.2-next.0
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/integration@1.15.1
  - @devtools/plugin-scaffolder-node@0.5.1-next.0

## 0.3.1

### Patch Changes

- bc71718: Updated installation instructions in README to not include `/alpha`.
- 094eaa3: Remove references to in-repo backend-common
- 720a2f9: Updated dependency `git-url-parse` to `^15.0.0`.
- Updated dependencies
  - @devtools/plugin-scaffolder-node@0.5.0
  - @devtools/integration@1.15.1
  - @devtools/backend-plugin-api@1.0.1
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4

## 0.3.1-next.2

### Patch Changes

- 720a2f9: Updated dependency `git-url-parse` to `^15.0.0`.
- Updated dependencies
  - @devtools/integration@1.15.1-next.1
  - @devtools/plugin-scaffolder-node@0.5.0-next.2
  - @devtools/backend-plugin-api@1.0.1-next.1
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4

## 0.3.1-next.1

### Patch Changes

- Updated dependencies
  - @devtools/integration@1.15.1-next.0
  - @devtools/backend-plugin-api@1.0.1-next.0
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/plugin-scaffolder-node@0.5.0-next.1

## 0.3.1-next.0

### Patch Changes

- 094eaa3: Remove references to in-repo backend-common
- Updated dependencies
  - @devtools/plugin-scaffolder-node@0.5.0-next.0
  - @devtools/backend-plugin-api@1.0.1-next.0
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/integration@1.15.0

## 0.3.0

### Minor Changes

- d425fc4: **BREAKING**: The return values from `createBackendPlugin`, `createBackendModule`, and `createServiceFactory` are now simply `BackendFeature` and `ServiceFactory`, instead of the previously deprecated form of a function that returns them. For this reason, `createServiceFactory` also no longer accepts the callback form where you provide direct options to the service. This also affects all `coreServices.*` service refs.

  This may in particular affect tests; if you were effectively doing `createBackendModule({...})()` (note the parentheses), you can now remove those extra parentheses at the end. You may encounter cases of this in your `packages/backend/src/index.ts` too, where you add plugins, modules, and services. If you were using `createServiceFactory` with a function as its argument for the purpose of passing in options, this pattern has been deprecated for a while and is no longer supported. You may want to explore the new multiton patterns to achieve your goals, or moving settings to app-config.

  As part of this change, the `IdentityFactoryOptions` type was removed, and can no longer be used to tweak that service. The identity service was also deprecated some time ago, and you will want to [migrate to the new auth system](https://devtools.khulnasoft.com/docs/tutorials/auth-service-migration) if you still rely on it.

### Patch Changes

- 5d1670f: Update README installation instructions
- Updated dependencies
  - @devtools/backend-common@0.25.0
  - @devtools/backend-plugin-api@1.0.0
  - @devtools/integration@1.15.0
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/plugin-scaffolder-node@0.4.11

## 0.3.0-next.2

### Patch Changes

- 5d1670f: Update README installation instructions
- Updated dependencies
  - @devtools/backend-common@0.25.0-next.2
  - @devtools/backend-plugin-api@1.0.0-next.2
  - @devtools/integration@1.15.0-next.0
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/plugin-scaffolder-node@0.4.11-next.2

## 0.3.0-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.25.0-next.1
  - @devtools/backend-plugin-api@0.9.0-next.1
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/integration@1.14.0
  - @devtools/plugin-scaffolder-node@0.4.11-next.1

## 0.3.0-next.0

### Minor Changes

- d425fc4: **BREAKING**: The return values from `createBackendPlugin`, `createBackendModule`, and `createServiceFactory` are now simply `BackendFeature` and `ServiceFactory`, instead of the previously deprecated form of a function that returns them. For this reason, `createServiceFactory` also no longer accepts the callback form where you provide direct options to the service. This also affects all `coreServices.*` service refs.

  This may in particular affect tests; if you were effectively doing `createBackendModule({...})()` (note the parentheses), you can now remove those extra parentheses at the end. You may encounter cases of this in your `packages/backend/src/index.ts` too, where you add plugins, modules, and services. If you were using `createServiceFactory` with a function as its argument for the purpose of passing in options, this pattern has been deprecated for a while and is no longer supported. You may want to explore the new multiton patterns to achieve your goals, or moving settings to app-config.

  As part of this change, the `IdentityFactoryOptions` type was removed, and can no longer be used to tweak that service. The identity service was also deprecated some time ago, and you will want to [migrate to the new auth system](https://devtools.khulnasoft.com/docs/tutorials/auth-service-migration) if you still rely on it.

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.9.0-next.0
  - @devtools/backend-common@0.25.0-next.0
  - @devtools/plugin-scaffolder-node@0.4.11-next.0
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/integration@1.14.0

## 0.2.24

### Patch Changes

- 389f5a4: Update deprecated url-reader-related imports.
- 93095ee: Make sure node-fetch is version 2.7.0 or greater
- Updated dependencies
  - @devtools/backend-plugin-api@0.8.0
  - @devtools/backend-common@0.24.0
  - @devtools/plugin-scaffolder-node@0.4.9
  - @devtools/integration@1.14.0
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4

## 0.2.24-next.3

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.8.0-next.3
  - @devtools/backend-common@0.23.4-next.3
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/integration@1.14.0-next.0
  - @devtools/plugin-scaffolder-node@0.4.9-next.3

## 0.2.24-next.2

### Patch Changes

- 93095ee: Make sure node-fetch is version 2.7.0 or greater
- Updated dependencies
  - @devtools/backend-plugin-api@0.8.0-next.2
  - @devtools/plugin-scaffolder-node@0.4.9-next.2
  - @devtools/backend-common@0.23.4-next.2
  - @devtools/integration@1.14.0-next.0
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4

## 0.2.24-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.7.1-next.1
  - @devtools/backend-common@0.23.4-next.1
  - @devtools/integration@1.14.0-next.0
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/plugin-scaffolder-node@0.4.9-next.1

## 0.2.24-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.23.4-next.0
  - @devtools/integration@1.14.0-next.0
  - @devtools/backend-plugin-api@0.7.1-next.0
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/plugin-scaffolder-node@0.4.9-next.0

## 0.2.23

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.7.0
  - @devtools/backend-common@0.23.3
  - @devtools/integration@1.13.0
  - @devtools/plugin-scaffolder-node@0.4.8
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4

## 0.2.23-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.23.3-next.1
  - @devtools/backend-plugin-api@0.6.22-next.1
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/integration@1.13.0-next.0
  - @devtools/plugin-scaffolder-node@0.4.8-next.1

## 0.2.22-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.6.21-next.0
  - @devtools/backend-common@0.23.2-next.0
  - @devtools/integration@1.13.0-next.0
  - @devtools/plugin-scaffolder-node@0.4.7-next.0
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4

## 0.2.20

### Patch Changes

- 78a0b08: Internal refactor to handle `BackendFeature` contract change.
- d44a20a: Added additional plugin metadata to `package.json`.
- Updated dependencies
  - @devtools/backend-common@0.23.0
  - @devtools/backend-plugin-api@0.6.19
  - @devtools/integration@1.12.0
  - @devtools/plugin-scaffolder-node@0.4.5
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4

## 0.2.20-next.3

### Patch Changes

- d44a20a: Added additional plugin metadata to `package.json`.
- Updated dependencies
  - @devtools/backend-plugin-api@0.6.19-next.3
  - @devtools/integration@1.12.0-next.1
  - @devtools/plugin-scaffolder-node@0.4.5-next.3
  - @devtools/backend-common@0.23.0-next.3
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4

## 0.2.20-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.6.19-next.2
  - @devtools/backend-common@0.23.0-next.2
  - @devtools/integration@1.12.0-next.0
  - @devtools/plugin-scaffolder-node@0.4.5-next.2
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4

## 0.2.20-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.6.19-next.1
  - @devtools/backend-common@0.23.0-next.1
  - @devtools/plugin-scaffolder-node@0.4.5-next.1

## 0.2.20-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.22.1-next.0
  - @devtools/backend-plugin-api@0.6.19-next.0
  - @devtools/plugin-scaffolder-node@0.4.5-next.0
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/integration@1.11.0

## 0.2.19

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.22.0
  - @devtools/backend-plugin-api@0.6.18
  - @devtools/plugin-scaffolder-node@0.4.4
  - @devtools/integration@1.11.0

## 0.2.19-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.22.0-next.2
  - @devtools/plugin-scaffolder-node@0.4.4-next.2
  - @devtools/integration@1.11.0-next.0

## 0.2.19-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.22.0-next.1
  - @devtools/plugin-scaffolder-node@0.4.4-next.1
  - @devtools/backend-plugin-api@0.6.18-next.1

## 0.2.19-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.21.8-next.0
  - @devtools/backend-plugin-api@0.6.18-next.0
  - @devtools/plugin-scaffolder-node@0.4.4-next.0
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/integration@1.10.0

## 0.2.18

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.21.7
  - @devtools/backend-plugin-api@0.6.17
  - @devtools/integration@1.10.0
  - @devtools/plugin-scaffolder-node@0.4.3
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4

## 0.2.18-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.21.7-next.1
  - @devtools/backend-plugin-api@0.6.17-next.1
  - @devtools/plugin-scaffolder-node@0.4.3-next.1
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/integration@1.10.0-next.0

## 0.2.18-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.21.7-next.0
  - @devtools/integration@1.10.0-next.0
  - @devtools/backend-plugin-api@0.6.17-next.0
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/plugin-scaffolder-node@0.4.3-next.0

## 0.2.17

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.21.6
  - @devtools/backend-plugin-api@0.6.16
  - @devtools/plugin-scaffolder-node@0.4.2
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/integration@1.9.1

## 0.2.16

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.21.5
  - @devtools/plugin-scaffolder-node@0.4.1
  - @devtools/backend-plugin-api@0.6.15
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/integration@1.9.1

## 0.2.15

### Patch Changes

- f44589d: Introduced `createMockActionContext` to unify the way of creating scaffolder mock context.

  It will help to maintain tests in a long run during structural changes of action context.

- Updated dependencies
  - @devtools/plugin-scaffolder-node@0.4.0
  - @devtools/backend-common@0.21.4
  - @devtools/integration@1.9.1
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/backend-plugin-api@0.6.14

## 0.2.15-next.2

### Patch Changes

- Updated dependencies
  - @devtools/plugin-scaffolder-node@0.4.0-next.2
  - @devtools/integration@1.9.1-next.2
  - @devtools/backend-common@0.21.4-next.2
  - @devtools/backend-plugin-api@0.6.14-next.2
  - @devtools/config@1.2.0-next.1
  - @devtools/errors@1.2.4-next.0

## 0.2.15-next.1

### Patch Changes

- Updated dependencies
  - @devtools/config@1.2.0-next.1
  - @devtools/plugin-scaffolder-node@0.4.0-next.1
  - @devtools/backend-common@0.21.4-next.1
  - @devtools/backend-plugin-api@0.6.14-next.1
  - @devtools/integration@1.9.1-next.1
  - @devtools/errors@1.2.4-next.0

## 0.2.14-next.0

### Patch Changes

- f44589d: Introduced `createMockActionContext` to unify the way of creating scaffolder mock context.

  It will help to maintain tests in a long run during structural changes of action context.

- Updated dependencies
  - @devtools/backend-common@0.21.3-next.0
  - @devtools/errors@1.2.4-next.0
  - @devtools/plugin-scaffolder-node@0.3.3-next.0
  - @devtools/backend-plugin-api@0.6.13-next.0
  - @devtools/config@1.1.2-next.0
  - @devtools/integration@1.9.1-next.0

## 0.2.11

### Patch Changes

- e9a5228: Exporting a default module for the new Backend System
- 9aac2b0: Use `--cwd` as the first `yarn` argument
- 6bb6f3e: Updated dependency `fs-extra` to `^11.2.0`.
  Updated dependency `@types/fs-extra` to `^11.0.0`.
- 1cae748: Updated dependency `git-url-parse` to `^14.0.0`.
- Updated dependencies
  - @devtools/backend-common@0.21.0
  - @devtools/backend-plugin-api@0.6.10
  - @devtools/integration@1.9.0
  - @devtools/plugin-scaffolder-node@0.3.0
  - @devtools/config@1.1.1
  - @devtools/errors@1.2.3

## 0.2.11-next.3

### Patch Changes

- 1cae748: Updated dependency `git-url-parse` to `^14.0.0`.
- Updated dependencies
  - @devtools/backend-common@0.21.0-next.3
  - @devtools/integration@1.9.0-next.1
  - @devtools/plugin-scaffolder-node@0.3.0-next.3
  - @devtools/backend-plugin-api@0.6.10-next.3
  - @devtools/config@1.1.1
  - @devtools/errors@1.2.3

## 0.2.11-next.2

### Patch Changes

- 9aac2b0: Use `--cwd` as the first `yarn` argument
- Updated dependencies
  - @devtools/backend-common@0.21.0-next.2
  - @devtools/backend-plugin-api@0.6.10-next.2
  - @devtools/plugin-scaffolder-node@0.3.0-next.2
  - @devtools/config@1.1.1
  - @devtools/errors@1.2.3
  - @devtools/integration@1.9.0-next.0

## 0.2.11-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.6.10-next.1
  - @devtools/backend-common@0.21.0-next.1
  - @devtools/integration@1.9.0-next.0
  - @devtools/plugin-scaffolder-node@0.3.0-next.1
  - @devtools/config@1.1.1
  - @devtools/errors@1.2.3

## 0.2.11-next.0

### Patch Changes

- e9a5228: Exporting a default module for the new Backend System
- Updated dependencies
  - @devtools/backend-common@0.21.0-next.0
  - @devtools/plugin-scaffolder-node@0.3.0-next.0
  - @devtools/backend-plugin-api@0.6.10-next.0
  - @devtools/config@1.1.1
  - @devtools/errors@1.2.3
  - @devtools/integration@1.8.0

## 0.2.10

### Patch Changes

- 7acbb5a: Removed `mock-fs` dev dependency.
- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @devtools/backend-common@0.20.1
  - @devtools/plugin-scaffolder-node@0.2.10
  - @devtools/config@1.1.1
  - @devtools/errors@1.2.3
  - @devtools/integration@1.8.0

## 0.2.10-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.20.1-next.2
  - @devtools/plugin-scaffolder-node@0.2.10-next.2

## 0.2.10-next.1

### Patch Changes

- 7acbb5a: Removed `mock-fs` dev dependency.
- Updated dependencies
  - @devtools/backend-common@0.20.1-next.1
  - @devtools/integration@1.8.0
  - @devtools/config@1.1.1
  - @devtools/plugin-scaffolder-node@0.2.10-next.1
  - @devtools/errors@1.2.3

## 0.2.10-next.0

### Patch Changes

- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @devtools/backend-common@0.20.1-next.0
  - @devtools/config@1.1.1
  - @devtools/errors@1.2.3
  - @devtools/integration@1.8.0
  - @devtools/plugin-scaffolder-node@0.2.10-next.0

## 0.2.9

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.20.0
  - @devtools/plugin-scaffolder-node@0.2.9
  - @devtools/integration@1.8.0
  - @devtools/config@1.1.1
  - @devtools/errors@1.2.3
  - @devtools/types@1.1.1

## 0.2.9-next.3

### Patch Changes

- Updated dependencies
  - @devtools/plugin-scaffolder-node@0.2.9-next.3
  - @devtools/backend-common@0.20.0-next.3
  - @devtools/config@1.1.1
  - @devtools/errors@1.2.3
  - @devtools/integration@1.8.0-next.1
  - @devtools/types@1.1.1

## 0.2.9-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.20.0-next.2
  - @devtools/config@1.1.1
  - @devtools/errors@1.2.3
  - @devtools/integration@1.8.0-next.1
  - @devtools/types@1.1.1
  - @devtools/plugin-scaffolder-node@0.2.9-next.2

## 0.2.9-next.1

### Patch Changes

- Updated dependencies
  - @devtools/integration@1.8.0-next.1
  - @devtools/backend-common@0.20.0-next.1
  - @devtools/config@1.1.1
  - @devtools/errors@1.2.3
  - @devtools/types@1.1.1
  - @devtools/plugin-scaffolder-node@0.2.9-next.1

## 0.2.9-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.20.0-next.0
  - @devtools/integration@1.8.0-next.0
  - @devtools/plugin-scaffolder-node@0.2.9-next.0
  - @devtools/config@1.1.1
  - @devtools/errors@1.2.3
  - @devtools/types@1.1.1

## 0.2.8

### Patch Changes

- Updated dependencies
  - @devtools/integration@1.7.2
  - @devtools/backend-common@0.19.9
  - @devtools/plugin-scaffolder-node@0.2.8
  - @devtools/config@1.1.1
  - @devtools/errors@1.2.3
  - @devtools/types@1.1.1

## 0.2.8-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.19.9-next.2
  - @devtools/plugin-scaffolder-node@0.2.8-next.2

## 0.2.8-next.1

### Patch Changes

- Updated dependencies
  - @devtools/integration@1.7.2-next.0
  - @devtools/backend-common@0.19.9-next.1
  - @devtools/plugin-scaffolder-node@0.2.8-next.1
  - @devtools/config@1.1.1
  - @devtools/errors@1.2.3
  - @devtools/types@1.1.1

## 0.2.8-next.0

### Patch Changes

- Updated dependencies
  - @devtools/plugin-scaffolder-node@0.2.8-next.0
  - @devtools/backend-common@0.19.9-next.0
  - @devtools/integration@1.7.1
  - @devtools/config@1.1.1
  - @devtools/errors@1.2.3
  - @devtools/types@1.1.1

## 0.2.7

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.19.8
  - @devtools/integration@1.7.1
  - @devtools/errors@1.2.3
  - @devtools/plugin-scaffolder-node@0.2.6
  - @devtools/config@1.1.1
  - @devtools/types@1.1.1

## 0.2.7-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.19.8-next.2
  - @devtools/integration@1.7.1-next.1
  - @devtools/errors@1.2.3-next.0
  - @devtools/plugin-scaffolder-node@0.2.6-next.2
  - @devtools/config@1.1.1-next.0
  - @devtools/types@1.1.1

## 0.2.6-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.19.7-next.1
  - @devtools/plugin-scaffolder-node@0.2.5-next.1
  - @devtools/config@1.1.0
  - @devtools/errors@1.2.2
  - @devtools/integration@1.7.1-next.0
  - @devtools/types@1.1.1

## 0.2.6-next.0

### Patch Changes

- Updated dependencies
  - @devtools/integration@1.7.1-next.0
  - @devtools/backend-common@0.19.7-next.0
  - @devtools/plugin-scaffolder-node@0.2.5-next.0
  - @devtools/config@1.1.0
  - @devtools/errors@1.2.2
  - @devtools/types@1.1.1

## 0.2.4

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.19.5
  - @devtools/config@1.1.0
  - @devtools/errors@1.2.2
  - @devtools/integration@1.7.0
  - @devtools/types@1.1.1
  - @devtools/plugin-scaffolder-node@0.2.3

## 0.2.4-next.3

### Patch Changes

- Updated dependencies
  - @devtools/config@1.1.0-next.2
  - @devtools/errors@1.2.2-next.0
  - @devtools/integration@1.7.0-next.3
  - @devtools/types@1.1.1-next.0
  - @devtools/backend-common@0.19.5-next.3
  - @devtools/plugin-scaffolder-node@0.2.3-next.3

## 0.2.4-next.2

### Patch Changes

- Updated dependencies
  - @devtools/config@1.1.0-next.1
  - @devtools/backend-common@0.19.5-next.2
  - @devtools/integration@1.7.0-next.2
  - @devtools/plugin-scaffolder-node@0.2.3-next.2
  - @devtools/errors@1.2.1
  - @devtools/types@1.1.0

## 0.2.4-next.1

### Patch Changes

- Updated dependencies
  - @devtools/config@1.1.0-next.0
  - @devtools/integration@1.7.0-next.1
  - @devtools/backend-common@0.19.5-next.1
  - @devtools/plugin-scaffolder-node@0.2.3-next.1
  - @devtools/errors@1.2.1
  - @devtools/types@1.1.0

## 0.2.3-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.19.4-next.0
  - @devtools/integration@1.7.0-next.0
  - @devtools/config@1.0.8
  - @devtools/errors@1.2.1
  - @devtools/types@1.1.0
  - @devtools/plugin-scaffolder-node@0.2.2-next.0

## 0.2.1

### Patch Changes

- 0a9b3b14e904: Added example for the `confluence:transform:markdown` that will show in the installed actions list
- 12a8c94eda8d: Add package repository and homepage metadata
- 0d347efc8f18: Use `fetchContents` directly instead of a `fetchPlainAction`
- c186c631b429: Import helpers from the node package instead of the backend package
- Updated dependencies
  - @devtools/backend-common@0.19.2
  - @devtools/plugin-scaffolder-node@0.2.0
  - @devtools/integration@1.6.0
  - @devtools/config@1.0.8
  - @devtools/errors@1.2.1
  - @devtools/types@1.1.0

## 0.2.1-next.2

### Patch Changes

- Updated dependencies
  - @devtools/plugin-scaffolder-node@0.1.6-next.2
  - @devtools/backend-common@0.19.2-next.2

## 0.2.1-next.1

### Patch Changes

- 12a8c94eda8d: Add package repository and homepage metadata
- 0d347efc8f18: Use `fetchContents` directly instead of a `fetchPlainAction`
- c186c631b429: Import helpers from the node package instead of the backend package
- Updated dependencies
  - @devtools/backend-common@0.19.2-next.1
  - @devtools/plugin-scaffolder-node@0.1.6-next.1
  - @devtools/integration@1.5.1
  - @devtools/config@1.0.8
  - @devtools/errors@1.2.1
  - @devtools/types@1.1.0

## 0.2.1-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.19.2-next.0
  - @devtools/config@1.0.8
  - @devtools/errors@1.2.1
  - @devtools/integration@1.5.1
  - @devtools/types@1.1.0
  - @devtools/plugin-scaffolder-backend@1.15.2-next.0
  - @devtools/plugin-scaffolder-node@0.1.6-next.0

## 0.2.0

### Minor Changes

- 0a7e7c5d0c04: **BREAKING**

  This change updates the configuration of the confluence-to-markdown action so that it does not conflict with other confluence plguins. Currently many plugins make use of the `confluence.auth` configuration. However, only the confluence-to-markdown action uses the `confluence.auth` as a string. This change updates it so that `confluence.auth` is an object.

  ## Required Changes

  Below are examples for updating `bearer`, `basic`, and `userpass` implementations.

  For `bearer`:
  Before:

  ```yaml
  confluence:
    baseUrl: 'https://confluence.example.com'
    auth: 'bearer'
    token: '${CONFLUENCE_TOKEN}'
  ```

  After:

  ```yaml
  confluence:
    baseUrl: 'https://confluence.example.com'
    auth:
      type: 'bearer'
      token: '${CONFLUENCE_TOKEN}'
  ```

  For `basic`:

  Before:

  ```yaml
  confluence:
    baseUrl: 'https://confluence.example.com'
    auth: 'basic'
    token: '${CONFLUENCE_TOKEN}'
    email: 'example@company.org'
  ```

  After:

  ```yaml
  confluence:
    baseUrl: 'https://confluence.example.com'
    auth:
      type: 'basic'
      token: '${CONFLUENCE_TOKEN}'
      email: 'example@company.org'
  ```

  For `userpass`
  Before:

  ```yaml
  confluence:
    baseUrl: 'https://confluence.example.com'
    auth: 'userpass'
    username: 'your-username'
    password: 'your-password'
  ```

  After:

  ```yaml
  confluence:
    baseUrl: 'https://confluence.example.com'
    auth:
      type: 'userpass'
      username: 'your-username'
      password: 'your-password'
  ```

### Patch Changes

- Updated dependencies
  - @devtools/errors@1.2.1
  - @devtools/backend-common@0.19.1
  - @devtools/plugin-scaffolder-backend@1.15.1
  - @devtools/config@1.0.8
  - @devtools/integration@1.5.1
  - @devtools/types@1.1.0
  - @devtools/plugin-scaffolder-node@0.1.5

## 0.2.0-next.1

### Minor Changes

- 0a7e7c5d0c04: **BREAKING**

  This change updates the configuration of the confluence-to-markdown action so that it does not conflict with other confluence plguins. Currently many plugins make use of the `confluence.auth` configuration. However, only the confluence-to-markdown action uses the `confluence.auth` as a string. This change updates it so that `confluence.auth` is an object.

  ## Required Changes

  Below are examples for updating `bearer`, `basic`, and `userpass` implementations.

  For `bearer`:
  Before:

  ```yaml
  confluence:
    baseUrl: 'https://confluence.example.com'
    auth: 'bearer'
    token: '${CONFLUENCE_TOKEN}'
  ```

  After:

  ```yaml
  confluence:
    baseUrl: 'https://confluence.example.com'
    auth:
      type: 'bearer'
      token: '${CONFLUENCE_TOKEN}'
  ```

  For `basic`:

  Before:

  ```yaml
  confluence:
    baseUrl: 'https://confluence.example.com'
    auth: 'basic'
    token: '${CONFLUENCE_TOKEN}'
    email: 'example@company.org'
  ```

  After:

  ```yaml
  confluence:
    baseUrl: 'https://confluence.example.com'
    auth:
      type: 'basic'
      token: '${CONFLUENCE_TOKEN}'
      email: 'example@company.org'
  ```

  For `userpass`
  Before:

  ```yaml
  confluence:
    baseUrl: 'https://confluence.example.com'
    auth: 'userpass'
    username: 'your-username'
    password: 'your-password'
  ```

  After:

  ```yaml
  confluence:
    baseUrl: 'https://confluence.example.com'
    auth:
      type: 'userpass'
      username: 'your-username'
      password: 'your-password'
  ```

### Patch Changes

- Updated dependencies
  - @devtools/plugin-scaffolder-backend@1.15.1-next.1
  - @devtools/backend-common@0.19.1-next.0
  - @devtools/config@1.0.8
  - @devtools/errors@1.2.1-next.0
  - @devtools/integration@1.5.1-next.0
  - @devtools/types@1.1.0
  - @devtools/plugin-scaffolder-node@0.1.5-next.0

## 0.1.4-next.0

### Patch Changes

- Updated dependencies
  - @devtools/errors@1.2.1-next.0
  - @devtools/backend-common@0.19.1-next.0
  - @devtools/config@1.0.8
  - @devtools/integration@1.5.1-next.0
  - @devtools/types@1.1.0
  - @devtools/plugin-scaffolder-backend@1.15.1-next.0
  - @devtools/plugin-scaffolder-node@0.1.5-next.0

## 0.1.3

### Patch Changes

- c59a4b2b9e0a: Added support for Confluence Cloud to the `confluence:transform:markdown` action in addition to the existing Confluence Server support, view the [README](https://github.com/khulnasoft/devtools/tree/master/plugins/scaffolder-backend-module-confluence-to-markdown) for more details
- Updated dependencies
  - @devtools/backend-common@0.19.0
  - @devtools/plugin-scaffolder-backend@1.15.0
  - @devtools/types@1.1.0
  - @devtools/integration@1.5.0
  - @devtools/errors@1.2.0
  - @devtools/config@1.0.8
  - @devtools/plugin-scaffolder-node@0.1.4

## 0.1.3-next.3

### Patch Changes

- Updated dependencies
  - @devtools/plugin-scaffolder-backend@1.15.0-next.3
  - @devtools/backend-common@0.19.0-next.2
  - @devtools/config@1.0.7
  - @devtools/errors@1.2.0-next.0
  - @devtools/integration@1.5.0-next.0
  - @devtools/types@1.0.2
  - @devtools/plugin-scaffolder-node@0.1.4-next.2

## 0.1.3-next.2

### Patch Changes

- Updated dependencies
  - @devtools/plugin-scaffolder-backend@1.15.0-next.2
  - @devtools/config@1.0.7

## 0.1.3-next.1

### Patch Changes

- c59a4b2b9e0a: Added support for Confluence Cloud to the `confluence:transform:markdown` action in addition to the existing Confluence Server support, view the [README](https://github.com/khulnasoft/devtools/tree/master/plugins/scaffolder-backend-module-confluence-to-markdown) for more details
- Updated dependencies
  - @devtools/backend-common@0.19.0-next.1
  - @devtools/integration@1.5.0-next.0
  - @devtools/errors@1.2.0-next.0
  - @devtools/plugin-scaffolder-backend@1.15.0-next.1
  - @devtools/plugin-scaffolder-node@0.1.4-next.1
  - @devtools/config@1.0.7
  - @devtools/types@1.0.2

## 0.1.3-next.0

### Patch Changes

- Updated dependencies
  - @devtools/plugin-scaffolder-backend@1.14.1-next.0
  - @devtools/backend-common@0.18.6-next.0
  - @devtools/integration@1.4.5
  - @devtools/config@1.0.7
  - @devtools/errors@1.1.5
  - @devtools/types@1.0.2
  - @devtools/plugin-scaffolder-node@0.1.4-next.0

## 0.1.2

### Patch Changes

- 7c116bcac7f: Fixed the way that some request errors are thrown
- Updated dependencies
  - @devtools/plugin-scaffolder-backend@1.14.0
  - @devtools/backend-common@0.18.5
  - @devtools/integration@1.4.5
  - @devtools/plugin-scaffolder-node@0.1.3
  - @devtools/config@1.0.7
  - @devtools/errors@1.1.5
  - @devtools/types@1.0.2

## 0.1.2-next.2

### Patch Changes

- Updated dependencies
  - @devtools/plugin-scaffolder-backend@1.13.2-next.2
  - @devtools/plugin-scaffolder-node@0.1.3-next.2
  - @devtools/config@1.0.7

## 0.1.2-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.18.5-next.1
  - @devtools/plugin-scaffolder-backend@1.13.2-next.1
  - @devtools/plugin-scaffolder-node@0.1.3-next.1
  - @devtools/config@1.0.7

## 0.1.2-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.18.5-next.0
  - @devtools/integration@1.4.5-next.0
  - @devtools/plugin-scaffolder-backend@1.13.2-next.0
  - @devtools/config@1.0.7
  - @devtools/errors@1.1.5
  - @devtools/types@1.0.2
  - @devtools/plugin-scaffolder-node@0.1.3-next.0

## 0.1.0

### Minor Changes

- 1b49a18bf8d: Created `confluence:transform:markdown` action for converting confluence docs to Markdown.

### Patch Changes

- e0c6e8b9c3c: Update peer dependencies
- Updated dependencies
  - @devtools/backend-common@0.18.4
  - @devtools/plugin-scaffolder-backend@1.13.0
  - @devtools/plugin-scaffolder-node@0.1.2
  - @devtools/integration@1.4.4
  - @devtools/config@1.0.7
  - @devtools/errors@1.1.5
  - @devtools/types@1.0.2

## 0.1.0-next.2

### Patch Changes

- Updated dependencies
  - @devtools/plugin-scaffolder-backend@1.13.0-next.3
  - @devtools/backend-common@0.18.4-next.2
  - @devtools/config@1.0.7
  - @devtools/errors@1.1.5
  - @devtools/integration@1.4.4-next.0
  - @devtools/types@1.0.2
  - @devtools/plugin-scaffolder-node@0.1.2-next.3

## 0.1.0-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.18.4-next.2
  - @devtools/plugin-scaffolder-node@0.1.2-next.2
  - @devtools/plugin-scaffolder-backend@1.13.0-next.2
  - @devtools/config@1.0.7
  - @devtools/errors@1.1.5
  - @devtools/integration@1.4.4-next.0
  - @devtools/types@1.0.2

## 0.1.0-next.0

### Minor Changes

- 1b49a18bf8d: Created `confluence:transform:markdown` action for converting confluence docs to Markdown.

### Patch Changes

- e0c6e8b9c3c: Update peer dependencies
- Updated dependencies
  - @devtools/plugin-scaffolder-backend@1.13.0-next.1
  - @devtools/plugin-scaffolder-node@0.1.2-next.1
  - @devtools/integration@1.4.4-next.0
  - @devtools/backend-common@0.18.4-next.1
  - @devtools/config@1.0.7
  - @devtools/errors@1.1.5
  - @devtools/types@1.0.2