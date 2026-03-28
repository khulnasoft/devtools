import { Settings } from '@vicons/tabler';
import { defineTool } from '../tool';
import { translate } from '@/plugins/i18n.plugin';

export const tool = defineTool({
  name: translate('tools.environment-manager.title'),
  path: '/environment-manager',
  description: translate('tools.environment-manager.description'),
  keywords: ['env', 'environment', 'variables', '.env', 'config', 'secrets', 'development'],
  component: () => import('./environment-manager.vue'),
  icon: Settings,
});
