import { Database } from '@vicons/tabler';
import { defineTool } from '../tool';
import { translate } from '@/plugins/i18n.plugin';

export const tool = defineTool({
  name: translate('tools.database-query-builder.title'),
  path: '/database-query-builder',
  description: translate('tools.database-query-builder.description'),
  keywords: ['database', 'sql', 'query', 'builder', 'select', 'insert', 'update', 'delete'],
  component: () => import('./database-query-builder.vue'),
  icon: Database,
});
