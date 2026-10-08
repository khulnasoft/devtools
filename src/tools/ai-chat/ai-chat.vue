<script setup lang="ts">
interface Message {
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
}

const messages = ref<Message[]>([
  {
    role: 'assistant',
    content: 'Hello! I\'m an AI assistant. How can I help you today?',
    timestamp: new Date(),
  },
]);

const inputMessage = ref('');
const isTyping = ref(false);

function sendMessage() {
  const content = inputMessage.value.trim();
  if (!content) {
    return;
  }

  messages.value.push({
    role: 'user',
    content,
    timestamp: new Date(),
  });

  inputMessage.value = '';
  isTyping.value = true;

  // Simulate AI response
  setTimeout(
    () => {
      const responses = [
        'That\'s an interesting question! Let me help you with that.',
        'I understand what you\'re asking. Here\'s my response.',
        'Great point! Here\'s what I think about that.',
        'Thanks for sharing that. Let me provide some insights.',
        'I can certainly help with that. Here\'s my suggestion.',
      ];

      messages.value.push({
        role: 'assistant',
        content: responses[Math.floor(Math.random() * responses.length)],
        timestamp: new Date(),
      });

      isTyping.value = false;
    },
    1000 + Math.random() * 1000,
  );
}

function clearChat() {
  messages.value = [
    {
      role: 'assistant',
      content: 'Hello! I\'m an AI assistant. How can I help you today?',
      timestamp: new Date(),
    },
  ];
}

function formatTime(date: Date) {
  return new Date(date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}
</script>

<template>
  <div style="max-width: 800px; margin: 0 auto; height: calc(100vh - 100px); display: flex; flex-direction: column">
    <c-card mb-3 style="flex: 1; display: flex; flex-direction: column; overflow: hidden">
      <div mb-3 flex items-center justify-between>
        <div font-bold>
          AI Chat
        </div>
        <c-button size="small" @click="clearChat">
          Clear chat
        </c-button>
      </div>

      <div
        style="flex: 1; overflow-y: auto; padding: 1rem; background: #f5f5f5; border-radius: 8px; margin-bottom: 1rem"
      >
        <div
          v-for="(message, index) in messages"
          :key="index"
          :style="{
            display: 'flex',
            marginBottom: '1rem',
            justifyContent: message.role === 'user' ? 'flex-end' : 'flex-start',
          }"
        >
          <div
            :style="{
              maxWidth: '70%',
              padding: '0.75rem 1rem',
              borderRadius: '12px',
              background: message.role === 'user' ? '#007bff' : '#ffffff',
              color: message.role === 'user' ? '#ffffff' : '#333333',
              boxShadow: '0 1px 2px rgba(0,0,0,0.1)',
            }"
          >
            <div mb-1 text-xs opacity="70">
              {{ message.role === 'user' ? 'You' : 'AI' }} • {{ formatTime(message.timestamp) }}
            </div>
            <div style="white-space: pre-wrap">
              {{ message.content }}
            </div>
          </div>
        </div>

        <div v-if="isTyping" style="display: flex; justify-content: flex-start; margin-bottom: 1rem">
          <div
            style="
              padding: 0.75rem 1rem;
              background: #ffffff;
              border-radius: 12px;
              box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
            "
          >
            <div style="display: flex; gap: 4px">
              <div
                style="width: 8px; height: 8px; background: #999; border-radius: 50%; animation: bounce 1s infinite"
              />
              <div
                style="
                  width: 8px;
                  height: 8px;
                  background: #999;
                  border-radius: 50%;
                  animation: bounce 1s infinite 0.2s;
                "
              />
              <div
                style="
                  width: 8px;
                  height: 8px;
                  background: #999;
                  border-radius: 50%;
                  animation: bounce 1s infinite 0.4s;
                "
              />
            </div>
          </div>
        </div>
      </div>

      <div style="display: flex; gap: 0.5rem">
        <c-input-text
          v-model:value="inputMessage"
          placeholder="Type your message..."
          :multiline="false"
          style="flex: 1"
          @keydown.enter="sendMessage"
        />
        <c-button :disabled="!inputMessage.trim() || isTyping" @click="sendMessage">
          Send
        </c-button>
      </div>
    </c-card>

    <div text-center text-xs opacity="60">
      This is a demo chat interface. In production, connect to an AI API like OpenAI or Anthropic.
    </div>
  </div>

  <style>
    @keyframes bounce {
    0%,
    100% {
    transform: translateY(0);
    }
    50% {
    transform: translateY(-4px);
    }
    }
  </style>
</template>
