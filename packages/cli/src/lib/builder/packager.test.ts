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

import { formatErrorMessage } from './packager';

describe('formatErrorMessage with esbuild plugin error', () => {
  it('given error with missing errors array then error message should be shown', () => {
    const msg = formatErrorMessage({
      code: 'PLUGIN_ERROR',
      plugin: 'esbuild',
      message: 'test',
    });
    expect(msg).toBe('test');
  });
  it('given error with errors array then error message should have new lines', () => {
    const msg = formatErrorMessage({
      code: 'PLUGIN_ERROR',
      plugin: 'esbuild',
      message: 'test',
      id: 'index.js',
      errors: [{ text: 'Sample', location: { line: 1, column: 1 } }],
    });
    expect(msg).toContain('test\n\n');
  });
});
