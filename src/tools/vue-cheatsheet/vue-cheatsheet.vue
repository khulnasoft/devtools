<script setup lang="ts">
import { ref, computed } from 'vue';
import { NInput, NCard, NAccordion, NAccordionItem } from 'naive-ui';
import InputCopyable from '../../components/InputCopyable.vue';

const searchQuery = ref('');

const sections = [
  {
    title: 'Template Syntax',
    items: [
      { syntax: 'Interpolation', code: `{{ message }}` },
      { syntax: 'Directives', code: `v-bind:attr="value" or :attr="value"` },
      { syntax: 'v-if', code: `<div v-if="condition">Show</div>` },
      { syntax: 'v-show', code: `<div v-show="condition">Show</div>` },
      { syntax: 'v-for', code: `<div v-for="(item, index) in items" :key="index">{{ item }}</div>` },
      { syntax: 'v-on', code: `<button @click="handleClick">Click</button>` },
      { syntax: 'v-model', code: `<input v-model="message" />` },
      { syntax: 'v-class', code: `:class="{ active: isActive }"` },
      { syntax: 'v-style', code: `:style="{ color: activeColor }"` },
    ],
  },
  {
    title: 'Composition API',
    items: [
      { syntax: 'ref', code: `const count = ref(0)` },
      { syntax: 'reactive', code: `const state = reactive({ count: 0 })` },
      { syntax: 'computed', code: `const doubled = computed(() => count.value * 2)` },
      { syntax: 'watch', code: `watch(() => count.value, (newVal, oldVal) => {})` },
      { syntax: 'onMounted', code: `onMounted(() => { /* setup */ })` },
      { syntax: 'onUnmounted', code: `onUnmounted(() => { /* cleanup */ })` },
      { syntax: 'provide/inject', code: `provide('key', value) / inject('key')` },
    ],
  },
  {
    title: 'Component Basics',
    items: [
      { syntax: 'Props', code: `defineProps({ msg: String, modelValue: [String, Number] })` },
      { syntax: 'Emits', code: `defineEmits(['update:modelValue', 'change'])` },
      { syntax: 'Slots', code: `<slot></slot>` },
      { syntax: 'Named Slots', code: `<slot name="header"></slot>` },
      { syntax: 'Scoped Slots', code: `<slot :item="item"></slot>` },
    ],
  },
  {
    title: 'Lifecycle',
    items: [
      { syntax: 'onBeforeMount', code: `onBeforeMount(() => {})` },
      { syntax: 'onMounted', code: `onMounted(() => {})` },
      { syntax: 'onBeforeUpdate', code: `onBeforeUpdate(() => {})` },
      { syntax: 'onUpdated', code: `onUpdated(() => {})` },
      { syntax: 'onBeforeUnmount', code: `onBeforeUnmount(() => {})` },
      { syntax: 'onUnmounted', code: `onUnmounted(() => {})` },
    ],
  },
];

const filteredSections = computed(() => {
  if (!searchQuery.value) return sections;
  const query = searchQuery.value.toLowerCase();
  return sections
    .map(section => ({
      ...section,
      items: section.items.filter(
        item => item.syntax.toLowerCase().includes(query) || item.code.toLowerCase().includes(query)
      ),
    }))
    .filter(section => section.items.length > 0);
});
</script>

<template>
  <div class="space-y-4">
    <c-card>
      <n-input 
        v-model:value="searchQuery"
        type="text"
        placeholder="Search Vue concepts..."
        clearable
      />
    </c-card>

    <n-accordion default-expanded-names="0">
      <n-accordion-item v-for="(section, idx) in filteredSections" :key="idx" :title="section.title" :name="idx">
        <div class="space-y-3">
          <n-card v-for="(item, itemIdx) in section.items" :key="itemIdx" size="small">
            <template #header>
              <span class="text-sm font-semibold">{{ item.syntax }}</span>
            </template>
            <InputCopyable :value="item.code" multiline />
          </n-card>
        </div>
      </n-accordion-item>
    </n-accordion>
  </div>
</template>

<style scoped>
code {
  background-color: var(--n-color);
  padding: 2px 6px;
  border-radius: 4px;
  font-family: monospace;
}
</style>
