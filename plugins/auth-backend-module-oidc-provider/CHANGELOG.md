# @devtools/plugin-auth-backend-module-oidc-provider

## 0.3.4-next.0

### Patch Changes

- Updated dependencies
  - @devtools/plugin-auth-node@0.5.6-next.0
  - @devtools/plugin-auth-backend@0.24.2-next.0
  - @devtools/backend-plugin-api@1.1.1-next.0

## 0.3.3

### Patch Changes

- Updated dependencies
  - @devtools/plugin-auth-backend@0.24.1
  - @devtools/plugin-auth-node@0.5.5
  - @devtools/backend-plugin-api@1.1.0

## 0.3.3-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@1.1.0-next.2
  - @devtools/plugin-auth-backend@0.24.1-next.2
  - @devtools/plugin-auth-node@0.5.5-next.2

## 0.3.3-next.1

### Patch Changes

- Updated dependencies
  - @devtools/plugin-auth-backend@0.24.1-next.1
  - @devtools/plugin-auth-node@0.5.5-next.1
  - @devtools/backend-plugin-api@1.1.0-next.1

## 0.3.3-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@1.0.3-next.0
  - @devtools/plugin-auth-node@0.5.5-next.0
  - @devtools/plugin-auth-backend@0.24.1-next.0

## 0.3.2

### Patch Changes

- 5d74716: Remove unused backend-common dependency
- Updated dependencies
  - @devtools/plugin-auth-backend@0.24.0
  - @devtools/plugin-auth-node@0.5.4
  - @devtools/backend-plugin-api@1.0.2

## 0.3.2-next.2

### Patch Changes

- Updated dependencies
  - @devtools/plugin-auth-backend@0.24.0-next.2
  - @devtools/plugin-auth-node@0.5.4-next.2
  - @devtools/backend-plugin-api@1.0.2-next.2

## 0.3.2-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@1.0.2-next.1
  - @devtools/plugin-auth-backend@0.24.0-next.1
  - @devtools/plugin-auth-node@0.5.4-next.1

## 0.3.2-next.0

### Patch Changes

- Updated dependencies
  - @devtools/plugin-auth-backend@0.24.0-next.0
  - @devtools/plugin-auth-node@0.5.4-next.0
  - @devtools/backend-plugin-api@1.0.2-next.0

## 0.3.1

### Patch Changes

- 217458a: Updated configuration schema to include the new `allowedDomains` option for the `emailLocalPartMatchingUserEntityName` sign-in resolver.
- 094eaa3: Remove references to in-repo backend-common
- Updated dependencies
  - @devtools/plugin-auth-node@0.5.3
  - @devtools/plugin-auth-backend@0.23.1
  - @devtools/backend-plugin-api@1.0.1

## 0.3.1-next.1

### Patch Changes

- 217458a: Updated configuration schema to include the new `allowedDomains` option for the `emailLocalPartMatchingUserEntityName` sign-in resolver.
- Updated dependencies
  - @devtools/plugin-auth-node@0.5.3-next.1
  - @devtools/backend-plugin-api@1.0.1-next.1
  - @devtools/plugin-auth-backend@0.23.1-next.1

## 0.3.1-next.0

### Patch Changes

- 094eaa3: Remove references to in-repo backend-common
- Updated dependencies
  - @devtools/plugin-auth-backend@0.23.1-next.0
  - @devtools/plugin-auth-node@0.5.3-next.0
  - @devtools/backend-plugin-api@1.0.1-next.0

## 0.3.0

### Minor Changes

