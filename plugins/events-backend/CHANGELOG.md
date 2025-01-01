# @devtools/plugin-events-backend

## 0.4.1-next.0

### Patch Changes

- d9d62ef: Remove some internal usages of the backend-common package
- Updated dependencies
  - @devtools/backend-openapi-utils@0.4.1-next.0
  - @devtools/backend-plugin-api@1.1.1-next.0
  - @devtools/config@1.3.1
  - @devtools/errors@1.2.6
  - @devtools/types@1.2.0
  - @devtools/plugin-events-node@0.4.7-next.0

## 0.4.0

### Minor Changes

- 384e494: Internal updates to generated code.

### Patch Changes

- 1577511: Allow configuring a timeout for event bus polling requests. This can be set like so in your app-config:

  ```yaml
  events:
    notifyTimeoutMs: 30000
  ```

- Updated dependencies
  - @devtools/backend-plugin-api@1.1.0
  - @devtools/plugin-events-node@0.4.6
  - @devtools/backend-openapi-utils@0.4.0
  - @devtools/errors@1.2.6
  - @devtools/config@1.3.1
  - @devtools/types@1.2.0

## 0.4.0-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@1.1.0-next.2
  - @devtools/backend-openapi-utils@0.4.0-next.2
  - @devtools/errors@1.2.6-next.0
  - @devtools/plugin-events-node@0.4.6-next.2
  - @devtools/config@1.3.1-next.0
  - @devtools/types@1.2.0

## 0.4.0-next.1

### Minor Changes

- 384e494: Internal updates to generated code.

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@1.1.0-next.1
  - @devtools/backend-openapi-utils@0.3.1-next.1
  - @devtools/config@1.3.0
  - @devtools/errors@1.2.5
  - @devtools/types@1.2.0
  - @devtools/plugin-events-node@0.4.6-next.1

## 0.3.17-next.0

### Patch Changes

- 1577511: Allow configuring a timeout for event bus polling requests. This can be set like so in your app-config:

  ```yaml
  events:
    notifyTimeoutMs: 30000
  ```

- Updated dependencies
  - @devtools/backend-plugin-api@1.0.3-next.0
  - @devtools/plugin-events-node@0.4.6-next.0
  - @devtools/backend-openapi-utils@0.3.1-next.0
  - @devtools/config@1.3.0
  - @devtools/errors@1.2.5
  - @devtools/types@1.2.0

## 0.3.16

### Patch Changes

- e02a02b: Fix `events.useEventBus` by propagating config to `DefaultEventsService`
- 9816f51: Add raw body information to `RequestDetails`
  and use the raw body when validating incoming event requests.
- b7d0334: Cleaning up event subscriptions after the max age window
- Updated dependencies
  - @devtools/config@1.3.0
  - @devtools/plugin-events-node@0.4.5
  - @devtools/types@1.2.0
  - @devtools/backend-plugin-api@1.0.2
  - @devtools/backend-openapi-utils@0.3.0
  - @devtools/errors@1.2.5

## 0.3.16-next.3

### Patch Changes

- 9816f51: Add raw body information to `RequestDetails`
  and use the raw body when validating incoming event requests.
- Updated dependencies
  - @devtools/plugin-events-node@0.4.5-next.3
  - @devtools/backend-openapi-utils@0.3.0-next.2
  - @devtools/backend-plugin-api@1.0.2-next.2
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1

## 0.3.16-next.2

### Patch Changes

- b7d0334: Cleaning up event subscriptions after the max age window
- Updated dependencies
  - @devtools/backend-openapi-utils@0.3.0-next.2
  - @devtools/plugin-events-node@0.4.5-next.2
  - @devtools/backend-plugin-api@1.0.2-next.2
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1

## 0.3.16-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-openapi-utils@0.2.1-next.1
  - @devtools/backend-plugin-api@1.0.2-next.1
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1
  - @devtools/plugin-events-node@0.4.4-next.1

## 0.3.15-next.0

### Patch Changes

- e02a02b: Fix `events.useEventBus` by propagating config to `DefaultEventsService`
- Updated dependencies
  - @devtools/plugin-events-node@0.4.3-next.0
  - @devtools/backend-openapi-utils@0.2.1-next.0
  - @devtools/backend-plugin-api@1.0.2-next.0
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1

## 0.3.13

### Patch Changes

- 094eaa3: Remove references to in-repo backend-common
- 3109c24: The export for the new backend system at the `/alpha` export is now also available via the main entry point, which means that you can remove the `/alpha` suffix from the import.
- 5c728ee: The events backend now has its own built-in event bus for distributing events across multiple backend instances. It exposes a new HTTP API under `/bus/v1/` for publishing and reading events from the bus, as well as its own storage and notification mechanism for events.

  The backing event store for the bus only supports scaled deployment if PostgreSQL is used as the DBMS. If SQLite or MySQL is used, the event bus will fall back to an in-memory store that does not support multiple backend instances.

  The default `EventsService` implementation from `@devtools/plugin-events-node` has also been updated to use the new events bus.

