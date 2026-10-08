import { defineThemes } from '../theme/theme.models';
import { appThemes } from '../theme/themes';
import { sizes } from '../tokens';

// Sizes compose the shared token scale with CTable's own layout keys
const tableSizes = {
  small: { ...sizes.small, cellPadding: '8px 12px' },
  medium: { ...sizes.medium, cellPadding: '12px 16px' },
  large: { ...sizes.large, cellPadding: '16px 24px' },
};

export const { useTheme } = defineThemes({
  dark: {
    sizes: tableSizes,
    backgroundColor: appThemes.dark.background,
    // Pure migration: preserve current values from c-table.vue
    headerBackgroundColor: '#333333',
    headerTextColor: '#9ca3af',
    rowBackgroundColor: '#232323',
    rowBorderColor: '#282828',
    textColor: '#9ca3af',
    headerCellPadding: '12px 24px',
    bodyCellPadding: '16px 24px',
  },
  light: {
    sizes: tableSizes,
    backgroundColor: appThemes.light.background,
    // Pure migration: preserve current values from c-table.vue
    headerBackgroundColor: '#ffffff',
    headerTextColor: '#374151',
    rowBackgroundColor: '#ffffff',
    rowBorderColor: '#efeff5',
    textColor: '#6b7280',
    headerCellPadding: '12px 24px',
    bodyCellPadding: '16px 24px',
  },
});
