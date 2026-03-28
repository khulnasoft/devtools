import { BookOpen } from '@vicons/tabler';
import { defineTool } from '../tool';
import { translate } from '@/plugins/i18n.plugin';

export const tool = defineTool({
  name: translate('tools.changelog-generator.title'),
  path: '/changelog-generator',
  description: translate('tools.changelog-generator.description'),
  keywords: ['changelog', 'version', 'release', 'history', 'semantic', 'versioning'],
  component: () => import('./changelog-generator.vue'),
  icon: BookOpen,
});
