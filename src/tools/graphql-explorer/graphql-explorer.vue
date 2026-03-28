<script setup lang="ts">
import { ref } from 'vue';
import { NInput, NButton, NAlert, NTabs, NTabPane, NSpin } from 'naive-ui';
import InputCopyable from '../../components/InputCopyable.vue';

const endpoint = ref('https://api.example.com/graphql');
const query = ref(`query GetUser {
  user(id: "1") {
    id
    name
    email
    posts {
      id
      title
    }
  }
}`);
const variables = ref('{}');
const response = ref('');
const isLoading = ref(false);
const headers = ref('{}');

const sampleQueries: Record<string, string> = {
  getUser: `query GetUser {
  user(id: "1") {
    id
    name
    email
  }
}`,
  createPost: `mutation CreatePost($title: String!, $content: String!) {
  createPost(input: {
    title: $title
    content: $content
  }) {
    id
    title
    createdAt
  }
}`,
  listPosts: `query ListPosts {
  posts(first: 10) {
    edges {
      node {
        id
        title
        author {
          name
        }
      }
    }
  }
}`,
};

const executeQuery = async () => {
  isLoading.value = true;
  try {
    const res = await fetch(endpoint.value, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...JSON.parse(headers.value),
      },
      body: JSON.stringify({
        query: query.value,
        variables: JSON.parse(variables.value),
      }),
    });

    const data = await res.json();
    response.value = JSON.stringify(data, null, 2);
  } catch (e) {
    response.value = `Error: ${e instanceof Error ? e.message : 'Unknown error'}`;
  } finally {
    isLoading.value = false;
  }
};

const loadSampleQuery = (name: string) => {
  query.value = sampleQueries[name];
};
</script>

<template>
  <div class="space-y-4">
    <n-alert type="info" closable>
      Build and test GraphQL queries against your API endpoint.
    </n-alert>

    <div class="space-y-2">
      <label class="block font-semibold">GraphQL Endpoint</label>
      <n-input v-model:value="endpoint" type="text" placeholder="https://api.example.com/graphql" />
    </div>

    <n-tabs type="line">
      <n-tab-pane name="Query" tab="Query">
        <div class="space-y-2 mt-4">
          <label class="block font-semibold">GraphQL Query</label>
          <n-input v-model:value="query" type="textarea" :rows="10" placeholder="query GetUser { ... }" />
        </div>
      </n-tab-pane>

      <n-tab-pane name="Variables" tab="Variables">
        <div class="space-y-2 mt-4">
          <label class="block font-semibold">Variables (JSON)</label>
          <n-input v-model:value="variables" type="textarea" :rows="6" placeholder='{"userId": "1"}' />
        </div>
      </n-tab-pane>

      <n-tab-pane name="Headers" tab="Headers">
        <div class="space-y-2 mt-4">
          <label class="block font-semibold">Headers (JSON)</label>
          <n-input v-model:value="headers" type="textarea" :rows="6" placeholder='{"Authorization": "Bearer token"}' />
        </div>
      </n-tab-pane>

      <n-tab-pane name="Samples" tab="Samples">
        <div class="space-y-2 mt-4">
          <label class="block font-semibold">Sample Queries</label>
          <div class="flex flex-wrap gap-2">
            <n-button v-for="(_, name) in sampleQueries" :key="name" @click="loadSampleQuery(name)">
              {{ name.replace(/([A-Z])/g, ' $1').trim() }}
            </n-button>
          </div>
        </div>
      </n-tab-pane>
    </n-tabs>

    <n-button type="primary" :loading="isLoading" @click="executeQuery">Execute Query</n-button>

    <n-spin :show="isLoading">
      <div v-if="response" class="space-y-2">
        <label class="block font-semibold">Response</label>
        <InputCopyable :value="response" />
      </div>
    </n-spin>
  </div>
</template>
