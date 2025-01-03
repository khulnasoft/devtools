## CLI Report file for "@devtools/cli"

> Do not edit this file. It is a report generated by `yarn build:api-reports`

### `devtools-cli`

```
Usage: devtools-cli [options] [command]

Options:
  -V, --version
  -h, --help

Commands:
  new [options]
  config:docs [options]
  config:print [options]
  config:check [options]
  config:schema [options]
  repo [command]
  package [command]
  migrate [command]
  versions:bump [options]
  versions:migrate [options]
  build-workspace [options] <workspace-dir> [packages...]
  create-github-app <github-org>
  info
  help [command]
```

### `devtools-cli build-workspace`

```
Usage: devtools-cli build-workspace [options] <workspace-dir> [packages...]

Options:
  --alwaysPack
  -h, --help
```

### `devtools-cli config:check`

```
Usage: devtools-cli config:check [options]

Options:
  --package <name>
  --lax
  --frontend
  --deprecated
  --strict
  --config <path>
  -h, --help
```

### `devtools-cli config:docs`

```
Usage: devtools-cli config:docs [options]

Options:
  --package <name>
  -h, --help
```

### `devtools-cli config:print`

```
Usage: devtools-cli config:print [options]

Options:
  --package <name>
  --lax
  --frontend
  --with-secrets
  --format <format>
  --config <path>
  -h, --help
```

### `devtools-cli config:schema`

```
Usage: devtools-cli config:schema [options]

Options:
  --package <name>
  --format <format>
  --merge
  --no-merge
  -h, --help
```

### `devtools-cli create-github-app`

```
Usage: devtools-cli create-github-app [options] <github-org>

Options:
  -h, --help
```

### `devtools-cli info`

```
Usage: devtools-cli info [options]

Options:
  -h, --help
```

### `devtools-cli migrate`

```
Usage: devtools-cli migrate [options] [command] [command]

Options:
  -h, --help

Commands:
  package-roles
  package-scripts
  package-exports
  package-lint-configs
  react-router-deps
  help [command]
```

### `devtools-cli migrate package-exports`

```
Usage: devtools-cli migrate package-exports [options]

Options:
  -h, --help
```

### `devtools-cli migrate package-lint-configs`

```
Usage: devtools-cli migrate package-lint-configs [options]

Options:
  -h, --help
```

### `devtools-cli migrate package-roles`

```
Usage: devtools-cli migrate package-roles [options]

Options:
  -h, --help
```

### `devtools-cli migrate package-scripts`

```
Usage: devtools-cli migrate package-scripts [options]

Options:
  -h, --help
```

### `devtools-cli migrate react-router-deps`

```
Usage: devtools-cli migrate react-router-deps [options]

Options:
  -h, --help
```

### `devtools-cli new`

```
Usage: devtools-cli new [options]

Options:
  --select <name>
  --option <name>=<value>
  --scope <scope>
  --npm-registry <URL>
  --baseVersion <version>
  --license <license>
  --no-private
  -h, --help
```

### `devtools-cli package`

```
Usage: devtools-cli package [options] [command] [command]

Options:
  -h, --help

Commands:
  start [options]
  build [options]
  lint [options] [directories...]
  test
  clean
  prepack
  postpack
  help [command]
```

### `devtools-cli package build`

```
Usage: devtools-cli package build [options]

Options:
  --role <name>
  --minify
  --skip-build-dependencies
  --stats
  --config <path>
  -h, --help
```

### `devtools-cli package clean`

```
Usage: devtools-cli package clean [options]

Options:
  -h, --help
```

### `devtools-cli package lint`

```
Usage: devtools-cli package lint [options] [directories...]

Options:
  --format <format>
  --output-file <path>
  --fix
  --max-warnings <number>
  -h, --help
```

### `devtools-cli package postpack`

```
Usage: devtools-cli package postpack [options]

Options:
  -h, --help
```

### `devtools-cli package prepack`

```
Usage: devtools-cli package prepack [options]

Options:
  -h, --help
```

### `devtools-cli package start`

