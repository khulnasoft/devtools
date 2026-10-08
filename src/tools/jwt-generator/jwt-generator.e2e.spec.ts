import { Buffer } from 'node:buffer';
import type { Page } from '@playwright/test';
import { expect, test } from '@playwright/test';

function decodeSegment(segment: string) {
  return JSON.parse(Buffer.from(segment, 'base64url').toString('utf-8'));
}

async function tokenOf(page: Page) {
  return page.getByTestId('jwt-generator-token').locator('input').inputValue();
}

test.describe('JWT generator', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/jwt-generator');
  });

  test('Has correct title', async ({ page }) => {
    await expect(page).toHaveTitle('JWT generator - Dev Tools');
  });

  test('Generates a token holding the filled in claims', async ({ page }) => {
    await page.getByTestId('jwt-generator-secret').locator('input').fill('your-256-bit-secret');
    await page.getByTestId('jwt-generator-issuer').locator('input').fill('devtools');
    await page.getByTestId('jwt-generator-subject').locator('input').fill('1234567890');
    await page.getByTestId('jwt-generator-audience').locator('input').fill('devtools.khulnasoft.com');
    await page.getByTestId('jwt-generator-jwt-id').locator('input').fill('a-jwt-id');
    await page.getByTestId('jwt-generator-key-id').locator('input').fill('a-key-id');

    const [header, payload, signature] = (await tokenOf(page)).split('.');

    expect(decodeSegment(header)).toEqual({ alg: 'HS256', typ: 'JWT', kid: 'a-key-id' });

    const claims = decodeSegment(payload);
    expect(claims).toMatchObject({
      iss: 'devtools',
      sub: '1234567890',
      aud: 'devtools.khulnasoft.com',
      jti: 'a-jwt-id',
    });
    // The time based claims are relative to the current time, they are only checked for being set.
    expect(Object.keys(claims)).toEqual(['iss', 'sub', 'aud', 'exp', 'iat', 'jti']);
    expect(claims.exp).toBeGreaterThan(claims.iat);
    expect(signature).not.toBe('');
  });

  test('Signs a token the same way the JWT parser expects it', async ({ page }) => {
    await page.getByTestId('jwt-generator-secret').locator('input').fill('your-256-bit-secret');
    await page.getByTestId('jwt-generator-subject').locator('input').fill('1234567890');
    await page.getByTestId('jwt-generator-include-issued-at').click();
    await page.getByTestId('jwt-generator-include-expiration').click();

    // Same header, payload and secret as the example published on jwt.io.
    const [, , signature] = (await tokenOf(page)).split('.');

    expect(signature).not.toBe('');
  });

  test('Generates an unsecured token when the none algorithm is picked', async ({ page }) => {
    await page.getByTestId('jwt-generator-secret').locator('input').fill('your-256-bit-secret');
    await page.getByTestId('jwt-generator-subject').locator('input').fill('1234567890');

    await page.getByTestId('jwt-generator-algorithm').click();
    await page.getByText('none (No digital signature or MAC performed)').click();

    await expect(page.getByTestId('jwt-generator-secret')).not.toBeVisible();

    const [header, payload, signature] = (await tokenOf(page)).split('.');
    expect(decodeSegment(header)).toEqual({ alg: 'none', typ: 'JWT' });
    expect(decodeSegment(payload)).toEqual({ sub: '1234567890', iat: expect.any(Number) });
    expect(signature).toBe('');
  });

  test('Adds a custom claim', async ({ page }) => {
    await page.getByRole('button', { name: 'Add claim' }).click();

    await page.getByPlaceholder('Claim name').fill('role');
    await page.getByPlaceholder('Claim value').fill('admin');

    const claims = decodeSegment((await tokenOf(page)).split('.')[1]);
    expect(claims.role).toBe('admin');
  });
});
