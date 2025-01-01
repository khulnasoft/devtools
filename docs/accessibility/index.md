---
id: index
title: Devtools Accessibility
description: Documentation on Devtools Accessibility
---

In an effort to bake accessibility practices further into our process of building features for Devtools, we support automated CI tests for some of our core features in the OSS project: Software Catalog, Software Templates, Search, and TechDocs. As these are just a few of the many plugins out there, we encourage you to consider the accessibility implications of your work on Devtools in order to build a great experience for everyone.

## How to contribute

There are multiple ways to contribute to making Devtools more accessible, you'll find below a list of examples to help you get started.

### Run Lighthouse in CI on your plugin

If your plugin lives in the [Devtools main repository](https://github.com/khulnasoft/devtools/) you can modify the [urls in the Lighthouse config](https://github.com/khulnasoft/devtools/blob/39ba2284d73885b7ca8290cb38e2b1e4d983c8d6/lighthouserc.js#L19-L34) to run the Lighthouse checks on urls where your plugin exists as well. E.g.

```diff
  ci: {
     collect: {
       url: [
         /** Software Catalog */
         'http://localhost:3000/catalog',
         'http://localhost:3000/catalog-import',
         'http://localhost:3000/catalog/default/component/devtools',
         ...
+        /** Your plugin paths */
+        'http://localhost:3000/your-plugin-path,
       ],
       settings: {
        ...
       },
      ...
     },
     assert: {
       ...
     },
   },
```

To make sure the [Accessibility GitHub workflow](https://github.com/khulnasoft/devtools/blob/master/.github/workflows/verify_accessibility.yml) is running when changes are made to your plugin folders, modify the [list of paths](https://github.com/khulnasoft/devtools/blob/10759b6ad2561bd86183ad940256f9a309c7a6b0/.github/workflows/verify_accessibility.yml#L7-L16).

### Run the Lighthouse CLI locally when developing new features

If you want to use the Lighthouse CLI and run the checks based on the config you can use the following command:

```shell
yarn dlx @lhci/cli@0.11.x autorun
```

:::note Note
Running this command will use the [Lighthouse config](https://github.com/khulnasoft/devtools/blob/39ba2284d73885b7ca8290cb38e2b1e4d983c8d6/lighthouserc.js#L19-L34) so make sure to adjust it to your needs if needed.

:::

### Use Lighthouse GitHub Action on your own repo

If your Devtools plugin lives outside of the [Devtools main repository](https://github.com/khulnasoft/devtools/), and you use GitHub Actions for continuous integration, we encourage you to add and modify the [Accessibility GitHub workflow](https://github.com/khulnasoft/devtools/blob/master/.github/workflows/verify_accessibility.yml) to your needs.

### Report identified issues

It’s important to remember that automated checks can only catch a small number of accessibility issues, therefore, we also encourage you to conduct manual testing of your plugins using Assistive technology (screen readers, alternative navigation, and screen magnifiers are a few examples).

If you have identified accessibility issues and don’t have time to contribute a fix, please open an issue over at [Devtools Issues](https://github.com/khulnasoft/devtools/issues) to let us know.
