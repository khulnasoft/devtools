import { defineThemes } from '../theme/theme.models';
import { appThemes } from '../theme/themes';
import { spacing } from '../tokens';

export const { useTheme } = defineThemes({
  dark: {
    textColor: appThemes.dark.text.baseColor,
    iconColor: appThemes.dark.text.mutedColor,
    contentSpacing: spacing[2],
  },
  light: {
    textColor: appThemes.light.text.baseColor,
    iconColor: appThemes.light.text.mutedColor,
    contentSpacing: spacing[2],
  },
});
