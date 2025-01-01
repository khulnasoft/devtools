# @devtools/plugin-permission-backend

## 0.5.53-next.0

### Patch Changes

- d9d62ef: Remove some internal usages of the backend-common package
- Updated dependencies
  - @devtools/plugin-permission-node@0.8.7-next.0
  - @devtools/plugin-auth-node@0.5.6-next.0
  - @devtools/backend-plugin-api@1.1.1-next.0
  - @devtools/config@1.3.1
  - @devtools/errors@1.2.6
  - @devtools/plugin-permission-common@0.8.3

## 0.5.52

### Patch Changes

- 1e624ca: Restrict `@types/express` version range from `*` to `^4.17.6`.
- 5c9cc05: Use native fetch instead of node-fetch
- Updated dependencies
  - @devtools/plugin-auth-node@0.5.5
  - @devtools/backend-plugin-api@1.1.0
  - @devtools/plugin-permission-node@0.8.6
  - @devtools/errors@1.2.6
  - @devtools/config@1.3.1
  - @devtools/plugin-permission-common@0.8.3

## 0.5.52-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@1.1.0-next.2
  - @devtools/plugin-permission-node@0.8.6-next.2
  - @devtools/errors@1.2.6-next.0
  - @devtools/plugin-auth-node@0.5.5-next.2
  - @devtools/config@1.3.1-next.0
  - @devtools/plugin-permission-common@0.8.3-next.0

## 0.5.52-next.1

### Patch Changes

- 5c9cc05: Use native fetch instead of node-fetch
- Updated dependencies
  - @devtools/plugin-auth-node@0.5.5-next.1
  - @devtools/backend-plugin-api@1.1.0-next.1
  - @devtools/plugin-permission-node@0.8.6-next.1
  - @devtools/config@1.3.0
  - @devtools/errors@1.2.5
  - @devtools/plugin-permission-common@0.8.2

## 0.5.52-next.0

### Patch Changes

- 1e624ca: Restrict `@types/express` version range from `*` to `^4.17.6`.
- Updated dependencies
  - @devtools/backend-plugin-api@1.0.3-next.0
  - @devtools/plugin-auth-node@0.5.5-next.0
  - @devtools/config@1.3.0
  - @devtools/errors@1.2.5
  - @devtools/plugin-permission-common@0.8.2
  - @devtools/plugin-permission-node@0.8.6-next.0

## 0.5.51

### Patch Changes

- Updated dependencies
  - @devtools/config@1.3.0
  - @devtools/plugin-auth-node@0.5.4
  - @devtools/backend-plugin-api@1.0.2
  - @devtools/plugin-permission-common@0.8.2
  - @devtools/errors@1.2.5
  - @devtools/plugin-permission-node@0.8.5

## 0.5.51-next.2

### Patch Changes

- Updated dependencies
  - @devtools/plugin-auth-node@0.5.4-next.2
  - @devtools/backend-plugin-api@1.0.2-next.2
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/plugin-permission-common@0.8.1
  - @devtools/plugin-permission-node@0.8.5-next.2

## 0.5.51-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@1.0.2-next.1
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/plugin-auth-node@0.5.4-next.1
  - @devtools/plugin-permission-common@0.8.1
  - @devtools/plugin-permission-node@0.8.5-next.1

## 0.5.51-next.0

### Patch Changes

- Updated dependencies
  - @devtools/plugin-auth-node@0.5.4-next.0
  - @devtools/backend-plugin-api@1.0.2-next.0
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/plugin-permission-common@0.8.1
  - @devtools/plugin-permission-node@0.8.5-next.0

## 0.5.50

### Patch Changes

- 094eaa3: Remove references to in-repo backend-common
- 3109c24: The export for the new backend system at the `/alpha` export is now also available via the main entry point, which means that you can remove the `/alpha` suffix from the import.
- Updated dependencies
  - @devtools/plugin-auth-node@0.5.3
  - @devtools/plugin-permission-node@0.8.4
  - @devtools/backend-plugin-api@1.0.1
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/plugin-permission-common@0.8.1

## 0.5.50-next.1

### Patch Changes

- Updated dependencies
  - @devtools/plugin-auth-node@0.5.3-next.1
  - @devtools/backend-plugin-api@1.0.1-next.1
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/plugin-permission-common@0.8.1
  - @devtools/plugin-permission-node@0.8.4-next.1

## 0.5.50-next.0

### Patch Changes

- 094eaa3: Remove references to in-repo backend-common
- Updated dependencies
  - @devtools/plugin-permission-node@0.8.4-next.0
  - @devtools/plugin-auth-node@0.5.3-next.0
  - @devtools/backend-plugin-api@1.0.1-next.0
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/plugin-permission-common@0.8.1

## 0.5.49

### Patch Changes

- d425fc4: Modules, plugins, and services are now `BackendFeature`, not a function that returns a feature.
- c2b63ab: Updated dependency `supertest` to `^7.0.0`.
- fcb9356: Deprecated `createRouter` and its router options in favour of the new backend system.
- Updated dependencies
  - @devtools/backend-common@0.25.0
  - @devtools/backend-plugin-api@1.0.0
  - @devtools/plugin-auth-node@0.5.2
  - @devtools/plugin-permission-node@0.8.3
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/plugin-permission-common@0.8.1

## 0.5.49-next.2

### Patch Changes

- c2b63ab: Updated dependency `supertest` to `^7.0.0`.
- Updated dependencies
  - @devtools/backend-common@0.25.0-next.2
  - @devtools/plugin-auth-node@0.5.2-next.2
  - @devtools/backend-plugin-api@1.0.0-next.2
  - @devtools/plugin-permission-node@0.8.3-next.2
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/plugin-permission-common@0.8.1

## 0.5.49-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.25.0-next.1
  - @devtools/plugin-auth-node@0.5.2-next.1
  - @devtools/backend-plugin-api@0.9.0-next.1
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/plugin-permission-common@0.8.1
  - @devtools/plugin-permission-node@0.8.3-next.1

## 0.5.49-next.0

### Patch Changes

- d425fc4: Modules, plugins, and services are now `BackendFeature`, not a function that returns a feature.
- fcb9356: Deprecated `createRouter` and its router options in favour of the new backend system.
- Updated dependencies
  - @devtools/backend-plugin-api@0.9.0-next.0
  - @devtools/plugin-permission-node@0.8.3-next.0
  - @devtools/backend-common@0.25.0-next.0
  - @devtools/plugin-auth-node@0.5.2-next.0
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/plugin-permission-common@0.8.1

## 0.5.47

### Patch Changes

- 93095ee: Make sure node-fetch is version 2.7.0 or greater
- Updated dependencies
  - @devtools/backend-plugin-api@0.8.0
  - @devtools/backend-common@0.24.0
  - @devtools/plugin-permission-common@0.8.1
  - @devtools/plugin-auth-node@0.5.0
  - @devtools/plugin-permission-node@0.8.1
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4

## 0.5.47-next.3

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.8.0-next.3
  - @devtools/backend-common@0.23.4-next.3
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/plugin-auth-node@0.5.0-next.3
  - @devtools/plugin-permission-common@0.8.1-next.1
  - @devtools/plugin-permission-node@0.8.1-next.3

## 0.5.47-next.2

### Patch Changes

