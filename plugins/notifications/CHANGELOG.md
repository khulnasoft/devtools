# @devtools/plugin-notifications

## 0.5.0

### Minor Changes

- fc15b77: Switched to using the new `/notifications` endpoints. Be sure to update the `notifications` plugin backend before deploying this frontend plugin change.

### Patch Changes

- Updated dependencies
  - @devtools/theme@0.6.3
  - @devtools/core-components@0.16.2
  - @devtools/errors@1.2.6
  - @devtools/core-plugin-api@1.10.2
  - @devtools/types@1.2.0
  - @devtools/plugin-notifications-common@0.0.7
  - @devtools/plugin-signals-react@0.0.8

## 0.5.0-next.2

### Minor Changes

- fc15b77: Switched to using the new `/notifications` endpoints. Be sure to update the `notifications` plugin backend before deploying this frontend plugin change.

### Patch Changes

- Updated dependencies
  - @devtools/errors@1.2.6-next.0
  - @devtools/core-components@0.16.2-next.2
  - @devtools/core-plugin-api@1.10.2-next.0
  - @devtools/theme@0.6.3-next.0
  - @devtools/types@1.2.0
  - @devtools/plugin-notifications-common@0.0.7-next.0
  - @devtools/plugin-signals-react@0.0.8-next.0

## 0.4.2-next.1

### Patch Changes

- Updated dependencies
  - @devtools/core-components@0.16.2-next.1
  - @devtools/core-plugin-api@1.10.1
  - @devtools/errors@1.2.5
  - @devtools/theme@0.6.3-next.0
  - @devtools/types@1.2.0
  - @devtools/plugin-notifications-common@0.0.6
  - @devtools/plugin-signals-react@0.0.7

## 0.4.2-next.0

### Patch Changes

- Updated dependencies
  - @devtools/theme@0.6.3-next.0
  - @devtools/core-components@0.16.2-next.0
  - @devtools/core-plugin-api@1.10.1
  - @devtools/errors@1.2.5
  - @devtools/types@1.2.0
  - @devtools/plugin-notifications-common@0.0.6
  - @devtools/plugin-signals-react@0.0.7

## 0.4.0

### Minor Changes

- 87ffc1c: Rephrasing labels of the View filter to be more clear. Based on the received users' feedback.

### Patch Changes

- 4186105: Added title to the Notifications' table. The title clearly states the filter selection and total count of messages. This change aligns the look and feel closer to other tables.
- 3a0731e: The "Created after" filter renamed to the "Sent out" based on the received users' feedback.
- 3e135f2: The notification's title is emphasized to be clearly distinguished from the description.
- 97ba58f: Add support for user specific notification settings
- 1d87c43: Show count of unread notifications in the left-side MenuItem. This replaces the simple true/false bullet.
- Updated dependencies
  - @devtools/theme@0.6.1
  - @devtools/types@1.2.0
  - @devtools/core-components@0.16.0
  - @devtools/plugin-notifications-common@0.0.6
  - @devtools/core-plugin-api@1.10.1
  - @devtools/errors@1.2.5
  - @devtools/plugin-signals-react@0.0.7

## 0.3.3-next.2

### Patch Changes

- Updated dependencies
  - @devtools/core-components@0.16.0-next.2
  - @devtools/core-plugin-api@1.10.0
  - @devtools/errors@1.2.4
  - @devtools/theme@0.6.1-next.0
  - @devtools/types@1.1.1
  - @devtools/plugin-notifications-common@0.0.6-next.0
  - @devtools/plugin-signals-react@0.0.6

## 0.3.3-next.1

### Patch Changes

- Updated dependencies
  - @devtools/theme@0.6.1-next.0
  - @devtools/core-components@0.16.0-next.1
  - @devtools/core-plugin-api@1.10.0
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1
  - @devtools/plugin-notifications-common@0.0.6-next.0
  - @devtools/plugin-signals-react@0.0.6

## 0.3.3-next.0

### Patch Changes

- 97ba58f: Add support for user specific notification settings
- Updated dependencies
  - @devtools/core-components@0.16.0-next.0
  - @devtools/plugin-notifications-common@0.0.6-next.0
  - @devtools/core-plugin-api@1.10.0
  - @devtools/errors@1.2.4
  - @devtools/theme@0.6.0
  - @devtools/types@1.1.1
  - @devtools/plugin-signals-react@0.0.6

## 0.3.2

### Patch Changes

- e969dc7: Move `@types/react` to a peer dependency.
- Updated dependencies
  - @devtools/core-components@0.15.1
  - @devtools/plugin-signals-react@0.0.6
  - @devtools/core-plugin-api@1.10.0
  - @devtools/theme@0.6.0
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1
  - @devtools/plugin-notifications-common@0.0.5

