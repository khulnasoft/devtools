<script setup lang="ts">
import { ref, computed } from 'vue';
import { NInput, NButton, NCheckbox, NSelect, NAlert, NSpace } from 'naive-ui';
import InputCopyable from '../../components/InputCopyable.vue';

const projectName = ref('My Project');
const projectDesc = ref('A great project');
const docType = ref('readme');
const includeInstall = ref(true);
const includeUsage = ref(true);
const includeContrib = ref(true);
const includeLicense = ref(true);

const docTypeOptions = [
  { label: 'README.md', value: 'readme' },
  { label: 'API Documentation', value: 'api' },
  { label: 'Contributing Guide', value: 'contributing' },
  { label: 'Installation Guide', value: 'install' },
];

const generatedDoc = computed(() => {
  let doc = '';

  if (docType.value === 'readme') {
    doc += `# ${projectName.value}\n\n`;
    doc += `${projectDesc.value}\n\n`;

    if (includeInstall.value) {
      doc += `## Installation\n\n`;
      doc += `\`\`\`bash\n`;
      doc += `npm install\n`;
      doc += `\`\`\`\n\n`;
    }

    if (includeUsage.value) {
      doc += `## Usage\n\n`;
      doc += `\`\`\`javascript\n`;
      doc += `const example = require('${projectName.value.toLowerCase()}');\n`;
      doc += `// Your code here\n`;
      doc += `\`\`\`\n\n`;
    }

    if (includeContrib.value) {
      doc += `## Contributing\n\n`;
      doc += `Contributions are welcome! Please read our contributing guidelines.\n\n`;
    }

    if (includeLicense.value) {
      doc += `## License\n\n`;
      doc += `MIT\n`;
    }
  } else if (docType.value === 'api') {
    doc += `# ${projectName.value} API Documentation\n\n`;
    doc += `## Overview\n\n`;
    doc += `${projectDesc.value}\n\n`;
    doc += `## Endpoints\n\n`;
    doc += `### GET /api/resource\n\n`;
    doc += `Get all resources.\n\n`;
    doc += `**Response:**\n\`\`\`json\n`;
    doc += `{\n  "data": []\n}\n`;
    doc += `\`\`\`\n\n`;
  } else if (docType.value === 'contributing') {
    doc += `# Contributing to ${projectName.value}\n\n`;
    doc += `Thank you for your interest in contributing!\n\n`;
    doc += `## Getting Started\n\n`;
    doc += `1. Fork the repository\n`;
    doc += `2. Create a feature branch\n`;
    doc += `3. Make your changes\n`;
    doc += `4. Submit a pull request\n\n`;
    doc += `## Code Standards\n\n`;
    doc += `- Follow ESLint rules\n`;
    doc += `- Write unit tests for new features\n`;
    doc += `- Update documentation\n`;
  } else if (docType.value === 'install') {
    doc += `# Installation Guide\n\n`;
    doc += `## Prerequisites\n\n`;
    doc += `- Node.js 16+\n`;
    doc += `- npm or yarn\n\n`;
    doc += `## Steps\n\n`;
    doc += `1. Clone the repository\n`;
    doc += `2. Install dependencies: \`npm install\`\n`;
    doc += `3. Configure environment variables\n`;
    doc += `4. Start development server: \`npm run dev\`\n`;
  }

  return doc;
});
</script>

<template>
  <div class="space-y-4">
    <n-alert type="info" closable>
      Generate project documentation templates in Markdown.
    </n-alert>

    <div class="space-y-2">
      <label class="block font-semibold">Project Name</label>
      <n-input v-model:value="projectName" type="text" placeholder="My Project" />
    </div>

    <div class="space-y-2">
      <label class="block font-semibold">Project Description</label>
      <n-input v-model:value="projectDesc" type="textarea" :rows="2" placeholder="Brief description" />
    </div>

    <div class="space-y-2">
      <label class="block font-semibold">Documentation Type</label>
      <n-select v-model:value="docType" :options="docTypeOptions" />
    </div>

    <div v-if="docType === 'readme'" class="space-y-2">
      <label class="block font-semibold">Sections</label>
      <n-space vertical>
        <n-checkbox v-model:checked="includeInstall">Include Installation</n-checkbox>
        <n-checkbox v-model:checked="includeUsage">Include Usage</n-checkbox>
        <n-checkbox v-model:checked="includeContrib">Include Contributing</n-checkbox>
        <n-checkbox v-model:checked="includeLicense">Include License</n-checkbox>
      </n-space>
    </div>

    <div class="space-y-2">
      <label class="block font-semibold">Generated Documentation</label>
      <InputCopyable :value="generatedDoc" />
    </div>
  </div>
</template>
