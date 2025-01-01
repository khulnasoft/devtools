## API Report File for "@devtools/frontend-defaults"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts
import { ConfigApi } from '@devtools/frontend-plugin-api';
import { CreateAppRouteBinder } from '@devtools/frontend-app-api';
import { FrontendFeature } from '@devtools/frontend-app-api';
import { JSX as JSX_2 } from 'react';
import { default as React_2 } from 'react';
import { ReactNode } from 'react';

// @public
export function createApp(options?: CreateAppOptions): {
  createRoot(): JSX_2.Element;
};

// @public
export interface CreateAppFeatureLoader {
  getLoaderName(): string;
  load(options: { config: ConfigApi }): Promise<{
    features: FrontendFeature[];
  }>;
}

// @public
export interface CreateAppOptions {
  // (undocumented)
  bindRoutes?(context: { bind: CreateAppRouteBinder }): void;
  // (undocumented)
  configLoader?: () => Promise<{
    config: ConfigApi;
  }>;
  // (undocumented)
  features?: (FrontendFeature | CreateAppFeatureLoader)[];
  loadingComponent?: ReactNode;
}

// @public
export function createPublicSignInApp(options?: CreateAppOptions): {
  createRoot(): React_2.JSX.Element;
};
```