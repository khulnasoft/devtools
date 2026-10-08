import { HmacSHA256, HmacSHA384, HmacSHA512, enc } from 'crypto-js';
import _ from 'lodash';
import type { JwtAlgorithm, JwtTimeUnit } from './jwt-generator.constants';
import { JWT_TIME_UNITS } from './jwt-generator.constants';
import { makeUriSafe, textToBase64 } from '@/utils/base64';

export { generateJwt, buildRegisteredClaims, parseCustomClaimValue, toUnixTimestamp, durationToSeconds };

const SIGNING_FUNCTIONS = {
  HS256: HmacSHA256,
  HS384: HmacSHA384,
  HS512: HmacSHA512,
} as const;

type SigningAlgorithm = keyof typeof SIGNING_FUNCTIONS;

function toUnixTimestamp(date: Date) {
  return Math.floor(date.getTime() / 1000);
}

function durationToSeconds({ duration, unit }: { duration: number; unit: JwtTimeUnit }) {
  return Math.floor(duration * JWT_TIME_UNITS[unit]);
}

// JWT segments use base64url without padding, see https://datatracker.ietf.org/doc/html/rfc7515#section-2
function encodeSegment(value: string) {
  return textToBase64(value, { makeUrlSafe: true });
}

function sign({
  algorithm,
  signingInput,
  secret,
}: {
  algorithm: SigningAlgorithm
  signingInput: string
  secret: string
}) {
  return makeUriSafe(SIGNING_FUNCTIONS[algorithm](signingInput, secret).toString(enc.Base64));
}

// Claims are appended in the order of the IANA JWT claim registry, so that a generated token stays consistent with what the JWT parser displays.
function buildRegisteredClaims({
  issuer,
  subject,
  audience,
  expiresAt,
  notBefore,
  issuedAt,
  jwtId,
}: {
  issuer?: string
  subject?: string
  audience?: string
  expiresAt?: number
  notBefore?: number
  issuedAt?: number
  jwtId?: string
}) {
  const claims: { [claim: string]: string | number } = {};

  if (!_.isEmpty(issuer)) {
    claims.iss = issuer as string;
  }
  if (!_.isEmpty(subject)) {
    claims.sub = subject as string;
  }
  if (!_.isEmpty(audience)) {
    claims.aud = audience as string;
  }
  if (!_.isNil(expiresAt)) {
    claims.exp = expiresAt;
  }
  if (!_.isNil(notBefore)) {
    claims.nbf = notBefore;
  }
  if (!_.isNil(issuedAt)) {
    claims.iat = issuedAt;
  }
  if (!_.isEmpty(jwtId)) {
    claims.jti = jwtId as string;
  }

  return claims;
}

// A claim value is guessed from its JSON representation, and kept as a plain string when it is not valid JSON.
function parseCustomClaimValue(value: string) {
  try {
    return JSON.parse(value);
  }
  catch (_ignored) {
    return value;
  }
}

function generateJwt({
  algorithm,
  secret = '',
  type = 'JWT',
  keyId,
  claims = {},
}: {
  algorithm: JwtAlgorithm
  secret?: string
  type?: string
  keyId?: string
  claims?: { [claim: string]: unknown }
}) {
  const header = _.omitBy({ alg: algorithm, typ: type, kid: keyId }, _.isEmpty);
  const signingInput = [header, claims].map(segment => encodeSegment(JSON.stringify(segment))).join('.');

  // An unsecured token has an empty signature, but keeps the trailing dot, see https://datatracker.ietf.org/doc/html/rfc7519#section-6
  const signature = algorithm === 'none' ? '' : sign({ algorithm, signingInput, secret });

  return `${signingInput}.${signature}`;
}
