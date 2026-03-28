import { Code2 } from '@vicons/tabler';
import { defineTool } from '../tool';
import { translate } from '@/plugins/i18n.plugin';

export const tool = defineTool({
  name: translate('tools.css-cheatsheet.title'),
  path: '/css-cheatsheet',
  description: translate('tools.css-cheatsheet.description'),
  keywords: ['css', 'styles', 'cheatsheet', 'layout', 'flexbox', 'grid'],
  component: () => import('./css-cheatsheet.vue'),
  icon: Code2,
  createdAt: new Date('2024-03-15'),
});
