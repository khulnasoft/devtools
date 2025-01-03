/*
 * Copyright 2022 The Devtools Authors
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
import { Config } from '@devtools/config';
import { DocsBuildStrategy } from '@devtools/plugin-techdocs-node';

export class DefaultDocsBuildStrategy implements DocsBuildStrategy {
  private readonly config: Config;

  private constructor(config: Config) {
    this.config = config;
  }

  static fromConfig(config: Config): DefaultDocsBuildStrategy {
    return new DefaultDocsBuildStrategy(config);
  }

  async shouldBuild(_: { entity: Entity }): Promise<boolean> {
    return [undefined, 'local'].includes(
      this.config.getOptionalString('techdocs.builder'),
    );
  }
}
