# search-backend-module-techdocs

This package exports a module that extends the search backend to also index techdocs.

## Installation

Add the module package as a dependency:

```bash
# From your Devtools root directory
yarn --cwd packages/backend add @devtools/plugin-search-backend-module-techdocs
```

Add the collator to your backend instance, along with the search plugin itself:

```tsx
// packages/backend/src/index.ts
import { createBackend } from '@devtools/backend-defaults';

const backend = createBackend();
backend.add(import('@devtools/plugin-search-backend'));
backend.add(import('@devtools/plugin-search-backend-module-techdocs'));
backend.start();
```

You may also want to add configuration parameters to your app-config, for example for controlling the scheduled indexing interval. These parameters should be placed under the `search.collators.techdocs` key. See [the config definition file](https://github.com/khulnasoft/devtools/blob/master/plugins/search-backend-module-techdocs/config.d.ts) for more details.
