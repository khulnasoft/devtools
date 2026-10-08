<script setup lang="ts">
import TextareaCopyable from '@/components/TextareaCopyable.vue';

const originalPrompt = ref('');
const optimizedPrompt = computed(() => {
  const prompt = originalPrompt.value.trim();
  if (!prompt) {
    return '';
  }

  let optimized = prompt;

  // Add clear structure if missing
  if (!optimized.includes('###') && !optimized.includes('Step') && !optimized.includes('1.')) {
    // Add structure markers
    if (optimized.length > 100) {
      optimized = `### Task\n${optimized}\n\n### Requirements\n- Be specific and detailed\n- Provide examples if relevant\n- Format output clearly`;
    }
  }

  // Add role context if missing
  if (!optimized.toLowerCase().includes('act as') && !optimized.toLowerCase().includes('you are')) {
    optimized = `You are a helpful assistant.\n\n${optimized}`;
  }

  // Add output format if missing
  if (!optimized.toLowerCase().includes('format') && !optimized.toLowerCase().includes('output')) {
    optimized += '\n\n### Output Format\nProvide a clear, well-structured response.';
  }

  return optimized;
});

const improvements = computed(() => {
  const prompt = originalPrompt.value.trim();
  if (!prompt) {
    return [];
  }

  const tips = [];

  if (prompt.length < 50) {
    tips.push('Add more context and details to your prompt');
  }

  if (!prompt.includes('example') && !prompt.includes('Example')) {
    tips.push('Include examples to guide the AI');
  }

  if (!prompt.includes('###') && !prompt.includes('Step') && prompt.length > 200) {
    tips.push('Use structure (### headers, numbered steps) for complex tasks');
  }

  if (!prompt.toLowerCase().includes('act as') && !prompt.toLowerCase().includes('you are')) {
    tips.push('Define a role for the AI (e.g., "Act as a senior developer")');
  }

  if (!prompt.toLowerCase().includes('format')) {
    tips.push('Specify the desired output format');
  }

  if (!prompt.includes('?') && !prompt.includes('please')) {
    tips.push('Consider framing as a question or polite request');
  }

  if (tips.length === 0) {
    tips.push('Your prompt looks good! Consider adding specific constraints if needed.');
  }

  return tips;
});
</script>

<template>
  <div style="max-width: 720px; margin: 0 auto">
    <c-card mb-3>
      <c-input-text
        v-model:value="originalPrompt"
        label="Original prompt"
        placeholder="Enter your prompt to optimize..."
        multiline
        :rows="6"
        mb-3
      />
    </c-card>

    <c-card v-if="originalPrompt" mb-3>
      <div mb-2 font-bold>
        Improvement Suggestions
      </div>
      <n-list bordered>
        <n-list-item v-for="(tip, index) in improvements" :key="index">
          {{ tip }}
        </n-list-item>
      </n-list>
    </c-card>

    <c-card v-if="optimizedPrompt">
      <div mb-2 flex items-center justify-between>
        <div font-bold>
          Optimized Prompt
        </div>
      </div>
      <TextareaCopyable :value="optimizedPrompt" />
    </c-card>
  </div>
</template>
