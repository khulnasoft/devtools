# @devtools/cli-node

## 0.2.11

### Patch Changes

- af665ea: add PackageManager and Lockfile interfaces for future use
- cbfc69e: Internal refactor
- Updated dependencies
  - @devtools/errors@1.2.6
  - @devtools/cli-common@0.1.15
  - @devtools/types@1.2.0

## 0.2.11-next.1

### Patch Changes

- Updated dependencies
  - @devtools/errors@1.2.6-next.0
  - @devtools/cli-common@0.1.15
  - @devtools/types@1.2.0

## 0.2.11-next.0

### Patch Changes

- af665ea: add PackageManager and Lockfile interfaces for future use
- cbfc69e: Internal refactor
- Updated dependencies
  - @devtools/cli-common@0.1.15
  - @devtools/errors@1.2.5
  - @devtools/types@1.2.0

## 0.2.10

### Patch Changes

- Updated dependencies
  - @devtools/types@1.2.0
  - @devtools/cli-common@0.1.15
  - @devtools/errors@1.2.5

## 0.2.10-next.0

### Patch Changes

- Updated dependencies
  - @devtools/cli-common@0.1.15-next.0
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1

## 0.2.9

### Patch Changes

- fec7278: Added new `lockfile.getDependencyTreeHash(name)` utility.
- Updated dependencies
  - @devtools/cli-common@0.1.14
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1

## 0.2.9-next.0

### Patch Changes

- fec7278: Added new `lockfile.getDependencyTreeHash(name)` utility.
- Updated dependencies
  - @devtools/cli-common@0.1.14
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1

## 0.2.8

### Patch Changes

- 0c70f43: Add definition for the new `devtools.inline` field in `package.json`.
- Updated dependencies
  - @devtools/cli-common@0.1.14
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1

## 0.2.8-next.0

### Patch Changes

- 0c70f43: Add definition for the new `devtools.inline` field in `package.json`.
- Updated dependencies
  - @devtools/cli-common@0.1.14
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1

## 0.2.7

### Patch Changes

- 133464c: Added internal metadata for the new experimental `frontend-dynamic-container` role.
- Updated dependencies
  - @devtools/cli-common@0.1.14
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1

## 0.2.6

### Patch Changes

- a1ae9cc: Updated doc link.
- c328131: Added new plugin metadata fields to `DevtoolsPackageJson` type.
- 93be042: Upgraded @yarnpkg/parsers to stable 3.0
- Updated dependencies
  - @devtools/cli-common@0.1.14
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1

## 0.2.6-next.2

### Patch Changes

- c328131: Added new plugin metadata fields to `DevtoolsPackageJson` type.
- Updated dependencies
  - @devtools/cli-common@0.1.14-next.0
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1

## 0.2.6-next.1

### Patch Changes

- a1ae9cc: Updated doc link.
- Updated dependencies
  - @devtools/cli-common@0.1.13
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1

## 0.2.6-next.0

### Patch Changes

- 93be042: Upgraded @yarnpkg/parsers to stable 3.0
- Updated dependencies
  - @devtools/cli-common@0.1.13
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1

## 0.2.5

### Patch Changes

- ed9260f: Added `versions:migrate` command to help move packages to the new `@devtools-community` namespace
- Updated dependencies
  - @devtools/cli-common@0.1.13
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1

## 0.2.4

### Patch Changes

- Updated dependencies
  - @devtools/errors@1.2.4
  - @devtools/cli-common@0.1.13
  - @devtools/types@1.1.1

## 0.2.4-next.0

### Patch Changes

- Updated dependencies
  - @devtools/errors@1.2.4-next.0
  - @devtools/cli-common@0.1.13
  - @devtools/types@1.1.1

## 0.2.3

### Patch Changes

- d557d47: Added `repository` field to `DevtoolsPackageJson` type.
- 6bb6f3e: Updated dependency `fs-extra` to `^11.2.0`.
  Updated dependency `@types/fs-extra` to `^11.0.0`.
- Updated dependencies
  - @devtools/cli-common@0.1.13
  - @devtools/errors@1.2.3
  - @devtools/types@1.1.1

## 0.2.3-next.0

### Patch Changes

- d557d47: Added `repository` field to `DevtoolsPackageJson` type.
- Updated dependencies
  - @devtools/cli-common@0.1.13
  - @devtools/errors@1.2.3
  - @devtools/types@1.1.1

## 0.2.2

### Patch Changes

- 7acbb5a: Removed `mock-fs` dev dependency.
- Updated dependencies
  - @devtools/cli-common@0.1.13
  - @devtools/errors@1.2.3
  - @devtools/types@1.1.1

## 0.2.2-next.0

### Patch Changes

