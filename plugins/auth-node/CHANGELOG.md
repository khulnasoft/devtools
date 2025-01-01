# @devtools/plugin-auth-node

## 0.5.6-next.0

### Patch Changes

- d9d62ef: Remove some internal usages of the backend-common package
- 8379bf4: Remove usages of `PluginDatabaseManager` and `PluginEndpointDiscovery` and replace with their equivalent service types
- Updated dependencies
  - @devtools/backend-plugin-api@1.1.1-next.0
  - @devtools/catalog-client@1.9.0
  - @devtools/catalog-model@1.7.2
  - @devtools/config@1.3.1
  - @devtools/errors@1.2.6
  - @devtools/types@1.2.0

## 0.5.5

### Patch Changes

- c907440: Improved error forwarding for OAuth refresh endpoints
- 1e624ca: Restrict `@types/express` version range from `*` to `^4.17.6`.
- 5c9cc05: Use native fetch instead of node-fetch
- Updated dependencies
  - @devtools/backend-plugin-api@1.1.0
  - @devtools/catalog-client@1.9.0
  - @devtools/errors@1.2.6
  - @devtools/catalog-model@1.7.2
  - @devtools/config@1.3.1
  - @devtools/types@1.2.0

## 0.5.5-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@1.1.0-next.2
  - @devtools/errors@1.2.6-next.0
  - @devtools/catalog-client@1.9.0-next.2
  - @devtools/catalog-model@1.7.2-next.0
  - @devtools/config@1.3.1-next.0
  - @devtools/types@1.2.0

## 0.5.5-next.1

### Patch Changes

- c907440: Improved error forwarding for OAuth refresh endpoints
- 5c9cc05: Use native fetch instead of node-fetch
- Updated dependencies
  - @devtools/catalog-client@1.9.0-next.1
  - @devtools/backend-plugin-api@1.1.0-next.1
  - @devtools/catalog-model@1.7.1
  - @devtools/config@1.3.0
  - @devtools/errors@1.2.5
  - @devtools/types@1.2.0

## 0.5.5-next.0

### Patch Changes

- 1e624ca: Restrict `@types/express` version range from `*` to `^4.17.6`.
- Updated dependencies
  - @devtools/backend-plugin-api@1.0.3-next.0
  - @devtools/catalog-client@1.8.1-next.0
  - @devtools/catalog-model@1.7.1
  - @devtools/config@1.3.0
  - @devtools/errors@1.2.5
  - @devtools/types@1.2.0

## 0.5.4

### Patch Changes

- a0a9a4a: Browsers silently drop cookies that exceed 4KB, which can be problematic for refresh tokens and other large cookies.This update ensures that large cookies, like refresh tokens, are not dropped by browsers, maintaining the integrity of the authentication process. The changes include both the implementation of the cookie splitting logic and corresponding tests to validate the new functionality.
- 4e58bc7: Upgrade to uuid v11 internally
- Updated dependencies
  - @devtools/catalog-client@1.8.0
  - @devtools/config@1.3.0
  - @devtools/types@1.2.0
  - @devtools/backend-plugin-api@1.0.2
  - @devtools/catalog-model@1.7.1
  - @devtools/errors@1.2.5

## 0.5.4-next.2

### Patch Changes

- Updated dependencies
  - @devtools/catalog-client@1.8.0-next.1
  - @devtools/backend-plugin-api@1.0.2-next.2
  - @devtools/catalog-model@1.7.0
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1

## 0.5.4-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@1.0.2-next.1
  - @devtools/catalog-client@1.8.0-next.0
  - @devtools/catalog-model@1.7.0
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1

## 0.5.4-next.0

### Patch Changes

- a0a9a4a: Browsers silently drop cookies that exceed 4KB, which can be problematic for refresh tokens and other large cookies.This update ensures that large cookies, like refresh tokens, are not dropped by browsers, maintaining the integrity of the authentication process. The changes include both the implementation of the cookie splitting logic and corresponding tests to validate the new functionality.
- Updated dependencies
  - @devtools/catalog-client@1.8.0-next.0
  - @devtools/backend-plugin-api@1.0.2-next.0
  - @devtools/catalog-model@1.7.0
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1

## 0.5.3

### Patch Changes

- 217458a: Added a new `allowedDomains` option for the common `emailLocalPartMatchingUserEntityName` sign-in resolver.
- 094eaa3: Remove references to in-repo backend-common
- e4ad29a: Fix authentication error handling using redirect flow via `enableExperimentalRedirectFlow` config. If an error is caught during authentication, the user is redirected back to app origin with `error` query parameter containing the error message.
- Updated dependencies
  - @devtools/catalog-client@1.7.1
  - @devtools/backend-plugin-api@1.0.1
  - @devtools/catalog-model@1.7.0
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1

## 0.5.3-next.1

### Patch Changes

- 217458a: Added a new `allowedDomains` option for the common `emailLocalPartMatchingUserEntityName` sign-in resolver.
- Updated dependencies
  - @devtools/catalog-client@1.7.1-next.0
  - @devtools/backend-plugin-api@1.0.1-next.1
  - @devtools/catalog-model@1.7.0
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1

## 0.5.3-next.0

### Patch Changes

- 094eaa3: Remove references to in-repo backend-common
- Updated dependencies
  - @devtools/backend-plugin-api@1.0.1-next.0
  - @devtools/catalog-client@1.7.0
  - @devtools/catalog-model@1.7.0
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1

## 0.5.2

### Patch Changes

