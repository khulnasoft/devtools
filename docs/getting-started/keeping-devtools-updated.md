---
id: keeping-devtools-updated
title: Keeping Devtools Updated
description: How to keep your Devtools App updated
---

Audience: Developers and Admins

:::note Note
To better understand the concepts in this section, it's recommended to have an understanding of [Monorepos](https://semaphoreci.com/blog/what-is-monorepo), [Semantic Versioning](https://semver.org) and [CHANGELOGs](https://keepachangelog.com).
:::

## Summary

Devtools is always improving, so it's a good idea to stay in sync with the
latest releases. Devtools is more of a library than an application or service;
similar to `create-react-app`, the `@devtools/create-app` tool gives you a
starting point that's meant to be evolved.

## Updating Devtools versions with devtools-cli

The Devtools CLI has a command to bump all `@devtools` packages and
dependencies you're using to the latest versions:
[versions:bump](https://devtools.khulnasoft.com/docs/tooling/cli/03-commands#versionsbump).

```bash
yarn devtools-cli versions:bump
```

The reason for bumping all `@devtools` packages at once is to maintain the
dependencies that they have between each other.

<a name="plugin"></a>
:::tip

To make the version bump process even easier and more streamlined we highly recommend using the [Devtools yarn plugin](#managing-package-versions-with-the-devtools-yarn-plugin)

:::

By default the bump command will upgrade `@devtools` packages to the latest `main` release line which is released monthly. For those in a hurry that want to track the `next` release line which releases weekly can do so using the `--release next` option.

```bash
yarn devtools-cli versions:bump --release next
```

If you are using other plugins you can pass in the `--pattern` option to update
more than just the `@devtools/*` dependencies.

```bash
yarn devtools-cli versions:bump --pattern '@{devtools,roadiehq}/*'
```

## Following create-app template changes

The `@devtools/create-app` command creates the initial structure of your
Devtools installation from a **template**. The source of this template in the
Devtools repository is updated periodically, but your local `app` and `backend`
packages are established at `create-app` time and won't automatically get these
template updates.

For this reason, any changes made to the template are documented along with
upgrade instructions in the
[changelog](https://github.com/khulnasoft/devtools/blob/master/packages/create-app/CHANGELOG.md)
of the `@devtools/create-app` package. We recommend peeking at this changelog
for any applicable updates when upgrading packages. As an alternative, the
[Devtools Upgrade Helper](https://devtools.github.io/upgrade-helper/) provides
a consolidated view of all the changes between two versions of Devtools. You
can find the current version of your Devtools installation in `devtools.json`.

## Managing package versions with the Devtools yarn plugin

The Devtools yarn plugin makes it easier to manage Devtools package versions,
by determining the appropriate version for each package based on the overall
Devtools version in `devtools.json`. This avoids the need to update every
package.json across your Devtools monorepo, and means that when adding new
`@devtools` dependencies, you don't need to worry about figuring out the right
version to use to match the currently-installed release of Devtools.

### Requirements

In order to use the yarn plugin, you'll need to be using yarn 4.1.1 or greater.

### Installation

To install the yarn plugin, run the following command in your Devtools
monorepo:

```bash
yarn plugin import https://versions.devtools.khulnasoft.com/v1/tags/main/yarn-plugin
```

The resulting changes in the file system should be committed to your repo.

:::tip

For best results it's ideal to add the Devtools Yarn plugin when you are about to do a Devtools upgrade as it will make it easier to confirm everything is working.

:::

### Usage

When the yarn plugin is installed, versions for currently-released `@devtools`
packages can be replaced in package.json with the string `"devtools:^"`. This
instructs yarn to resolve the version based on the overall Devtools version in
`devtools.json`.

:::tip

The `devtools.json` is key for the plugin to work, make sure this file is included in your CI/CD pipelines and/or any Container builds.

:::

The `devtools-cli versions:bump` command documented above will detect the
installation of the yarn plugin, and when it's installed, will automatically
migrate dependencies across the monorepo to use it.

## More information on dependency mismatches

Devtools is structured as a monorepo with
[Yarn workspaces](https://classic.yarnpkg.com/en/docs/workspaces/). This means
the `app` and `backend` packages, as well as any custom plugins you've added,
are separate packages with their own `package.json` and dependencies.

When a given dependency version is the _same_ between different packages, the
dependency is hoisted to the main `node_modules` folder in the monorepo root to
be shared between packages. When _different_ versions of the same dependency are
encountered, Yarn creates a `node_modules` folder within a particular package.
This can lead to multiple versions of the same package being installed and used
in the same app.

All Devtools core packages are implemented in such as way that package
duplication is **not** a problem. For example, duplicate installations of
packages like `@devtools/core-plugin-api`, `@devtools/core-components`,
`@devtools/plugin-catalog-react`, and `@devtools/backend-plugin-api` are all
acceptable.

While package duplication might be acceptable in many cases, you might want to
deduplicate packages for the purpose of optimizing bundle size and installation
speed. We recommend using deduplication utilities such as `yarn dedupe` to trim
down the number of duplicate packages.

## Proxy

The Devtools CLI uses [global-agent](https://www.npmjs.com/package/global-agent) to configure HTTP/HTTPS proxy settings using environment variables. This allows you to route the CLI’s network traffic through a proxy server, which can be useful in environments with restricted internet access.

Additionally, yarn needs a proxy too (sometimes), when in environments with restricted internet access. It uses different settings than the global-agent module. If you decide to use the devtools yarn plugin [mentioned above](#plugin), you will need to set additional proxy values.
If you will always need proxy settings in all environments and situations, you can add `httpProxy` and `httpsProxy` values to [the yarnrc.yml file](https://yarnpkg.com/configuration/yarnrc). If some environments need it (say a developer workstation) but other environments do not (perhaps a CI build server running on AWS), then you may not want to update the yarnrc.yml file but just set environment variables `YARN_HTTP_PROXY` and `YARN_HTTPS_PROXY` in the environments/situations where you need to proxy.

**If you plan to use the devtools yarn plugin, you will need these extra yarn proxy settings to both install the plugin and run the `versions:bump` command**. If you do not plan to use the devtools yarn plugin, it seems like the global agent proxy settings alone are sufficient.

### Example Configuration

```bash
export GLOBAL_AGENT_HTTP_PROXY=http://proxy.company.com:8080
export GLOBAL_AGENT_HTTPS_PROXY=https://secure-proxy.company.com:8080
export GLOBAL_AGENT_NO_PROXY=localhost,internal.company.com
export YARN_HTTP_PROXY=http://proxy.company.com:8080                      # optional
export YARN_HTTPS_PROXY=https://secure-proxy.company.com:8080             # optional
```