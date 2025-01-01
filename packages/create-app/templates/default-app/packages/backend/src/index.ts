/*
 * Hi!
 *
 * Note that this is an EXAMPLE Devtools backend. Please check the README.
 *
 * Happy hacking!
 */

import { createBackend } from '@devtools/backend-defaults';

const backend = createBackend();

backend.add(import('@devtools/plugin-app-backend'));
backend.add(import('@devtools/plugin-proxy-backend'));
backend.add(import('@devtools/plugin-scaffolder-backend'));
backend.add(import('@devtools/plugin-scaffolder-backend-module-github'));
backend.add(import('@devtools/plugin-techdocs-backend'));

// auth plugin
backend.add(import('@devtools/plugin-auth-backend'));
// See https://devtools.khulnasoft.com/docs/backend-system/building-backends/migrating#the-auth-plugin
backend.add(import('@devtools/plugin-auth-backend-module-guest-provider'));
// See https://devtools.khulnasoft.com/docs/auth/guest/provider

// catalog plugin
backend.add(import('@devtools/plugin-catalog-backend'));
backend.add(
  import('@devtools/plugin-catalog-backend-module-scaffolder-entity-model'),
);

// See https://devtools.khulnasoft.com/docs/features/software-catalog/configuration#subscribing-to-catalog-errors
backend.add(import('@devtools/plugin-catalog-backend-module-logs'));

// permission plugin
backend.add(import('@devtools/plugin-permission-backend'));
// See https://devtools.khulnasoft.com/docs/permissions/getting-started for how to create your own permission policy
backend.add(
  import('@devtools/plugin-permission-backend-module-allow-all-policy'),
);

// search plugin
backend.add(import('@devtools/plugin-search-backend'));

// search engine
// See https://devtools.khulnasoft.com/docs/features/search/search-engines
backend.add(import('@devtools/plugin-search-backend-module-pg'));

// search collators
backend.add(import('@devtools/plugin-search-backend-module-catalog'));
backend.add(import('@devtools/plugin-search-backend-module-techdocs'));

// kubernetes
backend.add(import('@devtools/plugin-kubernetes-backend'));

backend.start();
