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

import { JsonObject } from '@devtools/types';

import { TemplatePresentationV1beta3 } from '@devtools/plugin-scaffolder-common';

/**
 * The shape of each entry of parameters which gets rendered
 * as a separate step in the wizard input
 *
 * @public
 */
export type TemplateParameterSchema = {
  title: string;
  description?: string;
  presentation?: TemplatePresentationV1beta3;
  steps: Array<{
    title: string;
    description?: string;
    schema: JsonObject;
  }>;
  EXPERIMENTAL_formDecorators?: { id: string; input?: JsonObject }[];
};
