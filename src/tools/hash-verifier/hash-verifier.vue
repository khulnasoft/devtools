<script setup lang="ts">
import { ref, computed } from 'vue';
import { MD5, SHA1, SHA256, SHA512, enc } from 'crypto-js';
import { NInput, NButton, NAlert, NIcon } from 'naive-ui';
import { CheckCircle, XCircle } from '@vicons/tabler';
import InputCopyable from '../../components/InputCopyable.vue';

const inputText = ref('hello world');
const expectedHash = ref('5eb63bbbe01eeed093cb22bb8f5acdc3');
const hashAlgorithm = ref('MD5');

const algorithms = [
  { label: 'MD5', value: 'MD5' },
  { label: 'SHA-1', value: 'SHA1' },
  { label: 'SHA-256', value: 'SHA256' },
  { label: 'SHA-512', value: 'SHA512' },
];

const hashFunctions = {
  MD5: (text: string) => MD5(text).toString(enc.Hex),
  SHA1: (text: string) => SHA1(text).toString(enc.Hex),
  SHA256: (text: string) => SHA256(text).toString(enc.Hex),
  SHA512: (text: string) => SHA512(text).toString(enc.Hex),
};

const calculatedHash = computed(() => {
  const hashFn = hashFunctions[hashAlgorithm.value as keyof typeof hashFunctions];
  return hashFn(inputText.value);
});

const isMatching = computed(() => {
  return calculatedHash.value.toLowerCase() === expectedHash.value.toLowerCase();
});

const matchStatus = computed(() => {
  if (!expectedHash.value) return null;
  return isMatching.value ? 'match' : 'mismatch';
});
</script>

<template>
  <div class="space-y-4">
    <n-alert type="info" closable>
      Verify file integrity by comparing calculated hashes.
    </n-alert>

    <div class="space-y-2">
      <label class="block font-semibold">Input Text</label>
      <n-input v-model:value="inputText" type="textarea" :rows="4" placeholder="Text to hash..." />
    </div>

    <div class="space-y-2">
      <label class="block font-semibold">Hash Algorithm</label>
      <n-input v-model:value="hashAlgorithm" type="text" />
    </div>

    <div class="space-y-2">
      <label class="block font-semibold">{{ hashAlgorithm }} Hash</label>
      <InputCopyable :value="calculatedHash" />
    </div>

    <div class="space-y-2">
      <label class="block font-semibold">Expected Hash (for verification)</label>
      <n-input v-model:value="expectedHash" type="text" placeholder="Paste the hash to verify..." />
    </div>

    <div v-if="matchStatus" class="flex items-center gap-2 p-4 rounded"
      :class="matchStatus === 'match' ? 'bg-green-50 border border-green-300' : 'bg-red-50 border border-red-300'">
      <n-icon :component="matchStatus === 'match' ? CheckCircle : XCircle" />
      <span class="font-semibold">
        {{ matchStatus === 'match' ? 'Hash verification successful!' : 'Hash mismatch - verification failed' }}
      </span>
    </div>
  </div>
</template>
