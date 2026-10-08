import { Message } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'AI chat',
  path: '/ai-chat',
  description: 'Chat interface for AI models with message history and conversation management',
  keywords: ['ai', 'chat', 'gpt', 'claude', 'conversation', 'llm', 'assistant', 'message'],
  component: () => import('./ai-chat.vue'),
  icon: Message,
  createdAt: new Date('2026-10-08'),
});
