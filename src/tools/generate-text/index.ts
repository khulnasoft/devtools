import { FileText } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Generate text',
  path: '/generate-text',
  description: 'Generate text from a prompt with a selectable model and tone',
  keywords: ['ai', 'generate', 'text', 'prompt', 'llm', 'gpt', 'claude', 'writing', 'content'],
  component: () => import('./generate-text.vue'),
  icon: FileText,
  createdAt: new Date('2026-10-08'),
});
