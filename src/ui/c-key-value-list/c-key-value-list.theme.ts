import { defineThemes } from '../theme/theme.models';
import { appThemes } from '../theme/themes';
import { spacing, typography } from '../tokens';

export const { useTheme } = defineThemes({
  dark: {
    keyColor: appThemes.dark.text.mutedColor,
    valueColor: appThemes.dark.text.baseColor,
    keyFontSize: typography.fontSize.sm,
    valueFontSize: typography.fontSize.base,
    itemGap: spacing[2],
  },
  light: {
    keyColor: appThemes.light.text.mutedColor,
    valueColor: appThemes.light.text.baseColor,
    keyFontSize: typography.fontSize.sm,
    valueFontSize: typography.fontSize.base,
    itemGap: spacing[2],
  },
});