- Updated dependencies
  - @devtools/plugin-events-node@0.4.1
  - @devtools/backend-openapi-utils@0.2.0
  - @devtools/backend-plugin-api@1.0.1
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1

## 0.3.13-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-openapi-utils@0.2.0-next.1
  - @devtools/backend-plugin-api@1.0.1-next.1
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1
  - @devtools/plugin-events-node@0.4.1-next.1

## 0.3.13-next.0

### Patch Changes

- 094eaa3: Remove references to in-repo backend-common
- 5c728ee: The events backend now has its own built-in event bus for distributing events across multiple backend instances. It exposes a new HTTP API under `/bus/v1/` for publishing and reading events from the bus, as well as its own storage and notification mechanism for events.

  The backing event store for the bus only supports scaled deployment if PostgreSQL is used as the DBMS. If SQLite or MySQL is used, the event bus will fall back to an in-memory store that does not support multiple backend instances.

  The default `EventsService` implementation from `@devtools/plugin-events-node` has also been updated to use the new events bus.

- Updated dependencies
  - @devtools/plugin-events-node@0.4.1-next.0
  - @devtools/backend-openapi-utils@0.1.19-next.0
  - @devtools/backend-plugin-api@1.0.1-next.0
  - @devtools/config@1.2.0
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1

## 0.3.12

### Patch Changes

- d425fc4: Modules, plugins, and services are now `BackendFeature`, not a function that returns a feature.
- c2b63ab: Updated dependency `supertest` to `^7.0.0`.
- Updated dependencies
  - @devtools/backend-common@0.25.0
  - @devtools/backend-plugin-api@1.0.0
  - @devtools/plugin-events-node@0.4.0
  - @devtools/config@1.2.0

## 0.3.12-next.2

### Patch Changes

- c2b63ab: Updated dependency `supertest` to `^7.0.0`.
- Updated dependencies
  - @devtools/backend-common@0.25.0-next.2
  - @devtools/backend-plugin-api@1.0.0-next.2
  - @devtools/config@1.2.0
  - @devtools/plugin-events-node@0.4.0-next.2

## 0.3.12-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.25.0-next.1
  - @devtools/backend-plugin-api@0.9.0-next.1
  - @devtools/config@1.2.0
  - @devtools/plugin-events-node@0.4.0-next.1

## 0.3.12-next.0

### Patch Changes

- d425fc4: Modules, plugins, and services are now `BackendFeature`, not a function that returns a feature.
- Updated dependencies
  - @devtools/backend-plugin-api@0.9.0-next.0
  - @devtools/backend-common@0.25.0-next.0
  - @devtools/plugin-events-node@0.4.0-next.0
  - @devtools/config@1.2.0

## 0.3.10

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.8.0
  - @devtools/backend-common@0.24.0
  - @devtools/config@1.2.0
  - @devtools/plugin-events-node@0.3.9

## 0.3.10-next.3

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.8.0-next.3
  - @devtools/backend-common@0.23.4-next.3
  - @devtools/config@1.2.0
  - @devtools/plugin-events-node@0.3.9-next.3

## 0.3.10-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.8.0-next.2
  - @devtools/backend-common@0.23.4-next.2
  - @devtools/plugin-events-node@0.3.9-next.2
  - @devtools/config@1.2.0

## 0.3.10-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.7.1-next.1
  - @devtools/backend-common@0.23.4-next.1
  - @devtools/config@1.2.0
  - @devtools/plugin-events-node@0.3.9-next.1

## 0.3.10-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.23.4-next.0
  - @devtools/backend-plugin-api@0.7.1-next.0
  - @devtools/config@1.2.0
  - @devtools/plugin-events-node@0.3.9-next.0

## 0.3.9

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.7.0
  - @devtools/backend-common@0.23.3
  - @devtools/plugin-events-node@0.3.8
  - @devtools/config@1.2.0

## 0.3.9-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.23.3-next.1
  - @devtools/backend-plugin-api@0.6.22-next.1
  - @devtools/config@1.2.0
  - @devtools/plugin-events-node@0.3.8-next.1

## 0.3.8-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.6.21-next.0
  - @devtools/backend-common@0.23.2-next.0
  - @devtools/plugin-events-node@0.3.7-next.0
  - @devtools/config@1.2.0

## 0.3.6

### Patch Changes

- 78a0b08: Internal refactor to handle `BackendFeature` contract change.
- d44a20a: Added additional plugin metadata to `package.json`.
- Updated dependencies
  - @devtools/backend-common@0.23.0
  - @devtools/backend-plugin-api@0.6.19
  - @devtools/plugin-events-node@0.3.5
  - @devtools/config@1.2.0

## 0.3.6-next.3

### Patch Changes

