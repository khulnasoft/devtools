# @devtools/plugin-catalog-backend-module-incremental-ingestion

## 0.6.2-next.0

### Patch Changes

- ec547b8: Remove the error handler middleware, since that is now provided by the framework
- Updated dependencies
  - @devtools/backend-defaults@0.7.0-next.0
  - @devtools/plugin-catalog-backend@1.30.0-next.0
  - @devtools/backend-plugin-api@1.1.1-next.0
  - @devtools/catalog-model@1.7.2
  - @devtools/config@1.3.1
  - @devtools/errors@1.2.6
  - @devtools/types@1.2.0
  - @devtools/plugin-catalog-node@1.15.1-next.0
  - @devtools/plugin-events-node@0.4.7-next.0
  - @devtools/plugin-permission-common@0.8.3

## 0.6.1

### Patch Changes

- dfc8b41: Updated dependency `@opentelemetry/api` to `^1.9.0`.
- cce9cae: Deprecate old-backend-system `IncrementalCatalogBuilder`
- fe87fbf: Add task metrics as two gauges that track the last start and end timestamps as epoch seconds.
- 5aa44d2: Wire up the events together in the new backend system
- d42ecb0: Remove backend-common package from incremental-ingestion plugin and update related code
- cbfc69e: Create a `dev/index.ts` entrypoint for `yarn start`
- 3ca5f70: Ensure that the scheduled worker task doesn't run at an unreasonably high frequency
- Updated dependencies
  - @devtools/backend-defaults@0.6.0
  - @devtools/plugin-catalog-backend@1.29.0
  - @devtools/backend-plugin-api@1.1.0
  - @devtools/plugin-catalog-node@1.15.0
  - @devtools/plugin-events-node@0.4.6
  - @devtools/errors@1.2.6
  - @devtools/catalog-model@1.7.2
  - @devtools/config@1.3.1
  - @devtools/types@1.2.0
  - @devtools/plugin-permission-common@0.8.3

## 0.6.1-next.2

### Patch Changes

- dfc8b41: Updated dependency `@opentelemetry/api` to `^1.9.0`.
- d42ecb0: Remove backend-common package from incremental-ingestion plugin and update related code
- Updated dependencies
  - @devtools/backend-defaults@0.6.0-next.2
  - @devtools/plugin-catalog-backend@1.29.0-next.2
  - @devtools/backend-plugin-api@1.1.0-next.2
  - @devtools/errors@1.2.6-next.0
  - @devtools/plugin-catalog-node@1.15.0-next.2
  - @devtools/plugin-events-node@0.4.6-next.2
  - @devtools/catalog-model@1.7.2-next.0
  - @devtools/config@1.3.1-next.0
  - @devtools/types@1.2.0
  - @devtools/plugin-permission-common@0.8.3-next.0

## 0.6.1-next.1

### Patch Changes

- fe87fbf: Add task metrics as two gauges that track the last start and end timestamps as epoch seconds.
- Updated dependencies
  - @devtools/plugin-catalog-backend@1.29.0-next.1
  - @devtools/plugin-catalog-node@1.15.0-next.1
  - @devtools/backend-plugin-api@1.1.0-next.1
  - @devtools/catalog-model@1.7.1
  - @devtools/config@1.3.0
  - @devtools/errors@1.2.5
  - @devtools/types@1.2.0
  - @devtools/plugin-events-node@0.4.6-next.1
  - @devtools/plugin-permission-common@0.8.2

## 0.6.1-next.0

### Patch Changes

- cce9cae: Deprecate old-backend-system `IncrementalCatalogBuilder`
- 5aa44d2: Wire up the events together in the new backend system
- cbfc69e: Create a `dev/index.ts` entrypoint for `yarn start`
- 3ca5f70: Ensure that the scheduled worker task doesn't run at an unreasonably high frequency
- Updated dependencies
  - @devtools/backend-plugin-api@1.0.3-next.0
  - @devtools/plugin-catalog-backend@1.28.1-next.0
  - @devtools/plugin-events-node@0.4.6-next.0
  - @devtools/catalog-model@1.7.1
  - @devtools/config@1.3.0
  - @devtools/errors@1.2.5
  - @devtools/types@1.2.0
  - @devtools/plugin-catalog-node@1.14.1-next.0
  - @devtools/plugin-permission-common@0.8.2

## 0.6.0

### Minor Changes

- 6cf91c5: Use `HumanDuration` for all duration needs in the public API, instead of `luxon` types. These are generally compatible, with a few caveats:

  - If you scheduled things to run quarterly (`quarter` or `quarters`), you can use `{ months: 3 }` instead.
  - If you used the singular nouns such as `year: 1`, use plurals instead (e.g. `years: 1`).

### Patch Changes

- c5e39e7: Internal refactor to use the deferred from the types package
- 4e58bc7: Upgrade to uuid v11 internally
- Updated dependencies
  - @devtools/config@1.3.0
  - @devtools/plugin-events-node@0.4.5
  - @devtools/types@1.2.0
  - @devtools/plugin-catalog-backend@1.28.0
  - @devtools/plugin-catalog-node@1.14.0
  - @devtools/backend-plugin-api@1.0.2
  - @devtools/plugin-permission-common@0.8.2
  - @devtools/catalog-model@1.7.1
  - @devtools/errors@1.2.5

## 0.6.0-next.3

### Patch Changes

- Updated dependencies
  - @devtools/plugin-events-node@0.4.5-next.3
  - @devtools/plugin-catalog-backend@1.28.0-next.3
  - @devtools/backend-plugin-api@1.0.2-next.2
  - @devtools/catalog-model@1.7.0
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1
  - @devtools/plugin-catalog-node@1.14.0-next.2
  - @devtools/plugin-permission-common@0.8.1

## 0.6.0-next.2

### Patch Changes

- Updated dependencies
  - @devtools/plugin-catalog-backend@1.28.0-next.2
  - @devtools/plugin-events-node@0.4.5-next.2
  - @devtools/plugin-catalog-node@1.14.0-next.2
  - @devtools/backend-plugin-api@1.0.2-next.2
  - @devtools/catalog-model@1.7.0
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1
  - @devtools/plugin-permission-common@0.8.1

## 0.6.0-next.1

### Minor Changes

- 6cf91c5: Use `HumanDuration` for all duration needs in the public API, instead of `luxon` types. These are generally compatible, with a few caveats:

  - If you scheduled things to run quarterly (`quarter` or `quarters`), you can use `{ months: 3 }` instead.
  - If you used the singular nouns such as `year: 1`, use plurals instead (e.g. `years: 1`).

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@1.0.2-next.1
  - @devtools/catalog-model@1.7.0
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1
  - @devtools/plugin-catalog-backend@1.27.2-next.1
  - @devtools/plugin-catalog-node@1.14.0-next.1
  - @devtools/plugin-events-node@0.4.4-next.1
  - @devtools/plugin-permission-common@0.8.1

## 0.5.7-next.0

### Patch Changes

- Updated dependencies
  - @devtools/plugin-events-node@0.4.3-next.0
  - @devtools/plugin-catalog-node@1.14.0-next.0
  - @devtools/backend-plugin-api@1.0.2-next.0
  - @devtools/catalog-model@1.7.0
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/plugin-catalog-backend@1.27.2-next.0
  - @devtools/plugin-permission-common@0.8.1

## 0.5.5

### Patch Changes

- 4b60e0c: Remove extension points from `/alpha` export, they're available from the main package already
- 094eaa3: Remove references to in-repo backend-common
- 3109c24: The export for the new backend system at the `/alpha` export is now also available via the main entry point, which means that you can remove the `/alpha` suffix from the import.
- 2107965: Turn down the logging level on most "all is well" type log messages
- Updated dependencies
  - @devtools/plugin-catalog-backend@1.27.0
  - @devtools/plugin-events-node@0.4.1
  - @devtools/plugin-catalog-node@1.13.1
  - @devtools/backend-plugin-api@1.0.1
  - @devtools/catalog-model@1.7.0
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/plugin-permission-common@0.8.1

## 0.5.5-next.2

### Patch Changes

- Updated dependencies
  - @devtools/plugin-catalog-node@1.13.1-next.1
  - @devtools/plugin-catalog-backend@1.26.2-next.2
  - @devtools/backend-plugin-api@1.0.1-next.1
  - @devtools/catalog-model@1.7.0
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/plugin-events-node@0.4.1-next.1
  - @devtools/plugin-permission-common@0.8.1

## 0.5.5-next.1

### Patch Changes

- Updated dependencies
  - @devtools/plugin-catalog-backend@1.26.2-next.1
  - @devtools/backend-plugin-api@1.0.1-next.0
  - @devtools/catalog-model@1.7.0
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/plugin-catalog-node@1.13.1-next.0
  - @devtools/plugin-events-node@0.4.1-next.0
  - @devtools/plugin-permission-common@0.8.1

