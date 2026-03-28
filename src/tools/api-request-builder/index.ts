import { Rocket } from '@vicons/tabler';
import { defineTool } from '../tool';
import { translate } from '@/plugins/i18n.plugin';

export const tool = defineTool({
  name: translate('tools.api-request-builder.title'),
  path: '/api-request-builder',
  description: translate('tools.api-request-builder.description'),
  keywords: [
    'api',
    'request',
    'http',
    'rest',
    'client',
    'test',
    'debug',
    'curl',
    'endpoint',
    'headers',
  ],
  component: () => import('./api-request-builder.vue'),
  icon: Rocket,
});
