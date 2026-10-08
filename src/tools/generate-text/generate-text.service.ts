import { callAiGateway, capitalize, createSeededRandom, extractKeywords, pickOne } from '@/utils/ai-gateway';

export const textModels = [
  { label: 'GPT-4o mini', value: 'openai/gpt-4o-mini' },
  { label: 'Claude 3.5 Sonnet', value: 'anthropic/claude-3-5-sonnet' },
  { label: 'Gemini 1.5 Flash', value: 'google/gemini-1.5-flash' },
  { label: 'Llama 3.3 70B', value: 'meta/llama-3.3-70b' },
];

export const textTones = ['neutral', 'formal', 'casual', 'persuasive', 'technical'] as const;

export type TextTone = typeof textTones[number];

export interface TextGenerationOptions {
  prompt: string
  model: string
  tone: TextTone
}

export interface TextGenerationResult {
  source: 'gateway' | 'demo'
  text: string
}

const toneOpeners: Record<TextTone, string[]> = {
  neutral: ['Here is a take on your request:', 'Below is a straightforward response:', 'Summary of what you asked for:'],
  formal: ['To summarise the request formally:', 'Please find below a formal response:', 'In formal terms, the response is as follows:'],
  casual: ['Sure thing! Here you go:', 'Happy to help with that:', 'Ok, so here is what I came up with:'],
  persuasive: ['Here is why this matters:', 'Consider this compelling take:', 'The strongest case looks like this:'],
  technical: ['Technical breakdown:', 'Implementation notes:', 'From an engineering standpoint:'],
};

const toneConnectors: Record<TextTone, string[]> = {
  neutral: ['Additionally,', 'Moreover,', 'As a result,'],
  formal: ['Furthermore,', 'Consequently,', 'In addition,'],
  casual: ['On top of that,', 'Also,', 'And,'],
  persuasive: ['That is the key point:', 'More importantly,', 'Which is why it matters:'],
  technical: ['Implementation-wise,', 'At the API level,', 'From a performance standpoint,'],
};

/**
 * Builds the prompt sent to the model, so the tone is part of the instructions.
 */
export function buildTextPrompt({ prompt, tone }: Pick<TextGenerationOptions, 'prompt' | 'tone'>) {
  return `Write a ${tone} response about the following topic, in a few short paragraphs:\n\n${prompt}`;
}

/**
 * Deterministic, offline text generation, used when no AI Gateway key is configured.
 */
export function buildDemoText({ prompt, tone }: TextGenerationOptions) {
  const keywords = extractKeywords(prompt);
  const random = createSeededRandom(`${prompt}-${tone}`);
  const topics = keywords.length > 0 ? keywords : ['the topic you described'];
  const subject = topics[0];
  const secondary = topics[1] ?? topics[0];

  const opener = pickOne(toneOpeners[tone], random);
  const connector = pickOne(toneConnectors[tone], random);

  return [
    `${opener} ${capitalize(subject)} matters because it shapes how the rest of the work falls into place. When ${subject} is handled early, the decisions that follow tend to be smaller and easier to reverse.`,
    `${connector} the practical side of ${secondary} is where most of the value shows up. A short checklist, one worked example, and a clear definition of done usually save more time than any clever trick.`,
    `In short: start with ${subject}, keep the scope narrow, and revisit the assumptions around ${secondary} once there is real feedback. That loop is what turns a good intention into a result you can rely on.`,
  ].join('\n\n');
}

/**
 * Generates a text. Uses the AI Gateway when an API key is configured,
 * otherwise falls back to the local demo generator.
 */
export async function generateText(options: TextGenerationOptions): Promise<TextGenerationResult> {
  try {
    const { data } = await callAiGateway({
      modality: 'text',
      model: options.model,
      prompt: buildTextPrompt(options),
    });

    return { source: 'gateway', text: String(data.text ?? '') };
  }
  catch {
    return { source: 'demo', text: buildDemoText(options) };
  }
}
