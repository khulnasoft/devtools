import { expect, test } from '@playwright/test';

test.describe('Tool - AI chat', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/ai-chat');
  });

  test('Has title', async ({ page }) => {
    await expect(page).toHaveTitle('AI chat - Dev Tools');
  });

  test('Displays initial greeting message', async ({ page }) => {
    await expect(page.getByText('Hello! I\'m an AI assistant')).toBeVisible();
  });

  test('Sends message and displays response', async ({ page }) => {
    await page.getByPlaceholder('Type your message...').fill('Hello');
    await page.getByRole('button', { name: 'Send' }).click();

    await expect(page.getByText('You')).toBeVisible();
    await expect(page.getByText('AI')).toBeVisible();
  });

  test('Clears chat', async ({ page }) => {
    await page.getByPlaceholder('Type your message...').fill('Hello');
    await page.getByRole('button', { name: 'Send' }).click();

    await page.getByRole('button', { name: 'Clear chat' }).click();

    await expect(page.getByText('Hello! I\'m an AI assistant')).toBeVisible();
  });

  test('Shows typing indicator', async ({ page }) => {
    await page.getByPlaceholder('Type your message...').fill('Hello');
    await page.getByRole('button', { name: 'Send' }).click();

    // Typing indicator should appear briefly
    await expect(page.locator('[style*="animation"]')).toBeVisible({ timeout: 2000 });
  });

  test('Disables send button when input is empty', async ({ page }) => {
    await expect(page.getByRole('button', { name: 'Send' })).toBeDisabled();
  });

  test('Sends message with Enter key', async ({ page }) => {
    await page.getByPlaceholder('Type your message...').fill('Hello');
    await page.getByPlaceholder('Type your message...').press('Enter');

    await expect(page.getByText('You')).toBeVisible();
  });
});
