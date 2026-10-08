import { expect, test } from '@playwright/test';

test.describe('Tool - Generate object', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/generate-object');
  });

  test('Has title', async ({ page }) => {
    await expect(page).toHaveTitle('Generate object - Dev Tools');
  });

  test('Generates a JSON object', async ({ page }) => {
    await page.getByRole('button', { name: 'Generate object' }).click();

    await expect(page.getByText('Generated object')).toBeVisible();
  });

  test('Disables the generate button when the prompt is empty', async ({ page }) => {
    await page.getByPlaceholder('Describe the object you want to generate...').fill('');

    await expect(page.getByRole('button', { name: 'Generate object' })).toBeDisabled();
  });
});
