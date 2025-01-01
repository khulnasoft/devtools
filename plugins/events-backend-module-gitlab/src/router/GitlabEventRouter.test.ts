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

import { TestEventsService } from '@devtools/plugin-events-backend-test-utils';
import { GitlabEventRouter } from './GitlabEventRouter';

describe('GitlabEventRouter', () => {
  const events = new TestEventsService();
  const eventRouter = new GitlabEventRouter({ events: events });
  const topic = 'gitlab';
  const eventPayload = { event_name: 'test_type', test: 'payload' };
  const metadata = {};

  beforeEach(() => {
    events.reset();
  });

  it('subscribed to topic', () => {
    eventRouter.subscribe();

    expect(events.subscribed).toHaveLength(1);
    expect(events.subscribed[0].id).toEqual('GitlabEventRouter');
    expect(events.subscribed[0].topics).toEqual([topic]);
  });

  it('no $.event_name', () => {
    eventRouter.onEvent({
      topic,
      eventPayload: { invalid: 'payload' },
      metadata,
    });

    expect(events.published).toEqual([]);
  });

  it('with $.event_name', () => {
    eventRouter.onEvent({ topic, eventPayload, metadata });

    expect(events.published.length).toBe(1);
    expect(events.published[0].topic).toEqual('gitlab.test_type');
    expect(events.published[0].eventPayload).toEqual(eventPayload);
    expect(events.published[0].metadata).toEqual(metadata);
  });
});
