## API Report File for "@devtools/plugin-catalog-node"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts
import { CatalogApi } from '@devtools/catalog-client';
import { CatalogProcessor } from '@devtools/plugin-catalog-node';
import { CatalogProcessorParser } from '@devtools/plugin-catalog-node';
import { EntitiesSearchFilter } from '@devtools/plugin-catalog-node';
import { Entity } from '@devtools/catalog-model';
import { EntityProvider } from '@devtools/plugin-catalog-node';
import { ExtensionPoint } from '@devtools/backend-plugin-api';
import { LocationAnalyzer } from '@devtools/plugin-catalog-node';
import { Permission } from '@devtools/plugin-permission-common';
import { PermissionRule } from '@devtools/plugin-permission-node';
import { PermissionRuleParams } from '@devtools/plugin-permission-common';
import { PlaceholderResolver } from '@devtools/plugin-catalog-node';
import { ScmLocationAnalyzer } from '@devtools/plugin-catalog-node';
import { ServiceRef } from '@devtools/backend-plugin-api';
import { Validators } from '@devtools/catalog-model';

// @alpha (undocumented)
export interface CatalogAnalysisExtensionPoint {
  addScmLocationAnalyzer(analyzer: ScmLocationAnalyzer): void;
  setLocationAnalyzer(
    analyzerOrFactory:
      | LocationAnalyzer
      | ((options: { scmLocationAnalyzers: ScmLocationAnalyzer[] }) => Promise<{
          locationAnalyzer: LocationAnalyzer;
        }>),
  ): void;
}

// @alpha (undocumented)
export const catalogAnalysisExtensionPoint: ExtensionPoint<CatalogAnalysisExtensionPoint>;

// @alpha (undocumented)
export interface CatalogLocationsExtensionPoint {
  setAllowedLocationTypes(locationTypes: Array<string>): void;
}

// @alpha (undocumented)
export const catalogLocationsExtensionPoint: ExtensionPoint<CatalogLocationsExtensionPoint>;

// @alpha (undocumented)
export interface CatalogModelExtensionPoint {
  setEntityDataParser(parser: CatalogProcessorParser): void;
  setFieldValidators(validators: Partial<Validators>): void;
}

// @alpha (undocumented)
export const catalogModelExtensionPoint: ExtensionPoint<CatalogModelExtensionPoint>;

// @alpha (undocumented)
export interface CatalogPermissionExtensionPoint {
  // (undocumented)
  addPermissionRules(
    ...rules: Array<
      CatalogPermissionRuleInput | Array<CatalogPermissionRuleInput>
    >
  ): void;
  // (undocumented)
  addPermissions(...permissions: Array<Permission | Array<Permission>>): void;
}

// @alpha (undocumented)
export const catalogPermissionExtensionPoint: ExtensionPoint<CatalogPermissionExtensionPoint>;

// @alpha (undocumented)
export type CatalogPermissionRuleInput<
  TParams extends PermissionRuleParams = PermissionRuleParams,
> = PermissionRule<Entity, EntitiesSearchFilter, 'catalog-entity', TParams>;

// @alpha (undocumented)
export interface CatalogProcessingExtensionPoint {
  // (undocumented)
  addEntityProvider(
    ...providers: Array<EntityProvider | Array<EntityProvider>>
  ): void;
  // (undocumented)
  addPlaceholderResolver(key: string, resolver: PlaceholderResolver): void;
  // (undocumented)
  addProcessor(
    ...processors: Array<CatalogProcessor | Array<CatalogProcessor>>
  ): void;
  // (undocumented)
  setOnProcessingErrorHandler(
    handler: (event: {
      unprocessedEntity: Entity;
      errors: Error[];
    }) => Promise<void> | void,
  ): void;
}

// @alpha (undocumented)
export const catalogProcessingExtensionPoint: ExtensionPoint<CatalogProcessingExtensionPoint>;

// @alpha @deprecated (undocumented)
export const catalogServiceRef: ServiceRef<CatalogApi, 'plugin', 'singleton'>;

// (No @packageDocumentation comment for this package)
```
