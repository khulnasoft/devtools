import { ShieldCheck } from '@vicons/tabler';
import { defineTool } from '../tool';
import { translate } from '@/plugins/i18n.plugin';

export const tool = defineTool({
  name: translate('tools.hash-verifier.title'),
  path: '/hash-verifier',
  description: translate('tools.hash-verifier.description'),
  keywords: ['hash', 'verify', 'checksum', 'integrity', 'md5', 'sha', 'validation'],
  component: () => import('./hash-verifier.vue'),
  icon: ShieldCheck,
});
