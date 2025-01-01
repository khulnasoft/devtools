# yarn-plugin-devtools

## 0.0.4

### Patch Changes

- 48cc7c5: Use yarn's built-in http utilities for fetching release manifests
- ac91864: Switch to using `reduceDependency` hook to replace `devtools:^` versions. This
  makes the same yarn.lock file valid whether or not the plugin is installed.
- ee49cb4: Fixed path resolution on windows
- Updated dependencies
  - @devtools/release-manifests@0.0.12
  - @devtools/cli-common@0.1.15

## 0.0.4-next.1

### Patch Changes

- 48cc7c5: Use yarn's built-in http utilities for fetching release manifests
- Updated dependencies
  - @devtools/release-manifests@0.0.12-next.1
  - @devtools/cli-common@0.1.15

## 0.0.4-next.0

### Patch Changes

- 27600c2: Verify type of `beforeWorkspacePacking` hook signature
- d8bd6f5: Cherry-pick lodash method to reduce bundle size
- 344c591: Use native `Array.some` instead of lodash to reduce bundle size
- 9296a33: Remove dependency on `chalk` to reduce bundle size
- 9017481: Move Devtools version to parameter in bound descriptor for better
  compatibility with third-party lockfile parsing tools
- Updated dependencies
  - @devtools/release-manifests@0.0.12-next.0
  - @devtools/cli-common@0.1.15

## 0.0.3

### Patch Changes

- Updated dependencies
  - @devtools/cli-common@0.1.15
  - @devtools/release-manifests@0.0.11

## 0.0.3-next.0

### Patch Changes

- aba538d: Do not throw when descriptors are already bound in bindDescriptor
- Updated dependencies
  - @devtools/cli-common@0.1.15-next.0
  - @devtools/release-manifests@0.0.11

## 0.0.2

### Patch Changes

- a8bd401: Validate version of yarn in plugin to ensure compatibility
- b207f69: Memoize fetching of release manifest
- 9e29186: Ensure plugin works correctly when running yarn dedupe
- bd32d5a: Add additional check before packing workspace to verify that all devtools:^ versions have been removed.
- Updated dependencies
  - @devtools/cli-common@0.1.14
  - @devtools/release-manifests@0.0.11

## 0.0.1

### Patch Changes

- Updated dependencies
  - @devtools/cli-common@0.1.14
  - @devtools/release-manifests@0.0.11

## 0.0.1-next.0

### Patch Changes

- Initial release
- Updated dependencies
  - @devtools/cli-common@0.1.14-next.0
  - @devtools/release-manifests@0.0.11
