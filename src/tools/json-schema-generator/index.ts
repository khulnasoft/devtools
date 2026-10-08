import { DatabaseImport } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'JSON schema generator',
  path: '/json-schema-generator',
  description: 'Generate JSON schemas from JSON examples for validation and documentation',
  keywords: ['json', 'schema', 'generator', 'validation', 'typescript', 'openapi', 'swagger'],
  component: () => import('./json-schema-generator.vue'),
  icon: DatabaseImport,
  createdAt: new Date('2026-10-08'),
});
