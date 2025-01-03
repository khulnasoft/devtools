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

import { test, expect } from '@playwright/test';

test('the results are rendered as expected', async ({ page }) => {
  await page.goto('/');

  const enterButton = page.getByRole('button', { name: 'Enter' });
  await expect(enterButton).toBeVisible();
  await enterButton.click();

  await page.goto('/search');
  await page.route(`http://*/api/search/query?term=*`, async route => {
    const results = [
      {
        type: 'software-catalog',
        document: {
          title: 'devtools',
          text: 'Devtools system documentation',
          location: '/result/location/path',
        },
      },
    ];
    await route.fulfill({ json: { results } });
  });

  await expect(
    page.getByPlaceholder('Search in Devtools Example App'),
  ).toBeVisible();

  await expect(page.getByText('Devtools system documentation')).toBeVisible();
});
