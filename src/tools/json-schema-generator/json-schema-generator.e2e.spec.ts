import { expect, test } from '@playwright/test';

test.describe('Tool - JSON schema generator', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/json-schema-generator');
  });

  test('Has title', async ({ page }) => {
    await expect(page).toHaveTitle('JSON schema generator - Dev Tools');
  });

  test('Generates schema from JSON', async ({ page }) => {
    await page.getByLabel('JSON input').fill('{"name": "John", "age": 30}');

    await expect(page.getByText('Generated JSON Schema')).toBeVisible();
    await expect(page.getByText('"type": "object"')).toBeVisible();
  });

  test('Shows error for invalid JSON', async ({ page }) => {
    await page.getByLabel('JSON input').fill('invalid json');

    await expect(page.getByText('// Invalid JSON input')).toBeVisible();
  });

  test('Shows no results for empty input', async ({ page }) => {
    await expect(page.getByText('Generated JSON Schema')).toBeHidden();
  });
});
