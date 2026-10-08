import { callAiGateway, createSeededRandom, extractKeywords } from '@/utils/ai-gateway';
import { textToBase64 } from '@/utils/base64';

export const imageModels = [
  { label: 'Imagen 3', value: 'google/imagen-3' },
  { label: 'GPT-4o image', value: 'openai/gpt-4o-image' },
  { label: 'FLUX.1 schnell', value: 'black-forest-labs/flux-1-schnell' },
];

export const imageSizes = ['1024x1024', '1024x768', '768x1024', '512x512'] as const;

export const imageStyles = ['natural', 'photographic', 'illustration', '3d render', 'watercolor'] as const;

export type ImageStyle = typeof imageStyles[number];

export interface ImageGenerationOptions {
  prompt: string
  model: string
  size: string
  style: ImageStyle
}

export interface ImageGenerationResult {
  source: 'gateway' | 'demo'
  /** Image as a data URL, ready to be previewed and downloaded */
  image: string
}

const [defaultWidth, defaultHeight] = imageSizes[0].split('x').map(Number);

function hashColor(input: string, saturation: number, lightness: number) {
  const random = createSeededRandom(input);
  const hue = Math.floor(random() * 360);
  const secondHue = (hue + 40 + Math.floor(random() * 80)) % 360;

  return [
    `hsl(${hue}, ${saturation}%, ${lightness}%)`,
    `hsl(${secondHue}, ${Math.max(20, saturation - 15)}%, ${Math.min(80, lightness + 10)}%)`,
  ] as const;
}

function escapeXml(text: string) {
  return text.replace(/[<>&'"]/g, character => ({
    '<': '&lt;',
    '>': '&gt;',
    '&': '&amp;',
    '\'': '&apos;',
    '"': '&quot;',
  })[character] ?? character);
}

/**
 * Builds a prompt sent to the model, including the style and the aspect ratio.
 */
export function buildImagePrompt({ prompt, style, size }: Pick<ImageGenerationOptions, 'prompt' | 'style' | 'size'>) {
  return `${prompt}\n\nStyle: ${style}. Aspect ratio: ${size}.`;
}

/**
 * Deterministic, offline image generation, used when no AI Gateway key is configured.
 * It renders a gradient artwork derived from the prompt, so the tool stays usable.
 */
function parseSize(size: string): [number, number] {
  const dimensions = size.split('x').map(Number);

  if (dimensions.length !== 2 || dimensions.some(dimension => !Number.isFinite(dimension) || dimension <= 0)) {
    return [defaultWidth, defaultHeight];
  }

  return [dimensions[0], dimensions[1]];
}

export function buildDemoImage({ prompt, style, size }: ImageGenerationOptions) {
  const [width, height] = parseSize(size);
  const keywords = extractKeywords(prompt);
  const [from, to] = hashColor(`${prompt}-${style}`, 70, 55);
  const [accentFrom, accentTo] = hashColor(`${style}-${prompt}`, 80, 65);
  const title = escapeXml(keywords.slice(0, 4).join(' · ') || prompt.slice(0, 60));

  const shapes = Array.from({ length: 5 }, (_, index) => {
    const random = createSeededRandom(`${prompt}-${index}`);
    const cx = Math.round(random() * width);
    const cy = Math.round(random() * height);
    const radius = Math.round(Math.min(width, height) * (0.08 + random() * 0.18));
    const opacity = (0.15 + random() * 0.25).toFixed(2);

    return `<circle cx="${cx}" cy="${cy}" r="${radius}" fill="#ffffff" opacity="${opacity}" />`;
  }).join('\n  ');

  const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <defs>
    <linearGradient id="background" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${from}" />
      <stop offset="100%" stop-color="${to}" />
    </linearGradient>
    <linearGradient id="accent" x1="0" y1="1" x2="1" y2="0">
      <stop offset="0%" stop-color="${accentFrom}" stop-opacity="0.8" />
      <stop offset="100%" stop-color="${accentTo}" stop-opacity="0.2" />
    </linearGradient>
  </defs>
  <rect width="${width}" height="${height}" fill="url(#background)" />
  <rect width="${width}" height="${height}" fill="url(#accent)" />
  ${shapes}
  <text x="50%" y="88%" text-anchor="middle" font-family="sans-serif" font-size="${Math.round(width / 32)}" fill="#ffffff" opacity="0.92">
    ${title}
  </text>
</svg>
  `.trim();

  return `data:image/svg+xml;base64,${textToBase64(svg)}`;
}

/**
 * Generates an image. Uses the AI Gateway when an API key is configured,
 * otherwise falls back to the local demo generator.
 */
export async function generateImage(options: ImageGenerationOptions): Promise<ImageGenerationResult> {
  try {
    const { data } = await callAiGateway({
      modality: 'image',
      model: options.model,
      prompt: buildImagePrompt(options),
      size: options.size,
    });

    const image = String(data.image ?? data.url ?? '');

    if (image === '') {
      throw new Error('No image returned by the AI Gateway');
    }

    return { source: 'gateway', image };
  }
  catch {
    return { source: 'demo', image: buildDemoImage(options) };
  }
}
