import { expect, test } from '@playwright/test';

test.describe('Tool - Generate speech', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/generate-speech');
  });

  test('Has title', async ({ page }) => {
    await expect(page).toHaveTitle('Generate speech - Dev Tools');
  });

  test('Shows the character count and estimated duration', async ({ page }) => {
    await expect(page.getByText(/characters, about \d+s at/)).toBeVisible();
  });

  test('Disables the generate button when the text is empty', async ({ page }) => {
    await page.getByPlaceholder('Type the text you want to hear...').fill('');

    await expect(page.getByRole('button', { name: 'Generate speech' })).toBeDisabled();
  });

  test('Falls back to the browser preview when no gateway key is configured', async ({ page }) => {
    await page.getByRole('button', { name: 'Generate speech' }).click();

    await expect(page.getByText('No AI Gateway key configured')).toBeVisible();
  });

  test('Accepts a key entered by the user', async ({ page }) => {
    await page.getByRole('button', { name: 'AI Gateway key' }).click();
    await page.getByPlaceholder('AI Gateway API key...').fill('test-key');
    await page.getByRole('button', { name: 'Save key' }).click();

    await expect(page.getByText('Using your own key, stored in this browser')).toBeVisible();
  });
});
