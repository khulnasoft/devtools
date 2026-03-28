<script setup lang="ts">
import { ref, computed } from 'vue';
import { NInput, NGrid, NGridItem, NAccordion, NAccordionItem, NCard, NDivider } from 'naive-ui';
import InputCopyable from '../../components/InputCopyable.vue';

const searchQuery = ref('');

const sections = [
  {
    title: 'String Methods',
    items: [
      { method: 'charAt()', example: `"hello".charAt(0)` },
      { method: 'slice()', example: `"hello".slice(1, 4)` },
      { method: 'substring()', example: `"hello".substring(1, 4)` },
      { method: 'toUpperCase()', example: `"hello".toUpperCase()` },
      { method: 'toLowerCase()', example: `"HELLO".toLowerCase()` },
      { method: 'trim()', example: `"  hello  ".trim()` },
      { method: 'split()', example: `"a,b,c".split(",")` },
      { method: 'includes()', example: `"hello".includes("ell")` },
      { method: 'indexOf()', example: `"hello".indexOf("l")` },
      { method: 'replace()', example: `"hello".replace("l", "x")` },
      { method: 'startsWith()', example: `"hello".startsWith("he")` },
      { method: 'endsWith()', example: `"hello".endsWith("lo")` },
    ],
  },
  {
    title: 'Array Methods',
    items: [
      { method: 'push()', example: `arr.push(4)` },
      { method: 'pop()', example: `arr.pop()` },
      { method: 'shift()', example: `arr.shift()` },
      { method: 'unshift()', example: `arr.unshift(0)` },
      { method: 'map()', example: `arr.map(x => x * 2)` },
      { method: 'filter()', example: `arr.filter(x => x > 5)` },
      { method: 'reduce()', example: `arr.reduce((a, b) => a + b)` },
      { method: 'forEach()', example: `arr.forEach(x => console.log(x))` },
      { method: 'find()', example: `arr.find(x => x > 5)` },
      { method: 'includes()', example: `arr.includes(3)` },
      { method: 'reverse()', example: `arr.reverse()` },
      { method: 'join()', example: `arr.join(", ")` },
    ],
  },
  {
    title: 'Object Methods',
    items: [
      { method: 'Object.keys()', example: `Object.keys(obj)` },
      { method: 'Object.values()', example: `Object.values(obj)` },
      { method: 'Object.entries()', example: `Object.entries(obj)` },
      { method: 'Object.assign()', example: `Object.assign({}, obj1, obj2)` },
      { method: 'Object.freeze()', example: `Object.freeze(obj)` },
      { method: 'Object.seal()', example: `Object.seal(obj)` },
      { method: 'Object.create()', example: `Object.create(proto)` },
      { method: 'Object.getPrototypeOf()', example: `Object.getPrototypeOf(obj)` },
    ],
  },
];

const filteredSections = computed(() => {
  if (!searchQuery.value) return sections;
  const query = searchQuery.value.toLowerCase();
  return sections.map(section => ({
    ...section,
    items: section.items.filter(
      item => item.method.toLowerCase().includes(query) || item.example.toLowerCase().includes(query)
    ),
  })).filter(section => section.items.length > 0);
});
</script>

<template>
  <div class="space-y-4">
    <c-card>
      <n-input 
        v-model:value="searchQuery"
        type="text"
        placeholder="Search cheatsheet..."
        clearable
      />
    </c-card>

    <div v-if="filteredSections.length === 0" class="text-center text-gray-500 py-8">
      No results found
    </div>

    <n-accordion default-expanded-names="0">
      <n-accordion-item v-for="(section, idx) in filteredSections" :key="idx" :title="section.title" :name="idx">
        <n-grid cols="1 s:2 m:3 l:4 xl:5 2xl:6" responsive="screen">
          <n-grid-item v-for="(item, itemIdx) in section.items" :key="itemIdx">
            <n-card class="h-full" size="small">
              <template #header>
                <code class="text-sm font-mono">{{ item.method }}</code>
              </template>
              <InputCopyable :value="item.example" multiline />
            </n-card>
          </n-grid-item>
        </n-grid>
      </n-accordion-item>
    </n-accordion>
  </div>
</template>

<style scoped>
code {
  background-color: var(--n-color);
  padding: 2px 6px;
  border-radius: 4px;
}
</style>
