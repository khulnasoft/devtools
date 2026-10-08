import { Microphone } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Generate speech',
  path: '/generate-speech',
  description: 'Turn text into speech with selectable voice, speed and a browser preview',
  keywords: ['ai', 'generate', 'speech', 'voice', 'tts', 'text to speech', 'audio', 'narration'],
  component: () => import('./generate-speech.vue'),
  icon: Microphone,
  createdAt: new Date('2026-10-08'),
});
