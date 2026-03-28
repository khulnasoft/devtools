import { Folder } from '@vicons/tabler';
import { defineTool } from '../tool';
import { translate } from '@/plugins/i18n.plugin';

export const tool = defineTool({
  name: translate('tools.project-generator.title'),
  path: '/project-generator',
  description: translate('tools.project-generator.description'),
  keywords: ['project', 'generate', 'scaffold', 'template', 'boilerplate', 'structure'],
  component: () => import('./project-generator.vue'),
  icon: Folder,
});
