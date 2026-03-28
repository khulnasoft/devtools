<script setup lang="ts">
import { ref } from 'vue';
import { NInput, NButton, NAlert, NTable, NTag, NSpin } from 'naive-ui';

interface ImageInfo {
  name: string;
  digest: string;
  tags: string[];
  size: string;
  created: string;
}

const registryUrl = ref('https://registry.hub.docker.com/v2');
const imageName = ref('library/nodejs');
const tags = ref<string[]>([]);
const isLoading = ref(false);
const error = ref('');

const fetchTags = async () => {
  if (!imageName.value.trim()) {
    error.value = 'Please enter an image name';
    return;
  }

  isLoading.value = true;
  error.value = '';
  tags.value = [];

  try {
    const [registry, image] = imageName.value.includes('/') 
      ? imageName.value.split('/') 
      : ['library', imageName.value];
    
    const url = `https://registry.hub.docker.com/v2/repositories/${registry}/${image}/tags`;
    const res = await fetch(url);
    
    if (!res.ok) throw new Error(`Registry returned ${res.status}`);
    
    const data = await res.json();
    tags.value = data.results?.map((r: any) => r.name) || [];
  } catch (e) {
    error.value = e instanceof Error ? e.message : 'Failed to fetch tags';
  } finally {
    isLoading.value = false;
  }
};
</script>

<template>
  <div class="space-y-4">
    <n-alert type="info" closable>
      Inspect Docker container images and their available tags from registries.
    </n-alert>

    <div class="space-y-2">
      <label class="block font-semibold">Image Name</label>
      <div class="flex gap-2">
        <n-input v-model:value="imageName" type="text" placeholder="library/nodejs or myregistry/myimage" />
        <n-button type="primary" :loading="isLoading" @click="fetchTags">Fetch Tags</n-button>
      </div>
    </div>

    <div v-if="error" class="p-3 bg-red-100 border border-red-300 rounded text-red-700">
      {{ error }}
    </div>

    <n-spin :show="isLoading">
      <div v-if="tags.length > 0" class="space-y-2">
        <label class="block font-semibold">Available Tags ({{ tags.length }})</label>
        <div class="flex flex-wrap gap-2">
          <n-tag v-for="tag in tags.slice(0, 20)" :key="tag" round>
            {{ tag }}
          </n-tag>
          <n-tag v-if="tags.length > 20" round type="warning">
            +{{ tags.length - 20 }} more
          </n-tag>
        </div>
      </div>
    </n-spin>
  </div>
</template>
