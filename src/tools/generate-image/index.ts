import { Photo } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Generate image',
  path: '/generate-image',
  description: 'Generate an image from a text prompt with selectable model, size and style',
  keywords: ['ai', 'generate', 'image', 'picture', 'art', 'prompt', 'imagen', 'flux', 'diffusion'],
  component: () => import('./generate-image.vue'),
  icon: Photo,
  createdAt: new Date('2026-10-08'),
});
