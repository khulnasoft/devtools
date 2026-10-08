import { Braces } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Generate object',
  path: '/generate-object',
  description: 'Generate a structured JSON object from a prompt and a list of fields',
  keywords: ['ai', 'generate', 'object', 'json', 'schema', 'structured', 'prompt', 'llm'],
  component: () => import('./generate-object.vue'),
  icon: Braces,
  createdAt: new Date('2026-10-08'),
});