- d44a20a: Added additional plugin metadata to `package.json`.
- Updated dependencies
  - @devtools/backend-plugin-api@0.6.19-next.3
  - @devtools/plugin-events-node@0.3.5-next.2
  - @devtools/backend-common@0.23.0-next.3
  - @devtools/config@1.2.0

## 0.3.6-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.6.19-next.2
  - @devtools/backend-common@0.23.0-next.2
  - @devtools/plugin-events-node@0.3.5-next.1
  - @devtools/config@1.2.0

## 0.3.6-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.6.19-next.1
  - @devtools/backend-common@0.23.0-next.1
  - @devtools/plugin-events-node@0.3.5-next.0

## 0.3.6-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.22.1-next.0
  - @devtools/plugin-events-node@0.3.5-next.0
  - @devtools/backend-plugin-api@0.6.19-next.0
  - @devtools/config@1.2.0

## 0.3.5

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.22.0
  - @devtools/backend-plugin-api@0.6.18
  - @devtools/plugin-events-node@0.3.4

## 0.3.5-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.22.0-next.1
  - @devtools/plugin-events-node@0.3.4-next.1
  - @devtools/backend-plugin-api@0.6.18-next.1

## 0.3.5-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.21.8-next.0
  - @devtools/backend-plugin-api@0.6.18-next.0
  - @devtools/config@1.2.0
  - @devtools/plugin-events-node@0.3.4-next.0

## 0.3.4

### Patch Changes

- 7899e55: Allow unauthenticated requests for HTTP ingress.
- Updated dependencies
  - @devtools/backend-common@0.21.7
  - @devtools/backend-plugin-api@0.6.17
  - @devtools/plugin-events-node@0.3.3
  - @devtools/config@1.2.0

## 0.3.4-next.1

### Patch Changes

- 7899e55: Allow unauthenticated requests for HTTP ingress.
- Updated dependencies
  - @devtools/backend-common@0.21.7-next.1
  - @devtools/backend-plugin-api@0.6.17-next.1
  - @devtools/plugin-events-node@0.3.3-next.1
  - @devtools/config@1.2.0

## 0.3.3-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.21.7-next.0
  - @devtools/backend-plugin-api@0.6.17-next.0
  - @devtools/config@1.2.0
  - @devtools/plugin-events-node@0.3.3-next.0

## 0.3.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.21.6
  - @devtools/backend-plugin-api@0.6.16
  - @devtools/plugin-events-node@0.3.2
  - @devtools/config@1.2.0

## 0.3.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.21.5
  - @devtools/plugin-events-node@0.3.1
  - @devtools/backend-plugin-api@0.6.15
  - @devtools/config@1.2.0

## 0.3.0

### Minor Changes

- c4bd794: BREAKING CHANGE: Migrate `HttpPostIngressEventPublisher` and `eventsPlugin` to use `EventsService`.

  Uses the `EventsService` instead of `EventBroker` at `HttpPostIngressEventPublisher`,
  dropping the use of `EventPublisher` including `setEventBroker(..)`.

  Now, `HttpPostIngressEventPublisher.fromConfig` requires `events: EventsService` as option.

  ```diff
    const http = HttpPostIngressEventPublisher.fromConfig({
      config: env.config,
  +   events: env.events,
      logger: env.logger,
    });
    http.bind(eventsRouter);

    // e.g. at packages/backend/src/plugins/events.ts
  - await new EventsBackend(env.logger)
  -   .setEventBroker(env.eventBroker)
  -   .addPublishers(http)
  -   .start();

    // or for other kinds of setups
  - await Promise.all(http.map(publisher => publisher.setEventBroker(eventBroker)));
  ```

  `eventsPlugin` uses the `eventsServiceRef` as dependency.
  Unsupported (and deprecated) extension point methods will throw an error to prevent unintended behavior.

  ```ts
  import { eventsServiceRef } from '@devtools/plugin-events-node';
  ```

### Patch Changes

- 56969b6: Add new `EventsService` as well as `eventsServiceRef` for the new backend system.

  **Summary:**

  - new:
    `EventsService`, `eventsServiceRef`, `TestEventsService`
  - deprecated:
    `EventBroker`, `EventPublisher`, `EventSubscriber`, `DefaultEventBroker`, `EventsBackend`,
    most parts of `EventsExtensionPoint` (alpha),
    `TestEventBroker`, `TestEventPublisher`, `TestEventSubscriber`

  Add the `eventsServiceRef` as dependency to your backend plugins
  or backend plugin modules.

  **Details:**

  The previous implementation using the `EventsExtensionPoint` was added in the early stages
  of the new backend system and does not respect the plugin isolation.
  This made it not compatible anymore with the new backend system.

  Additionally, the previous interfaces had some room for simplification,
  supporting less exposure of internal concerns as well.

  Hereby, this change adds a new `EventsService` interface as replacement for the now deprecated `EventBroker`.
  The new interface does not require any `EventPublisher` or `EventSubscriber` interfaces anymore.
  Instead, it is expected that the `EventsService` gets passed into publishers and subscribers,
  and used internally. There is no need to expose anything of that at their own interfaces.

  Most parts of `EventsExtensionPoint` (alpha) are deprecated as well and were not usable
  (by other plugins or their modules) anyway.

  The `DefaultEventBroker` implementation is deprecated and wraps the new `DefaultEventsService` implementation.
  Optionally, an instance can be passed as argument to allow mixed setups to operate alongside.

