import { FileCode } from '@vicons/tabler';
import { defineTool } from '../tool';
import { translate } from '@/plugins/i18n.plugin';

export const tool = defineTool({
  name: translate('tools.documentation-generator.title'),
  path: '/documentation-generator',
  description: translate('tools.documentation-generator.description'),
  keywords: ['documentation', 'markdown', 'api', 'readme', 'guide', 'template'],
  component: () => import('./documentation-generator.vue'),
  icon: FileCode,
});
