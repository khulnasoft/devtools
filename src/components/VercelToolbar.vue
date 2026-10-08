<script setup lang="ts">
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';
import { tools } from '@/tools';

const router = useRouter();
const isOpen = ref(false);
const query = ref('');

const aiTools = [
  { path: '/generate-image', label: 'Generate image', glyph: 'IMG' },
  { path: '/generate-object', label: 'Generate object', glyph: '{}' },
  { path: '/generate-speech', label: 'Generate speech', glyph: 'A' },
  { path: '/generate-text', label: 'Generate text', glyph: 'T' },
  { path: '/generate-video', label: 'Generate video', glyph: 'VID' },
];

const filteredTools = computed(() => {
  const normalizedQuery = query.value.trim().toLowerCase();
  const matches = tools.filter(tool => {
    const label = String(tool.name ?? '').toLowerCase();
    const path = String(tool.path ?? '').toLowerCase();
    return !normalizedQuery || label.includes(normalizedQuery) || path.includes(normalizedQuery);
  });

  return matches.slice(0, 12);
});

function navigate(path: string) {
  isOpen.value = false;
  query.value = '';
  router.push(path);
}

function toggle() {
  isOpen.value = !isOpen.value;
}

function onKeydown(event: KeyboardEvent) {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
    event.preventDefault();
    isOpen.value = true;
  }
  if (event.key === 'Escape') isOpen.value = false;
}
</script>

<template>
  <div class="vercel-toolbar" @keydown="onKeydown">
    <button class="toolbar-trigger" type="button" aria-label="Open DevTools toolbar" :aria-expanded="isOpen" @click="toggle">
      <span class="toolbar-logo" aria-hidden="true">▲</span>
      <span class="toolbar-rule" aria-hidden="true" />
      <span class="toolbar-menu-icon" aria-hidden="true"><i /><i /><i /></span>
    </button>

    <section v-if="isOpen" class="toolbar-panel" aria-label="DevTools toolbar menu">
      <div class="panel-search">
        <input v-model="query" autofocus type="search" placeholder="What do you need?" aria-label="Search tools" />
        <kbd>Esc</kbd>
      </div>

      <div class="workspace">
        <span class="presence-dot" />
        <div>
          <strong>devtools <span>#80624</span></strong>
          <code>khulnasoft/devtools</code>
        </div>
        <div class="avatars" aria-label="Collaborators"><span>J</span><span>M</span><span>K</span></div>
      </div>

      <div class="section-label">Shortcuts</div>
      <div class="shortcut-row">
        <button type="button" class="shortcut" aria-label="Search all tools" @click="isOpen = true; query = ''"><span class="glyph">⌕</span></button>
        <button type="button" class="shortcut" aria-label="Open home" @click="navigate('/')"><span class="glyph">⌂</span></button>
        <button v-for="tool in aiTools" :key="tool.path" type="button" class="shortcut shortcut-text" :aria-label="tool.label" @click="navigate(tool.path)">{{ tool.glyph }}</button>
        <button type="button" class="shortcut" aria-label="Open all tools" @click="query = ''"><span class="glyph">⠿</span></button>
      </div>

      <div class="section-label">Tools</div>
      <div v-if="filteredTools.length" class="tool-list">
        <button v-for="tool in filteredTools" :key="tool.path" type="button" class="tool-item" @click="navigate(tool.path)">
          <span class="tool-icon">{{ String(tool.name ?? '?').slice(0, 1).toUpperCase() }}</span>
          <span class="tool-name">{{ tool.name }}</span>
          <span v-if="tool.path" class="tool-arrow">↗</span>
        </button>
      </div>
      <div v-else class="empty">No tools found</div>
    </section>
  </div>
</template>

<style scoped>
.vercel-toolbar { position: fixed; z-index: 1000; left: 14px; bottom: 16px; color: #ededed; font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; }
.toolbar-trigger { display: flex; width: 34px; min-height: 66px; padding: 7px 5px; flex-direction: column; align-items: center; justify-content: space-between; border: 1px solid #303030; border-radius: 18px; background: #171717; color: #d7d7d7; box-shadow: 0 8px 28px #0009; cursor: pointer; }
.toolbar-trigger:hover { background: #222; }
.toolbar-logo { color: #fff; font-size: 13px; line-height: 1; }
.toolbar-rule { width: 13px; height: 1px; background: #474747; }
.toolbar-menu-icon { display: flex; flex-direction: column; gap: 3px; }
.toolbar-menu-icon i { display: block; width: 15px; height: 1px; background: currentColor; }
.toolbar-panel { position: absolute; left: 46px; bottom: 0; width: min(618px, calc(100vw - 76px)); max-height: min(650px, calc(100vh - 30px)); overflow: auto; padding: 0 12px 14px; border: 1px solid #292929; border-radius: 12px; background: #050505; box-shadow: 0 24px 70px #000b; }
.panel-search { position: sticky; top: 0; z-index: 1; display: flex; align-items: center; gap: 10px; padding: 13px 1px 11px; border-bottom: 1px solid #292929; background: #050505; }
.panel-search input { min-width: 0; flex: 1; border: 0; outline: 0; background: transparent; color: #ededed; font-size: 18px; }
.panel-search input::placeholder { color: #888; }
kbd { padding: 3px 5px; border: 1px solid #333; border-radius: 4px; color: #aaa; font-size: 11px; }
.workspace { display: flex; align-items: center; gap: 12px; padding: 15px 4px 12px; border-bottom: 1px solid #181818; font-size: 13px; }
.presence-dot { width: 8px; height: 8px; flex: none; border-radius: 50%; background: #00d084; }
.workspace strong { font-weight: 500; }.workspace strong span { color: #666; font-weight: 400; }.workspace code { display: block; margin-top: 5px; color: #d2d2d2; font-size: 12px; }
.avatars { display: flex; margin-left: auto; }.avatars span { display: grid; place-items: center; width: 21px; height: 21px; margin-left: -4px; border: 2px solid #050505; border-radius: 50%; background: #555; font-size: 8px; }.avatars span:nth-child(2) { background: #8b5e4c; }.avatars span:nth-child(3) { background: #31728c; }
.section-label { padding: 13px 4px 7px; color: #777; font-size: 12px; }.shortcut-row { display: flex; gap: 8px; padding: 0 4px 7px; overflow-x: auto; }.shortcut { display: grid; place-items: center; width: 48px; height: 48px; flex: 0 0 auto; border: 1px solid #292929; border-radius: 50%; background: #090909; color: #d0d0d0; cursor: pointer; }.shortcut:hover { border-color: #5a5a5a; background: #151515; color: #fff; }.glyph { font-size: 22px; }.shortcut-text { font-family: ui-monospace, monospace; font-size: 9px; }
.tool-list { display: flex; flex-direction: column; gap: 2px; }.tool-item { display: flex; align-items: center; gap: 12px; width: 100%; padding: 8px 4px; border: 0; border-radius: 6px; background: transparent; color: #ededed; text-align: left; cursor: pointer; }.tool-item:hover { background: #111; }.tool-icon { display: grid; place-items: center; width: 24px; height: 24px; border: 1px solid #272727; border-radius: 50%; background: #0d0d0d; color: #d4d4d4; font-size: 10px; }.tool-name { flex: 1; font-size: 14px; }.tool-arrow { color: #777; font-size: 13px; }.empty { padding: 24px 8px; color: #8b8b8b; text-align: center; font-size: 12px; }
@media (max-width: 600px) { .vercel-toolbar { left: 10px; bottom: 10px; }.toolbar-panel { left: 42px; width: calc(100vw - 58px); } }
</style>
