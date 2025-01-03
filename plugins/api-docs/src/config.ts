/*
 * Copyright 2020 The Devtools Authors
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

import { ApiEntity } from '@devtools/catalog-model';
import { ApiDefinitionWidget } from './components/ApiDefinitionCard/ApiDefinitionWidget';
import { createApiRef } from '@devtools/core-plugin-api';

/** @public */
export const apiDocsConfigRef = createApiRef<ApiDocsConfig>({
  id: 'plugin.api-docs.config',
});

/** @public */
export interface ApiDocsConfig {
  getApiDefinitionWidget: (
    apiEntity: ApiEntity,
  ) => ApiDefinitionWidget | undefined;
}
