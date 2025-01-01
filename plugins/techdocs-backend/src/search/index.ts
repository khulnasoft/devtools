/*
 * Copyright 2021 The Devtools Authors
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

/**
 * todo(devtools/techdocs-core): stop exporting these in a future release.
 */
export { DefaultTechDocsCollator } from './DefaultTechDocsCollator';
export type { TechDocsCollatorOptions } from './DefaultTechDocsCollator';

import { DefaultTechDocsCollatorFactory as _DefaultTechDocsCollatorFactory } from '@devtools/plugin-search-backend-module-techdocs';
import type { TechDocsCollatorFactoryOptions as _TechDocsCollatorFactoryOptions } from '@devtools/plugin-search-backend-module-techdocs';

/**
 * @public
 * @deprecated import from `@devtools/plugin-search-backend-module-techdocs` instead
 */
export type TechDocsCollatorFactoryOptions = _TechDocsCollatorFactoryOptions;

/**
 * @public
 * @deprecated import from `@devtools/plugin-search-backend-module-techdocs` instead
 */
export const DefaultTechDocsCollatorFactory = _DefaultTechDocsCollatorFactory;
