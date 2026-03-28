<script setup lang="ts">
import { ref } from 'vue';
import { NInput, NButton, NAlert, NTag, NSpace } from 'naive-ui';

interface Message {
  type: 'sent' | 'received' | 'system';
  content: string;
  timestamp: string;
}

const wsUrl = ref('wss://echo.websocket.org');
const messageInput = ref('');
const messages = ref<Message[]>([]);
const isConnected = ref(false);
let ws: WebSocket | null = null;

const connect = () => {
  if (isConnected.value) {
    disconnect();
    return;
  }

  try {
    ws = new WebSocket(wsUrl.value);

    ws.onopen = () => {
      isConnected.value = true;
      addMessage('system', 'Connected to WebSocket');
    };

    ws.onmessage = (event) => {
      addMessage('received', event.data);
    };

    ws.onerror = (error) => {
      addMessage('system', `Error: WebSocket connection failed`);
    };

    ws.onclose = () => {
      isConnected.value = false;
      addMessage('system', 'Disconnected from WebSocket');
    };
  } catch (e) {
    addMessage('system', `Failed to connect: ${e instanceof Error ? e.message : 'Unknown error'}`);
  }
};

const disconnect = () => {
  if (ws) {
    ws.close();
    ws = null;
  }
};

const sendMessage = () => {
  if (!isConnected.value || !messageInput.value.trim()) return;

  try {
    ws?.send(messageInput.value);
    addMessage('sent', messageInput.value);
    messageInput.value = '';
  } catch (e) {
    addMessage('system', `Failed to send message: ${e instanceof Error ? e.message : 'Unknown error'}`);
  }
};

const addMessage = (type: Message['type'], content: string) => {
  messages.value.push({
    type,
    content,
    timestamp: new Date().toLocaleTimeString(),
  });
};

const clearMessages = () => {
  messages.value = [];
};
</script>

<template>
  <div class="space-y-4">
    <n-alert type="info" closable>
      Test WebSocket connections and send/receive messages in real-time.
    </n-alert>

    <div class="space-y-2">
      <label class="block font-semibold">WebSocket URL</label>
      <div class="flex gap-2">
        <n-input v-model:value="wsUrl" type="text" placeholder="wss://echo.websocket.org" :disabled="isConnected" />
        <n-button :type="isConnected ? 'error' : 'primary'" @click="connect">
          {{ isConnected ? 'Disconnect' : 'Connect' }}
        </n-button>
      </div>
    </div>

    <div class="flex gap-2">
      <n-tag :type="isConnected ? 'success' : 'default'">
        {{ isConnected ? 'Connected' : 'Disconnected' }}
      </n-tag>
    </div>

    <div class="space-y-2">
      <label class="block font-semibold">Messages</label>
      <div class="bg-gray-50 border rounded p-4 h-64 overflow-y-auto">
        <div v-if="messages.length === 0" class="text-gray-500 text-center py-20">
          No messages yet. Connect and send a message to start.
        </div>
        <div v-for="(msg, i) in messages" :key="i" class="mb-2 text-sm">
          <span class="text-gray-500">{{ msg.timestamp }}</span>
          <n-tag :type="msg.type === 'sent' ? 'info' : msg.type === 'received' ? 'success' : 'default'" class="ml-2">
            {{ msg.type }}
          </n-tag>
          <div class="mt-1 ml-4 font-mono text-gray-700 break-words">{{ msg.content }}</div>
        </div>
      </div>
    </div>

    <div class="space-y-2">
      <label class="block font-semibold">Send Message</label>
      <div class="flex gap-2">
        <n-input v-model:value="messageInput" type="text" placeholder="Enter message..." :disabled="!isConnected" @keyup.enter="sendMessage" />
        <n-button type="primary" :disabled="!isConnected" @click="sendMessage">Send</n-button>
        <n-button @click="clearMessages">Clear</n-button>
      </div>
    </div>
  </div>
</template>
