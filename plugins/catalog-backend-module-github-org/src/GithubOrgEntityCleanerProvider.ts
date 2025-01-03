/*
 * Copyright 2024 The Devtools Authors
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
import { LoggerService } from '@devtools/backend-plugin-api';
import {
  EntityProvider,
  EntityProviderConnection,
} from '@devtools/plugin-catalog-node';

export class GithubOrgEntityCleanerProvider implements EntityProvider {
  logger: LoggerService;
  constructor(private readonly options: { id: string; logger: LoggerService }) {
    this.logger = options.logger.child({ target: this.getProviderName() });
  }

  getProviderName() {
    return `GithubOrgEntityProvider:${this.options.id}`;
  }
  async connect(connection: EntityProviderConnection) {
    // Clean up any existing entities
    connection
      .applyMutation({
        type: 'full',
        entities: [],
      })
      .catch(error => {
        this.logger.error('Failed to clean up entities', error);
      });
  }
}
