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
import { createPermission } from '@devtools/plugin-permission-common';

/**
 * This permission is used to designate actions that involve removing an
 * unprocessed entity record from the refresh_state table.
 * @public
 */
export const unprocessedEntitiesDeletePermission = createPermission({
  name: 'catalog.entities.unprocessed.delete',
  attributes: { action: 'delete' },
});

/**
 * List of all unprocessed entity permissions
 * @public
 */
export const unprocessedEntitiesPermissions = {
  unprocessedEntitiesDeletePermission,
};
