import { aiGatewayApiKey } from '@/composable/aiGatewayKey';

export { aiGatewayApiKey, clearAiGatewayApiKey, hasAiGateway, isAiGatewayKeyFromEnv, setAiGatewayApiKey } from '@/composable/aiGatewayKey';

export const aiGatewayBaseUrl = 'https://ai-gateway.vercel.sh/v1';

export type AiGatewayModality = 'text' | 'object' | 'image' | 'speech' | 'video';

export interface AiGatewayRequest {
  modality: AiGatewayModality
  model: string
  prompt: string
  [option: string]: unknown
}

export interface AiGatewayResult {
  /** Whether the result comes from the AI Gateway or from the local demo generator */
  source: 'gateway' | 'demo'
  data: Record<string, unknown>
}

/**
 * Calls the Vercel AI Gateway for the given modality.
 * Throws when no API key is configured or when the gateway returns an error.
 */
export async function callAiGateway(request: AiGatewayRequest): Promise<AiGatewayResult> {
  const apiKey = aiGatewayApiKey.value;

  if (!apiKey) {
    throw new Error('No AI Gateway API key configured');
  }

  const response = await fetch(`${aiGatewayBaseUrl}/${request.modality}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
    },
    body: JSON.stringify(request),
  });

  if (!response.ok) {
    const reason = await response.text().catch(() => '');
    throw new Error(`AI Gateway request failed with status ${response.status}${reason ? `: ${reason}` : ''}`);
  }

  return { source: 'gateway', data: await response.json() };
}

/**
 * Deterministic pseudo random number generator, used by the demo generators so
 * that the same prompt always produces the same result.
 */
export function createSeededRandom(seed: string) {
  let hash = 2166136261;
  for (let index = 0; index < seed.length; index++) {
    hash ^= seed.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }

  return () => {
    hash += 0x6D2B79F5;
    let t = hash;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);

    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function pickOne<T>(items: T[], random: () => number) {
  return items[Math.floor(random() * items.length)];
}

export function capitalize(text: string) {
  return text.length === 0 ? text : text[0].toUpperCase() + text.slice(1);
}

/**
 * Splits a prompt into meaningful keywords, used as a seed by the demo generators.
 */
export function extractKeywords(prompt: string) {
  const stopWords = new Set([
    'a',
    'an',
    'and',
    'as',
    'at',
    'be',
    'by',
    'for',
    'from',
    'in',
    'into',
    'is',
    'it',
    'of',
    'on',
    'or',
    'that',
    'the',
    'this',
    'to',
    'with',
  ]);

  return prompt
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s]/gu, ' ')
    .split(/\s+/)
    .filter(word => word.length > 2 && !stopWords.has(word));
}
