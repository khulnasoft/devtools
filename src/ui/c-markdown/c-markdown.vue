<script setup lang="ts">
import { marked } from 'marked';
import DomPurify from 'dompurify';
import { useTheme } from './c-markdown.theme';

const props = withDefaults(
  defineProps<{
    /** Markdown content to render */
    markdown?: string
  }>(),
  { markdown: '' },
);
const { markdown } = toRefs(props);

const theme = useTheme();

marked.use({
  renderer: {
    link(href, title, text) {
      return `<a style="color: ${theme.value.linkColor}" class="transition decoration-none hover:underline" href="${href}" target="_blank" rel="noopener">${text}</a>`;
    },
  },
});

const html = computed(() => DomPurify.sanitize(marked(markdown.value), { ADD_ATTR: ['target'] }));
</script>

<template>
  <div v-html="html" />
</template>
