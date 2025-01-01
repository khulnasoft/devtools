# @devtools/plugin-catalog-backend-module-unprocessed

## 0.5.4-next.0

### Patch Changes

- Updated dependencies
  - @devtools/plugin-auth-node@0.5.6-next.0
  - @devtools/backend-plugin-api@1.1.1-next.0
  - @devtools/catalog-model@1.7.2
  - @devtools/errors@1.2.6
  - @devtools/plugin-catalog-node@1.15.1-next.0
  - @devtools/plugin-catalog-unprocessed-entities-common@0.0.6
  - @devtools/plugin-permission-common@0.8.3

## 0.5.3

### Patch Changes

- Updated dependencies
  - @devtools/plugin-auth-node@0.5.5
  - @devtools/backend-plugin-api@1.1.0
  - @devtools/plugin-catalog-node@1.15.0
  - @devtools/errors@1.2.6
  - @devtools/catalog-model@1.7.2
  - @devtools/plugin-catalog-unprocessed-entities-common@0.0.6
  - @devtools/plugin-permission-common@0.8.3

## 0.5.3-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@1.1.0-next.2
  - @devtools/errors@1.2.6-next.0
  - @devtools/plugin-auth-node@0.5.5-next.2
  - @devtools/plugin-catalog-node@1.15.0-next.2
  - @devtools/catalog-model@1.7.2-next.0
  - @devtools/plugin-catalog-unprocessed-entities-common@0.0.6-next.0
  - @devtools/plugin-permission-common@0.8.3-next.0

## 0.5.3-next.1

### Patch Changes

- Updated dependencies
  - @devtools/plugin-auth-node@0.5.5-next.1
  - @devtools/plugin-catalog-node@1.15.0-next.1
  - @devtools/backend-plugin-api@1.1.0-next.1
  - @devtools/catalog-model@1.7.1
  - @devtools/errors@1.2.5
  - @devtools/plugin-catalog-unprocessed-entities-common@0.0.5
  - @devtools/plugin-permission-common@0.8.2

## 0.5.3-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@1.0.3-next.0
  - @devtools/plugin-auth-node@0.5.5-next.0
  - @devtools/catalog-model@1.7.1
  - @devtools/errors@1.2.5
  - @devtools/plugin-catalog-node@1.14.1-next.0
  - @devtools/plugin-catalog-unprocessed-entities-common@0.0.5
  - @devtools/plugin-permission-common@0.8.2

## 0.5.2

### Patch Changes

- Updated dependencies
  - @devtools/plugin-auth-node@0.5.4
  - @devtools/plugin-catalog-node@1.14.0
  - @devtools/backend-plugin-api@1.0.2
  - @devtools/plugin-permission-common@0.8.2
  - @devtools/catalog-model@1.7.1
  - @devtools/errors@1.2.5
  - @devtools/plugin-catalog-unprocessed-entities-common@0.0.5

## 0.5.2-next.2

### Patch Changes

- Updated dependencies
  - @devtools/plugin-auth-node@0.5.4-next.2
  - @devtools/plugin-catalog-node@1.14.0-next.2
  - @devtools/backend-plugin-api@1.0.2-next.2
  - @devtools/catalog-model@1.7.0
  - @devtools/errors@1.2.4
  - @devtools/plugin-catalog-unprocessed-entities-common@0.0.4
  - @devtools/plugin-permission-common@0.8.1

## 0.5.2-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@1.0.2-next.1
  - @devtools/catalog-model@1.7.0
  - @devtools/errors@1.2.4
  - @devtools/plugin-auth-node@0.5.4-next.1
  - @devtools/plugin-catalog-node@1.14.0-next.1
  - @devtools/plugin-catalog-unprocessed-entities-common@0.0.4
  - @devtools/plugin-permission-common@0.8.1

## 0.5.2-next.0

### Patch Changes

- Updated dependencies
  - @devtools/plugin-auth-node@0.5.4-next.0
  - @devtools/plugin-catalog-node@1.14.0-next.0
  - @devtools/backend-plugin-api@1.0.2-next.0
  - @devtools/catalog-model@1.7.0
  - @devtools/errors@1.2.4
  - @devtools/plugin-catalog-unprocessed-entities-common@0.0.4
  - @devtools/plugin-permission-common@0.8.1

