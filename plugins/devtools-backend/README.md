# DevTools Backend

Welcome to the DevTools backend plugin! This plugin provides data for the [DevTools frontend](../devtools/) features.

## Setup

Here's how to get the DevTools Backend up and running in the new backend system:

1. First we need to add the `@devtools/plugin-devtools-backend` package to your backend:

   ```sh
   # From the Devtools root directory
   yarn --cwd packages/backend add @devtools/plugin-devtools-backend
   ```

2. Then add the plugin to your backend index file:

   ```ts
   // In packages/backend/src/index.ts
   const backend = createBackend();
   // ... other feature additions
   backend.add(import('@devtools/plugin-devtools-backend'));
   ```

3. Now run `yarn start-backend` from the repo root
4. Finally open `http://localhost:7007/api/devtools/health` in a browser and it should return `{"status":"ok"}`

## Links

- [Frontend part of the plugin](https://github.com/khulnasoft/devtools/tree/master/plugins/devtools)
- [The Devtools homepage](https://devtools.khulnasoft.com)
