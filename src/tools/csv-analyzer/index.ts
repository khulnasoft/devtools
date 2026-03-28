import { FileText } from '@vicons/tabler';
import { defineTool } from '../tool';
import { translate } from '@/plugins/i18n.plugin';

export const tool = defineTool({
  name: translate('tools.csv-analyzer.title'),
  path: '/csv-analyzer',
  description: translate('tools.csv-analyzer.description'),
  keywords: ['csv', 'data', 'analysis', 'import', 'export', 'statistics', 'spreadsheet'],
  component: () => import('./csv-analyzer.vue'),
  icon: FileText,
});
