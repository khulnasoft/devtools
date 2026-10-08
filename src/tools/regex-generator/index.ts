import { Language } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Regex generator',
  path: '/regex-generator',
  description: 'Generate regular expressions from natural language descriptions',
  keywords: ['regex', 'regular', 'expression', 'generator', 'pattern', 'match', 'ai'],
  component: () => import('./regex-generator.vue'),
  icon: Language,
  createdAt: new Date('2026-10-08'),
});
