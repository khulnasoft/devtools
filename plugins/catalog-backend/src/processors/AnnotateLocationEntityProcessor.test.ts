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

import { Entity } from '@devtools/catalog-model';
import { ConfigReader } from '@devtools/config';
import { ScmIntegrations } from '@devtools/integration';
import { LocationSpec } from '@devtools/plugin-catalog-common';
import { AnnotateLocationEntityProcessor } from './AnnotateLocationEntityProcessor';

describe('AnnotateLocationEntityProcessor', () => {
  describe('preProcessEntity', () => {
    it('adds annotations', async () => {
      const entity: Entity = {
        apiVersion: 'devtools.khulnasoft.com/v1alpha1',
        kind: 'Component',
        metadata: {
          name: 'my-component',
        },
      };

      const location: LocationSpec = {
        type: 'url',
        target:
          'https://github.com/khulnasoft/devtools/blob/master/packages/app/catalog-info.yaml',
      };
      const originLocation: LocationSpec = {
        type: 'url',
        target:
          'https://github.com/khulnasoft/devtools/blob/master/catalog-info.yaml',
      };

      const integrations = ScmIntegrations.fromConfig(new ConfigReader({}));
      const processor = new AnnotateLocationEntityProcessor({ integrations });

      expect(
        await processor.preProcessEntity(
          entity,
          location,
          () => {},
          originLocation,
        ),
      ).toEqual({
        apiVersion: 'devtools.khulnasoft.com/v1alpha1',
        kind: 'Component',
        metadata: {
          name: 'my-component',
          annotations: {
            'devtools.khulnasoft.com/managed-by-location':
              'url:https://github.com/khulnasoft/devtools/blob/master/packages/app/catalog-info.yaml',
            'devtools.khulnasoft.com/managed-by-origin-location':
              'url:https://github.com/khulnasoft/devtools/blob/master/catalog-info.yaml',
            'devtools.khulnasoft.com/view-url':
              'https://github.com/khulnasoft/devtools/blob/master/packages/app/catalog-info.yaml',
            'devtools.khulnasoft.com/edit-url':
              'https://github.com/khulnasoft/devtools/edit/master/packages/app/catalog-info.yaml',
            'devtools.khulnasoft.com/source-location':
              'url:https://github.com/khulnasoft/devtools/tree/master/packages/app/',
          },
        },
      });
    });

    it('does not override existing annotations', async () => {
      const entity: Entity = {
        apiVersion: 'devtools.khulnasoft.com/v1alpha1',
        kind: 'Component',
        metadata: {
          name: 'my-component',
          annotations: {
            'devtools.khulnasoft.com/view-url': 'https://example.com/view',
            'devtools.khulnasoft.com/edit-url': 'https://example.com/edit',
            'devtools.khulnasoft.com/source-location': 'url:https://example.com/source',
          },
        },
      };

      const location: LocationSpec = {
        type: 'url',
        target:
          'https://github.com/khulnasoft/devtools/blob/master/packages/app/catalog-info.yaml',
      };
      const originLocation: LocationSpec = {
        type: 'url',
        target:
          'https://github.com/khulnasoft/devtools/blob/master/catalog-info.yaml',
      };

      const integrations = ScmIntegrations.fromConfig(new ConfigReader({}));
      const processor = new AnnotateLocationEntityProcessor({ integrations });

      expect(
        await processor.preProcessEntity(
          entity,
          location,
          () => {},
          originLocation,
        ),
      ).toEqual({
        apiVersion: 'devtools.khulnasoft.com/v1alpha1',
        kind: 'Component',
        metadata: {
          name: 'my-component',
          annotations: {
            'devtools.khulnasoft.com/managed-by-location':
              'url:https://github.com/khulnasoft/devtools/blob/master/packages/app/catalog-info.yaml',
            'devtools.khulnasoft.com/managed-by-origin-location':
              'url:https://github.com/khulnasoft/devtools/blob/master/catalog-info.yaml',
            'devtools.khulnasoft.com/view-url': 'https://example.com/view',
            'devtools.khulnasoft.com/edit-url': 'https://example.com/edit',
            'devtools.khulnasoft.com/source-location': 'url:https://example.com/source',
          },
        },
      });
    });

    it('does not output view, edit or source location annotations for non url type locations', async () => {
      const entity: Entity = {
        apiVersion: 'devtools.khulnasoft.com/v1alpha1',
        kind: 'Component',
        metadata: {
          name: 'my-component',
        },
      };

      const location: LocationSpec = {
        type: 'file',
        target: './test.yaml',
      };
      const originLocation: LocationSpec = {
        type: 'file',
        target: './test.yaml',
      };

      const integrations = ScmIntegrations.fromConfig(new ConfigReader({}));
      const processor = new AnnotateLocationEntityProcessor({ integrations });

      expect(
        await processor.preProcessEntity(
          entity,
          location,
          () => {},
          originLocation,
        ),
      ).toEqual({
        apiVersion: 'devtools.khulnasoft.com/v1alpha1',
        kind: 'Component',
        metadata: {
          name: 'my-component',
          annotations: {
            'devtools.khulnasoft.com/managed-by-location': 'file:./test.yaml',
            'devtools.khulnasoft.com/managed-by-origin-location': 'file:./test.yaml',
          },
        },
      });
    });
    it('should not render edit button in about for invalid or git hash commit branch', async () => {
      const entity: Entity = {
        apiVersion: 'devtools.khulnasoft.com/v1alpha1',
        kind: 'Component',
        metadata: {
          name: 'my-component',
        },
      };

      const location: LocationSpec = {
        type: 'url',
        target:
          'https://github.com/khulnasoft/devtools/blob/f1ba2bc6097a757c2827ff97fa301cff626de137/packages/app/catalog-info.yaml',
      };
      const originLocation: LocationSpec = {
        type: 'url',
        target:
          'https://github.com/khulnasoft/devtools/blob/f1ba2bc6097a757c2827ff97fa301cff626de137/catalog-info.yaml',
      };

      const integrations = ScmIntegrations.fromConfig(new ConfigReader({}));
      const processor = new AnnotateLocationEntityProcessor({ integrations });

      expect(
        await processor.preProcessEntity(
          entity,
          location,
          () => {},
          originLocation,
        ),
      ).toEqual({
        apiVersion: 'devtools.khulnasoft.com/v1alpha1',
        kind: 'Component',
        metadata: {
          name: 'my-component',
          annotations: {
            'devtools.khulnasoft.com/managed-by-location':
              'url:https://github.com/khulnasoft/devtools/blob/f1ba2bc6097a757c2827ff97fa301cff626de137/packages/app/catalog-info.yaml',
            'devtools.khulnasoft.com/managed-by-origin-location':
              'url:https://github.com/khulnasoft/devtools/blob/f1ba2bc6097a757c2827ff97fa301cff626de137/catalog-info.yaml',
            'devtools.khulnasoft.com/view-url':
              'https://github.com/khulnasoft/devtools/blob/f1ba2bc6097a757c2827ff97fa301cff626de137/packages/app/catalog-info.yaml',
            'devtools.khulnasoft.com/source-location':
              'url:https://github.com/khulnasoft/devtools/tree/f1ba2bc6097a757c2827ff97fa301cff626de137/packages/app/',
          },
        },
      });
    });
  });
});
