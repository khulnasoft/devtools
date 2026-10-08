import { expect, test } from '@playwright/test';

test.describe('Tool - SQL query generator', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/sql-query-generator');
  });

  test('Has title', async ({ page }) => {
    await expect(page).toHaveTitle('SQL query generator - Dev Tools');
  });

  test('Generates SELECT query', async ({ page }) => {
    await page.getByLabel('Table name').fill('users');
    await page.getByLabel('Describe the query you need').fill('select all users');

    await expect(page.getByText('Generated SQL Query')).toBeVisible();
    await expect(page.getByText('SELECT * FROM users')).toBeVisible();
  });

  test('Shows query type tag', async ({ page }) => {
    await page.getByLabel('Table name').fill('users');
    await page.getByLabel('Describe the query you need').fill('select all users');

    await expect(page.getByText('SELECT')).toBeVisible();
  });

  test('Shows no results for empty input', async ({ page }) => {
    await expect(page.getByText('Generated SQL Query')).toBeHidden();
  });
});
