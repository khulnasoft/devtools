import type { Size } from '../common.types';

export const sizes = {
  small: { fontSize: '12px', controlHeight: '28px' },
  medium: { fontSize: '14px', controlHeight: '34px' },
  large: { fontSize: '16px', controlHeight: '40px' },
} as const satisfies Record<Size, { fontSize: string; controlHeight: string }>;
