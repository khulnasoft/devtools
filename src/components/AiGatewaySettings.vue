<script setup lang="ts">
import { useStorage } from '@vueuse/core';
import {
  aiGatewayApiKey,
  clearAiGatewayApiKey,
  isAiGatewayKeyFromEnv,
  setAiGatewayApiKey,
} from '@/composable/aiGatewayKey';

const isOpen = useStorage('ai-gateway:settings-open', false);

const draftKey = ref('');
/** Never render the stored key back, only whether one is present */
const hasStoredKey = computed(() => aiGatewayApiKey.value !== '');

function save() {
  setAiGatewayApiKey(draftKey.value);
  draftKey.value = '';
}

function clear() {
  clearAiGatewayApiKey();
  draftKey.value = '';
}
</script>

<template>
  <div mb-3>
    <div flex items-center gap-2>
      <c-button size="small" variant="text" @click="isOpen = !isOpen">
        {{ isOpen ? 'Hide AI Gateway key' : 'AI Gateway key' }}
      </c-button>
      <span
        v-if="hasStoredKey"
        text-xs
        :style="{ color: isAiGatewayKeyFromEnv ? '#18a058' : '#f59e0b' }"
      >
        {{ isAiGatewayKeyFromEnv ? 'Key provided by this deployment' : 'Using your own key, stored in this browser' }}
      </span>
      <span v-else text-xs opacity-60>
        No key, results are generated locally
      </span>
    </div>

    <c-card v-if="isOpen" mt-2>
      <div mb-2 text-sm>
        Add your own Vercel AI Gateway key to generate real content instead of the local demo output. The key is kept
        in this browser only, it is never sent anywhere except the AI Gateway.
      </div>

      <div flex items-end gap-3>
        <c-input-text
          v-model:value="draftKey"
          type="password"
          placeholder="AI Gateway API key..."
          flex-1
        />
        <c-button type="primary" :disabled="draftKey.trim() === ''" @click="save">
          Save key
        </c-button>
        <c-button :disabled="!hasStoredKey" @click="clear">
          Clear key
        </c-button>
      </div>
    </c-card>
  </div>
</template>
