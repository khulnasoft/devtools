import { Clock } from '@vicons/tabler';
import { defineTool } from '../tool';
import { translate } from '@/plugins/i18n.plugin';

export const tool = defineTool({
  name: translate('tools.task-scheduler-helper.title'),
  path: '/task-scheduler-helper',
  description: translate('tools.task-scheduler-helper.description'),
  keywords: ['cron', 'schedule', 'task', 'automation', 'timer', 'interval', 'time'],
  component: () => import('./task-scheduler-helper.vue'),
  icon: Clock,
});