- c46eb0f: Extend the "unable to resolve user identity" message
- d908d8c: Accepts an optional options object in the `PassportOAuthAuthenticatorHelper.authenticate` method.
- c2b63ab: Updated dependency `supertest` to `^7.0.0`.
- 6f409b7: The `emailMatchingUserEntityProfileEmail` sign-in resolver will now also try matching emails with plus addressing removed.
- Updated dependencies
  - @devtools/backend-common@0.25.0
  - @devtools/backend-plugin-api@1.0.0
  - @devtools/catalog-model@1.7.0
  - @devtools/catalog-client@1.7.0
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1

## 0.5.2-next.2

### Patch Changes

- d908d8c: Accepts an optional options object in the `PassportOAuthAuthenticatorHelper.authenticate` method.
- c2b63ab: Updated dependency `supertest` to `^7.0.0`.
- Updated dependencies
  - @devtools/backend-common@0.25.0-next.2
  - @devtools/backend-plugin-api@1.0.0-next.2
  - @devtools/catalog-client@1.7.0-next.1
  - @devtools/catalog-model@1.6.0
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1

## 0.5.2-next.1

### Patch Changes

- c46eb0f: Extend the "unable to resolve user identity" message
- Updated dependencies
  - @devtools/backend-common@0.25.0-next.1
  - @devtools/catalog-client@1.6.7-next.0
  - @devtools/backend-plugin-api@0.9.0-next.1
  - @devtools/catalog-model@1.6.0
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1

## 0.5.2-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.9.0-next.0
  - @devtools/backend-common@0.25.0-next.0
  - @devtools/catalog-client@1.6.6
  - @devtools/catalog-model@1.6.0
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1

## 0.5.0

### Minor Changes

- 579afd0: **BREAKING**: Sign-in resolvers configured via `.signIn.resolvers` now take precedence over sign-in resolvers passed to `signInResolver` option of `createOAuthProviderFactory`. This effectively makes sign-in resolvers passed via the `signInResolver` the default one, which you can then override through configuration.

### Patch Changes

- 93095ee: Make sure node-fetch is version 2.7.0 or greater
- Updated dependencies
  - @devtools/backend-plugin-api@0.8.0
  - @devtools/backend-common@0.24.0
  - @devtools/catalog-model@1.6.0
  - @devtools/catalog-client@1.6.6
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1

## 0.5.0-next.3

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.8.0-next.3
  - @devtools/backend-common@0.23.4-next.3
  - @devtools/catalog-model@1.6.0-next.0
  - @devtools/catalog-client@1.6.6-next.0
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1

## 0.5.0-next.2

### Minor Changes

- 579afd0: **BREAKING**: Sign-in resolvers configured via `.signIn.resolvers` now take precedence over sign-in resolvers passed to `signInResolver` option of `createOAuthProviderFactory`. This effectively makes sign-in resolvers passed via the `signInResolver` the default one, which you can then override through configuration.

### Patch Changes

- 93095ee: Make sure node-fetch is version 2.7.0 or greater
- Updated dependencies
  - @devtools/backend-plugin-api@0.8.0-next.2
  - @devtools/backend-common@0.23.4-next.2
  - @devtools/catalog-client@1.6.5
  - @devtools/catalog-model@1.5.0
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1

## 0.4.18-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.7.1-next.1
  - @devtools/backend-common@0.23.4-next.1
  - @devtools/catalog-client@1.6.5
  - @devtools/catalog-model@1.5.0
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1

## 0.4.18-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.23.4-next.0
  - @devtools/backend-plugin-api@0.7.1-next.0
  - @devtools/catalog-client@1.6.5
  - @devtools/catalog-model@1.5.0
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1

## 0.4.17

### Patch Changes

- 55c1a72: Fix issues with Atlassian OAuth provider: retrieve the email and photo that were not in arrays but rather in single props.
- Updated dependencies
  - @devtools/backend-plugin-api@0.7.0
  - @devtools/backend-common@0.23.3
  - @devtools/catalog-client@1.6.5
  - @devtools/catalog-model@1.5.0
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1

## 0.4.17-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.23.3-next.1
  - @devtools/backend-plugin-api@0.6.22-next.1
  - @devtools/catalog-client@1.6.5
  - @devtools/catalog-model@1.5.0
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1

## 0.4.16-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.6.21-next.0
  - @devtools/backend-common@0.23.2-next.0
  - @devtools/catalog-client@1.6.5
  - @devtools/catalog-model@1.5.0
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1

## 0.4.14

### Patch Changes

- 798ec37: Updated scope management for OAuth providers, where the `createOAuthAuthenticator` now accepts a new collection of `scopes` options:

  - `scopes.persist` - Whether scopes should be persisted, replaces the `shouldPersistScopes` option.
  - `scopes.required` - A list of required scopes that will always be requested.
  - `scopes.transform` - A function that can be used to transform the scopes before they are requested.

  The `createOAuthProviderFactory` has also received a new `additionalScopes` option, and will also read `additionalScopes` from the auth provider configuration. Both of these can be used to add additional scopes that should always be requested.

  A significant change under the hood that this new scope management brings is that providers that persist scopes will now always merge the already granted scopes with the requested ones. The previous behavior was that the full authorization flow would not include existing scopes, while the refresh flow would only include the existing scopes.

- d44a20a: Added additional plugin metadata to `package.json`.
- Updated dependencies
  - @devtools/backend-common@0.23.0
  - @devtools/backend-plugin-api@0.6.19
  - @devtools/catalog-client@1.6.5
  - @devtools/catalog-model@1.5.0
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1

## 0.4.14-next.3

### Patch Changes

