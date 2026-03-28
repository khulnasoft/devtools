import { Network } from '@vicons/tabler';
import { defineTool } from '../tool';
import { translate } from '@/plugins/i18n.plugin';

export const tool = defineTool({
  name: translate('tools.graphql-explorer.title'),
  path: '/graphql-explorer',
  description: translate('tools.graphql-explorer.description'),
  keywords: ['graphql', 'query', 'api', 'explorer', 'schema', 'mutation', 'subscription'],
  component: () => import('./graphql-explorer.vue'),
  icon: Network,
});
