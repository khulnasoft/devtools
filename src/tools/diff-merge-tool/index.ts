import { GitFork } from '@vicons/tabler';
import { defineTool } from '../tool';
import { translate } from '@/plugins/i18n.plugin';

export const tool = defineTool({
  name: translate('tools.diff-merge-tool.title'),
  path: '/diff-merge-tool',
  description: translate('tools.diff-merge-tool.description'),
  keywords: ['diff', 'merge', 'compare', 'conflict', 'version', 'git', 'patch'],
  component: () => import('./diff-merge-tool.vue'),
  icon: GitFork,
});
