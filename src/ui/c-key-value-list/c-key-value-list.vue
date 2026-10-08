<script lang="ts" setup>
import _ from 'lodash';
import type { CKeyValueListItems } from './c-key-value-list.types';
import { useTheme } from './c-key-value-list.theme';

const props = withDefaults(
  defineProps<{
    /** Array of key-value items to display */
    items?: CKeyValueListItems
  }>(),
  { items: () => [] },
);
const { items } = toRefs(props);

const theme = useTheme();
const formattedItems = computed(() => items.value.filter(item => !_.isNil(item.value) || !item.hideOnNil));
</script>

<template>
  <div flex flex-col :style="{ gap: theme.value.itemGap }">
    <div v-for="item in formattedItems" :key="item.label" class="c-key-value-list__item">
      <div
        class="c-key-value-list__key"
        lh-normal
        :style="{
          color: theme.value.keyColor,
          fontSize: theme.value.keyFontSize,
        }"
      >
        {{ item.label }}
      </div>

      <c-key-value-list-item
        :item="item"
        class="c-key-value-list__value"
        font-bold
        lh-normal
        :style="{
          color: theme.value.valueColor,
          fontSize: theme.value.valueFontSize,
        }"
      />
    </div>
  </div>
</template>
