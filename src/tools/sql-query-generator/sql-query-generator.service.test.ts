import { describe, expect, it } from 'vitest';
import { generateQuery, getQueryType } from './sql-query-generator.service';

describe('sql-query-generator', () => {
  describe('generateQuery', () => {
    it('returns empty string for empty description', () => {
      expect(generateQuery('', 'users')).toBe('');
    });

    it('generates SELECT * query', () => {
      expect(generateQuery('select all users', 'users')).toBe('SELECT * FROM users;');
      expect(generateQuery('get all users', 'users')).toBe('SELECT * FROM users;');
      expect(generateQuery('show all users', 'users')).toBe('SELECT * FROM users;');
    });

    it('generates SELECT with WHERE query', () => {
      expect(generateQuery('select users where name is John', 'users')).toContain('WHERE condition');
    });

    it('generates COUNT query', () => {
      expect(generateQuery('count users', 'users')).toBe('SELECT COUNT(*) FROM users;');
      expect(generateQuery('how many users', 'users')).toBe('SELECT COUNT(*) FROM users;');
    });

    it('generates INSERT query', () => {
      expect(generateQuery('insert user', 'users')).toContain('INSERT INTO users');
      expect(generateQuery('add user', 'users')).toContain('INSERT INTO users');
      expect(generateQuery('create user', 'users')).toContain('INSERT INTO users');
    });

    it('generates UPDATE query', () => {
      expect(generateQuery('update user', 'users')).toContain('UPDATE users');
      expect(generateQuery('modify user', 'users')).toContain('UPDATE users');
      expect(generateQuery('change user', 'users')).toContain('UPDATE users');
    });

    it('generates DELETE query', () => {
      expect(generateQuery('delete user', 'users')).toContain('DELETE FROM users');
      expect(generateQuery('remove user', 'users')).toContain('DELETE FROM users');
    });

    it('generates JOIN query', () => {
      expect(generateQuery('join tables', 'users')).toContain('JOIN');
      expect(generateQuery('combine tables', 'users')).toContain('JOIN');
    });

    it('generates ORDER BY query', () => {
      expect(generateQuery('order users by name', 'users')).toContain('ORDER BY');
      expect(generateQuery('sort users', 'users')).toContain('ORDER BY');
    });

    it('generates GROUP BY query', () => {
      expect(generateQuery('group users by name', 'users')).toContain('GROUP BY');
      expect(generateQuery('aggregate users', 'users')).toContain('GROUP BY');
    });

    it('generates LIMIT query', () => {
      expect(generateQuery('limit users', 'users')).toContain('LIMIT');
      expect(generateQuery('top users', 'users')).toContain('LIMIT');
    });

    it('uses default table name when empty', () => {
      expect(generateQuery('select all', '')).toBe('SELECT * FROM users;');
    });

    it('returns fallback message for unknown query', () => {
      expect(generateQuery('unknown query', 'users')).toContain('Could not generate SQL');
    });

    it('uses custom table name', () => {
      expect(generateQuery('select all', 'products')).toBe('SELECT * FROM products;');
    });
  });

  describe('getQueryType', () => {
    it('returns UNKNOWN for empty description', () => {
      expect(getQueryType('')).toBe('UNKNOWN');
    });

    it('returns SELECT for select queries', () => {
      expect(getQueryType('select users')).toBe('SELECT');
    });

    it('returns INSERT for insert queries', () => {
      expect(getQueryType('insert user')).toBe('INSERT');
      expect(getQueryType('add user')).toBe('INSERT');
    });

    it('returns UPDATE for update queries', () => {
      expect(getQueryType('update user')).toBe('UPDATE');
      expect(getQueryType('modify user')).toBe('UPDATE');
    });

    it('returns DELETE for delete queries', () => {
      expect(getQueryType('delete user')).toBe('DELETE');
      expect(getQueryType('remove user')).toBe('DELETE');
    });

    it('returns COUNT for count queries', () => {
      expect(getQueryType('count users')).toBe('COUNT');
    });

    it('returns JOIN for join queries', () => {
      expect(getQueryType('join tables')).toBe('JOIN');
    });

    it('returns UNKNOWN for unknown query type', () => {
      expect(getQueryType('unknown query')).toBe('UNKNOWN');
    });
  });
});
