import { Lock } from '@vicons/tabler';
import { defineTool } from '../tool';
import { translate } from '@/plugins/i18n.plugin';

export const tool = defineTool({
  name: translate('tools.ssl-parser.title'),
  path: '/ssl-parser',
  description: translate('tools.ssl-parser.description'),
  keywords: ['ssl', 'tls', 'certificate', 'x509', 'pem', 'der', 'crypto', 'security'],
  component: () => import('./ssl-parser.vue'),
  icon: Lock,
});