## 0.5.1

### Patch Changes

- 094eaa3: Remove references to in-repo backend-common
- Updated dependencies
  - @devtools/plugin-auth-node@0.5.3
  - @devtools/plugin-catalog-node@1.13.1
  - @devtools/backend-plugin-api@1.0.1
  - @devtools/catalog-model@1.7.0
  - @devtools/errors@1.2.4
  - @devtools/plugin-catalog-unprocessed-entities-common@0.0.4
  - @devtools/plugin-permission-common@0.8.1

## 0.5.1-next.1

### Patch Changes

- Updated dependencies
  - @devtools/plugin-auth-node@0.5.3-next.1
  - @devtools/plugin-catalog-node@1.13.1-next.1
  - @devtools/backend-plugin-api@1.0.1-next.1
  - @devtools/catalog-model@1.7.0
  - @devtools/errors@1.2.4
  - @devtools/plugin-catalog-unprocessed-entities-common@0.0.4
  - @devtools/plugin-permission-common@0.8.1

## 0.5.1-next.0

### Patch Changes

- 094eaa3: Remove references to in-repo backend-common
- Updated dependencies
  - @devtools/plugin-auth-node@0.5.3-next.0
  - @devtools/backend-plugin-api@1.0.1-next.0
  - @devtools/catalog-model@1.7.0
  - @devtools/errors@1.2.4
  - @devtools/plugin-catalog-node@1.13.1-next.0
  - @devtools/plugin-catalog-unprocessed-entities-common@0.0.4
  - @devtools/plugin-permission-common@0.8.1

## 0.5.0

### Minor Changes

