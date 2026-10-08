// Signing algorithms supported by this tool, as listed in https://datatracker.ietf.org/doc/html/rfc7518#section-3.1
export const JWT_ALGORITHMS = ['HS256', 'HS384', 'HS512', 'none'] as const;

export type JwtAlgorithm = (typeof JWT_ALGORITHMS)[number];

// Durations offered when setting a time based claim, expressed in seconds.
export const JWT_TIME_UNITS = {
  seconds: 1,
  minutes: 60,
  hours: 60 * 60,
  days: 24 * 60 * 60,
} as const;

export type JwtTimeUnit = keyof typeof JWT_TIME_UNITS;