- d425fc4: **BREAKING**: The return values from `createBackendPlugin`, `createBackendModule`, and `createServiceFactory` are now simply `BackendFeature` and `ServiceFactory`, instead of the previously deprecated form of a function that returns them. For this reason, `createServiceFactory` also no longer accepts the callback form where you provide direct options to the service. This also affects all `coreServices.*` service refs.

  This may in particular affect tests; if you were effectively doing `createBackendModule({...})()` (note the parentheses), you can now remove those extra parentheses at the end. You may encounter cases of this in your `packages/backend/src/index.ts` too, where you add plugins, modules, and services. If you were using `createServiceFactory` with a function as its argument for the purpose of passing in options, this pattern has been deprecated for a while and is no longer supported. You may want to explore the new multiton patterns to achieve your goals, or moving settings to app-config.

  As part of this change, the `IdentityFactoryOptions` type was removed, and can no longer be used to tweak that service. The identity service was also deprecated some time ago, and you will want to [migrate to the new auth system](https://devtools.khulnasoft.com/docs/tutorials/auth-service-migration) if you still rely on it.

### Patch Changes

- c2b63ab: Updated dependency `supertest` to `^7.0.0`.
- Updated dependencies
  - @devtools/backend-common@0.25.0
  - @devtools/backend-plugin-api@1.0.0
  - @devtools/plugin-auth-node@0.5.2
  - @devtools/plugin-auth-backend@0.23.0

## 0.3.0-next.2

### Patch Changes

- c2b63ab: Updated dependency `supertest` to `^7.0.0`.
- Updated dependencies
  - @devtools/backend-common@0.25.0-next.2
  - @devtools/plugin-auth-node@0.5.2-next.2
  - @devtools/plugin-auth-backend@0.23.0-next.2
  - @devtools/backend-plugin-api@1.0.0-next.2

## 0.3.0-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.25.0-next.1
  - @devtools/plugin-auth-node@0.5.2-next.1
  - @devtools/backend-plugin-api@0.9.0-next.1
  - @devtools/plugin-auth-backend@0.23.0-next.1

## 0.3.0-next.0

### Minor Changes

- d425fc4: **BREAKING**: The return values from `createBackendPlugin`, `createBackendModule`, and `createServiceFactory` are now simply `BackendFeature` and `ServiceFactory`, instead of the previously deprecated form of a function that returns them. For this reason, `createServiceFactory` also no longer accepts the callback form where you provide direct options to the service. This also affects all `coreServices.*` service refs.

  This may in particular affect tests; if you were effectively doing `createBackendModule({...})()` (note the parentheses), you can now remove those extra parentheses at the end. You may encounter cases of this in your `packages/backend/src/index.ts` too, where you add plugins, modules, and services. If you were using `createServiceFactory` with a function as its argument for the purpose of passing in options, this pattern has been deprecated for a while and is no longer supported. You may want to explore the new multiton patterns to achieve your goals, or moving settings to app-config.

  As part of this change, the `IdentityFactoryOptions` type was removed, and can no longer be used to tweak that service. The identity service was also deprecated some time ago, and you will want to [migrate to the new auth system](https://devtools.khulnasoft.com/docs/tutorials/auth-service-migration) if you still rely on it.

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.9.0-next.0
  - @devtools/plugin-auth-backend@0.23.0-next.0
  - @devtools/backend-common@0.25.0-next.0
  - @devtools/plugin-auth-node@0.5.2-next.0

## 0.2.4

### Patch Changes

- c8f1cae: Add `signIn` to authentication provider configuration schema
- Updated dependencies
  - @devtools/backend-plugin-api@0.8.0
  - @devtools/backend-common@0.24.0
  - @devtools/plugin-auth-backend@0.22.10
  - @devtools/plugin-auth-node@0.5.0

## 0.2.4-next.3

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.8.0-next.3
  - @devtools/backend-common@0.23.4-next.3
  - @devtools/plugin-auth-backend@0.22.10-next.3
  - @devtools/plugin-auth-node@0.5.0-next.3

## 0.2.4-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.8.0-next.2
  - @devtools/backend-common@0.23.4-next.2
  - @devtools/plugin-auth-backend@0.22.10-next.2
  - @devtools/plugin-auth-node@0.5.0-next.2

## 0.2.4-next.1

### Patch Changes

- c8f1cae: Add `signIn` to authentication provider configuration schema
- Updated dependencies
  - @devtools/backend-plugin-api@0.7.1-next.1
  - @devtools/plugin-auth-backend@0.22.10-next.1
  - @devtools/backend-common@0.23.4-next.1
  - @devtools/plugin-auth-node@0.4.18-next.1

## 0.2.4-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.23.4-next.0
  - @devtools/backend-plugin-api@0.7.1-next.0
  - @devtools/plugin-auth-backend@0.22.10-next.0
  - @devtools/plugin-auth-node@0.4.18-next.0

## 0.2.3

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.7.0
  - @devtools/backend-common@0.23.3
  - @devtools/plugin-auth-node@0.4.17
  - @devtools/plugin-auth-backend@0.22.9

## 0.2.3-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.23.3-next.1
  - @devtools/backend-plugin-api@0.6.22-next.1
  - @devtools/plugin-auth-backend@0.22.9-next.1
  - @devtools/plugin-auth-node@0.4.17-next.1

## 0.2.2-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.6.21-next.0
  - @devtools/backend-common@0.23.2-next.0
  - @devtools/plugin-auth-backend@0.22.8-next.0
  - @devtools/plugin-auth-node@0.4.16-next.0

## 0.2.0

### Minor Changes

- 8efc6cf: **BREAKING**: The `scope` config option have been removed and replaced by the standard `additionalScopes` config. In addition, `openid`, `profile`, and `email` scopes have been set to required and will always be present.

### Patch Changes

- 78a0b08: Internal refactor to handle `BackendFeature` contract change.
- d44a20a: Added additional plugin metadata to `package.json`.
- 4f21993: if oidc server do not provide revocation_endpoint，we should not call revoke function
- Updated dependencies
  - @devtools/backend-common@0.23.0
  - @devtools/backend-plugin-api@0.6.19
  - @devtools/plugin-auth-node@0.4.14
  - @devtools/plugin-auth-backend@0.22.6

## 0.2.0-next.3

### Minor Changes

- 8efc6cf: **BREAKING**: The `scope` config option have been removed and replaced by the standard `additionalScopes` config. In addition, `openid`, `profile`, and `email` scopes have been set to required and will always be present.

### Patch Changes

- d44a20a: Added additional plugin metadata to `package.json`.
- Updated dependencies
  - @devtools/backend-plugin-api@0.6.19-next.3
  - @devtools/plugin-auth-node@0.4.14-next.3
  - @devtools/plugin-auth-backend@0.22.6-next.3
  - @devtools/backend-common@0.23.0-next.3

## 0.1.10-next.2

### Patch Changes

- 4f21993: if oidc server do not provide revocation_endpoint，we should not call revoke function
- Updated dependencies
  - @devtools/backend-plugin-api@0.6.19-next.2
  - @devtools/backend-common@0.23.0-next.2
  - @devtools/plugin-auth-backend@0.22.6-next.2
  - @devtools/plugin-auth-node@0.4.14-next.2

## 0.1.10-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.6.19-next.1
  - @devtools/backend-common@0.23.0-next.1
  - @devtools/plugin-auth-backend@0.22.6-next.1
  - @devtools/plugin-auth-node@0.4.14-next.1

## 0.1.10-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.22.1-next.0
  - @devtools/plugin-auth-backend@0.22.6-next.0
  - @devtools/backend-plugin-api@0.6.19-next.0
  - @devtools/plugin-auth-node@0.4.14-next.0

## 0.1.9

### Patch Changes

- dd53bf3: Add nonce to authorize request to be added in ID token
- Updated dependencies
  - @devtools/backend-common@0.22.0
  - @devtools/backend-plugin-api@0.6.18
  - @devtools/plugin-auth-backend@0.22.5
  - @devtools/plugin-auth-node@0.4.13

## 0.1.9-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.22.0-next.1
  - @devtools/plugin-auth-backend@0.22.5-next.1
  - @devtools/plugin-auth-node@0.4.13-next.1
  - @devtools/backend-plugin-api@0.6.18-next.1

## 0.1.9-next.0

### Patch Changes

- dd53bf3: Add nonce to authorize request to be added in ID token
- Updated dependencies
  - @devtools/plugin-auth-backend@0.22.5-next.0
  - @devtools/plugin-auth-node@0.4.13-next.0
  - @devtools/backend-common@0.21.8-next.0
  - @devtools/backend-plugin-api@0.6.18-next.0

## 0.1.8

### Patch Changes

- 28eb473: Support revoke refresh token to oidc logout function
- Updated dependencies
  - @devtools/backend-common@0.21.7
  - @devtools/plugin-auth-backend@0.22.4
  - @devtools/backend-plugin-api@0.6.17
  - @devtools/plugin-auth-node@0.4.12

## 0.1.8-next.1

### Patch Changes

- 28eb473: Support revoke refresh token to oidc logout function
- Updated dependencies
  - @devtools/backend-common@0.21.7-next.1
  - @devtools/plugin-auth-backend@0.22.4-next.1
  - @devtools/backend-plugin-api@0.6.17-next.1
  - @devtools/plugin-auth-node@0.4.12-next.1

## 0.1.8-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.21.7-next.0
  - @devtools/backend-plugin-api@0.6.17-next.0
  - @devtools/plugin-auth-backend@0.22.4-next.0
  - @devtools/plugin-auth-node@0.4.12-next.0

## 0.1.7

### Patch Changes

- Updated dependencies
  - @devtools/plugin-auth-backend@0.22.3
  - @devtools/plugin-auth-node@0.4.11
  - @devtools/backend-common@0.21.6
  - @devtools/backend-plugin-api@0.6.16

## 0.1.6

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.21.5
  - @devtools/plugin-auth-backend@0.22.2
  - @devtools/plugin-auth-node@0.4.10
  - @devtools/backend-plugin-api@0.6.15

## 0.1.5

### Patch Changes

- Updated dependencies
  - @devtools/plugin-auth-backend@0.22.1

## 0.1.4

### Patch Changes

- 74b1dc9: Increased HTTP request timeout used by OIDC authenticator.
- 2af5354: Bump dependency `jose` to v5
- Updated dependencies
  - @devtools/backend-common@0.21.4
  - @devtools/plugin-auth-node@0.4.9
  - @devtools/backend-plugin-api@0.6.14
  - @devtools/plugin-auth-backend@0.22.0

## 0.1.4-next.2

### Patch Changes

- 74b1dc9: Increased HTTP request timeout used by OIDC authenticator.
- Updated dependencies
  - @devtools/backend-common@0.21.4-next.2
  - @devtools/plugin-auth-backend@0.22.0-next.2
  - @devtools/plugin-auth-node@0.4.9-next.2
  - @devtools/backend-plugin-api@0.6.14-next.2

## 0.1.4-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.21.4-next.1
  - @devtools/backend-plugin-api@0.6.14-next.1
  - @devtools/plugin-auth-backend@0.22.0-next.1
  - @devtools/plugin-auth-node@0.4.9-next.1

## 0.1.3-next.0

### Patch Changes

- 2af5354: Bump dependency `jose` to v5
- Updated dependencies
  - @devtools/backend-common@0.21.3-next.0
  - @devtools/plugin-auth-node@0.4.8-next.0
  - @devtools/backend-plugin-api@0.6.13-next.0
  - @devtools/plugin-auth-backend@0.22.0-next.0

## 0.1.0

### Minor Changes

- 5d2fcba: Created new `@devtools/plugin-auth-backend-module-oidc-provider` module package to house oidc auth provider migration.

### Patch Changes

- e471890: Fixed a bug where the OIDC authenticator did not properly persist granted OAuth scopes.
- 8472188: Added or fixed the `repository` field in `package.json`.
- 8afb6f4: Updated dependency `passport` to `^0.7.0`.
- Updated dependencies
  - @devtools/backend-common@0.21.0
  - @devtools/plugin-auth-backend@0.21.0
  - @devtools/plugin-auth-node@0.4.4
  - @devtools/backend-plugin-api@0.6.10

## 0.1.0-next.3

### Patch Changes

- e471890: Fixed a bug where the OIDC authenticator did not properly persist granted OAuth scopes.
- 8472188: Added or fixed the `repository` field in `package.json`.
- Updated dependencies
  - @devtools/backend-common@0.21.0-next.3
  - @devtools/plugin-auth-backend@0.21.0-next.3
  - @devtools/plugin-auth-node@0.4.4-next.3
  - @devtools/backend-plugin-api@0.6.10-next.3

## 0.1.0-next.2

### Patch Changes

- Updated dependencies
  - @devtools/plugin-auth-backend@0.21.0-next.2
  - @devtools/backend-common@0.21.0-next.2
  - @devtools/backend-plugin-api@0.6.10-next.2
  - @devtools/plugin-auth-node@0.4.4-next.2

## 0.1.0-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.6.10-next.1
  - @devtools/backend-common@0.21.0-next.1
  - @devtools/plugin-auth-backend@0.20.4-next.1
  - @devtools/plugin-auth-node@0.4.4-next.1

## 0.1.0-next.0

### Minor Changes

- 5d2fcba: Created new `@devtools/plugin-auth-backend-module-oidc-provider` module package to house oidc auth provider migration.

### Patch Changes

- 8afb6f4: Updated dependency `passport` to `^0.7.0`.
- Updated dependencies
  - @devtools/plugin-auth-backend@0.20.4-next.0
  - @devtools/backend-common@0.21.0-next.0
  - @devtools/plugin-auth-node@0.4.4-next.0
  - @devtools/backend-plugin-api@0.6.10-next.0
