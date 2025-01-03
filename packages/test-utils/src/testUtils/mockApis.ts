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

import {
  createApiFactory,
  errorApiRef,
  fetchApiRef,
  storageApiRef,
} from '@devtools/core-plugin-api';
import { translationApiRef } from '@devtools/core-plugin-api/alpha';
import { MockErrorApi, MockFetchApi, MockStorageApi } from './apis';
import { MockTranslationApi } from './apis/TranslationApi';

export const mockApis = [
  createApiFactory(errorApiRef, new MockErrorApi()),
  createApiFactory(fetchApiRef, new MockFetchApi()),
  createApiFactory(storageApiRef, MockStorageApi.create()),
  createApiFactory(translationApiRef, MockTranslationApi.create()),
];
