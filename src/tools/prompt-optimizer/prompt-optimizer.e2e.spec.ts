import { expect, test } from '@playwright/test';

test.describe('Tool - Prompt optimizer', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/prompt-optimizer');
  });

  test('Has title', async ({ page }) => {
    await expect(page).toHaveTitle('Prompt optimizer - Dev Tools');
  });

  test('Shows improvement suggestions', async ({ page }) => {
    await page.getByLabel('Original prompt').fill('write code');

    await expect(page.getByText('Improvement Suggestions')).toBeVisible();
    await expect(page.getByText('Add more context and details to your prompt')).toBeVisible();
  });

  test('Generates optimized prompt', async ({ page }) => {
    await page.getByLabel('Original prompt').fill('write code');

    await expect(page.getByText('Optimized Prompt')).toBeVisible();
    await expect(page.getByText('You are a helpful assistant')).toBeVisible();
  });

  test('Shows no results for empty input', async ({ page }) => {
    await expect(page.getByText('Improvement Suggestions')).toBeHidden();
    await expect(page.getByText('Optimized Prompt')).toBeHidden();
  });
});
