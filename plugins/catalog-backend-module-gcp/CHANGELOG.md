# @devtools/plugin-catalog-backend-module-gcp

## 0.3.4-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@1.1.1-next.0
  - @devtools/catalog-model@1.7.2
  - @devtools/config@1.3.1
  - @devtools/plugin-catalog-node@1.15.1-next.0
  - @devtools/plugin-kubernetes-common@0.9.1

## 0.3.3

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@1.1.0
  - @devtools/plugin-catalog-node@1.15.0
  - @devtools/catalog-model@1.7.2
  - @devtools/config@1.3.1
  - @devtools/plugin-kubernetes-common@0.9.1

## 0.3.3-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@1.1.0-next.2
  - @devtools/plugin-catalog-node@1.15.0-next.2
  - @devtools/catalog-model@1.7.2-next.0
  - @devtools/config@1.3.1-next.0
  - @devtools/plugin-kubernetes-common@0.9.1-next.0

## 0.3.3-next.1

### Patch Changes

- Updated dependencies
  - @devtools/plugin-catalog-node@1.15.0-next.1
  - @devtools/backend-plugin-api@1.1.0-next.1
  - @devtools/catalog-model@1.7.1
  - @devtools/config@1.3.0
  - @devtools/plugin-kubernetes-common@0.9.0

## 0.3.3-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@1.0.3-next.0
  - @devtools/catalog-model@1.7.1
  - @devtools/config@1.3.0
  - @devtools/plugin-catalog-node@1.14.1-next.0
  - @devtools/plugin-kubernetes-common@0.9.0

## 0.3.2

### Patch Changes

- Updated dependencies
  - @devtools/config@1.3.0
  - @devtools/plugin-kubernetes-common@0.9.0
  - @devtools/plugin-catalog-node@1.14.0
  - @devtools/backend-plugin-api@1.0.2
  - @devtools/catalog-model@1.7.1

## 0.3.2-next.2

### Patch Changes

- Updated dependencies
  - @devtools/plugin-catalog-node@1.14.0-next.2
  - @devtools/backend-plugin-api@1.0.2-next.2
  - @devtools/catalog-model@1.7.0
  - @devtools/config@1.2.0
  - @devtools/plugin-kubernetes-common@0.9.0-next.0

## 0.3.2-next.1

### Patch Changes

- Updated dependencies
  - @devtools/plugin-kubernetes-common@0.9.0-next.0
  - @devtools/backend-plugin-api@1.0.2-next.1
  - @devtools/catalog-model@1.7.0
  - @devtools/config@1.2.0
  - @devtools/plugin-catalog-node@1.14.0-next.1

## 0.3.2-next.0

### Patch Changes

- Updated dependencies
  - @devtools/plugin-catalog-node@1.14.0-next.0
  - @devtools/backend-plugin-api@1.0.2-next.0
  - @devtools/catalog-model@1.7.0
  - @devtools/config@1.2.0
  - @devtools/plugin-kubernetes-common@0.8.3

## 0.3.1

### Patch Changes

- Updated dependencies
  - @devtools/plugin-catalog-node@1.13.1
  - @devtools/backend-plugin-api@1.0.1
  - @devtools/catalog-model@1.7.0
  - @devtools/config@1.2.0
  - @devtools/plugin-kubernetes-common@0.8.3

## 0.3.1-next.1

### Patch Changes

- Updated dependencies
  - @devtools/plugin-catalog-node@1.13.1-next.1
  - @devtools/backend-plugin-api@1.0.1-next.1
  - @devtools/catalog-model@1.7.0
  - @devtools/config@1.2.0
  - @devtools/plugin-kubernetes-common@0.8.3

## 0.3.1-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@1.0.1-next.0
  - @devtools/catalog-model@1.7.0
  - @devtools/config@1.2.0
  - @devtools/plugin-catalog-node@1.13.1-next.0
  - @devtools/plugin-kubernetes-common@0.8.3

## 0.3.0

### Minor Changes

