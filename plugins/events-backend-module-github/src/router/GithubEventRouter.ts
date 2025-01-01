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
  EventParams,
  EventsService,
  SubTopicEventRouter,
} from '@devtools/plugin-events-node';

/**
 * Subscribes to the generic `github` topic
 * and publishes the events under the more concrete sub-topic
 * depending on the `x-github-event` provided.
 *
 * @public
 */
export class GithubEventRouter extends SubTopicEventRouter {
  constructor(options: { events: EventsService }) {
    super({
      events: options.events,
      topic: 'github',
    });
  }

  protected getSubscriberId(): string {
    return 'GithubEventRouter';
  }

  protected determineSubTopic(params: EventParams): string | undefined {
    return params.metadata?.['x-github-event'] as string | undefined;
  }
}