- 798ec37: Updated scope management for OAuth providers, where the `createOAuthAuthenticator` now accepts a new collection of `scopes` options:

  - `scopes.persist` - Whether scopes should be persisted, replaces the `shouldPersistScopes` option.
  - `scopes.required` - A list of required scopes that will always be requested.
  - `scopes.transform` - A function that can be used to transform the scopes before they are requested.

  The `createOAuthProviderFactory` has also received a new `additionalScopes` option, and will also read `additionalScopes` from the auth provider configuration. Both of these can be used to add additional scopes that should always be requested.

  A significant change under the hood that this new scope management brings is that providers that persist scopes will now always merge the already granted scopes with the requested ones. The previous behavior was that the full authorization flow would not include existing scopes, while the refresh flow would only include the existing scopes.

- d44a20a: Added additional plugin metadata to `package.json`.
- Updated dependencies
  - @devtools/backend-plugin-api@0.6.19-next.3
  - @devtools/backend-common@0.23.0-next.3
  - @devtools/catalog-client@1.6.5
  - @devtools/catalog-model@1.5.0
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1

## 0.4.14-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.6.19-next.2
  - @devtools/backend-common@0.23.0-next.2
  - @devtools/catalog-client@1.6.5
  - @devtools/catalog-model@1.5.0
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1

## 0.4.14-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.6.19-next.1
  - @devtools/backend-common@0.23.0-next.1

## 0.4.14-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.22.1-next.0
  - @devtools/backend-plugin-api@0.6.19-next.0
  - @devtools/catalog-client@1.6.5
  - @devtools/catalog-model@1.5.0
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1

## 0.4.13

### Patch Changes

- ea9262b: Allow overriding default ownership resolving with the new `AuthOwnershipResolutionExtensionPoint`
- Updated dependencies
  - @devtools/catalog-model@1.5.0
  - @devtools/backend-common@0.22.0
  - @devtools/backend-plugin-api@0.6.18
  - @devtools/catalog-client@1.6.5

## 0.4.13-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.22.0-next.1
  - @devtools/backend-plugin-api@0.6.18-next.1

## 0.4.13-next.0

### Patch Changes

- ea9262b: Allow overriding default ownership resolving with the new `AuthOwnershipResolutionExtensionPoint`
- Updated dependencies
  - @devtools/catalog-model@1.5.0-next.0
  - @devtools/backend-common@0.21.8-next.0
  - @devtools/backend-plugin-api@0.6.18-next.0
  - @devtools/catalog-client@1.6.5-next.0
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1

## 0.4.12

### Patch Changes

- d62bc51: Add `tokenTypes` export with constants for various Devtools token types.
- Updated dependencies
  - @devtools/backend-common@0.21.7
  - @devtools/backend-plugin-api@0.6.17
  - @devtools/catalog-client@1.6.4
  - @devtools/catalog-model@1.4.5
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1

## 0.4.12-next.1

### Patch Changes

- d62bc51: Add `tokenTypes` export with constants for various Devtools token types.
- Updated dependencies
  - @devtools/backend-common@0.21.7-next.1
  - @devtools/backend-plugin-api@0.6.17-next.1
  - @devtools/catalog-client@1.6.4-next.0
  - @devtools/catalog-model@1.4.5
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1

## 0.4.12-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.21.7-next.0
  - @devtools/backend-plugin-api@0.6.17-next.0
  - @devtools/catalog-client@1.6.3
  - @devtools/catalog-model@1.4.5
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1

## 0.4.11

### Patch Changes

- 038b2e6: Only consider entities of kind `User` when using `findCatalogUser` with a filter query, unless an explicit `kind` filter is provided.
- Updated dependencies
  - @devtools/catalog-client@1.6.3
  - @devtools/backend-common@0.21.6
  - @devtools/backend-plugin-api@0.6.16
  - @devtools/catalog-model@1.4.5
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1

## 0.4.10

### Patch Changes

- Updated dependencies
  - @devtools/catalog-client@1.6.2
  - @devtools/backend-common@0.21.5
  - @devtools/backend-plugin-api@0.6.15
  - @devtools/catalog-model@1.4.5
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1

## 0.4.9

### Patch Changes

- b4fc6e3: Deprecated the `getBearerTokenFromAuthorizationHeader` function, which is being replaced by the new `HttpAuthService`.
- 2af5354: Bump dependency `jose` to v5
- 0fb419b: Updated dependency `uuid` to `^9.0.0`.
  Updated dependency `@types/uuid` to `^9.0.0`.
- b1b012d: Fix issue with `providerInfo` not being set properly for some proxy providers, by making `providerInfo` an explicit optional return from `authenticate`
- Updated dependencies
  - @devtools/backend-common@0.21.4
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/backend-plugin-api@0.6.14
  - @devtools/catalog-client@1.6.1
  - @devtools/catalog-model@1.4.5
  - @devtools/types@1.1.1

## 0.4.9-next.2

### Patch Changes

- Updated dependencies
  - @devtools/catalog-client@1.6.1-next.1
  - @devtools/backend-common@0.21.4-next.2
  - @devtools/backend-plugin-api@0.6.14-next.2
  - @devtools/catalog-model@1.4.5-next.0
  - @devtools/config@1.2.0-next.1
  - @devtools/errors@1.2.4-next.0
  - @devtools/types@1.1.1

## 0.4.9-next.1

### Patch Changes

- Updated dependencies
  - @devtools/config@1.2.0-next.1
  - @devtools/backend-common@0.21.4-next.1
  - @devtools/backend-plugin-api@0.6.14-next.1
  - @devtools/catalog-client@1.6.1-next.0
  - @devtools/catalog-model@1.4.5-next.0
  - @devtools/errors@1.2.4-next.0
  - @devtools/types@1.1.1

