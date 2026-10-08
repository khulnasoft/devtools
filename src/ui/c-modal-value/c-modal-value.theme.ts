import { defineThemes } from '../theme/theme.models';
import { spacing } from '../tokens';

export const { useTheme } = defineThemes({
  dark: {
    buttonSpacing: spacing[4],
  },
  light: {
    buttonSpacing: spacing[4],
  },
});