## 0.5.4-next.0

### Patch Changes

- 094eaa3: Remove references to in-repo backend-common
- Updated dependencies
  - @devtools/plugin-catalog-backend@1.26.1-next.0
  - @devtools/plugin-events-node@0.4.1-next.0
  - @devtools/backend-plugin-api@1.0.1-next.0
  - @devtools/catalog-model@1.7.0
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/plugin-catalog-node@1.13.1-next.0
  - @devtools/plugin-permission-common@0.8.1

## 0.5.3

### Patch Changes

- d425fc4: Modules, plugins, and services are now `BackendFeature`, not a function that returns a feature.
- 4b28e39: Updated the README to include documentation for the new backend support
- Updated dependencies
  - @devtools/backend-common@0.25.0
  - @devtools/backend-plugin-api@1.0.0
  - @devtools/catalog-model@1.7.0
  - @devtools/plugin-catalog-backend@1.26.0
  - @devtools/plugin-catalog-node@1.13.0
  - @devtools/plugin-events-node@0.4.0
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/plugin-permission-common@0.8.1

## 0.5.3-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.25.0-next.2
  - @devtools/backend-plugin-api@1.0.0-next.2
  - @devtools/plugin-catalog-backend@1.26.0-next.2
  - @devtools/catalog-model@1.6.0
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/plugin-catalog-node@1.12.7-next.2
  - @devtools/plugin-events-node@0.4.0-next.2
  - @devtools/plugin-permission-common@0.8.1

## 0.5.3-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.25.0-next.1
  - @devtools/plugin-catalog-backend@1.25.3-next.1
  - @devtools/backend-plugin-api@0.9.0-next.1
  - @devtools/catalog-model@1.6.0
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/plugin-catalog-node@1.12.7-next.1
  - @devtools/plugin-events-node@0.4.0-next.1
  - @devtools/plugin-permission-common@0.8.1

## 0.5.3-next.0

### Patch Changes

- d425fc4: Modules, plugins, and services are now `BackendFeature`, not a function that returns a feature.
- 4b28e39: Updated the README to include documentation for the new backend support
- Updated dependencies
  - @devtools/backend-plugin-api@0.9.0-next.0
  - @devtools/backend-common@0.25.0-next.0
  - @devtools/plugin-catalog-backend@1.25.3-next.0
  - @devtools/plugin-events-node@0.4.0-next.0
  - @devtools/plugin-catalog-node@1.12.7-next.0
  - @devtools/catalog-model@1.6.0
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/plugin-permission-common@0.8.1

## 0.5.0

### Minor Changes

- fc24d9e: Stop using `@devtools/backend-tasks` as it will be deleted in near future.

### Patch Changes

- 389f5a4: Update deprecated url-reader-related imports.
- Updated dependencies
  - @devtools/backend-plugin-api@0.8.0
  - @devtools/backend-common@0.24.0
  - @devtools/plugin-catalog-backend@1.25.0
  - @devtools/plugin-permission-common@0.8.1
  - @devtools/plugin-catalog-node@1.12.5
  - @devtools/catalog-model@1.6.0
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/plugin-events-node@0.3.9

## 0.4.28-next.3

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.8.0-next.3
  - @devtools/backend-common@0.23.4-next.3
  - @devtools/catalog-model@1.6.0-next.0
  - @devtools/backend-tasks@0.5.28-next.3
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/plugin-catalog-backend@1.24.1-next.3
  - @devtools/plugin-catalog-node@1.12.5-next.3
  - @devtools/plugin-events-node@0.3.9-next.3
  - @devtools/plugin-permission-common@0.8.1-next.1

## 0.4.28-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.8.0-next.2
  - @devtools/plugin-permission-common@0.8.1-next.1
  - @devtools/backend-common@0.23.4-next.2
  - @devtools/plugin-catalog-backend@1.24.1-next.2
  - @devtools/backend-tasks@0.5.28-next.2
  - @devtools/plugin-catalog-node@1.12.5-next.2
  - @devtools/plugin-events-node@0.3.9-next.2
  - @devtools/catalog-model@1.5.0
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4

## 0.4.28-next.1

### Patch Changes

- Updated dependencies
  - @devtools/plugin-permission-common@0.8.1-next.0
  - @devtools/plugin-catalog-backend@1.24.1-next.1
  - @devtools/backend-plugin-api@0.7.1-next.1
  - @devtools/backend-common@0.23.4-next.1
  - @devtools/plugin-catalog-node@1.12.5-next.1
  - @devtools/backend-tasks@0.5.28-next.1
  - @devtools/catalog-model@1.5.0
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/plugin-events-node@0.3.9-next.1

## 0.4.28-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.23.4-next.0
  - @devtools/plugin-catalog-backend@1.24.1-next.0
  - @devtools/plugin-catalog-node@1.12.5-next.0
  - @devtools/backend-plugin-api@0.7.1-next.0
  - @devtools/backend-tasks@0.5.28-next.0
  - @devtools/catalog-model@1.5.0
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/plugin-events-node@0.3.9-next.0
  - @devtools/plugin-permission-common@0.8.0

## 0.4.27

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.7.0
  - @devtools/backend-common@0.23.3
  - @devtools/backend-tasks@0.5.27
  - @devtools/plugin-permission-common@0.8.0
  - @devtools/plugin-events-node@0.3.8
  - @devtools/plugin-catalog-backend@1.24.0
  - @devtools/plugin-catalog-node@1.12.4
  - @devtools/catalog-model@1.5.0
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4

## 0.4.27-next.1

### Patch Changes

- Updated dependencies
  - @devtools/plugin-catalog-backend@1.24.0-next.1
  - @devtools/backend-common@0.23.3-next.1
  - @devtools/backend-plugin-api@0.6.22-next.1
  - @devtools/backend-tasks@0.5.27-next.1
  - @devtools/catalog-model@1.5.0
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/plugin-catalog-node@1.12.4-next.1
  - @devtools/plugin-events-node@0.3.8-next.1
  - @devtools/plugin-permission-common@0.7.14

## 0.4.26-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.6.21-next.0
  - @devtools/backend-common@0.23.2-next.0
  - @devtools/backend-tasks@0.5.26-next.0
  - @devtools/plugin-catalog-backend@1.23.2-next.0
  - @devtools/plugin-catalog-node@1.12.3-next.0
  - @devtools/plugin-events-node@0.3.7-next.0
  - @devtools/catalog-model@1.5.0
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/plugin-permission-common@0.7.14

## 0.4.24

### Patch Changes

- 78a0b08: Internal refactor to handle `BackendFeature` contract change.
- d44a20a: Added additional plugin metadata to `package.json`.
- Updated dependencies
  - @devtools/backend-common@0.23.0
  - @devtools/backend-plugin-api@0.6.19
  - @devtools/backend-tasks@0.5.24
  - @devtools/plugin-catalog-backend@1.23.0
  - @devtools/plugin-catalog-node@1.12.1
  - @devtools/plugin-events-node@0.3.5
  - @devtools/plugin-permission-common@0.7.14
  - @devtools/catalog-model@1.5.0
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4

## 0.4.24-next.3

### Patch Changes

- d44a20a: Added additional plugin metadata to `package.json`.
- Updated dependencies
  - @devtools/backend-plugin-api@0.6.19-next.3
  - @devtools/plugin-permission-common@0.7.14-next.0
  - @devtools/plugin-catalog-backend@1.23.0-next.3
  - @devtools/plugin-catalog-node@1.12.1-next.2
  - @devtools/plugin-events-node@0.3.5-next.2
  - @devtools/backend-tasks@0.5.24-next.3
  - @devtools/backend-common@0.23.0-next.3
  - @devtools/catalog-model@1.5.0
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4

## 0.4.24-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.6.19-next.2
  - @devtools/backend-common@0.23.0-next.2
  - @devtools/backend-tasks@0.5.24-next.2
  - @devtools/plugin-catalog-backend@1.23.0-next.2
  - @devtools/plugin-catalog-node@1.12.1-next.1
  - @devtools/plugin-events-node@0.3.5-next.1
  - @devtools/catalog-model@1.5.0
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/plugin-permission-common@0.7.13

## 0.4.24-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-tasks@0.5.24-next.1
  - @devtools/backend-plugin-api@0.6.19-next.1
  - @devtools/backend-common@0.23.0-next.1
  - @devtools/plugin-catalog-backend@1.23.0-next.1
  - @devtools/plugin-catalog-node@1.12.1-next.0
  - @devtools/plugin-events-node@0.3.5-next.0

