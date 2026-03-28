<script setup lang="ts">
import { ref, computed } from 'vue';
import { NInput, NButton, NAlert, NSpace } from 'naive-ui';
import InputCopyable from '../../components/InputCopyable.vue';

interface ChangeEntry {
  type: 'added' | 'changed' | 'deprecated' | 'removed' | 'fixed' | 'security';
  description: string;
}

const version = ref('1.0.0');
const releaseDate = ref(new Date().toISOString().split('T')[0]);
const changes = ref<ChangeEntry[]>([
  { type: 'added', description: 'Initial release' },
  { type: 'added', description: 'Core features' },
]);

const newChangeType = ref<ChangeEntry['type']>('added');
const newChangeDesc = ref('');

const changeTypeOptions = [
  { label: 'Added', value: 'added' },
  { label: 'Changed', value: 'changed' },
  { label: 'Deprecated', value: 'deprecated' },
  { label: 'Removed', value: 'removed' },
  { label: 'Fixed', value: 'fixed' },
  { label: 'Security', value: 'security' },
];

const addChange = () => {
  if (newChangeDesc.value.trim()) {
    changes.value.push({
      type: newChangeType.value,
      description: newChangeDesc.value,
    });
    newChangeDesc.value = '';
  }
};

const removeChange = (index: number) => {
  changes.value.splice(index, 1);
};

const generatedChangelog = computed(() => {
  let changelog = `# Changelog\n\n`;
  changelog += `## [${version.value}] - ${releaseDate.value}\n\n`;

  const grouped = {
    added: changes.value.filter((c) => c.type === 'added'),
    changed: changes.value.filter((c) => c.type === 'changed'),
    deprecated: changes.value.filter((c) => c.type === 'deprecated'),
    removed: changes.value.filter((c) => c.type === 'removed'),
    fixed: changes.value.filter((c) => c.type === 'fixed'),
    security: changes.value.filter((c) => c.type === 'security'),
  };

  if (grouped.added.length > 0) {
    changelog += `### Added\n${grouped.added.map((c) => `- ${c.description}`).join('\n')}\n\n`;
  }

  if (grouped.changed.length > 0) {
    changelog += `### Changed\n${grouped.changed.map((c) => `- ${c.description}`).join('\n')}\n\n`;
  }

  if (grouped.deprecated.length > 0) {
    changelog += `### Deprecated\n${grouped.deprecated.map((c) => `- ${c.description}`).join('\n')}\n\n`;
  }

  if (grouped.removed.length > 0) {
    changelog += `### Removed\n${grouped.removed.map((c) => `- ${c.description}`).join('\n')}\n\n`;
  }

  if (grouped.fixed.length > 0) {
    changelog += `### Fixed\n${grouped.fixed.map((c) => `- ${c.description}`).join('\n')}\n\n`;
  }

  if (grouped.security.length > 0) {
    changelog += `### Security\n${grouped.security.map((c) => `- ${c.description}`).join('\n')}\n`;
  }

  return changelog;
});
</script>

<template>
  <div class="space-y-4">
    <n-alert type="info" closable>
      Generate CHANGELOG.md files following Keep a Changelog format.
    </n-alert>

    <div class="grid grid-cols-2 gap-4">
      <div class="space-y-2">
        <label class="block font-semibold">Version</label>
        <n-input v-model:value="version" type="text" placeholder="1.0.0" />
      </div>
      <div class="space-y-2">
        <label class="block font-semibold">Release Date</label>
        <n-input v-model:value="releaseDate" type="date" />
      </div>
    </div>

    <div class="space-y-2">
      <label class="block font-semibold">Add Change Entry</label>
      <n-space vertical>
        <n-input v-model:value="newChangeType" type="text" />
        <n-input v-model:value="newChangeDesc" type="text" placeholder="Describe the change..." />
        <n-button @click="addChange">Add Change</n-button>
      </n-space>
    </div>

    <div class="space-y-2">
      <label class="block font-semibold">Changes ({{ changes.length }})</label>
      <div class="space-y-2">
        <div v-for="(change, i) in changes" :key="i" class="flex gap-2 items-center p-2 bg-gray-50 rounded">
          <span class="font-semibold text-sm" style="flex: 0 0 80px">{{ change.type }}</span>
          <span class="text-sm flex-1">{{ change.description }}</span>
          <n-button text size="small" type="error" @click="removeChange(i)">Remove</n-button>
        </div>
      </div>
    </div>

    <div class="space-y-2">
      <label class="block font-semibold">Generated Changelog</label>
      <InputCopyable :value="generatedChangelog" />
    </div>
  </div>
</template>
