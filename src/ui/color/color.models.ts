export { lighten, darken, setOpacity, mix, hexToRgb, rgbToHex, getLuminance, getContrastRatio };

const clampHex = (value: number) => Math.max(0, Math.min(255, Math.round(value)));

/**
 * Lightens a hex color by a specified amount
 * @param color - Hex color string (e.g., '#ffffff' or '#ffffff80')
 * @param amount - Amount to lighten (0-255)
 * @returns Lightened hex color string
 */
function lighten(color: string, amount: number): string {
  const alpha = color.length === 9 ? color.slice(7) : '';
  const num = Number.parseInt(color.slice(1, 7), 16);

  const r = clampHex(((num >> 16) & 255) + amount);
  const g = clampHex(((num >> 8) & 255) + amount);
  const b = clampHex((num & 255) + amount);

  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, '0')}${alpha}`;
}

/**
 * Darkens a hex color by a specified amount
 * @param color - Hex color string (e.g., '#ffffff' or '#ffffff80')
 * @param amount - Amount to darken (0-255)
 * @returns Darkened hex color string
 */
function darken(color: string, amount: number): string {
  return lighten(color, -amount);
}

/**
 * Sets the opacity of a hex color
 * @param color - Hex color string (e.g., '#ffffff' or '#ffffff80')
 * @param opacity - Opacity value (0-1)
 * @returns Hex color string with alpha channel
 */
function setOpacity(color: string, opacity: number): string {
  const alpha = clampHex(Math.round(opacity * 255))
    .toString(16)
    .padStart(2, '0');

  if (color.length === 7) {
    return `${color}${alpha}`;
  }

  if (color.length === 9) {
    return `${color.slice(0, 7)}${alpha}`;
  }
  throw new Error('Invalid hex color');
}

/**
 * Converts a hex color string to RGB object
 * @param color - Hex color string (e.g., '#ffffff' or '#ffffff80')
 * @returns RGB object with optional alpha channel
 */
function hexToRgb(color: string): { r: number; g: number; b: number; a?: number } {
  const hex = color.replace('#', '');
  const alpha = hex.length === 8 ? Number.parseInt(hex.slice(6, 8), 16) / 255 : undefined;
  const r = Number.parseInt(hex.slice(0, 2), 16);
  const g = Number.parseInt(hex.slice(2, 4), 16);
  const b = Number.parseInt(hex.slice(4, 6), 16);

  return { r, g, b, a: alpha };
}

/**
 * Converts RGB values to hex color string
 * @param r - Red channel (0-255)
 * @param g - Green channel (0-255)
 * @param b - Blue channel (0-255)
 * @param a - Optional alpha channel (0-1)
 * @returns Hex color string
 */
function rgbToHex(r: number, g: number, b: number, a?: number): string {
  const toHex = (n: number) => n.toString(16).padStart(2, '0');
  const hex = `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  if (a !== undefined) {
    return `${hex}${toHex(Math.round(a * 255))}`;
  }
  return hex;
}

/**
 * Mixes two hex colors together
 * @param color1 - First hex color string
 * @param color2 - Second hex color string
 * @param weight - Weight for mixing (0-1, where 0 is color1 and 1 is color2)
 * @returns Mixed hex color string
 */
function mix(color1: string, color2: string, weight: number): string {
  const rgb1 = hexToRgb(color1);
  const rgb2 = hexToRgb(color2);
  const w = Math.max(0, Math.min(1, weight));

  const r = Math.round(rgb1.r * (1 - w) + rgb2.r * w);
  const g = Math.round(rgb1.g * (1 - w) + rgb2.g * w);
  const b = Math.round(rgb1.b * (1 - w) + rgb2.b * w);
  const a = rgb1.a !== undefined && rgb2.a !== undefined ? rgb1.a * (1 - w) + rgb2.a * w : undefined;

  return rgbToHex(r, g, b, a);
}

/**
 * Calculates the relative luminance of a color (WCAG standard)
 * @param color - Hex color string
 * @returns Luminance value (0-1)
 */
function getLuminance(color: string): number {
  const { r, g, b } = hexToRgb(color);

  const toLinear = (c: number) => {
    const s = c / 255;
    return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
  };

  const rLinear = toLinear(r);
  const gLinear = toLinear(g);
  const bLinear = toLinear(b);

  return 0.2126 * rLinear + 0.7152 * gLinear + 0.0722 * bLinear;
}

/**
 * Calculates the contrast ratio between two colors (WCAG standard)
 * @param color1 - First hex color string
 * @param color2 - Second hex color string
 * @returns Contrast ratio (1-21)
 */
function getContrastRatio(color1: string, color2: string): number {
  const lum1 = getLuminance(color1);
  const lum2 = getLuminance(color2);
  const lighter = Math.max(lum1, lum2);
  const darker = Math.min(lum1, lum2);
  return (lighter + 0.05) / (darker + 0.05);
}
