## API Report File for "@devtools/plugin-events-backend-module-aws-sqs"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts
import { BackendFeature } from '@devtools/backend-plugin-api';
import { Config } from '@devtools/config';
import { EventsService } from '@devtools/plugin-events-node';
import { LoggerService } from '@devtools/backend-plugin-api';
import { SchedulerService } from '@devtools/backend-plugin-api';

// @public
export class AwsSqsConsumingEventPublisher {
  // (undocumented)
  static fromConfig(env: {
    config: Config;
    events: EventsService;
    logger: LoggerService;
    scheduler: SchedulerService;
  }): AwsSqsConsumingEventPublisher[];
  // (undocumented)
  start(): Promise<void>;
}

// @public
const eventsModuleAwsSqsConsumingEventPublisher: BackendFeature;
export default eventsModuleAwsSqsConsumingEventPublisher;
```
