<script lang="ts" setup>
import { toRefs } from 'vue';
import type { CLabelProps } from './c-label.types';
import { useTheme } from './c-label.theme';

const props = withDefaults(defineProps<CLabelProps>(), {
  label: undefined,
  labelAlign: 'left',
  labelFor: undefined,
  labelPosition: 'top',
  labelWidth: 'auto',
});
const { label, labelAlign, labelFor, labelPosition, labelWidth } = toRefs(props);

const theme = useTheme();
</script>

<template>
  <div
    :class="{
      'flex-col': labelPosition === 'top',
      'flex-row': labelPosition === 'left',
    }"
    flex
    items-baseline
  >
    <label
      v-if="label"
      :for="labelFor"
      :style="{
        flex: `0 0 ${labelWidth}`,
        color: theme.value.textColor,
        marginBottom: labelPosition === 'top' ? theme.value.labelSpacing : '0',
        paddingRight: labelPosition === 'left' ? theme.value.labelPaddingRight : '0',
      }"
      :class="{
        'text-left': labelAlign === 'left',
        'text-center': labelAlign === 'center',
        'text-right': labelAlign === 'right',
      }"
    >
      {{ label }}
    </label>
    <slot />
  </div>
</template>
