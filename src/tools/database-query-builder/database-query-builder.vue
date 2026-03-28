<script setup lang="ts">
import { ref, computed } from 'vue';
import { NSelect, NInput, NButton, NAlert, NCheckbox, NSpace } from 'naive-ui';
import InputCopyable from '../../components/InputCopyable.vue';

const queryType = ref('SELECT');
const tableName = ref('users');
const columns = ref('id, name, email');
const whereClause = ref('');
const orderBy = ref('');
const limit = ref('');

const queryTypeOptions = [
  { label: 'SELECT', value: 'SELECT' },
  { label: 'INSERT', value: 'INSERT' },
  { label: 'UPDATE', value: 'UPDATE' },
  { label: 'DELETE', value: 'DELETE' },
];

const generatedQuery = computed(() => {
  switch (queryType.value) {
    case 'SELECT':
      return generateSelectQuery();
    case 'INSERT':
      return generateInsertQuery();
    case 'UPDATE':
      return generateUpdateQuery();
    case 'DELETE':
      return generateDeleteQuery();
    default:
      return '';
  }
});

const generateSelectQuery = () => {
  let query = `SELECT ${columns.value || '*'} FROM ${tableName.value}`;
  if (whereClause.value) query += ` WHERE ${whereClause.value}`;
  if (orderBy.value) query += ` ORDER BY ${orderBy.value}`;
  if (limit.value) query += ` LIMIT ${limit.value}`;
  return query + ';';
};

const generateInsertQuery = () => {
  const cols = columns.value ? columns.value.split(',').map((c) => c.trim()).join(', ') : 'column1, column2';
  const values = columns.value ? columns.value.split(',').map(() => '?').join(', ') : '?, ?';
  return `INSERT INTO ${tableName.value} (${cols}) VALUES (${values});`;
};

const generateUpdateQuery = () => {
  let query = `UPDATE ${tableName.value} SET `;
  if (columns.value) {
    query += columns.value.split(',').map((c) => `${c.trim()} = ?`).join(', ');
  } else {
    query += 'column = ?';
  }
  if (whereClause.value) query += ` WHERE ${whereClause.value}`;
  return query + ';';
};

const generateDeleteQuery = () => {
  let query = `DELETE FROM ${tableName.value}`;
  if (whereClause.value) query += ` WHERE ${whereClause.value}`;
  return query + ';';
};
</script>

<template>
  <div class="space-y-4">
    <n-alert type="info" closable>
      Build SQL queries visually with automatic syntax generation.
    </n-alert>

    <div class="space-y-2">
      <label class="block font-semibold">Query Type</label>
      <n-select v-model:value="queryType" :options="queryTypeOptions" />
    </div>

    <div class="space-y-2">
      <label class="block font-semibold">Table Name</label>
      <n-input v-model:value="tableName" type="text" placeholder="users" />
    </div>

    <div class="space-y-2">
      <label class="block font-semibold">Columns</label>
      <n-input v-model:value="columns" type="text" placeholder="id, name, email" />
    </div>

    <div class="space-y-2">
      <label class="block font-semibold">WHERE Clause (optional)</label>
      <n-input v-model:value="whereClause" type="text" placeholder="id = 1" />
    </div>

    <div v-if="queryType === 'SELECT'" class="space-y-2">
      <label class="block font-semibold">ORDER BY (optional)</label>
      <n-input v-model:value="orderBy" type="text" placeholder="name ASC" />
    </div>

    <div v-if="queryType === 'SELECT'" class="space-y-2">
      <label class="block font-semibold">LIMIT (optional)</label>
      <n-input v-model:value="limit" type="text" placeholder="10" />
    </div>

    <div class="space-y-2">
      <label class="block font-semibold">Generated Query</label>
      <InputCopyable :value="generatedQuery" />
    </div>
  </div>
</template>
