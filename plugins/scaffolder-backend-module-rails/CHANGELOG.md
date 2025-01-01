# @devtools/plugin-scaffolder-backend-module-rails

## 0.5.5-next.0

### Patch Changes

- Updated dependencies
  - @devtools/plugin-scaffolder-node@0.6.3-next.0
  - @devtools/backend-plugin-api@1.1.1-next.0
  - @devtools/config@1.3.1
  - @devtools/errors@1.2.6
  - @devtools/integration@1.16.0
  - @devtools/types@1.2.0

## 0.5.4

### Patch Changes

- Updated dependencies
  - @devtools/integration@1.16.0
  - @devtools/backend-plugin-api@1.1.0
  - @devtools/plugin-scaffolder-node@0.6.2
  - @devtools/errors@1.2.6
  - @devtools/config@1.3.1
  - @devtools/types@1.2.0

## 0.5.4-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@1.1.0-next.2
  - @devtools/errors@1.2.6-next.0
  - @devtools/plugin-scaffolder-node@0.6.2-next.2
  - @devtools/config@1.3.1-next.0
  - @devtools/integration@1.16.0-next.1
  - @devtools/types@1.2.0

## 0.5.4-next.1

### Patch Changes

- Updated dependencies
  - @devtools/plugin-scaffolder-node@0.6.2-next.1
  - @devtools/backend-plugin-api@1.1.0-next.1
  - @devtools/config@1.3.0
  - @devtools/errors@1.2.5
  - @devtools/integration@1.16.0-next.0
  - @devtools/types@1.2.0

## 0.5.3-next.0

### Patch Changes

- Updated dependencies
  - @devtools/integration@1.16.0-next.0
  - @devtools/backend-plugin-api@1.0.3-next.0
  - @devtools/plugin-scaffolder-node@0.6.1-next.0
  - @devtools/config@1.3.0
  - @devtools/errors@1.2.5
  - @devtools/types@1.2.0

## 0.5.2

### Patch Changes

- 702f41d: Bumped dev dependencies `@types/node`
- Updated dependencies
  - @devtools/config@1.3.0
  - @devtools/types@1.2.0
  - @devtools/backend-plugin-api@1.0.2
  - @devtools/plugin-scaffolder-node@0.6.0
  - @devtools/errors@1.2.5
  - @devtools/integration@1.15.2

## 0.5.2-next.3

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@1.0.2-next.2
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/integration@1.15.1
  - @devtools/types@1.1.1
  - @devtools/plugin-scaffolder-node@0.5.1-next.3

## 0.5.2-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@1.0.2-next.2
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/integration@1.15.1
  - @devtools/types@1.1.1
  - @devtools/plugin-scaffolder-node@0.5.1-next.2

## 0.5.2-next.1

### Patch Changes

- 702f41d: Bumped dev dependencies `@types/node`
- Updated dependencies
  - @devtools/backend-plugin-api@1.0.2-next.1
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/integration@1.15.1
  - @devtools/types@1.1.1
  - @devtools/plugin-scaffolder-node@0.5.1-next.1

## 0.5.2-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@1.0.2-next.0
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/integration@1.15.1
  - @devtools/types@1.1.1
  - @devtools/plugin-scaffolder-node@0.5.1-next.0

## 0.5.1

### Patch Changes

- bc71718: Updated installation instructions in README to not include `/alpha`.
- 094eaa3: Remove references to in-repo backend-common
- Updated dependencies
  - @devtools/plugin-scaffolder-node@0.5.0
  - @devtools/integration@1.15.1
  - @devtools/backend-plugin-api@1.0.1
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1

## 0.5.1-next.2

### Patch Changes

- Updated dependencies
  - @devtools/integration@1.15.1-next.1
  - @devtools/plugin-scaffolder-node@0.5.0-next.2
  - @devtools/backend-plugin-api@1.0.1-next.1
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1

## 0.5.1-next.1

### Patch Changes

- Updated dependencies
  - @devtools/integration@1.15.1-next.0
  - @devtools/backend-plugin-api@1.0.1-next.0
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1
  - @devtools/plugin-scaffolder-node@0.5.0-next.1

## 0.5.1-next.0

### Patch Changes

- 094eaa3: Remove references to in-repo backend-common
- Updated dependencies
  - @devtools/plugin-scaffolder-node@0.5.0-next.0
  - @devtools/backend-plugin-api@1.0.1-next.0
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/integration@1.15.0
  - @devtools/types@1.1.1

## 0.5.0

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
  - @devtools/types@1.1.1
  - @devtools/plugin-scaffolder-node@0.4.11

## 0.5.0-next.2

### Patch Changes

- 5d1670f: Update README installation instructions
- Updated dependencies
  - @devtools/backend-common@0.25.0-next.2
  - @devtools/backend-plugin-api@1.0.0-next.2
  - @devtools/integration@1.15.0-next.0
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1
  - @devtools/plugin-scaffolder-node@0.4.11-next.2

## 0.5.0-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.25.0-next.1
  - @devtools/backend-plugin-api@0.9.0-next.1
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/integration@1.14.0
  - @devtools/types@1.1.1
  - @devtools/plugin-scaffolder-node@0.4.11-next.1

## 0.5.0-next.0

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
  - @devtools/types@1.1.1

## 0.4.40

### Patch Changes

- 389f5a4: Update deprecated url-reader-related imports.
- 449def7: Add examples for fetch:rails scaffolder action & improve related tests
- Updated dependencies
  - @devtools/backend-plugin-api@0.8.0
  - @devtools/backend-common@0.24.0
  - @devtools/plugin-scaffolder-node@0.4.9
  - @devtools/integration@1.14.0
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1

## 0.4.40-next.3

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.8.0-next.3
  - @devtools/backend-common@0.23.4-next.3
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/integration@1.14.0-next.0
  - @devtools/types@1.1.1
  - @devtools/plugin-scaffolder-node@0.4.9-next.3

## 0.4.40-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.8.0-next.2
  - @devtools/plugin-scaffolder-node@0.4.9-next.2
  - @devtools/backend-common@0.23.4-next.2
  - @devtools/integration@1.14.0-next.0
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1

## 0.4.40-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.7.1-next.1
  - @devtools/backend-common@0.23.4-next.1
  - @devtools/integration@1.14.0-next.0
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1
  - @devtools/plugin-scaffolder-node@0.4.9-next.1

