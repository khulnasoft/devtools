/*
 * Copyright 2023 The Devtools Authors
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

import { InputError } from '@devtools/errors';
import { EntityMatcherFn } from './types';

const allowedMatchers: Record<string, EntityMatcherFn> = {
  orphan: entity =>
    Boolean(entity.metadata.annotations?.['devtools.khulnasoft.com/orphan']),
};

/**
 * Matches on different semantic properties of the entity
 */
export function createIsMatcher(
  parameters: string[],
  onParseError: (error: Error) => void,
): EntityMatcherFn {
  const matchers = parameters.flatMap(parameter => {
    const matcher = allowedMatchers[parameter.toLocaleLowerCase('en-US')];
    if (!matcher) {
      const known = Object.keys(allowedMatchers).map(m => `'${m}'`);
      onParseError(
        new InputError(
          `'${parameter}' is not a valid parameter for 'is' filter expressions, expected one of ${known}`,
        ),
      );
      return [];
    }
    return [matcher];
  });

  return entity =>
    matchers.length ? matchers.some(matcher => matcher(entity)) : true;
}
