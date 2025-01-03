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
import { mockServices, startTestBackend } from '@devtools/backend-test-utils';
import { catalogProcessingExtensionPoint } from '@devtools/plugin-catalog-node/alpha';
import { catalogModulePuppetDbEntityProvider } from './catalogModulePuppetDbEntityProvider';
import { PuppetDbEntityProvider } from '../providers/PuppetDbEntityProvider';

describe('catalogModulePuppetDbEntityProvider', () => {
  it('should register provider at the catalog extension point', async () => {
    let addedProviders: Array<PuppetDbEntityProvider> | undefined;
    let usedSchedule: SchedulerServiceTaskScheduleDefinition | undefined;

    const extensionPoint = {
      addEntityProvider: (providers: any) => {
        addedProviders = providers;
      },
    };
    const runner = jest.fn();
    const scheduler = mockServices.scheduler.mock({
      createScheduledTaskRunner(schedule) {
        usedSchedule = schedule;
        return { run: runner };
      },
    });

    const config = {
      catalog: {
        providers: {
          puppetdb: {
            baseUrl: 'http://puppetdb:8080',
            schedule: {
              frequency: { minutes: 10 },
              timeout: { minutes: 10 },
            },
          },
        },
      },
    };

    await startTestBackend({
      extensionPoints: [[catalogProcessingExtensionPoint, extensionPoint]],
      features: [
        catalogModulePuppetDbEntityProvider,
        mockServices.rootConfig.factory({ data: config }),
        scheduler.factory,
      ],
    });

    expect(usedSchedule?.frequency).toEqual({ minutes: 10 });
    expect(usedSchedule?.timeout).toEqual({ minutes: 10 });
    expect(addedProviders?.length).toEqual(1);
    expect(addedProviders?.pop()?.getProviderName()).toEqual(
      'puppetdb-provider:default',
    );
    expect(runner).not.toHaveBeenCalled();
  });
});