## 0.4.40-next.0

### Patch Changes

- 449def7: Add examples for fetch:rails scaffolder action & improve related tests
- Updated dependencies
  - @devtools/backend-common@0.23.4-next.0
  - @devtools/integration@1.14.0-next.0
  - @devtools/backend-plugin-api@0.7.1-next.0
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1
  - @devtools/plugin-scaffolder-node@0.4.9-next.0

## 0.4.39

### Patch Changes

- 0ac124b: Updated configuration instructions
- Updated dependencies
  - @devtools/backend-plugin-api@0.7.0
  - @devtools/backend-common@0.23.3
  - @devtools/integration@1.13.0
  - @devtools/plugin-scaffolder-node@0.4.8
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1

## 0.4.39-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.23.3-next.1
  - @devtools/backend-plugin-api@0.6.22-next.1
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/integration@1.13.0-next.0
  - @devtools/types@1.1.1
  - @devtools/plugin-scaffolder-node@0.4.8-next.1

## 0.4.38-next.0

### Patch Changes

- 0ac124b: Updated configuration instructions
- Updated dependencies
  - @devtools/backend-plugin-api@0.6.21-next.0
  - @devtools/backend-common@0.23.2-next.0
  - @devtools/integration@1.13.0-next.0
  - @devtools/plugin-scaffolder-node@0.4.7-next.0
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1

## 0.4.36

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
  - @devtools/types@1.1.1

## 0.4.36-next.3

### Patch Changes

- d44a20a: Added additional plugin metadata to `package.json`.
- Updated dependencies
  - @devtools/backend-plugin-api@0.6.19-next.3
  - @devtools/integration@1.12.0-next.1
  - @devtools/plugin-scaffolder-node@0.4.5-next.3
  - @devtools/backend-common@0.23.0-next.3
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1

## 0.4.36-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.6.19-next.2
  - @devtools/backend-common@0.23.0-next.2
  - @devtools/integration@1.12.0-next.0
  - @devtools/plugin-scaffolder-node@0.4.5-next.2
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1

## 0.4.36-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.6.19-next.1
  - @devtools/backend-common@0.23.0-next.1
  - @devtools/plugin-scaffolder-node@0.4.5-next.1

## 0.4.36-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.22.1-next.0
  - @devtools/backend-plugin-api@0.6.19-next.0
  - @devtools/plugin-scaffolder-node@0.4.5-next.0
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/integration@1.11.0
  - @devtools/types@1.1.1

## 0.4.35

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.22.0
  - @devtools/backend-plugin-api@0.6.18
  - @devtools/plugin-scaffolder-node@0.4.4
  - @devtools/integration@1.11.0

## 0.4.35-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.22.0-next.2
  - @devtools/plugin-scaffolder-node@0.4.4-next.2
  - @devtools/integration@1.11.0-next.0

## 0.4.35-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.22.0-next.1
  - @devtools/plugin-scaffolder-node@0.4.4-next.1
  - @devtools/backend-plugin-api@0.6.18-next.1

## 0.4.35-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.21.8-next.0
  - @devtools/backend-plugin-api@0.6.18-next.0
  - @devtools/plugin-scaffolder-node@0.4.4-next.0
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/integration@1.10.0
  - @devtools/types@1.1.1

## 0.4.34

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.21.7
  - @devtools/backend-plugin-api@0.6.17
  - @devtools/integration@1.10.0
  - @devtools/plugin-scaffolder-node@0.4.3
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1

## 0.4.34-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.21.7-next.1
  - @devtools/backend-plugin-api@0.6.17-next.1
  - @devtools/plugin-scaffolder-node@0.4.3-next.1
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/integration@1.10.0-next.0
  - @devtools/types@1.1.1

## 0.4.34-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.21.7-next.0
  - @devtools/integration@1.10.0-next.0
  - @devtools/backend-plugin-api@0.6.17-next.0
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1
  - @devtools/plugin-scaffolder-node@0.4.3-next.0

## 0.4.33

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.21.6
  - @devtools/backend-plugin-api@0.6.16
  - @devtools/plugin-scaffolder-node@0.4.2
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/integration@1.9.1
  - @devtools/types@1.1.1

## 0.4.32

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.21.5
  - @devtools/plugin-scaffolder-node@0.4.1
  - @devtools/backend-plugin-api@0.6.15
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/integration@1.9.1
  - @devtools/types@1.1.1

## 0.4.31

### Patch Changes

- e9663a9: Move away from using `ctx.logStream`
- f44589d: Introduced `createMockActionContext` to unify the way of creating scaffolder mock context.

  It will help to maintain tests in a long run during structural changes of action context.

- Updated dependencies
  - @devtools/plugin-scaffolder-node@0.4.0
  - @devtools/backend-common@0.21.4
  - @devtools/integration@1.9.1
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/backend-plugin-api@0.6.14
  - @devtools/types@1.1.1

## 0.4.31-next.2

### Patch Changes

- e9663a9: Move away from using `ctx.logStream`
- Updated dependencies
  - @devtools/plugin-scaffolder-node@0.4.0-next.2
  - @devtools/integration@1.9.1-next.2
  - @devtools/backend-common@0.21.4-next.2
  - @devtools/backend-plugin-api@0.6.14-next.2
  - @devtools/config@1.2.0-next.1
  - @devtools/errors@1.2.4-next.0
  - @devtools/types@1.1.1

## 0.4.31-next.1

### Patch Changes

- Updated dependencies
  - @devtools/config@1.2.0-next.1
  - @devtools/plugin-scaffolder-node@0.4.0-next.1
  - @devtools/backend-common@0.21.4-next.1
  - @devtools/backend-plugin-api@0.6.14-next.1
  - @devtools/integration@1.9.1-next.1
  - @devtools/errors@1.2.4-next.0
  - @devtools/types@1.1.1

## 0.4.30-next.0

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
  - @devtools/types@1.1.1

## 0.4.27

### Patch Changes

- e9a5228: Make `containerRunner` argument optional
- e9a5228: Exporting a default module for the new Backend System
- 9aac2b0: Use `--cwd` as the first `yarn` argument
- 6bb6f3e: Updated dependency `fs-extra` to `^11.2.0`.
  Updated dependency `@types/fs-extra` to `^11.0.0`.
