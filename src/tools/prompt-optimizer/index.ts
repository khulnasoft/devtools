import { Edit } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Prompt optimizer',
  path: '/prompt-optimizer',
  description: 'Optimize and improve prompts for better AI model responses with best practices',
  keywords: ['prompt', 'optimizer', 'ai', 'llm', 'gpt', 'claude', 'improve', 'refine', 'best-practices'],
  component: () => import('./prompt-optimizer.vue'),
  icon: Edit,
  createdAt: new Date('2026-10-08'),
});
