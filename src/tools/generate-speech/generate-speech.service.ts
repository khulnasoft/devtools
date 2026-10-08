import { callAiGateway } from '@/utils/ai-gateway';

export const speechModels = [
  { label: 'OpenAI TTS', value: 'openai/gpt-4o-mini-tts' },
  { label: 'ElevenLabs', value: 'elevenlabs/eleven-turbo-v2' },
];

export const speechVoices = ['alloy', 'ash', 'coral', 'echo', 'nova', 'onyx', 'shimmer'] as const;

export type SpeechVoice = typeof speechVoices[number];

export interface SpeechGenerationOptions {
  text: string
  model: string
  voice: SpeechVoice
  speed: number
}

export interface SpeechGenerationResult {
  source: 'gateway' | 'demo'
  /** Base64 or data url of the generated audio, empty when the demo only previews the text */
  audio: string
}

export const speechFormats = ['mp3', 'wav', 'opus'] as const;

export function buildSpeechPrompt({ text }: Pick<SpeechGenerationOptions, 'text'>) {
  return text.trim().replace(/\s+/g, ' ');
}

export function estimateSpeechDuration({ text, speed }: Pick<SpeechGenerationOptions, 'text' | 'speed'>) {
  const words = text.trim().split(/\s+/).filter(word => word !== '');
  const wordsPerMinute = 150 * speed;

  return words.length === 0 ? 0 : Math.round((words.length / wordsPerMinute) * 60);
}

/**
 * Counts the characters the speech synthesis engine will read, ignoring markup.
 */
export function countSpeakableCharacters(text: string) {
  return buildSpeechPrompt({ text }).length;
}

/**
 * Speaks the text with the browser speech synthesis engine.
 * Resolves when the playback ends, or immediately when the browser has no support.
 */
export function speakText({ text, voice, speed }: SpeechGenerationOptions): Promise<boolean> {
  const synthesis = typeof window === 'undefined' ? undefined : window.speechSynthesis;

  if (!synthesis || typeof window.SpeechSynthesisUtterance === 'undefined') {
    return Promise.resolve(false);
  }

  synthesis.cancel();

  return new Promise((resolve) => {
    const utterance = new SpeechSynthesisUtterance(buildSpeechPrompt({ text }));
    utterance.rate = speed;
    utterance.lang = 'en-US';

    const matchingVoice = synthesis
      .getVoices()
      .find(candidate => candidate.name.toLowerCase().includes(voice));
    if (matchingVoice) {
      utterance.voice = matchingVoice;
    }

    const onEnd = () => {
      utterance.onend = null;
      utterance.onerror = null;
      resolve(true);
    };

    utterance.onend = onEnd;
    utterance.onerror = onEnd;

    synthesis.speak(utterance);
  });
}

export function stopSpeaking() {
  if (typeof window !== 'undefined' && window.speechSynthesis) {
    window.speechSynthesis.cancel();
  }
}

/**
 * Generates speech. Uses the AI Gateway when an API key is configured,
 * otherwise returns no audio and relies on the local browser preview.
 */
export async function generateSpeech(options: SpeechGenerationOptions): Promise<SpeechGenerationResult> {
  try {
    const { data } = await callAiGateway({
      modality: 'speech',
      model: options.model,
      prompt: buildSpeechPrompt(options),
      voice: options.voice,
      speed: options.speed,
    });

    const audio = String(data.audio ?? data.url ?? '');

    if (audio === '') {
      throw new Error('No audio returned by the AI Gateway');
    }

    return { source: 'gateway', audio: audio.startsWith('data:') ? audio : `data:audio/mpeg;base64,${audio}` };
  }
  catch {
    return { source: 'demo', audio: '' };
  }
}