- 93095ee: Make sure node-fetch is version 2.7.0 or greater
- Updated dependencies
  - @devtools/backend-plugin-api@0.8.0-next.2
  - @devtools/plugin-permission-common@0.8.1-next.1
  - @devtools/backend-common@0.23.4-next.2
  - @devtools/plugin-auth-node@0.5.0-next.2
  - @devtools/plugin-permission-node@0.8.1-next.2
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4

## 0.5.47-next.1

### Patch Changes

- Updated dependencies
  - @devtools/plugin-permission-common@0.8.1-next.0
  - @devtools/plugin-permission-node@0.8.1-next.1
  - @devtools/backend-plugin-api@0.7.1-next.1
  - @devtools/backend-common@0.23.4-next.1
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/plugin-auth-node@0.4.18-next.1

## 0.5.47-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.23.4-next.0
  - @devtools/backend-plugin-api@0.7.1-next.0
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/plugin-auth-node@0.4.18-next.0
  - @devtools/plugin-permission-common@0.8.0
  - @devtools/plugin-permission-node@0.8.1-next.0

## 0.5.46

### Patch Changes

- ed10fd2: The `PermissionPolicy` interface has been updated to align with the recent changes to the Devtools auth system. The second argument to the `handle` method is now of the new `PolicyQueryUser` type. This type maintains the old fields from the `DevtoolsIdentityResponse`, which are now all deprecated. Instead, two new fields have been added, which allows access to the same information:

  - `credentials` - A `DevtoolsCredentials` object, which is useful for making requests to other services on behalf of the user as part of evaluating the policy. This replaces the deprecated `token` field. See the [Auth Service documentation](https://devtools.khulnasoft.com/docs/backend-system/core-services/auth#creating-request-tokens) for information about how to create a token using these credentials.
  - `info` - A `DevtoolsUserInfo` object, which contains the same information as the deprecated `identity`, except for the `type` field that was redundant.

  Most existing policies can be updated by replacing the `DevtoolsIdentityResponse` type with `PolicyQueryUser`, which is exported from `@devtools/plugin-permission-node`, as well as replacing any occurrences of `user?.identity` with `user?.info`.

- Updated dependencies
  - @devtools/backend-plugin-api@0.7.0
  - @devtools/backend-common@0.23.3
  - @devtools/plugin-permission-common@0.8.0
  - @devtools/plugin-permission-node@0.8.0
  - @devtools/plugin-auth-node@0.4.17
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4

## 0.5.46-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.23.3-next.1
  - @devtools/backend-plugin-api@0.6.22-next.1
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/plugin-auth-node@0.4.17-next.1
  - @devtools/plugin-permission-common@0.7.14
  - @devtools/plugin-permission-node@0.7.33-next.1

## 0.5.45-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.6.21-next.0
  - @devtools/backend-common@0.23.2-next.0
  - @devtools/plugin-auth-node@0.4.16-next.0
  - @devtools/plugin-permission-node@0.7.32-next.0
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/plugin-permission-common@0.7.14

## 0.5.43

### Patch Changes

- 78a0b08: Internal refactor to handle `BackendFeature` contract change.
- d44a20a: Added additional plugin metadata to `package.json`.
- Updated dependencies
  - @devtools/backend-common@0.23.0
  - @devtools/backend-plugin-api@0.6.19
  - @devtools/plugin-auth-node@0.4.14
  - @devtools/plugin-permission-node@0.7.30
  - @devtools/plugin-permission-common@0.7.14
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4

## 0.5.43-next.3

### Patch Changes

- d44a20a: Added additional plugin metadata to `package.json`.
- Updated dependencies
  - @devtools/backend-plugin-api@0.6.19-next.3
  - @devtools/plugin-auth-node@0.4.14-next.3
  - @devtools/plugin-permission-common@0.7.14-next.0
  - @devtools/plugin-permission-node@0.7.30-next.3
  - @devtools/backend-common@0.23.0-next.3
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4

## 0.5.43-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.6.19-next.2
  - @devtools/backend-common@0.23.0-next.2
  - @devtools/plugin-permission-node@0.7.30-next.2
  - @devtools/plugin-auth-node@0.4.14-next.2
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/plugin-permission-common@0.7.13

## 0.5.43-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.6.19-next.1
  - @devtools/plugin-permission-node@0.7.30-next.1
  - @devtools/backend-common@0.23.0-next.1
  - @devtools/plugin-auth-node@0.4.14-next.1

## 0.5.43-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.22.1-next.0
  - @devtools/backend-plugin-api@0.6.19-next.0
  - @devtools/plugin-auth-node@0.4.14-next.0
  - @devtools/plugin-permission-node@0.7.30-next.0
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/plugin-permission-common@0.7.13

## 0.5.42

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.22.0
  - @devtools/backend-plugin-api@0.6.18
  - @devtools/plugin-auth-node@0.4.13
  - @devtools/plugin-permission-node@0.7.29

## 0.5.42-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.22.0-next.1
  - @devtools/plugin-auth-node@0.4.13-next.1
  - @devtools/plugin-permission-node@0.7.29-next.1
  - @devtools/backend-plugin-api@0.6.18-next.1

## 0.5.42-next.0

### Patch Changes

- Updated dependencies
  - @devtools/plugin-auth-node@0.4.13-next.0
  - @devtools/backend-common@0.21.8-next.0
  - @devtools/backend-plugin-api@0.6.18-next.0
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/plugin-permission-common@0.7.13
  - @devtools/plugin-permission-node@0.7.29-next.0

## 0.5.41

### Patch Changes

- d5a1fe1: Replaced winston logger with `LoggerService`
- Updated dependencies
  - @devtools/backend-common@0.21.7
  - @devtools/plugin-permission-node@0.7.28
  - @devtools/backend-plugin-api@0.6.17
  - @devtools/plugin-auth-node@0.4.12
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/plugin-permission-common@0.7.13

## 0.5.41-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.21.7-next.1
  - @devtools/backend-plugin-api@0.6.17-next.1
  - @devtools/plugin-auth-node@0.4.12-next.1
  - @devtools/plugin-permission-node@0.7.28-next.1
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/plugin-permission-common@0.7.13

## 0.5.41-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.21.7-next.0
  - @devtools/backend-plugin-api@0.6.17-next.0
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/plugin-auth-node@0.4.12-next.0
  - @devtools/plugin-permission-common@0.7.13
  - @devtools/plugin-permission-node@0.7.28-next.0

## 0.5.40

### Patch Changes

- f3e2e86: Properly forward causes of errors from upstream backends in the `PermissionIntegrationClient`
- Updated dependencies
  - @devtools/plugin-auth-node@0.4.11
  - @devtools/backend-common@0.21.6
  - @devtools/backend-plugin-api@0.6.16
  - @devtools/plugin-permission-node@0.7.27
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/plugin-permission-common@0.7.13

## 0.5.39

### Patch Changes

- f3e2e86: Properly forward causes of errors from upstream backends in the `PermissionIntegrationClient`
- Updated dependencies
  - @devtools/backend-common@0.21.5
  - @devtools/plugin-auth-node@0.4.10
  - @devtools/plugin-permission-node@0.7.26
  - @devtools/backend-plugin-api@0.6.15
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/plugin-permission-common@0.7.13

## 0.5.38

### Patch Changes

- 9c7fb30: Properly forward causes of errors from upstream backends in the `PermissionIntegrationClient`

## 0.5.37

### Patch Changes

- 4467036: Allow unauthenticated access to health check endpoint.
- 9802004: Migrated to use the new auth services introduced in [BEP-0003](https://github.com/khulnasoft/devtools/blob/master/beps/0003-auth-architecture-evolution/README.md).

  The `createRouter` function now accepts `auth`, `httpAuth` and `userInfo` options. Theses are used internally to support the new backend system, and can be ignored.

- Updated dependencies
  - @devtools/backend-common@0.21.4
  - @devtools/plugin-auth-node@0.4.9
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/backend-plugin-api@0.6.14
  - @devtools/plugin-permission-common@0.7.13
  - @devtools/plugin-permission-node@0.7.25

## 0.5.37-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.21.4-next.2
  - @devtools/plugin-auth-node@0.4.9-next.2
  - @devtools/backend-plugin-api@0.6.14-next.2
  - @devtools/config@1.2.0-next.1
  - @devtools/errors@1.2.4-next.0
  - @devtools/plugin-permission-common@0.7.13-next.1
  - @devtools/plugin-permission-node@0.7.25-next.2

## 0.5.37-next.1

### Patch Changes

- Updated dependencies
  - @devtools/config@1.2.0-next.1
  - @devtools/backend-common@0.21.4-next.1
  - @devtools/backend-plugin-api@0.6.14-next.1
  - @devtools/plugin-auth-node@0.4.9-next.1
  - @devtools/plugin-permission-common@0.7.13-next.1
  - @devtools/plugin-permission-node@0.7.25-next.1
  - @devtools/errors@1.2.4-next.0

## 0.5.36-next.0

### Patch Changes

- 9802004: Migrated to use the new auth services introduced in [BEP-0003](https://github.com/khulnasoft/devtools/blob/master/beps/0003-auth-architecture-evolution/README.md).

  The `createRouter` function now accepts `auth`, `httpAuth` and `userInfo` options. Theses are used internally to support the new backend system, and can be ignored.

- Updated dependencies
  - @devtools/backend-common@0.21.3-next.0
  - @devtools/plugin-auth-node@0.4.8-next.0
  - @devtools/errors@1.2.4-next.0
  - @devtools/backend-plugin-api@0.6.13-next.0
  - @devtools/plugin-permission-common@0.7.13-next.0
  - @devtools/plugin-permission-node@0.7.24-next.0
  - @devtools/config@1.1.2-next.0

## 0.5.33

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.21.0
  - @devtools/plugin-auth-node@0.4.4
  - @devtools/backend-plugin-api@0.6.10
  - @devtools/plugin-permission-node@0.7.21
  - @devtools/config@1.1.1
  - @devtools/errors@1.2.3
  - @devtools/plugin-permission-common@0.7.12

## 0.5.33-next.3

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.21.0-next.3
  - @devtools/plugin-auth-node@0.4.4-next.3
  - @devtools/plugin-permission-node@0.7.21-next.3
  - @devtools/backend-plugin-api@0.6.10-next.3
  - @devtools/config@1.1.1
  - @devtools/errors@1.2.3
  - @devtools/plugin-permission-common@0.7.12

## 0.5.33-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.21.0-next.2
  - @devtools/backend-plugin-api@0.6.10-next.2
  - @devtools/plugin-auth-node@0.4.4-next.2
  - @devtools/plugin-permission-node@0.7.21-next.2
  - @devtools/config@1.1.1
  - @devtools/errors@1.2.3
  - @devtools/plugin-permission-common@0.7.12

## 0.5.33-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.6.10-next.1
  - @devtools/backend-common@0.21.0-next.1
  - @devtools/config@1.1.1
  - @devtools/errors@1.2.3
  - @devtools/plugin-auth-node@0.4.4-next.1
  - @devtools/plugin-permission-common@0.7.12
  - @devtools/plugin-permission-node@0.7.21-next.1

## 0.5.33-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.21.0-next.0
  - @devtools/plugin-auth-node@0.4.4-next.0
  - @devtools/plugin-permission-node@0.7.21-next.0
  - @devtools/backend-plugin-api@0.6.10-next.0
  - @devtools/config@1.1.1
  - @devtools/errors@1.2.3
  - @devtools/plugin-permission-common@0.7.12

## 0.5.32

### Patch Changes

- b1acd9b: Updated README
- Updated dependencies
  - @devtools/backend-common@0.20.1
  - @devtools/backend-plugin-api@0.6.9
  - @devtools/plugin-permission-common@0.7.12
  - @devtools/plugin-permission-node@0.7.20
  - @devtools/plugin-auth-node@0.4.3
  - @devtools/config@1.1.1
  - @devtools/errors@1.2.3

## 0.5.32-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.6.9-next.2
  - @devtools/backend-common@0.20.1-next.2
  - @devtools/plugin-auth-node@0.4.3-next.2
  - @devtools/plugin-permission-node@0.7.20-next.2

## 0.5.32-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.20.1-next.1
  - @devtools/config@1.1.1
  - @devtools/plugin-auth-node@0.4.3-next.1
  - @devtools/plugin-permission-node@0.7.20-next.1
  - @devtools/backend-plugin-api@0.6.9-next.1
  - @devtools/errors@1.2.3
  - @devtools/plugin-permission-common@0.7.11

## 0.5.32-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.20.1-next.0
  - @devtools/backend-plugin-api@0.6.9-next.0
  - @devtools/config@1.1.1
  - @devtools/errors@1.2.3
  - @devtools/plugin-auth-node@0.4.3-next.0
  - @devtools/plugin-permission-common@0.7.11
  - @devtools/plugin-permission-node@0.7.20-next.0

## 0.5.31

### Patch Changes

- 0cbb03b: Fixing regular expression ReDoS with zod packages. Upgrading to latest. ref: https://security.snyk.io/vuln/SNYK-JS-ZOD-5925617
- Updated dependencies
  - @devtools/backend-common@0.20.0
  - @devtools/plugin-auth-node@0.4.2
  - @devtools/plugin-permission-common@0.7.11
  - @devtools/plugin-permission-node@0.7.19
  - @devtools/backend-plugin-api@0.6.8
  - @devtools/config@1.1.1
  - @devtools/errors@1.2.3

## 0.5.31-next.3

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.20.0-next.3
  - @devtools/backend-plugin-api@0.6.8-next.3
  - @devtools/config@1.1.1
  - @devtools/errors@1.2.3
  - @devtools/plugin-auth-node@0.4.2-next.3
  - @devtools/plugin-permission-common@0.7.10
  - @devtools/plugin-permission-node@0.7.19-next.3

## 0.5.31-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.20.0-next.2
  - @devtools/plugin-auth-node@0.4.2-next.2
  - @devtools/backend-plugin-api@0.6.8-next.2
  - @devtools/config@1.1.1
  - @devtools/errors@1.2.3
  - @devtools/plugin-permission-common@0.7.10
  - @devtools/plugin-permission-node@0.7.19-next.2

## 0.5.31-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.20.0-next.1
  - @devtools/backend-plugin-api@0.6.8-next.1
  - @devtools/config@1.1.1
  - @devtools/errors@1.2.3
  - @devtools/plugin-auth-node@0.4.2-next.1
  - @devtools/plugin-permission-common@0.7.10
  - @devtools/plugin-permission-node@0.7.19-next.1

## 0.5.31-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.20.0-next.0
  - @devtools/plugin-auth-node@0.4.2-next.0
  - @devtools/plugin-permission-node@0.7.19-next.0
  - @devtools/backend-plugin-api@0.6.8-next.0
  - @devtools/config@1.1.1
  - @devtools/errors@1.2.3
  - @devtools/plugin-permission-common@0.7.10

## 0.5.30

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.19.9
  - @devtools/backend-plugin-api@0.6.7
  - @devtools/plugin-permission-common@0.7.10
  - @devtools/config@1.1.1
  - @devtools/errors@1.2.3
  - @devtools/plugin-auth-node@0.4.1
  - @devtools/plugin-permission-node@0.7.18

## 0.5.30-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.6.7-next.2
  - @devtools/backend-common@0.19.9-next.2
  - @devtools/plugin-auth-node@0.4.1-next.2
  - @devtools/plugin-permission-node@0.7.18-next.2

## 0.5.30-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.19.9-next.1
  - @devtools/plugin-auth-node@0.4.1-next.1
  - @devtools/plugin-permission-node@0.7.18-next.1
  - @devtools/backend-plugin-api@0.6.7-next.1
  - @devtools/config@1.1.1
  - @devtools/errors@1.2.3
  - @devtools/plugin-permission-common@0.7.9

## 0.5.30-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.19.9-next.0
  - @devtools/backend-plugin-api@0.6.7-next.0
  - @devtools/config@1.1.1
  - @devtools/errors@1.2.3
  - @devtools/plugin-auth-node@0.4.1-next.0
  - @devtools/plugin-permission-common@0.7.9
  - @devtools/plugin-permission-node@0.7.18-next.0

## 0.5.29

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.19.8
  - @devtools/plugin-auth-node@0.4.0
  - @devtools/errors@1.2.3
  - @devtools/backend-plugin-api@0.6.6
  - @devtools/plugin-permission-node@0.7.17
  - @devtools/config@1.1.1
  - @devtools/plugin-permission-common@0.7.9

## 0.5.29-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.19.8-next.2
  - @devtools/plugin-auth-node@0.4.0-next.2
  - @devtools/errors@1.2.3-next.0
  - @devtools/plugin-permission-node@0.7.17-next.2
  - @devtools/backend-plugin-api@0.6.6-next.2
  - @devtools/config@1.1.1-next.0
  - @devtools/plugin-permission-common@0.7.9-next.0

## 0.5.28-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.19.7-next.1
  - @devtools/backend-plugin-api@0.6.5-next.1
  - @devtools/plugin-auth-node@0.3.2-next.1
  - @devtools/plugin-permission-node@0.7.16-next.1
  - @devtools/config@1.1.0
  - @devtools/errors@1.2.2
  - @devtools/plugin-permission-common@0.7.8

## 0.5.28-next.0

### Patch Changes

- Updated dependencies
  - @devtools/plugin-auth-node@0.3.2-next.0
  - @devtools/backend-common@0.19.7-next.0
  - @devtools/config@1.1.0
  - @devtools/backend-plugin-api@0.6.5-next.0
  - @devtools/errors@1.2.2
  - @devtools/plugin-permission-common@0.7.8
  - @devtools/plugin-permission-node@0.7.16-next.0

## 0.5.26

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

- a8a614ba0d07: Minor `package.json` update.
- 84ad6fccd4d5: Moved `permissionModuleAllowAllPolicy` to `@devtools/plugin-permission-backend-module-allow-all-policy`
- Updated dependencies
  - @devtools/backend-common@0.19.5
  - @devtools/plugin-auth-node@0.3.0
  - @devtools/config@1.1.0
  - @devtools/errors@1.2.2
  - @devtools/plugin-permission-common@0.7.8
  - @devtools/plugin-permission-node@0.7.14
  - @devtools/backend-plugin-api@0.6.3

## 0.5.26-next.3

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

- a8a614ba0d07: Minor `package.json` update.
- Updated dependencies
  - @devtools/config@1.1.0-next.2
  - @devtools/errors@1.2.2-next.0
  - @devtools/plugin-permission-common@0.7.8-next.2
  - @devtools/plugin-permission-node@0.7.14-next.3
  - @devtools/backend-plugin-api@0.6.3-next.3
  - @devtools/backend-common@0.19.5-next.3
  - @devtools/plugin-auth-node@0.3.0-next.3

## 0.5.26-next.2

### Patch Changes

- 84ad6fccd4d5: Moved `permissionModuleAllowAllPolicy` to `@devtools/plugin-permission-backend-module-allow-all-policy`
- Updated dependencies
  - @devtools/config@1.1.0-next.1
  - @devtools/backend-common@0.19.5-next.2
  - @devtools/plugin-auth-node@0.3.0-next.2
  - @devtools/plugin-permission-node@0.7.14-next.2
  - @devtools/backend-plugin-api@0.6.3-next.2
  - @devtools/plugin-permission-common@0.7.8-next.1
  - @devtools/errors@1.2.1

## 0.5.26-next.1

### Patch Changes

- Updated dependencies
  - @devtools/config@1.1.0-next.0
  - @devtools/backend-common@0.19.5-next.1
  - @devtools/backend-plugin-api@0.6.3-next.1
  - @devtools/plugin-auth-node@0.3.0-next.1
  - @devtools/plugin-permission-common@0.7.8-next.0
  - @devtools/plugin-permission-node@0.7.14-next.1
  - @devtools/errors@1.2.1

## 0.5.25-next.0

### Patch Changes

- Updated dependencies
  - @devtools/plugin-auth-node@0.3.0-next.0
  - @devtools/backend-common@0.19.4-next.0
  - @devtools/backend-plugin-api@0.6.2-next.0
  - @devtools/config@1.0.8
  - @devtools/errors@1.2.1
  - @devtools/plugin-permission-common@0.7.7
  - @devtools/plugin-permission-node@0.7.13-next.0

## 0.5.23

### Patch Changes

- 629cbd194a87: Use `coreServices.rootConfig` instead of `coreService.config`
- 12a8c94eda8d: Add package repository and homepage metadata
- 0d6ddc62d8da: Refactor backend plugin creation parameter from callback to object.
- Updated dependencies
  - @devtools/backend-common@0.19.2
  - @devtools/backend-plugin-api@0.6.0
  - @devtools/plugin-auth-node@0.2.17
  - @devtools/plugin-permission-node@0.7.11
  - @devtools/config@1.0.8
  - @devtools/errors@1.2.1
  - @devtools/plugin-permission-common@0.7.7

## 0.5.23-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.6.0-next.2
  - @devtools/backend-common@0.19.2-next.2
  - @devtools/plugin-permission-node@0.7.11-next.2
  - @devtools/plugin-auth-node@0.2.17-next.2

## 0.5.23-next.1

### Patch Changes

- 629cbd194a87: Use `coreServices.rootConfig` instead of `coreService.config`
- 12a8c94eda8d: Add package repository and homepage metadata
- Updated dependencies
  - @devtools/backend-common@0.19.2-next.1
  - @devtools/plugin-auth-node@0.2.17-next.1
  - @devtools/backend-plugin-api@0.6.0-next.1
  - @devtools/plugin-permission-node@0.7.11-next.1
  - @devtools/config@1.0.8
  - @devtools/errors@1.2.1
  - @devtools/plugin-permission-common@0.7.7

## 0.5.23-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.19.2-next.0
  - @devtools/backend-plugin-api@0.5.5-next.0
  - @devtools/config@1.0.8
  - @devtools/errors@1.2.1
  - @devtools/plugin-auth-node@0.2.17-next.0
  - @devtools/plugin-permission-common@0.7.7
  - @devtools/plugin-permission-node@0.7.11-next.0

## 0.5.22

### Patch Changes

- Updated dependencies
  - @devtools/errors@1.2.1
  - @devtools/backend-common@0.19.1
  - @devtools/backend-plugin-api@0.5.4
  - @devtools/config@1.0.8
  - @devtools/plugin-auth-node@0.2.16
  - @devtools/plugin-permission-common@0.7.7
  - @devtools/plugin-permission-node@0.7.10

## 0.5.22-next.0

### Patch Changes

- Updated dependencies
  - @devtools/errors@1.2.1-next.0
  - @devtools/backend-common@0.19.1-next.0
  - @devtools/backend-plugin-api@0.5.4-next.0
  - @devtools/config@1.0.8
  - @devtools/plugin-auth-node@0.2.16-next.0
  - @devtools/plugin-permission-common@0.7.7-next.0
  - @devtools/plugin-permission-node@0.7.10-next.0

## 0.5.21

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.19.0
  - @devtools/errors@1.2.0
  - @devtools/backend-plugin-api@0.5.3
  - @devtools/plugin-auth-node@0.2.15
  - @devtools/plugin-permission-node@0.7.9
  - @devtools/config@1.0.8
  - @devtools/plugin-permission-common@0.7.6

## 0.5.21-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.19.0-next.2
  - @devtools/backend-plugin-api@0.5.3-next.2
  - @devtools/config@1.0.7
  - @devtools/errors@1.2.0-next.0
  - @devtools/plugin-auth-node@0.2.15-next.2
  - @devtools/plugin-permission-common@0.7.6-next.0
  - @devtools/plugin-permission-node@0.7.9-next.2

## 0.5.21-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.19.0-next.1
  - @devtools/errors@1.2.0-next.0
  - @devtools/backend-plugin-api@0.5.3-next.1
  - @devtools/plugin-auth-node@0.2.15-next.1
  - @devtools/plugin-permission-node@0.7.9-next.1
  - @devtools/plugin-permission-common@0.7.6-next.0
  - @devtools/config@1.0.7

## 0.5.21-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.18.6-next.0
  - @devtools/config@1.0.7
  - @devtools/backend-plugin-api@0.5.3-next.0
  - @devtools/errors@1.1.5
  - @devtools/plugin-auth-node@0.2.15-next.0
  - @devtools/plugin-permission-common@0.7.5
  - @devtools/plugin-permission-node@0.7.9-next.0

## 0.5.20

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.18.5
  - @devtools/plugin-permission-node@0.7.8
  - @devtools/plugin-auth-node@0.2.14
  - @devtools/backend-plugin-api@0.5.2
  - @devtools/config@1.0.7
  - @devtools/errors@1.1.5
  - @devtools/plugin-permission-common@0.7.5

## 0.5.20-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.18.5-next.1
  - @devtools/plugin-auth-node@0.2.14-next.1
  - @devtools/plugin-permission-node@0.7.8-next.1
  - @devtools/backend-plugin-api@0.5.2-next.1
  - @devtools/config@1.0.7

## 0.5.20-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.18.5-next.0
  - @devtools/plugin-permission-node@0.7.8-next.0
  - @devtools/plugin-auth-node@0.2.14-next.0
  - @devtools/backend-plugin-api@0.5.2-next.0
  - @devtools/config@1.0.7
  - @devtools/errors@1.1.5
  - @devtools/plugin-permission-common@0.7.5

## 0.5.19

### Patch Changes

- 84946a580c4: Introduced alpha export of the `permissionPlugin` for use in the new backend system, along with a `permissionModuleAllowAllPolicy` that can be used to allow all requests.
- 1e4f5e91b8e: Bump `zod` and `zod-to-json-schema` dependencies.
- Updated dependencies
  - @devtools/backend-common@0.18.4
  - @devtools/plugin-permission-node@0.7.7
  - @devtools/plugin-permission-common@0.7.5
  - @devtools/plugin-auth-node@0.2.13
  - @devtools/backend-plugin-api@0.5.1
  - @devtools/config@1.0.7
  - @devtools/errors@1.1.5

## 0.5.19-next.2

### Patch Changes

- 84946a580c4: Introduced alpha export of the `permissionPlugin` for use in the new backend system, along with a `permissionModuleAllowAllPolicy` that can be used to allow all requests.
- Updated dependencies
  - @devtools/backend-common@0.18.4-next.2
  - @devtools/plugin-permission-node@0.7.7-next.2
  - @devtools/backend-plugin-api@0.5.1-next.2
  - @devtools/config@1.0.7
  - @devtools/errors@1.1.5
  - @devtools/plugin-auth-node@0.2.13-next.2
  - @devtools/plugin-permission-common@0.7.5-next.0

## 0.5.19-next.1

### Patch Changes

- 1e4f5e91b8e: Bump `zod` and `zod-to-json-schema` dependencies.
- Updated dependencies
  - @devtools/plugin-permission-node@0.7.7-next.1
  - @devtools/plugin-permission-common@0.7.5-next.0
  - @devtools/backend-common@0.18.4-next.1
  - @devtools/config@1.0.7
  - @devtools/errors@1.1.5
  - @devtools/plugin-auth-node@0.2.13-next.1

## 0.5.19-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.18.4-next.0
  - @devtools/config@1.0.7
  - @devtools/errors@1.1.5
  - @devtools/plugin-auth-node@0.2.13-next.0
  - @devtools/plugin-permission-common@0.7.4
  - @devtools/plugin-permission-node@0.7.7-next.0

## 0.5.18

### Patch Changes

- 52b0022dab7: Updated dependency `msw` to `^1.0.0`.
- Updated dependencies
  - @devtools/plugin-permission-node@0.7.6
  - @devtools/plugin-auth-node@0.2.12
  - @devtools/backend-common@0.18.3
  - @devtools/errors@1.1.5
  - @devtools/plugin-permission-common@0.7.4
  - @devtools/config@1.0.7

## 0.5.18-next.2

### Patch Changes

- Updated dependencies
  - @devtools/plugin-auth-node@0.2.12-next.2
  - @devtools/backend-common@0.18.3-next.2
  - @devtools/plugin-permission-node@0.7.6-next.2
  - @devtools/config@1.0.7-next.0

## 0.5.18-next.1

### Patch Changes

- 52b0022dab7: Updated dependency `msw` to `^1.0.0`.
- Updated dependencies
  - @devtools/plugin-permission-node@0.7.6-next.1
  - @devtools/errors@1.1.5-next.0
  - @devtools/backend-common@0.18.3-next.1
  - @devtools/plugin-auth-node@0.2.12-next.1
  - @devtools/plugin-permission-common@0.7.4-next.0
  - @devtools/config@1.0.7-next.0

## 0.5.18-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.18.3-next.0
  - @devtools/config@1.0.6
  - @devtools/errors@1.1.4
  - @devtools/plugin-auth-node@0.2.12-next.0
  - @devtools/plugin-permission-common@0.7.3
  - @devtools/plugin-permission-node@0.7.6-next.0

## 0.5.17

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.18.2
  - @devtools/config@1.0.6
  - @devtools/errors@1.1.4
  - @devtools/plugin-auth-node@0.2.11
  - @devtools/plugin-permission-common@0.7.3
  - @devtools/plugin-permission-node@0.7.5

## 0.5.17-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.18.2-next.2
  - @devtools/plugin-auth-node@0.2.11-next.2
  - @devtools/plugin-permission-node@0.7.5-next.2
  - @devtools/config@1.0.6
  - @devtools/errors@1.1.4
  - @devtools/plugin-permission-common@0.7.3

## 0.5.17-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.18.2-next.1
  - @devtools/config@1.0.6
  - @devtools/errors@1.1.4
  - @devtools/plugin-auth-node@0.2.11-next.1
  - @devtools/plugin-permission-common@0.7.3
  - @devtools/plugin-permission-node@0.7.5-next.1

## 0.5.17-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.18.2-next.0
  - @devtools/plugin-auth-node@0.2.11-next.0
  - @devtools/plugin-permission-node@0.7.5-next.0

## 0.5.15

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.18.0
  - @devtools/config@1.0.6
  - @devtools/errors@1.1.4
  - @devtools/plugin-auth-node@0.2.9
  - @devtools/plugin-permission-common@0.7.3
  - @devtools/plugin-permission-node@0.7.3

## 0.5.15-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.18.0-next.1
  - @devtools/plugin-auth-node@0.2.9-next.1
  - @devtools/plugin-permission-node@0.7.3-next.1
  - @devtools/config@1.0.6-next.0
  - @devtools/errors@1.1.4
  - @devtools/plugin-permission-common@0.7.3-next.0

## 0.5.15-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.18.0-next.0
  - @devtools/config@1.0.6-next.0
  - @devtools/errors@1.1.4
  - @devtools/plugin-auth-node@0.2.9-next.0
  - @devtools/plugin-permission-common@0.7.3-next.0
  - @devtools/plugin-permission-node@0.7.3-next.0

## 0.5.14

### Patch Changes

- b05dcd5530: Move the `zod` dependency to a version that does not collide with other libraries
- 3280711113: Updated dependency `msw` to `^0.49.0`.
- Updated dependencies
  - @devtools/backend-common@0.17.0
  - @devtools/plugin-permission-common@0.7.2
  - @devtools/plugin-permission-node@0.7.2
  - @devtools/errors@1.1.4
  - @devtools/plugin-auth-node@0.2.8
  - @devtools/config@1.0.5

## 0.5.14-next.3

### Patch Changes

- b05dcd5530: Move the `zod` dependency to a version that does not collide with other libraries
- Updated dependencies
  - @devtools/plugin-permission-common@0.7.2-next.2
  - @devtools/plugin-permission-node@0.7.2-next.3
  - @devtools/backend-common@0.17.0-next.3
  - @devtools/config@1.0.5-next.1
  - @devtools/errors@1.1.4-next.1
  - @devtools/plugin-auth-node@0.2.8-next.3

## 0.5.14-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.17.0-next.2
  - @devtools/plugin-auth-node@0.2.8-next.2
  - @devtools/plugin-permission-node@0.7.2-next.2
  - @devtools/config@1.0.5-next.1
  - @devtools/errors@1.1.4-next.1
  - @devtools/plugin-permission-common@0.7.2-next.1

## 0.5.14-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.17.0-next.1
  - @devtools/plugin-auth-node@0.2.8-next.1
  - @devtools/plugin-permission-node@0.7.2-next.1
  - @devtools/config@1.0.5-next.1
  - @devtools/errors@1.1.4-next.1
  - @devtools/plugin-permission-common@0.7.2-next.1

## 0.5.14-next.0

### Patch Changes

- 3280711113: Updated dependency `msw` to `^0.49.0`.
- Updated dependencies
  - @devtools/backend-common@0.16.1-next.0
  - @devtools/plugin-auth-node@0.2.8-next.0
  - @devtools/plugin-permission-common@0.7.2-next.0
  - @devtools/plugin-permission-node@0.7.2-next.0
  - @devtools/config@1.0.5-next.0
  - @devtools/errors@1.1.4-next.0

## 0.5.13

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.16.0
  - @devtools/plugin-auth-node@0.2.7
  - @devtools/plugin-permission-common@0.7.1
  - @devtools/plugin-permission-node@0.7.1
  - @devtools/config@1.0.4
  - @devtools/errors@1.1.3

## 0.5.13-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.16.0-next.1
  - @devtools/plugin-auth-node@0.2.7-next.1
  - @devtools/plugin-permission-node@0.7.1-next.1
  - @devtools/config@1.0.4-next.0
  - @devtools/errors@1.1.3-next.0
  - @devtools/plugin-permission-common@0.7.1-next.0

## 0.5.13-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.16.0-next.0
  - @devtools/plugin-auth-node@0.2.7-next.0
  - @devtools/plugin-permission-common@0.7.1-next.0
  - @devtools/plugin-permission-node@0.7.1-next.0
  - @devtools/config@1.0.4-next.0
  - @devtools/errors@1.1.3-next.0

## 0.5.12

### Patch Changes

- 2d3a5f09ab: Use `response.json` rather than `response.send` where appropriate, as outlined in `SECURITY.md`
- Updated dependencies
  - @devtools/backend-common@0.15.2
  - @devtools/plugin-auth-node@0.2.6
  - @devtools/plugin-permission-node@0.7.0
  - @devtools/plugin-permission-common@0.7.0
  - @devtools/config@1.0.3
  - @devtools/errors@1.1.2

## 0.5.12-next.2

### Patch Changes

- 2d3a5f09ab: Use `response.json` rather than `response.send` where appropriate, as outlined in `SECURITY.md`
- Updated dependencies
  - @devtools/backend-common@0.15.2-next.2
  - @devtools/plugin-permission-common@0.7.0-next.2
  - @devtools/plugin-permission-node@0.7.0-next.2
  - @devtools/plugin-auth-node@0.2.6-next.2
  - @devtools/config@1.0.3-next.2
  - @devtools/errors@1.1.2-next.2

## 0.5.12-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.15.2-next.1
  - @devtools/config@1.0.3-next.1
  - @devtools/errors@1.1.2-next.1
  - @devtools/plugin-auth-node@0.2.6-next.1
  - @devtools/plugin-permission-common@0.6.5-next.1
  - @devtools/plugin-permission-node@0.6.6-next.1

## 0.5.12-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.15.2-next.0
  - @devtools/plugin-auth-node@0.2.6-next.0
  - @devtools/plugin-permission-node@0.6.6-next.0
  - @devtools/config@1.0.3-next.0
  - @devtools/errors@1.1.2-next.0
  - @devtools/plugin-permission-common@0.6.5-next.0

## 0.5.11

### Patch Changes

- 667d917488: Updated dependency `msw` to `^0.47.0`.
- 87ec2ba4d6: Updated dependency `msw` to `^0.46.0`.
- bf5e9030eb: Updated dependency `msw` to `^0.45.0`.
- 2cbd533426: Uptake the `IdentityApi` change to use `getIdentity` instead of `authenticate` for retrieving the logged in users identity.
- Updated dependencies
  - @devtools/backend-common@0.15.1
  - @devtools/plugin-auth-node@0.2.5
  - @devtools/plugin-permission-node@0.6.5
  - @devtools/config@1.0.2
  - @devtools/errors@1.1.1
  - @devtools/plugin-permission-common@0.6.4

## 0.5.11-next.2

### Patch Changes

- Updated dependencies
  - @devtools/config@1.0.2-next.0
  - @devtools/errors@1.1.1-next.0
  - @devtools/plugin-permission-common@0.6.4-next.2
  - @devtools/backend-common@0.15.1-next.3
  - @devtools/plugin-auth-node@0.2.5-next.3
  - @devtools/plugin-permission-node@0.6.5-next.3

## 0.5.11-next.1

### Patch Changes

- 667d917488: Updated dependency `msw` to `^0.47.0`.
- 87ec2ba4d6: Updated dependency `msw` to `^0.46.0`.
- 2cbd533426: Uptake the `IdentityApi` change to use `getIdentity` instead of `authenticate` for retrieving the logged in users identity.
- Updated dependencies
  - @devtools/backend-common@0.15.1-next.2
  - @devtools/plugin-auth-node@0.2.5-next.2
  - @devtools/plugin-permission-common@0.6.4-next.1
  - @devtools/plugin-permission-node@0.6.5-next.2

## 0.5.11-next.0

### Patch Changes

- bf5e9030eb: Updated dependency `msw` to `^0.45.0`.
- Updated dependencies
  - @devtools/backend-common@0.15.1-next.0
  - @devtools/plugin-auth-node@0.2.5-next.0
  - @devtools/plugin-permission-common@0.6.4-next.0
  - @devtools/plugin-permission-node@0.6.5-next.0

## 0.5.10

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.15.0
  - @devtools/plugin-auth-node@0.2.4
  - @devtools/plugin-permission-node@0.6.4

## 0.5.10-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.15.0-next.0
  - @devtools/plugin-auth-node@0.2.4-next.0
  - @devtools/plugin-permission-node@0.6.4-next.0

## 0.5.9

### Patch Changes

- a70869e775: Updated dependency `msw` to `^0.43.0`.
- 8006d0f9bf: Updated dependency `msw` to `^0.44.0`.
- Updated dependencies
  - @devtools/backend-common@0.14.1
  - @devtools/plugin-auth-node@0.2.3
  - @devtools/plugin-permission-common@0.6.3
  - @devtools/plugin-permission-node@0.6.3
  - @devtools/errors@1.1.0

## 0.5.9-next.2

### Patch Changes

- a70869e775: Updated dependency `msw` to `^0.43.0`.
- Updated dependencies
  - @devtools/backend-common@0.14.1-next.3
  - @devtools/plugin-auth-node@0.2.3-next.2
  - @devtools/plugin-permission-common@0.6.3-next.1
  - @devtools/plugin-permission-node@0.6.3-next.2

## 0.5.9-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.14.1-next.1
  - @devtools/errors@1.1.0-next.0
  - @devtools/plugin-auth-node@0.2.3-next.1
  - @devtools/plugin-permission-common@0.6.3-next.0
  - @devtools/plugin-permission-node@0.6.3-next.1

## 0.5.9-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.14.1-next.0
  - @devtools/plugin-auth-node@0.2.3-next.0
  - @devtools/plugin-permission-node@0.6.3-next.0

## 0.5.8

### Patch Changes

- 8f7b1835df: Updated dependency `msw` to `^0.41.0`.
- Updated dependencies
  - @devtools/plugin-permission-node@0.6.2
  - @devtools/backend-common@0.14.0
  - @devtools/plugin-auth-node@0.2.2
  - @devtools/plugin-permission-common@0.6.2

## 0.5.8-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.14.0-next.2
  - @devtools/plugin-auth-node@0.2.2-next.2
  - @devtools/plugin-permission-node@0.6.2-next.2

## 0.5.8-next.1

### Patch Changes

- 8f7b1835df: Updated dependency `msw` to `^0.41.0`.
- Updated dependencies
  - @devtools/backend-common@0.13.6-next.1
  - @devtools/plugin-auth-node@0.2.2-next.1
  - @devtools/plugin-permission-common@0.6.2-next.0
  - @devtools/plugin-permission-node@0.6.2-next.1

## 0.5.8-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.13.6-next.0
  - @devtools/plugin-auth-node@0.2.2-next.0
  - @devtools/plugin-permission-node@0.6.2-next.0

## 0.5.7

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.13.3
  - @devtools/config@1.0.1
  - @devtools/plugin-auth-node@0.2.1
  - @devtools/plugin-permission-common@0.6.1
  - @devtools/plugin-permission-node@0.6.1

## 0.5.7-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.13.3-next.2
  - @devtools/config@1.0.1-next.0
  - @devtools/plugin-auth-node@0.2.1-next.1
  - @devtools/plugin-permission-common@0.6.1-next.0
  - @devtools/plugin-permission-node@0.6.1-next.1

## 0.5.7-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.13.3-next.0
  - @devtools/plugin-auth-node@0.2.1-next.0
  - @devtools/plugin-permission-node@0.6.1-next.0

## 0.5.6

### Patch Changes

- c98d271466: Use updated types from `@devtools/plugin-permission-common`
- 95284162d6: - Add more specific check for policies which return conditional decisions for non-resource permissions.
  - Refine permission validation in authorize endpoint to differentiate between `BasicPermission` and `ResourcePermission` instances.
- Updated dependencies
  - @devtools/plugin-permission-common@0.6.0
  - @devtools/plugin-permission-node@0.6.0
  - @devtools/plugin-auth-node@0.2.0
  - @devtools/backend-common@0.13.2

## 0.5.6-next.1

### Patch Changes

- c98d271466: Use updated types from `@devtools/plugin-permission-common`
- 95284162d6: - Add more specific check for policies which return conditional decisions for non-resource permissions.
  - Refine permission validation in authorize endpoint to differentiate between `BasicPermission` and `ResourcePermission` instances.
- Updated dependencies
  - @devtools/plugin-permission-common@0.6.0-next.0
  - @devtools/plugin-permission-node@0.6.0-next.1
  - @devtools/backend-common@0.13.2-next.1

## 0.5.6-next.0

### Patch Changes

- Updated dependencies
  - @devtools/plugin-auth-node@0.2.0-next.0
  - @devtools/backend-common@0.13.2-next.0
  - @devtools/plugin-permission-node@0.5.6-next.0

## 0.5.5

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.13.1
  - @devtools/config@1.0.0
  - @devtools/errors@1.0.0
  - @devtools/plugin-permission-common@0.5.3
  - @devtools/plugin-auth-node@0.1.6
  - @devtools/plugin-permission-node@0.5.5

## 0.5.4

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.13.0
  - @devtools/plugin-auth-node@0.1.5
  - @devtools/plugin-permission-node@0.5.4

## 0.5.4-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.13.0-next.0
  - @devtools/plugin-auth-node@0.1.5-next.0
  - @devtools/plugin-permission-node@0.5.4-next.0

## 0.5.3

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.12.0
  - @devtools/plugin-permission-common@0.5.2
  - @devtools/plugin-permission-node@0.5.3
  - @devtools/plugin-auth-node@0.1.4

## 0.5.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.11.0
  - @devtools/plugin-permission-node@0.5.2
  - @devtools/plugin-auth-node@0.1.3

## 0.5.1

### Patch Changes

- Fix for the previous release with missing type declarations.
- Updated dependencies
  - @devtools/backend-common@0.10.9
  - @devtools/config@0.1.15
  - @devtools/errors@0.2.2
  - @devtools/plugin-auth-node@0.1.2
  - @devtools/plugin-permission-common@0.5.1
  - @devtools/plugin-permission-node@0.5.1

## 0.5.0

### Minor Changes

- e2cf0662eb: Add a warning if the permission backend is used without setting `permission.enabled=true`.

  **BREAKING** Permission backend's `createRouter` now requires a `config` option.

  ```diff
  // packages/backend/src/plugins/permission.ts

  ...
  export default async function createPlugin({
    ...
  + config,
  }: PluginEnvironment) {
    return createRouter({
      ...
  +   config,
    });
  }
  ```

### Patch Changes

- 1ed305728b: Bump `node-fetch` to version 2.6.7 and `cross-fetch` to version 3.1.5
- c77c5c7eb6: Added `devtools.role` to `package.json`
- Updated dependencies
  - @devtools/backend-common@0.10.8
  - @devtools/errors@0.2.1
  - @devtools/plugin-auth-node@0.1.1
  - @devtools/plugin-permission-common@0.5.0
  - @devtools/config@0.1.14
  - @devtools/plugin-permission-node@0.5.0

## 0.4.3

### Patch Changes

- b3f3e42036: Use `getBearerTokenFromAuthorizationHeader` from `@devtools/plugin-auth-node` instead of the deprecated `IdentityClient` method.
- Updated dependencies
  - @devtools/backend-common@0.10.7
  - @devtools/plugin-auth-node@0.1.0
  - @devtools/plugin-permission-node@0.4.3

## 0.4.3-next.0

### Patch Changes

- Updated dependencies
  - @devtools/plugin-auth-backend@0.10.0-next.0
  - @devtools/backend-common@0.10.7-next.0
  - @devtools/plugin-permission-node@0.4.3-next.0

## 0.4.2

### Patch Changes

- Updated dependencies
  - @devtools/plugin-auth-backend@0.9.0
  - @devtools/backend-common@0.10.6
  - @devtools/plugin-permission-node@0.4.2

## 0.4.2-next.1

### Patch Changes

- Updated dependencies
  - @devtools/plugin-auth-backend@0.9.0-next.1
  - @devtools/backend-common@0.10.6-next.0
  - @devtools/plugin-permission-node@0.4.2-next.1

## 0.4.2-next.0

### Patch Changes

- Updated dependencies
  - @devtools/plugin-auth-backend@0.9.0-next.0
  - @devtools/plugin-permission-node@0.4.2-next.0

## 0.4.1

### Patch Changes

- Updated dependencies
  - @devtools/plugin-auth-backend@0.8.0
  - @devtools/backend-common@0.10.5
  - @devtools/plugin-permission-node@0.4.1

## 0.4.0

### Minor Changes

- b768259244: **BREAKING**: Wrap batched requests and responses to /authorize in an envelope object. The latest version of the PermissionClient in @devtools/permission-common uses the new format - as long as the permission-backend is consumed using this client, no other changes are necessary.

### Patch Changes

- Updated dependencies
  - @devtools/plugin-auth-backend@0.7.0
  - @devtools/plugin-permission-common@0.4.0
  - @devtools/backend-common@0.10.4
  - @devtools/config@0.1.13
  - @devtools/plugin-permission-node@0.4.0

## 0.4.0-next.0

### Minor Changes

- b768259244: **BREAKING**: Wrap batched requests and responses to /authorize in an envelope object. The latest version of the PermissionClient in @devtools/permission-common uses the new format - as long as the permission-backend is consumed using this client, no other changes are necessary.

### Patch Changes

- Updated dependencies
  - @devtools/plugin-auth-backend@0.7.0-next.0
  - @devtools/plugin-permission-common@0.4.0-next.0
  - @devtools/backend-common@0.10.4-next.0
  - @devtools/config@0.1.13-next.0
  - @devtools/plugin-permission-node@0.4.0-next.0

## 0.3.0

### Minor Changes

- 419ca637c0: Optimizations to the integration between the permission backend and plugin-backends using createPermissionIntegrationRouter:

  - The permission backend already supported batched requests to authorize, but would make calls to plugin backend to apply conditions serially. Now, after applying the policy for each authorization request, the permission backend makes a single batched /apply-conditions request to each plugin backend referenced in policy decisions.
  - The `getResource` method accepted by `createPermissionIntegrationRouter` has been replaced with `getResources`, to allow consumers to make batch requests to upstream data stores. When /apply-conditions is called with a batch of requests, all required resources are requested in a single invocation of `getResources`.

  Plugin owners consuming `createPermissionIntegrationRouter` should replace the `getResource` method in the options with a `getResources` method, accepting an array of resourceRefs, and returning an array of the corresponding resources.

### Patch Changes

- Updated dependencies
  - @devtools/config@0.1.12
  - @devtools/backend-common@0.10.3
  - @devtools/plugin-permission-node@0.3.0
  - @devtools/plugin-auth-backend@0.6.2
  - @devtools/errors@0.2.0
  - @devtools/plugin-permission-common@0.3.1

## 0.2.3

### Patch Changes

- Updated dependencies
  - @devtools/plugin-auth-backend@0.6.0
  - @devtools/backend-common@0.10.1
  - @devtools/plugin-permission-node@0.2.3

## 0.2.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.10.0
  - @devtools/plugin-auth-backend@0.5.2
  - @devtools/plugin-permission-common@0.3.0
  - @devtools/plugin-permission-node@0.2.2

## 0.2.1

### Patch Changes

- a036b65c2f: Updated to use the new `DevtoolsIdentityResponse` type from `@devtools/plugin-auth-backend`.

  The `DevtoolsIdentityResponse` type is backwards compatible with the `DevtoolsIdentity`, and provides an additional `identity` field with the claims of the user.

- Updated dependencies
  - @devtools/plugin-auth-backend@0.5.0
  - @devtools/backend-common@0.9.13
  - @devtools/plugin-permission-node@0.2.1

## 0.2.0

### Minor Changes

- 450ca92330: Change route used for integration between the authorization framework and other plugin backends to use the /.well-known prefix.

### Patch Changes

- e7851efa9e: Rename and adjust permission policy return type to reduce nesting
- Updated dependencies
  - @devtools/plugin-auth-backend@0.4.10
  - @devtools/plugin-permission-node@0.2.0
  - @devtools/backend-common@0.9.12

## 0.1.0

### Minor Changes

- 7a8312f126: New package containing the backend for authorization and permissions. For more information, see the [authorization PRFC](https://github.com/khulnasoft/devtools/pull/7761).

### Patch Changes

- Updated dependencies
  - @devtools/plugin-auth-backend@0.4.9
  - @devtools/plugin-permission-node@0.1.0
  - @devtools/backend-common@0.9.11
  - @devtools/plugin-permission-common@0.2.0
