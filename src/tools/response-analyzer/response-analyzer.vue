<script setup lang="ts">
import { ref, computed } from 'vue';
import { NInput, NButton, NAlert, NIcon, NProgress } from 'naive-ui';
import { CheckCircle, AlertCircle, Clock } from '@vicons/tabler';
import InputCopyable from '../../components/InputCopyable.vue';

const responseText = ref(`HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: 1234
Server: nginx/1.21.0
Cache-Control: public, max-age=3600
Date: Mon, 29 Mar 2026 10:30:00 GMT

{"status": "success", "data": []}`);

const analysis = computed(() => {
  const lines = responseText.value.split('\n');
  const firstLine = lines[0] || '';
  const statusMatch = firstLine.match(/(\d{3})/);
  const status = statusMatch ? parseInt(statusMatch[1]) : null;

  const isSuccess = status && status >= 200 && status < 300;
  const isRedirect = status && status >= 300 && status < 400;
  const isError = status && status >= 400;

  return {
    status,
    isSuccess,
    isRedirect,
    isError,
    statusText: firstLine,
  };
});

const headers = computed(() => {
  const lines = responseText.value.split('\n');
  const headerLines = [];
  for (let i = 1; i < lines.length; i++) {
    if (lines[i].trim() === '') break;
    headerLines.push(lines[i]);
  }
  return headerLines;
});

const body = computed(() => {
  const lines = responseText.value.split('\n');
  const emptyIndex = lines.findIndex((line) => line.trim() === '');
  return lines.slice(emptyIndex + 1).join('\n');
});

const metrics = computed(() => {
  const headerSize = headers.value.join('\n').length;
  const bodySize = body.value.length;

  return {
    headerSize,
    bodySize,
    totalSize: headerSize + bodySize,
    headerCount: headers.value.length,
  };
});
</script>

<template>
  <div class="space-y-4">
    <n-alert type="info" closable>
      Analyze HTTP responses for performance, headers, and status codes.
    </n-alert>

    <div class="space-y-2">
      <label class="block font-semibold">Response Content</label>
      <n-input v-model:value="responseText" type="textarea" :rows="8" placeholder="HTTP/1.1 200 OK&#10;..." />
    </div>

    <div class="space-y-2">
      <label class="block font-semibold">Status Analysis</label>
      <div class="p-4 rounded"
        :class="analysis.isSuccess ? 'bg-green-50 border border-green-300' : analysis.isRedirect ? 'bg-blue-50 border border-blue-300' : 'bg-red-50 border border-red-300'">
        <div class="flex items-center gap-2 mb-2">
          <n-icon :component="analysis.isSuccess ? CheckCircle : AlertCircle" />
          <span class="font-semibold">{{ analysis.statusText }}</span>
        </div>
        <div class="text-sm">
          <div v-if="analysis.status">
            Status Code: {{ analysis.status }}
            <span v-if="analysis.isSuccess" class="text-green-700">✓ Success</span>
            <span v-else-if="analysis.isRedirect" class="text-blue-700">→ Redirect</span>
            <span v-else-if="analysis.isError" class="text-red-700">✗ Error</span>
          </div>
        </div>
      </div>
    </div>

    <div class="space-y-2">
      <label class="block font-semibold">Response Metrics</label>
      <div class="grid grid-cols-2 gap-4">
        <div class="p-3 bg-gray-50 rounded">
          <div class="text-sm text-gray-500">Header Size</div>
          <div class="text-lg font-semibold">{{ metrics.headerSize }} bytes</div>
        </div>
        <div class="p-3 bg-gray-50 rounded">
          <div class="text-sm text-gray-500">Body Size</div>
          <div class="text-lg font-semibold">{{ metrics.bodySize }} bytes</div>
        </div>
        <div class="p-3 bg-gray-50 rounded">
          <div class="text-sm text-gray-500">Header Count</div>
          <div class="text-lg font-semibold">{{ metrics.headerCount }}</div>
        </div>
        <div class="p-3 bg-gray-50 rounded">
          <div class="text-sm text-gray-500">Total Size</div>
          <div class="text-lg font-semibold">{{ metrics.totalSize }} bytes</div>
        </div>
      </div>
    </div>

    <div class="space-y-2">
      <label class="block font-semibold">Headers</label>
      <div class="bg-gray-50 border rounded p-3 max-h-48 overflow-y-auto">
        <div v-for="(header, i) in headers" :key="i" class="font-mono text-sm break-words">
          {{ header }}
        </div>
      </div>
    </div>

    <div class="space-y-2">
      <label class="block font-semibold">Response Body</label>
      <InputCopyable :value="body" />
    </div>
  </div>
</template>
