/*
 * Copyright 2022 The Devtools Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { createBackend } from '@devtools/backend-defaults';
import { createBackendFeatureLoader } from '@devtools/backend-plugin-api';

const backend = createBackend();

// An example of how to group together and load multiple features. You can also
// access root-scoped services by adding `deps`.
const searchLoader = createBackendFeatureLoader({
  *loader() {
    yield import('@devtools/plugin-search-backend');
    yield import('@devtools/plugin-search-backend-module-catalog');
    yield import('@devtools/plugin-search-backend-module-explore');
    yield import('@devtools/plugin-search-backend-module-techdocs');
  },
});

backend.add(import('@devtools/plugin-auth-backend'));
backend.add(import('./authModuleGithubProvider'));
backend.add(import('@devtools/plugin-auth-backend-module-guest-provider'));
backend.add(import('@devtools/plugin-app-backend'));
backend.add(import('@devtools/plugin-catalog-backend-module-unprocessed'));
backend.add(
  import('@devtools/plugin-catalog-backend-module-scaffolder-entity-model'),
);
backend.add(import('@devtools/plugin-catalog-backend'));
backend.add(import('@devtools/plugin-events-backend'));
backend.add(import('@devtools/plugin-devtools-backend'));
backend.add(import('@devtools/plugin-kubernetes-backend'));
backend.add(
  import('@devtools/plugin-permission-backend-module-allow-all-policy'),
);
backend.add(import('@devtools/plugin-permission-backend'));
backend.add(import('@devtools/plugin-proxy-backend'));
backend.add(import('@devtools/plugin-scaffolder-backend'));
backend.add(import('@devtools/plugin-scaffolder-backend-module-github'));
backend.add(
  import('@devtools/plugin-scaffolder-backend-module-notifications'),
);
backend.add(
  import('@devtools/plugin-catalog-backend-module-devtools-openapi'),
);
backend.add(searchLoader);
backend.add(import('@devtools/plugin-techdocs-backend'));
backend.add(import('@devtools/plugin-signals-backend'));
backend.add(import('@devtools/plugin-notifications-backend'));
backend.add(import('./instanceMetadata'));

backend.start();