<script lang="ts" setup>
import { useTheme } from './c-collapse.theme';

const props = withDefaults(
  defineProps<{
    /** Title for the collapsible section header */
    title?: string
  }>(),
  { title: '' },
);
const { title } = toRefs(props);

const theme = useTheme();
const isCollapsed = ref(true);
</script>

<template>
  <div>
    <div flex cursor-pointer items-center :style="{ color: theme.value.textColor }" @click="isCollapsed = !isCollapsed">
      <icon-mdi-triangle-down
        :class="{ 'transform-rotate--90': isCollapsed }"
        :style="{ color: theme.value.iconColor }"
        op-50
        transition
      />

      <slot name="title">
        <span class="ml-2" font-bold>{{ title }}</span>
      </slot>
    </div>

    <div v-show="!isCollapsed" :style="{ marginTop: theme.value.contentSpacing }">
      <slot />
    </div>
  </div>
</template>