- Updated dependencies
  - @devtools/plugin-events-node@0.3.0
  - @devtools/backend-common@0.21.4
  - @devtools/config@1.2.0
  - @devtools/backend-plugin-api@0.6.14

## 0.3.0-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.21.4-next.2
  - @devtools/backend-plugin-api@0.6.14-next.2
  - @devtools/config@1.2.0-next.1
  - @devtools/plugin-events-node@0.3.0-next.2

## 0.3.0-next.1

### Patch Changes

- Updated dependencies
  - @devtools/config@1.2.0-next.1
  - @devtools/backend-common@0.21.4-next.1
  - @devtools/backend-plugin-api@0.6.14-next.1
  - @devtools/plugin-events-node@0.3.0-next.1

## 0.3.0-next.0

### Minor Changes

- c4bd794: BREAKING CHANGE: Migrate `HttpPostIngressEventPublisher` and `eventsPlugin` to use `EventsService`.

  Uses the `EventsService` instead of `EventBroker` at `HttpPostIngressEventPublisher`,
  dropping the use of `EventPublisher` including `setEventBroker(..)`.

  Now, `HttpPostIngressEventPublisher.fromConfig` requires `events: EventsService` as option.

  ```diff
    const http = HttpPostIngressEventPublisher.fromConfig({
      config: env.config,
  +   events: env.events,
      logger: env.logger,
    });
    http.bind(eventsRouter);

    // e.g. at packages/backend/src/plugins/events.ts
  - await new EventsBackend(env.logger)
  -   .setEventBroker(env.eventBroker)
  -   .addPublishers(http)
  -   .start();

    // or for other kinds of setups
  - await Promise.all(http.map(publisher => publisher.setEventBroker(eventBroker)));
  ```

  `eventsPlugin` uses the `eventsServiceRef` as dependency.
  Unsupported (and deprecated) extension point methods will throw an error to prevent unintended behavior.

  ```ts
  import { eventsServiceRef } from '@devtools/plugin-events-node';
  ```

### Patch Changes

- 56969b6: Add new `EventsService` as well as `eventsServiceRef` for the new backend system.

  **Summary:**

  - new:
    `EventsService`, `eventsServiceRef`, `TestEventsService`
  - deprecated:
    `EventBroker`, `EventPublisher`, `EventSubscriber`, `DefaultEventBroker`, `EventsBackend`,
    most parts of `EventsExtensionPoint` (alpha),
    `TestEventBroker`, `TestEventPublisher`, `TestEventSubscriber`

  Add the `eventsServiceRef` as dependency to your backend plugins
  or backend plugin modules.

  **Details:**

  The previous implementation using the `EventsExtensionPoint` was added in the early stages
  of the new backend system and does not respect the plugin isolation.
  This made it not compatible anymore with the new backend system.

  Additionally, the previous interfaces had some room for simplification,
  supporting less exposure of internal concerns as well.

  Hereby, this change adds a new `EventsService` interface as replacement for the now deprecated `EventBroker`.
  The new interface does not require any `EventPublisher` or `EventSubscriber` interfaces anymore.
  Instead, it is expected that the `EventsService` gets passed into publishers and subscribers,
  and used internally. There is no need to expose anything of that at their own interfaces.

  Most parts of `EventsExtensionPoint` (alpha) are deprecated as well and were not usable
  (by other plugins or their modules) anyway.

  The `DefaultEventBroker` implementation is deprecated and wraps the new `DefaultEventsService` implementation.
  Optionally, an instance can be passed as argument to allow mixed setups to operate alongside.

- Updated dependencies
  - @devtools/plugin-events-node@0.3.0-next.0
  - @devtools/backend-common@0.21.3-next.0
  - @devtools/backend-plugin-api@0.6.13-next.0
  - @devtools/config@1.1.2-next.0

## 0.2.19

### Patch Changes

- 9aac2b0: Use `--cwd` as the first `yarn` argument
- Updated dependencies
  - @devtools/backend-common@0.21.0
  - @devtools/backend-plugin-api@0.6.10
  - @devtools/config@1.1.1
  - @devtools/plugin-events-node@0.2.19

## 0.2.19-next.3

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.21.0-next.3
  - @devtools/backend-plugin-api@0.6.10-next.3
  - @devtools/config@1.1.1
  - @devtools/plugin-events-node@0.2.19-next.3

## 0.2.19-next.2

