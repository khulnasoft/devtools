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

import { DomainEntity, RELATION_HAS_PART } from '@devtools/catalog-model';
import {
  InfoCardVariants,
  TableColumn,
  TableOptions,
} from '@devtools/core-components';
import React from 'react';
import {
  asDomainEntities,
  domainEntityColumns,
  domainEntityHelpLink,
  RelatedEntitiesCard,
} from '../RelatedEntitiesCard';
import { catalogTranslationRef } from '../../alpha/translation';
import { useTranslationRef } from '@devtools/core-plugin-api/alpha';

/** @public */
export interface HasSubdomainsCardProps {
  variant?: InfoCardVariants;
  tableOptions?: TableOptions;
  columns?: TableColumn<DomainEntity>[];
  title?: string;
}

export function HasSubdomainsCard(props: HasSubdomainsCardProps) {
  const { t } = useTranslationRef(catalogTranslationRef);
  const {
    variant = 'gridItem',
    title = t('hasSubdomainsCard.title'),
    columns = domainEntityColumns,
    tableOptions = {},
  } = props;
  return (
    <RelatedEntitiesCard
      variant={variant}
      title={title}
      entityKind="Domain"
      relationType={RELATION_HAS_PART}
      columns={columns}
      asRenderableEntities={asDomainEntities}
      emptyMessage={t('hasSubdomainsCard.emptyMessage')}
      emptyHelpLink={domainEntityHelpLink}
      tableOptions={tableOptions}
    />
  );
}
