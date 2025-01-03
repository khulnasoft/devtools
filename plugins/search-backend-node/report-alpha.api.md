## API Report File for "@devtools/plugin-search-backend-node"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts
import { DocumentTypeInfo } from '@devtools/plugin-search-common';
import { ExtensionPoint } from '@devtools/backend-plugin-api';
import { RegisterCollatorParameters } from '@devtools/plugin-search-backend-node';
import { RegisterDecoratorParameters } from '@devtools/plugin-search-backend-node';
import { SearchEngine } from '@devtools/plugin-search-backend-node';
import { ServiceRef } from '@devtools/backend-plugin-api';

// @alpha
export interface SearchEngineRegistryExtensionPoint {
  // (undocumented)
  setSearchEngine(searchEngine: SearchEngine): void;
}

// @alpha
export const searchEngineRegistryExtensionPoint: ExtensionPoint<SearchEngineRegistryExtensionPoint>;

// @alpha
export interface SearchIndexRegistryExtensionPoint {
  // (undocumented)
  addCollator(options: RegisterCollatorParameters): void;
  // (undocumented)
  addDecorator(options: RegisterDecoratorParameters): void;
}

// @alpha
export const searchIndexRegistryExtensionPoint: ExtensionPoint<SearchIndexRegistryExtensionPoint>;

// @alpha
export interface SearchIndexService {
  getDocumentTypes(): Record<string, DocumentTypeInfo>;
  init(options: SearchIndexServiceInitOptions): void;
  start(): Promise<void>;
  stop(): Promise<void>;
}

// @alpha
export type SearchIndexServiceInitOptions = {
  searchEngine: SearchEngine;
  collators: RegisterCollatorParameters[];
  decorators: RegisterDecoratorParameters[];
};

// @alpha
export const searchIndexServiceRef: ServiceRef<
  SearchIndexService,
  'plugin',
  'singleton'
>;

// (No @packageDocumentation comment for this package)
```
