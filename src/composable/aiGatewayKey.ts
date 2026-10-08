import { useStorage } from '@vueuse/core';

export const aiGatewayApiKeyStorageKey = 'ai-gateway:api-key';

/**
 * Key baked at build time, for self-hosted deployments where the site operator owns the key.
 * It is public by nature, so a key entered by the user always takes precedence over it.
 */
const envApiKey = (import.meta.env.VITE_AI_GATEWAY_API_KEY as string | undefined) ?? '';

/** Key entered by the user in the interface, kept in local storage and never shipped in the bundle */
const storedApiKey = useStorage<string>(aiGatewayApiKeyStorageKey, '');

export const aiGatewayApiKey = computed(() => storedApiKey.value.trim() || envApiKey.trim());

export const isAiGatewayKeyFromEnv = computed(() => !storedApiKey.value.trim() && envApiKey.trim() !== '');

export const hasAiGateway = computed(() => aiGatewayApiKey.value !== '');

export function setAiGatewayApiKey(apiKey: string) {
  storedApiKey.value = apiKey.trim();
}

export function clearAiGatewayApiKey() {
  storedApiKey.value = '';
}
