import { Radio } from '@vicons/tabler';
import { defineTool } from '../tool';
import { translate } from '@/plugins/i18n.plugin';

export const tool = defineTool({
  name: translate('tools.websocket-tester.title'),
  path: '/websocket-tester',
  description: translate('tools.websocket-tester.description'),
  keywords: ['websocket', 'ws', 'real-time', 'socket', 'connection', 'message', 'test'],
  component: () => import('./websocket-tester.vue'),
  icon: Radio,
});
