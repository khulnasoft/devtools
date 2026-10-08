<script lang="ts" setup>
import { useTheme } from './c-modal-value.theme';
import { useCopy } from '@/composable/copy';

const props = withDefaults(
  defineProps<{
    /** Value to display in the modal */
    value: string
    /** Label for the trigger button */
    label?: string
    /** Whether to show the copy button in the modal */
    copyable?: boolean
  }>(),
  { label: undefined, copyable: true },
);
const { value, label } = toRefs(props);

const theme = useTheme();
const { copy, isJustCopied } = useCopy({ source: value });

const isModalOpen = ref(false);
const toggleModal = useToggle(isModalOpen);
</script>

<template>
  <slot name="label" :value="value" :toggle-modal="toggleModal" :is-modal-open="isModalOpen">
    <c-button class="text-left" @click="isModalOpen = true">
      {{ label }}
    </c-button>
  </slot>

  <c-modal v-model:open="isModalOpen">
    <slot name="value" :value="value" :toggle-modal="toggleModal" :is-modal-open="isModalOpen">
      {{ value }}
    </slot>

    <div flex justify-center :style="{ marginTop: theme.value.buttonSpacing }">
      <c-button class="w-full" @click="copy">
        {{ isJustCopied ? 'Copied!' : 'Copy' }}
      </c-button>
    </div>
  </c-modal>
</template>
