---
id: package-metadata
title: Package Metadata
description: An inventory of well known package metadata fields in the Devtools ecosystem.
---

The `package.json` file is a JSON file that contains metadata about a JavaScript package. It is a [Node.js standard](https://nodejs.org/api/packages.html) that is expanded upon in the [NPM ecosystem](https://docs.npmjs.com/cli/v10/configuring-npm/package-json), and is required for all packages published to NPM or a similar package registry.

## Known Metadata Fields

This section documents the known `package.json` metadata fields that play a significant role in the Devtools ecosystem.

All [fields defined by NPM](https://docs.npmjs.com/cli/v10/configuring-npm/package-json) are inherited by the Devtools ecosystem. The list below only includes those standard fields for which additional information is available.

### `name`

The name of the package, as defined by [NPM](https://docs.npmjs.com/cli/v10/configuring-npm/package-json#name). In addition, the following naming scheme is strongly encouraged for packages published in the Devtools ecosystem:

First pick a package name prefix that is unique to your organization or collection of packages, but also places it within the Devtools ecosystem, for example: `@example/devtools`, `@example-devtools/`, or `example-devtools`. This prefix should be used by all packages that you publish, regardless of whether they're part of a plugin or not.

Any package that is not part of a plugin should use the prefix along with a descriptive name, for example: `@example/devtools-components` or `@example/devtools-foo-client`.

For plugin packages you should also pick a plugin ID and add `plugin-<pluginId>` to the prefix, along with a suffix based on the package role:

- `<prefix>-plugin-<pluginId>`: The main frontend code of the plugin.
- `<prefix>-plugin-<pluginId>-module-<name>`: Optional modules related to the frontend plugin package.
- `<prefix>-plugin-<pluginId>-backend`: The main backend code of the plugin.
- `<prefix>-plugin-<pluginId>-backend-module-<name>`: Optional modules related to the backend plugin package.
- `<prefix>-plugin-<pluginId>-react`: Shared widgets, hooks and similar that both the plugin itself and third-party frontend plugins or modules can depend on.
- `<prefix>-plugin-<pluginId>-node`: Utilities for backends that both the plugin backend itself and third-party backend plugins or modules can depend on.
- `<prefix>-plugin-<pluginId>-common`: An isomorphic package with platform agnostic models, clients, and utilities that all packages above or any third-party plugin or module can depend on.

For example, a frontend package for the `poetry` plugin might be called `@example/devtools-plugin-poetry`, and a backend package for the same plugin might be called `@example/devtools-plugin-poetry-backend`.

If you are creating a module for an existing package that is not part of your project, you should use the same prefix along with the plugin ID of the package that the module is for. For example, if you are creating a poetry provider module for `@devtools/plugin-catalog-backend`, you might call it `@example/devtools-plugin-catalog-backend-module-poetry-provider`.

### `repository`

The location of the source code for the package, as defined by [NPM](https://docs.npmjs.com/cli/v10/configuring-npm/package-json#repository).

This field can be generated by the `devtools-cli repo fix --publish` command. The only requirement is that the `package.json` in your workspace root has the `repository` field documented.

### `main`

The main entry point of the package, as defined by [NPM](https://docs.npmjs.com/cli/v10/configuring-npm/package-json#main). In a standard Devtools setup this should point to the entry point for local development, typically `src/index.ts`. This field along with other entry point fields such as `module` and `types` are rewritten when packaging the package for distribution. You can read more about this process in the [publishing](./cli/02-build-system.md#publishing) section, and it is also used for [backend production builds](./cli/02-build-system.md#backend-production).

### `exports`

The exports of the package, as defined by [Node.js](https://nodejs.org/api/packages.html#exports). This field is used to define the entry points of the package. As with other entry point fields, the exports should point to entry points for local development. They will the be rewritten when packaging the package for distribution. You can read more about this in the [sub-path exports](./cli/02-build-system.md#subpath-exports) section.

### `typeVersions`

This field is used to specify versioned type entry points for the package, as defined by [TypeScript](https://www.typescriptlang.org/docs/handbook/declaration-files/publishing.html#version-selection-with-typesversions), and is used as the equivalent of the `exports` field. TypeScript does support type declarations in the `exports` field, but that requires that the `moduleResolution` option in `tsconfig.json` is set to `node16` or `bundler`, which the Devtools ecosystem currently does not support.

This field can be generated by the `devtools-cli repo fix` command. First fill out the `exports` field to point to source fields, which will then be used to generate `typeVersions`.

### `sideEffects`

This field declares whether it is safe to remove unused code through tree shaking when bundling this package into a frontend build, and is defined for example by [WebPack](https://github.com/khulnasoft/devtools/blob/8d5cdb5d536cc8eb444da4b57dca4e36716f4535/plugins/auth-backend-module-google-provider/config.d.ts#L22).

This field can be generated by the `devtools-cli repo fix` command. It will set to `false` by default for all frontend packages, since Devtools frontend packages should generally never have any side effects. If your package does have side effects, you can set explicitly set this field to `true`.

### `scripts`

The package scripts as defined by [NPM](https://docs.npmjs.com/cli/v10/configuring-npm/package-json#scripts). The Devtools CLI provides a set of standard scripts, which you can read more about in the [build system](./cli/02-build-system.md) section. The full list of scripts is as follows:

```js
"scripts": {
  "start": "devtools-cli package start",
  "build": "devtools-cli package build",
  "lint": "devtools-cli package lint",
  "test": "devtools-cli package test",
  "clean": "devtools-cli package clean",
  "prepack": "devtools-cli package prepack",
  "postpack": "devtools-cli package postpack"
}
```

### `configSchema`

The Devtools configuration schema for the package, as described in the [defining configuration](../conf/defining.md) section.

### `devtools`

This field is a collection of Devtools specific metadata fields. It is required for all Devtools packages, and any package that defines this field is considered to be part of the Devtools ecosystem. All sub-fields of this collection are defined below.

### `devtools.role`

This field defines the role of the package in the Devtools ecosystem. It can affect both the build process and runtime behavior, and signals the intended usage of the package to consumers. You can read more about this field in the [package roles](./cli/02-build-system.md#package-roles) section.

### `devtools.pluginId`

For any package that is part of a plugin, this field should be set to the plugin ID. This is the same ID as you would pass to the `createPlugin`, `createBackendPlugin`, or `createBackendModule` functions in the implementation of the package. It is also the same ID as the one described in the [name](#name) section.

This field can be generated by the `devtools-cli repo fix --publish` command. The plugin ID will be inferred from the package [name](#name) and [role](#devtoolsrole). If the package name is not actually part of a plugin but still has `plugin-*` in its name, you can set this field to be explicitly `null`.

The presence of this field is checked by the `devtools-cli package prepack` command, which is used to prepare a package for publishing. You can read more about this requirement in the section on [metadata for published packages](#metadata-for-published-packages).

### `devtools.pluginPackages`

For any package that is part of a plugin, this field should be set to a list of all packages that are directly part of the same plugin. This includes frontend and backend plugin packages as well as related libraries, but not modules.

This field can be generated by the `devtools-cli repo fix --publish` command. It will list all packages with the same [plugin ID](#devtoolspluginid) in the workspace.

The presence of this field is checked by the `devtools-cli package prepack` command, which is used to prepare a package for publishing. You can read more about this requirement in the section on [metadata for published packages](#metadata-for-published-packages).

```js title="Example usage of the devtools.pluginPackages field"
{
  "name": "@devtools/plugin-catalog",
  "devtools": {
    "role": "frontend-plugin",
    "pluginId": "catalog",
    "pluginPackages": [
      "@devtools/plugin-catalog",
      "@devtools/plugin-catalog-backend",
      "@devtools/plugin-catalog-common",
      "@devtools/plugin-catalog-node",
      "@devtools/plugin-catalog-react"
    ]
  }
  ...
}
```

### `devtools.pluginPackage`

For any module package of a plugin, this field should be set to the [name](#name) of the plugin package that this is a module for.

This field can be generated by the `devtools-cli repo fix --publish` command. It checks for packages with a matching [plugin ID](#devtoolspluginid) in the same workspace, but also knows the package names of the core feature plugin IDs such as `catalog`, `auth`, `scaffolder`, etc. If the package name can not be inferred, it has to be provided manually.

The presence of this field is checked by the `devtools-cli package prepack` command, which is used to prepare a package for publishing. You can read more about this requirement in the section on [metadata for published packages](#metadata-for-published-packages).

```js title="Example usage of the devtools.pluginPackage field"
{
  "name": "@devtools/plugin-catalog-backend-module-github",
  "devtools": {
    "role": "backend-plugin-module",
    "pluginId": "catalog",
    "pluginPackage": "@devtools/plugin-catalog-backend"
  }
  ...
}
```

### `devtools.moved`

This field indicates that a package has been renamed and moved to a new location. This field is recognized by the Devtools CLI, where the version bump command will automatically switch to using the new package instead. The value of this field should be the new package name.

```js title="Example usage of the devtools.moved field"
{
  "name": "@devtools/plugin-azure-devops",
  "devtools": {
    "moved": "@devtools-community/plugin-azure-devops"
  }
  ...
}
```

### `devtools.inline`

If set to `true` this field indicates that monorepo package is private and should be inlined into dependent packages rather than being treated as a dependency. This effectively means that all imported code from the inlined package will be copied into the consuming package, once for each package.

This flag affects various parts of the Devtools tooling, for example the way the Devtools CLI builds work, the way that `@devtools/eslint-plugin` lints dependencies on the package, and how it's treated by `@devtools/repo-tools`.

The `devtools.inline` field is primarily intended to aid in the implementation of the Devtools core framework in the main Devtools repository, but it can be used in other projects as well.

Setting this flag also requires the top-level `private` field to be set as well, since inline packages should not be published.

```js title="Example usage of the devtools.moved field"
{
  "name": "@internal/utils",
  "devtools": {
    "inline": true
  }
  ...
}
```

## Metadata for Published Packages

When publishing a package with the help of the Devtools CLI, there are a number of metadata checks that are performed to ensure that the package is correctly set up for the Devtools ecosystem. These checks are performed by the `devtools-cli package prepack` command, which is used to prepare a package for publishing. These checks can all also be verified separately using the `devtools-cli repo fix --publish` command, and in many cases the required metadata can be generated automatically. It is therefore important to make running the `fix` command part of your workflow in any project that is publishing Devtools packages.

To set this up, we recommend that you add the following script to the root `package.json` of your workspace:

```js
{
  "scripts": {
    "fix": "devtools-cli repo fix --publish"
  }
}
```

This allows anyone working in the repo to run `yarn fix` to check and update all packages in the workspace.

In addition, you should also add a check to your CI pipeline that ensures that there are no pending fixes. This is done by calling the command with the `--check` flag, which in GitHub actions would look something like this:

```yaml
- name: check for missing repo fixes
  run: yarn fix --check
```

Finally, if you are using Husky or any other pre-commit hook, you can also set up a hook to run the fix command before committing:

```js
{
  "lint-staged": {
    "package.json": [
      "yarn fix"
    ]
  }
}
```