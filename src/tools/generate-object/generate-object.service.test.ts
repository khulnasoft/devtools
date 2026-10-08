import { describe, expect, it } from 'vitest';
import { buildDemoObject, buildObjectPrompt, generateObject, parseObjectFields } from './generate-object.service';
import type { ObjectGenerationOptions } from './generate-object.service';

describe('generate-object', () => {
  it('Parses fields written as a comma or newline separated list', () => {
    const fields = parseObjectFields('title: string, score: number\nactive: boolean');

    expect(fields).toEqual([
      { name: 'title', type: 'string' },
      { name: 'score', type: 'number' },
      { name: 'active', type: 'boolean' },
    ]);
  });

  it('Defaults to a string type for unknown types', () => {
    expect(parseObjectFields('weird: blob')).toEqual([{ name: 'weird', type: 'string' }]);
  });

  it('Ignores empty field definitions', () => {
    expect(parseObjectFields(' , name: string, ')).toEqual([{ name: 'name', type: 'string' }]);
  });

  it('Builds a prompt listing every field', () => {
    const prompt = buildObjectPrompt({
      prompt: 'A blog post',
      fields: [{ name: 'title', type: 'string' }],
    });

    expect(prompt).toContain('- title (string)');
    expect(prompt).toContain('A blog post');
  });

  it('Generates a deterministic object with the requested field types', () => {
    const options: ObjectGenerationOptions = {
      prompt: 'A blog post about pull requests',
      model: 'openai/gpt-4o-mini',
      fields: [
        { name: 'title', type: 'string' },
        { name: 'score', type: 'number' },
        { name: 'tags', type: 'array' },
        { name: 'published', type: 'boolean' },
      ],
    };

    const first = buildDemoObject(options);
    const second = buildDemoObject(options);

    expect(first).to.deep.equal(second);
    expect(first.title).to.be.a('string');
    expect(first.score).to.be.a('number');
    expect(first.tags).to.be.an('array');
    expect(first.published).to.be.a('boolean');
  });

  it('Falls back to the demo generator when no gateway key is configured', async () => {
    const result = await generateObject({
      prompt: 'A blog post about pull requests',
      model: 'openai/gpt-4o-mini',
      fields: [{ name: 'title', type: 'string' }],
    });

    expect(result.source).to.equal('demo');
    expect(result.object).to.have.property('title');
  });
});
