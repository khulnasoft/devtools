# @devtools/backend-test-utils

Test helpers library for Devtools backends.

## Usage

Add the library as a `devDependency` to your backend package:

```sh
# From your Devtools root directory, go to your backend package, or to a backend plugin
cd plugins/my-plugin-backend
yarn add --dev @devtools/backend-test-utils
```

## Environment variables

- `DEVTOOLS_TEST_DISABLE_DOCKER`
  - Setting the value to `1` disables Docker for tests
- `CI`
  - Setting the value to `1` enables long-running tests, including the ones utilizing Docker
- `DEVTOOLS_TEST_DOCKER_REGISTRY`
  - Docker registry mirror address where to pull images for tests, for example `mycompany.docker.io/mirror`
  - See [documentation](https://node.testcontainers.org/configuration/) for information
    about authentication (`DOCKER_AUTH_CONFIG`)

Connection strings for different databases that are used for testing. The value of the
string should point to the running instance of the database.

- `DEVTOOLS_TEST_DATABASE_POSTGRES13_CONNECTION_STRING`
- `DEVTOOLS_TEST_DATABASE_POSTGRES12_CONNECTION_STRING`
- `DEVTOOLS_TEST_DATABASE_POSTGRES11_CONNECTION_STRING`
- `DEVTOOLS_TEST_DATABASE_POSTGRES9_CONNECTION_STRING`
- `DEVTOOLS_TEST_DATABASE_MYSQL8_CONNECTION_STRING`

## Documentation

- [Devtools Readme](https://github.com/khulnasoft/devtools/blob/master/README.md)
- [Devtools Documentation](https://devtools.khulnasoft.com/docs)
