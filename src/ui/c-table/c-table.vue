<script lang="ts" setup>
import _ from 'lodash';
import type { HeaderConfiguration } from './c-table.types';
import { useTheme } from './c-table.theme';

const props = withDefaults(
  defineProps<{
    /** Array of data objects to display in the table */
    data?: Record<string, unknown>[]
    /** Column configuration - can be array of strings, array of objects, or record mapping */
    headers?: HeaderConfiguration
    /** Whether to hide the table header row */
    hideHeaders?: boolean
    /** Accessible description for the table */
    description?: string
  }>(),
  { data: () => [], headers: undefined, hideHeaders: false, description: 'Data table' },
);
const { data, headers: rawHeaders, hideHeaders } = toRefs(props);

const theme = useTheme();

const headers = computed(() => {
  if (rawHeaders.value) {
    if (Array.isArray(rawHeaders.value)) {
      return rawHeaders.value.map((value) => {
        if (typeof value === 'string') {
          return { key: value, label: value };
        }

        const { key, label } = value;

        return {
          key,
          label: label ?? key,
        };
      });
    }

    return _.map(rawHeaders.value, (value, key) => ({
      key,
      label: value,
    }));
  }

  return _.chain(data.value)
    .map(row => Object.keys(row))
    .flatten()
    .uniq()
    .map(key => ({ key, label: key }))
    .value();
});
</script>

<template>
  <div class="relative overflow-x-auto rounded">
    <table
      class="w-full border-collapse text-left text-sm"
      :style="{ color: theme.value.textColor }"
      role="table"
      :aria-label="description"
    >
      <thead
        v-if="!hideHeaders"
        class="text-xs uppercase"
        :style="{
          backgroundColor: theme.value.headerBackgroundColor,
          color: theme.value.headerTextColor,
          borderBottom: `1px solid ${theme.value.rowBorderColor}`,
        }"
      >
        <tr>
          <th
            v-for="header in headers"
            :key="header.key"
            scope="col"
            :style="{ padding: theme.value.headerCellPadding }"
          >
            {{ header.label }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(row, i) in data"
          :key="i"
          :style="{
            backgroundColor: theme.value.rowBackgroundColor,
            borderBottom: i === data.length - 1 ? 'none' : `1px solid ${theme.value.rowBorderColor}`,
          }"
        >
          <td v-for="header in headers" :key="header.key" :style="{ padding: theme.value.bodyCellPadding }">
            <slot :name="header.key" :row="row" :headers="headers" :value="row[header.key]">
              {{ row[header.key] }}
            </slot>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
