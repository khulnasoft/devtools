<script setup lang="ts">
import { ref, computed } from 'vue';
import { NSelect, NInput, NButton, NAlert, NCheckbox, NSpace } from 'naive-ui';
import InputCopyable from '../../components/InputCopyable.vue';

const projectType = ref('react');
const projectName = ref('my-app');
const includeTests = ref(true);
const includeLinting = ref(true);
const includeDocker = ref(false);

const projectTypes = [
  { label: 'React App', value: 'react' },
  { label: 'Vue App', value: 'vue' },
  { label: 'Node.js Backend', value: 'nodejs' },
  { label: 'Express API', value: 'express' },
  { label: 'Next.js App', value: 'nextjs' },
  { label: 'Nuxt App', value: 'nuxt' },
];

const generatedStructure = computed(() => {
  let structure = '';
  
  structure += `${projectName.value}/\n`;
  structure += `├── package.json\n`;
  structure += `├── README.md\n`;
  structure += `├── .gitignore\n`;
  
  if (projectType.value === 'react' || projectType.value === 'nextjs' || projectType.value === 'vue' || projectType.value === 'nuxt') {
    structure += `├── src/\n`;
    structure += `│   ├── components/\n`;
    structure += `│   ├── pages/\n`;
    structure += `│   ├── styles/\n`;
    structure += `│   └── App.vue\n`;
  }
  
  if (projectType.value === 'nodejs' || projectType.value === 'express') {
    structure += `├── src/\n`;
    structure += `│   ├── routes/\n`;
    structure += `│   ├── controllers/\n`;
    structure += `│   ├── middleware/\n`;
    structure += `│   └── server.js\n`;
  }
  
  if (includeTests.value) {
    structure += `├── tests/\n`;
    structure += `│   ├── unit/\n`;
    structure += `│   └── integration/\n`;
  }
  
  if (includeLinting.value) {
    structure += `├── .eslintrc.json\n`;
    structure += `└── .prettierrc\n`;
  }
  
  if (includeDocker.value) {
    structure += `├── Dockerfile\n`;
    structure += `└── docker-compose.yml\n`;
  }
  
  return structure;
});

const generatedPackageJson = computed(() => {
  const pkg: Record<string, any> = {
    name: projectName.value,
    version: '1.0.0',
    description: `${projectType.value} project`,
    scripts: {
      dev: projectType.value.includes('nextjs') || projectType.value.includes('nuxt') 
        ? 'npm run dev' 
        : projectType.value.includes('react')
        ? 'vite'
        : 'node src/server.js',
    },
  };

  if (includeLinting.value) {
    pkg.scripts.lint = 'eslint src/';
  }

  if (includeTests.value) {
    pkg.scripts.test = 'jest';
  }

  return JSON.stringify(pkg, null, 2);
});

const generateGitignore = () => {
  return `node_modules/
.env
.env.local
dist/
build/
.DS_Store
*.log`;
};
</script>

<template>
  <div class="space-y-4">
    <n-alert type="info" closable>
      Generate project scaffolds and boilerplate structure.
    </n-alert>

    <div class="space-y-2">
      <label class="block font-semibold">Project Type</label>
      <n-select v-model:value="projectType" :options="projectTypes" />
    </div>

    <div class="space-y-2">
      <label class="block font-semibold">Project Name</label>
      <n-input v-model:value="projectName" type="text" placeholder="my-app" />
    </div>

    <div class="space-y-2">
      <label class="block font-semibold">Optional Features</label>
      <n-space vertical>
        <n-checkbox v-model:checked="includeTests">Include test setup (Jest)</n-checkbox>
        <n-checkbox v-model:checked="includeLinting">Include linting (ESLint + Prettier)</n-checkbox>
        <n-checkbox v-model:checked="includeDocker">Include Docker setup</n-checkbox>
      </n-space>
    </div>

    <div class="space-y-2">
      <label class="block font-semibold">Project Structure</label>
      <div class="p-3 bg-gray-50 border rounded font-mono text-sm whitespace-pre overflow-x-auto">
        {{ generatedStructure }}
      </div>
    </div>

    <div class="space-y-2">
      <label class="block font-semibold">package.json</label>
      <InputCopyable :value="generatedPackageJson" />
    </div>

    <div class="space-y-2">
      <label class="block font-semibold">.gitignore</label>
      <InputCopyable :value="generateGitignore()" />
    </div>
  </div>
</template>