- d425fc4: **BREAKING**: The return values from `createBackendPlugin`, `createBackendModule`, and `createServiceFactory` are now simply `BackendFeature` and `ServiceFactory`, instead of the previously deprecated form of a function that returns them. For this reason, `createServiceFactory` also no longer accepts the callback form where you provide direct options to the service. This also affects all `coreServices.*` service refs.

  This may in particular affect tests; if you were effectively doing `createBackendModule({...})()` (note the parentheses), you can now remove those extra parentheses at the end. You may encounter cases of this in your `packages/backend/src/index.ts` too, where you add plugins, modules, and services. If you were using `createServiceFactory` with a function as its argument for the purpose of passing in options, this pattern has been deprecated for a while and is no longer supported. You may want to explore the new multiton patterns to achieve your goals, or moving settings to app-config.

  As part of this change, the `IdentityFactoryOptions` type was removed, and can no longer be used to tweak that service. The identity service was also deprecated some time ago, and you will want to [migrate to the new auth system](https://devtools.khulnasoft.com/docs/tutorials/auth-service-migration) if you still rely on it.

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.25.0
  - @devtools/backend-plugin-api@1.0.0
  - @devtools/plugin-auth-node@0.5.2
  - @devtools/catalog-model@1.7.0
  - @devtools/plugin-catalog-node@1.13.0
  - @devtools/errors@1.2.4
  - @devtools/plugin-catalog-unprocessed-entities-common@0.0.4
  - @devtools/plugin-permission-common@0.8.1

## 0.5.0-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.25.0-next.2
  - @devtools/plugin-auth-node@0.5.2-next.2
  - @devtools/backend-plugin-api@1.0.0-next.2
  - @devtools/catalog-model@1.6.0
  - @devtools/errors@1.2.4
  - @devtools/plugin-catalog-node@1.12.7-next.2
  - @devtools/plugin-catalog-unprocessed-entities-common@0.0.4
  - @devtools/plugin-permission-common@0.8.1

## 0.5.0-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.25.0-next.1
  - @devtools/plugin-auth-node@0.5.2-next.1
  - @devtools/backend-plugin-api@0.9.0-next.1
  - @devtools/catalog-model@1.6.0
  - @devtools/errors@1.2.4
  - @devtools/plugin-catalog-node@1.12.7-next.1
  - @devtools/plugin-catalog-unprocessed-entities-common@0.0.4
  - @devtools/plugin-permission-common@0.8.1

## 0.5.0-next.0

### Minor Changes

- d425fc4: **BREAKING**: The return values from `createBackendPlugin`, `createBackendModule`, and `createServiceFactory` are now simply `BackendFeature` and `ServiceFactory`, instead of the previously deprecated form of a function that returns them. For this reason, `createServiceFactory` also no longer accepts the callback form where you provide direct options to the service. This also affects all `coreServices.*` service refs.

  This may in particular affect tests; if you were effectively doing `createBackendModule({...})()` (note the parentheses), you can now remove those extra parentheses at the end. You may encounter cases of this in your `packages/backend/src/index.ts` too, where you add plugins, modules, and services. If you were using `createServiceFactory` with a function as its argument for the purpose of passing in options, this pattern has been deprecated for a while and is no longer supported. You may want to explore the new multiton patterns to achieve your goals, or moving settings to app-config.

  As part of this change, the `IdentityFactoryOptions` type was removed, and can no longer be used to tweak that service. The identity service was also deprecated some time ago, and you will want to [migrate to the new auth system](https://devtools.khulnasoft.com/docs/tutorials/auth-service-migration) if you still rely on it.

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.9.0-next.0
  - @devtools/backend-common@0.25.0-next.0
  - @devtools/plugin-auth-node@0.5.2-next.0
  - @devtools/plugin-catalog-node@1.12.7-next.0
  - @devtools/catalog-model@1.6.0
  - @devtools/errors@1.2.4
  - @devtools/plugin-catalog-unprocessed-entities-common@0.0.4
  - @devtools/plugin-permission-common@0.8.1

## 0.4.10

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.8.0
  - @devtools/backend-common@0.24.0
  - @devtools/plugin-permission-common@0.8.1
  - @devtools/plugin-auth-node@0.5.0
  - @devtools/plugin-catalog-node@1.12.5
  - @devtools/catalog-model@1.6.0
  - @devtools/errors@1.2.4
  - @devtools/plugin-catalog-unprocessed-entities-common@0.0.4

## 0.4.10-next.3

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.8.0-next.3
  - @devtools/backend-common@0.23.4-next.3
  - @devtools/catalog-model@1.6.0-next.0
  - @devtools/errors@1.2.4
  - @devtools/plugin-auth-node@0.5.0-next.3
  - @devtools/plugin-catalog-node@1.12.5-next.3
  - @devtools/plugin-catalog-unprocessed-entities-common@0.0.4-next.1
  - @devtools/plugin-permission-common@0.8.1-next.1

## 0.4.10-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.8.0-next.2
  - @devtools/plugin-permission-common@0.8.1-next.1
  - @devtools/backend-common@0.23.4-next.2
  - @devtools/plugin-auth-node@0.5.0-next.2
  - @devtools/plugin-catalog-node@1.12.5-next.2
  - @devtools/plugin-catalog-unprocessed-entities-common@0.0.4-next.1
  - @devtools/catalog-model@1.5.0
  - @devtools/errors@1.2.4

## 0.4.10-next.1

### Patch Changes

- Updated dependencies
  - @devtools/plugin-permission-common@0.8.1-next.0
  - @devtools/backend-plugin-api@0.7.1-next.1
  - @devtools/backend-common@0.23.4-next.1
  - @devtools/plugin-catalog-node@1.12.5-next.1
  - @devtools/plugin-catalog-unprocessed-entities-common@0.0.4-next.0
  - @devtools/catalog-model@1.5.0
  - @devtools/errors@1.2.4
  - @devtools/plugin-auth-node@0.4.18-next.1

## 0.4.10-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.23.4-next.0
  - @devtools/plugin-catalog-node@1.12.5-next.0
  - @devtools/backend-plugin-api@0.7.1-next.0
  - @devtools/catalog-model@1.5.0
  - @devtools/errors@1.2.4
  - @devtools/plugin-auth-node@0.4.18-next.0
  - @devtools/plugin-catalog-unprocessed-entities-common@0.0.3
  - @devtools/plugin-permission-common@0.8.0

## 0.4.9

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.7.0
  - @devtools/backend-common@0.23.3
  - @devtools/plugin-permission-common@0.8.0
  - @devtools/plugin-auth-node@0.4.17
  - @devtools/plugin-catalog-node@1.12.4
  - @devtools/plugin-catalog-unprocessed-entities-common@0.0.3
  - @devtools/catalog-model@1.5.0
  - @devtools/errors@1.2.4

## 0.4.9-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.23.3-next.1
  - @devtools/backend-plugin-api@0.6.22-next.1
  - @devtools/catalog-model@1.5.0
  - @devtools/errors@1.2.4
  - @devtools/plugin-auth-node@0.4.17-next.1
  - @devtools/plugin-catalog-node@1.12.4-next.1
  - @devtools/plugin-catalog-unprocessed-entities-common@0.0.2
  - @devtools/plugin-permission-common@0.7.14

## 0.4.8-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.6.21-next.0
  - @devtools/backend-common@0.23.2-next.0
  - @devtools/plugin-auth-node@0.4.16-next.0
  - @devtools/plugin-catalog-node@1.12.3-next.0
  - @devtools/catalog-model@1.5.0
  - @devtools/errors@1.2.4
  - @devtools/plugin-catalog-unprocessed-entities-common@0.0.2
  - @devtools/plugin-permission-common@0.7.14

## 0.4.6

### Patch Changes

- 78a0b08: Internal refactor to handle `BackendFeature` contract change.
- d44a20a: Added additional plugin metadata to `package.json`.
- Updated dependencies
  - @devtools/backend-common@0.23.0
  - @devtools/backend-plugin-api@0.6.19
  - @devtools/plugin-auth-node@0.4.14
  - @devtools/plugin-catalog-node@1.12.1
  - @devtools/plugin-catalog-unprocessed-entities-common@0.0.2
  - @devtools/plugin-permission-common@0.7.14
  - @devtools/catalog-model@1.5.0
  - @devtools/errors@1.2.4

## 0.4.6-next.3

### Patch Changes

- d44a20a: Added additional plugin metadata to `package.json`.
- Updated dependencies
  - @devtools/backend-plugin-api@0.6.19-next.3
  - @devtools/plugin-auth-node@0.4.14-next.3
  - @devtools/plugin-catalog-unprocessed-entities-common@0.0.2-next.0
  - @devtools/plugin-permission-common@0.7.14-next.0
  - @devtools/plugin-catalog-node@1.12.1-next.2
  - @devtools/backend-common@0.23.0-next.3
  - @devtools/catalog-model@1.5.0
  - @devtools/errors@1.2.4

## 0.4.6-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.6.19-next.2
  - @devtools/backend-common@0.23.0-next.2
  - @devtools/plugin-auth-node@0.4.14-next.2
  - @devtools/plugin-catalog-node@1.12.1-next.1
  - @devtools/catalog-model@1.5.0
  - @devtools/errors@1.2.4
  - @devtools/plugin-catalog-unprocessed-entities-common@0.0.1
  - @devtools/plugin-permission-common@0.7.13

## 0.4.6-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.6.19-next.1
  - @devtools/backend-common@0.23.0-next.1
  - @devtools/plugin-auth-node@0.4.14-next.1
  - @devtools/plugin-catalog-node@1.12.1-next.0

## 0.4.6-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.22.1-next.0
  - @devtools/backend-plugin-api@0.6.19-next.0
  - @devtools/plugin-auth-node@0.4.14-next.0
  - @devtools/plugin-catalog-node@1.12.1-next.0
  - @devtools/catalog-model@1.5.0
  - @devtools/errors@1.2.4
  - @devtools/plugin-catalog-unprocessed-entities-common@0.0.1
  - @devtools/plugin-permission-common@0.7.13

## 0.4.5

### Patch Changes

- b192752: Updated `README.md` to point to `packages/backend` instead of `packages/backend-next`.
- 6f5a3a3: Correctly convert owner to string in case owner has not been provided
- Updated dependencies
  - @devtools/plugin-catalog-node@1.12.0
  - @devtools/catalog-model@1.5.0
  - @devtools/backend-common@0.22.0
  - @devtools/backend-plugin-api@0.6.18
  - @devtools/plugin-auth-node@0.4.13

## 0.4.5-next.2

### Patch Changes

- b192752: Updated `README.md` to point to `packages/backend` instead of `packages/backend-next`.
- Updated dependencies
  - @devtools/plugin-catalog-node@1.12.0-next.2
  - @devtools/backend-common@0.22.0-next.2

## 0.4.5-next.1

### Patch Changes

- 6f5a3a3: Correctly convert owner to string in case owner has not been provided
- Updated dependencies
  - @devtools/backend-common@0.22.0-next.1
  - @devtools/plugin-auth-node@0.4.13-next.1
  - @devtools/plugin-catalog-node@1.11.2-next.1
  - @devtools/backend-plugin-api@0.6.18-next.1

## 0.4.5-next.0

### Patch Changes

- Updated dependencies
  - @devtools/catalog-model@1.5.0-next.0
  - @devtools/plugin-auth-node@0.4.13-next.0
  - @devtools/backend-common@0.21.8-next.0
  - @devtools/backend-plugin-api@0.6.18-next.0
  - @devtools/plugin-catalog-node@1.11.2-next.0
  - @devtools/errors@1.2.4
  - @devtools/plugin-catalog-unprocessed-entities-common@0.0.1
  - @devtools/plugin-permission-common@0.7.13

## 0.4.4

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.21.7
  - @devtools/backend-plugin-api@0.6.17
  - @devtools/plugin-auth-node@0.4.12
  - @devtools/plugin-catalog-node@1.11.1
  - @devtools/catalog-model@1.4.5
  - @devtools/errors@1.2.4
  - @devtools/plugin-catalog-unprocessed-entities-common@0.0.1
  - @devtools/plugin-permission-common@0.7.13

## 0.4.4-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.21.7-next.1
  - @devtools/backend-plugin-api@0.6.17-next.1
  - @devtools/plugin-auth-node@0.4.12-next.1
  - @devtools/catalog-model@1.4.5
  - @devtools/errors@1.2.4
  - @devtools/plugin-catalog-node@1.11.1-next.1
  - @devtools/plugin-catalog-unprocessed-entities-common@0.0.1
  - @devtools/plugin-permission-common@0.7.13

## 0.4.4-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.21.7-next.0
  - @devtools/backend-plugin-api@0.6.17-next.0
  - @devtools/catalog-model@1.4.5
  - @devtools/errors@1.2.4
  - @devtools/plugin-auth-node@0.4.12-next.0
  - @devtools/plugin-catalog-node@1.11.1-next.0
  - @devtools/plugin-catalog-unprocessed-entities-common@0.0.1
  - @devtools/plugin-permission-common@0.7.13

## 0.4.3

### Patch Changes

- f3e2e86: Internal update that injects custom permissions into the catalog using its extension point
- Updated dependencies
  - @devtools/plugin-catalog-node@1.11.0
  - @devtools/plugin-auth-node@0.4.11
  - @devtools/backend-common@0.21.6
  - @devtools/backend-plugin-api@0.6.16
  - @devtools/catalog-model@1.4.5
  - @devtools/errors@1.2.4
  - @devtools/plugin-catalog-unprocessed-entities-common@0.0.1
  - @devtools/plugin-permission-common@0.7.13

## 0.4.2

### Patch Changes

- f3e2e86: Internal update that injects custom permissions into the catalog using its extension point
- Updated dependencies
  - @devtools/plugin-catalog-node@1.10.0
  - @devtools/backend-common@0.21.5
  - @devtools/plugin-auth-node@0.4.10
  - @devtools/backend-plugin-api@0.6.15
  - @devtools/catalog-model@1.4.5
  - @devtools/errors@1.2.4
  - @devtools/plugin-catalog-unprocessed-entities-common@0.0.1
  - @devtools/plugin-permission-common@0.7.13

## 0.4.1

### Patch Changes

- 9c7fb30: Internal update that injects custom permissions into the catalog using its extension point
- Updated dependencies
  - @devtools/plugin-catalog-node@1.9.0

## 0.4.0

### Minor Changes

- 924c1ac: **BREAKING**- the `@devtools/plugin-catalog-backend-module-unprocessed` constructor is now private, and have been moved to using the static `.create` method instead which now requires a `PermissionService` and `DiscoveryService`.

  If you're using this module in the old backend system you'll need to migrate to using the `.create` method and pass in the new required parameters in `packages/backend/src/plugins/catalog.ts`.

  No changes should be required if you're using the new backend system.

  ```diff
  -  const unprocessed = new UnprocessedEntitiesModule(
  -    await env.database.getClient(),
  -    router,
  -  );
  + const unprocessed = UnprocessedEntitiesModule.create({
  +    database: await env.database.getClient(),
  +    router,
  +    permissions: env.permissions,
  +    discovery: env.discovery,
  +  });

    unprocessed.registerRoutes();
  ```

  Adds the ability to delete an unprocessed entity from the `refresh_state` table. This change requires enabling permissions for your Devtools instance.

### Patch Changes

- 2bd1410: Removed unused dependencies
- Updated dependencies
  - @devtools/backend-common@0.21.4
  - @devtools/plugin-auth-node@0.4.9
  - @devtools/errors@1.2.4
  - @devtools/backend-plugin-api@0.6.14
  - @devtools/plugin-permission-common@0.7.13
  - @devtools/plugin-permission-node@0.7.25
  - @devtools/plugin-catalog-unprocessed-entities-common@0.0.1
  - @devtools/catalog-model@1.4.5

## 0.3.11-next.2

### Patch Changes

- 2bd1410: Removed unused dependencies
- Updated dependencies
  - @devtools/backend-plugin-api@0.6.14-next.2
  - @devtools/catalog-model@1.4.5-next.0

## 0.3.11-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.6.14-next.1
  - @devtools/plugin-auth-node@0.4.9-next.1
  - @devtools/catalog-model@1.4.5-next.0

## 0.3.10-next.0

### Patch Changes

- Updated dependencies
  - @devtools/plugin-auth-node@0.4.8-next.0
  - @devtools/backend-plugin-api@0.6.13-next.0
  - @devtools/catalog-model@1.4.5-next.0

## 0.3.7

### Patch Changes

- d3dd64a: Explicitly only depend on the `use` method from the `HttpRouterService`.
- 9aac2b0: Use `--cwd` as the first `yarn` argument
- Updated dependencies
  - @devtools/plugin-auth-node@0.4.4
  - @devtools/backend-plugin-api@0.6.10
  - @devtools/catalog-model@1.4.4

## 0.3.7-next.3

### Patch Changes

- Updated dependencies
  - @devtools/plugin-auth-node@0.4.4-next.3
  - @devtools/backend-plugin-api@0.6.10-next.3
  - @devtools/catalog-model@1.4.4-next.0

## 0.3.7-next.2

### Patch Changes

- 9aac2b0: Use `--cwd` as the first `yarn` argument
- Updated dependencies
  - @devtools/backend-plugin-api@0.6.10-next.2
  - @devtools/plugin-auth-node@0.4.4-next.2
  - @devtools/catalog-model@1.4.4-next.0

## 0.3.7-next.1

### Patch Changes

- Updated dependencies
  - @devtools/catalog-model@1.4.4-next.0
  - @devtools/backend-plugin-api@0.6.10-next.1
  - @devtools/plugin-auth-node@0.4.4-next.1

## 0.3.7-next.0

### Patch Changes

- Updated dependencies
  - @devtools/plugin-auth-node@0.4.4-next.0
  - @devtools/backend-plugin-api@0.6.10-next.0
  - @devtools/catalog-model@1.4.3

## 0.3.6

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.6.9
  - @devtools/plugin-auth-node@0.4.3
  - @devtools/catalog-model@1.4.3

## 0.3.6-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.6.9-next.2
  - @devtools/plugin-auth-node@0.4.3-next.2

## 0.3.6-next.1

### Patch Changes

- Updated dependencies
  - @devtools/plugin-auth-node@0.4.3-next.1
  - @devtools/backend-plugin-api@0.6.9-next.1
  - @devtools/catalog-model@1.4.3

## 0.3.6-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.6.9-next.0
  - @devtools/catalog-model@1.4.3
  - @devtools/plugin-auth-node@0.4.3-next.0

## 0.3.5

### Patch Changes

- cc4228e: Switched module ID to use kebab-case.
- Updated dependencies
  - @devtools/plugin-auth-node@0.4.2
  - @devtools/backend-plugin-api@0.6.8
  - @devtools/catalog-model@1.4.3

## 0.3.5-next.3

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.6.8-next.3
  - @devtools/catalog-model@1.4.3
  - @devtools/plugin-auth-node@0.4.2-next.3

## 0.3.5-next.2

### Patch Changes

- cc4228e: Switched module ID to use kebab-case.
- Updated dependencies
  - @devtools/plugin-auth-node@0.4.2-next.2
  - @devtools/backend-plugin-api@0.6.8-next.2
  - @devtools/catalog-model@1.4.3

## 0.3.5-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.6.8-next.1
  - @devtools/catalog-model@1.4.3
  - @devtools/plugin-auth-node@0.4.2-next.1

## 0.3.5-next.0

### Patch Changes

- Updated dependencies
  - @devtools/plugin-auth-node@0.4.2-next.0
  - @devtools/backend-plugin-api@0.6.8-next.0
  - @devtools/catalog-model@1.4.3

## 0.3.4

### Patch Changes

- 013611b42e: `knex` has been bumped to major version 3 and `better-sqlite3` to major version 9, which deprecate node 16 support.
- Updated dependencies
  - @devtools/backend-plugin-api@0.6.7
  - @devtools/catalog-model@1.4.3
  - @devtools/plugin-auth-node@0.4.1

## 0.3.4-next.2

### Patch Changes

- [#20570](https://github.com/khulnasoft/devtools/pull/20570) [`013611b42e`](https://github.com/khulnasoft/devtools/commit/013611b42ed457fefa9bb85fddf416cf5e0c1f76) Thanks [@freben](https://github.com/freben)! - `knex` has been bumped to major version 3 and `better-sqlite3` to major version 9, which deprecate node 16 support.

- Updated dependencies
  - @devtools/backend-plugin-api@0.6.7-next.2
  - @devtools/plugin-auth-node@0.4.1-next.2

## 0.3.4-next.1

### Patch Changes

- Updated dependencies
  - @devtools/plugin-auth-node@0.4.1-next.1
  - @devtools/backend-plugin-api@0.6.7-next.1
  - @devtools/catalog-model@1.4.3

## 0.3.4-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.6.7-next.0
  - @devtools/catalog-model@1.4.3
  - @devtools/plugin-auth-node@0.4.1-next.0

## 0.3.3

### Patch Changes

- Updated dependencies
  - @devtools/plugin-auth-node@0.4.0
  - @devtools/catalog-model@1.4.3
  - @devtools/backend-plugin-api@0.6.6

## 0.3.3-next.2

### Patch Changes

- Updated dependencies
  - @devtools/plugin-auth-node@0.4.0-next.2
  - @devtools/catalog-model@1.4.3-next.0
  - @devtools/backend-plugin-api@0.6.6-next.2

## 0.3.2-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.6.5-next.1
  - @devtools/plugin-auth-node@0.3.2-next.1
  - @devtools/catalog-model@1.4.2

## 0.3.2-next.0

### Patch Changes

- Updated dependencies
  - @devtools/plugin-auth-node@0.3.2-next.0
  - @devtools/backend-plugin-api@0.6.5-next.0
  - @devtools/catalog-model@1.4.2

## 0.3.0

### Minor Changes

- 71114ac50e02: **BREAKING**: The export for the new backend system has been moved to be the `default` export.

  For example, if you are currently importing the plugin using the following pattern:

  ```ts
  import { examplePlugin } from '@devtools/plugin-example-backend';

  backend.add(examplePlugin);
  ```

  It should be migrated to this:

  ```ts
  backend.add(import('@devtools/plugin-example-backend'));
  ```

### Patch Changes

- Updated dependencies
  - @devtools/plugin-auth-node@0.3.0
  - @devtools/catalog-model@1.4.2
  - @devtools/backend-plugin-api@0.6.3

## 0.3.0-next.3

### Minor Changes

- 71114ac50e02: **BREAKING**: The export for the new backend system has been moved to be the `default` export.

  For example, if you are currently importing the plugin using the following pattern:

  ```ts
  import { examplePlugin } from '@devtools/plugin-example-backend';

  backend.add(examplePlugin);
  ```

  It should be migrated to this:

  ```ts
  backend.add(import('@devtools/plugin-example-backend'));
  ```

### Patch Changes

- Updated dependencies
  - @devtools/catalog-model@1.4.2-next.2
  - @devtools/backend-plugin-api@0.6.3-next.3
  - @devtools/plugin-auth-node@0.3.0-next.3

## 0.2.3-next.2

### Patch Changes

- Updated dependencies
  - @devtools/plugin-auth-node@0.3.0-next.2
  - @devtools/backend-plugin-api@0.6.3-next.2
  - @devtools/catalog-model@1.4.2-next.1

## 0.2.3-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.6.3-next.1
  - @devtools/catalog-model@1.4.2-next.0
  - @devtools/plugin-auth-node@0.3.0-next.1

## 0.2.2-next.0

### Patch Changes

- Updated dependencies
  - @devtools/plugin-auth-node@0.3.0-next.0
  - @devtools/backend-plugin-api@0.6.2-next.0
  - @devtools/catalog-model@1.4.1

## 0.2.0

### Minor Changes

- 5156a94c2e2a: **BREAKING**: Fixing typo in exported module. You will have to rename the import to the correct spelling. `UnprocessedEntites` -> `UnprocessedEntities`

### Patch Changes

- 12a8c94eda8d: Add package repository and homepage metadata
- Updated dependencies
  - @devtools/backend-plugin-api@0.6.0
  - @devtools/plugin-auth-node@0.2.17
  - @devtools/catalog-model@1.4.1

## 0.2.0-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.6.0-next.2
  - @devtools/plugin-auth-node@0.2.17-next.2

## 0.2.0-next.1

### Patch Changes

- 12a8c94eda8d: Add package repository and homepage metadata
- Updated dependencies
  - @devtools/plugin-auth-node@0.2.17-next.1
  - @devtools/backend-plugin-api@0.6.0-next.1
  - @devtools/catalog-model@1.4.1

## 0.2.0-next.0

### Minor Changes

- 5156a94c2e2a: **BREAKING**: Fixing typo in exported module. You will have to rename the import to the correct spelling. `UnprocessedEntites` -> `UnprocessedEntities`

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.5.5-next.0
  - @devtools/catalog-model@1.4.1
  - @devtools/plugin-auth-node@0.2.17-next.0

## 0.1.1

### Patch Changes

- a8fa79ccc105: Fix and improve documentation for the unprocessed entities modules.
- Updated dependencies
  - @devtools/backend-plugin-api@0.5.4
  - @devtools/catalog-model@1.4.1
  - @devtools/plugin-auth-node@0.2.16

## 0.1.1-next.0

### Patch Changes

- a8fa79ccc105: Fix and improve documentation for the unprocessed entities modules.
- Updated dependencies
  - @devtools/backend-plugin-api@0.5.4-next.0
  - @devtools/catalog-model@1.4.1-next.0
  - @devtools/plugin-auth-node@0.2.16-next.0

## 0.1.0

### Minor Changes

- d44fcd9829c2: Added a new plugin to expose entities which are unprocessed or have errors processing

### Patch Changes

- Updated dependencies
  - @devtools/catalog-model@1.4.0
  - @devtools/backend-plugin-api@0.5.3
  - @devtools/plugin-auth-node@0.2.15

## 0.1.0-next.1

### Patch Changes

- Updated dependencies
  - @devtools/catalog-model@1.4.0-next.1
  - @devtools/backend-plugin-api@0.5.3-next.2
  - @devtools/plugin-auth-node@0.2.15-next.2

## 0.1.0-next.0

### Minor Changes

- d44fcd9829c2: Added a new plugin to expose entities which are unprocessed or have errors processing

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.5.3-next.1
  - @devtools/catalog-model@1.4.0-next.0
  - @devtools/plugin-auth-node@0.2.15-next.1
