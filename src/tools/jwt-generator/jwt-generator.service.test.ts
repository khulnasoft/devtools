import { describe, expect, test } from 'vitest';
import jwtDecode from 'jwt-decode';
import {
  buildRegisteredClaims,
  durationToSeconds,
  generateJwt,
  parseCustomClaimValue,
  toUnixTimestamp,
} from './jwt-generator.service';

describe('jwt-generator service', () => {
  describe('generateJwt', () => {
    // Expected signatures were computed with the node crypto module, an implementation independent from the one used by this tool.
    // The HS256 token is the example published on jwt.io.
    test.each([
      ['HS256', 'your-256-bit-secret', 'SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'],
      ['HS384', 'your-384-bit-secret', '8aMsJp4VGY_Ia2s9iWrS8jARCggx0FDRn2FehblXyvGYRrVVbu3LkKKqx_MEuDjQ'],
      [
        'HS512',
        'your-512-bit-secret',
        '_MRZSQUbU6G_jPvXIlFsWSU-PKT203EdcU388r5EWxSxg8QpB3AmEGSo2fBfMYsOaxvzos6ehRm4CYO1MrdwUg',
      ],
    ] as const)('signs a token with %s', (algorithm, secret, signature) => {
      const token = generateJwt({
        algorithm,
        secret,
        claims: { sub: '1234567890', name: 'John Doe', iat: 1516239022 },
      });

      const [header, payload, actualSignature] = token.split('.');

      expect(header).toBe(
        algorithm === 'HS256'
          ? 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'
          : algorithm === 'HS384'
            ? 'eyJhbGciOiJIUzM4NCIsInR5cCI6IkpXVCJ9'
            : 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9',
      );
      expect(payload).toBe('eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ');
      expect(actualSignature).toBe(signature);
    });

    test('generates an unsecured token with an empty signature', () => {
      expect(generateJwt({ algorithm: 'none', secret: 'ignored', claims: { sub: '1234567890' } })).toBe(
        'eyJhbGciOiJub25lIiwidHlwIjoiSldUIn0.eyJzdWIiOiIxMjM0NTY3ODkwIn0.',
      );
    });

    test('adds the key id to the header, and omits it when empty', () => {
      const token = generateJwt({ algorithm: 'none', keyId: 'my-key-id', claims: {} });

      expect(jwtDecode<Record<string, unknown>>(token, { header: true })).toEqual({
        alg: 'none',
        typ: 'JWT',
        kid: 'my-key-id',
      });
      expect(
        jwtDecode<Record<string, unknown>>(generateJwt({ algorithm: 'none', claims: {} }), { header: true }),
      ).toEqual({ alg: 'none', typ: 'JWT' });
    });

    test('honours a custom token type, and omits it when empty', () => {
      expect(
        jwtDecode<Record<string, unknown>>(generateJwt({ algorithm: 'none', type: 'at+jwt', claims: {} }), {
          header: true,
        }),
      ).toEqual({ alg: 'none', typ: 'at+jwt' });
      expect(
        jwtDecode<Record<string, unknown>>(generateJwt({ algorithm: 'none', type: '', claims: {} }), { header: true }),
      ).toEqual({ alg: 'none' });
    });

    test('segments are base64url encoded without padding', () => {
      const token = generateJwt({ algorithm: 'none', claims: { padding: 'a'.repeat(40) } });

      expect(token).not.toContain('=');
      expect(token).not.toContain('+');
      expect(token).not.toContain('/');
    });

    test('claims holding non ascii characters survive a round trip', () => {
      const claims = { name: 'Jöhn Dœ 🔑', note: 'ĄĆĘŁŃÓŚŹŻ', tags: ['ü', '漢'] };
      const token = generateJwt({ algorithm: 'HS256', secret: 'secret', claims });

      expect(jwtDecode(token)).toEqual(claims);
    });
  });

  describe('buildRegisteredClaims', () => {
    test('keeps the claims following the IANA claim registry order', () => {
      const claims = buildRegisteredClaims({
        issuer: 'devtools',
        subject: '1234567890',
        audience: 'devtools.khulnasoft.com',
        expiresAt: 1516240000,
        notBefore: 1516238000,
        issuedAt: 1516239000,
        jwtId: 'a-uuid',
      });

      expect(Object.keys(claims)).toEqual(['iss', 'sub', 'aud', 'exp', 'nbf', 'iat', 'jti']);
    });

    test('omits the claims that are not filled in', () => {
      expect(buildRegisteredClaims({ subject: '1234567890', issuedAt: 1516239000 })).toEqual({
        sub: '1234567890',
        iat: 1516239000,
      });
    });

    test('omits the string claims that are left empty, but keeps a timestamp set to zero', () => {
      expect(buildRegisteredClaims({ issuer: '', subject: undefined, jwtId: undefined, expiresAt: 0 })).toEqual({
        exp: 0,
      });
    });

    test('keeps a string claim verbatim, without trimming it', () => {
      expect(buildRegisteredClaims({ subject: ' spaced out ' })).toEqual({ sub: ' spaced out ' });
    });
  });

  describe('parseCustomClaimValue', () => {
    test('keeps a value as a string when it is not valid JSON', () => {
      expect(parseCustomClaimValue('John Doe')).toBe('John Doe');
      expect(parseCustomClaimValue('')).toBe('');
      expect(parseCustomClaimValue('01')).toBe('01');
    });

    test('uses the JSON representation of a value when there is one', () => {
      expect(parseCustomClaimValue('42')).toBe(42);
      expect(parseCustomClaimValue('1.5')).toBe(1.5);
      expect(parseCustomClaimValue('true')).toBe(true);
      expect(parseCustomClaimValue('false')).toBe(false);
      expect(parseCustomClaimValue('null')).toBeNull();
      expect(parseCustomClaimValue('["a","b"]')).toEqual(['a', 'b']);
      expect(parseCustomClaimValue('{"role":"admin"}')).toEqual({ role: 'admin' });
    });
  });

  describe('toUnixTimestamp', () => {
    test('expresses a date as the number of seconds since the Unix epoch', () => {
      expect(toUnixTimestamp(new Date('1970-01-01T00:00:00.000Z'))).toBe(0);
      expect(toUnixTimestamp(new Date('2022-04-12T19:33:46.123Z'))).toBe(1649792026);
    });
  });

  describe('durationToSeconds', () => {
    test('converts a duration expressed in the given unit to seconds', () => {
      expect(durationToSeconds({ duration: 30, unit: 'seconds' })).toBe(30);
      expect(durationToSeconds({ duration: 1, unit: 'minutes' })).toBe(60);
      expect(durationToSeconds({ duration: 2, unit: 'hours' })).toBe(7200);
      expect(durationToSeconds({ duration: 1, unit: 'days' })).toBe(86400);
      expect(durationToSeconds({ duration: 1.5, unit: 'hours' })).toBe(5400);
    });
  });
});
