import { defineThemes } from '../theme/theme.models';
import { appThemes } from '../theme/themes';
import { borderRadius, shadows, spacing } from '../tokens';

export const { useTheme } = defineThemes({
  dark: {
    borderColor: appThemes.dark.default.color,
    borderColorHover: appThemes.dark.default.colorHover,
    borderColorActive: appThemes.dark.primary.color,
    textColor: appThemes.dark.text.mutedColor,
    separatorColor: appThemes.dark.default.color,
    padding: spacing[8],
    borderWidth: '2px',
    borderRadius: borderRadius.lg,
    shadow: shadows.sm,
  },
  light: {
    borderColor: '#d1d5db',
    borderColorHover: '#9ca3af',
    borderColorActive: appThemes.light.primary.color,
    textColor: appThemes.light.text.mutedColor,
    separatorColor: '#d1d5db',
    padding: spacing[8],
    borderWidth: '2px',
    borderRadius: borderRadius.lg,
    shadow: shadows.sm,
  },
});
