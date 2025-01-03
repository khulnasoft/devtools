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

import { Entity } from '@devtools/catalog-model';
import { RESOURCE_TYPE_CATALOG_ENTITY } from '@devtools/plugin-catalog-common/alpha';
import { EntitiesSearchFilter } from '@devtools/plugin-catalog-node';
import { PermissionRuleParams } from '@devtools/plugin-permission-common';
import {
  makeCreatePermissionRule,
  PermissionRule,
} from '@devtools/plugin-permission-node';

/**
 * Convenience type for {@link @devtools/plugin-permission-node#PermissionRule}
 * instances with the correct resource type, resource, and filter to work with
 * the catalog.
 *
 * @alpha
 */
export type CatalogPermissionRule<
  TParams extends PermissionRuleParams = PermissionRuleParams,
> = PermissionRule<Entity, EntitiesSearchFilter, 'catalog-entity', TParams>;

/**
 * Helper function for creating correctly-typed
 * {@link @devtools/plugin-permission-node#PermissionRule}s for the
 * catalog-backend.
 *
 * @alpha
 */
export const createCatalogPermissionRule = makeCreatePermissionRule<
  Entity,
  EntitiesSearchFilter,
  typeof RESOURCE_TYPE_CATALOG_ENTITY
>();