## 0.3.2-next.2

### Patch Changes

- Updated dependencies
  - @devtools/theme@0.6.0-next.1
  - @devtools/core-components@0.15.1-next.2
  - @devtools/core-plugin-api@1.10.0-next.1
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1
  - @devtools/plugin-notifications-common@0.0.5
  - @devtools/plugin-signals-react@0.0.6-next.1

## 0.3.2-next.1

### Patch Changes

- e969dc7: Move `@types/react` to a peer dependency.
- Updated dependencies
  - @devtools/core-components@0.15.1-next.1
  - @devtools/plugin-signals-react@0.0.6-next.1
  - @devtools/core-plugin-api@1.10.0-next.1
  - @devtools/theme@0.5.8-next.0
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1
  - @devtools/plugin-notifications-common@0.0.5

## 0.3.2-next.0

### Patch Changes

- Updated dependencies
  - @devtools/core-components@0.15.1-next.0
  - @devtools/core-plugin-api@1.10.0-next.0
  - @devtools/errors@1.2.4
  - @devtools/theme@0.5.7
  - @devtools/types@1.1.1
  - @devtools/plugin-notifications-common@0.0.5
  - @devtools/plugin-signals-react@0.0.6-next.0

## 0.3.1

### Patch Changes

- 653f60b: Severity filter label newly contains "Min severity" to better describe range instead of exact value.
- 4a53dd0: Implement icon in backend and show icon in table if available.
- 836127c: Updated dependency `@testing-library/react` to `^16.0.0`.
- Updated dependencies
  - @devtools/core-components@0.15.0
  - @devtools/core-plugin-api@1.9.4
  - @devtools/theme@0.5.7
  - @devtools/plugin-signals-react@0.0.5
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1
  - @devtools/plugin-notifications-common@0.0.5

## 0.3.1-next.2

### Patch Changes

- 653f60b: Severity filter label newly contains "Min severity" to better describe range instead of exact value.
- 4a53dd0: Implement icon in backend and show icon in table if available.
- 836127c: Updated dependency `@testing-library/react` to `^16.0.0`.
- Updated dependencies
  - @devtools/core-components@0.14.11-next.1
  - @devtools/core-plugin-api@1.9.4-next.0
  - @devtools/theme@0.5.7-next.0
  - @devtools/plugin-signals-react@0.0.5-next.1
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1
  - @devtools/plugin-notifications-common@0.0.5

## 0.3.1-next.1

### Patch Changes

- Updated dependencies
  - @devtools/core-components@0.14.11-next.0
  - @devtools/core-plugin-api@1.9.3
  - @devtools/errors@1.2.4
  - @devtools/theme@0.5.6
  - @devtools/types@1.1.1
  - @devtools/plugin-notifications-common@0.0.5
  - @devtools/plugin-signals-react@0.0.5-next.0

## 0.3.1-next.0

### Patch Changes

- Updated dependencies
  - @devtools/plugin-signals-react@0.0.5-next.0
  - @devtools/core-components@0.14.10
  - @devtools/core-plugin-api@1.9.3
  - @devtools/errors@1.2.4
  - @devtools/theme@0.5.6
  - @devtools/types@1.1.1
  - @devtools/plugin-notifications-common@0.0.5

## 0.3.0

### Minor Changes

- 0410fc9: By default, set notification as read when opening snackbar or web notification link

### Patch Changes

- 80b84f7: Fixed issue with notification reloading on page change
- b58e452: Broadcast notifications are now decorated with an icon.
- Updated dependencies
  - @devtools/core-components@0.14.10
  - @devtools/core-plugin-api@1.9.3
  - @devtools/errors@1.2.4
  - @devtools/theme@0.5.6
  - @devtools/types@1.1.1
  - @devtools/plugin-notifications-common@0.0.5
  - @devtools/plugin-signals-react@0.0.4

## 0.3.0-next.1

### Minor Changes

- 0410fc9: By default, set notification as read when opening snackbar or web notification link

### Patch Changes

- 80b84f7: Fixed issue with notification reloading on page change
- Updated dependencies
  - @devtools/core-components@0.14.10-next.0
  - @devtools/core-plugin-api@1.9.3
  - @devtools/errors@1.2.4
  - @devtools/theme@0.5.6
  - @devtools/types@1.1.1
  - @devtools/plugin-notifications-common@0.0.5
  - @devtools/plugin-signals-react@0.0.4

## 0.2.4-next.0

### Patch Changes

