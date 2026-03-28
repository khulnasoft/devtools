<script setup lang="ts">
import { ref, computed } from 'vue';
import { NInput, NCard, NAccordion, NAccordionItem } from 'naive-ui';
import InputCopyable from '../../components/InputCopyable.vue';

const searchQuery = ref('');

const sections = [
  {
    title: 'File Operations',
    items: [
      { cmd: 'ls', desc: 'List files and directories' },
      { cmd: 'cd <path>', desc: 'Change directory' },
      { cmd: 'pwd', desc: 'Print working directory' },
      { cmd: 'mkdir <dir>', desc: 'Create directory' },
      { cmd: 'rm <file>', desc: 'Remove file' },
      { cmd: 'rm -r <dir>', desc: 'Remove directory recursively' },
      { cmd: 'cp <src> <dst>', desc: 'Copy file' },
      { cmd: 'mv <src> <dst>', desc: 'Move/rename file' },
      { cmd: 'touch <file>', desc: 'Create empty file' },
      { cmd: 'cat <file>', desc: 'Display file contents' },
    ],
  },
  {
    title: 'File Search & Filter',
    items: [
      { cmd: 'find <path> -name <pattern>', desc: 'Find files by name' },
      { cmd: 'grep <pattern> <file>', desc: 'Search text in files' },
      { cmd: 'grep -r <pattern> <dir>', desc: 'Recursive grep' },
      { cmd: 'which <command>', desc: 'Find command location' },
      { cmd: 'whereis <command>', desc: 'Locate command' },
    ],
  },
  {
    title: 'System Information',
    items: [
      { cmd: 'uname -a', desc: 'System information' },
      { cmd: 'df -h', desc: 'Disk space usage' },
      { cmd: 'du -sh <dir>', desc: 'Directory size' },
      { cmd: 'ps aux', desc: 'List running processes' },
      { cmd: 'top', desc: 'Show system statistics' },
      { cmd: 'whoami', desc: 'Current user' },
      { cmd: 'id', desc: 'User and group IDs' },
    ],
  },
  {
    title: 'Text Processing',
    items: [
      { cmd: 'sed', desc: 'Stream editor for text transformation' },
      { cmd: 'awk', desc: 'Text processing and data extraction' },
      { cmd: 'sort', desc: 'Sort lines' },
      { cmd: 'uniq', desc: 'Report unique lines' },
      { cmd: 'cut -d: -f1', desc: 'Extract columns' },
      { cmd: 'wc -l', desc: 'Count lines' },
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
        item => item.cmd.toLowerCase().includes(query) || item.desc.toLowerCase().includes(query)
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
        placeholder="Search Bash commands..."
        clearable
      />
    </c-card>

    <n-accordion default-expanded-names="0">
      <n-accordion-item v-for="(section, idx) in filteredSections" :key="idx" :title="section.title" :name="idx">
        <div class="space-y-3">
          <n-card v-for="(item, itemIdx) in section.items" :key="itemIdx" size="small">
            <template #header>
              <code class="text-sm font-mono">{{ item.cmd }}</code>
            </template>
            <p class="text-gray-600 text-sm mb-2">{{ item.desc }}</p>
            <InputCopyable :value="item.cmd" />
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

p {
  margin: 0;
}
</style>