### Patch Changes

- 9aac2b0: Use `--cwd` as the first `yarn` argument
- Updated dependencies
  - @devtools/backend-common@0.21.0-next.2
  - @devtools/backend-plugin-api@0.6.10-next.2
  - @devtools/plugin-events-node@0.2.19-next.2
  - @devtools/config@1.1.1

## 0.2.19-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.6.10-next.1
  - @devtools/backend-common@0.21.0-next.1
  - @devtools/config@1.1.1
  - @devtools/plugin-events-node@0.2.19-next.1

## 0.2.19-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.21.0-next.0
  - @devtools/backend-plugin-api@0.6.10-next.0
  - @devtools/config@1.1.1
  - @devtools/plugin-events-node@0.2.19-next.0

## 0.2.18

### Patch Changes

- 92ea615: Update `README.md`
- d5ddc4e: Add documentation on how to install the plugins with the new backend system.
- Updated dependencies
  - @devtools/backend-common@0.20.1
  - @devtools/backend-plugin-api@0.6.9
  - @devtools/config@1.1.1
  - @devtools/plugin-events-node@0.2.18

## 0.2.18-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.6.9-next.2
  - @devtools/backend-common@0.20.1-next.2
  - @devtools/plugin-events-node@0.2.18-next.2

## 0.2.18-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.20.1-next.1
  - @devtools/config@1.1.1
  - @devtools/backend-plugin-api@0.6.9-next.1
  - @devtools/plugin-events-node@0.2.18-next.1

## 0.2.18-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.20.1-next.0
  - @devtools/backend-plugin-api@0.6.9-next.0
  - @devtools/config@1.1.1
  - @devtools/plugin-events-node@0.2.18-next.0

## 0.2.17

### Patch Changes

- cc4228e: Switched module ID to use kebab-case.
- Updated dependencies
  - @devtools/backend-common@0.20.0
  - @devtools/backend-plugin-api@0.6.8
  - @devtools/config@1.1.1
  - @devtools/plugin-events-node@0.2.17

## 0.2.17-next.3

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.20.0-next.3
  - @devtools/backend-plugin-api@0.6.8-next.3
  - @devtools/config@1.1.1
  - @devtools/plugin-events-node@0.2.17-next.3

## 0.2.17-next.2

### Patch Changes

- cc4228e: Switched module ID to use kebab-case.
- Updated dependencies
  - @devtools/backend-common@0.20.0-next.2
  - @devtools/backend-plugin-api@0.6.8-next.2
  - @devtools/config@1.1.1
  - @devtools/plugin-events-node@0.2.17-next.2

## 0.2.17-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.20.0-next.1
  - @devtools/backend-plugin-api@0.6.8-next.1
  - @devtools/config@1.1.1
  - @devtools/plugin-events-node@0.2.17-next.1

## 0.2.17-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.20.0-next.0
  - @devtools/backend-plugin-api@0.6.8-next.0
  - @devtools/config@1.1.1
  - @devtools/plugin-events-node@0.2.17-next.0

## 0.2.16

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.19.9
  - @devtools/backend-plugin-api@0.6.7
  - @devtools/config@1.1.1
  - @devtools/plugin-events-node@0.2.16

## 0.2.16-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.6.7-next.2
  - @devtools/backend-common@0.19.9-next.2
  - @devtools/plugin-events-node@0.2.16-next.2

## 0.2.16-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.19.9-next.1
  - @devtools/backend-plugin-api@0.6.7-next.1
  - @devtools/config@1.1.1
  - @devtools/plugin-events-node@0.2.16-next.1

## 0.2.16-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.19.9-next.0
  - @devtools/backend-plugin-api@0.6.7-next.0
  - @devtools/config@1.1.1
  - @devtools/plugin-events-node@0.2.16-next.0

## 0.2.15

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.19.8
  - @devtools/backend-plugin-api@0.6.6
  - @devtools/config@1.1.1
  - @devtools/plugin-events-node@0.2.15

## 0.2.15-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.19.8-next.2
  - @devtools/backend-plugin-api@0.6.6-next.2
  - @devtools/config@1.1.1-next.0
  - @devtools/plugin-events-node@0.2.15-next.2

## 0.2.14-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.19.7-next.1
  - @devtools/backend-plugin-api@0.6.5-next.1
  - @devtools/config@1.1.0
  - @devtools/plugin-events-node@0.2.14-next.1

## 0.2.14-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.19.7-next.0
  - @devtools/config@1.1.0
  - @devtools/backend-plugin-api@0.6.5-next.0
  - @devtools/plugin-events-node@0.2.14-next.0

## 0.2.12

### Patch Changes

- 71114ac50e02: The export for the new backend system has been moved to be the `default` export.

  For example, if you are currently importing the plugin using the following pattern:

  ```ts
  import { examplePlugin } from '@devtools/plugin-example-backend';

  backend.add(examplePlugin);
  ```

  It should be migrated to this:

  ```ts
  backend.add(import('@devtools/plugin-example-backend'));
  ```

