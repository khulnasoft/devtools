import { defineThemes } from '../theme/theme.models';

export const { useTheme } = defineThemes({
  dark: {
    backgroundColor: '#000000',
    textColor: '#ffffff',
    padding: '12px 6px',
    borderRadius: '4px',
    shadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    offset: '5px',
  },
  light: {
    backgroundColor: '#000000',
    textColor: '#ffffff',
    padding: '12px 6px',
    borderRadius: '4px',
    shadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    offset: '5px',
  },
});
