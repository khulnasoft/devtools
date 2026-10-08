import { describe, expect, it } from 'vitest';
import {
  buildSpeechPrompt,
  countSpeakableCharacters,
  estimateSpeechDuration,
  generateSpeech,
} from './generate-speech.service';

describe('generate-speech', () => {
  it('Collapses whitespace of the prompt', () => {
    expect(buildSpeechPrompt({ text: '  hello   world \n' })).to.equal('hello world');
  });

  it('Counts the speakable characters', () => {
    expect(countSpeakableCharacters('  hello   world  ')).to.equal(11);
  });

  it('Estimates a duration based on the number of words and the speed', () => {
    const text = 'one two three four five six';

    expect(estimateSpeechDuration({ text, speed: 1 })).to.equal(2);
    expect(estimateSpeechDuration({ text, speed: 2 })).to.equal(1);
  });

  it('Returns no duration for an empty text', () => {
    expect(estimateSpeechDuration({ text: '   ', speed: 1 })).to.equal(0);
  });

  it('Falls back to the browser preview when no gateway key is configured', async () => {
    const result = await generateSpeech({ text: 'hello world', model: 'openai/gpt-4o-mini-tts', voice: 'alloy', speed: 1 });

    expect(result.source).to.equal('demo');
    expect(result.audio).to.equal('');
  });
});
