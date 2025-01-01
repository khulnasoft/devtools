# search-backend-module-explore

This package exports a module that extends the search backend to also indexing the tools exposed by the [`explore` service](https://github.com/khulnasoft/community-plugins/tree/main/workspaces/explore/plugins/explore-backend).

## Installation

Add the module package as a dependency:

```bash
# From your Devtools root directory
yarn --cwd packages/backend add @devtools/plugin-search-backend-module-explore
```

Add the collator to your backend instance, along with the search plugin itself:

```tsx
// packages/backend/src/index.ts
import { createBackend } from '@devtools/backend-defaults';

const backend = createBackend();
backend.add(import('@devtools/plugin-search-backend'));
backend.add(import('@devtools/plugin-search-backend-module-explore'));
backend.start();
```

You may also want to add configuration parameters to your app-config, for example for controlling the scheduled indexing interval. These parameters should be placed under the `search.collators.explore` key. See [the config definition file](https://github.com/khulnasoft/devtools/blob/master/plugins/search-backend-module-explore/config.d.ts) for more details.

## Using Auth Middleware

If your Devtools instance uses service-to-service authentication, the collator will need to have access to a `tokenManager`. This is automatically injected by the collator module when using the new backend system. But if you are using the old backend system, you will want to add it manually to ensure that the collator makes authenticated requests to the explore backend.

```tsx
indexBuilder.addCollator({
  schedule: every10MinutesSchedule,
  factory: ToolDocumentCollatorFactory.fromConfig(env.config, {
    discovery: env.discovery,
    logger: env.logger,
    tokenManager: env.tokenManager,
  }),
});
```
