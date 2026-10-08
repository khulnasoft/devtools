import { Hash } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Token counter',
  path: '/token-counter',
  description: 'Count tokens for various AI models (GPT-3, GPT-4, Claude, etc.) to estimate API costs',
  keywords: ['token', 'counter', 'gpt', 'claude', 'ai', 'llm', 'cost', 'estimate', 'openai', 'anthropic'],
  component: () => import('./token-counter.vue'),
  icon: Hash,
  createdAt: new Date('2026-10-08'),
});
