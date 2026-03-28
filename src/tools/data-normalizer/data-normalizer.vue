<script setup lang="ts">
import { ref, computed } from 'vue';
import { NInput, NButton, NCheckbox, NSpace, NAlert } from 'naive-ui';
import InputCopyable from '../../components/InputCopyable.vue';

const inputData = ref(`  Hello   World  
   Another  Line
Extra    Spaces   Here`);

const options = ref({
  trim: true,
  lowercase: false,
  uppercase: false,
  removeExtra: true,
  removeEmpty: true,
  sortLines: false,
});

const output = computed(() => {
  let result = inputData.value;
  
  if (options.value.trim) {
    result = result.split('\n').map((line) => line.trim()).join('\n');
  }
  
  if (options.value.removeExtra) {
    result = result.split('\n').map((line) => line.replace(/\s+/g, ' ')).join('\n');
  }
  
  if (options.value.removeEmpty) {
    result = result.split('\n').filter((line) => line.trim()).join('\n');
  }
  
  if (options.value.lowercase) {
    result = result.toLowerCase();
  }
  
  if (options.value.uppercase) {
    result = result.toUpperCase();
  }
  
  if (options.value.sortLines) {
    result = result.split('\n').sort().join('\n');
  }
  
  return result;
});

const stats = computed(() => {
  return {
    lines: inputData.value.split('\n').length,
    chars: inputData.value.length,
    words: inputData.value.trim().split(/\s+/).length,
  };
});
</script>

<template>
  <div class="space-y-4">
    <n-alert type="info" closable>
      Clean and normalize text data with multiple options.
    </n-alert>

    <div class="space-y-2">
      <label class="block font-semibold">Input Data</label>
      <n-input v-model:value="inputData" type="textarea" :rows="6" placeholder="Enter data to normalize..." />
      <div class="text-sm text-gray-500 mt-1">
        Lines: {{ stats.lines }} | Characters: {{ stats.chars }} | Words: {{ stats.words }}
      </div>
    </div>

    <div class="space-y-2">
      <label class="block font-semibold">Normalization Options</label>
      <n-space vertical>
        <n-checkbox v-model:checked="options.trim">Trim whitespace</n-checkbox>
        <n-checkbox v-model:checked="options.removeExtra">Remove extra spaces</n-checkbox>
        <n-checkbox v-model:checked="options.removeEmpty">Remove empty lines</n-checkbox>
        <n-checkbox v-model:checked="options.sortLines">Sort lines alphabetically</n-checkbox>
        <n-checkbox v-model:checked="options.lowercase">Convert to lowercase</n-checkbox>
        <n-checkbox v-model:checked="options.uppercase">Convert to uppercase</n-checkbox>
      </n-space>
    </div>

    <div class="space-y-2">
      <label class="block font-semibold">Output Data</label>
      <InputCopyable :value="output" />
    </div>
  </div>
</template>
