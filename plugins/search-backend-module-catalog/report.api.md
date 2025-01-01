## API Report File for "@devtools/plugin-search-backend-module-catalog"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts
import { BackendFeature } from '@devtools/backend-plugin-api';
import { CatalogEntityDocument } from '@devtools/plugin-catalog-common';
import { Entity } from '@devtools/catalog-model';
import { ExtensionPoint } from '@devtools/backend-plugin-api';

// @public (undocumented)
export type CatalogCollatorEntityTransformer = (
  entity: Entity,
) => Omit<CatalogEntityDocument, 'location' | 'authorization'>;

// @public
export type CatalogCollatorExtensionPoint = {
  setEntityTransformer(transformer: CatalogCollatorEntityTransformer): void;
};

// @public
export const catalogCollatorExtensionPoint: ExtensionPoint<CatalogCollatorExtensionPoint>;

// @public (undocumented)
export const defaultCatalogCollatorEntityTransformer: CatalogCollatorEntityTransformer;

// @public
const searchModuleCatalogCollator: BackendFeature;
export default searchModuleCatalogCollator;
```