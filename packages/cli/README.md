# @devtools/cli

This package provides a CLI for developing Devtools plugins and apps.

## Installation

Install the package via Yarn:

```sh
yarn add @devtools/cli
```

## Development

For local development the cli can be used directly, even from other packages in this repo. The `bin/devtools-cli` entrypoint contains a switch that will load the implementation from the `src` directory when executed inside this repo.

To run the cli in watch mode, use `yarn start <args>`. For example `yarn start lint --help`.

To try out the command locally, you can execute the following from the parent directory of this repo:

```bash
./devtools/packages/cli/bin/devtools-cli --help
```

## Documentation

- [Devtools Readme](https://github.com/khulnasoft/devtools/blob/master/README.md)
- [Devtools Documentation](https://devtools.khulnasoft.com/docs)
