<script setup lang="ts">
import { ref, computed } from 'vue';
import { NInput, NCard, NAccordion, NAccordionItem } from 'naive-ui';
import InputCopyable from '../../components/InputCopyable.vue';

const searchQuery = ref('');

const sections = [
  {
    title: 'Images',
    items: [
      { cmd: 'docker build -t <name> .', desc: 'Build an image from Dockerfile' },
      { cmd: 'docker images', desc: 'List all images' },
      { cmd: 'docker rmi <image>', desc: 'Remove an image' },
      { cmd: 'docker pull <image>', desc: 'Pull image from registry' },
      { cmd: 'docker push <image>', desc: 'Push image to registry' },
      { cmd: 'docker tag <old> <new>', desc: 'Tag an image' },
    ],
  },
  {
    title: 'Containers',
    items: [
      { cmd: 'docker run <image>', desc: 'Create and run container' },
      { cmd: 'docker run -d <image>', desc: 'Run in detached mode' },
      { cmd: 'docker run -p 8080:80 <image>', desc: 'Map ports' },
      { cmd: 'docker run -e VAR=value <image>', desc: 'Set environment variables' },
      { cmd: 'docker ps', desc: 'List running containers' },
      { cmd: 'docker ps -a', desc: 'List all containers' },
      { cmd: 'docker stop <container>', desc: 'Stop container' },
      { cmd: 'docker start <container>', desc: 'Start container' },
      { cmd: 'docker rm <container>', desc: 'Remove container' },
    ],
  },
  {
    title: 'Logs & Exec',
    items: [
      { cmd: 'docker logs <container>', desc: 'View container logs' },
      { cmd: 'docker logs -f <container>', desc: 'Follow logs' },
      { cmd: 'docker exec <container> <cmd>', desc: 'Execute command in container' },
      { cmd: 'docker exec -it <container> /bin/bash', desc: 'Open shell in container' },
      { cmd: 'docker inspect <container>', desc: 'Inspect container details' },
    ],
  },
  {
    title: 'Compose',
    items: [
      { cmd: 'docker-compose up', desc: 'Start services' },
      { cmd: 'docker-compose up -d', desc: 'Start in detached mode' },
      { cmd: 'docker-compose down', desc: 'Stop and remove services' },
      { cmd: 'docker-compose logs', desc: 'View logs' },
      { cmd: 'docker-compose exec <service> <cmd>', desc: 'Execute command in service' },
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
        placeholder="Search Docker commands..."
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
