import { describe, expect, it } from 'vitest';
import { nextTick } from 'vue';
import { aiGatewayApiKey, aiGatewayApiKeyStorageKey, clearAiGatewayApiKey, hasAiGateway, setAiGatewayApiKey } from './aiGatewayKey';

describe('aiGatewayKey', () => {
  it('Has no key configured by default', () => {
    clearAiGatewayApiKey();

    expect(hasAiGateway.value).to.equal(false);
    expect(aiGatewayApiKey.value).to.equal('');
  });

  it('Stores the key entered by the user', async () => {
    setAiGatewayApiKey('  my-key  ');

    expect(aiGatewayApiKey.value).to.equal('my-key');
    expect(hasAiGateway.value).to.equal(true);

    // useStorage persists on the next flush
    await nextTick();
    expect(localStorage.getItem(aiGatewayApiKeyStorageKey)).to.equal('my-key');
  });

  it('Clears the stored key', () => {
    setAiGatewayApiKey('my-key');
    clearAiGatewayApiKey();

    expect(hasAiGateway.value).to.equal(false);
  });
});