## 0.4.8-next.0

### Patch Changes

- b4fc6e3: Deprecated the `getBearerTokenFromAuthorizationHeader` function, which is being replaced by the new `HttpAuthService`.
- 2af5354: Bump dependency `jose` to v5
- 0fb419b: Updated dependency `uuid` to `^9.0.0`.
  Updated dependency `@types/uuid` to `^9.0.0`.
- b1b012d: Fix issue with `providerInfo` not being set properly for some proxy providers, by making `providerInfo` an explicit optional return from `authenticate`
- Updated dependencies
  - @devtools/backend-common@0.21.3-next.0
  - @devtools/errors@1.2.4-next.0
  - @devtools/backend-plugin-api@0.6.13-next.0
  - @devtools/catalog-client@1.6.1-next.0
  - @devtools/catalog-model@1.4.5-next.0
  - @devtools/config@1.1.2-next.0
  - @devtools/types@1.1.1

## 0.4.4

### Patch Changes

- 71c3b7f: Fix error when Microsoft tokens (or any other using the `defaultProfileTransform`) are requested without the profile scope.
- d4cc552: The helper function `makeProfileInfo` and `PassportHelpers.transformProfile`
  were refactored to use the `jose` library.
- Updated dependencies
  - @devtools/backend-common@0.21.0
  - @devtools/backend-plugin-api@0.6.10
  - @devtools/catalog-model@1.4.4
  - @devtools/catalog-client@1.6.0
  - @devtools/config@1.1.1
  - @devtools/errors@1.2.3
  - @devtools/types@1.1.1

## 0.4.4-next.3

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.21.0-next.3
  - @devtools/backend-plugin-api@0.6.10-next.3
  - @devtools/catalog-client@1.6.0-next.1
  - @devtools/catalog-model@1.4.4-next.0
  - @devtools/config@1.1.1
  - @devtools/errors@1.2.3
  - @devtools/types@1.1.1

## 0.4.4-next.2

### Patch Changes

- d4cc552: The helper function `makeProfileInfo` and `PassportHelpers.transformProfile`
  were refactored to use the `jose` library.
- Updated dependencies
  - @devtools/backend-common@0.21.0-next.2
  - @devtools/backend-plugin-api@0.6.10-next.2
  - @devtools/config@1.1.1
  - @devtools/catalog-client@1.6.0-next.1
  - @devtools/catalog-model@1.4.4-next.0
  - @devtools/errors@1.2.3
  - @devtools/types@1.1.1

## 0.4.4-next.1

### Patch Changes

- Updated dependencies
  - @devtools/catalog-model@1.4.4-next.0
  - @devtools/catalog-client@1.6.0-next.1
  - @devtools/backend-plugin-api@0.6.10-next.1
  - @devtools/backend-common@0.21.0-next.1
  - @devtools/config@1.1.1
  - @devtools/errors@1.2.3
  - @devtools/types@1.1.1

## 0.4.4-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.21.0-next.0
  - @devtools/catalog-client@1.6.0-next.0
  - @devtools/backend-plugin-api@0.6.10-next.0
  - @devtools/catalog-model@1.4.3
  - @devtools/config@1.1.1
  - @devtools/errors@1.2.3
  - @devtools/types@1.1.1

## 0.4.3

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.20.1
  - @devtools/catalog-client@1.5.2
  - @devtools/backend-plugin-api@0.6.9
  - @devtools/catalog-model@1.4.3
  - @devtools/config@1.1.1
  - @devtools/errors@1.2.3
  - @devtools/types@1.1.1

## 0.4.3-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.6.9-next.2
  - @devtools/backend-common@0.20.1-next.2

## 0.4.3-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.20.1-next.1
  - @devtools/config@1.1.1
  - @devtools/backend-plugin-api@0.6.9-next.1
  - @devtools/catalog-client@1.5.2-next.0
  - @devtools/catalog-model@1.4.3
  - @devtools/errors@1.2.3
  - @devtools/types@1.1.1

## 0.4.3-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.20.1-next.0
  - @devtools/catalog-client@1.5.2-next.0
  - @devtools/backend-plugin-api@0.6.9-next.0
  - @devtools/catalog-model@1.4.3
  - @devtools/config@1.1.1
  - @devtools/errors@1.2.3
  - @devtools/types@1.1.1

## 0.4.2

### Patch Changes

- a62764b: Updated dependency `passport` to `^0.7.0`.
- 0cbb03b: Fixing regular expression ReDoS with zod packages. Upgrading to latest. ref: https://security.snyk.io/vuln/SNYK-JS-ZOD-5925617
- Updated dependencies
  - @devtools/backend-common@0.20.0
  - @devtools/catalog-client@1.5.0
  - @devtools/backend-plugin-api@0.6.8
  - @devtools/catalog-model@1.4.3
  - @devtools/config@1.1.1
  - @devtools/errors@1.2.3
  - @devtools/types@1.1.1

## 0.4.2-next.3

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.20.0-next.3
  - @devtools/backend-plugin-api@0.6.8-next.3
  - @devtools/catalog-client@1.5.0-next.1
  - @devtools/catalog-model@1.4.3
  - @devtools/config@1.1.1
  - @devtools/errors@1.2.3
  - @devtools/types@1.1.1

## 0.4.2-next.2

### Patch Changes

- a62764b: Updated dependency `passport` to `^0.7.0`.
- Updated dependencies
  - @devtools/backend-common@0.20.0-next.2
  - @devtools/catalog-client@1.5.0-next.1
  - @devtools/backend-plugin-api@0.6.8-next.2
  - @devtools/catalog-model@1.4.3
  - @devtools/config@1.1.1
  - @devtools/errors@1.2.3
  - @devtools/types@1.1.1

