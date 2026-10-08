import { describe, expect, it } from 'vitest';
import { generateRegex, getExplanation } from './regex-generator.service';

describe('regex-generator', () => {
  describe('generateRegex', () => {
    it('returns empty string for empty input', () => {
      expect(generateRegex('')).toBe('');
    });

    it('generates email regex', () => {
      expect(generateRegex('match email')).toContain('@');
      expect(generateRegex('email addresses')).toContain('@');
    });

    it('generates url regex', () => {
      expect(generateRegex('match url')).toContain('https?');
      expect(generateRegex('find links')).toContain('https?');
    });

    it('generates phone regex', () => {
      expect(generateRegex('phone number')).toContain('\\+?[1-9]');
    });

    it('generates date regex', () => {
      expect(generateRegex('date')).toContain('\\d{4}-\\d{2}-\\d{2}');
    });

    it('generates time regex', () => {
      expect(generateRegex('time')).toContain('\\d{2}:\\d{2}');
    });

    it('generates hex regex', () => {
      expect(generateRegex('hex')).toContain('0x[0-9a-fA-F]');
      expect(generateRegex('hexadecimal')).toContain('0x[0-9a-fA-F]');
    });

    it('generates ip regex', () => {
      expect(generateRegex('ip address')).toContain('\\d{1,3}\\.\\d{1,3}');
    });

    it('generates number regex', () => {
      expect(generateRegex('number')).toContain('\\d+');
      expect(generateRegex('digit')).toContain('\\d+');
    });

    it('generates letter regex', () => {
      expect(generateRegex('letter')).toContain('[a-zA-Z]');
      expect(generateRegex('alphabet')).toContain('[a-zA-Z]');
    });

    it('generates word regex', () => {
      expect(generateRegex('word')).toContain('\\b\\w+\\b');
    });

    it('generates whitespace regex', () => {
      expect(generateRegex('whitespace')).toContain('\\s+');
      expect(generateRegex('space')).toContain('\\s+');
    });

    it('returns fallback message for unknown pattern', () => {
      expect(generateRegex('unknown pattern')).toContain('Could not generate regex');
    });
  });

  describe('getExplanation', () => {
    it('returns empty string for empty input', () => {
      expect(getExplanation('')).toBe('');
    });

    it('returns explanation for email', () => {
      expect(getExplanation('email')).toContain('email addresses');
    });

    it('returns explanation for url', () => {
      expect(getExplanation('url')).toContain('HTTP/HTTPS');
    });

    it('returns explanation for phone', () => {
      expect(getExplanation('phone')).toContain('E.164');
    });

    it('returns explanation for date', () => {
      expect(getExplanation('date')).toContain('YYYY-MM-DD');
    });

    it('returns explanation for time', () => {
      expect(getExplanation('time')).toContain('HH:MM');
    });

    it('returns explanation for hex', () => {
      expect(getExplanation('hex')).toContain('hexadecimal');
    });

    it('returns explanation for ip', () => {
      expect(getExplanation('ip')).toContain('IPv4');
    });

    it('returns explanation for number', () => {
      expect(getExplanation('number')).toContain('digits');
    });

    it('returns explanation for letter', () => {
      expect(getExplanation('letter')).toContain('letters');
    });

    it('returns explanation for word', () => {
      expect(getExplanation('word')).toContain('word characters');
    });

    it('returns explanation for whitespace', () => {
      expect(getExplanation('whitespace')).toContain('whitespace');
    });

    it('returns fallback for unknown pattern', () => {
      expect(getExplanation('unknown')).toContain('No explanation available');
    });
  });
});
