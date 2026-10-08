<script setup lang="ts">
import { generateRegex, getExplanation } from './regex-generator.service';
import TextareaCopyable from '@/components/TextareaCopyable.vue';

const description = ref('');
const generatedRegex = computed(() => generateRegex(description.value));
const explanation = computed(() => getExplanation(description.value));
</script>

<template>
  <div style="max-width: 720px; margin: 0 auto">
    <c-card mb-3>
      <c-input-text
        v-model:value="description"
        label="Describe the pattern you need"
        placeholder="e.g., 'match email addresses', 'find phone numbers', 'extract dates'"
        mb-3
      />
    </c-card>

    <c-card v-if="generatedRegex">
      <div mb-2 font-bold>
        Generated Regex
      </div>
      <TextareaCopyable :value="generatedRegex" mb-3 />

      <div v-if="explanation" mb-2 font-bold>
        Explanation
      </div>
      <n-alert v-if="explanation" type="info">
        {{ explanation }}
      </n-alert>
    </c-card>
  </div>
</template>
