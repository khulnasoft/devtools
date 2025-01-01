/*
 * Copyright 2020 The Devtools Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { type EntityFilterQuery } from '@devtools/catalog-client';
import { Entity } from '@devtools/catalog-model';
import {
  catalogApiRef,
  entityPresentationApiRef,
} from '@devtools/plugin-catalog-react';
import { catalogApiMock } from '@devtools/plugin-catalog-react/testUtils';
import { renderInTestApp, TestApiProvider } from '@devtools/test-utils';
import { ScaffolderRJSFFieldProps as FieldProps } from '@devtools/plugin-scaffolder-react';
import React from 'react';
import { OwnerPicker } from './OwnerPicker';
import { DefaultEntityPresentationApi } from '@devtools/plugin-catalog';

const makeEntity = (kind: string, namespace: string, name: string): Entity => ({
  apiVersion: 'devtools.khulnasoft.com/v1beta1',
  kind,
  metadata: { namespace, name },
});

describe('<OwnerPicker />', () => {
  const entities: Entity[] = [
    makeEntity('Group', 'default', 'team-a'),
    makeEntity('Group', 'default', 'squad-b'),
  ];
  const onChange = jest.fn();
  const schema = {};
  const required = false;
  let uiSchema: {
    'ui:options': {
      allowedKinds?: string[];
      defaultKind?: string;
      allowArbitraryValues?: boolean;
      defaultNamespace?: string | false;
      catalogFilter?: EntityFilterQuery;
    };
  };
  const rawErrors: string[] = [];
  const formData = undefined;

  let props: FieldProps<string>;

  const catalogApi = catalogApiMock.mock({
    getEntities: jest.fn(async () => ({ items: entities })),
  });
  let Wrapper: React.ComponentType<React.PropsWithChildren<{}>>;

  beforeEach(() => {
    Wrapper = ({ children }: { children?: React.ReactNode }) => (
      <TestApiProvider
        apis={[
          [catalogApiRef, catalogApi],
          [
            entityPresentationApiRef,
            DefaultEntityPresentationApi.create({ catalogApi }),
          ],
        ]}
      >
        {children}
      </TestApiProvider>
    );
  });

  afterEach(() => jest.resetAllMocks());

  describe('without catalogFilter and allowedKinds', () => {
    beforeEach(() => {
      uiSchema = { 'ui:options': {} };
      props = {
        onChange,
        schema,
        required,
        uiSchema,
        rawErrors,
        formData,
      } as unknown as FieldProps<any>;
    });

    it('searches for users and groups', async () => {
      await renderInTestApp(
        <Wrapper>
          <OwnerPicker {...props} />
        </Wrapper>,
      );

      expect(catalogApi.getEntities).toHaveBeenCalledWith(
        expect.objectContaining({
          filter: {
            kind: ['Group', 'User'],
          },
          fields: [
            'metadata.name',
            'metadata.namespace',
            'metadata.title',
            'kind',
          ],
        }),
      );
    });
  });

  describe('with allowedKinds', () => {
    beforeEach(() => {
      uiSchema = { 'ui:options': { allowedKinds: ['User'] } };
      props = {
        onChange,
        schema,
        required,
        uiSchema,
        rawErrors,
        formData,
      } as unknown as FieldProps<any>;
    });

    it('searches for users', async () => {
      await renderInTestApp(
        <Wrapper>
          <OwnerPicker {...props} />
        </Wrapper>,
      );

      expect(catalogApi.getEntities).toHaveBeenCalledWith(
        expect.objectContaining({
          filter: {
            kind: ['User'],
          },
          fields: [
            'metadata.name',
            'metadata.namespace',
            'metadata.title',
            'kind',
          ],
        }),
      );
    });
  });

  describe('with catalogFilter', () => {
    beforeEach(() => {
      uiSchema = {
        'ui:options': {
          catalogFilter: [
            {
              kind: ['Group'],
              'spec.type': 'team',
            },
          ],
        },
      };
      props = {
        onChange,
        schema,
        required,
        uiSchema,
        rawErrors,
        formData,
      } as unknown as FieldProps<any>;

      catalogApi.getEntities.mockResolvedValue({ items: entities });
    });

    it('searches for group entities of type team', async () => {
      await renderInTestApp(
        <Wrapper>
          <OwnerPicker {...props} />
        </Wrapper>,
      );

      expect(catalogApi.getEntities).toHaveBeenCalledWith(
        expect.objectContaining({
          filter: [
            {
              kind: ['Group'],
              'spec.type': 'team',
            },
          ],
        }),
      );
    });
  });

  describe('catalogFilter should take precedence over allowedKinds', () => {
    beforeEach(() => {
      uiSchema = {
        'ui:options': {
          allowedKinds: ['User'],
          catalogFilter: [
            {
              kind: ['Group', 'User'],
            },
            {
              'spec.type': ['team', 'business-unit'],
            },
          ],
        },
      };
      props = {
        onChange,
        schema,
        required,
        uiSchema,
        rawErrors,
        formData,
      } as unknown as FieldProps<any>;
    });

    it('searches for users and groups or teams and business units', async () => {
      await renderInTestApp(
        <Wrapper>
          <OwnerPicker {...props} />
        </Wrapper>,
      );

      expect(catalogApi.getEntities).toHaveBeenCalledWith(
        expect.objectContaining({
          filter: [
            {
              kind: ['Group', 'User'],
            },
            {
              'spec.type': ['team', 'business-unit'],
            },
          ],
        }),
      );
    });
  });
});