## 0.4.2-next.1

### Patch Changes

- Updated dependencies
  - @devtools/catalog-client@1.5.0-next.0
  - @devtools/backend-common@0.20.0-next.1
  - @devtools/backend-plugin-api@0.6.8-next.1
  - @devtools/catalog-model@1.4.3
  - @devtools/config@1.1.1
  - @devtools/errors@1.2.3
  - @devtools/types@1.1.1

## 0.4.2-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.20.0-next.0
  - @devtools/backend-plugin-api@0.6.8-next.0
  - @devtools/catalog-client@1.4.6
  - @devtools/catalog-model@1.4.3
  - @devtools/config@1.1.1
  - @devtools/errors@1.2.3
  - @devtools/types@1.1.1

## 0.4.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.19.9
  - @devtools/backend-plugin-api@0.6.7
  - @devtools/catalog-client@1.4.6
  - @devtools/catalog-model@1.4.3
  - @devtools/config@1.1.1
  - @devtools/errors@1.2.3
  - @devtools/types@1.1.1

## 0.4.1-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.6.7-next.2
  - @devtools/backend-common@0.19.9-next.2

## 0.4.1-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.19.9-next.1
  - @devtools/backend-plugin-api@0.6.7-next.1
  - @devtools/catalog-client@1.4.5
  - @devtools/catalog-model@1.4.3
  - @devtools/config@1.1.1
  - @devtools/errors@1.2.3
  - @devtools/types@1.1.1

## 0.4.1-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.19.9-next.0
  - @devtools/backend-plugin-api@0.6.7-next.0
  - @devtools/catalog-client@1.4.5
  - @devtools/catalog-model@1.4.3
  - @devtools/config@1.1.1
  - @devtools/errors@1.2.3
  - @devtools/types@1.1.1

## 0.4.0

### Minor Changes

- 6f142d5356: **BREAKING**: The recently introduced `ProxyAuthenticator.initialize()` method is no longer `async` to match the way the OAuth equivalent is implemented.

### Patch Changes

- 6c2b0793bf: Fix for persisted scopes not being properly restored on sign-in.
- 8b8b1d23ae: Fixed cookie persisted scope not returned in OAuth refresh handler response.
- ae34255836: Adding optional audience parameter to OAuthState type declaration
- Updated dependencies
  - @devtools/backend-common@0.19.8
  - @devtools/catalog-model@1.4.3
  - @devtools/errors@1.2.3
  - @devtools/backend-plugin-api@0.6.6
  - @devtools/catalog-client@1.4.5
  - @devtools/config@1.1.1
  - @devtools/types@1.1.1

## 0.4.0-next.2

### Minor Changes

- 6f142d5356: **BREAKING**: The recently introduced `ProxyAuthenticator.initialize()` method is no longer `async` to match the way the OAuth equivalent is implemented.

### Patch Changes

- 8b8b1d23ae: Fixed cookie persisted scope not returned in OAuth refresh handler response.
- Updated dependencies
  - @devtools/backend-common@0.19.8-next.2
  - @devtools/catalog-model@1.4.3-next.0
  - @devtools/errors@1.2.3-next.0
  - @devtools/backend-plugin-api@0.6.6-next.2
  - @devtools/catalog-client@1.4.5-next.0
  - @devtools/config@1.1.1-next.0
  - @devtools/types@1.1.1

## 0.3.2-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.19.7-next.1
  - @devtools/backend-plugin-api@0.6.5-next.1
  - @devtools/config@1.1.0
  - @devtools/catalog-client@1.4.4
  - @devtools/catalog-model@1.4.2
  - @devtools/errors@1.2.2
  - @devtools/types@1.1.1

## 0.3.2-next.0

### Patch Changes

- 6c2b0793bf: Fix for persisted scopes not being properly restored on sign-in.
- Updated dependencies
  - @devtools/backend-common@0.19.7-next.0
  - @devtools/config@1.1.0
  - @devtools/backend-plugin-api@0.6.5-next.0
  - @devtools/catalog-client@1.4.4
  - @devtools/catalog-model@1.4.2
  - @devtools/errors@1.2.2
  - @devtools/types@1.1.1

## 0.3.0

### Minor Changes

- 8513cd7d00e3: Introduced a new system for building auth providers for `@devtools/plugin-auth-backend`, which both increases the amount of code re-use across providers, and also works better with the new backend system.

  Many existing types have been moved from `@devtools/plugin-auth-backend` in order to avoid a direct dependency on the plugin from modules.

  Auth provider integrations are now primarily implemented through a pattern of creating "authenticators", which are in turn specific to each kind of integrations. Initially there are two types: `createOAuthAuthenticator` and `createProxyAuthenticator`. These come paired with functions that let you create the corresponding route handlers, `createOAuthRouteHandlers` and `createProxyAuthRouteHandlers`, as well as provider factories, `createOAuthProviderFactory` and `createProxyAuthProviderFactory`. This new authenticator pattern allows the sign-in logic to be separated from the auth integration logic, allowing it to be completely re-used across all providers of the same kind.

  The new provider factories also implement a new declarative way to configure sign-in resolvers, rather than configuration through code. Sign-in resolvers can now be configured through the `resolvers` configuration key, where the first resolver that provides an identity will be used, for example:

  ```yaml
  auth:
    providers:
      google:
        development:
          clientId: ...
          clientSecret: ...
          signIn:
            resolvers:
              - resolver: emailMatchingUserEntityAnnotation
              - resolver: emailLocalPartMatchingUserEntityName
  ```

  These configurable resolvers are created with a new `createSignInResolverFactory` function, which creates a sign-in resolver factory, optionally with an options schema that will be used both when configuring the sign-in resolver through configuration and code.

  The internal helpers from `@devtools/plugin-auth-backend` that were used to implement auth providers using passport strategies have now also been made available as public API, through `PassportHelpers` and `PassportOAuthAuthenticatorHelper`.

