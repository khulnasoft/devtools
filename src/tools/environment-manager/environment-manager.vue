<script setup lang="ts">
import { ref } from 'vue';
import { NInput, NButton, NAlert, NSpace } from 'naive-ui';
import InputCopyable from '../../components/InputCopyable.vue';

interface EnvVar {
  key: string;
  value: string;
}

const envContent = ref('DATABASE_URL=postgres://localhost\nAPI_KEY=secret123\nNODE_ENV=development');
const envVars = ref<EnvVar[]>([]);
const newKey = ref('');
const newValue = ref('');

const parseEnvVars = () => {
  const vars: EnvVar[] = [];
  envContent.value.split('\n').forEach((line) => {
    const [key, ...valueParts] = line.split('=');
    if (key.trim()) {
      vars.push({
        key: key.trim(),
        value: valueParts.join('=').trim(),
      });
    }
  });
  envVars.value = vars;
};

const addVariable = () => {
  if (newKey.value.trim()) {
    envVars.value.push({
      key: newKey.value,
      value: newValue.value,
    });
    newKey.value = '';
    newValue.value = '';
    updateEnvContent();
  }
};

const removeVariable = (index: number) => {
  envVars.value.splice(index, 1);
  updateEnvContent();
};

const updateEnvContent = () => {
  envContent.value = envVars.value.map((v) => `${v.key}=${v.value}`).join('\n');
};

const downloadEnvFile = () => {
  const element = document.createElement('a');
  element.setAttribute('href', `data:text/plain;charset=utf-8,${encodeURIComponent(envContent.value)}`);
  element.setAttribute('download', '.env');
  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
};

const generateRandomSecret = () => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

const validateEnvVars = () => {
  const warnings: string[] = [];
  envVars.value.forEach((v) => {
    if (v.key.length === 0) warnings.push('Empty key found');
    if (!v.key.match(/^[A-Z_][A-Z0-9_]*$/i)) warnings.push(`Invalid key format: ${v.key}`);
  });
  return warnings;
};
</script>

<template>
  <div class="space-y-4">
    <n-alert type="info" closable>
      Manage and validate environment variables for different environments.
    </n-alert>

    <div class="space-y-2">
      <label class="block font-semibold">.env File Content</label>
      <n-input v-model:value="envContent" type="textarea" :rows="6" placeholder="KEY=value&#10;DATABASE_URL=..." />
      <n-button @click="parseEnvVars">Parse Variables</n-button>
    </div>

    <div v-if="envVars.length > 0" class="space-y-2">
      <label class="block font-semibold">Variables ({{ envVars.length }})</label>
      <div class="space-y-2">
        <div v-for="(v, i) in envVars" :key="i" class="flex gap-2 items-center p-2 bg-gray-50 rounded">
          <span class="font-mono font-semibold" style="flex: 0 0 200px">{{ v.key }}</span>
          <span class="font-mono text-gray-600 truncate" style="flex: 1">{{ v.value }}</span>
          <n-button text size="small" type="error" @click="removeVariable(i)">Remove</n-button>
        </div>
      </div>
    </div>

    <div class="space-y-2">
      <label class="block font-semibold">Add New Variable</label>
      <div class="flex gap-2">
        <n-input v-model:value="newKey" type="text" placeholder="KEY" style="flex: 0 0 150px" />
        <n-input v-model:value="newValue" type="text" placeholder="value" style="flex: 1" />
        <n-button @click="addVariable">Add</n-button>
      </div>
    </div>

    <n-space>
      <n-button @click="downloadEnvFile">Download .env File</n-button>
      <n-button @click="newValue = generateRandomSecret()">Generate Secret</n-button>
    </n-space>
  </div>
</template>
