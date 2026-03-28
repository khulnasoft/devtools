import { BrandVue } from '@vicons/tabler';
import { defineTool } from '../tool';
import { translate } from '@/plugins/i18n.plugin';

export const tool = defineTool({
  name: translate('tools.vue-cheatsheet.title'),
  path: '/vue-cheatsheet',
  description: translate('tools.vue-cheatsheet.description'),
  keywords: ['vue', 'vue3', 'composition api', 'cheatsheet'],
  component: () => import('./vue-cheatsheet.vue'),
  icon: BrandVue,
  createdAt: new Date('2024-03-15'),
});
