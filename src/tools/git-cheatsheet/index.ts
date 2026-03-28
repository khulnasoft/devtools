import { BrandGit } from '@vicons/tabler';
import { defineTool } from '../tool';
import { translate } from '@/plugins/i18n.plugin';

export const tool = defineTool({
  name: translate('tools.git-cheatsheet.title'),
  path: '/git-cheatsheet',
  description: translate('tools.git-cheatsheet.description'),
  keywords: ['git', 'version control', 'cheatsheet', 'commands'],
  component: () => import('./git-cheatsheet.vue'),
  icon: BrandGit,
  createdAt: new Date('2024-03-15'),
});
