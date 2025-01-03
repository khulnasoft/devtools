/*
 * Copyright 2021 The Devtools Authors
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
import { AnnotateScmSlugEntityProcessor } from './AnnotateScmSlugEntityProcessor';
import { LocationSpec } from '@devtools/plugin-catalog-common';

describe('AnnotateScmSlugEntityProcessor', () => {
  describe('github', () => {
    it('adds annotation', async () => {
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
          'https://github.com/khulnasoft/devtools/blob/master/catalog-info.yaml',
      };

      const processor = AnnotateScmSlugEntityProcessor.fromConfig(
        new ConfigReader({}),
      );

      expect(await processor.preProcessEntity(entity, location)).toEqual({
        apiVersion: 'devtools.khulnasoft.com/v1alpha1',
        kind: 'Component',
        metadata: {
          name: 'my-component',
          annotations: {
            'github.com/project-slug': 'khulnasoft/devtools',
          },
        },
      });
    });

    it('does not override existing annotation', async () => {
      const entity: Entity = {
        apiVersion: 'devtools.khulnasoft.com/v1alpha1',
        kind: 'Component',
        metadata: {
          name: 'my-component',
          annotations: {
            'github.com/project-slug': 'devtools/community',
          },
        },
      };
      const location: LocationSpec = {
        type: 'url',
        target:
          'https://github.com/khulnasoft/devtools/blob/master/catalog-info.yaml',
      };

      const processor = AnnotateScmSlugEntityProcessor.fromConfig(
        new ConfigReader({}),
      );

      expect(await processor.preProcessEntity(entity, location)).toEqual({
        apiVersion: 'devtools.khulnasoft.com/v1alpha1',
        kind: 'Component',
        metadata: {
          name: 'my-component',
          annotations: {
            'github.com/project-slug': 'devtools/community',
          },
        },
      });
    });

    it('should not add annotation for other providers', async () => {
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
          'https://not-in-mock-config.example.com/khulnasoft/devtools/-/blob/master/catalog-info.yaml',
      };

      const processor = AnnotateScmSlugEntityProcessor.fromConfig(
        new ConfigReader({}),
      );

      expect(await processor.preProcessEntity(entity, location)).toEqual({
        apiVersion: 'devtools.khulnasoft.com/v1alpha1',
        kind: 'Component',
        metadata: {
          name: 'my-component',
        },
      });
    });

    it('should only process applicable kinds', async () => {
      const component: Entity = {
        apiVersion: 'devtools.khulnasoft.com/v1alpha1',
        kind: 'Component',
        metadata: {
          name: 'my-component',
        },
      };

      const api: Entity = {
        apiVersion: 'devtools.khulnasoft.com/v1alpha1',
        kind: 'API',
        metadata: {
          name: 'my-component',
        },
      };

      const system: Entity = {
        apiVersion: 'devtools.khulnasoft.com/v1alpha1',
        kind: 'System',
        metadata: {
          name: 'my-component',
        },
      };

      const location: LocationSpec = {
        type: 'url',
        target:
          'https://github.com/khulnasoft/devtools/blob/master/catalog-info.yaml',
      };

      const processor = AnnotateScmSlugEntityProcessor.fromConfig(
        new ConfigReader({}),
        { kinds: ['API', 'System'] },
      );

      expect(await processor.preProcessEntity(component, location)).toEqual({
        apiVersion: 'devtools.khulnasoft.com/v1alpha1',
        kind: 'Component',
        metadata: {
          name: 'my-component',
        },
      });

      expect(await processor.preProcessEntity(api, location)).toEqual({
        apiVersion: 'devtools.khulnasoft.com/v1alpha1',
        kind: 'API',
        metadata: {
          name: 'my-component',
          annotations: {
            'github.com/project-slug': 'khulnasoft/devtools',
          },
        },
      });

      expect(await processor.preProcessEntity(system, location)).toEqual({
        apiVersion: 'devtools.khulnasoft.com/v1alpha1',
        kind: 'System',
        metadata: {
          name: 'my-component',
          annotations: {
            'github.com/project-slug': 'khulnasoft/devtools',
          },
        },
      });
    });
  });
  describe('gitlab', () => {
    it('adds annotation', async () => {
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
          'https://gitlab.com/group/subgroup/project/-/blob/master/catalog-info.yaml',
      };

      const processor = AnnotateScmSlugEntityProcessor.fromConfig(
        new ConfigReader({}),
      );

      expect(await processor.preProcessEntity(entity, location)).toEqual({
        apiVersion: 'devtools.khulnasoft.com/v1alpha1',
        kind: 'Component',
        metadata: {
          name: 'my-component',
          annotations: {
            'gitlab.com/project-slug': 'group/subgroup/project',
          },
        },
      });
    });

    it('does not override existing annotation', async () => {
      const entity: Entity = {
        apiVersion: 'devtools.khulnasoft.com/v1alpha1',
        kind: 'Component',
        metadata: {
          name: 'my-component',
          annotations: {
            'gitlab.com/project-slug': 'devtools/community',
          },
        },
      };
      const location: LocationSpec = {
        type: 'url',
        target:
          'https://gitlab.com/group/subgroup/project/-/blob/master/catalog-info.yaml',
      };

      const processor = AnnotateScmSlugEntityProcessor.fromConfig(
        new ConfigReader({}),
      );

      expect(await processor.preProcessEntity(entity, location)).toEqual({
        apiVersion: 'devtools.khulnasoft.com/v1alpha1',
        kind: 'Component',
        metadata: {
          name: 'my-component',
          annotations: {
            'gitlab.com/project-slug': 'devtools/community',
          },
        },
      });
    });

    it('should not add annotation for other providers', async () => {
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
          'https://not-in-mock-config.example.com/group/subgroup/project/-/blob/master/catalog-info.yaml',
      };

      const processor = AnnotateScmSlugEntityProcessor.fromConfig(
        new ConfigReader({}),
      );

      expect(await processor.preProcessEntity(entity, location)).toEqual({
        apiVersion: 'devtools.khulnasoft.com/v1alpha1',
        kind: 'Component',
        metadata: {
          name: 'my-component',
        },
      });
    });
  });

  describe('azure', () => {
    it('adds annotation', async () => {
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
          'https://dev.azure.com/organization/project/_git/repository?path=%2Fcatalog-info.yaml',
      };

      const processor = AnnotateScmSlugEntityProcessor.fromConfig(
        new ConfigReader({}),
      );

      expect(await processor.preProcessEntity(entity, location)).toEqual({
        apiVersion: 'devtools.khulnasoft.com/v1alpha1',
        kind: 'Component',
        metadata: {
          name: 'my-component',
          annotations: {
            'dev.azure.com/project-repo': 'project/repository',
          },
        },
      });
    });

    it('does not override existing annotation', async () => {
      const entity: Entity = {
        apiVersion: 'devtools.khulnasoft.com/v1alpha1',
        kind: 'Component',
        metadata: {
          name: 'my-component',
          annotations: {
            'dev.azure.com/project-repo': 'myproj/myrepo',
          },
        },
      };
      const location: LocationSpec = {
        type: 'url',
        target:
          'https://dev.azure.com/organization/project/_git/repository?path=%2Fcatalog-info.yaml',
      };

      const processor = AnnotateScmSlugEntityProcessor.fromConfig(
        new ConfigReader({}),
      );

      expect(await processor.preProcessEntity(entity, location)).toEqual({
        apiVersion: 'devtools.khulnasoft.com/v1alpha1',
        kind: 'Component',
        metadata: {
          name: 'my-component',
          annotations: {
            'dev.azure.com/project-repo': 'myproj/myrepo',
          },
        },
      });
    });

    it('should not add annotation for other providers', async () => {
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
          'https://not-in-mock-config.example.com/khulnasoft/devtools/-/blob/master/catalog-info.yaml',
      };

      const processor = AnnotateScmSlugEntityProcessor.fromConfig(
        new ConfigReader({}),
      );

      expect(await processor.preProcessEntity(entity, location)).toEqual({
        apiVersion: 'devtools.khulnasoft.com/v1alpha1',
        kind: 'Component',
        metadata: {
          name: 'my-component',
        },
      });
    });

    it('should only process applicable kinds', async () => {
      const component: Entity = {
        apiVersion: 'devtools.khulnasoft.com/v1alpha1',
        kind: 'Component',
        metadata: {
          name: 'my-component',
        },
      };

      const api: Entity = {
        apiVersion: 'devtools.khulnasoft.com/v1alpha1',
        kind: 'API',
        metadata: {
          name: 'my-component',
        },
      };

      const system: Entity = {
        apiVersion: 'devtools.khulnasoft.com/v1alpha1',
        kind: 'System',
        metadata: {
          name: 'my-component',
        },
      };

      const location: LocationSpec = {
        type: 'url',
        target:
          'https://dev.azure.com/organization/project/_git/repository?path=%2Fcatalog-info.yaml',
      };

      const processor = AnnotateScmSlugEntityProcessor.fromConfig(
        new ConfigReader({}),
        { kinds: ['API', 'Component'] },
      );

      expect(await processor.preProcessEntity(component, location)).toEqual({
        apiVersion: 'devtools.khulnasoft.com/v1alpha1',
        kind: 'Component',
        metadata: {
          name: 'my-component',
          annotations: {
            'dev.azure.com/project-repo': 'project/repository',
          },
        },
      });

      expect(await processor.preProcessEntity(api, location)).toEqual({
        apiVersion: 'devtools.khulnasoft.com/v1alpha1',
        kind: 'API',
        metadata: {
          name: 'my-component',
          annotations: {
            'dev.azure.com/project-repo': 'project/repository',
          },
        },
      });

      expect(await processor.preProcessEntity(system, location)).toEqual({
        apiVersion: 'devtools.khulnasoft.com/v1alpha1',
        kind: 'System',
        metadata: {
          name: 'my-component',
        },
      });
    });
  });
});