```
Usage: devtools-cli package start [options]

Options:
  --config <path>
  --role <name>
  --check
  --inspect [host]
  --inspect-brk [host]
  --require <path>
  --link <path>
  -h, --help
```

### `devtools-cli package test`

```
Usage: devtools-cli [--config=<pathToConfigFile>] [TestPathPattern]

Options:
  -h, --help
  --version
  --all
  --automock
  -b, --bail
  --cache
  --cacheDirectory
  --changedFilesWithAncestor
  --changedSince
  --ci
  --clearCache
  --clearMocks
  --collectCoverage
  --collectCoverageFrom
  --color
  --colors
  -c, --config
  --coverage
  --coverageDirectory
  --coveragePathIgnorePatterns
  --coverageProvider
  --coverageReporters
  --coverageThreshold
  --debug
  --detectLeaks
  --detectOpenHandles
  --env
  --errorOnDeprecated
  -e, --expand
  --filter
  --findRelatedTests
  --forceExit
  --globalSetup
  --globalTeardown
  --globals
  --haste
  --ignoreProjects
  --init
  --injectGlobals
  --json
  --lastCommit
  --listTests
  --logHeapUsage
  --maxConcurrency
  -w, --maxWorkers
  --moduleDirectories
  --moduleFileExtensions
  --moduleNameMapper
  --modulePathIgnorePatterns
  --modulePaths
  --noStackTrace
  --notify
  --notifyMode
  -o, --onlyChanged
  -f, --onlyFailures
  --openHandlesTimeout
  --outputFile
  --passWithNoTests
  --preset
  --prettierPath
  --projects
  --randomize
  --reporters
  --resetMocks
  --resetModules
  --resolver
  --restoreMocks
  --rootDir
  --roots
  -i, --runInBand
  --runTestsByPath
  --runner
  --seed
  --selectProjects
  --setupFiles
  --setupFilesAfterEnv
  --shard
  --showConfig
  --showSeed
  --silent
  --skipFilter
  --snapshotSerializers
  --testEnvironment
  --testEnvironmentOptions
  --testFailureExitCode
  --testLocationInResults
  --testMatch
  -t, --testNamePattern
  --testPathIgnorePatterns
  --testPathPattern
  --testRegex
  --testResultsProcessor
  --testRunner
  --testSequencer
  --testTimeout
  --transform
  --transformIgnorePatterns
  --unmockedModulePathPatterns
  -u, --updateSnapshot
  --useStderr
  --verbose
  --watch
  --watchAll
  --watchPathIgnorePatterns
  --watchman
  --workerThreads
```

### `devtools-cli repo`

```
Usage: devtools-cli repo [options] [command] [command]

Options:
  -h, --help

Commands:
  build [options]
  lint [options]
  fix [options]
  clean
  list-deprecations [options]
  test [options]
  help [command]
```

### `devtools-cli repo build`

```
Usage: devtools-cli repo build [options]

Options:
  --all
  --since <ref>
  --minify
  -h, --help
```

### `devtools-cli repo clean`

```
Usage: devtools-cli repo clean [options]

Options:
  -h, --help
```

### `devtools-cli repo fix`

```
Usage: devtools-cli repo fix [options]

Options:
  --publish
  --check
  -h, --help
```

### `devtools-cli repo lint`

```
Usage: devtools-cli repo lint [options]

Options:
  --format <format>
  --output-file <path>
  --since <ref>
  --successCache
  --successCacheDir <path>
  --fix
  -h, --help
```

### `devtools-cli repo list-deprecations`

```
Usage: devtools-cli repo list-deprecations [options]

Options:
  --json
  -h, --help
```

### `devtools-cli repo test`

```
Usage: devtools-cli repo test [options]

Options:
  --since <ref>
  --successCache
  --successCacheDir <path>
  --jest-help
  -h, --help
```

### `devtools-cli versions:bump`

```
Usage: devtools-cli versions:bump [options]

Options:
  --pattern <glob>
  --release <version|next|main>
  --skip-install
  --skip-migrate
  -h, --help
```

### `devtools-cli versions:migrate`

```
Usage: devtools-cli versions:migrate [options]

Options:
  --pattern <glob>
  --skip-code-changes
  -h, --help
```
