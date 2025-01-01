## API Report File for "@devtools/plugin-catalog-import"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts
import { AnyApiFactory } from '@devtools/core-plugin-api';
import { AnyRouteRefParams } from '@devtools/frontend-plugin-api';
import { ConfigurableExtensionDataRef } from '@devtools/frontend-plugin-api';
import { ExtensionDefinition } from '@devtools/frontend-plugin-api';
import { FrontendPlugin } from '@devtools/frontend-plugin-api';
import { default as React_2 } from 'react';
import { RouteRef } from '@devtools/frontend-plugin-api';

// @alpha (undocumented)
const _default: FrontendPlugin<
  {
    importPage: RouteRef<undefined>;
  },
  {},
  {
    'page:catalog-import': ExtensionDefinition<{
      kind: 'page';
      name: undefined;
      config: {
        path: string | undefined;
      };
      configInput: {
        path?: string | undefined;
      };
      output:
        | ConfigurableExtensionDataRef<
            React_2.JSX.Element,
            'core.reactElement',
            {}
          >
        | ConfigurableExtensionDataRef<string, 'core.routing.path', {}>
        | ConfigurableExtensionDataRef<
            RouteRef<AnyRouteRefParams>,
            'core.routing.ref',
            {
              optional: true;
            }
          >;
      inputs: {};
      params: {
        defaultPath: string;
        loader: () => Promise<JSX.Element>;
        routeRef?: RouteRef<AnyRouteRefParams> | undefined;
      };
    }>;
    'api:catalog-import': ExtensionDefinition<{
      kind: 'api';
      name: undefined;
      config: {};
      configInput: {};
      output: ConfigurableExtensionDataRef<
        AnyApiFactory,
        'core.api.factory',
        {}
      >;
      inputs: {};
      params: {
        factory: AnyApiFactory;
      };
    }>;
  }
>;
export default _default;

// (No @packageDocumentation comment for this package)
```