import { describe, expect, it } from 'vitest';
import { generateSchema } from './json-schema-generator.service';

describe('json-schema-generator', () => {
  describe('generateSchema', () => {
    it('generates schema for null', () => {
      expect(generateSchema(null)).toEqual({ type: 'null' });
    });

    it('generates schema for string', () => {
      expect(generateSchema('hello')).toEqual({ type: 'string' });
    });

    it('generates schema for integer', () => {
      expect(generateSchema(42)).toEqual({ type: 'integer' });
    });

    it('generates schema for number', () => {
      expect(generateSchema(3.14)).toEqual({ type: 'number' });
    });

    it('generates schema for boolean', () => {
      expect(generateSchema(true)).toEqual({ type: 'boolean' });
    });

    it('generates schema for empty array', () => {
      expect(generateSchema([])).toEqual({ type: 'array', items: {} });
    });

    it('generates schema for array with items', () => {
      expect(generateSchema([1, 2, 3])).toEqual({
        type: 'array',
        items: { type: 'integer' },
      });
    });

    it('generates schema for object', () => {
      expect(generateSchema({ name: 'John', age: 30 })).toEqual({
        type: 'object',
        properties: {
          name: { type: 'string' },
          age: { type: 'integer' },
        },
        required: ['name', 'age'],
      });
    });

    it('generates schema for nested object', () => {
      expect(generateSchema({ user: { name: 'John' } })).toEqual({
        type: 'object',
        properties: {
          user: {
            type: 'object',
            properties: { name: { type: 'string' } },
            required: ['name'],
          },
        },
        required: ['user'],
      });
    });

    it('generates schema for array of objects', () => {
      expect(generateSchema([{ id: 1 }])).toEqual({
        type: 'array',
        items: {
          type: 'object',
          properties: { id: { type: 'integer' } },
          required: ['id'],
        },
      });
    });
  });
});
