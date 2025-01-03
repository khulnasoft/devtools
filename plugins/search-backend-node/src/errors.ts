/*
 * Copyright 2021 The Devtools Authors
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

import { isError } from '@devtools/errors';

/**
 *  Failed to query documents for index that does not exist.
 *  @public
 */
export class MissingIndexError extends Error {
  /**
   * An inner error that caused this error to be thrown, if any.
   */
  readonly cause?: Error | undefined;

  constructor(message?: string, cause?: Error | unknown) {
    super(message);

    Error.captureStackTrace?.(this, this.constructor);

    this.name = this.constructor.name;
    this.cause = isError(cause) ? cause : undefined;
  }
}
