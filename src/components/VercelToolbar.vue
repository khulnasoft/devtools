<script setup lang="ts">
import { useEventListener, useStorage } from '@vueuse/core';

interface ToolbarTool {
  id: string;
  name: string;
  icon: string;
  action: () => void;
}

const emit = defineEmits<{ (e: 'tool', id: string): void }>();

const tools: ToolbarTool[] = [
  { id: 'comments', name: 'Comments', icon: 'i-mdi-comment-outline', action: () => emit('tool', 'comments') },
  { id: 'insights', name: 'Web Insights', icon: 'i-mdi-chart-bar', action: () => emit('tool', 'insights') },
  { id: 'a11y', name: 'Accessibility', icon: 'i-mdi-human', action: () => emit('tool', 'a11y') },
  { id: 'deploy', name: 'Deployments', icon: 'i-mdi-rocket-launch', action: () => emit('tool', 'deploy') },
];

const hidden = useStorage('vercel-toolbar-hidden', false);
const active = ref(false);
const menuOpen = ref(false);
const lastTool = ref<ToolbarTool | null>(null);
const dragging = ref(false);
const showDropX = ref(false);
const offset = ref({ x: 0, y: 0 });
const pos = useStorage('vercel-toolbar-pos', { x: 0, y: 0 });
const moved = ref(false);
const el = ref<HTMLElement | null>(null);

useEventListener(window, 'keydown', (e: KeyboardEvent) => {
  if (e.key === '.' && !e.ctrlKey && !e.metaKey && !(e.target as HTMLElement)?.matches?.('input,textarea,[contenteditable]')) {
    hidden.value = !hidden.value;
    if (!hidden.value) active.value = false;
  }
});

function toggle() {
  if (moved.value) { moved.value = false; return; }
  active.value = !active.value;
  if (!active.value) menuOpen.value = false;
}

function pickTool(t: ToolbarTool) {
  lastTool.value = t;
  t.action();
  menuOpen.value = false;
}

function startDrag(e: PointerEvent) {
  dragging.value = true;
  moved.value = false;
  showDropX.value = true;
  offset.value = { x: e.clientX - pos.value.x, y: e.clientY - pos.value.y };
  (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
}

function onDrag(e: PointerEvent) {
  if (!dragging.value) return;
  const nx = e.clientX - offset.value.x;
  const ny = e.clientY - offset.value.y;
  if (Math.abs(nx - pos.value.x) > 3 || Math.abs(ny - pos.value.y) > 3) moved.value = true;
  pos.value = { x: nx, y: ny };
}

function endDrag(e: PointerEvent) {
  if (!dragging.value) return;
  dragging.value = false;
  showDropX.value = false;
  const dropped = e.clientY > window.innerHeight - 90 && Math.abs(e.clientX - window.innerWidth / 2) < 60;
  if (dropped) { hidden.value = true; active.value = false; }
}
</script>

<template>
  <Teleport to="body">
    <div v-if="showDropX" class="fixed bottom-6 left-1/2 z-[9999] h-12 w-12 -translate-x-1/2 flex items-center justify-center rounded-full bg-red-500/90 text-white text-xl">
      ✕
    </div>

    <div
      v-if="!hidden"
      ref="el"
      class="fixed z-[9998]"
      :style="{ left: '50%', bottom: '24px', transform: `translate(calc(-50% + ${pos.x}px), ${pos.y}px)` }"
    >
      <Transition name="vt">
        <div v-if="menuOpen" class="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 min-w-44 overflow-hidden rounded-xl border border-white/10 bg-[#111111] p-1 shadow-2xl">
          <button
            v-for="t in tools"
            :key="t.id"
            class="flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-left text-sm text-white/80 hover:bg-white/10"
            @click="pickTool(t)"
          >
            <span :class="[t.icon, 'text-base']" />
            {{ t.name }}
          </button>
          <div class="my-1 border-t border-white/10" />
          <button class="flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-left text-sm text-white/80 hover:bg-white/10" @click="hidden = true; active = false">
            <span class="i-mdi-eye-off text-base" />
            Disable for Session
          </button>
        </div>
      </Transition>

      <div
        class="flex items-center gap-1 rounded-full bg-[#111111] p-1.5 shadow-2xl ring-1 ring-white/10 transition-all"
        @pointerdown="startDrag"
        @pointermove="onDrag"
        @pointerup="endDrag"
      >
        <button
          class="relative flex h-9 w-9 items-center justify-center rounded-full text-white transition hover:bg-white/10"
          :title="active ? 'Collapse' : 'Open toolbar'"
          @click.stop="toggle"
        >
          <span :class="active ? 'i-mdi-close' : 'i-mdi-menu'" class="text-lg" />
          <span v-if="!active" class="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-white text-[8px] font-bold text-black">▲</span>
        </button>

        <template v-if="active">
          <div class="h-5 w-px bg-white/15" />
          <button
            v-if="lastTool"
            class="flex h-9 w-9 items-center justify-center rounded-full text-white/90 transition hover:bg-white/10"
            :title="lastTool.name"
            @click.stop="lastTool.action()"
          >
            <span :class="lastTool.icon" class="text-lg" />
          </button>
          <button
            class="flex h-9 w-9 items-center justify-center rounded-full text-white transition hover:bg-white/10"
            title="Tools"
            @click.stop="menuOpen = !menuOpen"
          >
            <span class="i-mdi-view-grid text-lg" />
          </button>
          <div class="h-5 w-px bg-white/15" />
          <button class="flex h-9 w-9 items-center justify-center rounded-full text-white/70 transition hover:bg-white/10" title="Hide" @click.stop="hidden = true">
            <span class="i-mdi-eye-off text-lg" />
          </button>
        </template>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.vt-enter-active, .vt-leave-active { transition: all .15s ease; transform-origin: bottom; }
.vt-enter-from, .vt-leave-to { opacity: 0; transform: translateY(6px) scale(.95); }
</style>
