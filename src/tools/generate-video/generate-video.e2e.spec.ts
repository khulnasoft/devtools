import { expect, test } from '@playwright/test';

test.describe('Tool - Generate video', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/generate-video');
  });

  test('Has title', async ({ page }) => {
    await expect(page).toHaveTitle('Generate video - Dev Tools');
  });

  test('Generates a storyboard', async ({ page }) => {
    await page.getByRole('button', { name: 'Generate video' }).click();

    await expect(page.getByText('Storyboard')).toBeVisible();
    await expect(page.getByText(/Scene 1/)).toBeVisible();
  });

  test('Disables the generate button when the prompt is empty', async ({ page }) => {
    await page.getByPlaceholder('Describe the video you want to generate...').fill('');

    await expect(page.getByRole('button', { name: 'Generate video' })).toBeDisabled();
  });
});
