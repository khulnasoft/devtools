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

import {
  createServiceFactory,
  SchedulerServiceTaskScheduleDefinition,
} from '@devtools/backend-plugin-api';
import { startTestBackend, mockServices } from '@devtools/backend-test-utils';
import { EntityProviderConnection } from '@devtools/plugin-catalog-node';
import { catalogProcessingExtensionPoint } from '@devtools/plugin-catalog-node/alpha';
import { TestEventsService } from '@devtools/plugin-events-backend-test-utils';
import { eventsServiceRef } from '@devtools/plugin-events-node';
import { catalogModuleBitbucketCloudEntityProvider } from './catalogModuleBitbucketCloudEntityProvider';
import { BitbucketCloudEntityProvider } from '../providers/BitbucketCloudEntityProvider';

describe('catalogModuleBitbucketCloudEntityProvider', () => {
  it('should register provider at the catalog extension point', async () => {
    const events = new TestEventsService();
    const eventsServiceFactory = createServiceFactory({
      service: eventsServiceRef,
      deps: {},
      async factory({}) {
        return events;
      },
    });
    let addedProviders: Array<BitbucketCloudEntityProvider> | undefined;
    let usedSchedule: SchedulerServiceTaskScheduleDefinition | undefined;

    const catalogExtensionPointImpl = {
      addEntityProvider: (providers: any) => {
        addedProviders = providers;
      },
    };
    const connection = jest.fn() as unknown as EntityProviderConnection;
    const runner = jest.fn();
    const scheduler = mockServices.scheduler.mock({
      createScheduledTaskRunner(schedule) {
        usedSchedule = schedule;
        return { run: runner };
      },
    });

    await startTestBackend({
      extensionPoints: [
        [catalogProcessingExtensionPoint, catalogExtensionPointImpl],
      ],
      features: [
        eventsServiceFactory,
        catalogModuleBitbucketCloudEntityProvider,
        mockServices.rootConfig.factory({
          data: {
            catalog: {
              providers: {
                bitbucketCloud: {
                  schedule: {
                    frequency: 'P1M',
                    timeout: 'PT3M',
                  },
                  workspace: 'test-ws',
                },
              },
            },
          },
        }),
        scheduler.factory,
      ],
    });

    expect(usedSchedule?.frequency).toEqual({ months: 1 });
    expect(usedSchedule?.timeout).toEqual({ minutes: 3 });
    expect(addedProviders?.length).toEqual(1);
    expect(runner).not.toHaveBeenCalled();
    const provider = addedProviders!.pop()!;
    expect(provider.getProviderName()).toEqual(
      'bitbucketCloud-provider:default',
    );
    await provider.connect(connection);
    expect(events.subscribed).toHaveLength(1);
    expect(events.subscribed[0].id).toEqual('bitbucketCloud-provider:default');
    expect(runner).toHaveBeenCalledTimes(1);
  });
});
