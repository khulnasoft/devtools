# @devtools/plugin-app

## 0.1.4

### Patch Changes

- e5fa018: The OAuth 2 client implementations will now attempt to refresh the session when the existing session doesn't have the required scopes. The previous behavior was to only try to refresh the session of it was missing, and otherwise directly request a new session. This fixes an issue where some auth providers will not return access tokens with certain scopes unless explicitly requested, leading to an auth popup even if the underlying session already had been granted the requested scopes.
- 5f04976: Fixed a bug that caused missing code in published packages.
- Updated dependencies
  - @devtools/frontend-plugin-api@0.9.3
  - @devtools/theme@0.6.3
  - @devtools/core-components@0.16.2
  - @devtools/core-plugin-api@1.10.2
  - @devtools/integration-react@1.2.2
  - @devtools/plugin-permission-react@0.4.29

## 0.1.4-next.2

### Patch Changes

- Updated dependencies
  - @devtools/core-components@0.16.2-next.2
  - @devtools/core-plugin-api@1.10.2-next.0
  - @devtools/frontend-plugin-api@0.9.3-next.2
  - @devtools/integration-react@1.2.2-next.1
  - @devtools/theme@0.6.3-next.0
  - @devtools/plugin-permission-react@0.4.29-next.0

## 0.1.4-next.1

### Patch Changes

- Updated dependencies
  - @devtools/core-components@0.16.2-next.1
  - @devtools/core-plugin-api@1.10.1
  - @devtools/frontend-plugin-api@0.9.3-next.1
  - @devtools/integration-react@1.2.2-next.0
  - @devtools/theme@0.6.3-next.0
  - @devtools/plugin-permission-react@0.4.28

## 0.1.4-next.0

### Patch Changes

- e5fa018: The OAuth 2 client implementations will now attempt to refresh the session when the existing session doesn't have the required scopes. The previous behavior was to only try to refresh the session of it was missing, and otherwise directly request a new session. This fixes an issue where some auth providers will not return access tokens with certain scopes unless explicitly requested, leading to an auth popup even if the underlying session already had been granted the requested scopes.
- 5f04976: Fixed a bug that caused missing code in published packages.
- Updated dependencies
  - @devtools/frontend-plugin-api@0.9.3-next.0
  - @devtools/theme@0.6.3-next.0
  - @devtools/core-components@0.16.2-next.0
  - @devtools/core-plugin-api@1.10.1
  - @devtools/integration-react@1.2.2-next.0
  - @devtools/plugin-permission-react@0.4.28

## 0.1.2

### Patch Changes

- Updated dependencies
  - @devtools/theme@0.6.1
  - @devtools/core-components@0.16.0
  - @devtools/core-plugin-api@1.10.1
  - @devtools/frontend-plugin-api@0.9.1
  - @devtools/integration-react@1.2.1
  - @devtools/plugin-permission-react@0.4.28

## 0.1.2-next.2

### Patch Changes

- Updated dependencies
  - @devtools/core-components@0.16.0-next.2
  - @devtools/core-plugin-api@1.10.0
  - @devtools/frontend-plugin-api@0.9.1-next.2
  - @devtools/integration-react@1.2.0
  - @devtools/theme@0.6.1-next.0
  - @devtools/plugin-permission-react@0.4.27

## 0.1.2-next.1

### Patch Changes

- Updated dependencies
  - @devtools/theme@0.6.1-next.0
  - @devtools/core-components@0.16.0-next.1
  - @devtools/core-plugin-api@1.10.0
  - @devtools/frontend-plugin-api@0.9.1-next.1
  - @devtools/integration-react@1.2.0
  - @devtools/plugin-permission-react@0.4.27

## 0.1.2-next.0

### Patch Changes

- Updated dependencies
  - @devtools/core-components@0.16.0-next.0
  - @devtools/core-plugin-api@1.10.0
  - @devtools/frontend-plugin-api@0.9.1-next.0
  - @devtools/integration-react@1.2.0
  - @devtools/theme@0.6.0
  - @devtools/plugin-permission-react@0.4.27

## 0.1.1

### Patch Changes

- b36be7a: Added missing default `SignInPageExtension` which by default uses guest auth, missing `ApiExtensions` for `scmAuth`
- Updated dependencies
  - @devtools/core-components@0.15.1
  - @devtools/frontend-plugin-api@0.9.0
  - @devtools/integration-react@1.2.0
  - @devtools/core-plugin-api@1.10.0
  - @devtools/plugin-permission-react@0.4.27
  - @devtools/theme@0.6.0

## 0.1.1-next.2

### Patch Changes

