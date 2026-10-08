import { expect, test } from '@playwright/test';

test.describe('Tool - Generate text', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/generate-text');
  });

  test('Has title', async ({ page }) => {
    await expect(page).toHaveTitle('Generate text - Dev Tools');
  });

  test('Generates text from the default prompt', async ({ page }) => {
    await page.getByRole('button', { name: 'Generate text' }).click();

    await expect(page.getByText('Generated text')).toBeVisible();
  });

  test('Disables the generate button when the prompt is empty', async ({ page }) => {
    await page.getByPlaceholder('Describe what you want the model to write...').fill('');

    await expect(page.getByRole('button', { name: 'Generate text' })).toBeDisabled();
  });
});
