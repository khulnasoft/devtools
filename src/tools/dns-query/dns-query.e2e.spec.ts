import type { Page } from '@playwright/test';
import { expect, test } from '@playwright/test';

interface DohAnswer {
  name: string
  type: number
  TTL: number
  data: string
}

const aRecordResponse = {
  Status: 0,
  Answer: [
    { name: 'example.org.', type: 1, TTL: 300, data: '93.184.216.34' },
    { name: 'example.org.', type: 1, TTL: 300, data: '93.184.216.35' },
  ],
};

const nxDomainResponse = {
  Status: 3,
  Authority: [
    {
      name: 'com.',
      type: 6,
      TTL: 1800,
      data: 'a.gtld-servers.net. hostmaster.gtld-servers.net. 1 1800 900 86400 86400',
    },
  ],
};

const mxRecordResponse = {
  Status: 0,
  Answer: [{ name: 'example.org.', type: 15, TTL: 3600, data: '10 mail.example.org.' }],
};

/** Fakes both DoH providers, recording the urls that have been queried. */
async function mockDohProviders(
  page: Page,
  respond: (type: string) => { Status: number; Answer?: DohAnswer[]; Authority?: DohAnswer[] } = () => aRecordResponse,
) {
  const queriedUrls: URL[] = [];

  await page.route(
    url => url.hostname === 'cloudflare-dns.com' || url.hostname === 'dns.google',
    async (route) => {
      const url = new URL(route.request().url());
      queriedUrls.push(url);
      await route.fulfill({ json: respond(url.searchParams.get('type') ?? '') });
    },
  );

  return queriedUrls;
}

async function selectOption(page: Page, selectTestId: string, optionLabel: string) {
  const select = page.getByTestId(selectTestId);
  await select.click();
  await select.getByText(optionLabel, { exact: true }).click();
}

test.describe('Tool - DNS query', () => {
  test('Has correct title', async ({ page }) => {
    await page.goto('/dns-query');

    await expect(page).toHaveTitle('DNS query - Dev Tools');
  });

  test('Displays the answers of the queried domain', async ({ page }) => {
    const queriedUrls = await mockDohProviders(page);
    await page.goto('/dns-query');

    await page.getByTestId('dns-query-domain-name').fill('example.org');
    await page.getByTestId('dns-query-lookup-button').click();

    await expect(page.getByTestId('dns-query-status')).toContainText('NOERROR');
    expect((await page.getByTestId('area-content').allInnerTexts()).map(text => text.trim())).toEqual([
      '93.184.216.34',
      '93.184.216.35',
    ]);
    expect(queriedUrls.at(-1)?.href).toBe('https://cloudflare-dns.com/dns-query?name=example.org&type=A');
  });

  test('Queries the selected record type through the selected provider', async ({ page }) => {
    const queriedUrls = await mockDohProviders(page, type => (type === 'MX' ? mxRecordResponse : aRecordResponse));
    await page.goto('/dns-query');

    await selectOption(page, 'dns-query-record-type-select', 'MX');
    await selectOption(page, 'dns-query-provider-select', 'Google (8.8.8.8)');
    await page.getByTestId('dns-query-lookup-button').click();

    await expect(page.getByTestId('dns-query-status')).toContainText('NOERROR');
    expect(await page.getByTestId('area-content').first().innerText()).toContain('10 mail.example.org.');
    await expect(page.getByTestId('dns-query-queried-via')).toContainText('dns.google');
    expect(queriedUrls.at(-1)?.href).toBe('https://dns.google/resolve?name=example.com&type=MX');
  });

  test('Displays the authority section when the domain does not exist', async ({ page }) => {
    await mockDohProviders(page, () => nxDomainResponse);
    await page.goto('/dns-query');

    await page.getByTestId('dns-query-domain-name').fill('not-a-real-domain.org');
    await page.getByTestId('dns-query-lookup-button').click();

    await expect(page.getByTestId('dns-query-status')).toContainText('NXDOMAIN');
    expect((await page.getByTestId('area-content').allInnerTexts()).map(text => text.trim())).toEqual([
      'com. TTL 1800: a.gtld-servers.net. hostmaster.gtld-servers.net. 1 1800 900 86400 86400',
    ]);
  });

  test('Displays no result for an invalid domain name', async ({ page }) => {
    await mockDohProviders(page);
    await page.goto('/dns-query');

    await page.getByTestId('dns-query-domain-name').fill('not a domain');

    await expect(page.getByText('Enter a valid domain name (e.g. example.com)')).toBeVisible();
    await expect(page.getByTestId('dns-query-lookup-button')).toBeDisabled();
    await expect(page.getByTestId('dns-query-result')).toBeHidden();
  });
});
