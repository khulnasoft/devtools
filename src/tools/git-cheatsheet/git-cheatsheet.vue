<script setup lang="ts">
import { ref, computed } from 'vue';
import { NInput, NCard, NAccordion, NAccordionItem } from 'naive-ui';
import InputCopyable from '../../components/InputCopyable.vue';

const searchQuery = ref('');

const sections = [
  {
    title: 'Basic Commands',
    items: [
      { cmd: 'git init', desc: 'Initialize a new Git repository' },
      { cmd: 'git clone <url>', desc: 'Clone a repository' },
      { cmd: 'git status', desc: 'Show working tree status' },
      { cmd: 'git add <file>', desc: 'Stage changes for commit' },
      { cmd: 'git add .', desc: 'Stage all changes' },
      { cmd: 'git commit -m "message"', desc: 'Commit staged changes' },
      { cmd: 'git push', desc: 'Push commits to remote' },
      { cmd: 'git pull', desc: 'Fetch and merge from remote' },
    ],
  },
  {
    title: 'Branching',
    items: [
      { cmd: 'git branch', desc: 'List local branches' },
      { cmd: 'git branch <name>', desc: 'Create a new branch' },
      { cmd: 'git checkout <branch>', desc: 'Switch to a branch' },
      { cmd: 'git checkout -b <branch>', desc: 'Create and switch to branch' },
      { cmd: 'git merge <branch>', desc: 'Merge branch into current branch' },
      { cmd: 'git branch -d <branch>', desc: 'Delete a branch' },
      { cmd: 'git switch <branch>', desc: 'Switch to a branch (newer syntax)' },
    ],
  },
  {
    title: 'Viewing History',
    items: [
      { cmd: 'git log', desc: 'Show commit history' },
      { cmd: 'git log --oneline', desc: 'Compact commit history' },
      { cmd: 'git log -p', desc: 'Show changes in each commit' },
      { cmd: 'git show <commit>', desc: 'Show specific commit details' },
      { cmd: 'git diff', desc: 'Show unstaged changes' },
      { cmd: 'git diff --staged', desc: 'Show staged changes' },
    ],
  },
  {
    title: 'Undoing Changes',
    items: [
      { cmd: 'git restore <file>', desc: 'Discard changes in working directory' },
      { cmd: 'git restore --staged <file>', desc: 'Unstage a file' },
      { cmd: 'git revert <commit>', desc: 'Create a new commit that undoes changes' },
      { cmd: 'git reset --soft HEAD~1', desc: 'Undo last commit, keep changes staged' },
      { cmd: 'git reset --mixed HEAD~1', desc: 'Undo last commit, keep changes unstaged' },
      { cmd: 'git reset --hard HEAD~1', desc: 'Undo last commit, discard changes' },
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
        placeholder="Search Git commands..."
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
