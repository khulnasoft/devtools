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

import { SchedulerServiceTaskScheduleDefinition } from '@devtools/backend-plugin-api';

export type AzureDevOpsConfig = {
  id: string;
  host: string;
  organization: string;
  project: string;
  repository: string;
  branch?: string;
  path: string;
  schedule?: SchedulerServiceTaskScheduleDefinition;
};

export type AzureBlobStorageConfig = {
  id: string;
  containerName: string;
  accountName: string;
  schedule?: SchedulerServiceTaskScheduleDefinition;
};
