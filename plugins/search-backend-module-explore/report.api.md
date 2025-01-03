## API Report File for "@devtools/plugin-search-backend-module-explore"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts
/// <reference types="node" />

import { AuthService } from '@devtools/backend-plugin-api';
import { BackendFeature } from '@devtools/backend-plugin-api';
import { Config } from '@devtools/config';
import { DiscoveryService } from '@devtools/backend-plugin-api';
import { DocumentCollatorFactory } from '@devtools/plugin-search-common';
import { ExploreTool } from '@devtools-community/plugin-explore-common';
import { IndexableDocument } from '@devtools/plugin-search-common';
import { LoggerService } from '@devtools/backend-plugin-api';
import { Readable } from 'stream';
import { TokenManager } from '@devtools/backend-common';

// @public
const _default: BackendFeature;
export default _default;

// @public
export interface ToolDocument extends IndexableDocument, ExploreTool {}

// @public @deprecated
export class ToolDocumentCollatorFactory implements DocumentCollatorFactory {
  // (undocumented)
  execute(): AsyncGenerator<ToolDocument>;
  // (undocumented)
  static fromConfig(
    _config: Config,
    options: ToolDocumentCollatorFactoryOptions,
  ): ToolDocumentCollatorFactory;
  // (undocumented)
  getCollator(): Promise<Readable>;
  // (undocumented)
  readonly type: string;
}

// @public @deprecated (undocumented)
export type ToolDocumentCollatorFactoryOptions = {
  discovery: DiscoveryService;
  logger: LoggerService;
  tokenManager?: TokenManager;
  auth?: AuthService;
};
```
