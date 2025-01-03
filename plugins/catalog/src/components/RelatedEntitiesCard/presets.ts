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
import {
  ComponentEntity,
  DomainEntity,
  Entity,
  ResourceEntity,
  SystemEntity,
} from '@devtools/catalog-model';
import { EntityTable } from '@devtools/plugin-catalog-react';
import { TableColumn } from '@devtools/core-components';

export const componentEntityColumns: TableColumn<ComponentEntity>[] = [
  EntityTable.columns.createEntityRefColumn({ defaultKind: 'component' }),
  EntityTable.columns.createOwnerColumn(),
  EntityTable.columns.createSpecTypeColumn(),
  EntityTable.columns.createSpecLifecycleColumn(),
  EntityTable.columns.createMetadataDescriptionColumn(),
];
export const componentEntityHelpLink: string =
  'https://devtools.khulnasoft.com/docs/features/software-catalog/descriptor-format#kind-component';
export const asComponentEntities = (entities: Entity[]): ComponentEntity[] =>
  entities as ComponentEntity[];

export const resourceEntityColumns: TableColumn<ResourceEntity>[] = [
  EntityTable.columns.createEntityRefColumn({ defaultKind: 'resource' }),
  EntityTable.columns.createOwnerColumn(),
  EntityTable.columns.createSpecTypeColumn(),
  EntityTable.columns.createSpecLifecycleColumn(),
  EntityTable.columns.createMetadataDescriptionColumn(),
];
export const resourceEntityHelpLink: string =
  'https://devtools.khulnasoft.com/docs/features/software-catalog/descriptor-format#kind-resource';
export const asResourceEntities = (entities: Entity[]): ResourceEntity[] =>
  entities as ResourceEntity[];

export const systemEntityColumns: TableColumn<SystemEntity>[] = [
  EntityTable.columns.createEntityRefColumn({ defaultKind: 'system' }),
  EntityTable.columns.createOwnerColumn(),
  EntityTable.columns.createMetadataDescriptionColumn(),
];
export const systemEntityHelpLink: string =
  'https://devtools.khulnasoft.com/docs/features/software-catalog/descriptor-format#kind-system';
export const asSystemEntities = (entities: Entity[]): SystemEntity[] =>
  entities as SystemEntity[];

export const domainEntityColumns: TableColumn<DomainEntity>[] = [
  EntityTable.columns.createEntityRefColumn({ defaultKind: 'domain' }),
  EntityTable.columns.createOwnerColumn(),
  EntityTable.columns.createMetadataDescriptionColumn(),
];
export const domainEntityHelpLink: string =
  'https://devtools.khulnasoft.com/docs/features/software-catalog/descriptor-format#kind-domain';
export const asDomainEntities = (entities: Entity[]): DomainEntity[] =>
  entities as DomainEntity[];
