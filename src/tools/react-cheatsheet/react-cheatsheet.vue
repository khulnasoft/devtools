<script setup lang="ts">
import { ref, computed } from 'vue';
import { NInput, NCard, NAccordion, NAccordionItem } from 'naive-ui';
import InputCopyable from '../../components/InputCopyable.vue';

const searchQuery = ref('');

const sections = [
  {
    title: 'Hooks',
    items: [
      { name: 'useState', code: `const [state, setState] = useState(initialValue);` },
      { name: 'useEffect', code: `useEffect(() => { /* side effect */ }, [dependencies]);` },
      { name: 'useContext', code: `const value = useContext(MyContext);` },
      { name: 'useReducer', code: `const [state, dispatch] = useReducer(reducer, initialState);` },
      { name: 'useCallback', code: `const callback = useCallback(() => {}, [dependencies]);` },
      { name: 'useMemo', code: `const memoizedValue = useMemo(() => computeValue(), [dependencies]);` },
      { name: 'useRef', code: `const ref = useRef(initialValue);` },
      { name: 'useLayoutEffect', code: `useLayoutEffect(() => { /* runs before paint */ }, []);` },
    ],
  },
  {
    title: 'Components',
    items: [
      { name: 'Functional Component', code: `function MyComponent() { return <div>Hello</div>; }` },
      { name: 'Arrow Function', code: `const MyComponent = () => <div>Hello</div>;` },
      { name: 'Fragment', code: `<>...</>` },
      { name: 'Conditional Rendering', code: `{condition ? <A /> : <B />}` },
      { name: 'List Rendering', code: `{items.map(item => <div key={item.id}>{item.name}</div>)}` },
      { name: 'Default Props', code: `Component.defaultProps = { prop: 'value' };` },
      { name: 'PropTypes', code: `Component.propTypes = { prop: PropTypes.string.isRequired };` },
    ],
  },
  {
    title: 'Event Handling',
    items: [
      { name: 'onClick', code: `<button onClick={(e) => handleClick(e)}>Click</button>` },
      { name: 'onChange', code: `<input onChange={(e) => setValue(e.target.value)} />` },
      { name: 'onSubmit', code: `<form onSubmit={(e) => { e.preventDefault(); }}></form>` },
      { name: 'onMouseEnter', code: `<div onMouseEnter={() => setHovered(true)}>` },
      { name: 'onMouseLeave', code: `<div onMouseLeave={() => setHovered(false)}>` },
      { name: 'onFocus', code: `<input onFocus={() => setFocused(true)} />` },
      { name: 'onBlur', code: `<input onBlur={() => setFocused(false)} />` },
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
        item => item.name.toLowerCase().includes(query) || item.code.toLowerCase().includes(query)
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
        placeholder="Search React cheatsheet..."
        clearable
      />
    </c-card>

    <n-accordion default-expanded-names="0">
      <n-accordion-item v-for="(section, idx) in filteredSections" :key="idx" :title="section.title" :name="idx">
        <div class="space-y-3">
          <n-card v-for="(item, itemIdx) in section.items" :key="itemIdx" size="small">
            <template #header>
              <code class="text-sm font-mono">{{ item.name }}</code>
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
