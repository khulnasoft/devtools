<script setup lang="ts">
const inputText = ref('');

const tokenCounts = computed(() => {
  const text = inputText.value;
  if (!text) {
    return {
      characters: 0,
      words: 0,
      gpt3: 0,
      gpt4: 0,
      claude: 0,
    };
  }

  // Approximate token counts (real implementation would use tiktoken or similar)
  const characters = text.length;
  const words = text
    .trim()
    .split(/\s+/)
    .filter(w => w.length > 0).length;

  // Rough estimates: ~4 chars per token for English text
  const baseTokens = Math.ceil(characters / 4);

  return {
    characters,
    words,
    gpt3: baseTokens,
    gpt4: baseTokens,
    claude: baseTokens,
  };
});

const costEstimates = computed(() => {
  const { gpt3, gpt4, claude } = tokenCounts.value;

  // Pricing (per 1M tokens as of 2024)
  return {
    gpt3Input: ((gpt3 / 1000000) * 0.5).toFixed(4),
    gpt3Output: ((gpt3 / 1000000) * 1.5).toFixed(4),
    gpt4Input: ((gpt4 / 1000000) * 30).toFixed(4),
    gpt4Output: ((gpt4 / 1000000) * 60).toFixed(4),
    claudeInput: ((claude / 1000000) * 3).toFixed(4),
    claudeOutput: ((claude / 1000000) * 15).toFixed(4),
  };
});
</script>

<template>
  <div style="max-width: 720px; margin: 0 auto">
    <c-card mb-3>
      <c-input-text
        v-model:value="inputText"
        label="Input text"
        placeholder="Enter text to count tokens..."
        multiline
        :rows="8"
        mb-3
      />
    </c-card>

    <c-card v-if="inputText">
      <div mb-3 font-bold>
        Token Counts
      </div>
      <n-table>
        <tbody>
          <tr>
            <td class="label">
              Characters
            </td>
            <td>{{ tokenCounts.characters.toLocaleString() }}</td>
          </tr>
          <tr>
            <td class="label">
              Words
            </td>
            <td>{{ tokenCounts.words.toLocaleString() }}</td>
          </tr>
          <tr>
            <td class="label">
              GPT-3 / GPT-3.5
            </td>
            <td>{{ tokenCounts.gpt3.toLocaleString() }}</td>
          </tr>
          <tr>
            <td class="label">
              GPT-4
            </td>
            <td>{{ tokenCounts.gpt4.toLocaleString() }}</td>
          </tr>
          <tr>
            <td class="label">
              Claude
            </td>
            <td>{{ tokenCounts.claude.toLocaleString() }}</td>
          </tr>
        </tbody>
      </n-table>

      <div mb-3 mt-4 font-bold>
        Cost Estimates (USD)
      </div>
      <n-table>
        <tbody>
          <tr>
            <td class="label">
              GPT-3.5 Input
            </td>
            <td>${{ costEstimates.gpt3Input }}</td>
          </tr>
          <tr>
            <td class="label">
              GPT-3.5 Output
            </td>
            <td>${{ costEstimates.gpt3Output }}</td>
          </tr>
          <tr>
            <td class="label">
              GPT-4 Input
            </td>
            <td>${{ costEstimates.gpt4Input }}</td>
          </tr>
          <tr>
            <td class="label">
              GPT-4 Output
            </td>
            <td>${{ costEstimates.gpt4Output }}</td>
          </tr>
          <tr>
            <td class="label">
              Claude Input
            </td>
            <td>${{ costEstimates.claudeInput }}</td>
          </tr>
          <tr>
            <td class="label">
              Claude Output
            </td>
            <td>${{ costEstimates.claudeOutput }}</td>
          </tr>
        </tbody>
      </n-table>

      <div mt-2 text-xs op-60>
        * Token counts are estimates. Actual counts may vary based on the specific tokenizer used.
      </div>
    </c-card>
  </div>
</template>

<style scoped lang="less">
.label {
  width: 180px;
  font-weight: bold;
}
</style>