## 0.4.24-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-tasks@0.5.24-next.0
  - @devtools/backend-common@0.22.1-next.0
  - @devtools/plugin-catalog-backend@1.23.0-next.0
  - @devtools/plugin-events-node@0.3.5-next.0
  - @devtools/backend-plugin-api@0.6.19-next.0
  - @devtools/plugin-catalog-node@1.12.1-next.0
  - @devtools/catalog-model@1.5.0
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/plugin-permission-common@0.7.13

## 0.4.23

### Patch Changes

- 8c1ab9e: Fix plugin/incremental-ingestion 'Maximum call stack size exceeded' error when ingest large entities.
- d229dc4: Move path utilities from `backend-common` to the `backend-plugin-api` package.
- Updated dependencies
  - @devtools/plugin-catalog-node@1.12.0
  - @devtools/plugin-catalog-backend@1.22.0
  - @devtools/catalog-model@1.5.0
  - @devtools/backend-common@0.22.0
  - @devtools/backend-plugin-api@0.6.18
  - @devtools/backend-tasks@0.5.23
  - @devtools/plugin-events-node@0.3.4

## 0.4.23-next.2

### Patch Changes

- Updated dependencies
  - @devtools/plugin-catalog-node@1.12.0-next.2
  - @devtools/plugin-catalog-backend@1.22.0-next.2
  - @devtools/backend-common@0.22.0-next.2
  - @devtools/plugin-events-node@0.3.4-next.2

## 0.4.23-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.22.0-next.1
  - @devtools/plugin-catalog-backend@1.22.0-next.1
  - @devtools/backend-tasks@0.5.23-next.1
  - @devtools/plugin-events-node@0.3.4-next.1
  - @devtools/plugin-catalog-node@1.11.2-next.1
  - @devtools/backend-plugin-api@0.6.18-next.1

## 0.4.23-next.0

### Patch Changes

- 8c1ab9e: Fix plugin/incremental-ingestion 'Maximum call stack size exceeded' error when ingest large entities.
- Updated dependencies
  - @devtools/plugin-catalog-backend@1.22.0-next.0
  - @devtools/catalog-model@1.5.0-next.0
  - @devtools/backend-common@0.21.8-next.0
  - @devtools/backend-plugin-api@0.6.18-next.0
  - @devtools/plugin-catalog-node@1.11.2-next.0
  - @devtools/backend-tasks@0.5.23-next.0
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/plugin-events-node@0.3.4-next.0
  - @devtools/plugin-permission-common@0.7.13

## 0.4.22

### Patch Changes

- d5a1fe1: Replaced winston logger with `LoggerService`
- Updated dependencies
  - @devtools/backend-common@0.21.7
  - @devtools/plugin-catalog-backend@1.21.1
  - @devtools/backend-plugin-api@0.6.17
  - @devtools/backend-tasks@0.5.22
  - @devtools/plugin-events-node@0.3.3
  - @devtools/plugin-catalog-node@1.11.1
  - @devtools/catalog-model@1.4.5
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/plugin-permission-common@0.7.13

## 0.4.22-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.21.7-next.1
  - @devtools/backend-plugin-api@0.6.17-next.1
  - @devtools/plugin-catalog-backend@1.21.1-next.1
  - @devtools/backend-tasks@0.5.22-next.1
  - @devtools/plugin-events-node@0.3.3-next.1
  - @devtools/catalog-model@1.4.5
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/plugin-catalog-node@1.11.1-next.1
  - @devtools/plugin-permission-common@0.7.13

## 0.4.22-next.0

### Patch Changes

- Updated dependencies
  - @devtools/plugin-catalog-backend@1.21.1-next.0
  - @devtools/backend-common@0.21.7-next.0
  - @devtools/backend-plugin-api@0.6.17-next.0
  - @devtools/backend-tasks@0.5.22-next.0
  - @devtools/catalog-model@1.4.5
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/plugin-catalog-node@1.11.1-next.0
  - @devtools/plugin-events-node@0.3.3-next.0
  - @devtools/plugin-permission-common@0.7.13

## 0.4.21

### Patch Changes

- Updated dependencies
  - @devtools/plugin-catalog-backend@1.21.0
  - @devtools/plugin-catalog-node@1.11.0
  - @devtools/backend-common@0.21.6
  - @devtools/backend-plugin-api@0.6.16
  - @devtools/backend-tasks@0.5.21
  - @devtools/plugin-events-node@0.3.2
  - @devtools/catalog-model@1.4.5
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/plugin-permission-common@0.7.13

## 0.4.20

### Patch Changes

- Updated dependencies
  - @devtools/plugin-catalog-backend@1.20.0
  - @devtools/plugin-catalog-node@1.10.0
  - @devtools/backend-common@0.21.5
  - @devtools/backend-tasks@0.5.20
  - @devtools/plugin-events-node@0.3.1
  - @devtools/backend-plugin-api@0.6.15
  - @devtools/catalog-model@1.4.5
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/plugin-permission-common@0.7.13

## 0.4.19

### Patch Changes

- Updated dependencies
  - @devtools/plugin-catalog-backend@1.19.0
  - @devtools/plugin-catalog-node@1.9.0

## 0.4.18

### Patch Changes

- 0fb419b: Updated dependency `uuid` to `^9.0.0`.
  Updated dependency `@types/uuid` to `^9.0.0`.
- Updated dependencies
  - @devtools/plugin-events-node@0.3.0
  - @devtools/plugin-catalog-backend@1.18.0
  - @devtools/backend-common@0.21.4
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/backend-plugin-api@0.6.14
  - @devtools/plugin-permission-common@0.7.13
  - @devtools/plugin-catalog-node@1.8.0
  - @devtools/backend-tasks@0.5.19
  - @devtools/catalog-model@1.4.5

## 0.4.18-next.2

### Patch Changes

- Updated dependencies
  - @devtools/plugin-catalog-backend@1.18.0-next.2
  - @devtools/backend-common@0.21.4-next.2
  - @devtools/plugin-catalog-node@1.8.0-next.2
  - @devtools/backend-plugin-api@0.6.14-next.2
  - @devtools/backend-tasks@0.5.19-next.2
  - @devtools/catalog-model@1.4.5-next.0
  - @devtools/config@1.2.0-next.1
  - @devtools/errors@1.2.4-next.0
  - @devtools/plugin-events-node@0.3.0-next.2
  - @devtools/plugin-permission-common@0.7.13-next.1

## 0.4.18-next.1

### Patch Changes

- Updated dependencies
  - @devtools/config@1.2.0-next.1
  - @devtools/backend-common@0.21.4-next.1
  - @devtools/backend-plugin-api@0.6.14-next.1
  - @devtools/backend-tasks@0.5.19-next.1
  - @devtools/plugin-catalog-backend@1.18.0-next.1
  - @devtools/plugin-permission-common@0.7.13-next.1
  - @devtools/catalog-model@1.4.5-next.0
  - @devtools/errors@1.2.4-next.0
  - @devtools/plugin-catalog-node@1.8.0-next.1
  - @devtools/plugin-events-node@0.3.0-next.1

## 0.4.17-next.0

### Patch Changes

- 0fb419b: Updated dependency `uuid` to `^9.0.0`.
  Updated dependency `@types/uuid` to `^9.0.0`.
- Updated dependencies
  - @devtools/plugin-events-node@0.3.0-next.0
  - @devtools/backend-common@0.21.3-next.0
  - @devtools/errors@1.2.4-next.0
  - @devtools/backend-plugin-api@0.6.13-next.0
  - @devtools/plugin-catalog-backend@1.18.0-next.0
  - @devtools/plugin-permission-common@0.7.13-next.0
  - @devtools/plugin-catalog-node@1.8.0-next.0
  - @devtools/backend-tasks@0.5.18-next.0
  - @devtools/catalog-model@1.4.5-next.0
  - @devtools/config@1.1.2-next.0

## 0.4.14

### Patch Changes

- 9aac2b0: Use `--cwd` as the first `yarn` argument
- Updated dependencies
  - @devtools/backend-common@0.21.0
  - @devtools/backend-plugin-api@0.6.10
  - @devtools/plugin-catalog-backend@1.17.0
  - @devtools/backend-tasks@0.5.15
  - @devtools/catalog-model@1.4.4
  - @devtools/plugin-catalog-node@1.7.0
  - @devtools/config@1.1.1
  - @devtools/errors@1.2.3
  - @devtools/plugin-events-node@0.2.19
  - @devtools/plugin-permission-common@0.7.12

