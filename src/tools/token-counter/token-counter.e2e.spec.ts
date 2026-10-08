import { expect, test } from '@playwright/test';

test.describe('Tool - Token counter', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/token-counter');
  });

  test('Has title', async ({ page }) => {
    await expect(page).toHaveTitle('Token counter - Dev Tools');
  });

  test('Counts tokens for input text', async ({ page }) => {
    await page.getByLabel('Input text').fill('Hello, world!');

    await expect(page.getByText('Characters')).toBeVisible();
    await expect(page.getByText('13')).toBeVisible();
    await expect(page.getByText('Words')).toBeVisible();
    await expect(page.getByText('2')).toBeVisible();
  });

  test('Displays cost estimates', async ({ page }) => {
    await page.getByLabel('Input text').fill('This is a test prompt for counting tokens.');

    await expect(page.getByText('Cost Estimates (USD)')).toBeVisible();
    await expect(page.getByText('GPT-3.5 Input')).toBeVisible();
    await expect(page.getByText('GPT-4 Input')).toBeVisible();
  });

  test('Shows zero counts for empty input', async ({ page }) => {
    await expect(page.getByText('Characters')).toBeHidden();
    await expect(page.getByText('Cost Estimates (USD)')).toBeHidden();
  });
});