- Updated dependencies
  - @devtools/backend-common@0.19.5
  - @devtools/config@1.1.0
  - @devtools/backend-plugin-api@0.6.3
  - @devtools/plugin-events-node@0.2.12

## 0.2.12-next.3

### Patch Changes

- 71114ac50e02: The export for the new backend system has been moved to be the `default` export.

  For example, if you are currently importing the plugin using the following pattern:

  ```ts
  import { examplePlugin } from '@devtools/plugin-example-backend';

  backend.add(examplePlugin);
  ```

  It should be migrated to this:

  ```ts
  backend.add(import('@devtools/plugin-example-backend'));
  ```

- Updated dependencies
  - @devtools/config@1.1.0-next.2
  - @devtools/backend-plugin-api@0.6.3-next.3
  - @devtools/backend-common@0.19.5-next.3
  - @devtools/plugin-events-node@0.2.12-next.3

## 0.2.12-next.2

### Patch Changes

- Updated dependencies
  - @devtools/config@1.1.0-next.1
  - @devtools/backend-common@0.19.5-next.2
  - @devtools/backend-plugin-api@0.6.3-next.2
  - @devtools/plugin-events-node@0.2.12-next.2

## 0.2.12-next.1

### Patch Changes

- Updated dependencies
  - @devtools/config@1.1.0-next.0
  - @devtools/backend-common@0.19.5-next.1
  - @devtools/backend-plugin-api@0.6.3-next.1
  - @devtools/plugin-events-node@0.2.12-next.1

## 0.2.11-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.19.4-next.0
  - @devtools/backend-plugin-api@0.6.2-next.0
  - @devtools/config@1.0.8
  - @devtools/plugin-events-node@0.2.11-next.0

## 0.2.9

### Patch Changes

- 629cbd194a87: Use `coreServices.rootConfig` instead of `coreService.config`
- 12a8c94eda8d: Add package repository and homepage metadata
- Updated dependencies
  - @devtools/backend-common@0.19.2
  - @devtools/backend-plugin-api@0.6.0
  - @devtools/plugin-events-node@0.2.9
  - @devtools/config@1.0.8

## 0.2.9-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-plugin-api@0.6.0-next.2
  - @devtools/backend-common@0.19.2-next.2
  - @devtools/plugin-events-node@0.2.9-next.2

## 0.2.9-next.1

### Patch Changes

- 629cbd194a87: Use `coreServices.rootConfig` instead of `coreService.config`
- 12a8c94eda8d: Add package repository and homepage metadata
- Updated dependencies
  - @devtools/backend-common@0.19.2-next.1
  - @devtools/plugin-events-node@0.2.9-next.1
  - @devtools/backend-plugin-api@0.6.0-next.1
  - @devtools/config@1.0.8

## 0.2.9-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.19.2-next.0
  - @devtools/backend-plugin-api@0.5.5-next.0
  - @devtools/config@1.0.8
  - @devtools/plugin-events-node@0.2.9-next.0

## 0.2.8

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.19.1
  - @devtools/backend-plugin-api@0.5.4
  - @devtools/config@1.0.8
  - @devtools/plugin-events-node@0.2.8

## 0.2.8-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.19.1-next.0
  - @devtools/backend-plugin-api@0.5.4-next.0
  - @devtools/config@1.0.8
  - @devtools/plugin-events-node@0.2.8-next.0

## 0.2.7

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.19.0
  - @devtools/backend-plugin-api@0.5.3
  - @devtools/config@1.0.8
  - @devtools/plugin-events-node@0.2.7

## 0.2.7-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.19.0-next.2
  - @devtools/backend-plugin-api@0.5.3-next.2
  - @devtools/config@1.0.7
  - @devtools/plugin-events-node@0.2.7-next.2

## 0.2.7-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.19.0-next.1
  - @devtools/backend-plugin-api@0.5.3-next.1
  - @devtools/plugin-events-node@0.2.7-next.1
  - @devtools/config@1.0.7

## 0.2.7-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.18.6-next.0
  - @devtools/config@1.0.7
  - @devtools/backend-plugin-api@0.5.3-next.0
  - @devtools/plugin-events-node@0.2.7-next.0

## 0.2.6

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.18.5
  - @devtools/backend-plugin-api@0.5.2
  - @devtools/config@1.0.7
  - @devtools/plugin-events-node@0.2.6

## 0.2.6-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.18.5-next.1
  - @devtools/backend-plugin-api@0.5.2-next.1
  - @devtools/config@1.0.7
  - @devtools/plugin-events-node@0.2.6-next.1

## 0.2.6-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.18.5-next.0
  - @devtools/backend-plugin-api@0.5.2-next.0
  - @devtools/config@1.0.7
  - @devtools/plugin-events-node@0.2.6-next.0

