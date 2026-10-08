<script setup lang="ts">
import { generateQuery, getQueryType } from './sql-query-generator.service';
import TextareaCopyable from '@/components/TextareaCopyable.vue';

const description = ref('');
const tableName = ref('users');
const generatedQuery = computed(() => generateQuery(description.value, tableName.value));
const queryType = computed(() => getQueryType(description.value));
</script>

<template>
  <div style="max-width: 720px; margin: 0 auto">
    <c-card mb-3>
      <c-input-text v-model:value="tableName" label="Table name" placeholder="e.g., users, products, orders" mb-3 />

      <c-input-text
        v-model:value="description"
        label="Describe the query you need"
        placeholder="e.g., 'select all users', 'count orders', 'insert new product'"
        multiline
        :rows="3"
      />
    </c-card>

    <c-card v-if="generatedQuery">
      <div mb-2 flex items-center justify-between>
        <div font-bold>
          Generated SQL Query
        </div>
        <n-tag v-if="queryType !== 'UNKNOWN'" :type="queryType === 'DELETE' ? 'error' : 'success'" size="small">
          {{ queryType }}
        </n-tag>
      </div>
      <TextareaCopyable :value="generatedQuery" />
    </c-card>
  </div>
</template>
