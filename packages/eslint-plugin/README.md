# @devtools/eslint-plugin

A collection of ESLint rules useful to Devtools projects.

## Usage

This ESLint plugin is part of the default lint configuration provided by the [Devtools CLI](https://www.npmjs.com/package/@devtools/cli), so you generally do not need to install it manually.

If you do wish to install this plugin manually, start by adding it as a development dependency to your project:

```sh
yarn add --dev @devtools/eslint-plugin
```

Then add it to your ESLint configuration:

```js
extends: [
  'plugin:@devtools/recommended',
],
```

Alternatively, if you want to install in individual rules manually:

```js
plugins: [
  '@devtools',
],
rules: {
  '@devtools/no-forbidden-package-imports': 'error',
}
```

## Rules

The following rules are provided by this plugin:

| Rule                                                                                                | Description                                                                                                              |
| --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| [@devtools/no-forbidden-package-imports](./docs/rules/no-forbidden-package-imports.md)             | Disallow internal monorepo imports from package subpaths that are not exported.                                          |
| [@devtools/no-relative-monorepo-imports](./docs/rules/no-relative-monorepo-imports.md)             | Forbid relative imports that reach outside of the package in a monorepo.                                                 |
| [@devtools/no-undeclared-imports](./docs/rules/no-undeclared-imports.md)                           | Forbid imports of external packages that have not been declared in the appropriate dependencies field in `package.json`. |
| [@devtools/no-top-level-material-ui-4-imports](./docs/rules/no-top-level-material-ui-4-imports.md) | Forbid top level import from Material UI v4 packages.                                                                    |
