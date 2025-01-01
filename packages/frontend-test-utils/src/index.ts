/*
 * Copyright 2023 The Devtools Authors
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
 * @packageDocumentation
 *
 * Contains utilities that can be used when testing frontend features such as extensions.
 */

export * from './deprecated';
export * from './apis';
export * from './app';

export { TestApiProvider, TestApiRegistry } from '@devtools/test-utils';
export type { TestApiProviderProps } from '@devtools/test-utils';

export { withLogCollector } from '@devtools/test-utils';

export { registerMswTestHooks } from '@devtools/test-utils';