- Updated dependencies
  - @devtools/backend-common@0.21.0
  - @devtools/backend-plugin-api@0.6.10
  - @devtools/integration@1.9.0
  - @devtools/plugin-scaffolder-node@0.3.0
  - @devtools/config@1.1.1
  - @devtools/errors@1.2.3
  - @devtools/types@1.1.1

## 0.4.27-next.3

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.21.0-next.3
  - @devtools/integration@1.9.0-next.1
  - @devtools/plugin-scaffolder-node@0.3.0-next.3
  - @devtools/backend-plugin-api@0.6.10-next.3
  - @devtools/config@1.1.1
  - @devtools/errors@1.2.3
  - @devtools/types@1.1.1

## 0.4.27-next.2

### Patch Changes

- 9aac2b0: Use `--cwd` as the first `yarn` argument
- Updated dependencies
  - @devtools/backend-common@0.21.0-next.2
  - @devtools/backend-plugin-api@0.6.10-next.2
  - @devtools/plugin-scaffolder-node@0.3.0-next.2
  - @devtools/config@1.1.1
  - @devtools/errors@1.2.3
  - @devtools/integration@1.9.0-next.0
  - @devtools/types@1.1.1

## 0.4.27-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.6.10-next.1
  - @devtools/backend-common@0.21.0-next.1
  - @devtools/integration@1.9.0-next.0
  - @devtools/plugin-scaffolder-node@0.3.0-next.1
  - @devtools/config@1.1.1
  - @devtools/errors@1.2.3
  - @devtools/types@1.1.1

## 0.4.27-next.0

### Patch Changes

- e9a5228: Make `containerRunner` argument optional
- e9a5228: Exporting a default module for the new Backend System
- Updated dependencies
  - @devtools/backend-common@0.21.0-next.0
  - @devtools/plugin-scaffolder-node@0.3.0-next.0
  - @devtools/backend-plugin-api@0.6.10-next.0
  - @devtools/config@1.1.1
  - @devtools/errors@1.2.3
  - @devtools/integration@1.8.0
  - @devtools/types@1.1.1

## 0.4.26

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.20.1
  - @devtools/plugin-scaffolder-node@0.2.10
  - @devtools/config@1.1.1
  - @devtools/errors@1.2.3
  - @devtools/integration@1.8.0
  - @devtools/types@1.1.1

## 0.4.26-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.20.1-next.2
  - @devtools/plugin-scaffolder-node@0.2.10-next.2

## 0.4.26-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.20.1-next.1
  - @devtools/integration@1.8.0
  - @devtools/config@1.1.1
  - @devtools/plugin-scaffolder-node@0.2.10-next.1
  - @devtools/errors@1.2.3
  - @devtools/types@1.1.1

## 0.4.26-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.20.1-next.0
  - @devtools/config@1.1.1
  - @devtools/errors@1.2.3
  - @devtools/integration@1.8.0
  - @devtools/types@1.1.1
  - @devtools/plugin-scaffolder-node@0.2.10-next.0

## 0.4.25

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.20.0
  - @devtools/plugin-scaffolder-node@0.2.9
  - @devtools/integration@1.8.0
  - @devtools/config@1.1.1
  - @devtools/errors@1.2.3
  - @devtools/types@1.1.1

## 0.4.25-next.3

### Patch Changes

- Updated dependencies
  - @devtools/plugin-scaffolder-node@0.2.9-next.3
  - @devtools/backend-common@0.20.0-next.3
  - @devtools/config@1.1.1
  - @devtools/errors@1.2.3
  - @devtools/integration@1.8.0-next.1
  - @devtools/types@1.1.1

## 0.4.25-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.20.0-next.2
  - @devtools/config@1.1.1
  - @devtools/errors@1.2.3
  - @devtools/integration@1.8.0-next.1
  - @devtools/types@1.1.1
  - @devtools/plugin-scaffolder-node@0.2.9-next.2

## 0.4.25-next.1

### Patch Changes

- Updated dependencies
  - @devtools/integration@1.8.0-next.1
  - @devtools/backend-common@0.20.0-next.1
  - @devtools/config@1.1.1
  - @devtools/errors@1.2.3
  - @devtools/types@1.1.1
  - @devtools/plugin-scaffolder-node@0.2.9-next.1

## 0.4.25-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.20.0-next.0
  - @devtools/integration@1.8.0-next.0
  - @devtools/plugin-scaffolder-node@0.2.9-next.0
  - @devtools/config@1.1.1
  - @devtools/errors@1.2.3
  - @devtools/types@1.1.1

## 0.4.24

### Patch Changes

- Updated dependencies
  - @devtools/integration@1.7.2
  - @devtools/backend-common@0.19.9
  - @devtools/plugin-scaffolder-node@0.2.8
  - @devtools/config@1.1.1
  - @devtools/errors@1.2.3
  - @devtools/types@1.1.1

## 0.4.24-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.19.9-next.2
  - @devtools/plugin-scaffolder-node@0.2.8-next.2

## 0.4.24-next.1

### Patch Changes

- Updated dependencies
  - @devtools/integration@1.7.2-next.0
  - @devtools/backend-common@0.19.9-next.1
  - @devtools/plugin-scaffolder-node@0.2.8-next.1
  - @devtools/config@1.1.1
  - @devtools/errors@1.2.3
  - @devtools/types@1.1.1

## 0.4.24-next.0

### Patch Changes

- Updated dependencies
  - @devtools/plugin-scaffolder-node@0.2.8-next.0
  - @devtools/backend-common@0.19.9-next.0
  - @devtools/integration@1.7.1
  - @devtools/config@1.1.1
  - @devtools/errors@1.2.3
  - @devtools/types@1.1.1

## 0.4.23

### Patch Changes

- de42eebaaf: Bumped dev dependencies `@types/node` and `mock-fs`.
- Updated dependencies
  - @devtools/backend-common@0.19.8
  - @devtools/integration@1.7.1
  - @devtools/errors@1.2.3
  - @devtools/plugin-scaffolder-node@0.2.6
  - @devtools/config@1.1.1
  - @devtools/types@1.1.1

## 0.4.23-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.19.8-next.2
  - @devtools/integration@1.7.1-next.1
  - @devtools/errors@1.2.3-next.0
  - @devtools/plugin-scaffolder-node@0.2.6-next.2
  - @devtools/config@1.1.1-next.0
  - @devtools/types@1.1.1