### Patch Changes

- 18619f793c94: The `DevtoolsIdentityResponse` interface now has an optional `expiresInSeconds` field that can be used to signal session expiration. The `prepareDevtoolsIdentityResponse` utility will now also read the expiration from the provided token, and include it in the response.
- Updated dependencies
  - @devtools/backend-common@0.19.5
  - @devtools/config@1.1.0
  - @devtools/catalog-client@1.4.4
  - @devtools/catalog-model@1.4.2
  - @devtools/errors@1.2.2
  - @devtools/types@1.1.1
  - @devtools/backend-plugin-api@0.6.3

## 0.3.0-next.3

### Patch Changes

- Updated dependencies
  - @devtools/catalog-client@1.4.4-next.2
  - @devtools/catalog-model@1.4.2-next.2
  - @devtools/config@1.1.0-next.2
  - @devtools/errors@1.2.2-next.0
  - @devtools/types@1.1.1-next.0
  - @devtools/backend-plugin-api@0.6.3-next.3
  - @devtools/backend-common@0.19.5-next.3

## 0.3.0-next.2

### Patch Changes

- Updated dependencies
  - @devtools/config@1.1.0-next.1
  - @devtools/backend-common@0.19.5-next.2
  - @devtools/backend-plugin-api@0.6.3-next.2
  - @devtools/catalog-model@1.4.2-next.1
  - @devtools/catalog-client@1.4.4-next.1
  - @devtools/errors@1.2.1
  - @devtools/types@1.1.0

## 0.3.0-next.1

### Patch Changes

- Updated dependencies
  - @devtools/config@1.1.0-next.0
  - @devtools/backend-common@0.19.5-next.1
  - @devtools/backend-plugin-api@0.6.3-next.1
  - @devtools/catalog-model@1.4.2-next.0
  - @devtools/catalog-client@1.4.4-next.0
  - @devtools/errors@1.2.1
  - @devtools/types@1.1.0

## 0.3.0-next.0

### Minor Changes

- 8513cd7d00e3: Introduced a new system for building auth providers for `@devtools/plugin-auth-backend`, which both increases the amount of code re-use across providers, and also works better with the new backend system.

  Many existing types have been moved from `@devtools/plugin-auth-backend` in order to avoid a direct dependency on the plugin from modules.

  Auth provider integrations are now primarily implemented through a pattern of creating "authenticators", which are in turn specific to each kind of integrations. Initially there are two types: `createOAuthAuthenticator` and `createProxyAuthenticator`. These come paired with functions that let you create the corresponding route handlers, `createOAuthRouteHandlers` and `createProxyAuthRouteHandlers`, as well as provider factories, `createOAuthProviderFactory` and `createProxyAuthProviderFactory`. This new authenticator pattern allows the sign-in logic to be separated from the auth integration logic, allowing it to be completely re-used across all providers of the same kind.

  The new provider factories also implement a new declarative way to configure sign-in resolvers, rather than configuration through code. Sign-in resolvers can now be configured through the `resolvers` configuration key, where the first resolver that provides an identity will be used, for example:

  ```yaml
  auth:
    providers:
      google:
        development:
          clientId: ...
          clientSecret: ...
          signIn:
            resolvers:
              - resolver: emailMatchingUserEntityAnnotation
              - resolver: emailLocalPartMatchingUserEntityName
  ```

  These configurable resolvers are created with a new `createSignInResolverFactory` function, which creates a sign-in resolver factory, optionally with an options schema that will be used both when configuring the sign-in resolver through configuration and code.

  The internal helpers from `@devtools/plugin-auth-backend` that were used to implement auth providers using passport strategies have now also been made available as public API, through `PassportHelpers` and `PassportOAuthAuthenticatorHelper`.

### Patch Changes

- 18619f793c94: The `DevtoolsIdentityResponse` interface now has an optional `expiresInSeconds` field that can be used to signal session expiration. The `prepareDevtoolsIdentityResponse` utility will now also read the expiration from the provided token, and include it in the response.
- Updated dependencies
  - @devtools/backend-common@0.19.4-next.0
  - @devtools/backend-plugin-api@0.6.2-next.0
  - @devtools/catalog-client@1.4.3
  - @devtools/catalog-model@1.4.1
  - @devtools/config@1.0.8
  - @devtools/errors@1.2.1
  - @devtools/types@1.1.0

## 0.2.17

### Patch Changes

- 12a8c94eda8d: Add package repository and homepage metadata
- Updated dependencies
  - @devtools/backend-common@0.19.2
  - @devtools/config@1.0.8
  - @devtools/errors@1.2.1

## 0.2.17-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.19.2-next.2

## 0.2.17-next.1

### Patch Changes

- 12a8c94eda8d: Add package repository and homepage metadata
- Updated dependencies
  - @devtools/backend-common@0.19.2-next.1
  - @devtools/config@1.0.8
  - @devtools/errors@1.2.1

## 0.2.17-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.19.2-next.0
  - @devtools/config@1.0.8
  - @devtools/errors@1.2.1

## 0.2.16

### Patch Changes

- Updated dependencies
  - @devtools/errors@1.2.1
  - @devtools/backend-common@0.19.1
  - @devtools/config@1.0.8

## 0.2.16-next.0

### Patch Changes

