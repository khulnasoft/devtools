# yarn-plugin-devtools

This yarn plugin adds a `devtools:` version protocol to yarn, which replaces
specific version ranges for `@devtools/` packages. The only version range
supported by this plugin is `devtools:^`, which has similar semantics to the
corresponding [`workspace` range](https://yarnpkg.com/features/workspaces#cross-references) when using
workspace dependencies; locally, the package will always resolve to the exact
version specified in the manifest for the Devtools release listed in
devtools.json. If the dependent package is published, this version will be
prefixed by `^`.

Detailed instructions for using the plugin can be found in [the docs](https://devtools.khulnasoft.com/docs/getting-started/keeping-devtools-updated/#managing-package-versions-with-the-devtools-yarn-plugin).

## Installation

```bash
yarn plugin import https://versions.devtools.khulnasoft.com/v1/tags/main/yarn-plugin
```

The resulting changes in the file system should be committed to your repo.

## Usage

The yarn plugin recognizes the version string `"devtools:^"`, and replaces it
with the appropriate version based on the overall Devtools version in
devtools.json.
