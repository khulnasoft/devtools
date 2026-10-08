<script setup lang="ts">
import { useTheme } from './c-text-copyable.theme';
import { useCopy } from '@/composable/copy';

const props = withDefaults(
  defineProps<{
    /** Value to copy to clipboard */
    value?: string
    /** Displayed text (if different from value) */
    displayedValue?: string
    /** Whether to show the copy icon */
    showIcon?: boolean
  }>(),
  { value: '', displayedValue: undefined, showIcon: true },
);
const { value, displayedValue, showIcon } = toRefs(props);

const theme = useTheme();
const { copy, isJustCopied } = useCopy({ source: value, createToast: false });
</script>

<template>
  <c-tooltip :tooltip="isJustCopied ? 'Copied!' : 'Copy to clipboard'" cursor-pointer @click="copy">
    <span flex items-center :style="{ gap: theme.value.iconGap }">
      {{ displayedValue ?? value }}
      <icon-mdi-content-copy v-if="showIcon" op-40 />
    </span>
  </c-tooltip>
</template>