- Updated dependencies
  - @devtools/core-components@0.14.10-next.0
  - @devtools/core-plugin-api@1.9.3
  - @devtools/errors@1.2.4
  - @devtools/theme@0.5.6
  - @devtools/types@1.1.1
  - @devtools/plugin-notifications-common@0.0.5
  - @devtools/plugin-signals-react@0.0.4

## 0.2.3

### Patch Changes

- 3bf0697: The toolbar on the Notifications page is hidden when there are no listed notifications.
- Updated dependencies
  - @devtools/core-components@0.14.9
  - @devtools/plugin-notifications-common@0.0.5
  - @devtools/core-plugin-api@1.9.3
  - @devtools/errors@1.2.4
  - @devtools/theme@0.5.6
  - @devtools/types@1.1.1
  - @devtools/plugin-signals-react@0.0.4

## 0.2.3-next.2

### Patch Changes

- Updated dependencies
  - @devtools/core-components@0.14.9-next.1

## 0.2.3-next.1

### Patch Changes

- 3bf0697: The toolbar on the Notifications page is hidden when there are no listed notifications.
- Updated dependencies
  - @devtools/core-components@0.14.9-next.0
  - @devtools/core-plugin-api@1.9.3
  - @devtools/errors@1.2.4
  - @devtools/theme@0.5.6
  - @devtools/types@1.1.1
  - @devtools/plugin-notifications-common@0.0.4
  - @devtools/plugin-signals-react@0.0.4

## 0.2.3-next.0

### Patch Changes

- Updated dependencies
  - @devtools/core-components@0.14.9-next.0
  - @devtools/core-plugin-api@1.9.3
  - @devtools/errors@1.2.4
  - @devtools/theme@0.5.6
  - @devtools/types@1.1.1
  - @devtools/plugin-notifications-common@0.0.4
  - @devtools/plugin-signals-react@0.0.4

## 0.2.2

### Patch Changes

- 7f02684: Do not always show scrollbars in notification description
- 6d196b4: Fixes performance issue with Notifications title counter.
- d44a20a: Added additional plugin metadata to `package.json`.
- Updated dependencies
  - @devtools/core-components@0.14.8
  - @devtools/core-plugin-api@1.9.3
  - @devtools/theme@0.5.6
  - @devtools/plugin-notifications-common@0.0.4
  - @devtools/plugin-signals-react@0.0.4
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1

## 0.2.2-next.3

### Patch Changes

- d44a20a: Added additional plugin metadata to `package.json`.
- Updated dependencies
  - @devtools/core-components@0.14.8-next.2
  - @devtools/plugin-notifications-common@0.0.4-next.0
  - @devtools/plugin-signals-react@0.0.4-next.1
  - @devtools/core-plugin-api@1.9.3-next.0
  - @devtools/errors@1.2.4
  - @devtools/theme@0.5.6-next.0
  - @devtools/types@1.1.1

## 0.2.2-next.2

### Patch Changes

- Updated dependencies
  - @devtools/core-components@0.14.8-next.1
  - @devtools/core-plugin-api@1.9.3-next.0
  - @devtools/plugin-signals-react@0.0.4-next.0
  - @devtools/errors@1.2.4
  - @devtools/theme@0.5.6-next.0
  - @devtools/types@1.1.1
  - @devtools/plugin-notifications-common@0.0.3

## 0.2.2-next.1

### Patch Changes

- 6d196b4: Fixes performance issue with Notifications title counter.

## 0.2.2-next.0

### Patch Changes

- 7f02684: Do not always show scrollbars in notification description
- Updated dependencies
  - @devtools/theme@0.5.6-next.0
  - @devtools/core-components@0.14.8-next.0
  - @devtools/core-plugin-api@1.9.2
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1
  - @devtools/plugin-notifications-common@0.0.3
  - @devtools/plugin-signals-react@0.0.3

## 0.2.1

### Patch Changes

- e6bf85f: Allow overriding `NotificationsPage` page properties
- f730c0b: The user can newly mark all unread messages as read at one click.
- bfcb2f1: Allow showing notifications as snackbars in the UI
- e49a810: Show all notifications by default to match the sidebar item status
- 42eaf63: Increase default and allow modifying notification snackbar auto hide duration
- a42a19b: Empty descriptions are not rendered to improve the look&feel.
- 1bc3b86: Fix to show web notifications even when browser is on foreground. Fix duplicate notifications with multiple tabs.
- f793112: Allow defining `className` and additional properties for `NotificationsSideBarItem`
- e1c7d6e: Fix infinite loop in the notification title counter
- fcda449: The rendered size of a notification is limited for very long descriptions.
- f6633ca: Add option to set the notification as read automatically when the notification link is opened
- Updated dependencies
  - @devtools/core-components@0.14.7
  - @devtools/theme@0.5.4

