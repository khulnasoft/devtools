---
id: techdocs-overview
title: TechDocs Documentation
sidebar_label: Overview
# prettier-ignore
description: TechDocs is Spotify’s homegrown docs-like-code solution built directly into Devtools
---

## What is it?

<!-- Intro, backstory, etc.: -->

TechDocs is Spotify’s homegrown docs-like-code solution built directly into Devtools. Engineers write their documentation in Markdown files which live together with their code - and with little configuration get a nice-looking doc site in Devtools.

Today, it is one of the core products in Spotify’s developer experience offering with 5000+ documentation sites and around 10000 average daily hits. Read more about TechDocs in its
[announcement blog post](https://devtools.khulnasoft.com/blog/2020/09/08/announcing-tech-docs).
🎉

## Features

- Deploy TechDocs no matter how your software environment is set up.
- Discover your Service's technical documentation from the Service's page in Devtools Catalog.
- Create documentation-only sites for any purpose by just writing Markdown.
- Take advantage of the [TechDocs Addon Framework](addons.md) to add features on top of the base docs-like-code experience.
- Explore and take advantage of the large ecosystem of
  [MkDocs plugins](https://www.mkdocs.org/user-guide/plugins/) to create a rich reading experience.
- Search for and find docs.

## Project roadmap

### Now

No current plans.

### Next

No current plans.

### Someday/Maybe

- What can we do in TechDocs to help drive up documentation quality? We have many ideas, for example, a Trust Card with associated Trust Score and automatic triggering of documentation maintenance notifications.
- Contribute to and deploy from a marketplace of TechDocs Addons
- Addon: MDX (allows you to use JSX in your Markdown content)
- Can we go static site generator agnostic?
- Better integration with
  [Scaffolder V2](https://github.com/khulnasoft/devtools/issues/2771) (e.g. easy to choose and apply documentation template with Software Templates)
- Possible to configure several aspects about TechDocs (e.g. URL, homepage,
  theme)

### Done

See [Done](#done) below for a list of completed roadmap items.

## Supported

The following sections show the source code hosting providers and file storage providers that are currently supported by TechDocs.

See [TechDocs Architecture](architecture.md) to get an overview of where the below providers are used.

### Source code hosting providers

| Source Code Hosting Provider | Support Status |
| ---------------------------- | -------------- |
| GitHub                       | Yes ✅         |
| GitHub Enterprise            | Yes ✅         |
| Bitbucket                    | Yes ✅         |
| Azure DevOps                 | Yes ✅         |
| Gerrit                       | Yes ✅         |
| GitLab                       | Yes ✅         |
| GitLab Enterprise            | Yes ✅         |
| Gitea                        | Yes ✅         |
| AWS CodeCommit               | Yes ✅         |
| Harness Code                 | Yes ✅         |

### File storage providers

| File Storage Provider             | Support Status |
| --------------------------------- | -------------- |
| Local Filesystem of Devtools app | Yes ✅         |
| Google Cloud Storage (GCS)        | Yes ✅         |
| Amazon Web Services (AWS) S3      | Yes ✅         |
| Azure Blob Storage                | Yes ✅         |
| OpenStack Swift                   | Community ✅   |

[Reach out to us](#get-involved) if you want to request more providers.

## Tech stack

| Stack                                           | Location                                                      |
| ----------------------------------------------- | ------------------------------------------------------------- |
| Frontend Plugin                                 | [@devtools/plugin-techdocs][techdocs/frontend]               |
| Frontend Plugin Library                         | [@devtools/plugin-techdocs-react][techdocs/frontend-library] |
| Backend Plugin                                  | [@devtools/plugin-techdocs-backend][techdocs/backend]        |
| CLI (for local development and generating docs) | [@techdocs/cli][techdocs/cli]                                 |
| Docker Container (for generating docs)          | [techdocs-container][techdocs/container]                      |

[techdocs/frontend]: https://github.com/khulnasoft/devtools/blob/master/plugins/techdocs
[techdocs/frontend-library]: https://github.com/khulnasoft/devtools/blob/master/plugins/techdocs-react
[techdocs/backend]: https://github.com/khulnasoft/devtools/blob/master/plugins/techdocs-backend
[techdocs/container]: https://github.com/khulnasoft/techdocs-container
[techdocs/cli]: https://github.com/khulnasoft/devtools/blob/master/packages/techdocs-cli

## Get involved

Reach out to us in the **#techdocs** channel of our
[Discord chatroom](https://github.com/khulnasoft/devtools#community).

## Done

**Alpha release**

[Milestone](https://github.com/khulnasoft/devtools/milestone/16)

- Alpha of TechDocs that you can use end to end - and contribute to.

**Beta release**

[Milestone](https://github.com/khulnasoft/devtools/milestone/29)

- TechDocs' recommended setup supports most environments (CI systems, cloud
  storage solutions, source control systems).
- [Instructions for upgrading from Alpha to Beta](how-to-guides.md#how-to-migrate-from-techdocs-alpha-to-beta)

**v1.0**

TechDocs promoted to v1.0! To understand how this change affects the package, check out our [versioning policy](https://devtools.khulnasoft.com/docs/overview/versioning-policy).

TechDocs packages:

- @devtools/plugin-techdocs
- @devtools/plugin-techdocs-backend
- @devtools/plugin-techdocs-node
- @techdocs/cli

**TechDocs Addon Framework**

With the Devtools 1.2 release, we introduced the [TechDocs Addon Framework](https://devtools.khulnasoft.com/blog/2022/05/13/techdocs-addon-framework) for augmenting the TechDocs experience at read-time.

In addition to the framework itself, we open sourced a **ReportIssue** Addon, helping you to create a feedback loop that drives up documentation quality and foster a documentation culture at your organization.