## 0.4.22-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.19.7-next.1
  - @devtools/plugin-scaffolder-node@0.2.5-next.1
  - @devtools/config@1.1.0
  - @devtools/errors@1.2.2
  - @devtools/integration@1.7.1-next.0
  - @devtools/types@1.1.1

## 0.4.22-next.0

### Patch Changes

- de42eebaaf: Bumped dev dependencies `@types/node` and `mock-fs`.
- Updated dependencies
  - @devtools/integration@1.7.1-next.0
  - @devtools/backend-common@0.19.7-next.0
  - @devtools/plugin-scaffolder-node@0.2.5-next.0
  - @devtools/config@1.1.0
  - @devtools/errors@1.2.2
  - @devtools/types@1.1.1

## 0.4.20

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.19.5
  - @devtools/config@1.1.0
  - @devtools/errors@1.2.2
  - @devtools/integration@1.7.0
  - @devtools/types@1.1.1
  - @devtools/plugin-scaffolder-node@0.2.3

## 0.4.20-next.3

### Patch Changes

- Updated dependencies
  - @devtools/config@1.1.0-next.2
  - @devtools/errors@1.2.2-next.0
  - @devtools/integration@1.7.0-next.3
  - @devtools/types@1.1.1-next.0
  - @devtools/backend-common@0.19.5-next.3
  - @devtools/plugin-scaffolder-node@0.2.3-next.3

## 0.4.20-next.2

### Patch Changes

- Updated dependencies
  - @devtools/config@1.1.0-next.1
  - @devtools/backend-common@0.19.5-next.2
  - @devtools/integration@1.7.0-next.2
  - @devtools/plugin-scaffolder-node@0.2.3-next.2
  - @devtools/errors@1.2.1
  - @devtools/types@1.1.0

## 0.4.20-next.1

### Patch Changes

- Updated dependencies
  - @devtools/config@1.1.0-next.0
  - @devtools/integration@1.7.0-next.1
  - @devtools/backend-common@0.19.5-next.1
  - @devtools/plugin-scaffolder-node@0.2.3-next.1
  - @devtools/errors@1.2.1
  - @devtools/types@1.1.0

## 0.4.19-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.19.4-next.0
  - @devtools/integration@1.7.0-next.0
  - @devtools/config@1.0.8
  - @devtools/errors@1.2.1
  - @devtools/types@1.1.0
  - @devtools/plugin-scaffolder-node@0.2.2-next.0

## 0.4.17

### Patch Changes

- 12a8c94eda8d: Add package repository and homepage metadata
- c186c631b429: Import helpers from the node package instead of the backend package
- Updated dependencies
  - @devtools/backend-common@0.19.2
  - @devtools/plugin-scaffolder-node@0.2.0
  - @devtools/integration@1.6.0
  - @devtools/config@1.0.8
  - @devtools/errors@1.2.1
  - @devtools/types@1.1.0

## 0.4.17-next.2

### Patch Changes

- Updated dependencies
  - @devtools/plugin-scaffolder-node@0.1.6-next.2
  - @devtools/backend-common@0.19.2-next.2

## 0.4.17-next.1

### Patch Changes

- 12a8c94eda8d: Add package repository and homepage metadata
- c186c631b429: Import helpers from the node package instead of the backend package
- Updated dependencies
  - @devtools/backend-common@0.19.2-next.1
  - @devtools/plugin-scaffolder-node@0.1.6-next.1
  - @devtools/integration@1.5.1
  - @devtools/config@1.0.8
  - @devtools/errors@1.2.1
  - @devtools/types@1.1.0

## 0.4.17-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.19.2-next.0
  - @devtools/config@1.0.8
  - @devtools/errors@1.2.1
  - @devtools/integration@1.5.1
  - @devtools/types@1.1.0
  - @devtools/plugin-scaffolder-backend@1.15.2-next.0
  - @devtools/plugin-scaffolder-node@0.1.6-next.0

## 0.4.16

### Patch Changes

- Updated dependencies
  - @devtools/errors@1.2.1
  - @devtools/backend-common@0.19.1
  - @devtools/plugin-scaffolder-backend@1.15.1
  - @devtools/config@1.0.8
  - @devtools/integration@1.5.1
  - @devtools/types@1.1.0
  - @devtools/plugin-scaffolder-node@0.1.5

## 0.4.16-next.1

### Patch Changes

- Updated dependencies
  - @devtools/plugin-scaffolder-backend@1.15.1-next.1
  - @devtools/backend-common@0.19.1-next.0
  - @devtools/config@1.0.8
  - @devtools/errors@1.2.1-next.0
  - @devtools/integration@1.5.1-next.0
  - @devtools/types@1.1.0
  - @devtools/plugin-scaffolder-node@0.1.5-next.0

## 0.4.16-next.0

### Patch Changes

- Updated dependencies
  - @devtools/errors@1.2.1-next.0
  - @devtools/backend-common@0.19.1-next.0
  - @devtools/config@1.0.8
  - @devtools/integration@1.5.1-next.0
  - @devtools/types@1.1.0
  - @devtools/plugin-scaffolder-backend@1.15.1-next.0
  - @devtools/plugin-scaffolder-node@0.1.5-next.0

## 0.4.15

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.19.0
  - @devtools/plugin-scaffolder-backend@1.15.0
  - @devtools/types@1.1.0
  - @devtools/integration@1.5.0
  - @devtools/errors@1.2.0
  - @devtools/config@1.0.8
  - @devtools/plugin-scaffolder-node@0.1.4

## 0.4.15-next.3

### Patch Changes

- Updated dependencies
  - @devtools/plugin-scaffolder-backend@1.15.0-next.3
  - @devtools/backend-common@0.19.0-next.2
  - @devtools/config@1.0.7
  - @devtools/errors@1.2.0-next.0
  - @devtools/integration@1.5.0-next.0
  - @devtools/types@1.0.2
  - @devtools/plugin-scaffolder-node@0.1.4-next.2

## 0.4.15-next.2

### Patch Changes

- Updated dependencies
  - @devtools/plugin-scaffolder-backend@1.15.0-next.2
  - @devtools/config@1.0.7

## 0.4.15-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.19.0-next.1
  - @devtools/integration@1.5.0-next.0
  - @devtools/errors@1.2.0-next.0
  - @devtools/plugin-scaffolder-backend@1.15.0-next.1
  - @devtools/plugin-scaffolder-node@0.1.4-next.1
  - @devtools/config@1.0.7
  - @devtools/types@1.0.2

