import { AlertTriangle } from '@vicons/tabler';
import { defineTool } from '../tool';
import { translate } from '@/plugins/i18n.plugin';

export const tool = defineTool({
  name: translate('tools.owasp-checker.title'),
  path: '/owasp-checker',
  description: translate('tools.owasp-checker.description'),
  keywords: ['owasp', 'security', 'vulnerability', 'xss', 'sql', 'injection', 'top10'],
  component: () => import('./owasp-checker.vue'),
  icon: AlertTriangle,
});
