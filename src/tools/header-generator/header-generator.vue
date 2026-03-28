<script setup lang="ts">
import { ref, computed } from 'vue';
import { NButton, NCheckbox, NSpace, NSelect, NInput, NAlert } from 'naive-ui';
import InputCopyable from '../../components/InputCopyable.vue';

const headers = ref({
  security: true,
  cors: true,
  caching: false,
  compression: true,
});

const customDomain = ref('https://example.com');

const headersList = computed(() => {
  const list: Record<string, string> = {};

  if (headers.value.security) {
    list['X-Content-Type-Options'] = 'nosniff';
    list['X-Frame-Options'] = 'DENY';
    list['X-XSS-Protection'] = '1; mode=block';
    list['Strict-Transport-Security'] = 'max-age=31536000; includeSubDomains';
    list['Content-Security-Policy'] = "default-src 'self'";
  }

  if (headers.value.cors) {
    list['Access-Control-Allow-Origin'] = customDomain.value;
    list['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE, OPTIONS';
    list['Access-Control-Allow-Headers'] = 'Content-Type, Authorization';
    list['Access-Control-Allow-Credentials'] = 'true';
  }

  if (headers.value.caching) {
    list['Cache-Control'] = 'public, max-age=3600';
    list['ETag'] = '"33a64df551425fcc55e4d42a148795d9f25f89d4"';
  }

  if (headers.value.compression) {
    list['Content-Encoding'] = 'gzip';
    list['Accept-Encoding'] = 'gzip, deflate, br';
  }

  return list;
});

const headersAsJson = computed(() => {
  return JSON.stringify(headersList.value, null, 2);
});

const headersAsText = computed(() => {
  return Object.entries(headersList.value)
    .map(([key, value]) => `${key}: ${value}`)
    .join('\n');
});
</script>

<template>
  <div class="space-y-4">
    <n-alert type="info" closable>
      Generate HTTP headers for security, CORS, caching, and optimization.
    </n-alert>

    <div class="space-y-2">
      <label class="block font-semibold">Header Presets</label>
      <n-space vertical>
        <n-checkbox v-model:checked="headers.security">Security Headers (XSS, CSP, HSTS)</n-checkbox>
        <n-checkbox v-model:checked="headers.cors">CORS Headers</n-checkbox>
        <n-checkbox v-model:checked="headers.caching">Cache Control Headers</n-checkbox>
        <n-checkbox v-model:checked="headers.compression">Compression Headers</n-checkbox>
      </n-space>
    </div>

    <div v-if="headers.cors" class="space-y-2">
      <label class="block font-semibold">CORS Domain</label>
      <n-input v-model:value="customDomain" type="text" placeholder="https://example.com" />
    </div>

    <div class="space-y-2">
      <label class="block font-semibold">Headers (JSON)</label>
      <InputCopyable :value="headersAsJson" />
    </div>

    <div class="space-y-2">
      <label class="block font-semibold">Headers (Text Format)</label>
      <InputCopyable :value="headersAsText" />
    </div>
  </div>
</template>
