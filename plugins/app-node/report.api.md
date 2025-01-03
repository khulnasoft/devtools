## API Report File for "@devtools/plugin-app-node"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts
import { ConfigSchema } from '@devtools/config-loader';
import { ExtensionPoint } from '@devtools/backend-plugin-api';
import { Handler } from 'express';

// @public
export interface ConfigSchemaExtensionPoint {
  setConfigSchema(configSchema: ConfigSchema): void;
}

// @public
export const configSchemaExtensionPoint: ExtensionPoint<ConfigSchemaExtensionPoint>;

// @public
export function loadCompiledConfigSchema(
  appDistDir: string,
): Promise<ConfigSchema | undefined>;

// @public
export interface StaticFallbackHandlerExtensionPoint {
  setStaticFallbackHandler(handler: Handler): void;
}

// @public
export const staticFallbackHandlerExtensionPoint: ExtensionPoint<StaticFallbackHandlerExtensionPoint>;
```
