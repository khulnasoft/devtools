# @devtools/codemods

A collection of codemods for use with Devtools projects. They are intended to improve and simplify large scale refactoring, upgrades of code to use new implementations, alignment to ADRs or project standards, or other refactoring.

## Usage

This package is a wrapper around [`jscodeshift`](https://github.com/facebook/jscodeshift) with some included transforms. The transforms can either be executed via the included CLI or directly via `jscodeshift`.

To run the `core-imports` codemod towards all source files in the current directory, run the following:

```sh
npx @devtools/codemods apply core-imports
```

Note that this will modify the source files directly, but it's possible to do a dry-run by adding the `--dry` flag.

By passing a list of paths the codemod will only be applied to those paths:

```sh
npx @devtools/codemods apply core-imports plugins/my-plugin-a plugins/my-plugin-b
```

To print a list of all available transforms you use the `list` command:

```sh
npx @devtools/codemods list
```

You can also apply the transforms manually using `jscodeshift`. The transforms are located within the `transforms/` directory in this package, so running directly with `jscodeshift` looks like this:

```sh
npx jscodeshift --parser=tsx --extensions=tsx,js,ts,tsx --transform=node_modules/@devtools/codemods/transforms/core-imports.js .
```

## Documentation

- [Devtools Readme](https://github.com/khulnasoft/devtools/blob/master/README.md)
- [Devtools Documentation](https://devtools.khulnasoft.com/docs)
