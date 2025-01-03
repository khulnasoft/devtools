/*
 * Copyright 2024 The Devtools Authors
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
import { createExtensionPoint } from '@devtools/backend-plugin-api';
import { Notification } from '@devtools/plugin-notifications-common';

/**
 * @public
 */
export interface NotificationTemplateRenderer {
  getSubject?(notification: Notification): Promise<string>;
  getText?(notification: Notification): Promise<string>;
  getHtml?(notification: Notification): Promise<string>;
}

/**
 * @public
 */
export interface NotificationsEmailTemplateExtensionPoint {
  setTemplateRenderer(renderer: NotificationTemplateRenderer): void;
}

/**
 * @public
 */
export const notificationsEmailTemplateExtensionPoint =
  createExtensionPoint<NotificationsEmailTemplateExtensionPoint>({
    id: 'notifications.email.templates',
  });
