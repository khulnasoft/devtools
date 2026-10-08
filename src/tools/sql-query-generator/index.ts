import { Database } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'SQL query generator',
  path: '/sql-query-generator',
  description: 'Generate SQL queries from natural language descriptions',
  keywords: ['sql', 'query', 'generator', 'database', 'select', 'insert', 'update', 'ai'],
  component: () => import('./sql-query-generator.vue'),
  icon: Database,
  createdAt: new Date('2026-10-08'),
});