## 0.4.14-next.3

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.21.0-next.3
  - @devtools/backend-tasks@0.5.15-next.3
  - @devtools/plugin-catalog-backend@1.17.0-next.3
  - @devtools/plugin-catalog-node@1.6.2-next.3
  - @devtools/backend-plugin-api@0.6.10-next.3
  - @devtools/catalog-model@1.4.4-next.0
  - @devtools/config@1.1.1
  - @devtools/errors@1.2.3
  - @devtools/plugin-events-node@0.2.19-next.3
  - @devtools/plugin-permission-common@0.7.12

## 0.4.14-next.2

### Patch Changes

- 9aac2b0: Use `--cwd` as the first `yarn` argument
- Updated dependencies
  - @devtools/backend-common@0.21.0-next.2
  - @devtools/backend-plugin-api@0.6.10-next.2
  - @devtools/plugin-catalog-backend@1.17.0-next.2
  - @devtools/backend-tasks@0.5.15-next.2
  - @devtools/plugin-catalog-node@1.6.2-next.2
  - @devtools/plugin-events-node@0.2.19-next.2
  - @devtools/config@1.1.1
  - @devtools/catalog-model@1.4.4-next.0
  - @devtools/errors@1.2.3
  - @devtools/plugin-permission-common@0.7.12

## 0.4.14-next.1

### Patch Changes

- Updated dependencies
  - @devtools/catalog-model@1.4.4-next.0
  - @devtools/plugin-catalog-backend@1.17.0-next.1
  - @devtools/backend-plugin-api@0.6.10-next.1
  - @devtools/backend-common@0.21.0-next.1
  - @devtools/backend-tasks@0.5.15-next.1
  - @devtools/config@1.1.1
  - @devtools/errors@1.2.3
  - @devtools/plugin-catalog-node@1.6.2-next.1
  - @devtools/plugin-events-node@0.2.19-next.1
  - @devtools/plugin-permission-common@0.7.12

## 0.4.14-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.21.0-next.0
  - @devtools/plugin-catalog-backend@1.17.0-next.0
  - @devtools/backend-tasks@0.5.15-next.0
  - @devtools/plugin-catalog-node@1.6.2-next.0
  - @devtools/backend-plugin-api@0.6.10-next.0
  - @devtools/catalog-model@1.4.3
  - @devtools/config@1.1.1
  - @devtools/errors@1.2.3
  - @devtools/plugin-events-node@0.2.19-next.0
  - @devtools/plugin-permission-common@0.7.12

## 0.4.13

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.20.1
  - @devtools/backend-plugin-api@0.6.9
  - @devtools/plugin-catalog-node@1.6.1
  - @devtools/plugin-permission-common@0.7.12
  - @devtools/plugin-catalog-backend@1.16.1
  - @devtools/backend-tasks@0.5.14
  - @devtools/catalog-model@1.4.3
  - @devtools/config@1.1.1
  - @devtools/errors@1.2.3
  - @devtools/plugin-events-node@0.2.18

## 0.4.13-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.6.9-next.2
  - @devtools/backend-common@0.20.1-next.2
  - @devtools/plugin-catalog-backend@1.16.1-next.2
  - @devtools/plugin-catalog-node@1.6.1-next.2
  - @devtools/plugin-events-node@0.2.18-next.2
  - @devtools/backend-tasks@0.5.14-next.2

## 0.4.13-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.20.1-next.1
  - @devtools/config@1.1.1
  - @devtools/backend-tasks@0.5.14-next.1
  - @devtools/plugin-catalog-backend@1.16.1-next.1
  - @devtools/backend-plugin-api@0.6.9-next.1
  - @devtools/catalog-model@1.4.3
  - @devtools/errors@1.2.3
  - @devtools/plugin-catalog-node@1.6.1-next.1
  - @devtools/plugin-events-node@0.2.18-next.1
  - @devtools/plugin-permission-common@0.7.11

## 0.4.13-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.20.1-next.0
  - @devtools/plugin-catalog-node@1.6.1-next.0
  - @devtools/backend-plugin-api@0.6.9-next.0
  - @devtools/backend-tasks@0.5.14-next.0
  - @devtools/catalog-model@1.4.3
  - @devtools/config@1.1.1
  - @devtools/errors@1.2.3
  - @devtools/plugin-catalog-backend@1.16.1-next.0
  - @devtools/plugin-events-node@0.2.18-next.0
  - @devtools/plugin-permission-common@0.7.11

## 0.4.12

### Patch Changes

- 43b2eb8: Ensure that cursors always come back as JSON on sqlite too
- cc4228e: Switched module ID to use kebab-case.
- Updated dependencies
  - @devtools/backend-common@0.20.0
  - @devtools/plugin-catalog-node@1.6.0
  - @devtools/plugin-catalog-backend@1.16.0
  - @devtools/backend-tasks@0.5.13
  - @devtools/plugin-permission-common@0.7.11
  - @devtools/backend-plugin-api@0.6.8
  - @devtools/catalog-model@1.4.3
  - @devtools/config@1.1.1
  - @devtools/errors@1.2.3
  - @devtools/plugin-events-node@0.2.17

## 0.4.12-next.3

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.20.0-next.3
  - @devtools/backend-plugin-api@0.6.8-next.3
  - @devtools/backend-tasks@0.5.13-next.3
  - @devtools/catalog-model@1.4.3
  - @devtools/config@1.1.1
  - @devtools/errors@1.2.3
  - @devtools/plugin-catalog-backend@1.16.0-next.3
  - @devtools/plugin-catalog-node@1.6.0-next.3
  - @devtools/plugin-events-node@0.2.17-next.3
  - @devtools/plugin-permission-common@0.7.10

## 0.4.12-next.2

### Patch Changes

- cc4228e: Switched module ID to use kebab-case.
- Updated dependencies
  - @devtools/plugin-catalog-node@1.6.0-next.2
  - @devtools/plugin-catalog-backend@1.16.0-next.2
  - @devtools/backend-common@0.20.0-next.2
  - @devtools/backend-plugin-api@0.6.8-next.2
  - @devtools/backend-tasks@0.5.13-next.2
  - @devtools/catalog-model@1.4.3
  - @devtools/config@1.1.1
  - @devtools/errors@1.2.3
  - @devtools/plugin-events-node@0.2.17-next.2
  - @devtools/plugin-permission-common@0.7.10

## 0.4.12-next.1

### Patch Changes

- 43b2eb8f70: Ensure that cursors always come back as JSON on sqlite too
- Updated dependencies
  - @devtools/plugin-catalog-backend@1.15.1-next.1
  - @devtools/backend-common@0.20.0-next.1
  - @devtools/backend-plugin-api@0.6.8-next.1
  - @devtools/backend-tasks@0.5.13-next.1
  - @devtools/catalog-model@1.4.3
  - @devtools/config@1.1.1
  - @devtools/errors@1.2.3
  - @devtools/plugin-catalog-node@1.5.1-next.1
  - @devtools/plugin-events-node@0.2.17-next.1
  - @devtools/plugin-permission-common@0.7.10

## 0.4.12-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.20.0-next.0
  - @devtools/backend-tasks@0.5.13-next.0
  - @devtools/plugin-catalog-backend@1.15.1-next.0
  - @devtools/plugin-catalog-node@1.5.1-next.0
  - @devtools/backend-plugin-api@0.6.8-next.0
  - @devtools/catalog-model@1.4.3
  - @devtools/config@1.1.1
  - @devtools/errors@1.2.3
  - @devtools/plugin-events-node@0.2.17-next.0
  - @devtools/plugin-permission-common@0.7.10

## 0.4.11

### Patch Changes

- 013611b42e: `knex` has been bumped to major version 3 and `better-sqlite3` to major version 9, which deprecate node 16 support.
- Updated dependencies
  - @devtools/plugin-catalog-backend@1.15.0
  - @devtools/plugin-catalog-node@1.5.0
  - @devtools/backend-common@0.19.9
  - @devtools/backend-plugin-api@0.6.7
  - @devtools/backend-tasks@0.5.12
  - @devtools/plugin-permission-common@0.7.10
  - @devtools/catalog-model@1.4.3
  - @devtools/config@1.1.1
  - @devtools/errors@1.2.3
  - @devtools/plugin-events-node@0.2.16

## 0.4.11-next.2

### Patch Changes

