<script setup lang="ts">
import { useTheme } from './c-tooltip.theme';

const props = withDefaults(
  defineProps<{
    /** Tooltip text content (can also use slot) */
    tooltip?: string
    /** Position of the tooltip relative to the target element */
    position?: 'top' | 'bottom' | 'left' | 'right'
  }>(),
  {
    tooltip: undefined,
    position: 'top',
  },
);
const { tooltip, position } = toRefs(props);

const theme = useTheme();

const targetRef = ref();
const isTargetHovered = useElementHover(targetRef);
</script>

<template>
  <div relative inline-block>
    <div ref="targetRef">
      <slot />
    </div>

    <div
      v-if="tooltip || $slots.tooltip"
      class="absolute z-10 whitespace-nowrap text-sm shadow-lg transition transition transition-duration-0.2s"
      :style="{
        backgroundColor: theme.value.backgroundColor,
        color: theme.value.textColor,
        padding: theme.value.padding,
        borderRadius: theme.value.borderRadius,
        boxShadow: theme.value.shadow,
        ...(position === 'top' ? { marginBottom: theme.value.offset } : {}),
        ...(position === 'bottom' ? { marginTop: theme.value.offset } : {}),
        ...(position === 'left' ? { marginRight: theme.value.offset } : {}),
        ...(position === 'right' ? { marginLeft: theme.value.offset } : {}),
      }"
      :class="{
        'op-0 scale-0': isTargetHovered === false,
        'op-100 scale-100': isTargetHovered,
        'bottom-100% left-50% -translate-x-1/2': position === 'top',
        'top-100% left-50% -translate-x-1/2': position === 'bottom',
        'right-100% top-50% -translate-y-1/2': position === 'left',
        'left-100% top-50% -translate-y-1/2': position === 'right',
      }"
    >
      <slot v-if="isTargetHovered" name="tooltip">
        {{ tooltip }}
      </slot>
    </div>
  </div>
</template>
