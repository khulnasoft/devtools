import { callAiGateway, capitalize, createSeededRandom, extractKeywords, pickOne } from '@/utils/ai-gateway';

export const videoModels = [
  { label: 'Veo', value: 'google/veo' },
  { label: 'Kling', value: 'kwaivgi/kling-v1' },
  { label: 'Runway Gen-3', value: 'runway/gen3-turbo' },
];

export const videoDurations = [4, 6, 8, 10] as const;

export type VideoDuration = typeof videoDurations[number];

export const videoAspectRatios = ['16:9', '9:16', '1:1', '4:5'] as const;

export interface VideoGenerationOptions {
  prompt: string
  model: string
  duration: number
  aspectRatio: string
}

export interface VideoScene {
  index: number
  startSecond: number
  durationSeconds: number
  shot: string
  cameraMovement: string
  description: string
}

export interface VideoGenerationResult {
  source: 'gateway' | 'demo'
  /** Video as a data url, empty when only the offline storyboard is available */
  video: string
  scenes: VideoScene[]
}

const shotTypes = ['wide', 'medium', 'close-up', 'aerial', 'over the shoulder'];
const cameraMovements = ['static', 'pan left', 'pan right', 'dolly in', 'dolly out', 'handheld'];
const transitions = ['cut', 'cross dissolve', 'fade', 'match cut'];

export function buildVideoPrompt({ prompt, duration, aspectRatio }: Pick<VideoGenerationOptions, 'prompt' | 'duration' | 'aspectRatio'>) {
  return `${prompt}\n\nDuration: ${duration}s. Aspect ratio: ${aspectRatio}.`;
}

export function countScenes(duration: number, sceneLength = 3) {
  return Math.max(1, Math.round(duration / sceneLength));
}

/**
 * Deterministic, offline storyboard, used when no AI Gateway key is configured.
 * It turns the prompt into a shot list that can be used as the video brief.
 */
export function buildDemoStoryboard({ prompt, duration }: Pick<VideoGenerationOptions, 'prompt' | 'duration'>) {
  const keywords = extractKeywords(prompt);
  const random = createSeededRandom(prompt);
  const subject = keywords[0] ?? 'the subject';
  const detail = keywords[1] ?? keywords[0] ?? 'the setting';
  const sceneCount = countScenes(duration);
  const scenesDuration = Math.round((duration / sceneCount) * 10) / 10;

  return Array.from({ length: sceneCount }, (_, index): VideoScene => {
    const shot = pickOne(shotTypes, random);
    const cameraMovement = pickOne(cameraMovements, random);
    const transition = pickOne(transitions, random);

    return {
      index: index + 1,
      startSecond: Math.round(index * scenesDuration * 10) / 10,
      durationSeconds: scenesDuration,
      shot,
      cameraMovement,
      description: index === 0
        ? `Establishing ${shot} shot on ${capitalize(subject)}, with ${detail} setting the mood.`
        : `${capitalize(transition)} to a ${shot} shot exploring ${detail}, camera on ${cameraMovement}.`,
    };
  });
}

function parseScenes(text: string): VideoScene[] {
  const parsed = JSON.parse(text);

  return Array.isArray(parsed) ? parsed as VideoScene[] : [];
}

/**
 * Generates a video. Uses the AI Gateway when an API key is configured,
 * otherwise falls back to the local storyboard generator.
 */
export async function generateVideo(options: VideoGenerationOptions): Promise<VideoGenerationResult> {
  try {
    const { data } = await callAiGateway({
      modality: 'video',
      model: options.model,
      prompt: buildVideoPrompt(options),
      duration: options.duration,
      aspectRatio: options.aspectRatio,
    });

    const video = String(data.video ?? data.url ?? '');

    if (video === '') {
      throw new Error('No video returned by the AI Gateway');
    }

    return { source: 'gateway', video, scenes: parseScenes(String(data.scenes ?? '[]')) };
  }
  catch {
    return { source: 'demo', video: '', scenes: buildDemoStoryboard(options) };
  }
}
