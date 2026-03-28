<script setup lang="ts">
import { ref, computed } from 'vue';
import { NInput, NButton, NTable, NAlert } from 'naive-ui';
import InputCopyable from '../../components/InputCopyable.vue';

const csvContent = ref(`name,age,city,salary
John,28,New York,75000
Jane,32,San Francisco,95000
Bob,25,Chicago,60000`);

const rows = computed(() => {
  return csvContent.value.split('\n').filter((line) => line.trim());
});

const headers = computed(() => {
  return rows.value[0]?.split(',').map((h) => h.trim()) || [];
});

const data = computed(() => {
  return rows.value.slice(1).map((row) => {
    const values = row.split(',').map((v) => v.trim());
    const obj: Record<string, string> = {};
    headers.value.forEach((header, i) => {
      obj[header] = values[i] || '';
    });
    return obj;
  });
});

const statistics = computed(() => {
  const stats: Record<string, any> = {};
  
  headers.value.forEach((header) => {
    const values = data.value.map((row) => row[header]);
    const numericValues = values.map((v) => parseFloat(v)).filter((v) => !isNaN(v));
    
    stats[header] = {
      type: numericValues.length === values.length ? 'numeric' : 'text',
      count: values.length,
      unique: new Set(values).size,
    };
    
    if (numericValues.length > 0) {
      stats[header].average = (numericValues.reduce((a, b) => a + b, 0) / numericValues.length).toFixed(2);
      stats[header].min = Math.min(...numericValues);
      stats[header].max = Math.max(...numericValues);
    }
  });
  
  return stats;
});

const convertToJson = () => {
  return JSON.stringify(data.value, null, 2);
};
</script>

<template>
  <div class="space-y-4">
    <n-alert type="info" closable>
      Analyze and convert CSV data with statistics and format conversion.
    </n-alert>

    <div class="space-y-2">
      <label class="block font-semibold">CSV Data</label>
      <n-input v-model:value="csvContent" type="textarea" :rows="6" placeholder="name,age,city&#10;John,28,New York" />
    </div>

    <div class="space-y-2">
      <label class="block font-semibold">Column Statistics</label>
      <div v-for="(stat, col) in statistics" :key="col" class="p-3 bg-gray-50 rounded">
        <div class="font-semibold">{{ col }}</div>
        <div class="text-sm text-gray-700 mt-1">
          <div>Type: {{ stat.type }}</div>
          <div>Count: {{ stat.count }} | Unique: {{ stat.unique }}</div>
          <div v-if="stat.average">Average: {{ stat.average }} | Min: {{ stat.min }} | Max: {{ stat.max }}</div>
        </div>
      </div>
    </div>

    <div class="space-y-2">
      <label class="block font-semibold">Data Preview ({{ data.length }} rows)</label>
      <div class="overflow-x-auto">
        <n-table :single-line="false" striped>
          <thead>
            <tr>
              <th v-for="header in headers" :key="header" class="p-2">{{ header }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(row, i) in data.slice(0, 5)" :key="i">
              <td v-for="header in headers" :key="header" class="p-2">{{ row[header] }}</td>
            </tr>
          </tbody>
        </n-table>
      </div>
    </div>

    <div class="space-y-2">
      <label class="block font-semibold">JSON Format</label>
      <InputCopyable :value="convertToJson()" />
    </div>
  </div>
</template>
