import { Terminal2 } from '@vicons/tabler';
import { defineTool } from '../tool';
import { translate } from '@/plugins/i18n.plugin';

export const tool = defineTool({
  name: translate('tools.bash-cheatsheet.title'),
  path: '/bash-cheatsheet',
  description: translate('tools.bash-cheatsheet.description'),
  keywords: ['bash', 'shell', 'terminal', 'cheatsheet', 'commands', 'linux'],
  component: () => import('./bash-cheatsheet.vue'),
  icon: Terminal2,
  createdAt: new Date('2024-03-15'),
});
