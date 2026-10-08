import { describe, expect, it } from 'vitest';
import { buildDemoImage, buildImagePrompt, generateImage } from './generate-image.service';
import { base64ToText } from '@/utils/base64';

const options = {
  prompt: 'A lighthouse at dusk',
  model: 'google/imagen-3',
  size: '1024x1024',
  style: 'natural',
} as const;

describe('generate-image', () => {
  it('Builds a prompt including the style and the aspect ratio', () => {
    const prompt = buildImagePrompt(options);

    expect(prompt).toContain('A lighthouse at dusk');
    expect(prompt).toContain('Style: natural');
    expect(prompt).toContain('1024x1024');
  });

  it('Renders a deterministic svg data url', () => {
    const first = buildDemoImage(options);
    const second = buildDemoImage(options);

    expect(first).to.equal(second);
    expect(first.startsWith('data:image/svg+xml;base64,')).to.equal(true);
  });

  it('Uses the requested dimensions', () => {
    const image = buildDemoImage({ ...options, size: '512x512' });
    const svg = base64ToText(image);

    expect(svg).toContain('width="512"');
    expect(svg).toContain('height="512"');
  });

  it('Escapes xml special characters of the prompt', () => {
    // A prompt without keywords falls back to the raw prompt text in the artwork
    const image = buildDemoImage({ ...options, prompt: '<b>&"x"' });
    const svg = base64ToText(image);

    expect(svg).not.toContain('<b>');
    expect(svg).toContain('&lt;b&gt;&amp;&quot;x&quot;');
  });

  it('Falls back to the demo generator when no gateway key is configured', async () => {
    const result = await generateImage(options);

    expect(result.source).to.equal('demo');
    expect(result.image.startsWith('data:image/svg+xml;base64,')).to.equal(true);
  });
});
