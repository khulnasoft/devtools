<script setup lang="ts">
import { ref, computed } from 'vue';
import { NButton, NDivider, NSelect, NInput, NSpace, NAlert, NCode, NTabs, NTabPane, NCheckbox } from 'naive-ui';
import InputCopyable from '../../components/InputCopyable.vue';

const method = ref('GET');
const url = ref('https://api.example.com/endpoint');
const headers = ref<{ key: string; value: string }[]>([]);
const body = ref('');
const response = ref('');
const isLoading = ref(false);
const contentType = ref('application/json');

const newHeaderKey = ref('');
const newHeaderValue = ref('');

const methodOptions = [
  { label: 'GET', value: 'GET' },
  { label: 'POST', value: 'POST' },
  { label: 'PUT', value: 'PUT' },
  { label: 'DELETE', value: 'DELETE' },
  { label: 'PATCH', value: 'PATCH' },
  { label: 'HEAD', value: 'HEAD' },
];

const addHeader = () => {
  if (newHeaderKey.value.trim()) {
    headers.value.push({
      key: newHeaderKey.value,
      value: newHeaderValue.value,
    });
    newHeaderKey.value = '';
    newHeaderValue.value = '';
  }
};

const removeHeader = (index: number) => {
  headers.value.splice(index, 1);
};

const sendRequest = async () => {
  isLoading.value = true;
  try {
    const requestHeaders: Record<string, string> = {
      'Content-Type': contentType.value,
    };

    headers.value.forEach((h) => {
      requestHeaders[h.key] = h.value;
    });

    const options: RequestInit = {
      method: method.value,
      headers: requestHeaders,
    };

    if (['POST', 'PUT', 'PATCH'].includes(method.value) && body.value) {
      options.body = body.value;
    }

    const res = await fetch(url.value, options);
    const contentTypeHeader = res.headers.get('content-type');
    let text = await res.text();
    
    if (contentTypeHeader?.includes('application/json')) {
      try {
        text = JSON.stringify(JSON.parse(text), null, 2);
      } catch {
        // Keep as is if not valid JSON
      }
    }

    response.value = `Status: ${res.status} ${res.statusText}\n\n${text}`;
  } catch (error) {
    response.value = `Error: ${error instanceof Error ? error.message : 'Unknown error'}`;
  } finally {
    isLoading.value = false;
  }
};
</script>

<template>
  <div class="space-y-4">
    <n-alert type="info" closable>
      Test API endpoints with custom headers, request body, and inspect responses.
    </n-alert>

    <div class="space-y-2">
      <label class="block font-semibold">Method & URL</label>
      <div class="flex gap-2">
        <n-select v-model:value="method" :options="methodOptions" style="width: 120px" />
        <n-input v-model:value="url" type="text" placeholder="https://api.example.com/endpoint" />
      </div>
    </div>

    <div v-if="['POST', 'PUT', 'PATCH'].includes(method)" class="space-y-2">
      <label class="block font-semibold">Request Body</label>
      <n-input v-model:value="body" type="textarea" :rows="4" placeholder='{ "key": "value" }' />
    </div>

    <div class="space-y-2">
      <label class="block font-semibold">Headers</label>
      <div class="space-y-2">
        <div class="flex gap-2">
          <n-input v-model:value="newHeaderKey" type="text" placeholder="Header key" style="flex: 1" />
          <n-input v-model:value="newHeaderValue" type="text" placeholder="Header value" style="flex: 1" />
          <n-button @click="addHeader">Add</n-button>
        </div>
        <div v-for="(header, i) in headers" :key="i" class="flex gap-2 items-center p-2 bg-gray-100 rounded">
          <span class="flex-1 font-mono text-sm">{{ header.key }}: {{ header.value }}</span>
          <n-button text type="error" @click="removeHeader(i)">Remove</n-button>
        </div>
      </div>
    </div>

    <n-button type="primary" :loading="isLoading" @click="sendRequest">Send Request</n-button>

    <n-tabs v-if="response" type="line">
      <n-tab-pane name="Response" tab="Response">
        <div class="mt-4">
          <InputCopyable :value="response" />
        </div>
      </n-tab-pane>
    </n-tabs>
  </div>
</template>
