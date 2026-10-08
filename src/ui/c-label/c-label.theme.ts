import { defineThemes } from '../theme/theme.models';
import { appThemes } from '../theme/themes';
import { spacing } from '../tokens';

export const { useTheme } = defineThemes({
  dark: {
    textColor: appThemes.dark.text.baseColor,
    labelSpacing: spacing[1],
    labelPaddingRight: spacing[3],
  },
  light: {
    textColor: appThemes.light.text.baseColor,
    labelSpacing: spacing[1],
    labelPaddingRight: spacing[3],
  },
});
