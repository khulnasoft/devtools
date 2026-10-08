import { defineThemes } from '../theme/theme.models';
import { spacing } from '../tokens';

export const { useTheme } = defineThemes({
  dark: {
    iconGap: spacing[2],
  },
  light: {
    iconGap: spacing[2],
  },
});
