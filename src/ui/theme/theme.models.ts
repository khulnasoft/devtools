import { useStyleStore } from '@/stores/style.store';

export { defineThemes };

/**
 * Defines a theme system with light and dark variants
 * @param themes - Object containing light and dark theme configurations
 * @returns Object containing themes and a composable to access the current theme
 *
 * @example
 * ```ts
 * const { themes, useTheme } = defineThemes({
 *   light: { primary: '#007bff' },
 *   dark: { primary: '#0d6efd' }
 * });
 *
 * // In a component
 * const theme = useTheme();
 * console.log(theme.value.primary); // Returns color based on current theme
 * ```
 */
function defineThemes<Theme>(themes: { light: Theme; dark: Theme }) {
  return {
    themes,
    /**
     * Composable to get the current theme based on the dark mode setting
     * @returns Computed ref that resolves to the current theme (light or dark)
     */
    useTheme() {
      const styleStore = useStyleStore();
      return computed(() => themes[styleStore.isDarkTheme ? 'dark' : 'light']);
    },
  };
}
