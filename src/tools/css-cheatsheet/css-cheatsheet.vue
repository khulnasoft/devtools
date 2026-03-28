<script setup lang="ts">
import { ref, computed } from 'vue';
import { NInput, NCard, NAccordion, NAccordionItem, NTag } from 'naive-ui';
import InputCopyable from '../../components/InputCopyable.vue';

const searchQuery = ref('');

const sections = [
  {
    title: 'Flexbox',
    items: [
      { property: 'display', value: `display: flex;` },
      { property: 'justify-content', value: `justify-content: center | flex-start | flex-end | space-between | space-around;` },
      { property: 'align-items', value: `align-items: center | flex-start | flex-end | stretch | baseline;` },
      { property: 'flex-direction', value: `flex-direction: row | column | row-reverse | column-reverse;` },
      { property: 'flex-wrap', value: `flex-wrap: wrap | nowrap | wrap-reverse;` },
      { property: 'gap', value: `gap: 10px | 10px 20px;` },
    ],
  },
  {
    title: 'Grid',
    items: [
      { property: 'display', value: `display: grid;` },
      { property: 'grid-template-columns', value: `grid-template-columns: 1fr 1fr | repeat(3, 1fr) | auto 1fr auto;` },
      { property: 'grid-template-rows', value: `grid-template-rows: auto 1fr;` },
      { property: 'grid-gap', value: `grid-gap: 10px | 10px 20px;` },
      { property: 'grid-auto-flow', value: `grid-auto-flow: row | column | dense;` },
      { property: 'align-content', value: `align-content: center | space-around | space-between;` },
    ],
  },
  {
    title: 'Positioning',
    items: [
      { property: 'position', value: `position: static | relative | absolute | fixed | sticky;` },
      { property: 'top, right, bottom, left', value: `top: 0; right: 10px; bottom: 20px; left: 5px;` },
      { property: 'z-index', value: `z-index: 10 | -1 | auto;` },
      { property: 'transform', value: `transform: translate(10px, 20px) | rotate(45deg) | scale(1.5);` },
    ],
  },
  {
    title: 'Box Model',
    items: [
      { property: 'margin', value: `margin: 10px | 10px 20px | 10px 20px 30px 40px;` },
      { property: 'padding', value: `padding: 10px | 10px 20px | 10px 20px 30px 40px;` },
      { property: 'border', value: `border: 2px solid #000 | 1px dashed blue;` },
      { property: 'box-sizing', value: `box-sizing: border-box | content-box;` },
      { property: 'width/height', value: `width: 100% | 50px | auto | max-content;` },
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
        item => item.property.toLowerCase().includes(query) || item.value.toLowerCase().includes(query)
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
        placeholder="Search CSS properties..."
        clearable
      />
    </c-card>

    <n-accordion default-expanded-names="0">
      <n-accordion-item v-for="(section, idx) in filteredSections" :key="idx" :title="section.title" :name="idx">
        <div class="space-y-3">
          <n-card v-for="(item, itemIdx) in section.items" :key="itemIdx" size="small">
            <template #header>
              <n-tag type="info">{{ item.property }}</n-tag>
            </template>
            <InputCopyable :value="item.value" multiline />
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