- Updated dependencies
  - @devtools/theme@0.6.0-next.1
  - @devtools/core-components@0.15.1-next.2
  - @devtools/core-plugin-api@1.10.0-next.1
  - @devtools/frontend-plugin-api@0.9.0-next.2
  - @devtools/plugin-permission-react@0.4.27-next.1

## 0.1.1-next.1

### Patch Changes

- Updated dependencies
  - @devtools/core-components@0.15.1-next.1
  - @devtools/frontend-plugin-api@0.9.0-next.1
  - @devtools/core-plugin-api@1.10.0-next.1
  - @devtools/plugin-permission-react@0.4.27-next.1
  - @devtools/theme@0.5.8-next.0

## 0.1.1-next.0

### Patch Changes

- Updated dependencies
  - @devtools/frontend-plugin-api@0.9.0-next.0
  - @devtools/core-components@0.15.1-next.0
  - @devtools/core-plugin-api@1.10.0-next.0
  - @devtools/theme@0.5.7
  - @devtools/plugin-permission-react@0.4.27-next.0

## 0.1.0

### Minor Changes

- 2bb9517: Introduce the `@devtools/plugin-app` package to hold all of the built-in extensions for easy consumption and overriding.

### Patch Changes

- 52f9c5a: Deprecated the `namespace` option for `createExtensionBlueprint` and `createExtension`, these are no longer required and will default to the `pluginId` instead.

  You can migrate some of your extensions that use `createExtensionOverrides` to using `createFrontendModule` instead and providing a `pluginId` there.

  ```ts
  // Before
  createExtensionOverrides({
    extensions: [
      createExtension({
        name: 'my-extension',
        namespace: 'my-namespace',
        kind: 'test',
        ...
      })
    ],
  });

  // After
  createFrontendModule({
    pluginId: 'my-namespace',
    extensions: [
      createExtension({
        name: 'my-extension',
        kind: 'test',
        ...
      })
    ],
  });
  ```

- 57bf6ae: Fix issue with `AlertDisplay` and other components defined with `AppRootElementBlueprint` not being rendered when at the `SignInWrapper`
- 836127c: Updated dependency `@testing-library/react` to `^16.0.0`.
- Updated dependencies
  - @devtools/core-components@0.15.0
  - @devtools/frontend-plugin-api@0.8.0
  - @devtools/core-plugin-api@1.9.4
  - @devtools/theme@0.5.7
  - @devtools/plugin-permission-react@0.4.26

## 0.1.0-next.2

### Patch Changes

- 57bf6ae: Fix issue with `AlertDisplay` and other components defined with `AppRootElementBlueprint` not being rendered when at the `SignInWrapper`
- 836127c: Updated dependency `@testing-library/react` to `^16.0.0`.
- Updated dependencies
  - @devtools/core-components@0.14.11-next.1
  - @devtools/core-plugin-api@1.9.4-next.0
  - @devtools/frontend-plugin-api@0.8.0-next.2
  - @devtools/theme@0.5.7-next.0
  - @devtools/plugin-permission-react@0.4.26-next.0

## 0.1.0-next.1

### Patch Changes

- 52f9c5a: Deprecated the `namespace` option for `createExtensionBlueprint` and `createExtension`, these are no longer required and will default to the `pluginId` instead.

  You can migrate some of your extensions that use `createExtensionOverrides` to using `createFrontendModule` instead and providing a `pluginId` there.

  ```ts
  // Before
  createExtensionOverrides({
    extensions: [
      createExtension({
        name: 'my-extension',
        namespace: 'my-namespace',
        kind: 'test',
        ...
      })
    ],
  });

  // After
  createFrontendModule({
    pluginId: 'my-namespace',
    extensions: [
      createExtension({
        name: 'my-extension',
        kind: 'test',
        ...
      })
    ],
  });
  ```

- Updated dependencies
  - @devtools/frontend-plugin-api@0.8.0-next.1
  - @devtools/core-components@0.14.11-next.0
  - @devtools/core-plugin-api@1.9.3
  - @devtools/theme@0.5.6
  - @devtools/plugin-permission-react@0.4.25

## 0.1.0-next.0

### Minor Changes

- 2bb9517: Introduce the `@devtools/plugin-app` package to hold all of the built-in extensions for easy consumption and overriding.

### Patch Changes

- Updated dependencies
  - @devtools/frontend-plugin-api@0.8.0-next.0
  - @devtools/core-components@0.14.10
  - @devtools/core-plugin-api@1.9.3
  - @devtools/theme@0.5.6
  - @devtools/plugin-permission-react@0.4.25