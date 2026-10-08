import { defineThemes } from '../theme/theme.models';
import { spacing } from '../tokens';

export const { useTheme } = defineThemes({
  dark: {
    buttonGap: spacing[2],
  },
  light: {
    buttonGap: spacing[2],
  },
});
