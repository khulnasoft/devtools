import { defineThemes } from '../theme/theme.models';
import { appThemes } from '../theme/themes';

export const { useTheme } = defineThemes({
  dark: {
    linkColor: appThemes.dark.primary.color,
  },
  light: {
    linkColor: appThemes.light.primary.color,
  },
});
