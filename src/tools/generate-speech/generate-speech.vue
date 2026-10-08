<script setup lang="ts">
import {
  countSpeakableCharacters,
  estimateSpeechDuration,
  generateSpeech,
  speakText,
  speechModels,
  speechVoices,
  stopSpeaking,
} from './generate-speech.service';
import type { SpeechVoice } from './generate-speech.service';
import AiGatewaySettings from '@/components/AiGatewaySettings.vue';
import { hasAiGateway } from '@/composable/aiGatewayKey';
import { capitalize } from '@/utils/ai-gateway';
import { useDownloadFileFromBase64 } from '@/composable/downloadBase64';

const voiceOptions = speechVoices.map(voice => ({ label: capitalize(voice), value: voice }));

const text = ref('Hello, this is a speech generation preview. Adjust the voice and speed, then press play.');
const model = ref(speechModels[0].value);
const voice = ref<SpeechVoice>('alloy');
const speed = ref(1);

const isGenerating = ref(false);
const audio = ref('');
const isSpeaking = ref(false);

const charactersCount = computed(() => countSpeakableCharacters(text.value));
const duration = computed(() => estimateSpeechDuration({ text: text.value, speed: speed.value }));

const { download } = useDownloadFileFromBase64({ source: audio, filename: 'ai-generated-speech' });

async function onGenerate() {
  if (text.value.trim() === '') {
    return;
  }

  isGenerating.value = true;
  try {
    const generation = await generateSpeech({
      text: text.value,
      model: model.value,
      voice: voice.value,
      speed: speed.value,
    });
    audio.value = generation.audio;
  }
  finally {
    isGenerating.value = false;
  }

  await play();
}

async function play() {
  isSpeaking.value = true;
  try {
    await speakText({ text: text.value, model: model.value, voice: voice.value, speed: speed.value });
  }
  finally {
    isSpeaking.value = false;
  }
}

function stop() {
  stopSpeaking();
  isSpeaking.value = false;
}

onBeforeUnmount(stop);
</script>

<template>
  <div style="max-width: 800px; margin: 0 auto">
    <AiGatewaySettings />
    <c-card mb-3 title="Text to speak">
      <c-input-text
        v-model:value="text"
        placeholder="Type the text you want to hear..."
        multiline
        :rows="5"
        mb-3
      />

      <div flex gap-3>
        <c-select v-model:value="model" :options="speechModels" label="Model" flex-1 />
        <c-select v-model:value="voice" :options="voiceOptions" label="Voice" flex-1 />
        <n-form label-placement="left" label-width="55px" flex-1>
          <n-form-item label="Speed">
            <n-input-number v-model:value="speed" :min="0.5" :max="2" :step="0.1" />
          </n-form-item>
        </n-form>
      </div>

      <div mt-2 text-xs opacity-60>
        {{ charactersCount }} characters, about {{ duration }}s at {{ speed }}x speed
      </div>
    </c-card>

    <div mb-3 flex justify-center gap-3>
      <n-spin v-if="isGenerating" size="small" />
      <c-button type="primary" :disabled="isGenerating || text.trim() === ''" @click="onGenerate">
        Generate speech
      </c-button>
      <c-button :disabled="text.trim() === ''" @click="play">
        Play
      </c-button>
      <c-button :disabled="!isSpeaking" @click="stop">
        Stop
      </c-button>
    </div>

    <c-card v-if="audio" title="Generated audio">
      <audio :src="audio" controls mb-2 />
      <div flex justify-center>
        <c-button @click="download()">
          Download audio
        </c-button>
      </div>
    </c-card>

    <c-card v-else title="Preview">
      <div text-sm>
        {{
          hasAiGateway
            ? 'The AI Gateway did not return any audio, so the text is previewed with your browser speech engine.'
            : 'No AI Gateway key configured, so the text is previewed with your browser speech engine instead of being generated as a downloadable audio file.'
        }}
      </div>
    </c-card>
  </div>
</template>

<style lang="less" scoped>
.n-input-number {
  width: 100%;
}
</style>
