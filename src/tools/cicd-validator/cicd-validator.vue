<script setup lang="ts">
import { ref, computed } from 'vue';
import { NInput, NButton, NAlert, NIcon } from 'naive-ui';
import { CheckCircle, AlertCircle } from '@vicons/tabler';
import InputCopyable from '../../components/InputCopyable.vue';

const yamlContent = ref(`name: CI/CD Pipeline
on:
  push:
    branches: [main]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Run tests
        run: npm test`);

const validationResults = computed(() => {
  const results: { type: 'error' | 'warning' | 'success'; message: string }[] = [];
  
  try {
    const lines = yamlContent.value.split('\n');
    let isValidYaml = true;
    
    // Basic YAML structure validation
    let indentLevel = 0;
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const match = line.match(/^(\s*)/);
      const currentIndent = match ? match[1].length : 0;
      
      if (currentIndent % 2 !== 0) {
        results.push({
          type: 'error',
          message: `Line ${i + 1}: Incorrect indentation (must be multiple of 2 spaces)`,
        });
        isValidYaml = false;
      }
    }
    
    if (yamlContent.value.includes('on:')) {
      results.push({ type: 'success', message: 'Trigger event found' });
    } else {
      results.push({ type: 'warning', message: 'No trigger event specified' });
    }
    
    if (yamlContent.value.includes('jobs:')) {
      results.push({ type: 'success', message: 'Jobs section found' });
    } else {
      results.push({ type: 'error', message: 'Missing jobs section' });
    }
    
    if (isValidYaml) {
      results.push({ type: 'success', message: 'Valid YAML structure' });
    }
  } catch (e) {
    results.push({ type: 'error', message: 'Failed to parse YAML' });
  }
  
  return results;
});
</script>

<template>
  <div class="space-y-4">
    <n-alert type="info" closable>
      Validate GitHub Actions, GitLab CI, or Jenkins pipeline configurations.
    </n-alert>

    <div class="space-y-2">
      <label class="block font-semibold">YAML Configuration</label>
      <n-input v-model:value="yamlContent" type="textarea" :rows="10" placeholder="Paste your pipeline config..." />
    </div>

    <div class="space-y-2">
      <label class="block font-semibold">Validation Results</label>
      <div class="space-y-2">
        <div v-for="(result, i) in validationResults" :key="i" class="flex items-start gap-2 p-3 rounded border"
          :class="{
            'bg-green-50 border-green-300': result.type === 'success',
            'bg-yellow-50 border-yellow-300': result.type === 'warning',
            'bg-red-50 border-red-300': result.type === 'error',
          }">
          <n-icon :component="result.type === 'success' ? CheckCircle : AlertCircle" />
          <span>{{ result.message }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
