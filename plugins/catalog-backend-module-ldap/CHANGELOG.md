# @devtools/plugin-catalog-backend-module-ldap

## 0.11.1-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@1.1.1-next.0
  - @devtools/catalog-model@1.7.2
  - @devtools/config@1.3.1
  - @devtools/errors@1.2.6
  - @devtools/types@1.2.0
  - @devtools/plugin-catalog-common@1.1.2
  - @devtools/plugin-catalog-node@1.15.1-next.0

## 0.11.0

### Minor Changes

- 732700a: Updated fix for ldap entity mapping which doesn't require extra config setting of dnCaseSensitive
- 95ac4a2: Add new ldap vendor config 'LLDAP'

### Patch Changes

- 5f04976: Fixed a bug that caused missing code in published packages.
- Updated dependencies
  - @devtools/backend-plugin-api@1.1.0
  - @devtools/plugin-catalog-node@1.15.0
  - @devtools/errors@1.2.6
  - @devtools/catalog-model@1.7.2
  - @devtools/config@1.3.1
  - @devtools/types@1.2.0
  - @devtools/plugin-catalog-common@1.1.2

## 0.11.0-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@1.1.0-next.2
  - @devtools/errors@1.2.6-next.0
  - @devtools/plugin-catalog-node@1.15.0-next.2
  - @devtools/catalog-model@1.7.2-next.0
  - @devtools/config@1.3.1-next.0
  - @devtools/types@1.2.0
  - @devtools/plugin-catalog-common@1.1.2-next.0

## 0.11.0-next.1

### Patch Changes

- Updated dependencies
  - @devtools/plugin-catalog-node@1.15.0-next.1
  - @devtools/backend-plugin-api@1.1.0-next.1
  - @devtools/catalog-model@1.7.1
  - @devtools/config@1.3.0
  - @devtools/errors@1.2.5
  - @devtools/types@1.2.0
  - @devtools/plugin-catalog-common@1.1.1

## 0.11.0-next.0

### Minor Changes

- 732700a: Updated fix for ldap entity mapping which doesn't require extra config setting of dnCaseSensitive
- 95ac4a2: Add new ldap vendor config 'LLDAP'

### Patch Changes

- 5f04976: Fixed a bug that caused missing code in published packages.
- Updated dependencies
  - @devtools/backend-plugin-api@1.0.3-next.0
  - @devtools/catalog-model@1.7.1
  - @devtools/config@1.3.0
  - @devtools/errors@1.2.5
  - @devtools/types@1.2.0
  - @devtools/plugin-catalog-common@1.1.1
  - @devtools/plugin-catalog-node@1.14.1-next.0

## 0.10.0

### Minor Changes

- 415aeb3: Add Support for Google LDAP Vendor

### Patch Changes

- 884a86c: Added a `dnCaseSensitive` flag to support LDAP servers with mixed-case attributes.
- 4e58bc7: Upgrade to uuid v11 internally
- Updated dependencies
  - @devtools/config@1.3.0
  - @devtools/types@1.2.0
  - @devtools/plugin-catalog-node@1.14.0
  - @devtools/backend-plugin-api@1.0.2
  - @devtools/catalog-model@1.7.1
  - @devtools/errors@1.2.5
  - @devtools/plugin-catalog-common@1.1.1

## 0.10.0-next.2

### Minor Changes

- 415aeb3: Add Support for Google LDAP Vendor

### Patch Changes

- Updated dependencies
  - @devtools/plugin-catalog-node@1.14.0-next.2
  - @devtools/backend-plugin-api@1.0.2-next.2
  - @devtools/catalog-model@1.7.0
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1
  - @devtools/plugin-catalog-common@1.1.0

## 0.9.2-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@1.0.2-next.1
  - @devtools/catalog-model@1.7.0
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1
  - @devtools/plugin-catalog-common@1.1.0
  - @devtools/plugin-catalog-node@1.14.0-next.1

## 0.9.2-next.0

### Patch Changes

- 884a86c: Added a `dnCaseSensitive` flag to support LDAP servers with mixed-case attributes.
- Updated dependencies
  - @devtools/plugin-catalog-node@1.14.0-next.0
  - @devtools/backend-plugin-api@1.0.2-next.0
  - @devtools/catalog-model@1.7.0
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1
  - @devtools/plugin-catalog-common@1.1.0

## 0.9.1

### Patch Changes

- Updated dependencies
  - @devtools/plugin-catalog-node@1.13.1
  - @devtools/backend-plugin-api@1.0.1
  - @devtools/catalog-model@1.7.0
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1
  - @devtools/plugin-catalog-common@1.1.0

## 0.9.1-next.1

### Patch Changes

- Updated dependencies
  - @devtools/plugin-catalog-node@1.13.1-next.1
  - @devtools/backend-plugin-api@1.0.1-next.1
  - @devtools/catalog-model@1.7.0
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1
  - @devtools/plugin-catalog-common@1.1.0

## 0.9.1-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@1.0.1-next.0
  - @devtools/catalog-model@1.7.0
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1
  - @devtools/plugin-catalog-common@1.1.0
  - @devtools/plugin-catalog-node@1.13.1-next.0

## 0.9.0

### Minor Changes