## 0.2.5

### Patch Changes

- 3538d9ad2c4: Export `DefaultEventBroker` to allow decoupling of the catalog and events backends in the `example-backend`.

  Please look at `plugins/events-backend/README.md` for the currently advised way to set up the event backend and catalog providers.

- Updated dependencies
  - @devtools/backend-common@0.18.4
  - @devtools/backend-plugin-api@0.5.1
  - @devtools/config@1.0.7
  - @devtools/plugin-events-node@0.2.5

## 0.2.5-next.3

### Patch Changes

- 3538d9ad2c4: Export `DefaultEventBroker` to allow decoupling of the catalog and events backends in the `example-backend`.

  Please look at `plugins/events-backend/README.md` for the currently advised way to set up the event backend and catalog providers.

- Updated dependencies
  - @devtools/backend-common@0.18.4-next.2
  - @devtools/backend-plugin-api@0.5.1-next.2
  - @devtools/config@1.0.7
  - @devtools/plugin-events-node@0.2.5-next.2

## 0.2.5-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.18.4-next.2
  - @devtools/backend-plugin-api@0.5.1-next.2
  - @devtools/config@1.0.7
  - @devtools/plugin-events-node@0.2.5-next.2

## 0.2.5-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.18.4-next.1
  - @devtools/backend-plugin-api@0.5.1-next.1
  - @devtools/config@1.0.7
  - @devtools/plugin-events-node@0.2.5-next.1

## 0.2.5-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.18.4-next.0
  - @devtools/config@1.0.7
  - @devtools/backend-plugin-api@0.5.1-next.0
  - @devtools/plugin-events-node@0.2.5-next.0

## 0.2.4

### Patch Changes

- 928a12a9b3e: Internal refactor of `/alpha` exports.
- a5de745ac17: Updated README instructions
- Updated dependencies
  - @devtools/backend-common@0.18.3
  - @devtools/backend-plugin-api@0.5.0
  - @devtools/plugin-events-node@0.2.4
  - @devtools/config@1.0.7

## 0.2.4-next.2

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.18.3-next.2
  - @devtools/backend-plugin-api@0.4.1-next.2
  - @devtools/plugin-events-node@0.2.4-next.2
  - @devtools/config@1.0.7-next.0

## 0.2.4-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.18.3-next.1
  - @devtools/backend-plugin-api@0.4.1-next.1
  - @devtools/config@1.0.7-next.0
  - @devtools/plugin-events-node@0.2.4-next.1

## 0.2.4-next.0

### Patch Changes

- 928a12a9b3: Internal refactor of `/alpha` exports.
- Updated dependencies
  - @devtools/backend-plugin-api@0.4.1-next.0
  - @devtools/backend-common@0.18.3-next.0
  - @devtools/plugin-events-node@0.2.4-next.0
  - @devtools/config@1.0.6

## 0.2.3

### Patch Changes

- 0ff03319be: Updated usage of `createBackendPlugin`.
- Updated dependencies
  - @devtools/backend-plugin-api@0.4.0
  - @devtools/backend-common@0.18.2
  - @devtools/plugin-events-node@0.2.3
  - @devtools/config@1.0.6

## 0.2.3-next.2

### Patch Changes

- 0ff03319be: Updated usage of `createBackendPlugin`.
- Updated dependencies
  - @devtools/backend-plugin-api@0.4.0-next.2
  - @devtools/backend-common@0.18.2-next.2
  - @devtools/plugin-events-node@0.2.3-next.2
  - @devtools/config@1.0.6

## 0.2.3-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.18.2-next.1
  - @devtools/backend-plugin-api@0.3.2-next.1
  - @devtools/config@1.0.6
  - @devtools/plugin-events-node@0.2.3-next.1

## 0.2.3-next.0

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.18.2-next.0
  - @devtools/backend-plugin-api@0.3.2-next.0
  - @devtools/plugin-events-node@0.2.3-next.0

## 0.2.1

### Patch Changes

- 217149ae98: The default event broker will now catch and log errors thrown by the `onEvent` method of subscribers. The returned promise from `publish` method will also not resolve until all subscribers have handled the event.
- 8e06f3cf00: Switched imports of `loggerToWinstonLogger` to `@devtools/backend-common`.
- Updated dependencies
  - @devtools/backend-plugin-api@0.3.0
  - @devtools/backend-common@0.18.0
  - @devtools/config@1.0.6
  - @devtools/plugin-events-node@0.2.1

## 0.2.1-next.1

### Patch Changes

- 8e06f3cf00: Switched imports of `loggerToWinstonLogger` to `@devtools/backend-common`.
- Updated dependencies
  - @devtools/backend-plugin-api@0.3.0-next.1
  - @devtools/backend-common@0.18.0-next.1
  - @devtools/plugin-events-node@0.2.1-next.1
  - @devtools/config@1.0.6-next.0

