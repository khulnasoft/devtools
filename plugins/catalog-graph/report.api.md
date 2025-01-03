## API Report File for "@devtools/plugin-catalog-graph"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts
/// <reference types="react" />

import { DevtoolsPlugin } from '@devtools/core-plugin-api';
import { CompoundEntityRef } from '@devtools/catalog-model';
import { DependencyGraphTypes } from '@devtools/core-components';
import { Entity } from '@devtools/catalog-model';
import { ExternalRouteRef } from '@devtools/core-plugin-api';
import { InfoCardVariants } from '@devtools/core-components';
import { JsonObject } from '@devtools/types';
import { JSX as JSX_2 } from 'react';
import { MouseEvent as MouseEvent_2 } from 'react';
import { MouseEventHandler } from 'react';
import { default as React_2 } from 'react';
import { ReactNode } from 'react';
import { RouteRef } from '@devtools/core-plugin-api';

// @public
export const ALL_RELATION_PAIRS: RelationPairs;

// @public
export const CatalogGraphPage: (
  props: {
    initialState?:
      | {
          selectedRelations?: string[] | undefined;
          selectedKinds?: string[] | undefined;
          rootEntityRefs?: string[] | undefined;
          maxDepth?: number | undefined;
          unidirectional?: boolean | undefined;
          mergeRelations?: boolean | undefined;
          direction?: Direction | undefined;
          showFilters?: boolean | undefined;
          curve?: 'curveStepBefore' | 'curveMonotoneX' | undefined;
        }
      | undefined;
  } & Partial<EntityRelationsGraphProps>,
) => JSX_2.Element;

// @public
export const catalogGraphPlugin: DevtoolsPlugin<
  {
    catalogGraph: RouteRef<undefined>;
  },
  {
    catalogEntity: ExternalRouteRef<
      {
        name: string;
        kind: string;
        namespace: string;
      },
      true
    >;
  }
>;

// @public
export const catalogGraphRouteRef: RouteRef<undefined>;

// @public (undocumented)
export type CustomLabelClassKey = 'text' | 'secondary';

// @public (undocumented)
export type CustomNodeClassKey = 'node' | 'text' | 'clickable';

// @public
export enum Direction {
  BOTTOM_TOP = 'BT',
  LEFT_RIGHT = 'LR',
  RIGHT_LEFT = 'RL',
  TOP_BOTTOM = 'TB',
}

// @public
export const EntityCatalogGraphCard: (
  props: Partial<EntityRelationsGraphProps> & {
    variant?: InfoCardVariants | undefined;
    height?: number | undefined;
    title?: string | undefined;
    action?: ReactNode;
  },
) => JSX_2.Element;

// @public
export type EntityEdge = DependencyGraphTypes.DependencyEdge<EntityEdgeData>;

// @public
export type EntityEdgeData = {
  relations: string[];
  label: 'visible';
};

// @public
export type EntityNode = DependencyGraphTypes.DependencyNode<EntityNodeData>;

// @public
export type EntityNodeData = {
  entity: Entity;
  focused?: boolean;
  color?: 'primary' | 'secondary' | 'default';
  onClick?: MouseEventHandler<unknown>;
  name: string;
  kind?: string;
  title?: string;
  namespace: string;
  spec?: JsonObject;
};

// @public
export const EntityRelationsGraph: (
  props: EntityRelationsGraphProps,
) => React_2.JSX.Element;

// @public (undocumented)
export type EntityRelationsGraphClassKey = 'progress' | 'container' | 'graph';

// @public (undocumented)
export type EntityRelationsGraphProps = {
  rootEntityNames: CompoundEntityRef | CompoundEntityRef[];
  maxDepth?: number;
  unidirectional?: boolean;
  mergeRelations?: boolean;
  kinds?: string[];
  relations?: string[];
  entityFilter?: (entity: Entity) => boolean;
  direction?: Direction;
  onNodeClick?: (value: EntityNode, event: MouseEvent_2<unknown>) => void;
  relationPairs?: RelationPairs;
  className?: string;
  zoom?: 'enabled' | 'disabled' | 'enable-on-click';
  renderNode?: DependencyGraphTypes.RenderNodeFunction<EntityNode>;
  renderLabel?: DependencyGraphTypes.RenderLabelFunction<EntityEdge>;
  curve?: 'curveStepBefore' | 'curveMonotoneX';
  showArrowHeads?: boolean;
};

// @public
export type RelationPairs = [string, string][];
```
