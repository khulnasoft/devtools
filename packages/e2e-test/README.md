# e2e-test

End-to-end test for verifying Devtools packages.

## Usage

This package is only meant for usage within the Devtools monorepo.

All packages need to be installed and built before running the test. In a fresh clone of this repo you first need to run the following from the repo root:

```sh
yarn install
yarn tsc
yarn build:all
```

Once those tasks have completed, you can now run the test using `yarn e2e-test run`.

If you make changes to other packages you will need to rerun `yarn tsc && yarn build`. Changes to this package do not require a rebuild.

## Documentation

- [Devtools Readme](https://github.com/khulnasoft/devtools/blob/master/README.md)
- [Devtools Documentation](https://devtools.khulnasoft.com/docs)