## 0.2.1-next.0

### Patch Changes

- 217149ae98: The default event broker will now catch and log errors thrown by the `onEvent` method of subscribers. The returned promise from `publish` method will also not resolve until all subscribers have handled the event.
- Updated dependencies
  - @devtools/backend-plugin-api@0.2.1-next.0
  - @devtools/backend-common@0.18.0-next.0
  - @devtools/config@1.0.6-next.0
  - @devtools/plugin-events-node@0.2.1-next.0

## 0.2.0

### Minor Changes

- cf41eedf43: **BREAKING:** Remove required field `router` at `HttpPostIngressEventPublisher.fromConfig`
  and replace it with `bind(router: Router)`.
  Additionally, the path prefix `/http` will be added inside `HttpPostIngressEventPublisher`.

  ```diff
  // at packages/backend/src/plugins/events.ts
     const eventsRouter = Router();
  -  const httpRouter = Router();
  -  eventsRouter.use('/http', httpRouter);

     const http = HttpPostIngressEventPublisher.fromConfig({
       config: env.config,
       logger: env.logger,
  -    router: httpRouter,
     });
  +  http.bind(eventsRouter);
  ```

### Patch Changes

- 884d749b14: Refactored to use `coreServices` from `@devtools/backend-plugin-api`.
- cf41eedf43: Introduce a new interface `RequestDetails` to abstract `Request`
  providing access to request body and headers.

  **BREAKING:** Replace `request: Request` with `request: RequestDetails` at `RequestValidator`.

- Updated dependencies
  - @devtools/backend-common@0.17.0
  - @devtools/backend-plugin-api@0.2.0
  - @devtools/plugin-events-node@0.2.0
  - @devtools/config@1.0.5

## 0.2.0-next.3

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.17.0-next.3
  - @devtools/backend-plugin-api@0.2.0-next.3
  - @devtools/config@1.0.5-next.1
  - @devtools/plugin-events-node@0.2.0-next.3

## 0.2.0-next.2

### Patch Changes

- 884d749b14: Refactored to use `coreServices` from `@devtools/backend-plugin-api`.
- Updated dependencies
  - @devtools/backend-common@0.17.0-next.2
  - @devtools/backend-plugin-api@0.2.0-next.2
  - @devtools/config@1.0.5-next.1
  - @devtools/plugin-events-node@0.2.0-next.2

## 0.2.0-next.1

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.17.0-next.1
  - @devtools/backend-plugin-api@0.1.5-next.1
  - @devtools/config@1.0.5-next.1
  - @devtools/plugin-events-node@0.2.0-next.1

## 0.2.0-next.0

### Minor Changes

- cf41eedf43: **BREAKING:** Remove required field `router` at `HttpPostIngressEventPublisher.fromConfig`
  and replace it with `bind(router: Router)`.
  Additionally, the path prefix `/http` will be added inside `HttpPostIngressEventPublisher`.

  ```diff
  // at packages/backend/src/plugins/events.ts
     const eventsRouter = Router();
  -  const httpRouter = Router();
  -  eventsRouter.use('/http', httpRouter);

     const http = HttpPostIngressEventPublisher.fromConfig({
       config: env.config,
       logger: env.logger,
  -    router: httpRouter,
     });
  +  http.bind(eventsRouter);
  ```

### Patch Changes

- cf41eedf43: Introduce a new interface `RequestDetails` to abstract `Request`
  providing access to request body and headers.

  **BREAKING:** Replace `request: Request` with `request: RequestDetails` at `RequestValidator`.

- Updated dependencies
  - @devtools/plugin-events-node@0.2.0-next.0
  - @devtools/backend-common@0.16.1-next.0
  - @devtools/backend-plugin-api@0.1.5-next.0
  - @devtools/config@1.0.5-next.0

## 0.1.0

### Minor Changes

- dc9da28abd: Support events received via HTTP endpoints at plugin-events-backend.

  The plugin provides an event publisher `HttpPostIngressEventPublisher`
  which will allow you to receive events via
  HTTP endpoints `POST /api/events/http/{topic}`
  and will publish these to the used event broker.

  Using a provided custom validator, you can participate in the decision
  which events are accepted, e.g. by verifying the source of the request.

  Please find more information at
  https://github.com/khulnasoft/devtools/tree/master/plugins/events-backend/README.md.

- 7bbd2403a1: Adds a new backend plugin plugin-events-backend for managing events.

  plugin-events-node exposes interfaces which can be used by modules.

  plugin-events-backend-test-utils provides utilities which can be used while writing tests e.g. for modules.

  Please find more information at
  https://github.com/khulnasoft/devtools/tree/master/plugins/events-backend/README.md.

### Patch Changes

- Updated dependencies
  - @devtools/backend-common@0.16.0
  - @devtools/plugin-events-node@0.1.0
  - @devtools/backend-plugin-api@0.1.4
  - @devtools/config@1.0.4