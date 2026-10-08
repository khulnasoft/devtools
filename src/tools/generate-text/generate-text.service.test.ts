import { describe, expect, it } from 'vitest';
import { buildDemoText, buildTextPrompt, generateText } from './generate-text.service';

describe('generate-text', () => {
  it('Builds a prompt including the requested tone', () => {
    const prompt = buildTextPrompt({ prompt: 'Explain monorepos', tone: 'formal' });

    expect(prompt).toContain('formal');
    expect(prompt).toContain('Explain monorepos');
  });

  it('Generates a deterministic demo text', () => {
    const options = { prompt: 'Explain monorepos', model: 'openai/gpt-4o-mini', tone: 'neutral' } as const;
    const first = buildDemoText(options);
    const second = buildDemoText(options);

    expect(first).to.equal(second);
    expect(first).toContain('monorepos');
  });

  it('Falls back to the demo generator when no gateway key is configured', async () => {
    const result = await generateText({
      prompt: 'Explain monorepos',
      model: 'openai/gpt-4o-mini',
      tone: 'neutral',
    });

    expect(result.source).to.equal('demo');
    expect(result.text).not.to.equal('');
  });
});
