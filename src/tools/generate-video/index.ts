import { Video } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Generate video',
  path: '/generate-video',
  description: 'Generate a video from a text prompt with selectable model, duration and aspect ratio',
  keywords: ['ai', 'generate', 'video', 'storyboard', 'prompt', 'veo', 'kling', 'runway', 'clip'],
  component: () => import('./generate-video.vue'),
  icon: Video,
  createdAt: new Date('2026-10-08'),
});
