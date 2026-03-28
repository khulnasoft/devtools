import { Globe } from '@vicons/tabler';
import { defineTool } from '../tool';
import { translate } from '@/plugins/i18n.plugin';

export const tool = defineTool({
  name: translate('tools.header-generator.title'),
  path: '/header-generator',
  description: translate('tools.header-generator.description'),
  keywords: ['header', 'http', 'request', 'response', 'security', 'cors', 'generate'],
  component: () => import('./header-generator.vue'),
  icon: Globe,
});