## 0.2.1-next.2

### Patch Changes

- 42eaf63: Increase default and allow modifying notification snackbar auto hide duration
- Updated dependencies
  - @devtools/core-components@0.14.7-next.2

## 0.2.1-next.1

### Patch Changes

- f730c0b: The user can newly mark all unread messages as read at one click.
- bfcb2f1: Allow showing notifications as snackbars in the UI
- f6633ca: Add option to set the notification as read automatically when the notification link is opened
- Updated dependencies
  - @devtools/core-components@0.14.6-next.1

## 0.2.1-next.0

### Patch Changes

- e6bf85f: Allow overriding `NotificationsPage` page properties
- a42a19b: Empty descriptions are not rendered to improve the look&feel.
- 1bc3b86: Fix to show web notifications even when browser is on foreground. Fix duplicate notifications with multiple tabs.
- f793112: Allow defining `className` and additional properties for `NotificationsSideBarItem`
- e1c7d6e: Fix infinite loop in the notification title counter
- fcda449: The rendered size of a notification is limited for very long descriptions.
- Updated dependencies
  - @devtools/theme@0.5.4-next.0
  - @devtools/core-components@0.14.5-next.0
  - @devtools/core-plugin-api@1.9.2
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1
  - @devtools/plugin-notifications-common@0.0.3
  - @devtools/plugin-signals-react@0.0.3

## 0.2.0

### Minor Changes

- 939b4ec: Notifications-backend URL query parameter changed from `minimal_severity` to `minimumSeverity`.
- ec40998: On the Notifications page, the user can trigger "Save" or "Mark as read" actions once for multiple selected notifications.

### Patch Changes

- abfbcfc: Updated dependency `@testing-library/react` to `^15.0.0`.
- 9a41a7b: Migrate signals and notifications to the new backend in local development
- 939b4ec: The severity icons now get their colors from the theme.
- Updated dependencies
  - @devtools/plugin-notifications-common@0.0.3
  - @devtools/core-components@0.14.4
  - @devtools/core-plugin-api@1.9.2
  - @devtools/theme@0.5.3
  - @devtools/plugin-signals-react@0.0.3
  - @devtools/errors@1.2.4
  - @devtools/types@1.1.1

## 0.2.0-next.1

### Minor Changes

- ec40998: On the Notifications page, the user can trigger "Save" or "Mark as read" actions once for multiple selected notifications.

### Patch Changes

- Updated dependencies
  - @devtools/plugin-signals-react@0.0.3-next.0
  - @devtools/core-components@0.14.4-next.0
  - @devtools/core-plugin-api@1.9.1
  - @devtools/errors@1.2.4
  - @devtools/theme@0.5.2
  - @devtools/types@1.1.1
  - @devtools/plugin-notifications-common@0.0.2

## 0.1.3-next.0

### Patch Changes

- Updated dependencies
  - @devtools/core-components@0.14.4-next.0
  - @devtools/core-plugin-api@1.9.1
  - @devtools/errors@1.2.4
  - @devtools/theme@0.5.2
  - @devtools/types@1.1.1
  - @devtools/plugin-notifications-common@0.0.2
  - @devtools/plugin-signals-react@0.0.2

## 0.1.2

### Patch Changes

- e8f026a: Use ESM exports of react-use library
- 6a2fe4b: Added ESLint rule `no-top-level-material-ui-4-imports` in the `notifications` plugin to migrate the Material UI imports.
- Updated dependencies
  - @devtools/core-components@0.14.3
  - @devtools/core-plugin-api@1.9.1
  - @devtools/errors@1.2.4
  - @devtools/theme@0.5.2
  - @devtools/types@1.1.1
  - @devtools/plugin-notifications-common@0.0.2
  - @devtools/plugin-signals-react@0.0.2

## 0.1.1

### Patch Changes

- e8f026a: Use ESM exports of react-use library
- 6a2fe4b: Added ESLint rule `no-top-level-material-ui-4-imports` in the `notifications` plugin to migrate the Material UI imports.
- Updated dependencies
  - @devtools/core-components@0.14.2
  - @devtools/core-plugin-api@1.9.1
  - @devtools/errors@1.2.4
  - @devtools/theme@0.5.2
  - @devtools/types@1.1.1
  - @devtools/plugin-notifications-common@0.0.2
  - @devtools/plugin-signals-react@0.0.2

## 0.1.0

### Minor Changes

