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

import { RequestDetails } from './RequestDetails';
import { RequestValidationContext } from './RequestValidationContext';

/**
 * Validator used to check the received HTTP request
 * transmitting an event payload.
 *
 * E.g., it can be used for signature verification like
 * for GitHub webhook events
 * (https://docs.github.com/en/developers/webhooks-and-events/webhooks/creating-webhooks#secret)
 * or other kinds of checks.
 *
 * @public
 */
export type RequestValidator = (
  request: RequestDetails,
  context: RequestValidationContext,
) => Promise<void>;
