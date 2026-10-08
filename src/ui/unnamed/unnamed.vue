<script lang="ts" setup>
const props = withDefaults(defineProps<{ prop?: string }>(), { prop: '' });
const { prop } = toRefs(props);
</script>

<template>
  <div>
    {{ prop }}
  </div>
</template>
