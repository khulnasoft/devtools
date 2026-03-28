import { Code } from '@vicons/tabler';
import { defineTool } from '../tool';
import { translate } from '@/plugins/i18n.plugin';

export const tool = defineTool({
  name: translate('tools.javascript-cheatsheet.title'),
  path: '/javascript-cheatsheet',
  description: translate('tools.javascript-cheatsheet.description'),
  keywords: ['javascript', 'js', 'cheatsheet', 'reference', 'es6', 'syntax'],
  component: () => import('./javascript-cheatsheet.vue'),
  icon: Code,
  createdAt: new Date('2024-03-15'),
});