- Updated dependencies
  - @devtools/errors@1.2.1-next.0
  - @devtools/backend-common@0.19.1-next.0
  - @devtools/config@1.0.8

## 0.2.15

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.19.0
  - @devtools/errors@1.2.0
  - @devtools/config@1.0.8

## 0.2.15-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.19.0-next.2
  - @devtools/config@1.0.7
  - @devtools/errors@1.2.0-next.0

## 0.2.15-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.19.0-next.1
  - @devtools/errors@1.2.0-next.0
  - @devtools/config@1.0.7

## 0.2.15-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.18.6-next.0
  - @devtools/config@1.0.7
  - @devtools/errors@1.1.5

## 0.2.14

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.18.5
  - @devtools/config@1.0.7
  - @devtools/errors@1.1.5

## 0.2.14-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.18.5-next.1
  - @devtools/config@1.0.7

## 0.2.14-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.18.5-next.0
  - @devtools/config@1.0.7
  - @devtools/errors@1.1.5

## 0.2.13

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.18.4
  - @devtools/config@1.0.7
  - @devtools/errors@1.1.5

## 0.2.13-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.18.4-next.2
  - @devtools/config@1.0.7
  - @devtools/errors@1.1.5

## 0.2.13-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.18.4-next.1
  - @devtools/config@1.0.7
  - @devtools/errors@1.1.5

## 0.2.13-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.18.4-next.0
  - @devtools/config@1.0.7
  - @devtools/errors@1.1.5

## 0.2.12

### Patch Changes

- 65454876fb2: Minor API report tweaks
- 52b0022dab7: Updated dependency `msw` to `^1.0.0`.
- Updated dependencies
  - @devtools/backend-common@0.18.3
  - @devtools/errors@1.1.5
  - @devtools/config@1.0.7

## 0.2.12-next.2

### Patch Changes

- 65454876fb2: Minor API report tweaks
- Updated dependencies
  - @devtools/backend-common@0.18.3-next.2
  - @devtools/config@1.0.7-next.0

## 0.2.12-next.1

### Patch Changes

- 52b0022dab7: Updated dependency `msw` to `^1.0.0`.
- Updated dependencies
  - @devtools/errors@1.1.5-next.0
  - @devtools/backend-common@0.18.3-next.1
  - @devtools/config@1.0.7-next.0

## 0.2.12-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.18.3-next.0
  - @devtools/config@1.0.6
  - @devtools/errors@1.1.4

## 0.2.11

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.18.2
  - @devtools/config@1.0.6
  - @devtools/errors@1.1.4

## 0.2.11-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.18.2-next.2
  - @devtools/config@1.0.6
  - @devtools/errors@1.1.4

## 0.2.11-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.18.2-next.1
  - @devtools/config@1.0.6
  - @devtools/errors@1.1.4

## 0.2.11-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.18.2-next.0

## 0.2.9

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.18.0
  - @devtools/config@1.0.6
  - @devtools/errors@1.1.4

## 0.2.9-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.18.0-next.1
  - @devtools/config@1.0.6-next.0
  - @devtools/errors@1.1.4

## 0.2.9-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.18.0-next.0
  - @devtools/config@1.0.6-next.0
  - @devtools/errors@1.1.4

## 0.2.8

### Patch Changes

- 3280711113: Updated dependency `msw` to `^0.49.0`.
- Updated dependencies
  - @devtools/backend-common@0.17.0
  - @devtools/errors@1.1.4
  - @devtools/config@1.0.5

## 0.2.8-next.3

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.17.0-next.3
  - @devtools/config@1.0.5-next.1
  - @devtools/errors@1.1.4-next.1

## 0.2.8-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.17.0-next.2
  - @devtools/config@1.0.5-next.1
  - @devtools/errors@1.1.4-next.1

## 0.2.8-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.17.0-next.1
  - @devtools/config@1.0.5-next.1
  - @devtools/errors@1.1.4-next.1

## 0.2.8-next.0

### Patch Changes

- 3280711113: Updated dependency `msw` to `^0.49.0`.
- Updated dependencies
  - @devtools/backend-common@0.16.1-next.0
  - @devtools/config@1.0.5-next.0
  - @devtools/errors@1.1.4-next.0

## 0.2.7

### Patch Changes

- 7573b65232: Internal refactor of imports to avoid circular dependencies
- Updated dependencies
  - @devtools/backend-common@0.16.0
  - @devtools/config@1.0.4
  - @devtools/errors@1.1.3

## 0.2.7-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.16.0-next.1
  - @devtools/config@1.0.4-next.0
  - @devtools/errors@1.1.3-next.0

## 0.2.7-next.0

### Patch Changes

- 7573b65232: Internal refactor of imports to avoid circular dependencies
- Updated dependencies
  - @devtools/backend-common@0.16.0-next.0
  - @devtools/config@1.0.4-next.0
  - @devtools/errors@1.1.3-next.0

## 0.2.6

### Patch Changes

- f3a3fefb96: Ensure `getIdentity` throws an `AuthenticationError` instead of a `NotAllowed` error when authentication fails
- Updated dependencies
  - @devtools/backend-common@0.15.2
  - @devtools/config@1.0.3
  - @devtools/errors@1.1.2

## 0.2.6-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.15.2-next.2
  - @devtools/config@1.0.3-next.2
  - @devtools/errors@1.1.2-next.2

## 0.2.6-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.15.2-next.1
  - @devtools/config@1.0.3-next.1
  - @devtools/errors@1.1.2-next.1

## 0.2.6-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.15.2-next.0
  - @devtools/config@1.0.3-next.0
  - @devtools/errors@1.1.2-next.0

