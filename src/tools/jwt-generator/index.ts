import { ShieldCheck } from '@vicons/tabler';
import { defineTool } from '../tool';
import { translate } from '@/plugins/i18n.plugin';

export const tool = defineTool({
  name: translate('tools.jwt-generator.title'),
  path: '/jwt-generator',
  description: translate('tools.jwt-generator.description'),
  keywords: ['jwt', 'generator', 'json', 'web', 'token', 'json web token', 'encode', 'sign', 'hmac', 'hs256', 'bearer'],
  component: () => import('./jwt-generator.vue'),
  icon: ShieldCheck,
  createdAt: new Date('2026-10-08'),
});
