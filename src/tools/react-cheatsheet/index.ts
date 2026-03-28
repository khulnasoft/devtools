import { BrandReact } from '@vicons/tabler';
import { defineTool } from '../tool';
import { translate } from '@/plugins/i18n.plugin';

export const tool = defineTool({
  name: translate('tools.react-cheatsheet.title'),
  path: '/react-cheatsheet',
  description: translate('tools.react-cheatsheet.description'),
  keywords: ['react', 'hooks', 'components', 'cheatsheet', 'jsx'],
  component: () => import('./react-cheatsheet.vue'),
  icon: BrandReact,
  createdAt: new Date('2024-03-15'),
});