## 0.2.5

### Patch Changes

- 9212439d15: Minor update to tests
- 2cbd533426: `IdentityClient` is now deprecated. Please migrate to `IdentityApi` and `DefaultIdentityClient` instead. The authenticate function on `DefaultIdentityClient` is also deprecated. Please use `getIdentity` instead.
- 667d917488: Updated dependency `msw` to `^0.47.0`.
- 87ec2ba4d6: Updated dependency `msw` to `^0.46.0`.
- bf5e9030eb: Updated dependency `msw` to `^0.45.0`.
- Updated dependencies
  - @devtools/backend-common@0.15.1
  - @devtools/config@1.0.2
  - @devtools/errors@1.1.1

## 0.2.5-next.3

### Patch Changes

- Updated dependencies
  - @devtools/config@1.0.2-next.0
  - @devtools/errors@1.1.1-next.0
  - @devtools/backend-common@0.15.1-next.3

## 0.2.5-next.2

### Patch Changes

- 2cbd533426: `IdentityClient` is now deprecated. Please migrate to `IdentityApi` and `DefaultIdentityClient` instead. The authenticate function on `DefaultIdentityClient` is also deprecated. Please use `getIdentity` instead.
- 667d917488: Updated dependency `msw` to `^0.47.0`.
- 87ec2ba4d6: Updated dependency `msw` to `^0.46.0`.
- Updated dependencies
  - @devtools/backend-common@0.15.1-next.2

## 0.2.5-next.1

### Patch Changes

- 9212439d15: Minor update to tests
- Updated dependencies
  - @devtools/backend-common@0.15.1-next.1

## 0.2.5-next.0

### Patch Changes

- bf5e9030eb: Updated dependency `msw` to `^0.45.0`.
- Updated dependencies
  - @devtools/backend-common@0.15.1-next.0

## 0.2.4

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.15.0

## 0.2.4-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.15.0-next.0

## 0.2.3

### Patch Changes

- a70869e775: Updated dependency `msw` to `^0.43.0`.
- 8006d0f9bf: Updated dependency `msw` to `^0.44.0`.
- Updated dependencies
  - @devtools/backend-common@0.14.1
  - @devtools/errors@1.1.0

## 0.2.3-next.2

### Patch Changes

- a70869e775: Updated dependency `msw` to `^0.43.0`.
- Updated dependencies
  - @devtools/backend-common@0.14.1-next.3

## 0.2.3-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.14.1-next.1
  - @devtools/errors@1.1.0-next.0

## 0.2.3-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.14.1-next.0

## 0.2.2

### Patch Changes

- 5ca0b86b88: Address corner cases where the key store was not being created at startup
- 8f7b1835df: Updated dependency `msw` to `^0.41.0`.
- 9079a78078: Added configurable algorithms array for IdentityClient
- Updated dependencies
  - @devtools/backend-common@0.14.0

## 0.2.2-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.14.0-next.2

## 0.2.2-next.1

### Patch Changes

- 8f7b1835df: Updated dependency `msw` to `^0.41.0`.
- Updated dependencies
  - @devtools/backend-common@0.13.6-next.1

## 0.2.2-next.0

### Patch Changes

- 9079a78078: Added configurable algorithms array for IdentityClient
- Updated dependencies
  - @devtools/backend-common@0.13.6-next.0

## 0.2.1

### Patch Changes

- 9ec4e0613e: Update to `jose` 4.6.0
- Updated dependencies
  - @devtools/backend-common@0.13.3
  - @devtools/config@1.0.1

## 0.2.1-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.13.3-next.2
  - @devtools/config@1.0.1-next.0

## 0.2.1-next.0

### Patch Changes

- 9ec4e0613e: Update to `jose` 4.6.0
- Updated dependencies
  - @devtools/backend-common@0.13.3-next.0

## 0.2.0

### Minor Changes

- 15d3a3c39a: **BREAKING**: Removed the deprecated `id` and `entity` fields from `DevtoolsSignInResult`.

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.13.2

## 0.2.0-next.0

### Minor Changes

- 15d3a3c39a: **BREAKING**: Removed the deprecated `id` and `entity` fields from `DevtoolsSignInResult`.

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.13.2-next.0

## 0.1.6

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.13.1
  - @devtools/catalog-model@1.0.0
  - @devtools/config@1.0.0
  - @devtools/errors@1.0.0

## 0.1.5

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.13.0
  - @devtools/catalog-model@0.13.0

## 0.1.5-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.13.0-next.0
  - @devtools/catalog-model@0.13.0-next.0

## 0.1.4

### Patch Changes

- Updated dependencies
  - @devtools/catalog-model@0.12.0
  - @devtools/backend-common@0.12.0

## 0.1.3

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.11.0
  - @devtools/catalog-model@0.11.0

## 0.1.2

### Patch Changes

- Fix for the previous release with missing type declarations.
- Updated dependencies
  - @devtools/backend-common@0.10.9
  - @devtools/catalog-model@0.10.1
  - @devtools/config@0.1.15
  - @devtools/errors@0.2.2

## 0.1.1

### Patch Changes

- 1ed305728b: Bump `node-fetch` to version 2.6.7 and `cross-fetch` to version 3.1.5
- c77c5c7eb6: Added `devtools.role` to `package.json`
- Updated dependencies
  - @devtools/backend-common@0.10.8
  - @devtools/errors@0.2.1
  - @devtools/catalog-model@0.10.0
  - @devtools/config@0.1.14

## 0.1.0

### Minor Changes

- 9058bb1b5e: Added this package, to hold shared types and functionality that other backend
  packages need to import.

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.10.7
