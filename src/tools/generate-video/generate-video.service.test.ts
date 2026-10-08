import { describe, expect, it } from 'vitest';
import {
  buildDemoStoryboard,
  buildVideoPrompt,
  countScenes,
  generateVideo,
} from './generate-video.service';

const options = {
  prompt: 'A cyclist crossing a foggy bridge',
  model: 'google/veo',
  duration: 6,
  aspectRatio: '16:9',
} as const;

describe('generate-video', () => {
  it('Builds a prompt including the duration and the aspect ratio', () => {
    const prompt = buildVideoPrompt(options);

    expect(prompt).toContain('6s');
    expect(prompt).toContain('16:9');
  });

  it('Computes a scene count from the duration', () => {
    expect(countScenes(6)).to.equal(2);
    expect(countScenes(10)).to.equal(3);
    expect(countScenes(1)).to.equal(1);
  });

  it('Builds a deterministic storyboard covering the whole duration', () => {
    const first = buildDemoStoryboard(options);
    const second = buildDemoStoryboard(options);

    expect(first).to.deep.equal(second);
    expect(first).to.have.lengthOf(2);
    expect(first[0].startSecond).to.equal(0);
    expect(first[first.length - 1].startSecond + first[first.length - 1].durationSeconds).to.equal(6);
  });

  it('Falls back to the storyboard when no gateway key is configured', async () => {
    const result = await generateVideo(options);

    expect(result.source).to.equal('demo');
    expect(result.video).to.equal('');
    expect(result.scenes.length).to.be.greaterThan(0);
  });
});
