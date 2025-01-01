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

import { RELATION_HAS_PART, ResourceEntity } from '@devtools/catalog-model';
import {
  InfoCardVariants,
  TableColumn,
  TableOptions,
} from '@devtools/core-components';
import React from 'react';
import {
  asResourceEntities,
  RelatedEntitiesCard,
  resourceEntityColumns,
  resourceEntityHelpLink,
} from '../RelatedEntitiesCard';
import { catalogTranslationRef } from '../../alpha/translation';
import { useTranslationRef } from '@devtools/core-plugin-api/alpha';

/** @public */
export interface HasResourcesCardProps {
  variant?: InfoCardVariants;
  title?: string;
  columns?: TableColumn<ResourceEntity>[];
  tableOptions?: TableOptions;
}

export function HasResourcesCard(props: HasResourcesCardProps) {
  const { t } = useTranslationRef(catalogTranslationRef);
  const {
    variant = 'gridItem',
    title = t('hasResourcesCard.title'),
    columns = resourceEntityColumns,
    tableOptions = {},
  } = props;
  return (
    <RelatedEntitiesCard
      variant={variant}
      title={title}
      entityKind="Resource"
      relationType={RELATION_HAS_PART}
      columns={columns}
      asRenderableEntities={asResourceEntities}
      emptyMessage={t('hasResourcesCard.emptyMessage')}
      emptyHelpLink={resourceEntityHelpLink}
      tableOptions={tableOptions}
    />
  );
}
