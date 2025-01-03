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

import { EventParams } from './EventParams';
import { EventRouter } from './EventRouter';
import { EventsService } from './EventsService';

/**
 * Subscribes to the provided (generic) topic
 * and publishes the events under the more concrete sub-topic
 * depending on the implemented logic for determining it.
 * Implementing classes might use information from `metadata`
 * and/or properties within the payload.
 *
 * @public
 */
export abstract class SubTopicEventRouter extends EventRouter {
  protected constructor(options: { events: EventsService; topic: string }) {
    super({
      events: options.events,
      topics: [options.topic],
    });
  }

  protected abstract determineSubTopic(params: EventParams): string | undefined;

  protected determineDestinationTopic(params: EventParams): string | undefined {
    const subTopic = this.determineSubTopic(params);
    return subTopic ? `${params.topic}.${subTopic}` : undefined;
  }
}
