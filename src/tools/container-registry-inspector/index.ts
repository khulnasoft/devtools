import { Package } from '@vicons/tabler';
import { defineTool } from '../tool';
import { translate } from '@/plugins/i18n.plugin';

export const tool = defineTool({
  name: translate('tools.container-registry-inspector.title'),
  path: '/container-registry-inspector',
  description: translate('tools.container-registry-inspector.description'),
  keywords: ['docker', 'container', 'registry', 'image', 'tag', 'version', 'hub'],
  component: () => import('./container-registry-inspector.vue'),
  icon: Package,
});