## 0.4.15-next.0

### Patch Changes

- Updated dependencies
  - @devtools/plugin-scaffolder-backend@1.14.1-next.0
  - @devtools/backend-common@0.18.6-next.0
  - @devtools/integration@1.4.5
  - @devtools/config@1.0.7
  - @devtools/errors@1.1.5
  - @devtools/types@1.0.2
  - @devtools/plugin-scaffolder-node@0.1.4-next.0

## 0.4.14

### Patch Changes

- Updated dependencies
  - @devtools/plugin-scaffolder-backend@1.14.0
  - @devtools/backend-common@0.18.5
  - @devtools/integration@1.4.5
  - @devtools/plugin-scaffolder-node@0.1.3
  - @devtools/config@1.0.7
  - @devtools/errors@1.1.5
  - @devtools/types@1.0.2

## 0.4.14-next.2

### Patch Changes

- Updated dependencies
  - @devtools/plugin-scaffolder-backend@1.13.2-next.2
  - @devtools/plugin-scaffolder-node@0.1.3-next.2
  - @devtools/config@1.0.7

## 0.4.14-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.18.5-next.1
  - @devtools/plugin-scaffolder-backend@1.13.2-next.1
  - @devtools/plugin-scaffolder-node@0.1.3-next.1
  - @devtools/config@1.0.7

## 0.4.14-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.18.5-next.0
  - @devtools/integration@1.4.5-next.0
  - @devtools/plugin-scaffolder-backend@1.13.2-next.0
  - @devtools/config@1.0.7
  - @devtools/errors@1.1.5
  - @devtools/types@1.0.2
  - @devtools/plugin-scaffolder-node@0.1.3-next.0

## 0.4.12

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.18.4
  - @devtools/plugin-scaffolder-backend@1.13.0
  - @devtools/plugin-scaffolder-node@0.1.2
  - @devtools/integration@1.4.4
  - @devtools/config@1.0.7
  - @devtools/errors@1.1.5
  - @devtools/types@1.0.2

## 0.4.12-next.3

### Patch Changes

- Updated dependencies
  - @devtools/plugin-scaffolder-backend@1.13.0-next.3
  - @devtools/backend-common@0.18.4-next.2
  - @devtools/config@1.0.7
  - @devtools/errors@1.1.5
  - @devtools/integration@1.4.4-next.0
  - @devtools/types@1.0.2
  - @devtools/plugin-scaffolder-node@0.1.2-next.3

## 0.4.12-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.18.4-next.2
  - @devtools/plugin-scaffolder-node@0.1.2-next.2
  - @devtools/plugin-scaffolder-backend@1.13.0-next.2
  - @devtools/config@1.0.7
  - @devtools/errors@1.1.5
  - @devtools/integration@1.4.4-next.0
  - @devtools/types@1.0.2

## 0.4.12-next.1

### Patch Changes

- Updated dependencies
  - @devtools/plugin-scaffolder-backend@1.13.0-next.1
  - @devtools/plugin-scaffolder-node@0.1.2-next.1
  - @devtools/integration@1.4.4-next.0
  - @devtools/backend-common@0.18.4-next.1
  - @devtools/config@1.0.7
  - @devtools/errors@1.1.5
  - @devtools/types@1.0.2

## 0.4.12-next.0

### Patch Changes

- Updated dependencies
  - @devtools/plugin-scaffolder-backend@1.12.1-next.0
  - @devtools/plugin-scaffolder-node@0.1.2-next.0
  - @devtools/backend-common@0.18.4-next.0
  - @devtools/config@1.0.7
  - @devtools/integration@1.4.3
  - @devtools/errors@1.1.5
  - @devtools/types@1.0.2

## 0.4.11

### Patch Changes

- Updated dependencies
  - @devtools/plugin-scaffolder-backend@1.12.0
  - @devtools/backend-common@0.18.3
  - @devtools/errors@1.1.5
  - @devtools/integration@1.4.3
  - @devtools/config@1.0.7
  - @devtools/types@1.0.2
  - @devtools/plugin-scaffolder-node@0.1.1

## 0.4.11-next.2

### Patch Changes

- Updated dependencies
  - @devtools/plugin-scaffolder-backend@1.12.0-next.2
  - @devtools/backend-common@0.18.3-next.2
  - @devtools/plugin-scaffolder-node@0.1.1-next.2
  - @devtools/config@1.0.7-next.0
  - @devtools/integration@1.4.3-next.0

## 0.4.11-next.1

### Patch Changes

- Updated dependencies
  - @devtools/plugin-scaffolder-backend@1.12.0-next.1
  - @devtools/errors@1.1.5-next.0
  - @devtools/backend-common@0.18.3-next.1
  - @devtools/integration@1.4.3-next.0
  - @devtools/config@1.0.7-next.0
  - @devtools/types@1.0.2
  - @devtools/plugin-scaffolder-node@0.1.1-next.1

## 0.4.11-next.0

### Patch Changes

- Updated dependencies
  - @devtools/plugin-scaffolder-backend@1.11.1-next.0
  - @devtools/backend-common@0.18.3-next.0
  - @devtools/config@1.0.6
  - @devtools/errors@1.1.4
  - @devtools/integration@1.4.2
  - @devtools/types@1.0.2
  - @devtools/plugin-scaffolder-node@0.1.1-next.0

## 0.4.10

### Patch Changes

- d72866f0cc: Internal refactor to use the new `@devtools/plugin-scaffolder-node` package for some functionality
- Updated dependencies
  - @devtools/backend-common@0.18.2
  - @devtools/plugin-scaffolder-node@0.1.0
  - @devtools/plugin-scaffolder-backend@1.11.0
  - @devtools/config@1.0.6
  - @devtools/errors@1.1.4
  - @devtools/integration@1.4.2
  - @devtools/types@1.0.2

## 0.4.10-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.18.2-next.2
  - @devtools/plugin-scaffolder-backend@1.11.0-next.2
  - @devtools/plugin-scaffolder-node@0.1.0-next.2
  - @devtools/config@1.0.6
  - @devtools/errors@1.1.4
  - @devtools/integration@1.4.2
  - @devtools/types@1.0.2

## 0.4.10-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.18.2-next.1
  - @devtools/plugin-scaffolder-backend@1.11.0-next.1
  - @devtools/config@1.0.6
  - @devtools/errors@1.1.4
  - @devtools/integration@1.4.2
  - @devtools/types@1.0.2
  - @devtools/plugin-scaffolder-node@0.1.0-next.1

