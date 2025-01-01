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

import React from 'react';
import { CatalogEntityPage } from '@devtools/plugin-catalog';
import { createDevApp } from '@devtools/dev-utils';
import { UserSettingsPage, userSettingsPlugin } from '../src';
import { CatalogApi, catalogApiRef } from '@devtools/plugin-catalog-react';
import {
  CompoundEntityRef,
  Entity,
  UserEntity,
} from '@devtools/catalog-model';

const userEntity: UserEntity = {
  apiVersion: 'devtools.khulnasoft.com/v1beta1',
  kind: 'User',
  metadata: {
    name: 'Guest',
  },
  spec: {},
};
createDevApp()
  .registerPlugin(userSettingsPlugin)
  .registerApi({
    api: catalogApiRef,
    deps: {},
    factory() {
      return {
        async getEntityByRef(
          _: string | CompoundEntityRef,
        ): Promise<Entity | undefined> {
          return userEntity;
        },
      } as Partial<CatalogApi> as unknown as CatalogApi;
    },
  })
  .addPage({
    title: 'Settings',
    path: '/settings',
    element: <UserSettingsPage />,
  })
  .addPage({ element: <CatalogEntityPage /> })
  .render();