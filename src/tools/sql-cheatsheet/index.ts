import { Database } from '@vicons/tabler';
import { defineTool } from '../tool';
import { translate } from '@/plugins/i18n.plugin';

export const tool = defineTool({
  name: translate('tools.sql-cheatsheet.title'),
  path: '/sql-cheatsheet',
  description: translate('tools.sql-cheatsheet.description'),
  keywords: ['sql', 'database', 'queries', 'cheatsheet', 'select', 'join'],
  component: () => import('./sql-cheatsheet.vue'),
  icon: Database,
  createdAt: new Date('2024-03-15'),
});