- d425fc4: **BREAKING**: The return values from `createBackendPlugin`, `createBackendModule`, and `createServiceFactory` are now simply `BackendFeature` and `ServiceFactory`, instead of the previously deprecated form of a function that returns them. For this reason, `createServiceFactory` also no longer accepts the callback form where you provide direct options to the service. This also affects all `coreServices.*` service refs.

  This may in particular affect tests; if you were effectively doing `createBackendModule({...})()` (note the parentheses), you can now remove those extra parentheses at the end. You may encounter cases of this in your `packages/backend/src/index.ts` too, where you add plugins, modules, and services. If you were using `createServiceFactory` with a function as its argument for the purpose of passing in options, this pattern has been deprecated for a while and is no longer supported. You may want to explore the new multiton patterns to achieve your goals, or moving settings to app-config.

  As part of this change, the `IdentityFactoryOptions` type was removed, and can no longer be used to tweak that service. The identity service was also deprecated some time ago, and you will want to [migrate to the new auth system](https://devtools.khulnasoft.com/docs/tutorials/auth-service-migration) if you still rely on it.

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@1.0.0
  - @devtools/catalog-model@1.7.0
  - @devtools/plugin-catalog-node@1.13.0
  - @devtools/config@1.2.0
  - @devtools/plugin-kubernetes-common@0.8.3

## 0.3.0-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@1.0.0-next.2
  - @devtools/catalog-model@1.6.0
  - @devtools/config@1.2.0
  - @devtools/plugin-catalog-node@1.12.7-next.2
  - @devtools/plugin-kubernetes-common@0.8.2

## 0.3.0-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.9.0-next.1
  - @devtools/catalog-model@1.6.0
  - @devtools/config@1.2.0
  - @devtools/plugin-catalog-node@1.12.7-next.1
  - @devtools/plugin-kubernetes-common@0.8.2

## 0.3.0-next.0

### Minor Changes

- d425fc4: **BREAKING**: The return values from `createBackendPlugin`, `createBackendModule`, and `createServiceFactory` are now simply `BackendFeature` and `ServiceFactory`, instead of the previously deprecated form of a function that returns them. For this reason, `createServiceFactory` also no longer accepts the callback form where you provide direct options to the service. This also affects all `coreServices.*` service refs.

  This may in particular affect tests; if you were effectively doing `createBackendModule({...})()` (note the parentheses), you can now remove those extra parentheses at the end. You may encounter cases of this in your `packages/backend/src/index.ts` too, where you add plugins, modules, and services. If you were using `createServiceFactory` with a function as its argument for the purpose of passing in options, this pattern has been deprecated for a while and is no longer supported. You may want to explore the new multiton patterns to achieve your goals, or moving settings to app-config.

  As part of this change, the `IdentityFactoryOptions` type was removed, and can no longer be used to tweak that service. The identity service was also deprecated some time ago, and you will want to [migrate to the new auth system](https://devtools.khulnasoft.com/docs/tutorials/auth-service-migration) if you still rely on it.

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.9.0-next.0
  - @devtools/plugin-catalog-node@1.12.7-next.0
  - @devtools/catalog-model@1.6.0
  - @devtools/config@1.2.0
  - @devtools/plugin-kubernetes-common@0.8.2

## 0.2.0

### Minor Changes

- fc24d9e: Stop using `@devtools/backend-tasks` as it will be deleted in near future.

### Patch Changes

- 9342ac8: Removed unused dependency
- Updated dependencies
  - @devtools/backend-plugin-api@0.8.0
  - @devtools/plugin-catalog-node@1.12.5
  - @devtools/catalog-model@1.6.0
  - @devtools/config@1.2.0
  - @devtools/plugin-kubernetes-common@0.8.2

## 0.1.24-next.3

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.8.0-next.3
  - @devtools/backend-common@0.23.4-next.3
  - @devtools/catalog-model@1.6.0-next.0
  - @devtools/backend-tasks@0.5.28-next.3
  - @devtools/config@1.2.0
  - @devtools/plugin-catalog-node@1.12.5-next.3
  - @devtools/plugin-kubernetes-common@0.8.2-next.2

## 0.1.24-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.8.0-next.2
  - @devtools/backend-common@0.23.4-next.2
  - @devtools/backend-tasks@0.5.28-next.2
  - @devtools/plugin-catalog-node@1.12.5-next.2
  - @devtools/plugin-kubernetes-common@0.8.2-next.1
  - @devtools/catalog-model@1.5.0
  - @devtools/config@1.2.0

## 0.1.24-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.7.1-next.1
  - @devtools/backend-common@0.23.4-next.1
  - @devtools/plugin-catalog-node@1.12.5-next.1
  - @devtools/plugin-kubernetes-common@0.8.2-next.0
  - @devtools/backend-tasks@0.5.28-next.1
  - @devtools/catalog-model@1.5.0
  - @devtools/config@1.2.0

## 0.1.24-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.23.4-next.0
  - @devtools/plugin-catalog-node@1.12.5-next.0
  - @devtools/backend-plugin-api@0.7.1-next.0
  - @devtools/backend-tasks@0.5.28-next.0
  - @devtools/catalog-model@1.5.0
  - @devtools/config@1.2.0
  - @devtools/plugin-kubernetes-common@0.8.1

## 0.1.23

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.7.0
  - @devtools/backend-common@0.23.3
  - @devtools/backend-tasks@0.5.27
  - @devtools/plugin-catalog-node@1.12.4
  - @devtools/plugin-kubernetes-common@0.8.1
  - @devtools/catalog-model@1.5.0
  - @devtools/config@1.2.0

## 0.1.23-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.23.3-next.1
  - @devtools/backend-plugin-api@0.6.22-next.1
  - @devtools/backend-tasks@0.5.27-next.1
  - @devtools/catalog-model@1.5.0
  - @devtools/config@1.2.0
  - @devtools/plugin-catalog-node@1.12.4-next.1
  - @devtools/plugin-kubernetes-common@0.8.0

## 0.1.22-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.6.21-next.0
  - @devtools/backend-common@0.23.2-next.0
  - @devtools/backend-tasks@0.5.26-next.0
  - @devtools/plugin-catalog-node@1.12.3-next.0
  - @devtools/catalog-model@1.5.0
  - @devtools/config@1.2.0
  - @devtools/plugin-kubernetes-common@0.8.0

## 0.1.20

### Patch Changes

- 78a0b08: Internal refactor to handle `BackendFeature` contract change.
- d44a20a: Added additional plugin metadata to `package.json`.
- Updated dependencies
  - @devtools/backend-common@0.23.0
  - @devtools/backend-plugin-api@0.6.19
  - @devtools/backend-tasks@0.5.24
  - @devtools/plugin-catalog-node@1.12.1
  - @devtools/plugin-kubernetes-common@0.8.0
  - @devtools/catalog-model@1.5.0
  - @devtools/config@1.2.0

## 0.1.20-next.3

### Patch Changes

- d44a20a: Added additional plugin metadata to `package.json`.
- Updated dependencies
  - @devtools/backend-plugin-api@0.6.19-next.3
  - @devtools/plugin-kubernetes-common@0.8.0-next.1
  - @devtools/plugin-catalog-node@1.12.1-next.2
  - @devtools/backend-tasks@0.5.24-next.3
  - @devtools/backend-common@0.23.0-next.3
  - @devtools/catalog-model@1.5.0
  - @devtools/config@1.2.0

## 0.1.20-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.6.19-next.2
  - @devtools/backend-common@0.23.0-next.2
  - @devtools/backend-tasks@0.5.24-next.2
  - @devtools/plugin-catalog-node@1.12.1-next.1
  - @devtools/catalog-model@1.5.0
  - @devtools/config@1.2.0
  - @devtools/plugin-kubernetes-common@0.8.0-next.0

## 0.1.20-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-tasks@0.5.24-next.1
  - @devtools/backend-plugin-api@0.6.19-next.1
  - @devtools/backend-common@0.23.0-next.1
  - @devtools/plugin-kubernetes-common@0.8.0-next.0
  - @devtools/plugin-catalog-node@1.12.1-next.0

## 0.1.20-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-tasks@0.5.24-next.0
  - @devtools/backend-common@0.22.1-next.0
  - @devtools/backend-plugin-api@0.6.19-next.0
  - @devtools/plugin-catalog-node@1.12.1-next.0
  - @devtools/catalog-model@1.5.0
  - @devtools/config@1.2.0
  - @devtools/plugin-kubernetes-common@0.7.6

## 0.1.19

### Patch Changes

- Updated dependencies
  - @devtools/plugin-catalog-node@1.12.0
  - @devtools/catalog-model@1.5.0
  - @devtools/backend-common@0.22.0
  - @devtools/backend-plugin-api@0.6.18
  - @devtools/backend-tasks@0.5.23
  - @devtools/plugin-kubernetes-common@0.7.6

## 0.1.19-next.2

### Patch Changes

- Updated dependencies
  - @devtools/plugin-catalog-node@1.12.0-next.2
  - @devtools/backend-common@0.22.0-next.2

## 0.1.19-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.22.0-next.1
  - @devtools/backend-tasks@0.5.23-next.1
  - @devtools/plugin-catalog-node@1.11.2-next.1
  - @devtools/backend-plugin-api@0.6.18-next.1

## 0.1.19-next.0

### Patch Changes

- Updated dependencies
  - @devtools/catalog-model@1.5.0-next.0
  - @devtools/backend-common@0.21.8-next.0
  - @devtools/backend-plugin-api@0.6.18-next.0
  - @devtools/plugin-catalog-node@1.11.2-next.0
  - @devtools/plugin-kubernetes-common@0.7.6-next.0
  - @devtools/backend-tasks@0.5.23-next.0
  - @devtools/config@1.2.0

## 0.1.18

### Patch Changes

- d5a1fe1: Replaced winston logger with `LoggerService`
- Updated dependencies
  - @devtools/backend-common@0.21.7
  - @devtools/backend-plugin-api@0.6.17
  - @devtools/backend-tasks@0.5.22
  - @devtools/plugin-catalog-node@1.11.1
  - @devtools/catalog-model@1.4.5
  - @devtools/config@1.2.0
  - @devtools/plugin-kubernetes-common@0.7.5

## 0.1.18-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.21.7-next.1
  - @devtools/backend-plugin-api@0.6.17-next.1
  - @devtools/backend-tasks@0.5.22-next.1
  - @devtools/catalog-model@1.4.5
  - @devtools/config@1.2.0
  - @devtools/plugin-catalog-node@1.11.1-next.1
  - @devtools/plugin-kubernetes-common@0.7.5

## 0.1.18-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.21.7-next.0
  - @devtools/backend-plugin-api@0.6.17-next.0
  - @devtools/backend-tasks@0.5.22-next.0
  - @devtools/catalog-model@1.4.5
  - @devtools/config@1.2.0
  - @devtools/plugin-catalog-node@1.11.1-next.0
  - @devtools/plugin-kubernetes-common@0.7.5

## 0.1.17

### Patch Changes

- Updated dependencies
  - @devtools/plugin-catalog-node@1.11.0
  - @devtools/backend-common@0.21.6
  - @devtools/backend-plugin-api@0.6.16
  - @devtools/backend-tasks@0.5.21
  - @devtools/catalog-model@1.4.5
  - @devtools/config@1.2.0
  - @devtools/plugin-kubernetes-common@0.7.5

## 0.1.16

### Patch Changes

- Updated dependencies
  - @devtools/plugin-catalog-node@1.10.0
  - @devtools/backend-common@0.21.5
  - @devtools/backend-tasks@0.5.20
  - @devtools/backend-plugin-api@0.6.15
  - @devtools/catalog-model@1.4.5
  - @devtools/config@1.2.0
  - @devtools/plugin-kubernetes-common@0.7.5

## 0.1.15

### Patch Changes

- Updated dependencies
  - @devtools/plugin-catalog-node@1.9.0

## 0.1.14

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.21.4
  - @devtools/config@1.2.0
  - @devtools/backend-plugin-api@0.6.14
  - @devtools/plugin-catalog-node@1.8.0
  - @devtools/backend-tasks@0.5.19
  - @devtools/plugin-kubernetes-common@0.7.5
  - @devtools/catalog-model@1.4.5

## 0.1.14-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.21.4-next.2
  - @devtools/plugin-catalog-node@1.8.0-next.2
  - @devtools/backend-plugin-api@0.6.14-next.2
  - @devtools/backend-tasks@0.5.19-next.2
  - @devtools/catalog-model@1.4.5-next.0
  - @devtools/config@1.2.0-next.1
  - @devtools/plugin-kubernetes-common@0.7.5-next.1

## 0.1.14-next.1

### Patch Changes

- Updated dependencies
  - @devtools/config@1.2.0-next.1
  - @devtools/backend-common@0.21.4-next.1
  - @devtools/backend-plugin-api@0.6.14-next.1
  - @devtools/backend-tasks@0.5.19-next.1
  - @devtools/catalog-model@1.4.5-next.0
  - @devtools/plugin-catalog-node@1.8.0-next.1
  - @devtools/plugin-kubernetes-common@0.7.5-next.1

## 0.1.13-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.21.3-next.0
  - @devtools/backend-plugin-api@0.6.13-next.0
  - @devtools/plugin-catalog-node@1.8.0-next.0
  - @devtools/backend-tasks@0.5.18-next.0
  - @devtools/plugin-kubernetes-common@0.7.5-next.0
  - @devtools/catalog-model@1.4.5-next.0
  - @devtools/config@1.1.2-next.0

## 0.1.10

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.21.0
  - @devtools/plugin-kubernetes-common@0.7.4
  - @devtools/backend-plugin-api@0.6.10
  - @devtools/backend-tasks@0.5.15
  - @devtools/catalog-model@1.4.4
  - @devtools/plugin-catalog-node@1.7.0
  - @devtools/config@1.1.1

## 0.1.10-next.3

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.21.0-next.3
  - @devtools/plugin-kubernetes-common@0.7.4-next.2
  - @devtools/backend-tasks@0.5.15-next.3
  - @devtools/plugin-catalog-node@1.6.2-next.3
  - @devtools/backend-plugin-api@0.6.10-next.3
  - @devtools/catalog-model@1.4.4-next.0
  - @devtools/config@1.1.1

## 0.1.10-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.21.0-next.2
  - @devtools/backend-plugin-api@0.6.10-next.2
  - @devtools/backend-tasks@0.5.15-next.2
  - @devtools/plugin-catalog-node@1.6.2-next.2
  - @devtools/config@1.1.1
  - @devtools/catalog-model@1.4.4-next.0
  - @devtools/plugin-kubernetes-common@0.7.4-next.1

## 0.1.10-next.1

### Patch Changes

- Updated dependencies
  - @devtools/catalog-model@1.4.4-next.0
  - @devtools/backend-plugin-api@0.6.10-next.1
  - @devtools/backend-common@0.21.0-next.1
  - @devtools/backend-tasks@0.5.15-next.1
  - @devtools/config@1.1.1
  - @devtools/plugin-catalog-node@1.6.2-next.1
  - @devtools/plugin-kubernetes-common@0.7.4-next.1

## 0.1.10-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.21.0-next.0
  - @devtools/plugin-kubernetes-common@0.7.4-next.0
  - @devtools/backend-tasks@0.5.15-next.0
  - @devtools/plugin-catalog-node@1.6.2-next.0
  - @devtools/backend-plugin-api@0.6.10-next.0
  - @devtools/catalog-model@1.4.3
  - @devtools/config@1.1.1

## 0.1.9

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.20.1
  - @devtools/backend-plugin-api@0.6.9
  - @devtools/plugin-kubernetes-common@0.7.3
  - @devtools/plugin-catalog-node@1.6.1
  - @devtools/backend-tasks@0.5.14
  - @devtools/catalog-model@1.4.3
  - @devtools/config@1.1.1

## 0.1.9-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.6.9-next.2
  - @devtools/backend-common@0.20.1-next.2
  - @devtools/plugin-catalog-node@1.6.1-next.2
  - @devtools/backend-tasks@0.5.14-next.2

## 0.1.9-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.20.1-next.1
  - @devtools/config@1.1.1
  - @devtools/backend-tasks@0.5.14-next.1
  - @devtools/backend-plugin-api@0.6.9-next.1
  - @devtools/catalog-model@1.4.3
  - @devtools/plugin-catalog-node@1.6.1-next.1
  - @devtools/plugin-kubernetes-common@0.7.3-next.0

## 0.1.9-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.20.1-next.0
  - @devtools/plugin-kubernetes-common@0.7.3-next.0
  - @devtools/plugin-catalog-node@1.6.1-next.0
  - @devtools/backend-plugin-api@0.6.9-next.0
  - @devtools/backend-tasks@0.5.14-next.0
  - @devtools/catalog-model@1.4.3
  - @devtools/config@1.1.1

## 0.1.8

### Patch Changes

- 42c1aee: Updated dependency `@google-cloud/container` to `^5.0.0`.
- cc4228e: Switched module ID to use kebab-case.
- Updated dependencies
  - @devtools/backend-common@0.20.0
  - @devtools/plugin-catalog-node@1.6.0
  - @devtools/backend-tasks@0.5.13
  - @devtools/plugin-kubernetes-common@0.7.2
  - @devtools/backend-plugin-api@0.6.8
  - @devtools/catalog-model@1.4.3
  - @devtools/config@1.1.1

## 0.1.8-next.3

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.20.0-next.3
  - @devtools/backend-plugin-api@0.6.8-next.3
  - @devtools/backend-tasks@0.5.13-next.3
  - @devtools/catalog-model@1.4.3
  - @devtools/config@1.1.1
  - @devtools/plugin-catalog-node@1.6.0-next.3
  - @devtools/plugin-kubernetes-common@0.7.2-next.1

## 0.1.8-next.2

### Patch Changes

- cc4228e: Switched module ID to use kebab-case.
- Updated dependencies
  - @devtools/plugin-catalog-node@1.6.0-next.2
  - @devtools/backend-common@0.20.0-next.2
  - @devtools/backend-plugin-api@0.6.8-next.2
  - @devtools/backend-tasks@0.5.13-next.2
  - @devtools/catalog-model@1.4.3
  - @devtools/config@1.1.1
  - @devtools/plugin-kubernetes-common@0.7.2-next.1

## 0.1.8-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.20.0-next.1
  - @devtools/plugin-kubernetes-common@0.7.2-next.1
  - @devtools/backend-plugin-api@0.6.8-next.1
  - @devtools/backend-tasks@0.5.13-next.1
  - @devtools/catalog-model@1.4.3
  - @devtools/config@1.1.1
  - @devtools/plugin-catalog-node@1.5.1-next.1

## 0.1.8-next.0

### Patch Changes

- 42c1aee741: Updated dependency `@google-cloud/container` to `^5.0.0`.
- Updated dependencies
  - @devtools/backend-common@0.20.0-next.0
  - @devtools/backend-tasks@0.5.13-next.0
  - @devtools/plugin-kubernetes-common@0.7.2-next.0
  - @devtools/plugin-catalog-node@1.5.1-next.0
  - @devtools/backend-plugin-api@0.6.8-next.0
  - @devtools/catalog-model@1.4.3
  - @devtools/config@1.1.1

## 0.1.7

### Patch Changes

- 62180df4ee: Allow integration with kubernetes dashboard
- Updated dependencies
  - @devtools/plugin-catalog-node@1.5.0
  - @devtools/plugin-kubernetes-common@0.7.1
  - @devtools/backend-common@0.19.9
  - @devtools/backend-plugin-api@0.6.7
  - @devtools/backend-tasks@0.5.12
  - @devtools/catalog-model@1.4.3
  - @devtools/config@1.1.1

## 0.1.7-next.2

### Patch Changes

- [#20321](https://github.com/khulnasoft/devtools/pull/20321) [`62180df4ee`](https://github.com/khulnasoft/devtools/commit/62180df4ee3cb2f75459ee245d5da9c7e2342375) Thanks [@szubster](https://github.com/szubster)! - Allow integration with kubernetes dashboard

- Updated dependencies
  - @devtools/plugin-kubernetes-common@0.7.1-next.1
  - @devtools/backend-plugin-api@0.6.7-next.2
  - @devtools/backend-common@0.19.9-next.2
  - @devtools/backend-tasks@0.5.12-next.2
  - @devtools/plugin-catalog-node@1.5.0-next.2

## 0.1.7-next.1

### Patch Changes

- Updated dependencies
  - @devtools/plugin-catalog-node@1.5.0-next.1
  - @devtools/backend-common@0.19.9-next.1
  - @devtools/backend-tasks@0.5.12-next.1
  - @devtools/backend-plugin-api@0.6.7-next.1
  - @devtools/config@1.1.1
  - @devtools/plugin-kubernetes-common@0.7.1-next.0

## 0.1.7-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.19.9-next.0
  - @devtools/backend-plugin-api@0.6.7-next.0
  - @devtools/backend-tasks@0.5.12-next.0
  - @devtools/config@1.1.1
  - @devtools/plugin-catalog-node@1.4.8-next.0
  - @devtools/plugin-kubernetes-common@0.7.1-next.0

## 0.1.6

### Patch Changes

- Updated dependencies
  - @devtools/backend-tasks@0.5.11
  - @devtools/backend-common@0.19.8
  - @devtools/plugin-catalog-node@1.4.7
  - @devtools/plugin-kubernetes-common@0.7.0
  - @devtools/backend-plugin-api@0.6.6
  - @devtools/config@1.1.1

## 0.1.6-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.19.8-next.2
  - @devtools/plugin-kubernetes-common@0.7.0-next.1
  - @devtools/backend-tasks@0.5.11-next.2
  - @devtools/plugin-catalog-node@1.4.7-next.2
  - @devtools/backend-plugin-api@0.6.6-next.2
  - @devtools/config@1.1.1-next.0

## 0.1.5-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-tasks@0.5.10-next.1
  - @devtools/plugin-catalog-node@1.4.6-next.1
  - @devtools/backend-common@0.19.7-next.1
  - @devtools/plugin-kubernetes-common@0.7.0-next.0
  - @devtools/backend-plugin-api@0.6.5-next.1
  - @devtools/config@1.1.0

## 0.1.5-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.19.7-next.0
  - @devtools/config@1.1.0
  - @devtools/backend-plugin-api@0.6.5-next.0
  - @devtools/backend-tasks@0.5.10-next.0
  - @devtools/plugin-catalog-node@1.4.6-next.0
  - @devtools/plugin-kubernetes-common@0.6.6

## 0.1.3

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

- 201f07c27f1e: Fix GKE endpoint parsing

  Endpoint is an IP, not url. It is always https on default (443) port
  ref: https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1/projects.locations.clusters#Cluster

- Updated dependencies
  - @devtools/plugin-kubernetes-common@0.6.6
  - @devtools/backend-tasks@0.5.8
  - @devtools/backend-common@0.19.5
  - @devtools/config@1.1.0
  - @devtools/backend-plugin-api@0.6.3
  - @devtools/plugin-catalog-node@1.4.4

## 0.1.3-next.3

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
  - @devtools/config@1.1.0-next.2
  - @devtools/plugin-kubernetes-common@0.6.6-next.2
  - @devtools/backend-plugin-api@0.6.3-next.3
  - @devtools/backend-common@0.19.5-next.3
  - @devtools/backend-tasks@0.5.8-next.3
  - @devtools/plugin-catalog-node@1.4.4-next.3

## 0.1.3-next.2

### Patch Changes

- Updated dependencies
  - @devtools/config@1.1.0-next.1
  - @devtools/backend-tasks@0.5.8-next.2
  - @devtools/backend-common@0.19.5-next.2
  - @devtools/plugin-catalog-node@1.4.4-next.2
  - @devtools/backend-plugin-api@0.6.3-next.2
  - @devtools/plugin-kubernetes-common@0.6.6-next.1

## 0.1.3-next.1

### Patch Changes

- Updated dependencies
  - @devtools/plugin-kubernetes-common@0.6.6-next.0
  - @devtools/config@1.1.0-next.0
  - @devtools/backend-tasks@0.5.8-next.1
  - @devtools/backend-common@0.19.5-next.1
  - @devtools/backend-plugin-api@0.6.3-next.1
  - @devtools/plugin-catalog-node@1.4.4-next.1

## 0.1.2-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.19.4-next.0
  - @devtools/backend-tasks@0.5.7-next.0
  - @devtools/backend-plugin-api@0.6.2-next.0
  - @devtools/config@1.0.8
  - @devtools/plugin-catalog-node@1.4.3-next.0
  - @devtools/plugin-kubernetes-common@0.6.5

## 0.1.0

### Minor Changes

- 290eff6692aa: Added GCP catalog plugin with GKE provider

### Patch Changes

- 629cbd194a87: Use `coreServices.rootConfig` instead of `coreService.config`
- Updated dependencies
  - @devtools/backend-common@0.19.2
  - @devtools/backend-plugin-api@0.6.0
  - @devtools/plugin-catalog-node@1.4.1
  - @devtools/backend-tasks@0.5.5
  - @devtools/config@1.0.8
  - @devtools/plugin-kubernetes-common@0.6.5

## 0.1.0-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.6.0-next.2
  - @devtools/backend-tasks@0.5.5-next.2
  - @devtools/backend-common@0.19.2-next.2
  - @devtools/plugin-catalog-node@1.4.1-next.2

## 0.1.0-next.0

### Minor Changes

- 290eff6692aa: Added GCP catalog plugin with GKE provider

### Patch Changes

- 629cbd194a87: Use `coreServices.rootConfig` instead of `coreService.config`
- Updated dependencies
  - @devtools/backend-common@0.19.2-next.1
  - @devtools/plugin-catalog-node@1.4.1-next.1
  - @devtools/backend-plugin-api@0.6.0-next.1
  - @devtools/backend-tasks@0.5.5-next.1
  - @devtools/config@1.0.8
  - @devtools/plugin-kubernetes-common@0.6.5
