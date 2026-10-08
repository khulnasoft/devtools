import { expect, test } from '@playwright/test';

test.describe('Tool - Generate image', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/generate-image');
  });

  test('Has title', async ({ page }) => {
    await expect(page).toHaveTitle('Generate image - Dev Tools');
  });

  test('Generates an image and displays it', async ({ page }) => {
    await page.getByRole('button', { name: 'Generate image' }).click();

    await expect(page.getByText('Generated image')).toBeVisible();
    await expect(page.getByAltText('Generated image')).toBeVisible();
  });

  test('Disables the generate button when the prompt is empty', async ({ page }) => {
    await page.getByPlaceholder('Describe the image you want to generate...').fill('');

    await expect(page.getByRole('button', { name: 'Generate image' })).toBeDisabled();
  });
});