## 0.4.10-next.0

### Patch Changes

- d72866f0cc: Internal refactor to use the new `@devtools/plugin-scaffolder-node` package for some functionality
- Updated dependencies
  - @devtools/plugin-scaffolder-node@0.1.0-next.0
  - @devtools/plugin-scaffolder-backend@1.11.0-next.0
  - @devtools/backend-common@0.18.2-next.0

## 0.4.8

### Patch Changes

- 268b8634f9: handle skipActiveRecord rails new argument
- 2fadff2a25: Change scaffolder task actions to include markdown to demonstrate the new `ActionsPage` markdown feature.
- e4c0240445: Added `catalogFilter` field to OwnerPicker and EntityPicker components to support filtering options by any field(s) of an entity.

  The `allowedKinds` field has been deprecated. Use `catalogFilter` instead. This field allows users to specify a filter on the shape of [EntityFilterQuery](https://github.com/khulnasoft/devtools/blob/774c42003782121d3d6b2aa5f2865d53370c160e/packages/catalog-client/src/types/api.ts#L74), which can be passed into the CatalogClient. See examples below:

  - Get all entities of kind `Group`

    ```yaml
    owner:
      title: Owner
      type: string
      description: Owner of the component
      ui:field: OwnerPicker
      ui:options:
        catalogFilter:
          - kind: Group
    ```

  - Get entities of kind `Group` and spec.type `team`
    ```yaml
    owner:
      title: Owner
      type: string
      description: Owner of the component
      ui:field: OwnerPicker
      ui:options:
        catalogFilter:
          - kind: Group
            spec.type: team
    ```

- Updated dependencies
  - @devtools/plugin-scaffolder-backend@1.10.0
  - @devtools/backend-common@0.18.0
  - @devtools/config@1.0.6
  - @devtools/errors@1.1.4
  - @devtools/integration@1.4.2
  - @devtools/types@1.0.2

## 0.4.8-next.2

### Patch Changes

- 2fadff2a25: Change scaffolder task actions to include markdown to demonstrate the new `ActionsPage` markdown feature.
- Updated dependencies
  - @devtools/backend-common@0.18.0-next.1
  - @devtools/plugin-scaffolder-backend@1.10.0-next.2
  - @devtools/config@1.0.6-next.0
  - @devtools/errors@1.1.4
  - @devtools/integration@1.4.2-next.0
  - @devtools/types@1.0.2

## 0.4.8-next.1

### Patch Changes

- Updated dependencies
  - @devtools/plugin-scaffolder-backend@1.10.0-next.1
  - @devtools/backend-common@0.18.0-next.0
  - @devtools/config@1.0.6-next.0
  - @devtools/errors@1.1.4
  - @devtools/integration@1.4.2-next.0
  - @devtools/types@1.0.2

## 0.4.8-next.0

### Patch Changes

- e4c0240445: Added `catalogFilter` field to OwnerPicker and EntityPicker components to support filtering options by any field(s) of an entity.

  The `allowedKinds` field has been deprecated. Use `catalogFilter` instead. This field allows users to specify a filter on the shape of [EntityFilterQuery](https://github.com/khulnasoft/devtools/blob/774c42003782121d3d6b2aa5f2865d53370c160e/packages/catalog-client/src/types/api.ts#L74), which can be passed into the CatalogClient. See examples below:

  - Get all entities of kind `Group`

    ```yaml
    owner:
      title: Owner
      type: string
      description: Owner of the component
      ui:field: OwnerPicker
      ui:options:
        catalogFilter:
          - kind: Group
    ```

  - Get entities of kind `Group` and spec.type `team`
    ```yaml
    owner:
      title: Owner
      type: string
      description: Owner of the component
      ui:field: OwnerPicker
      ui:options:
        catalogFilter:
          - kind: Group
            spec.type: team
    ```

- Updated dependencies
  - @devtools/plugin-scaffolder-backend@1.9.1-next.0
  - @devtools/backend-common@0.17.0
  - @devtools/config@1.0.5
  - @devtools/errors@1.1.4
  - @devtools/integration@1.4.1
  - @devtools/types@1.0.2

## 0.4.7

### Patch Changes

- 935b66a646: Change step output template examples to use square bracket syntax.
- 27b23a86ad: Added more (optional) arguments to the `createFetchRailsAction` to be passed to `rails new`
- Updated dependencies
  - @devtools/plugin-scaffolder-backend@1.9.0
  - @devtools/backend-common@0.17.0
  - @devtools/errors@1.1.4
  - @devtools/integration@1.4.1
  - @devtools/types@1.0.2
  - @devtools/config@1.0.5

## 0.4.7-next.3

### Patch Changes

- 935b66a646: Change step output template examples to use square bracket syntax.
- Updated dependencies
  - @devtools/plugin-scaffolder-backend@1.9.0-next.3
  - @devtools/backend-common@0.17.0-next.3
  - @devtools/config@1.0.5-next.1
  - @devtools/errors@1.1.4-next.1
  - @devtools/integration@1.4.1-next.1
  - @devtools/types@1.0.2-next.1

## 0.4.7-next.2

### Patch Changes

- Updated dependencies
  - @devtools/plugin-scaffolder-backend@1.9.0-next.2
  - @devtools/backend-common@0.17.0-next.2
  - @devtools/config@1.0.5-next.1
  - @devtools/errors@1.1.4-next.1
  - @devtools/integration@1.4.1-next.1
  - @devtools/types@1.0.2-next.1

## 0.4.7-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.17.0-next.1
  - @devtools/types@1.0.2-next.1
  - @devtools/plugin-scaffolder-backend@1.8.1-next.1
  - @devtools/config@1.0.5-next.1
  - @devtools/integration@1.4.1-next.1
  - @devtools/errors@1.1.4-next.1

## 0.4.7-next.0

### Patch Changes

- Updated dependencies
  - @devtools/plugin-scaffolder-backend@1.8.1-next.0
  - @devtools/backend-common@0.16.1-next.0
  - @devtools/integration@1.4.1-next.0
  - @devtools/types@1.0.2-next.0
  - @devtools/config@1.0.5-next.0
  - @devtools/errors@1.1.4-next.0

## 0.4.6

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.16.0
  - @devtools/plugin-scaffolder-backend@1.8.0
  - @devtools/integration@1.4.0
  - @devtools/types@1.0.1
  - @devtools/config@1.0.4
  - @devtools/errors@1.1.3

## 0.4.6-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.16.0-next.1
  - @devtools/plugin-scaffolder-backend@1.8.0-next.2
  - @devtools/config@1.0.4-next.0
  - @devtools/errors@1.1.3-next.0
  - @devtools/integration@1.4.0-next.0
  - @devtools/types@1.0.1-next.0

## 0.4.6-next.1

### Patch Changes

- Updated dependencies
  - @devtools/plugin-scaffolder-backend@1.8.0-next.1

## 0.4.6-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.16.0-next.0
  - @devtools/plugin-scaffolder-backend@1.8.0-next.0
  - @devtools/integration@1.4.0-next.0
  - @devtools/types@1.0.1-next.0
  - @devtools/config@1.0.4-next.0
  - @devtools/errors@1.1.3-next.0

## 0.4.5

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.15.2
  - @devtools/plugin-scaffolder-backend@1.7.0
  - @devtools/config@1.0.3
  - @devtools/errors@1.1.2
  - @devtools/integration@1.3.2
  - @devtools/types@1.0.0

## 0.4.5-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.15.2-next.2
  - @devtools/plugin-scaffolder-backend@1.7.0-next.2
  - @devtools/config@1.0.3-next.2
  - @devtools/errors@1.1.2-next.2
  - @devtools/integration@1.3.2-next.2
  - @devtools/types@1.0.0

## 0.4.5-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.15.2-next.1
  - @devtools/plugin-scaffolder-backend@1.7.0-next.1
  - @devtools/config@1.0.3-next.1
  - @devtools/errors@1.1.2-next.1
  - @devtools/integration@1.3.2-next.1
  - @devtools/types@1.0.0

## 0.4.5-next.0

### Patch Changes

- Updated dependencies
  - @devtools/plugin-scaffolder-backend@1.7.0-next.0
  - @devtools/backend-common@0.15.2-next.0
  - @devtools/config@1.0.3-next.0
  - @devtools/errors@1.1.2-next.0
  - @devtools/integration@1.3.2-next.0
  - @devtools/types@1.0.0

## 0.4.4

### Patch Changes

- 7d47def9c4: Removed dependency on `@types/jest`.
- Updated dependencies
  - @devtools/backend-common@0.15.1
  - @devtools/plugin-scaffolder-backend@1.6.0
  - @devtools/integration@1.3.1
  - @devtools/config@1.0.2
  - @devtools/errors@1.1.1

## 0.4.4-next.1

### Patch Changes

- 7d47def9c4: Removed dependency on `@types/jest`.
- Updated dependencies
  - @devtools/config@1.0.2-next.0
  - @devtools/errors@1.1.1-next.0
  - @devtools/integration@1.3.1-next.2
  - @devtools/backend-common@0.15.1-next.3
  - @devtools/plugin-scaffolder-backend@1.6.0-next.3

## 0.4.4-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.15.1-next.0
  - @devtools/plugin-scaffolder-backend@1.6.0-next.0
  - @devtools/integration@1.3.1-next.0

## 0.4.3

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.15.0
  - @devtools/integration@1.3.0
  - @devtools/plugin-scaffolder-backend@1.5.0

## 0.4.3-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.15.0-next.0
  - @devtools/integration@1.3.0-next.0
  - @devtools/plugin-scaffolder-backend@1.5.0-next.0

## 0.4.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.14.1
  - @devtools/plugin-scaffolder-backend@1.4.0
  - @devtools/integration@1.2.2
  - @devtools/errors@1.1.0

## 0.4.2-next.1

### Patch Changes

- Updated dependencies
  - @devtools/plugin-scaffolder-backend@1.4.0-next.1
  - @devtools/backend-common@0.14.1-next.1
  - @devtools/errors@1.1.0-next.0
  - @devtools/integration@1.2.2-next.1

## 0.4.2-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.14.1-next.0
  - @devtools/plugin-scaffolder-backend@1.4.0-next.0
  - @devtools/integration@1.2.2-next.0

## 0.4.1

### Patch Changes

- Updated dependencies
  - @devtools/plugin-scaffolder-backend@1.3.0
  - @devtools/backend-common@0.14.0
  - @devtools/integration@1.2.1

## 0.4.1-next.1

### Patch Changes

- Updated dependencies
  - @devtools/plugin-scaffolder-backend@1.3.0-next.2
  - @devtools/backend-common@0.14.0-next.2
  - @devtools/integration@1.2.1-next.2

## 0.4.1-next.0

### Patch Changes

- Updated dependencies
  - @devtools/plugin-scaffolder-backend@1.3.0-next.0
  - @devtools/backend-common@0.13.6-next.0
  - @devtools/integration@1.2.1-next.0

## 0.4.0

### Minor Changes

- 3d001a3bcf: **BREAKING**: Added a new `allowedImageNames` option, which needs to list any image name for it to be allowed as `imageName` input.

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.13.3
  - @devtools/plugin-scaffolder-backend@1.2.0
  - @devtools/integration@1.2.0
  - @devtools/config@1.0.1

## 0.4.0-next.1

### Minor Changes

- 3d001a3bcf: **BREAKING**: Added a new `allowedImageNames` option, which needs to list any image name for it to be allowed as `imageName` input.

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.13.3-next.2
  - @devtools/plugin-scaffolder-backend@1.2.0-next.1
  - @devtools/config@1.0.1-next.0
  - @devtools/integration@1.2.0-next.1

## 0.3.7-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.13.3-next.0
  - @devtools/plugin-scaffolder-backend@1.2.0-next.0
  - @devtools/integration@1.2.0-next.0

## 0.3.6

### Patch Changes

- 230ad0826f: Bump to using `@types/node` v16
- Updated dependencies
  - @devtools/plugin-scaffolder-backend@1.1.0
  - @devtools/integration@1.1.0
  - @devtools/backend-common@0.13.2

## 0.3.6-next.2

### Patch Changes

- 230ad0826f: Bump to using `@types/node` v16
- Updated dependencies
  - @devtools/backend-common@0.13.2-next.2
  - @devtools/integration@1.1.0-next.2

## 0.3.6-next.1

### Patch Changes

- Updated dependencies
  - @devtools/plugin-scaffolder-backend@1.1.0-next.1
  - @devtools/integration@1.1.0-next.1
  - @devtools/backend-common@0.13.2-next.1

## 0.3.6-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.13.2-next.0
  - @devtools/integration@1.0.1-next.0
  - @devtools/plugin-scaffolder-backend@1.0.1-next.0

## 0.3.5

### Patch Changes

- 89c7e47967: Minor README update
- Updated dependencies
  - @devtools/plugin-scaffolder-backend@1.0.0
  - @devtools/backend-common@0.13.1
  - @devtools/integration@1.0.0
  - @devtools/config@1.0.0
  - @devtools/errors@1.0.0
  - @devtools/types@1.0.0

## 0.3.4

### Patch Changes

- 8122e27717: Updating documentation for supporting `apiVersion: scaffolder.devtools.khulnasoft.com/v1beta3`
- e0a69ba49f: build(deps): bump `fs-extra` from 9.1.0 to 10.0.1
- Updated dependencies
  - @devtools/backend-common@0.13.0
  - @devtools/plugin-scaffolder-backend@0.18.0

## 0.3.4-next.0

### Patch Changes

- 8122e27717: Updating documentation for supporting `apiVersion: scaffolder.devtools.khulnasoft.com/v1beta3`
- e0a69ba49f: build(deps): bump `fs-extra` from 9.1.0 to 10.0.1
- Updated dependencies
  - @devtools/backend-common@0.13.0-next.0
  - @devtools/plugin-scaffolder-backend@0.18.0-next.0

## 0.3.3

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.12.0
  - @devtools/plugin-scaffolder-backend@0.17.3
  - @devtools/integration@0.8.0

## 0.3.2

### Patch Changes

- 0f37cdef19: Migrated over from the deprecated `spec.metadata` to `spec.templateInfo` for the `name` and the `baseUrl` of the template.
- Updated dependencies
  - @devtools/backend-common@0.11.0
  - @devtools/plugin-scaffolder-backend@0.17.0
  - @devtools/integration@0.7.5

## 0.3.1

### Patch Changes

- Fix for the previous release with missing type declarations.
- Updated dependencies
  - @devtools/backend-common@0.10.9
  - @devtools/config@0.1.15
  - @devtools/errors@0.2.2
  - @devtools/integration@0.7.4
  - @devtools/types@0.1.3
  - @devtools/plugin-scaffolder-backend@0.16.1

## 0.3.0

### Minor Changes

- 661594bf43: Updated to the latest version of `@devtools/plugin-scaffolder-backend`, meaning the `TemplateAction` now exposes the precise input type rather than `any`.

### Patch Changes

- c77c5c7eb6: Added `devtools.role` to `package.json`
- Updated dependencies
  - @devtools/backend-common@0.10.8
  - @devtools/errors@0.2.1
  - @devtools/integration@0.7.3
  - @devtools/plugin-scaffolder-backend@0.16.0
  - @devtools/config@0.1.14
  - @devtools/types@0.1.2

## 0.2.6

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.10.7
  - @devtools/plugin-scaffolder-backend@0.15.24

## 0.2.6-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.10.7-next.0
  - @devtools/plugin-scaffolder-backend@0.15.24-next.0

## 0.2.5

### Patch Changes

- Updated dependencies
  - @devtools/plugin-scaffolder-backend@0.15.23
  - @devtools/backend-common@0.10.6

## 0.2.5-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.10.6-next.0
  - @devtools/plugin-scaffolder-backend@0.15.23-next.1

## 0.2.5-next.0

### Patch Changes

- Updated dependencies
  - @devtools/plugin-scaffolder-backend@0.15.23-next.0

## 0.2.4

### Patch Changes

- Updated dependencies
  - @devtools/integration@0.7.2
  - @devtools/backend-common@0.10.4
  - @devtools/config@0.1.13
  - @devtools/plugin-scaffolder-backend@0.15.21

## 0.2.4-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.10.4-next.0
  - @devtools/config@0.1.13-next.0
  - @devtools/plugin-scaffolder-backend@0.15.21-next.0
  - @devtools/integration@0.7.2-next.0

## 0.2.3

### Patch Changes

- Updated dependencies
  - @devtools/config@0.1.12
  - @devtools/plugin-scaffolder-backend@0.15.20
  - @devtools/integration@0.7.1
  - @devtools/backend-common@0.10.3
  - @devtools/errors@0.2.0

## 0.2.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.10.1
  - @devtools/plugin-scaffolder-backend@0.15.19
  - @devtools/integration@0.7.0

## 0.2.1

### Patch Changes

- fc8fc02510: Add new options to rails new (force and skipTests)
- Updated dependencies
  - @devtools/backend-common@0.10.0
  - @devtools/plugin-scaffolder-backend@0.15.18

## 0.2.0

### Minor Changes

- 64db0efffe: update publish format from ESM to CJS

### Patch Changes

- Updated dependencies
  - @devtools/plugin-scaffolder-backend@0.15.16
  - @devtools/backend-common@0.9.13

## 0.1.7

### Patch Changes

- 290fbb3ec2: Add missing API docs to scaffolder action plugins
- Updated dependencies
  - @devtools/backend-common@0.9.9
  - @devtools/plugin-scaffolder-backend@0.15.12

## 0.1.6

### Patch Changes

- 10615525f3: Switch to use the json and observable types from `@devtools/types`
- Updated dependencies
  - @devtools/config@0.1.11
  - @devtools/errors@0.1.4
  - @devtools/integration@0.6.9
  - @devtools/backend-common@0.9.8
  - @devtools/plugin-scaffolder-backend@0.15.11

## 0.1.5

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.9.0
  - @devtools/plugin-scaffolder-backend@0.15.2
  - @devtools/integration@0.6.2
  - @devtools/config@0.1.8

## 0.1.4

### Patch Changes

- Updated dependencies
  - @devtools/integration@0.6.0
  - @devtools/plugin-scaffolder-backend@0.15.0
  - @devtools/backend-common@0.8.9

## 0.1.3

### Patch Changes

- e114cc7e0: updated paths to consider differences between platform (windows corrected)
- Updated dependencies
  - @devtools/backend-common@0.8.6
  - @devtools/plugin-scaffolder-backend@0.14.0

## 0.1.2

### Patch Changes

- Updated dependencies
  - @devtools/integration@0.5.8
  - @devtools/plugin-scaffolder-backend@0.13.0
  - @devtools/backend-common@0.8.5