- [#20570](https://github.com/khulnasoft/devtools/pull/20570) [`013611b42e`](https://github.com/khulnasoft/devtools/commit/013611b42ed457fefa9bb85fddf416cf5e0c1f76) Thanks [@freben](https://github.com/freben)! - `knex` has been bumped to major version 3 and `better-sqlite3` to major version 9, which deprecate node 16 support.

- Updated dependencies
  - @devtools/backend-plugin-api@0.6.7-next.2
  - @devtools/backend-common@0.19.9-next.2
  - @devtools/plugin-catalog-backend@1.15.0-next.2
  - @devtools/backend-tasks@0.5.12-next.2
  - @devtools/plugin-catalog-node@1.5.0-next.2
  - @devtools/plugin-events-node@0.2.16-next.2

## 0.4.11-next.1

### Patch Changes

- Updated dependencies
  - @devtools/plugin-catalog-backend@1.15.0-next.1
  - @devtools/plugin-catalog-node@1.5.0-next.1
  - @devtools/backend-common@0.19.9-next.1
  - @devtools/backend-tasks@0.5.12-next.1
  - @devtools/backend-plugin-api@0.6.7-next.1
  - @devtools/catalog-model@1.4.3
  - @devtools/config@1.1.1
  - @devtools/errors@1.2.3
  - @devtools/plugin-events-node@0.2.16-next.1
  - @devtools/plugin-permission-common@0.7.9

## 0.4.11-next.0

### Patch Changes

- Updated dependencies
  - @devtools/plugin-catalog-backend@1.15.0-next.0
  - @devtools/backend-common@0.19.9-next.0
  - @devtools/backend-plugin-api@0.6.7-next.0
  - @devtools/backend-tasks@0.5.12-next.0
  - @devtools/catalog-model@1.4.3
  - @devtools/config@1.1.1
  - @devtools/errors@1.2.3
  - @devtools/plugin-catalog-node@1.4.8-next.0
  - @devtools/plugin-events-node@0.2.16-next.0
  - @devtools/plugin-permission-common@0.7.9

## 0.4.10

### Patch Changes

- 0b55f773a7: Removed some unused dependencies
- Updated dependencies
  - @devtools/backend-tasks@0.5.11
  - @devtools/backend-common@0.19.8
  - @devtools/plugin-catalog-backend@1.14.0
  - @devtools/plugin-catalog-node@1.4.7
  - @devtools/catalog-model@1.4.3
  - @devtools/errors@1.2.3
  - @devtools/backend-plugin-api@0.6.6
  - @devtools/config@1.1.1
  - @devtools/plugin-events-node@0.2.15
  - @devtools/plugin-permission-common@0.7.9

## 0.4.10-next.2

### Patch Changes

- 0b55f773a7: Removed some unused dependencies
- Updated dependencies
  - @devtools/backend-common@0.19.8-next.2
  - @devtools/plugin-catalog-backend@1.14.0-next.2
  - @devtools/catalog-model@1.4.3-next.0
  - @devtools/errors@1.2.3-next.0
  - @devtools/backend-tasks@0.5.11-next.2
  - @devtools/plugin-catalog-node@1.4.7-next.2
  - @devtools/backend-plugin-api@0.6.6-next.2
  - @devtools/config@1.1.1-next.0
  - @devtools/plugin-events-node@0.2.15-next.2
  - @devtools/plugin-permission-common@0.7.9-next.0

## 0.4.9-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-tasks@0.5.10-next.1
  - @devtools/plugin-catalog-backend@1.14.0-next.1
  - @devtools/plugin-catalog-node@1.4.6-next.1
  - @devtools/backend-common@0.19.7-next.1
  - @devtools/backend-plugin-api@0.6.5-next.1
  - @devtools/config@1.1.0
  - @devtools/catalog-model@1.4.2
  - @devtools/errors@1.2.2
  - @devtools/plugin-events-node@0.2.14-next.1
  - @devtools/plugin-permission-common@0.7.8

## 0.4.9-next.0

### Patch Changes

- Updated dependencies
  - @devtools/plugin-catalog-backend@1.14.0-next.0
  - @devtools/backend-common@0.19.7-next.0
  - @devtools/config@1.1.0
  - @devtools/backend-plugin-api@0.6.5-next.0
  - @devtools/backend-tasks@0.5.10-next.0
  - @devtools/catalog-model@1.4.2
  - @devtools/errors@1.2.2
  - @devtools/plugin-catalog-node@1.4.6-next.0
  - @devtools/plugin-events-node@0.2.14-next.0
  - @devtools/plugin-permission-common@0.7.8

## 0.4.6

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
  - @devtools/plugin-catalog-backend@1.13.0
  - @devtools/backend-tasks@0.5.8
  - @devtools/backend-common@0.19.5
  - @devtools/config@1.1.0
  - @devtools/catalog-model@1.4.2
  - @devtools/errors@1.2.2
  - @devtools/plugin-permission-common@0.7.8
  - @devtools/backend-plugin-api@0.6.3
  - @devtools/plugin-catalog-node@1.4.4
  - @devtools/plugin-events-node@0.2.12

## 0.4.6-next.3

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
  - @devtools/plugin-catalog-backend@1.13.0-next.3
  - @devtools/catalog-model@1.4.2-next.2
  - @devtools/config@1.1.0-next.2
  - @devtools/errors@1.2.2-next.0
  - @devtools/plugin-permission-common@0.7.8-next.2
  - @devtools/backend-plugin-api@0.6.3-next.3
  - @devtools/backend-common@0.19.5-next.3
  - @devtools/backend-tasks@0.5.8-next.3
  - @devtools/plugin-catalog-node@1.4.4-next.3
  - @devtools/plugin-events-node@0.2.12-next.3

## 0.4.6-next.2

### Patch Changes

- Updated dependencies
  - @devtools/plugin-catalog-backend@1.13.0-next.2
  - @devtools/config@1.1.0-next.1
  - @devtools/backend-tasks@0.5.8-next.2
  - @devtools/backend-common@0.19.5-next.2
  - @devtools/plugin-catalog-node@1.4.4-next.2
  - @devtools/backend-plugin-api@0.6.3-next.2
  - @devtools/catalog-model@1.4.2-next.1
  - @devtools/plugin-permission-common@0.7.8-next.1
  - @devtools/errors@1.2.1
  - @devtools/plugin-events-node@0.2.12-next.2

## 0.4.6-next.1

### Patch Changes

- Updated dependencies
  - @devtools/plugin-catalog-backend@1.13.0-next.1
  - @devtools/config@1.1.0-next.0
  - @devtools/backend-tasks@0.5.8-next.1
  - @devtools/backend-common@0.19.5-next.1
  - @devtools/backend-plugin-api@0.6.3-next.1
  - @devtools/catalog-model@1.4.2-next.0
  - @devtools/plugin-permission-common@0.7.8-next.0
  - @devtools/plugin-catalog-node@1.4.4-next.1
  - @devtools/plugin-events-node@0.2.12-next.1
  - @devtools/errors@1.2.1

## 0.4.3-next.0

### Patch Changes

- Updated dependencies
  - @devtools/plugin-catalog-backend@1.12.2-next.0
  - @devtools/backend-common@0.19.4-next.0
  - @devtools/backend-tasks@0.5.7-next.0
  - @devtools/backend-plugin-api@0.6.2-next.0
  - @devtools/catalog-model@1.4.1
  - @devtools/config@1.0.8
  - @devtools/errors@1.2.1
  - @devtools/plugin-catalog-node@1.4.3-next.0
  - @devtools/plugin-events-node@0.2.11-next.0
  - @devtools/plugin-permission-common@0.7.7

## 0.4.1

### Patch Changes

- 629cbd194a87: Use `coreServices.rootConfig` instead of `coreService.config`
- e2b6396a1274: Export new alpha `incrementalIngestionProvidersExtensionPoint` for registering incremental providers, rather than the providers being passed as options to the backend module.
- Updated dependencies
  - @devtools/backend-common@0.19.2
  - @devtools/plugin-catalog-backend@1.12.0
  - @devtools/backend-plugin-api@0.6.0
  - @devtools/plugin-catalog-node@1.4.1
  - @devtools/plugin-events-node@0.2.9
  - @devtools/backend-tasks@0.5.5
  - @devtools/catalog-model@1.4.1
  - @devtools/config@1.0.8
  - @devtools/errors@1.2.1
  - @devtools/plugin-permission-common@0.7.7

## 0.4.1-next.2

### Patch Changes

- Updated dependencies
  - @devtools/plugin-catalog-backend@1.12.0-next.2
  - @devtools/backend-plugin-api@0.6.0-next.2
  - @devtools/backend-tasks@0.5.5-next.2
  - @devtools/backend-common@0.19.2-next.2
  - @devtools/plugin-catalog-node@1.4.1-next.2
  - @devtools/plugin-events-node@0.2.9-next.2

## 0.4.1-next.1

### Patch Changes

- 629cbd194a87: Use `coreServices.rootConfig` instead of `coreService.config`
- Updated dependencies
  - @devtools/backend-common@0.19.2-next.1
  - @devtools/plugin-catalog-backend@1.12.0-next.1
  - @devtools/plugin-catalog-node@1.4.1-next.1
  - @devtools/plugin-events-node@0.2.9-next.1
  - @devtools/backend-plugin-api@0.6.0-next.1
  - @devtools/backend-tasks@0.5.5-next.1
  - @devtools/catalog-model@1.4.1
  - @devtools/config@1.0.8
  - @devtools/errors@1.2.1
  - @devtools/plugin-permission-common@0.7.7

## 0.4.1-next.0

### Patch Changes

- Updated dependencies
  - @devtools/plugin-catalog-backend@1.12.0-next.0
  - @devtools/backend-common@0.19.2-next.0
  - @devtools/backend-plugin-api@0.5.5-next.0
  - @devtools/backend-tasks@0.5.5-next.0
  - @devtools/catalog-model@1.4.1
  - @devtools/config@1.0.8
  - @devtools/errors@1.2.1
  - @devtools/plugin-catalog-node@1.4.1-next.0
  - @devtools/plugin-events-node@0.2.9-next.0
  - @devtools/plugin-permission-common@0.7.7

## 0.4.0

### Minor Changes

- b1cc10696f2f: **BREAKING** Allow incremental event handlers to be async; Force event handler
  to indicate if it made a change. Instead of returning `null` or `undefined` from an event
  handler to indicate no-oop, instead return the value { type: "ignored" }.

  **before**

  ```javascript
  import { createDelta, shouldIgnore } from "./my-delta-creater";

  eventHandler: {
    onEvent(params) {
      if (shouldIgnore(params)) {
        return;
      }
      return createDelta(params);
    }
  }
  ```

  **after**

  ```javascript
  import { createDelta, shouldIgnore } from "./my-delta-creater";

  eventHandler: {
    async onEvent(params) {
      if (shouldIgnore(params) {
        return { type: "ignored" };
      }
      // code to create delta can now be async if needed
      return await createDelta(params);
    }
  }
  ```

### Patch Changes

- e1d615757f48: Update readme and instructions
- Updated dependencies
  - @devtools/errors@1.2.1
  - @devtools/backend-common@0.19.1
  - @devtools/plugin-catalog-backend@1.11.0
  - @devtools/plugin-catalog-node@1.4.0
  - @devtools/backend-plugin-api@0.5.4
  - @devtools/backend-tasks@0.5.4
  - @devtools/catalog-model@1.4.1
  - @devtools/config@1.0.8
  - @devtools/plugin-events-node@0.2.8
  - @devtools/plugin-permission-common@0.7.7

## 0.4.0-next.1

### Minor Changes

- b1cc10696f2f: **BREAKING** Allow incremental event handlers to be async; Force event handler
  to indicate if it made a change. Instead of returning `null` or `undefined` from an event
  handler to indicate no-oop, instead return the value { type: "ignored" }.

  **before**

  ```javascript
  import { createDelta, shouldIgnore } from "./my-delta-creater";

  eventHandler: {
    onEvent(params) {
      if (shouldIgnore(params)) {
        return;
      }
      return createDelta(params);
    }
  }
  ```

  **after**

  ```javascript
  import { createDelta, shouldIgnore } from "./my-delta-creater";

  eventHandler: {
    async onEvent(params) {
      if (shouldIgnore(params) {
        return { type: "ignored" };
      }
      // code to create delta can now be async if needed
      return await createDelta(params);
    }
  }
  ```

### Patch Changes

- e1d615757f48: Update readme and instructions
- Updated dependencies
  - @devtools/backend-common@0.19.1-next.0
  - @devtools/backend-plugin-api@0.5.4-next.0
  - @devtools/backend-tasks@0.5.4-next.0
  - @devtools/catalog-model@1.4.1-next.0
  - @devtools/config@1.0.8
  - @devtools/errors@1.2.1-next.0
  - @devtools/plugin-catalog-backend@1.11.0-next.0
  - @devtools/plugin-catalog-node@1.4.0-next.0
  - @devtools/plugin-events-node@0.2.8-next.0
  - @devtools/plugin-permission-common@0.7.7-next.0

## 0.3.4-next.0

### Patch Changes

- Updated dependencies
  - @devtools/errors@1.2.1-next.0
  - @devtools/backend-common@0.19.1-next.0
  - @devtools/plugin-catalog-backend@1.11.0-next.0
  - @devtools/plugin-catalog-node@1.4.0-next.0
  - @devtools/backend-plugin-api@0.5.4-next.0
  - @devtools/backend-tasks@0.5.4-next.0
  - @devtools/catalog-model@1.4.1-next.0
  - @devtools/config@1.0.8
  - @devtools/plugin-events-node@0.2.8-next.0
  - @devtools/plugin-permission-common@0.7.7-next.0

## 0.3.3

### Patch Changes

- 53309661cb5c: Update installation guide to fix inconsistency in type names
- Updated dependencies
  - @devtools/backend-common@0.19.0
  - @devtools/plugin-catalog-backend@1.10.0
  - @devtools/catalog-model@1.4.0
  - @devtools/errors@1.2.0
  - @devtools/backend-plugin-api@0.5.3
  - @devtools/backend-tasks@0.5.3
  - @devtools/plugin-catalog-node@1.3.7
  - @devtools/config@1.0.8
  - @devtools/plugin-events-node@0.2.7
  - @devtools/plugin-permission-common@0.7.6

## 0.3.3-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.19.0-next.2
  - @devtools/catalog-model@1.4.0-next.1
  - @devtools/plugin-catalog-backend@1.10.0-next.2
  - @devtools/backend-plugin-api@0.5.3-next.2
  - @devtools/backend-tasks@0.5.3-next.2
  - @devtools/config@1.0.7
  - @devtools/errors@1.2.0-next.0
  - @devtools/plugin-catalog-node@1.3.7-next.2
  - @devtools/plugin-events-node@0.2.7-next.2
  - @devtools/plugin-permission-common@0.7.6-next.0

## 0.3.3-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.19.0-next.1
  - @devtools/plugin-catalog-backend@1.9.2-next.1
  - @devtools/errors@1.2.0-next.0
  - @devtools/backend-plugin-api@0.5.3-next.1
  - @devtools/catalog-model@1.4.0-next.0
  - @devtools/backend-tasks@0.5.3-next.1
  - @devtools/plugin-catalog-node@1.3.7-next.1
  - @devtools/plugin-permission-common@0.7.6-next.0
  - @devtools/plugin-events-node@0.2.7-next.1
  - @devtools/config@1.0.7

## 0.3.3-next.0

### Patch Changes

- Updated dependencies
  - @devtools/plugin-catalog-backend@1.9.2-next.0
  - @devtools/plugin-catalog-node@1.3.7-next.0
  - @devtools/backend-common@0.18.6-next.0
  - @devtools/config@1.0.7
  - @devtools/backend-plugin-api@0.5.3-next.0
  - @devtools/backend-tasks@0.5.3-next.0
  - @devtools/catalog-model@1.3.0
  - @devtools/errors@1.1.5
  - @devtools/plugin-events-node@0.2.7-next.0
  - @devtools/plugin-permission-common@0.7.5

## 0.3.2

### Patch Changes

- Updated dependencies
  - @devtools/plugin-catalog-backend@1.9.1
  - @devtools/backend-common@0.18.5
  - @devtools/backend-tasks@0.5.2
  - @devtools/plugin-catalog-node@1.3.6
  - @devtools/backend-plugin-api@0.5.2
  - @devtools/catalog-model@1.3.0
  - @devtools/config@1.0.7
  - @devtools/errors@1.1.5
  - @devtools/plugin-events-node@0.2.6
  - @devtools/plugin-permission-common@0.7.5

## 0.3.2-next.2

### Patch Changes

- Updated dependencies
  - @devtools/plugin-catalog-backend@1.9.1-next.2
  - @devtools/config@1.0.7

## 0.3.2-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.18.5-next.1
  - @devtools/plugin-catalog-backend@1.9.1-next.1
  - @devtools/backend-tasks@0.5.2-next.1
  - @devtools/plugin-catalog-node@1.3.6-next.1
  - @devtools/backend-plugin-api@0.5.2-next.1
  - @devtools/config@1.0.7
  - @devtools/plugin-events-node@0.2.6-next.1

## 0.3.2-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.18.5-next.0
  - @devtools/backend-tasks@0.5.2-next.0
  - @devtools/plugin-catalog-backend@1.9.1-next.0
  - @devtools/plugin-catalog-node@1.3.6-next.0
  - @devtools/backend-plugin-api@0.5.2-next.0
  - @devtools/catalog-model@1.3.0
  - @devtools/config@1.0.7
  - @devtools/errors@1.1.5
  - @devtools/plugin-events-node@0.2.6-next.0
  - @devtools/plugin-permission-common@0.7.5

## 0.3.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.18.4
  - @devtools/plugin-catalog-backend@1.9.0
  - @devtools/plugin-permission-common@0.7.5
  - @devtools/backend-tasks@0.5.1
  - @devtools/catalog-model@1.3.0
  - @devtools/plugin-catalog-node@1.3.5
  - @devtools/backend-plugin-api@0.5.1
  - @devtools/config@1.0.7
  - @devtools/errors@1.1.5
  - @devtools/plugin-events-node@0.2.5

## 0.3.1-next.3

### Patch Changes

- Updated dependencies
  - @devtools/plugin-catalog-backend@1.9.0-next.3
  - @devtools/catalog-model@1.3.0-next.0
  - @devtools/backend-common@0.18.4-next.2
  - @devtools/backend-plugin-api@0.5.1-next.2
  - @devtools/backend-tasks@0.5.1-next.2
  - @devtools/config@1.0.7
  - @devtools/errors@1.1.5
  - @devtools/plugin-catalog-node@1.3.5-next.3
  - @devtools/plugin-events-node@0.2.5-next.2
  - @devtools/plugin-permission-common@0.7.5-next.0

## 0.3.1-next.2

### Patch Changes

- Updated dependencies
  - @devtools/plugin-catalog-backend@1.8.1-next.2
  - @devtools/backend-common@0.18.4-next.2
  - @devtools/backend-plugin-api@0.5.1-next.2
  - @devtools/backend-tasks@0.5.1-next.2
  - @devtools/catalog-model@1.2.1
  - @devtools/config@1.0.7
  - @devtools/errors@1.1.5
  - @devtools/plugin-catalog-node@1.3.5-next.2
  - @devtools/plugin-events-node@0.2.5-next.2
  - @devtools/plugin-permission-common@0.7.5-next.0

## 0.3.1-next.1

### Patch Changes

- Updated dependencies
  - @devtools/plugin-permission-common@0.7.5-next.0
  - @devtools/plugin-catalog-backend@1.8.1-next.1
  - @devtools/backend-tasks@0.5.1-next.1
  - @devtools/backend-common@0.18.4-next.1
  - @devtools/backend-plugin-api@0.5.1-next.1
  - @devtools/catalog-model@1.2.1
  - @devtools/config@1.0.7
  - @devtools/errors@1.1.5
  - @devtools/plugin-catalog-node@1.3.5-next.1
  - @devtools/plugin-events-node@0.2.5-next.1

## 0.3.1-next.0

### Patch Changes

- Updated dependencies
  - @devtools/plugin-catalog-backend@1.8.1-next.0
  - @devtools/backend-common@0.18.4-next.0
  - @devtools/config@1.0.7
  - @devtools/backend-plugin-api@0.5.1-next.0
  - @devtools/backend-tasks@0.5.1-next.0
  - @devtools/catalog-model@1.2.1
  - @devtools/errors@1.1.5
  - @devtools/plugin-catalog-node@1.3.5-next.0
  - @devtools/plugin-events-node@0.2.5-next.0
  - @devtools/plugin-permission-common@0.7.4

## 0.3.0

### Minor Changes

- a811bd246c4: Added endpoint to get a list of known incremental entity providers

### Patch Changes

- 90469c02c8c: Renamed `incrementalIngestionEntityProviderCatalogModule` to `catalogModuleIncrementalIngestionEntityProvider` to match the [recommended naming patterns](https://devtools.khulnasoft.com/docs/backend-system/architecture/naming-patterns).
- e675f902980: Make sure to not use deprecated exports from `@devtools/plugin-catalog-backend`
- 928a12a9b3e: Internal refactor of `/alpha` exports.
- bf611cf019a: Fix missing `dependencies` in `package.json`
- 6e612b58577: Move `@devtools/backend-defaults` to `devDependencies`
- Updated dependencies
  - @devtools/plugin-catalog-backend@1.8.0
  - @devtools/backend-tasks@0.5.0
  - @devtools/backend-common@0.18.3
  - @devtools/errors@1.1.5
  - @devtools/plugin-catalog-node@1.3.4
  - @devtools/backend-plugin-api@0.5.0
  - @devtools/catalog-model@1.2.1
  - @devtools/plugin-events-node@0.2.4
  - @devtools/plugin-permission-common@0.7.4
  - @devtools/config@1.0.7

## 0.3.0-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-tasks@0.5.0-next.2
  - @devtools/backend-common@0.18.3-next.2
  - @devtools/backend-plugin-api@0.4.1-next.2
  - @devtools/plugin-catalog-backend@1.8.0-next.2
  - @devtools/plugin-catalog-node@1.3.4-next.2
  - @devtools/plugin-events-node@0.2.4-next.2
  - @devtools/config@1.0.7-next.0

## 0.3.0-next.1

### Minor Changes

- a811bd246c4: Added endpoint to get a list of known incremental entity providers

### Patch Changes

- 6e612b58577: Move `@devtools/backend-defaults` to `devDependencies`
- Updated dependencies
  - @devtools/errors@1.1.5-next.0
  - @devtools/backend-common@0.18.3-next.1
  - @devtools/plugin-catalog-backend@1.8.0-next.1
  - @devtools/plugin-permission-common@0.7.4-next.0
  - @devtools/backend-plugin-api@0.4.1-next.1
  - @devtools/backend-tasks@0.4.4-next.1
  - @devtools/config@1.0.7-next.0
  - @devtools/catalog-model@1.2.1-next.1
  - @devtools/plugin-catalog-node@1.3.4-next.1
  - @devtools/plugin-events-node@0.2.4-next.1

## 0.2.2-next.0

### Patch Changes

- 928a12a9b3: Internal refactor of `/alpha` exports.
- bf611cf019: Fix missing `dependencies` in `package.json`
- Updated dependencies
  - @devtools/plugin-catalog-backend@1.8.0-next.0
  - @devtools/backend-tasks@0.4.4-next.0
  - @devtools/backend-plugin-api@0.4.1-next.0
  - @devtools/backend-defaults@0.1.8-next.0
  - @devtools/backend-common@0.18.3-next.0
  - @devtools/catalog-model@1.2.1-next.0
  - @devtools/plugin-catalog-node@1.3.4-next.0
  - @devtools/plugin-events-node@0.2.4-next.0
  - @devtools/config@1.0.6
  - @devtools/errors@1.1.4
  - @devtools/plugin-permission-common@0.7.3

## 0.2.0

### Minor Changes

- 1ba120faa3: Added new mechanism to handle deltas in incremental providers

### Patch Changes

- c51efce2a0: Update docs to always use `yarn add --cwd` for app & backend
- 407dc01fc9: Removing extra imports for `run` script as `TestBackend` auto loads the default factories
- b7e36660d5: Return `EventSubscriber` from `addIncrementalEntityProvider` to hook up to `EventsBackend`
- 5b7cd5580d: Moving the backend-test-utils to devDependencies.
- 77c41b6924: Updated README to include newer API options for incremental entity providers
- Updated dependencies
  - @devtools/plugin-catalog-backend@1.7.2
  - @devtools/backend-plugin-api@0.4.0
  - @devtools/backend-common@0.18.2
  - @devtools/catalog-model@1.2.0
  - @devtools/plugin-events-node@0.2.3
  - @devtools/plugin-catalog-node@1.3.3
  - @devtools/backend-tasks@0.4.3
  - @devtools/config@1.0.6
  - @devtools/errors@1.1.4
  - @devtools/plugin-permission-common@0.7.3

## 0.2.0-next.2

### Patch Changes

- 407dc01fc9: Removing extra imports for `run` script as `TestBackend` auto loads the default factories
- 77c41b6924: Updated README to include newer API options for incremental entity providers
- Updated dependencies
  - @devtools/backend-plugin-api@0.4.0-next.2
  - @devtools/backend-test-utils@0.1.34-next.2
  - @devtools/backend-common@0.18.2-next.2
  - @devtools/plugin-catalog-backend@1.7.2-next.2
  - @devtools/catalog-model@1.2.0-next.1
  - @devtools/plugin-events-node@0.2.3-next.2
  - @devtools/plugin-catalog-node@1.3.3-next.2
  - @devtools/backend-tasks@0.4.3-next.2
  - @devtools/config@1.0.6
  - @devtools/errors@1.1.4
  - @devtools/plugin-permission-common@0.7.3

## 0.2.0-next.1

### Patch Changes

- b7e36660d5: Return `EventSubscriber` from `addIncrementalEntityProvider` to hook up to `EventsBackend`
- Updated dependencies
  - @devtools/plugin-catalog-backend@1.7.2-next.1
  - @devtools/backend-common@0.18.2-next.1
  - @devtools/backend-plugin-api@0.3.2-next.1
  - @devtools/backend-tasks@0.4.3-next.1
  - @devtools/backend-test-utils@0.1.34-next.1
  - @devtools/catalog-model@1.1.6-next.0
  - @devtools/config@1.0.6
  - @devtools/errors@1.1.4
  - @devtools/plugin-catalog-node@1.3.3-next.1
  - @devtools/plugin-events-node@0.2.3-next.1
  - @devtools/plugin-permission-common@0.7.3

## 0.2.0-next.0

### Minor Changes

- 1ba120faa3: Added new mechanism to handle deltas in incremental providers

### Patch Changes

- Updated dependencies
  - @devtools/catalog-model@1.1.6-next.0
  - @devtools/backend-test-utils@0.1.34-next.0
  - @devtools/backend-common@0.18.2-next.0
  - @devtools/plugin-catalog-backend@1.7.2-next.0
  - @devtools/plugin-catalog-node@1.3.3-next.0
  - @devtools/backend-tasks@0.4.3-next.0
  - @devtools/backend-plugin-api@0.3.2-next.0
  - @devtools/plugin-events-node@0.2.3-next.0

## 0.1.1

### Patch Changes

- ecbec4ec4c: Internal refactor to match new options pattern in the experimental backend system.
- 045b66ce02: Fixed issue with sometimes trying to commit an empty array of references
- 9f2b786fc9: Provide context for logged errors.
- 8e06f3cf00: Switched imports of `loggerToWinstonLogger` to `@devtools/backend-common`.
- Updated dependencies
  - @devtools/backend-plugin-api@0.3.0
  - @devtools/backend-common@0.18.0
  - @devtools/backend-test-utils@0.1.32
  - @devtools/catalog-model@1.1.5
  - @devtools/backend-tasks@0.4.1
  - @devtools/plugin-catalog-node@1.3.1
  - @devtools/plugin-catalog-backend@1.7.0
  - @devtools/config@1.0.6
  - @devtools/errors@1.1.4
  - @devtools/plugin-permission-common@0.7.3

## 0.1.1-next.2

### Patch Changes

- 9f2b786fc9: Provide context for logged errors.
- 8e06f3cf00: Switched imports of `loggerToWinstonLogger` to `@devtools/backend-common`.
- Updated dependencies
  - @devtools/backend-plugin-api@0.3.0-next.1
  - @devtools/backend-test-utils@0.1.32-next.2
  - @devtools/backend-common@0.18.0-next.1
  - @devtools/backend-tasks@0.4.1-next.1
  - @devtools/plugin-catalog-backend@1.7.0-next.2
  - @devtools/plugin-catalog-node@1.3.1-next.2
  - @devtools/catalog-model@1.1.5-next.1
  - @devtools/config@1.0.6-next.0
  - @devtools/errors@1.1.4
  - @devtools/plugin-permission-common@0.7.3-next.0

## 0.1.1-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.2.1-next.0
  - @devtools/backend-test-utils@0.1.32-next.1
  - @devtools/backend-common@0.18.0-next.0
  - @devtools/config@1.0.6-next.0
  - @devtools/plugin-catalog-backend@1.7.0-next.1
  - @devtools/plugin-catalog-node@1.3.1-next.1
  - @devtools/backend-tasks@0.4.1-next.0
  - @devtools/catalog-model@1.1.5-next.1
  - @devtools/errors@1.1.4
  - @devtools/plugin-permission-common@0.7.3-next.0

## 0.1.1-next.0

### Patch Changes

- Updated dependencies
  - @devtools/catalog-model@1.1.5-next.0
  - @devtools/plugin-catalog-backend@1.7.0-next.0
  - @devtools/backend-common@0.17.0
  - @devtools/backend-plugin-api@0.2.0
  - @devtools/backend-tasks@0.4.0
  - @devtools/backend-test-utils@0.1.32-next.0
  - @devtools/config@1.0.5
  - @devtools/errors@1.1.4
  - @devtools/plugin-catalog-node@1.3.1-next.0
  - @devtools/plugin-permission-common@0.7.2

## 0.1.0

### Minor Changes

- 98c643a1a2: Introduces incremental entity providers, which are used for streaming very large data sources into the catalog.

### Patch Changes

- c507aee8a2: Ensured typescript type checks in migration files.
- 884d749b14: Refactored to use `coreServices` from `@devtools/backend-plugin-api`.
- de8a975911: Changed to use native `AbortController` and `AbortSignal` from Node.js, instead
  of the one from `node-abort-controller`. This is possible now that the minimum
  supported Node.js version of the project is 16.

  Note that their interfaces are very slightly different, but typically not in a
  way that matters to consumers. If you see any typescript errors as a direct
  result from this, they are compatible with each other in the ways that we
  interact with them, and should be possible to type-cast across without ill
  effects.

- 05a928e296: Updated usages of types from `@devtools/backend-plugin-api`.
- 61d4efe978: Make incremental providers more resilient to failures
- Updated dependencies
  - @devtools/plugin-catalog-backend@1.6.0
  - @devtools/backend-common@0.17.0
  - @devtools/plugin-catalog-node@1.3.0
  - @devtools/backend-tasks@0.4.0
  - @devtools/plugin-permission-common@0.7.2
  - @devtools/backend-test-utils@0.1.31
  - @devtools/errors@1.1.4
  - @devtools/backend-plugin-api@0.2.0
  - @devtools/catalog-model@1.1.4
  - @devtools/config@1.0.5

## 0.1.0-next.3

### Patch Changes

- Updated dependencies
  - @devtools/plugin-catalog-backend@1.6.0-next.3
  - @devtools/backend-tasks@0.4.0-next.3
  - @devtools/plugin-permission-common@0.7.2-next.2
  - @devtools/backend-common@0.17.0-next.3
  - @devtools/backend-plugin-api@0.2.0-next.3
  - @devtools/backend-test-utils@0.1.31-next.4
  - @devtools/catalog-model@1.1.4-next.1
  - @devtools/config@1.0.5-next.1
  - @devtools/errors@1.1.4-next.1
  - @devtools/plugin-catalog-node@1.3.0-next.3

## 0.1.0-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.17.0-next.2
  - @devtools/backend-plugin-api@0.2.0-next.2
  - @devtools/backend-tasks@0.4.0-next.2
  - @devtools/backend-test-utils@0.1.31-next.3
  - @devtools/catalog-model@1.1.4-next.1
  - @devtools/config@1.0.5-next.1
  - @devtools/errors@1.1.4-next.1
  - @devtools/plugin-catalog-backend@1.6.0-next.2
  - @devtools/plugin-catalog-node@1.3.0-next.2
  - @devtools/plugin-permission-common@0.7.2-next.1

## 0.1.0-next.1

### Patch Changes

- c507aee8a2: Ensured typescript type checks in migration files.
- 884d749b14: Refactored to use `coreServices` from `@devtools/backend-plugin-api`.
- 61d4efe978: Make incremental providers more resilient to failures
- Updated dependencies
  - @devtools/plugin-catalog-backend@1.6.0-next.2
  - @devtools/plugin-catalog-node@1.3.0-next.2
  - @devtools/backend-common@0.17.0-next.2
  - @devtools/backend-plugin-api@0.2.0-next.2
  - @devtools/backend-test-utils@0.1.31-next.2
  - @devtools/backend-tasks@0.4.0-next.2
  - @devtools/catalog-model@1.1.4-next.1
  - @devtools/config@1.0.5-next.1
  - @devtools/errors@1.1.4-next.1
  - @devtools/plugin-permission-common@0.7.2-next.1

## 0.1.0-next.0

### Minor Changes

- 98c643a1a2: Introduces incremental entity providers, which are used for streaming very large data sources into the catalog.

### Patch Changes

- de8a975911: Changed to use native `AbortController` and `AbortSignal` from Node.js, instead
  of the one from `node-abort-controller`. This is possible now that the minimum
  supported Node.js version of the project is 16.

  Note that their interfaces are very slightly different, but typically not in a
  way that matters to consumers. If you see any typescript errors as a direct
  result from this, they are compatible with each other in the ways that we
  interact with them, and should be possible to type-cast across without ill
  effects.

- Updated dependencies
  - @devtools/backend-common@0.17.0-next.1
  - @devtools/plugin-catalog-backend@1.6.0-next.1
  - @devtools/backend-tasks@0.4.0-next.1
  - @devtools/backend-plugin-api@0.1.5-next.1
  - @devtools/backend-test-utils@0.1.31-next.1
  - @devtools/plugin-catalog-node@1.2.2-next.1
  - @devtools/config@1.0.5-next.1
  - @devtools/catalog-model@1.1.4-next.1
  - @devtools/errors@1.1.4-next.1
  - @devtools/plugin-permission-common@0.7.2-next.1