## API Report File for "@devtools/plugin-catalog-common"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts
import { BasicPermission } from '@devtools/plugin-permission-common';
import { ResourcePermission } from '@devtools/plugin-permission-common';

// @alpha
export const catalogEntityCreatePermission: BasicPermission;

// @alpha
export const catalogEntityDeletePermission: ResourcePermission<'catalog-entity'>;

// @alpha
export type CatalogEntityPermission = ResourcePermission<
  typeof RESOURCE_TYPE_CATALOG_ENTITY
>;

// @alpha
export const catalogEntityReadPermission: ResourcePermission<'catalog-entity'>;

// @alpha
export const catalogEntityRefreshPermission: ResourcePermission<'catalog-entity'>;

// @alpha
export const catalogEntityValidatePermission: BasicPermission;

// @alpha
export const catalogLocationAnalyzePermission: BasicPermission;

// @alpha
export const catalogLocationCreatePermission: BasicPermission;

// @alpha
export const catalogLocationDeletePermission: BasicPermission;

// @alpha
export const catalogLocationReadPermission: BasicPermission;

// @alpha
export const catalogPermissions: (
  | BasicPermission
  | ResourcePermission<'catalog-entity'>
)[];

// @alpha
export const RESOURCE_TYPE_CATALOG_ENTITY = 'catalog-entity';

// (No @packageDocumentation comment for this package)
```