- 7acbb5a: Removed `mock-fs` dev dependency.
- Updated dependencies
  - @devtools/cli-common@0.1.13
  - @devtools/errors@1.2.3
  - @devtools/types@1.1.1

## 0.2.1

### Patch Changes

- 0cbb03b: Fixing regular expression ReDoS with zod packages. Upgrading to latest. ref: https://security.snyk.io/vuln/SNYK-JS-ZOD-5925617
- Updated dependencies
  - @devtools/cli-common@0.1.13
  - @devtools/errors@1.2.3
  - @devtools/types@1.1.1

## 0.2.0

### Minor Changes

- 8db5c3cd7a: Removed support for the `publishConfig.alphaTypes` and `.betaTypes` fields that were used together with `--experimental-type-build` to generate `/alpha` and `/beta` entry points. Use the `exports` field to achieve this instead.

### Patch Changes

- Updated dependencies
  - @devtools/cli-common@0.1.13
  - @devtools/errors@1.2.3
  - @devtools/types@1.1.1

## 0.2.0-next.0

### Minor Changes

- 8db5c3cd7a: Removed support for the `publishConfig.alphaTypes` and `.betaTypes` fields that were used together with `--experimental-type-build` to generate `/alpha` and `/beta` entry points. Use the `exports` field to achieve this instead.

### Patch Changes

- Updated dependencies
  - @devtools/cli-common@0.1.13
  - @devtools/errors@1.2.3
  - @devtools/types@1.1.1

## 0.1.5

### Patch Changes

- Updated dependencies
  - @devtools/errors@1.2.3
  - @devtools/cli-common@0.1.13
  - @devtools/types@1.1.1

## 0.1.5-next.1

### Patch Changes

- Updated dependencies
  - @devtools/errors@1.2.3-next.0
  - @devtools/cli-common@0.1.13-next.0
  - @devtools/types@1.1.1

## 0.1.5-next.0

### Patch Changes

- Updated dependencies
  - @devtools/cli-common@0.1.13-next.0
  - @devtools/errors@1.2.2
  - @devtools/types@1.1.1

## 0.1.4

### Patch Changes

- Updated dependencies
  - @devtools/errors@1.2.2
  - @devtools/types@1.1.1
  - @devtools/cli-common@0.1.12

## 0.1.4-next.0

### Patch Changes

- Updated dependencies
  - @devtools/errors@1.2.2-next.0
  - @devtools/types@1.1.1-next.0
  - @devtools/cli-common@0.1.12

## 0.1.3

### Patch Changes

- 12a8c94eda8d: Add package repository and homepage metadata
- Updated dependencies
  - @devtools/cli-common@0.1.12
  - @devtools/errors@1.2.1
  - @devtools/types@1.1.0

## 0.1.3-next.0

### Patch Changes

- 12a8c94eda8d: Add package repository and homepage metadata
- Updated dependencies
  - @devtools/cli-common@0.1.12
  - @devtools/errors@1.2.1
  - @devtools/types@1.1.0

## 0.1.2

### Patch Changes

- 4edd1ef71453: semver upgrade to 7.5.3
- Updated dependencies
  - @devtools/errors@1.2.1
  - @devtools/cli-common@0.1.12
  - @devtools/types@1.1.0

## 0.1.2-next.1

### Patch Changes

- 4edd1ef71453: semver upgrade to 7.5.3
- Updated dependencies
  - @devtools/cli-common@0.1.12
  - @devtools/errors@1.2.1-next.0
  - @devtools/types@1.1.0

## 0.1.2-next.0

### Patch Changes

- Updated dependencies
  - @devtools/errors@1.2.1-next.0
  - @devtools/cli-common@0.1.12
  - @devtools/types@1.1.0

## 0.1.1

### Patch Changes

- Updated dependencies
  - @devtools/types@1.1.0
  - @devtools/errors@1.2.0
  - @devtools/cli-common@0.1.12

## 0.1.1-next.0

### Patch Changes

- Updated dependencies
  - @devtools/errors@1.2.0-next.0
  - @devtools/cli-common@0.1.12
  - @devtools/types@1.0.2

## 0.1.0

### Minor Changes

- 3156b0d85dc: Introduced the new `@devtools/cli-node` package, which provides utilities for use across Devtools CLIs.

### Patch Changes

- Updated dependencies
  - @devtools/cli-common@0.1.12
  - @devtools/errors@1.1.5
  - @devtools/types@1.0.2

## 0.1.0-next.0

### Minor Changes

- 3156b0d85dc: Introduced the new `@devtools/cli-node` package, which provides utilities for use across Devtools CLIs.

### Patch Changes

- Updated dependencies
  - @devtools/cli-common@0.1.12
  - @devtools/errors@1.1.5
  - @devtools/types@1.0.2
