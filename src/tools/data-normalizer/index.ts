import { Sparkles } from '@vicons/tabler';
import { defineTool } from '../tool';
import { translate } from '@/plugins/i18n.plugin';

export const tool = defineTool({
  name: translate('tools.data-normalizer.title'),
  path: '/data-normalizer',
  description: translate('tools.data-normalizer.description'),
  keywords: ['data', 'normalize', 'clean', 'format', 'consistency', 'whitespace', 'case'],
  component: () => import('./data-normalizer.vue'),
  icon: Sparkles,
});
