<script lang="ts" setup>
import _ from 'lodash';
import { useTheme } from './c-file-upload.theme';

const props = withDefaults(
  defineProps<{
    /** Whether to allow multiple file selection */
    multiple?: boolean
    /** Accepted file types (e.g., 'image/*', '.pdf') */
    accept?: string
    /** Title text displayed in the drop zone */
    title?: string
  }>(),
  {
    multiple: false,
    accept: undefined,
    title: 'Drag and drop files here, or click to select files',
  },
);

const emit = defineEmits<{
  (event: 'filesUpload', files: File[]): void
  (event: 'fileUpload', file: File): void
}>();

const { multiple } = toRefs(props);

const theme = useTheme();
const isOverDropZone = ref(false);

const fileInput = ref<HTMLInputElement | null>(null);

function triggerFileInput() {
  fileInput.value?.click();
}

function handleFileInput(event: Event) {
  const files = (event.target as HTMLInputElement).files;

  handleUpload(files);
}

function handleDrop(event: DragEvent) {
  event.preventDefault();
  const files = event.dataTransfer?.files;

  handleUpload(files);
}

function handleUpload(files: FileList | null | undefined) {
  if (_.isNil(files) || _.isEmpty(files)) {
    return;
  }

  if (multiple.value) {
    emit('filesUpload', Array.from(files));
    return;
  }

  emit('fileUpload', files[0]);
}
</script>

<template>
  <div
    class="flex flex-col cursor-pointer items-center justify-center border-dashed transition-colors"
    :style="{
      borderWidth: theme.value.borderWidth,
      borderColor: isOverDropZone ? theme.value.borderColorActive : theme.value.borderColor,
      borderRadius: theme.value.borderRadius,
      padding: theme.value.padding,
      boxShadow: theme.value.shadow,
    }"
    @click="triggerFileInput"
    @drop.prevent="handleDrop"
    @dragover.prevent
    @dragenter="isOverDropZone = true"
    @dragleave="isOverDropZone = false"
  >
    <input ref="fileInput" type="file" class="hidden" :multiple="multiple" :accept="accept" @change="handleFileInput">
    <slot>
      <span op-70 :style="{ color: theme.value.textColor }">
        {{ title }}
      </span>

      <!-- separator -->
      <div my-4 w-full flex items-center justify-center op-70>
        <div class="h-1px max-w-100px flex-1 op-50" :style="{ backgroundColor: theme.value.separatorColor }" />
        <div class="mx-2" :style="{ color: theme.value.textColor }">
          or
        </div>
        <div class="h-1px max-w-100px flex-1 op-50" :style="{ backgroundColor: theme.value.separatorColor }" />
      </div>

      <c-button> Browse files </c-button>
    </slot>
  </div>
</template>
