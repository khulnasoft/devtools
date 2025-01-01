## API Report File for "@devtools/plugin-events-backend"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts
import { BackendFeature } from '@devtools/backend-plugin-api';
import { Config } from '@devtools/config';
import { EventBroker } from '@devtools/plugin-events-node';
import { EventParams } from '@devtools/plugin-events-node';
import { EventPublisher } from '@devtools/plugin-events-node';
import { EventsService } from '@devtools/plugin-events-node';
import { EventSubscriber } from '@devtools/plugin-events-node';
import express from 'express';
import { HttpPostIngressOptions } from '@devtools/plugin-events-node';
import { Logger } from 'winston';
import { LoggerService } from '@devtools/backend-plugin-api';

// @public @deprecated
export class DefaultEventBroker implements EventBroker {
  // @deprecated
  constructor(logger: LoggerService, events?: EventsService);
  // (undocumented)
  publish(params: EventParams): Promise<void>;
  // (undocumented)
  subscribe(
    ...subscribers: Array<EventSubscriber | Array<EventSubscriber>>
  ): void;
}

// @public @deprecated
export class EventsBackend {
  constructor(logger: Logger);
  // (undocumented)
  addPublishers(
    ...publishers: Array<EventPublisher | Array<EventPublisher>>
  ): EventsBackend;
  // (undocumented)
  addSubscribers(
    ...subscribers: Array<EventSubscriber | Array<EventSubscriber>>
  ): EventsBackend;
  // (undocumented)
  setEventBroker(eventBroker: EventBroker): EventsBackend;
  start(): Promise<void>;
}

// @public
const eventsPlugin: BackendFeature;
export default eventsPlugin;

// @public
export class HttpPostIngressEventPublisher {
  // (undocumented)
  bind(router: express.Router): void;
  // (undocumented)
  static fromConfig(env: {
    config: Config;
    events: EventsService;
    ingresses?: {
      [topic: string]: Omit<HttpPostIngressOptions, 'topic'>;
    };
    logger: LoggerService;
  }): HttpPostIngressEventPublisher;
}
```