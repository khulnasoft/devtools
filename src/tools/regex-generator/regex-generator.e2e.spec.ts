import { expect, test } from '@playwright/test';

test.describe('Tool - Regex generator', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/regex-generator');
  });

  test('Has title', async ({ page }) => {
    await expect(page).toHaveTitle('Regex generator - Dev Tools');
  });

  test('Generates regex for email', async ({ page }) => {
    await page.getByLabel('Describe the pattern you need').fill('match email addresses');

    await expect(page.getByText('Generated Regex')).toBeVisible();
    await expect(page.getByText('@')).toBeVisible();
  });

  test('Shows explanation', async ({ page }) => {
    await page.getByLabel('Describe the pattern you need').fill('match email addresses');

    await expect(page.getByText('Explanation')).toBeVisible();
    await expect(page.getByText('Matches standard email addresses')).toBeVisible();
  });

  test('Shows no results for empty input', async ({ page }) => {
    await expect(page.getByText('Generated Regex')).toBeHidden();
  });
});