- d425fc4: **BREAKING**: The return values from `createBackendPlugin`, `createBackendModule`, and `createServiceFactory` are now simply `BackendFeature` and `ServiceFactory`, instead of the previously deprecated form of a function that returns them. For this reason, `createServiceFactory` also no longer accepts the callback form where you provide direct options to the service. This also affects all `coreServices.*` service refs.

  This may in particular affect tests; if you were effectively doing `createBackendModule({...})()` (note the parentheses), you can now remove those extra parentheses at the end. You may encounter cases of this in your `packages/backend/src/index.ts` too, where you add plugins, modules, and services. If you were using `createServiceFactory` with a function as its argument for the purpose of passing in options, this pattern has been deprecated for a while and is no longer supported. You may want to explore the new multiton patterns to achieve your goals, or moving settings to app-config.

  As part of this change, the `IdentityFactoryOptions` type was removed, and can no longer be used to tweak that service. The identity service was also deprecated some time ago, and you will want to [migrate to the new auth system](https://devtools.khulnasoft.com/docs/tutorials/auth-service-migration) if you still rely on it.

### Patch Changes

- b50e4a8: Add support for optional configuration of `dnAttributeName` and `uuidAttributeName` in LDAP vendor
- Updated dependencies
  - @devtools/backend-plugin-api@1.0.0
  - @devtools/catalog-model@1.7.0
  - @devtools/plugin-catalog-common@1.1.0
  - @devtools/plugin-catalog-node@1.13.0
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1

## 0.9.0-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@1.0.0-next.2
  - @devtools/catalog-model@1.6.0
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1
  - @devtools/plugin-catalog-common@1.0.26
  - @devtools/plugin-catalog-node@1.12.7-next.2

## 0.9.0-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.9.0-next.1
  - @devtools/catalog-model@1.6.0
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1
  - @devtools/plugin-catalog-common@1.0.26
  - @devtools/plugin-catalog-node@1.12.7-next.1

## 0.9.0-next.0

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
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1
  - @devtools/plugin-catalog-common@1.0.26

## 0.8.0

### Minor Changes

- fc24d9e: Stop using `@devtools/backend-tasks` as it will be deleted in near future.

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.8.0
  - @devtools/plugin-catalog-node@1.12.5
  - @devtools/catalog-model@1.6.0
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1
  - @devtools/plugin-catalog-common@1.0.26

## 0.7.1-next.3

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.8.0-next.3
  - @devtools/catalog-model@1.6.0-next.0
  - @devtools/backend-tasks@0.5.28-next.3
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1
  - @devtools/plugin-catalog-common@1.0.26-next.2
  - @devtools/plugin-catalog-node@1.12.5-next.3

## 0.7.1-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.8.0-next.2
  - @devtools/backend-tasks@0.5.28-next.2
  - @devtools/plugin-catalog-node@1.12.5-next.2
  - @devtools/plugin-catalog-common@1.0.26-next.1
  - @devtools/catalog-model@1.5.0
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1

## 0.7.1-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.7.1-next.1
  - @devtools/plugin-catalog-common@1.0.26-next.0
  - @devtools/plugin-catalog-node@1.12.5-next.1
  - @devtools/backend-tasks@0.5.28-next.1
  - @devtools/catalog-model@1.5.0
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1

## 0.7.1-next.0

### Patch Changes

- Updated dependencies
  - @devtools/plugin-catalog-node@1.12.5-next.0
  - @devtools/backend-plugin-api@0.7.1-next.0
  - @devtools/backend-tasks@0.5.28-next.0
  - @devtools/catalog-model@1.5.0
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1
  - @devtools/plugin-catalog-common@1.0.25

## 0.7.0

### Minor Changes

- cb32ca7: **BREAKING**: `readLdapOrg` and the `LdapProviderConfig` type now always accept arrays of user and group configs, not just single items.

  Added support for single ldap catalog provider to provide list and undefined user and group bindings next to standard single one.

### Patch Changes

- 083eaf9: Fix bug where ISO durations could no longer be used for schedules
- Updated dependencies
  - @devtools/backend-plugin-api@0.7.0
  - @devtools/backend-tasks@0.5.27
  - @devtools/plugin-catalog-node@1.12.4
  - @devtools/plugin-catalog-common@1.0.25
  - @devtools/catalog-model@1.5.0
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1

## 0.7.0-next.1

### Minor Changes

- cb32ca7: **BREAKING**: `readLdapOrg` and the `LdapProviderConfig` type now always accept arrays of user and group configs, not just single items.

  Added support for single ldap catalog provider to provide list and undefined user and group bindings next to standard single one.

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.6.22-next.1
  - @devtools/backend-tasks@0.5.27-next.1
  - @devtools/catalog-model@1.5.0
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1
  - @devtools/plugin-catalog-common@1.0.24
  - @devtools/plugin-catalog-node@1.12.4-next.1

## 0.6.2-next.0

### Patch Changes

- 083eaf9: Fix bug where ISO durations could no longer be used for schedules
- Updated dependencies
  - @devtools/backend-plugin-api@0.6.21-next.0
  - @devtools/backend-tasks@0.5.26-next.0
  - @devtools/plugin-catalog-node@1.12.3-next.0
  - @devtools/catalog-model@1.5.0
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1
  - @devtools/plugin-catalog-common@1.0.24

## 0.6.0

### Minor Changes

- debcc8c: Migrate LDAP catalog module to the new backend system.

### Patch Changes

- 78a0b08: Internal refactor to handle `BackendFeature` contract change.
- d44a20a: Added additional plugin metadata to `package.json`.
- Updated dependencies
  - @devtools/backend-plugin-api@0.6.19
  - @devtools/backend-tasks@0.5.24
  - @devtools/plugin-catalog-node@1.12.1
  - @devtools/plugin-catalog-common@1.0.24
  - @devtools/catalog-model@1.5.0
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1

## 0.6.0-next.3

### Patch Changes

- d44a20a: Added additional plugin metadata to `package.json`.
- Updated dependencies
  - @devtools/backend-plugin-api@0.6.19-next.3
  - @devtools/plugin-catalog-common@1.0.24-next.0
  - @devtools/plugin-catalog-node@1.12.1-next.2
  - @devtools/backend-tasks@0.5.24-next.3
  - @devtools/catalog-model@1.5.0
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1

## 0.6.0-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.6.19-next.2
  - @devtools/backend-tasks@0.5.24-next.2
  - @devtools/plugin-catalog-node@1.12.1-next.1
  - @devtools/catalog-model@1.5.0
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1
  - @devtools/plugin-catalog-common@1.0.23

## 0.6.0-next.1

### Minor Changes

- debcc8c: Migrate LDAP catalog module to the new backend system.

### Patch Changes

- Updated dependencies
  - @devtools/backend-tasks@0.5.24-next.1
  - @devtools/backend-plugin-api@0.6.19-next.1
  - @devtools/plugin-catalog-node@1.12.1-next.0

## 0.5.35-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-tasks@0.5.24-next.0
  - @devtools/backend-plugin-api@0.6.19-next.0
  - @devtools/plugin-catalog-node@1.12.1-next.0
  - @devtools/catalog-model@1.5.0
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1
  - @devtools/plugin-catalog-common@1.0.23

## 0.5.34

### Patch Changes

- 7699967: Remove dependency to Winston Logger and use Devtools LoggerService instead
- Updated dependencies
  - @devtools/plugin-catalog-node@1.12.0
  - @devtools/catalog-model@1.5.0
  - @devtools/backend-plugin-api@0.6.18
  - @devtools/backend-tasks@0.5.23
  - @devtools/plugin-catalog-common@1.0.23

## 0.5.34-next.2

### Patch Changes

- Updated dependencies
  - @devtools/plugin-catalog-node@1.12.0-next.2

## 0.5.34-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-tasks@0.5.23-next.1
  - @devtools/plugin-catalog-node@1.11.2-next.1

## 0.5.34-next.0

### Patch Changes

- Updated dependencies
  - @devtools/catalog-model@1.5.0-next.0
  - @devtools/plugin-catalog-common@1.0.23-next.0
  - @devtools/plugin-catalog-node@1.11.2-next.0
  - @devtools/backend-tasks@0.5.23-next.0
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1

## 0.5.33

### Patch Changes

- Updated dependencies
  - @devtools/backend-tasks@0.5.22
  - @devtools/plugin-catalog-node@1.11.1
  - @devtools/catalog-model@1.4.5
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1
  - @devtools/plugin-catalog-common@1.0.22

## 0.5.33-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-tasks@0.5.22-next.1
  - @devtools/catalog-model@1.4.5
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1
  - @devtools/plugin-catalog-common@1.0.22
  - @devtools/plugin-catalog-node@1.11.1-next.1

## 0.5.33-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-tasks@0.5.22-next.0
  - @devtools/catalog-model@1.4.5
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1
  - @devtools/plugin-catalog-common@1.0.22
  - @devtools/plugin-catalog-node@1.11.1-next.0

## 0.5.32

### Patch Changes

- Updated dependencies
  - @devtools/plugin-catalog-node@1.11.0
  - @devtools/backend-tasks@0.5.21
  - @devtools/catalog-model@1.4.5
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1
  - @devtools/plugin-catalog-common@1.0.22

## 0.5.31

### Patch Changes

- Updated dependencies
  - @devtools/plugin-catalog-node@1.10.0
  - @devtools/backend-tasks@0.5.20
  - @devtools/catalog-model@1.4.5
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1
  - @devtools/plugin-catalog-common@1.0.22

## 0.5.30

### Patch Changes

- Updated dependencies
  - @devtools/plugin-catalog-node@1.9.0

## 0.5.29

### Patch Changes

- 4b4bbf7: Add TLS support to ingest GSuite LDAP data
- 0fb419b: Updated dependency `uuid` to `^9.0.0`.
  Updated dependency `@types/uuid` to `^9.0.0`.
- Updated dependencies
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/plugin-catalog-node@1.8.0
  - @devtools/backend-tasks@0.5.19
  - @devtools/catalog-model@1.4.5
  - @devtools/types@1.1.1
  - @devtools/plugin-catalog-common@1.0.22

## 0.5.29-next.2

### Patch Changes

- Updated dependencies
  - @devtools/plugin-catalog-node@1.8.0-next.2
  - @devtools/backend-tasks@0.5.19-next.2
  - @devtools/catalog-model@1.4.5-next.0
  - @devtools/config@1.2.0-next.1
  - @devtools/errors@1.2.4-next.0
  - @devtools/types@1.1.1
  - @devtools/plugin-catalog-common@1.0.22-next.1

## 0.5.29-next.1

### Patch Changes

- Updated dependencies
  - @devtools/config@1.2.0-next.1
  - @devtools/backend-tasks@0.5.19-next.1
  - @devtools/catalog-model@1.4.5-next.0
  - @devtools/errors@1.2.4-next.0
  - @devtools/types@1.1.1
  - @devtools/plugin-catalog-common@1.0.22-next.1
  - @devtools/plugin-catalog-node@1.8.0-next.1

## 0.5.28-next.0

### Patch Changes

- 0fb419b: Updated dependency `uuid` to `^9.0.0`.
  Updated dependency `@types/uuid` to `^9.0.0`.
- Updated dependencies
  - @devtools/errors@1.2.4-next.0
  - @devtools/plugin-catalog-node@1.8.0-next.0
  - @devtools/backend-tasks@0.5.18-next.0
  - @devtools/catalog-model@1.4.5-next.0
  - @devtools/config@1.1.2-next.0
  - @devtools/types@1.1.1
  - @devtools/plugin-catalog-common@1.0.22-next.0

## 0.5.25

### Patch Changes

- Updated dependencies
  - @devtools/backend-tasks@0.5.15
  - @devtools/catalog-model@1.4.4
  - @devtools/plugin-catalog-node@1.7.0
  - @devtools/config@1.1.1
  - @devtools/errors@1.2.3
  - @devtools/types@1.1.1
  - @devtools/plugin-catalog-common@1.0.21

## 0.5.25-next.3

### Patch Changes

- Updated dependencies
  - @devtools/backend-tasks@0.5.15-next.3
  - @devtools/plugin-catalog-node@1.6.2-next.3
  - @devtools/catalog-model@1.4.4-next.0
  - @devtools/config@1.1.1
  - @devtools/errors@1.2.3
  - @devtools/types@1.1.1
  - @devtools/plugin-catalog-common@1.0.21-next.0

## 0.5.25-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-tasks@0.5.15-next.2
  - @devtools/plugin-catalog-node@1.6.2-next.2
  - @devtools/config@1.1.1
  - @devtools/catalog-model@1.4.4-next.0
  - @devtools/errors@1.2.3
  - @devtools/types@1.1.1
  - @devtools/plugin-catalog-common@1.0.21-next.0

## 0.5.25-next.1

### Patch Changes

- Updated dependencies
  - @devtools/catalog-model@1.4.4-next.0
  - @devtools/backend-tasks@0.5.15-next.1
  - @devtools/config@1.1.1
  - @devtools/errors@1.2.3
  - @devtools/types@1.1.1
  - @devtools/plugin-catalog-common@1.0.21-next.0
  - @devtools/plugin-catalog-node@1.6.2-next.1

## 0.5.25-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-tasks@0.5.15-next.0
  - @devtools/plugin-catalog-node@1.6.2-next.0
  - @devtools/catalog-model@1.4.3
  - @devtools/config@1.1.1
  - @devtools/errors@1.2.3
  - @devtools/types@1.1.1
  - @devtools/plugin-catalog-common@1.0.20

## 0.5.24

### Patch Changes

- Updated dependencies
  - @devtools/plugin-catalog-node@1.6.1
  - @devtools/backend-tasks@0.5.14
  - @devtools/catalog-model@1.4.3
  - @devtools/config@1.1.1
  - @devtools/errors@1.2.3
  - @devtools/types@1.1.1
  - @devtools/plugin-catalog-common@1.0.20

## 0.5.24-next.2

### Patch Changes

- Updated dependencies
  - @devtools/plugin-catalog-node@1.6.1-next.2
  - @devtools/backend-tasks@0.5.14-next.2

## 0.5.24-next.1

### Patch Changes

- Updated dependencies
  - @devtools/config@1.1.1
  - @devtools/backend-tasks@0.5.14-next.1
  - @devtools/catalog-model@1.4.3
  - @devtools/errors@1.2.3
  - @devtools/types@1.1.1
  - @devtools/plugin-catalog-common@1.0.19
  - @devtools/plugin-catalog-node@1.6.1-next.1

## 0.5.24-next.0

### Patch Changes

- Updated dependencies
  - @devtools/plugin-catalog-node@1.6.1-next.0
  - @devtools/backend-tasks@0.5.14-next.0
  - @devtools/catalog-model@1.4.3
  - @devtools/config@1.1.1
  - @devtools/errors@1.2.3
  - @devtools/types@1.1.1
  - @devtools/plugin-catalog-common@1.0.19

## 0.5.23

### Patch Changes

- Updated dependencies
  - @devtools/plugin-catalog-node@1.6.0
  - @devtools/backend-tasks@0.5.13
  - @devtools/catalog-model@1.4.3
  - @devtools/config@1.1.1
  - @devtools/errors@1.2.3
  - @devtools/types@1.1.1
  - @devtools/plugin-catalog-common@1.0.19

## 0.5.23-next.3

### Patch Changes

- Updated dependencies
  - @devtools/backend-tasks@0.5.13-next.3
  - @devtools/catalog-model@1.4.3
  - @devtools/config@1.1.1
  - @devtools/errors@1.2.3
  - @devtools/types@1.1.1
  - @devtools/plugin-catalog-common@1.0.18
  - @devtools/plugin-catalog-node@1.6.0-next.3

## 0.5.23-next.2

### Patch Changes

- Updated dependencies
  - @devtools/plugin-catalog-node@1.6.0-next.2
  - @devtools/backend-tasks@0.5.13-next.2
  - @devtools/catalog-model@1.4.3
  - @devtools/config@1.1.1
  - @devtools/errors@1.2.3
  - @devtools/types@1.1.1
  - @devtools/plugin-catalog-common@1.0.18

## 0.5.23-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-tasks@0.5.13-next.1
  - @devtools/catalog-model@1.4.3
  - @devtools/config@1.1.1
  - @devtools/errors@1.2.3
  - @devtools/types@1.1.1
  - @devtools/plugin-catalog-common@1.0.18
  - @devtools/plugin-catalog-node@1.5.1-next.1

## 0.5.23-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-tasks@0.5.13-next.0
  - @devtools/plugin-catalog-node@1.5.1-next.0
  - @devtools/catalog-model@1.4.3
  - @devtools/config@1.1.1
  - @devtools/errors@1.2.3
  - @devtools/types@1.1.1
  - @devtools/plugin-catalog-common@1.0.18

## 0.5.22

### Patch Changes

- Updated dependencies
  - @devtools/plugin-catalog-node@1.5.0
  - @devtools/backend-tasks@0.5.12
  - @devtools/catalog-model@1.4.3
  - @devtools/config@1.1.1
  - @devtools/errors@1.2.3
  - @devtools/types@1.1.1
  - @devtools/plugin-catalog-common@1.0.18

## 0.5.22-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-tasks@0.5.12-next.2
  - @devtools/plugin-catalog-node@1.5.0-next.2

## 0.5.22-next.1

### Patch Changes

- Updated dependencies
  - @devtools/plugin-catalog-node@1.5.0-next.1
  - @devtools/backend-tasks@0.5.12-next.1
  - @devtools/catalog-model@1.4.3
  - @devtools/config@1.1.1
  - @devtools/errors@1.2.3
  - @devtools/types@1.1.1
  - @devtools/plugin-catalog-common@1.0.17

## 0.5.22-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-tasks@0.5.12-next.0
  - @devtools/catalog-model@1.4.3
  - @devtools/config@1.1.1
  - @devtools/errors@1.2.3
  - @devtools/types@1.1.1
  - @devtools/plugin-catalog-common@1.0.17
  - @devtools/plugin-catalog-node@1.4.8-next.0

## 0.5.21

### Patch Changes

- 890e3b5ad4: Make sure to include the error message when ingestion fails
- Updated dependencies
  - @devtools/backend-tasks@0.5.11
  - @devtools/plugin-catalog-node@1.4.7
  - @devtools/catalog-model@1.4.3
  - @devtools/errors@1.2.3
  - @devtools/config@1.1.1
  - @devtools/types@1.1.1
  - @devtools/plugin-catalog-common@1.0.17

## 0.5.21-next.2

### Patch Changes

- Updated dependencies
  - @devtools/catalog-model@1.4.3-next.0
  - @devtools/errors@1.2.3-next.0
  - @devtools/backend-tasks@0.5.11-next.2
  - @devtools/plugin-catalog-node@1.4.7-next.2
  - @devtools/config@1.1.1-next.0
  - @devtools/types@1.1.1
  - @devtools/plugin-catalog-common@1.0.17-next.0

## 0.5.20-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-tasks@0.5.10-next.1
  - @devtools/plugin-catalog-node@1.4.6-next.1
  - @devtools/config@1.1.0
  - @devtools/catalog-model@1.4.2
  - @devtools/errors@1.2.2
  - @devtools/types@1.1.1
  - @devtools/plugin-catalog-common@1.0.16

## 0.5.20-next.0

### Patch Changes

- 890e3b5ad4: Make sure to include the error message when ingestion fails
- Updated dependencies
  - @devtools/config@1.1.0
  - @devtools/backend-tasks@0.5.10-next.0
  - @devtools/catalog-model@1.4.2
  - @devtools/errors@1.2.2
  - @devtools/types@1.1.1
  - @devtools/plugin-catalog-common@1.0.16
  - @devtools/plugin-catalog-node@1.4.6-next.0

## 0.5.18

### Patch Changes

- Updated dependencies
  - @devtools/backend-tasks@0.5.8
  - @devtools/config@1.1.0
  - @devtools/catalog-model@1.4.2
  - @devtools/errors@1.2.2
  - @devtools/plugin-catalog-common@1.0.16
  - @devtools/types@1.1.1
  - @devtools/plugin-catalog-node@1.4.4

## 0.5.18-next.3

### Patch Changes

- Updated dependencies
  - @devtools/catalog-model@1.4.2-next.2
  - @devtools/config@1.1.0-next.2
  - @devtools/errors@1.2.2-next.0
  - @devtools/plugin-catalog-common@1.0.16-next.2
  - @devtools/types@1.1.1-next.0
  - @devtools/backend-tasks@0.5.8-next.3
  - @devtools/plugin-catalog-node@1.4.4-next.3

## 0.5.18-next.2

### Patch Changes

- Updated dependencies
  - @devtools/config@1.1.0-next.1
  - @devtools/backend-tasks@0.5.8-next.2
  - @devtools/plugin-catalog-node@1.4.4-next.2
  - @devtools/catalog-model@1.4.2-next.1
  - @devtools/errors@1.2.1
  - @devtools/types@1.1.0
  - @devtools/plugin-catalog-common@1.0.16-next.1

## 0.5.18-next.1

### Patch Changes

- Updated dependencies
  - @devtools/config@1.1.0-next.0
  - @devtools/backend-tasks@0.5.8-next.1
  - @devtools/catalog-model@1.4.2-next.0
  - @devtools/plugin-catalog-node@1.4.4-next.1
  - @devtools/plugin-catalog-common@1.0.16-next.0
  - @devtools/errors@1.2.1
  - @devtools/types@1.1.0

## 0.5.17-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-tasks@0.5.7-next.0
  - @devtools/catalog-model@1.4.1
  - @devtools/config@1.0.8
  - @devtools/errors@1.2.1
  - @devtools/types@1.1.0
  - @devtools/plugin-catalog-common@1.0.15
  - @devtools/plugin-catalog-node@1.4.3-next.0

## 0.5.15

### Patch Changes

- Updated dependencies
  - @devtools/plugin-catalog-node@1.4.1
  - @devtools/backend-tasks@0.5.5
  - @devtools/catalog-model@1.4.1
  - @devtools/config@1.0.8
  - @devtools/errors@1.2.1
  - @devtools/types@1.1.0
  - @devtools/plugin-catalog-common@1.0.15

## 0.5.15-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-tasks@0.5.5-next.2
  - @devtools/plugin-catalog-node@1.4.1-next.2

## 0.5.15-next.1

### Patch Changes

- Updated dependencies
  - @devtools/plugin-catalog-node@1.4.1-next.1
  - @devtools/backend-tasks@0.5.5-next.1
  - @devtools/catalog-model@1.4.1
  - @devtools/config@1.0.8
  - @devtools/errors@1.2.1
  - @devtools/types@1.1.0
  - @devtools/plugin-catalog-common@1.0.15

## 0.5.15-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-tasks@0.5.5-next.0
  - @devtools/catalog-model@1.4.1
  - @devtools/config@1.0.8
  - @devtools/errors@1.2.1
  - @devtools/types@1.1.0
  - @devtools/plugin-catalog-common@1.0.15
  - @devtools/plugin-catalog-node@1.4.1-next.0

## 0.5.14

### Patch Changes

- Updated dependencies
  - @devtools/errors@1.2.1
  - @devtools/plugin-catalog-node@1.4.0
  - @devtools/backend-tasks@0.5.4
  - @devtools/catalog-model@1.4.1
  - @devtools/config@1.0.8
  - @devtools/types@1.1.0
  - @devtools/plugin-catalog-common@1.0.15

## 0.5.14-next.0

### Patch Changes

- Updated dependencies
  - @devtools/errors@1.2.1-next.0
  - @devtools/plugin-catalog-node@1.4.0-next.0
  - @devtools/backend-tasks@0.5.4-next.0
  - @devtools/catalog-model@1.4.1-next.0
  - @devtools/config@1.0.8
  - @devtools/types@1.1.0
  - @devtools/plugin-catalog-common@1.0.15-next.0

## 0.5.13

### Patch Changes

- Updated dependencies
  - @devtools/types@1.1.0
  - @devtools/catalog-model@1.4.0
  - @devtools/errors@1.2.0
  - @devtools/backend-tasks@0.5.3
  - @devtools/plugin-catalog-node@1.3.7
  - @devtools/config@1.0.8
  - @devtools/plugin-catalog-common@1.0.14

## 0.5.13-next.2

### Patch Changes

- Updated dependencies
  - @devtools/catalog-model@1.4.0-next.1
  - @devtools/backend-tasks@0.5.3-next.2
  - @devtools/config@1.0.7
  - @devtools/errors@1.2.0-next.0
  - @devtools/types@1.0.2
  - @devtools/plugin-catalog-common@1.0.14-next.1
  - @devtools/plugin-catalog-node@1.3.7-next.2

## 0.5.13-next.1

### Patch Changes

- Updated dependencies
  - @devtools/errors@1.2.0-next.0
  - @devtools/catalog-model@1.4.0-next.0
  - @devtools/backend-tasks@0.5.3-next.1
  - @devtools/plugin-catalog-node@1.3.7-next.1
  - @devtools/plugin-catalog-common@1.0.14-next.0
  - @devtools/config@1.0.7
  - @devtools/types@1.0.2

## 0.5.13-next.0

### Patch Changes

- Updated dependencies
  - @devtools/plugin-catalog-node@1.3.7-next.0
  - @devtools/config@1.0.7
  - @devtools/backend-tasks@0.5.3-next.0
  - @devtools/catalog-model@1.3.0
  - @devtools/errors@1.1.5
  - @devtools/types@1.0.2
  - @devtools/plugin-catalog-common@1.0.13

## 0.5.12

### Patch Changes

- Updated dependencies
  - @devtools/backend-tasks@0.5.2
  - @devtools/plugin-catalog-node@1.3.6
  - @devtools/catalog-model@1.3.0
  - @devtools/config@1.0.7
  - @devtools/errors@1.1.5
  - @devtools/types@1.0.2
  - @devtools/plugin-catalog-common@1.0.13

## 0.5.12-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-tasks@0.5.2-next.1
  - @devtools/plugin-catalog-node@1.3.6-next.1
  - @devtools/config@1.0.7

## 0.5.12-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-tasks@0.5.2-next.0
  - @devtools/plugin-catalog-node@1.3.6-next.0
  - @devtools/catalog-model@1.3.0
  - @devtools/config@1.0.7
  - @devtools/errors@1.1.5
  - @devtools/types@1.0.2
  - @devtools/plugin-catalog-common@1.0.13

## 0.5.11

### Patch Changes

- c9a0fdcd2c8: Fix deprecated types.
- Updated dependencies
  - @devtools/backend-tasks@0.5.1
  - @devtools/catalog-model@1.3.0
  - @devtools/plugin-catalog-node@1.3.5
  - @devtools/config@1.0.7
  - @devtools/errors@1.1.5
  - @devtools/types@1.0.2
  - @devtools/plugin-catalog-common@1.0.13

## 0.5.11-next.3

### Patch Changes

- Updated dependencies
  - @devtools/catalog-model@1.3.0-next.0
  - @devtools/backend-tasks@0.5.1-next.2
  - @devtools/config@1.0.7
  - @devtools/errors@1.1.5
  - @devtools/types@1.0.2
  - @devtools/plugin-catalog-common@1.0.13-next.1
  - @devtools/plugin-catalog-node@1.3.5-next.3

## 0.5.11-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-tasks@0.5.1-next.2
  - @devtools/catalog-model@1.2.1
  - @devtools/config@1.0.7
  - @devtools/errors@1.1.5
  - @devtools/types@1.0.2
  - @devtools/plugin-catalog-common@1.0.13-next.0
  - @devtools/plugin-catalog-node@1.3.5-next.2

## 0.5.11-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-tasks@0.5.1-next.1
  - @devtools/catalog-model@1.2.1
  - @devtools/config@1.0.7
  - @devtools/errors@1.1.5
  - @devtools/types@1.0.2
  - @devtools/plugin-catalog-common@1.0.13-next.0
  - @devtools/plugin-catalog-node@1.3.5-next.1

## 0.5.11-next.0

### Patch Changes

- c9a0fdcd2c8: Fix deprecated types.
- Updated dependencies
  - @devtools/config@1.0.7
  - @devtools/backend-tasks@0.5.1-next.0
  - @devtools/catalog-model@1.2.1
  - @devtools/errors@1.1.5
  - @devtools/types@1.0.2
  - @devtools/plugin-catalog-common@1.0.12
  - @devtools/plugin-catalog-node@1.3.5-next.0

## 0.5.10

### Patch Changes

- e675f902980: Make sure to not use deprecated exports from `@devtools/plugin-catalog-backend`
- Updated dependencies
  - @devtools/backend-tasks@0.5.0
  - @devtools/errors@1.1.5
  - @devtools/plugin-catalog-node@1.3.4
  - @devtools/catalog-model@1.2.1
  - @devtools/config@1.0.7
  - @devtools/types@1.0.2

## 0.5.10-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-tasks@0.5.0-next.2
  - @devtools/plugin-catalog-backend@1.8.0-next.2
  - @devtools/config@1.0.7-next.0

## 0.5.10-next.1

### Patch Changes

- Updated dependencies
  - @devtools/errors@1.1.5-next.0
  - @devtools/plugin-catalog-backend@1.8.0-next.1
  - @devtools/backend-tasks@0.4.4-next.1
  - @devtools/config@1.0.7-next.0
  - @devtools/catalog-model@1.2.1-next.1
  - @devtools/types@1.0.2

## 0.5.10-next.0

### Patch Changes

- Updated dependencies
  - @devtools/plugin-catalog-backend@1.8.0-next.0
  - @devtools/backend-tasks@0.4.4-next.0
  - @devtools/catalog-model@1.2.1-next.0
  - @devtools/config@1.0.6
  - @devtools/errors@1.1.4
  - @devtools/types@1.0.2

## 0.5.9

### Patch Changes

- Updated dependencies
  - @devtools/plugin-catalog-backend@1.7.2
  - @devtools/catalog-model@1.2.0
  - @devtools/backend-tasks@0.4.3
  - @devtools/config@1.0.6
  - @devtools/errors@1.1.4
  - @devtools/types@1.0.2

## 0.5.9-next.2

### Patch Changes

- Updated dependencies
  - @devtools/plugin-catalog-backend@1.7.2-next.2
  - @devtools/catalog-model@1.2.0-next.1
  - @devtools/backend-tasks@0.4.3-next.2
  - @devtools/config@1.0.6
  - @devtools/errors@1.1.4
  - @devtools/types@1.0.2

## 0.5.9-next.1

### Patch Changes

- Updated dependencies
  - @devtools/plugin-catalog-backend@1.7.2-next.1
  - @devtools/backend-tasks@0.4.3-next.1
  - @devtools/catalog-model@1.1.6-next.0
  - @devtools/config@1.0.6
  - @devtools/errors@1.1.4
  - @devtools/types@1.0.2

## 0.5.9-next.0

### Patch Changes

- Updated dependencies
  - @devtools/catalog-model@1.1.6-next.0
  - @devtools/plugin-catalog-backend@1.7.2-next.0
  - @devtools/backend-tasks@0.4.3-next.0

## 0.5.7

### Patch Changes

- 9f2b786fc9: Provide context for logged errors.
- Updated dependencies
  - @devtools/catalog-model@1.1.5
  - @devtools/backend-tasks@0.4.1
  - @devtools/plugin-catalog-backend@1.7.0
  - @devtools/config@1.0.6
  - @devtools/errors@1.1.4
  - @devtools/types@1.0.2

## 0.5.7-next.2

### Patch Changes

- 9f2b786fc9: Provide context for logged errors.
- Updated dependencies
  - @devtools/backend-tasks@0.4.1-next.1
  - @devtools/plugin-catalog-backend@1.7.0-next.2
  - @devtools/catalog-model@1.1.5-next.1
  - @devtools/config@1.0.6-next.0
  - @devtools/errors@1.1.4
  - @devtools/types@1.0.2

## 0.5.7-next.1

### Patch Changes

- Updated dependencies
  - @devtools/config@1.0.6-next.0
  - @devtools/plugin-catalog-backend@1.7.0-next.1
  - @devtools/backend-tasks@0.4.1-next.0
  - @devtools/catalog-model@1.1.5-next.1
  - @devtools/errors@1.1.4
  - @devtools/types@1.0.2

## 0.5.7-next.0

### Patch Changes

- Updated dependencies
  - @devtools/catalog-model@1.1.5-next.0
  - @devtools/plugin-catalog-backend@1.7.0-next.0
  - @devtools/backend-tasks@0.4.0
  - @devtools/config@1.0.5
  - @devtools/errors@1.1.4
  - @devtools/types@1.0.2

## 0.5.6

### Patch Changes

- Updated dependencies
  - @devtools/plugin-catalog-backend@1.6.0
  - @devtools/backend-tasks@0.4.0
  - @devtools/errors@1.1.4
  - @devtools/types@1.0.2
  - @devtools/catalog-model@1.1.4
  - @devtools/config@1.0.5

## 0.5.6-next.3

### Patch Changes

- Updated dependencies
  - @devtools/plugin-catalog-backend@1.6.0-next.3
  - @devtools/backend-tasks@0.4.0-next.3
  - @devtools/catalog-model@1.1.4-next.1
  - @devtools/config@1.0.5-next.1
  - @devtools/errors@1.1.4-next.1
  - @devtools/types@1.0.2-next.1

## 0.5.6-next.2

### Patch Changes

- Updated dependencies
  - @devtools/plugin-catalog-backend@1.6.0-next.2
  - @devtools/backend-tasks@0.4.0-next.2
  - @devtools/catalog-model@1.1.4-next.1
  - @devtools/config@1.0.5-next.1
  - @devtools/errors@1.1.4-next.1
  - @devtools/types@1.0.2-next.1

## 0.5.6-next.1

### Patch Changes

- Updated dependencies
  - @devtools/plugin-catalog-backend@1.6.0-next.1
  - @devtools/backend-tasks@0.4.0-next.1
  - @devtools/types@1.0.2-next.1
  - @devtools/config@1.0.5-next.1
  - @devtools/catalog-model@1.1.4-next.1
  - @devtools/errors@1.1.4-next.1

## 0.5.6-next.0

### Patch Changes

- Updated dependencies
  - @devtools/plugin-catalog-backend@1.6.0-next.0
  - @devtools/types@1.0.2-next.0
  - @devtools/backend-tasks@0.3.8-next.0
  - @devtools/catalog-model@1.1.4-next.0
  - @devtools/config@1.0.5-next.0
  - @devtools/errors@1.1.4-next.0

## 0.5.5

### Patch Changes

- Updated dependencies
  - @devtools/plugin-catalog-backend@1.5.1
  - @devtools/backend-tasks@0.3.7
  - @devtools/catalog-model@1.1.3
  - @devtools/types@1.0.1
  - @devtools/config@1.0.4
  - @devtools/errors@1.1.3

## 0.5.5-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-tasks@0.3.7-next.1
  - @devtools/plugin-catalog-backend@1.5.1-next.1
  - @devtools/catalog-model@1.1.3-next.0
  - @devtools/config@1.0.4-next.0
  - @devtools/errors@1.1.3-next.0
  - @devtools/types@1.0.1-next.0

## 0.5.5-next.0

### Patch Changes

- Updated dependencies
  - @devtools/plugin-catalog-backend@1.5.1-next.0
  - @devtools/backend-tasks@0.3.7-next.0
  - @devtools/catalog-model@1.1.3-next.0
  - @devtools/types@1.0.1-next.0
  - @devtools/config@1.0.4-next.0
  - @devtools/errors@1.1.3-next.0

## 0.5.4

### Patch Changes

- Updated dependencies
  - @devtools/catalog-model@1.1.2
  - @devtools/plugin-catalog-backend@1.5.0
  - @devtools/backend-tasks@0.3.6
  - @devtools/config@1.0.3
  - @devtools/errors@1.1.2
  - @devtools/types@1.0.0

## 0.5.4-next.2

### Patch Changes

- Updated dependencies
  - @devtools/plugin-catalog-backend@1.5.0-next.2
  - @devtools/backend-tasks@0.3.6-next.2
  - @devtools/catalog-model@1.1.2-next.2
  - @devtools/config@1.0.3-next.2
  - @devtools/errors@1.1.2-next.2
  - @devtools/types@1.0.0

## 0.5.4-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-tasks@0.3.6-next.1
  - @devtools/catalog-model@1.1.2-next.1
  - @devtools/config@1.0.3-next.1
  - @devtools/errors@1.1.2-next.1
  - @devtools/types@1.0.0
  - @devtools/plugin-catalog-backend@1.4.1-next.1

## 0.5.4-next.0

### Patch Changes

- Updated dependencies
  - @devtools/catalog-model@1.1.2-next.0
  - @devtools/plugin-catalog-backend@1.4.1-next.0
  - @devtools/backend-tasks@0.3.6-next.0
  - @devtools/config@1.0.3-next.0
  - @devtools/errors@1.1.2-next.0
  - @devtools/types@1.0.0

## 0.5.3

### Patch Changes

- 7fa54c3c77: Added ae-dir LDAP vendor to correctly extract DN.
- c54fcea9af: Now the `searchStream` method in LDAP client awaits the callbacks
- Updated dependencies
  - @devtools/plugin-catalog-backend@1.4.0
  - @devtools/backend-tasks@0.3.5
  - @devtools/catalog-model@1.1.1
  - @devtools/config@1.0.2
  - @devtools/errors@1.1.1

## 0.5.3-next.2

### Patch Changes

- Updated dependencies
  - @devtools/catalog-model@1.1.1-next.0
  - @devtools/config@1.0.2-next.0
  - @devtools/errors@1.1.1-next.0
  - @devtools/plugin-catalog-backend@1.4.0-next.3
  - @devtools/backend-tasks@0.3.5-next.1

## 0.5.3-next.1

### Patch Changes

- 7fa54c3c77: Added ae-dir LDAP vendor to correctly extract DN.
- Updated dependencies
  - @devtools/plugin-catalog-backend@1.4.0-next.1

## 0.5.3-next.0

### Patch Changes

- c54fcea9af: Now the `searchStream` method in LDAP client awaits the callbacks
- Updated dependencies
  - @devtools/backend-tasks@0.3.5-next.0
  - @devtools/plugin-catalog-backend@1.3.2-next.0

## 0.5.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-tasks@0.3.4
  - @devtools/plugin-catalog-backend@1.3.1

## 0.5.2-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-tasks@0.3.4-next.0
  - @devtools/plugin-catalog-backend@1.3.1-next.0

## 0.5.1

### Patch Changes

- ddfd566606: Fix mapping between users and groups for FreeIPA when using the LdapOrgProcessor
- fbfbff6bf7: Add possibility to resolve relations by RDN, in addition to UUID and DN
- Updated dependencies
  - @devtools/plugin-catalog-backend@1.3.0
  - @devtools/catalog-model@1.1.0
  - @devtools/backend-tasks@0.3.3
  - @devtools/errors@1.1.0

## 0.5.1-next.2

### Patch Changes

- ddfd566606: Fix mapping between users and groups for FreeIPA when using the LdapOrgProcessor
- Updated dependencies
  - @devtools/plugin-catalog-backend@1.3.0-next.3
  - @devtools/backend-tasks@0.3.3-next.3
  - @devtools/catalog-model@1.1.0-next.3

## 0.5.1-next.1

### Patch Changes

- fbfbff6bf7: Add possibility to resolve relations by RDN, in addition to UUID and DN
- Updated dependencies
  - @devtools/catalog-model@1.1.0-next.1
  - @devtools/errors@1.1.0-next.0
  - @devtools/plugin-catalog-backend@1.2.1-next.1
  - @devtools/backend-tasks@0.3.3-next.1

## 0.5.1-next.0

### Patch Changes

- Updated dependencies
  - @devtools/catalog-model@1.1.0-next.0
  - @devtools/backend-tasks@0.3.3-next.0
  - @devtools/plugin-catalog-backend@1.2.1-next.0

## 0.5.0

### Minor Changes

- 1f83f0bc84: Added the possibility to pass TLS configuration to ldap connection

### Patch Changes

- Updated dependencies
  - @devtools/plugin-catalog-backend@1.2.0
  - @devtools/backend-tasks@0.3.2
  - @devtools/catalog-model@1.0.3

## 0.5.0-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-tasks@0.3.2-next.1
  - @devtools/plugin-catalog-backend@1.2.0-next.1
  - @devtools/catalog-model@1.0.3-next.0

## 0.5.0-next.0

### Minor Changes

- 1f83f0bc84: Added the possibility to pass TLS configuration to ldap connection

### Patch Changes

- Updated dependencies
  - @devtools/backend-tasks@0.3.2-next.0
  - @devtools/plugin-catalog-backend@1.2.0-next.0

## 0.4.3

### Patch Changes

- Updated dependencies
  - @devtools/plugin-catalog-backend@1.1.2
  - @devtools/backend-tasks@0.3.1
  - @devtools/config@1.0.1
  - @devtools/catalog-model@1.0.2

## 0.4.3-next.1

### Patch Changes

- Updated dependencies
  - @devtools/plugin-catalog-backend@1.1.2-next.2
  - @devtools/backend-tasks@0.3.1-next.1
  - @devtools/config@1.0.1-next.0
  - @devtools/catalog-model@1.0.2-next.0

## 0.4.3-next.0

### Patch Changes

- Updated dependencies
  - @devtools/plugin-catalog-backend@1.1.2-next.0
  - @devtools/backend-tasks@0.3.1-next.0

## 0.4.2

### Patch Changes

- ebc0aef2c6: Changed relationship creation in LDAP data processor to leverage entityRefs instead of metadata.name
- Updated dependencies
  - @devtools/plugin-catalog-backend@1.1.0
  - @devtools/backend-tasks@0.3.0
  - @devtools/catalog-model@1.0.1

## 0.4.2-next.1

### Patch Changes

- Updated dependencies
  - @devtools/plugin-catalog-backend@1.1.0-next.1
  - @devtools/backend-tasks@0.3.0-next.1

## 0.4.2-next.0

### Patch Changes

- Updated dependencies
  - @devtools/catalog-model@1.0.1-next.0
  - @devtools/plugin-catalog-backend@1.0.1-next.0
  - @devtools/backend-tasks@0.2.2-next.0

## 0.4.1

### Patch Changes

- 132189e466: Updated the code to handle User kind `spec.memberOf` now being optional.
- a6c367d937: Add config support for LDAP search options.
- 74375be2c6: Updated to no longer rely on the `RecursivePartial` export from `@devtools/plugin-catalog-backend`.
- e949d68059: Made sure to move the catalog-related github and ldap config into their right places
- Updated dependencies
  - @devtools/plugin-catalog-backend@1.0.0
  - @devtools/backend-tasks@0.2.1
  - @devtools/catalog-model@1.0.0
  - @devtools/config@1.0.0
  - @devtools/errors@1.0.0
  - @devtools/types@1.0.0

## 0.4.0

### Minor Changes

- 9461f73643: **BREAKING**: Added a `schedule` field to `LdapOrgEntityProvider.fromConfig`, which is required. If you want to retain the old behavior of scheduling the provider manually, you can set it to the string value `'manual'`. But you may want to leverage the ability to instead pass in the recurring task schedule information directly. This will allow you to simplify your backend setup code to not need an intermediate variable and separate scheduling code at the bottom.

  All things said, a typical setup might now look as follows:

  ```diff
   // packages/backend/src/plugins/catalog.ts
  +import { Duration } from 'luxon';
  +import { LdapOrgEntityProvider } from '@devtools/plugin-catalog-backend-module-ldap';
   export default async function createPlugin(
     env: PluginEnvironment,
   ): Promise<Router> {
     const builder = await CatalogBuilder.create(env);
  +  // The target parameter below needs to match the ldap.providers.target
  +  // value specified in your app-config.
  +  builder.addEntityProvider(
  +    LdapOrgEntityProvider.fromConfig(env.config, {
  +      id: 'our-ldap-master',
  +      target: 'ldaps://ds.example.net',
  +      logger: env.logger,
  +      schedule: env.scheduler.createScheduledTaskRunner({
  +        frequency: Duration.fromObject({ minutes: 60 }),
  +        timeout: Duration.fromObject({ minutes: 15 }),
  +      }),
  +    }),
  +  );
  ```

### Patch Changes

- f751e84572: Ignore search referrals instead of throwing an error.
- Updated dependencies
  - @devtools/backend-tasks@0.2.0
  - @devtools/plugin-catalog-backend@0.24.0
  - @devtools/catalog-model@0.13.0

## 0.4.0-next.0

### Minor Changes

- 9461f73643: **BREAKING**: Added a `schedule` field to `LdapOrgEntityProvider.fromConfig`, which is required. If you want to retain the old behavior of scheduling the provider manually, you can set it to the string value `'manual'`. But you may want to leverage the ability to instead pass in the recurring task schedule information directly. This will allow you to simplify your backend setup code to not need an intermediate variable and separate scheduling code at the bottom.

  All things said, a typical setup might now look as follows:

  ```diff
   // packages/backend/src/plugins/catalog.ts
  +import { Duration } from 'luxon';
  +import { LdapOrgEntityProvider } from '@devtools/plugin-catalog-backend-module-ldap';
   export default async function createPlugin(
     env: PluginEnvironment,
   ): Promise<Router> {
     const builder = await CatalogBuilder.create(env);
  +  // The target parameter below needs to match the ldap.providers.target
  +  // value specified in your app-config.
  +  builder.addEntityProvider(
  +    LdapOrgEntityProvider.fromConfig(env.config, {
  +      id: 'our-ldap-master',
  +      target: 'ldaps://ds.example.net',
  +      logger: env.logger,
  +      schedule: env.scheduler.createScheduledTaskRunner({
  +        frequency: Duration.fromObject({ minutes: 60 }),
  +        timeout: Duration.fromObject({ minutes: 15 }),
  +      }),
  +    }),
  +  );
  ```

### Patch Changes

- f751e84572: Ignore search referrals instead of throwing an error.
- Updated dependencies
  - @devtools/backend-tasks@0.2.0-next.0
  - @devtools/plugin-catalog-backend@0.24.0-next.0
  - @devtools/catalog-model@0.13.0-next.0

## 0.3.15

### Patch Changes

- 83a83381b0: Use the new `processingResult` export from the catalog backend
- 66aa05c23c: Fixed bug in Catalog LDAP module to acknowledge page events to continue receiving entries if pagePause=true
- Updated dependencies
  - @devtools/catalog-model@0.12.0
  - @devtools/plugin-catalog-backend@0.23.0

## 0.3.14

### Patch Changes

- ed09ad8093: Updated usage of the `LocationSpec` type from `@devtools/catalog-model`, which is deprecated.
- 25e97e7242: Minor wording update
- df61ca71dd: Implemented required `getProcessorName` method for catalog processor.
- Updated dependencies
  - @devtools/plugin-catalog-backend@0.22.0
  - @devtools/catalog-model@0.11.0

## 0.3.13

### Patch Changes

- c77c5c7eb6: Added `devtools.role` to `package.json`
- 244d24ebc4: Import `Location` from the `@devtools/catalog-client` package.
- 27eccab216: Replaces use of deprecated catalog-model constants.
- Updated dependencies
  - @devtools/plugin-catalog-backend@0.21.4
  - @devtools/errors@0.2.1
  - @devtools/catalog-model@0.10.0
  - @devtools/config@0.1.14
  - @devtools/types@0.1.2

## 0.3.12

### Patch Changes

- Updated dependencies
  - @devtools/plugin-catalog-backend@0.21.3

## 0.3.12-next.0

### Patch Changes

- Updated dependencies
  - @devtools/plugin-catalog-backend@0.21.3-next.0

## 0.3.11

### Patch Changes

- Updated dependencies
  - @devtools/plugin-catalog-backend@0.21.2

## 0.3.11-next.0

### Patch Changes

- Updated dependencies
  - @devtools/plugin-catalog-backend@0.21.2-next.0

## 0.3.10

### Patch Changes

- 3368dc6b62: Make sure to clone objects sent to `ldapjs` since the library modifies them
- Updated dependencies
  - @devtools/plugin-catalog-backend@0.21.0
  - @devtools/config@0.1.13
  - @devtools/catalog-model@0.9.10

## 0.3.10-next.0

### Patch Changes

- 3368dc6b62: Make sure to clone objects sent to `ldapjs` since the library modifies them
- Updated dependencies
  - @devtools/plugin-catalog-backend@0.21.0-next.0
  - @devtools/config@0.1.13-next.0
  - @devtools/catalog-model@0.9.10-next.0

## 0.3.9

### Patch Changes

- 2b19fd2e94: Make sure to avoid accidental data sharing / mutation of `set` values
- 722681b1b1: Clean up API report
- Updated dependencies
  - @devtools/config@0.1.12
  - @devtools/plugin-catalog-backend@0.20.0
  - @devtools/errors@0.2.0
  - @devtools/catalog-model@0.9.9

## 0.3.8

### Patch Changes

- Updated dependencies
  - @devtools/plugin-catalog-backend@0.19.0

## 0.3.7

### Patch Changes

- Updated dependencies
  - @devtools/errors@0.1.5
  - @devtools/plugin-catalog-backend@0.18.0

## 0.3.6

### Patch Changes

- 10615525f3: Switch to use the json and observable types from `@devtools/types`
- Updated dependencies
  - @devtools/plugin-catalog-backend@0.17.2
  - @devtools/config@0.1.11
  - @devtools/errors@0.1.4
  - @devtools/catalog-model@0.9.6

## 0.3.5

### Patch Changes

- 36e67d2f24: Internal updates to apply more strict checks to throw errors.
- Updated dependencies
  - @devtools/plugin-catalog-backend@0.17.1
  - @devtools/errors@0.1.3
  - @devtools/catalog-model@0.9.5

## 0.3.4

### Patch Changes

- Updated dependencies
  - @devtools/plugin-catalog-backend@0.17.0

## 0.3.3

### Patch Changes

- a31afc5b62: Replace slash stripping regexp with trimEnd to remove CodeQL warning
- Updated dependencies
  - @devtools/plugin-catalog-backend@0.16.0
  - @devtools/catalog-model@0.9.4

## 0.3.2

### Patch Changes

- Updated dependencies
  - @devtools/plugin-catalog-backend@0.15.0

## 0.3.1

### Patch Changes

- 8b016ce67b: Alters LDAP processor to handle one SearchEntry at a time
- febddedcb2: Bump `lodash` to remediate `SNYK-JS-LODASH-590103` security vulnerability
- Updated dependencies
  - @devtools/plugin-catalog-backend@0.14.0
  - @devtools/catalog-model@0.9.3
  - @devtools/config@0.1.10

## 0.3.0

### Minor Changes

- 54b441abe: Introduce `LdapOrgEntityProvider` as an alternative to `LdapOrgReaderProcessor`. This also changes the `LdapClient` interface to require a logger.

### Patch Changes

- Updated dependencies
  - @devtools/plugin-catalog-backend@0.13.3
  - @devtools/config@0.1.7

## 0.2.2

### Patch Changes

- 2a2a2749b: chore(deps): bump `@types/ldapjs` from 1.0.10 to 2.2.0
- Updated dependencies
  - @devtools/plugin-catalog-backend@0.13.1

## 0.2.1

### Patch Changes

- afe3e4b54: Expose missing types used by the custom transformers
- Updated dependencies
  - @devtools/plugin-catalog-backend@0.13.0

## 0.2.0

### Minor Changes

- b055ef88a: Add extension points to the `LdapOrgReaderProcessor` to make it possible to do more advanced modifications
  of the ingested users and groups.

### Patch Changes

- Updated dependencies
  - @devtools/catalog-model@0.9.0
  - @devtools/plugin-catalog-backend@0.12.0

## 0.1.1

### Patch Changes

- Updated dependencies
  - @devtools/plugin-catalog-backend@0.11.0
