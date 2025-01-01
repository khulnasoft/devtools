## API Report File for "@devtools/plugin-catalog-common"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts
import { Entity } from '@devtools/catalog-model';
import { IndexableDocument } from '@devtools/plugin-search-common';

// @public (undocumented)
export type AnalyzeLocationEntityField = {
  field: string;
  state:
    | 'analysisSuggestedValue'
    | 'analysisSuggestedNoValue'
    | 'needsUserInput';
  value: string | null;
  description: string;
};

// @public
export type AnalyzeLocationExistingEntity = {
  location: LocationSpec;
  isRegistered: boolean;
  entity: Entity;
};

// @public
export type AnalyzeLocationGenerateEntity = {
  entity: RecursivePartial<Entity>;
  fields: AnalyzeLocationEntityField[];
};

// @public (undocumented)
export type AnalyzeLocationRequest = {
  location: LocationSpec;
  catalogFilename?: string;
};

// @public (undocumented)
export type AnalyzeLocationResponse = {
  existingEntityFiles: AnalyzeLocationExistingEntity[];
  generateEntities: AnalyzeLocationGenerateEntity[];
};

// @public
export interface CatalogEntityDocument extends IndexableDocument {
  // @deprecated (undocumented)
  componentType: string;
  // (undocumented)
  kind: string;
  // (undocumented)
  lifecycle: string;
  // (undocumented)
  namespace: string;
  // (undocumented)
  owner: string;
  // (undocumented)
  type: string;
}

// @public
export type LocationSpec = {
  type: string;
  target: string;
  presence?: 'optional' | 'required';
};
```