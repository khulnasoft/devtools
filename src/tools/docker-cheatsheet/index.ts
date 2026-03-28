import { BrandDocker } from '@vicons/tabler';
import { defineTool } from '../tool';
import { translate } from '@/plugins/i18n.plugin';

export const tool = defineTool({
  name: translate('tools.docker-cheatsheet.title'),
  path: '/docker-cheatsheet',
  description: translate('tools.docker-cheatsheet.description'),
  keywords: ['docker', 'containers', 'cheatsheet', 'images', 'compose'],
  component: () => import('./docker-cheatsheet.vue'),
  icon: BrandDocker,
  createdAt: new Date('2024-03-15'),
});
