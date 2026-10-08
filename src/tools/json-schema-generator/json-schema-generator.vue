<script setup lang="ts">
import { generateSchema } from './json-schema-generator.service';
import TextareaCopyable from '@/components/TextareaCopyable.vue';

const jsonInput = ref('');
const generatedSchema = computed(() => {
  const input = jsonInput.value.trim();
  if (!input) {
    return '';
  }

  try {
    const obj = JSON.parse(input);
    const schema = generateSchema(obj);
    return JSON.stringify(schema, null, 2);
  }
  catch (e) {
    return '// Invalid JSON input';
  }
});
</script>

<template>
  <div style="max-width: 720px; margin: 0 auto">
    <c-card mb-3>
      <c-input-text
        v-model:value="jsonInput"
        label="JSON input"
        placeholder="Enter JSON example to generate schema..."
        multiline
        :rows="8"
        mb-3
      />
    </c-card>

    <c-card v-if="generatedSchema">
      <div mb-2 font-bold>
        Generated JSON Schema
      </div>
      <TextareaCopyable :value="generatedSchema" />
    </c-card>
  </div>
</template>