- 6e6d096: notifications can be newly sorted by list of predefined options
- cd96173: Notifications-backend URL query parameters changed from `sort/sortOrder` to `orderField` and `created_after` to `createdAfter` to unify with other plugins.
- 07abfe1: The NotificationsPage newly uses pagination implemented on the backend layer to avoid large dataset transfers
- 758f2a4: The Notifications frontend has been redesigned towards list view with condensed row details. The 'done' attribute has been removed to keep the Notifications aligned with the idea of a messaging system instead of a task manager.

### Patch Changes

- dff7a7e: All notifications can be marked and filtered by severity critical, high, normal or low, the default is 'normal'
- 75f2d84: the user can newly mark notifications as "Saved" for their better visibility in the future
- 5d9c5ba: The Notifications can be newly filtered based on the Created Date.
- Updated dependencies
  - @devtools/plugin-notifications-common@0.0.2
  - @devtools/core-components@0.14.1
  - @devtools/errors@1.2.4
  - @devtools/theme@0.5.2
  - @devtools/core-plugin-api@1.9.1
  - @devtools/types@1.1.1
  - @devtools/plugin-signals-react@0.0.2

## 0.1.0-next.2

### Minor Changes

- 6e6d096: notifications can be newly sorted by list of predefined options

### Patch Changes

- Updated dependencies
  - @devtools/core-components@0.14.1-next.2
  - @devtools/core-plugin-api@1.9.1-next.1
  - @devtools/errors@1.2.4-next.0
  - @devtools/theme@0.5.2-next.0
  - @devtools/types@1.1.1
  - @devtools/plugin-notifications-common@0.0.2-next.1
  - @devtools/plugin-signals-react@0.0.2-next.1

## 0.1.0-next.1

### Minor Changes

- 07abfe1: The NotificationsPage newly uses pagination implemented on the backend layer to avoid large dataset transfers

### Patch Changes

- Updated dependencies
  - @devtools/core-components@0.14.1-next.1
  - @devtools/plugin-notifications-common@0.0.2-next.1
  - @devtools/core-plugin-api@1.9.1-next.1
  - @devtools/errors@1.2.4-next.0
  - @devtools/theme@0.5.2-next.0
  - @devtools/types@1.1.1
  - @devtools/plugin-signals-react@0.0.2-next.1

## 0.1.0-next.0

### Minor Changes

- 758f2a4: The Notifications frontend has been redesigned towards list view with condensed row details. The 'done' attribute has been removed to keep the Notifications aligned with the idea of a messaging system instead of a task manager.

### Patch Changes

- 5d9c5ba: The Notifications can be newly filtered based on the Created Date.
- Updated dependencies
  - @devtools/errors@1.2.4-next.0
  - @devtools/theme@0.5.2-next.0
  - @devtools/core-components@0.14.1-next.0
  - @devtools/plugin-notifications-common@0.0.2-next.0
  - @devtools/core-plugin-api@1.9.1-next.0
  - @devtools/types@1.1.1
  - @devtools/plugin-signals-react@0.0.2-next.0

## 0.0.1

### Patch Changes

- 9873c44: Add support for signal type in notifications
- 8472188: Added or fixed the `repository` field in `package.json`.
- fb8fc24: Initial notifications system for devtools
- Updated dependencies
  - @devtools/core-components@0.14.0
  - @devtools/plugin-signals-react@0.0.1
  - @devtools/plugin-notifications-common@0.0.1
  - @devtools/theme@0.5.1
  - @devtools/core-plugin-api@1.9.0
  - @devtools/errors@1.2.3
  - @devtools/types@1.1.1

## 0.0.1-next.1

### Patch Changes

- 8472188: Added or fixed the `repository` field in `package.json`.
- Updated dependencies
  - @devtools/theme@0.5.1-next.1
  - @devtools/plugin-notifications-common@0.0.1-next.1
  - @devtools/plugin-signals-react@0.0.1-next.3
  - @devtools/core-components@0.14.0-next.2
  - @devtools/core-plugin-api@1.9.0-next.1
  - @devtools/errors@1.2.3
  - @devtools/types@1.1.1

## 0.0.1-next.0

### Patch Changes

- fb8fc24: Initial notifications system for devtools
- Updated dependencies
  - @devtools/core-components@0.14.0-next.1
  - @devtools/plugin-signals-react@0.0.1-next.2
  - @devtools/core-plugin-api@1.9.0-next.1
  - @devtools/theme@0.5.1-next.0
  - @devtools/plugin-notifications-common@0.0.1-next.0
  - @devtools/errors@1.2.3
  - @devtools/types@1.1.1