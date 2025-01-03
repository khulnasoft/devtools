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
import { AppTheme } from '@devtools/core-plugin-api';
import { ThemeBlueprint } from './ThemeBlueprint';
import { createExtensionTester } from '@devtools/frontend-test-utils';

describe('ThemeBlueprint', () => {
  const theme = {
    id: 'light',
    colors: { primary: 'blue' },
    variant: 'dark',
    title: 'lols',
    Provider: (_: { children: React.ReactNode }) => null,
  } as AppTheme;

  it('should create an extension with sensible defaults', () => {
    expect(ThemeBlueprint.make({ name: 'light', params: { theme } }))
      .toMatchInlineSnapshot(`
      {
        "$$type": "@devtools/ExtensionDefinition",
        "T": undefined,
        "attachTo": {
          "id": "api:app/app-theme",
          "input": "themes",
        },
        "configSchema": undefined,
        "disabled": false,
        "factory": [Function],
        "inputs": {},
        "kind": "theme",
        "name": "light",
        "output": [
          [Function],
        ],
        "override": [Function],
        "toString": [Function],
        "version": "v2",
      }
    `);
  });

  it('should return the theme as an themeDataRef', async () => {
    const extension = ThemeBlueprint.make({ params: { theme } });

    expect(
      createExtensionTester(extension).get(ThemeBlueprint.dataRefs.theme),
    ).toEqual(theme);
  });
});
