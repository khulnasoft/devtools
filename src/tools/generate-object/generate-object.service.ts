import { callAiGateway, capitalize, createSeededRandom, extractKeywords } from '@/utils/ai-gateway';

export const objectModels = [
  { label: 'GPT-4o mini', value: 'openai/gpt-4o-mini' },
  { label: 'Claude 3.5 Sonnet', value: 'anthropic/claude-3-5-sonnet' },
  { label: 'Gemini 1.5 Flash', value: 'google/gemini-1.5-flash' },
];

export interface ObjectField {
  name: string
  type: 'string' | 'number' | 'boolean' | 'array'
}

export interface ObjectGenerationOptions {
  prompt: string
  model: string
  fields: ObjectField[]
}

export interface ObjectGenerationResult {
  source: 'gateway' | 'demo'
  object: Record<string, unknown>
}

export const defaultObjectFields: ObjectField[] = [
  { name: 'title', type: 'string' },
  { name: 'summary', type: 'string' },
  { name: 'score', type: 'number' },
  { name: 'tags', type: 'array' },
  { name: 'isPublished', type: 'boolean' },
];

export const defaultObjectPrompt = 'A blog post about the benefits of small pull requests';

export function parseObjectFields(fieldsText: string): ObjectField[] {
  return fieldsText
    .split(/[\n,]/)
    .map(line => line.trim())
    .filter(line => line !== '')
    .map((line) => {
      const [name, rawType] = line.split(':').map(part => part.trim());
      const type = ['string', 'number', 'boolean', 'array'].includes(rawType) ? rawType : 'string';

      return { name: name.replace(/\s+/g, '_'), type } as ObjectField;
    })
    .filter(field => field.name !== '');
}

export function buildObjectPrompt({ prompt, fields }: Pick<ObjectGenerationOptions, 'prompt' | 'fields'>) {
  const schema = fields
    .map(field => `- ${field.name} (${field.type})`)
    .join('\n');

  return `Generate a JSON object about the following, using exactly these fields:\n${schema}\n\n${prompt}`;
}

const adjectives = ['practical', 'concise', 'detailed', 'friendly', 'actionable', 'focused'];
const domains = ['engineering', 'product', 'design', 'operations', 'research'];

function generateFieldValue({ field, keywords, random }: { field: ObjectField; keywords: string[]; random: () => number }) {
  const topic = keywords[0] ?? 'the generated topic';
  const domain = domains[Math.floor(random() * domains.length)];

  switch (field.type) {
    case 'number': {
      return Math.floor(random() * 90) + 10;
    }
    case 'boolean': {
      return random() > 0.5;
    }
    case 'array': {
      return keywords.slice(0, 3).length > 0
        ? keywords.slice(0, 3)
        : [domain, adjectives[Math.floor(random() * adjectives.length)], 'reference'];
    }
    case 'string':
    default: {
      if (/title|name|headline/i.test(field.name)) {
        return `${capitalize(adjectives[Math.floor(random() * adjectives.length)])} ${topic} in ${domain}`;
      }
      if (/summary|description|content|body/i.test(field.name)) {
        return `${capitalize(topic)} matters in ${domain} because it keeps the feedback loop short and the scope small.`;
      }

      return `${capitalize(topic)} (${domain})`;
    }
  }
}

/**
 * Deterministic, offline object generation, used when no AI Gateway key is configured.
 */
export function buildDemoObject({ prompt, fields }: ObjectGenerationOptions) {
  const random = createSeededRandom(`${prompt}-${fields.map(field => field.name).join('-')}`);
  const keywords = extractKeywords(prompt);

  return fields.reduce<Record<string, unknown>>(
    (object, field) => ({
      ...object,
      [field.name]: generateFieldValue({ field, keywords, random }),
    }),
    {},
  );
}

function parseLooseJson(text: string) {
  const start = text.indexOf('{');
  const end = text.lastIndexOf('}');

  if (start === -1 || end === -1) {
    throw new Error('No JSON object found in the model response');
  }

  return JSON.parse(text.slice(start, end + 1));
}

/**
 * Generates a structured object matching the requested fields.
 * Uses the AI Gateway when an API key is configured, otherwise falls back to the local demo generator.
 */
export async function generateObject(options: ObjectGenerationOptions): Promise<ObjectGenerationResult> {
  try {
    const { data } = await callAiGateway({
      modality: 'object',
      model: options.model,
      prompt: buildObjectPrompt(options),
      schema: options.fields,
    });

    return { source: 'gateway', object: parseLooseJson(String(data.text ?? data.object ?? '')) };
  }
  catch {
    return { source: 'demo', object: buildDemoObject(options) };
  }
}
