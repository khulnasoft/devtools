import { LineChart } from '@vicons/tabler';
import { defineTool } from '../tool';
import { translate } from '@/plugins/i18n.plugin';

export const tool = defineTool({
  name: translate('tools.response-analyzer.title'),
  path: '/response-analyzer',
  description: translate('tools.response-analyzer.description'),
  keywords: ['response', 'analyze', 'performance', 'status', 'time', 'metrics', 'api'],
  component: () => import('./response-analyzer.vue'),
  icon: LineChart,
});
