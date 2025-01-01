## API Report File for "@devtools/plugin-catalog-react"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts
import { ApiFactory } from '@devtools/frontend-plugin-api';
import { ApiMock } from '@devtools/frontend-test-utils';
import { CatalogApi } from '@devtools/catalog-client';
import { DefaultEntityFilters } from '@devtools/plugin-catalog-react';
import { Entity } from '@devtools/catalog-model';
import { EntityListContextProps } from '@devtools/plugin-catalog-react';
import { PropsWithChildren } from 'react';
import { default as React_2 } from 'react';

// @public
export function catalogApiMock(options?: { entities?: Entity[] }): CatalogApi;

// @public
export namespace catalogApiMock {
  const factory: (options?: {
    entities?: Entity[];
  }) => ApiFactory<CatalogApi, CatalogApi, {}>;
  const mock: (
    partialImpl?: Partial<CatalogApi> | undefined,
  ) => ApiMock<CatalogApi>;
}

// @public
export function MockEntityListContextProvider<
  T extends DefaultEntityFilters = DefaultEntityFilters,
>(
  props: PropsWithChildren<{
    value?: Partial<EntityListContextProps<T>>;
  }>,
): React_2.JSX.Element;
```