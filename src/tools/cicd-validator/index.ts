import { GitBranch } from '@vicons/tabler';
import { defineTool } from '../tool';
import { translate } from '@/plugins/i18n.plugin';

export const tool = defineTool({
  name: translate('tools.cicd-validator.title'),
  path: '/cicd-validator',
  description: translate('tools.cicd-validator.description'),
  keywords: ['ci', 'cd', 'pipeline', 'github', 'gitlab', 'jenkins', 'yaml', 'workflow', 'validation'],
  component: () => import('./cicd-validator.vue'),
  icon: GitBranch,
});
