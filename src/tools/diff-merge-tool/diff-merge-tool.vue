<script setup lang="ts">
import { ref, computed } from 'vue';
import { NInput, NButton, NAlert, NSplit } from 'naive-ui';
import InputCopyable from '../../components/InputCopyable.vue';

const fileA = ref('const name = "John";\nconst age = 30;');
const fileB = ref('const name = "Jane";\nconst age = 25;\nconst email = "jane@example.com";');

const diffResult = computed(() => {
  const linesA = fileA.value.split('\n');
  const linesB = fileB.value.split('\n');
  const diff: string[] = [];
  
  const maxLines = Math.max(linesA.length, linesB.length);
  
  for (let i = 0; i < maxLines; i++) {
    const lineA = linesA[i] || '';
    const lineB = linesB[i] || '';
    
    if (lineA === lineB) {
      if (lineA) diff.push(`  ${lineA}`);
    } else {
      if (lineA) diff.push(`- ${lineA}`);
      if (lineB) diff.push(`+ ${lineB}`);
    }
  }
  
  return diff.join('\n');
});

const generatePatch = () => {
  const patch = `--- a/file
+++ b/file
${diffResult.value}`;
  return patch;
};

const applyMergeStrategy = (strategy: 'keep-a' | 'keep-b' | 'combine') => {
  switch (strategy) {
    case 'keep-a':
      return fileA.value;
    case 'keep-b':
      return fileB.value;
    case 'combine':
      return fileA.value + '\n' + fileB.value;
  }
};
</script>

<template>
  <div class="space-y-4">
    <n-alert type="info" closable>
      Compare files side-by-side and generate diffs or merge patches.
    </n-alert>

    <div class="space-y-2">
      <label class="block font-semibold">File A (Original)</label>
      <n-input v-model:value="fileA" type="textarea" :rows="6" placeholder="Original content..." />
    </div>

    <div class="space-y-2">
      <label class="block font-semibold">File B (Modified)</label>
      <n-input v-model:value="fileB" type="textarea" :rows="6" placeholder="Modified content..." />
    </div>

    <div class="space-y-2">
      <label class="block font-semibold">Unified Diff</label>
      <InputCopyable :value="diffResult" />
    </div>

    <div class="space-y-2">
      <label class="block font-semibold">Patch File</label>
      <InputCopyable :value="generatePatch()" />
    </div>
  </div>
</template>
