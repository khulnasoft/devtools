import type { Preview, Renderer } from '@storybook/vue3-vite';
import { setup } from '@storybook/vue3-vite';
import { withThemeByClassName } from '@storybook/addon-themes';
import { createPinia } from 'pinia';

import { useStyleStore } from '@/stores/style.store';

import 'virtual:uno.css';

// Pinia must be created and registered once at module scope. Creating it inside a
// decorator would build a fresh store (and a fresh useDark() localStorage read) per render.
const pinia = createPinia();
setup((app) => {
  app.use(pinia);
});

const preview: Preview = {
  decorators: [
    // Drives the `dark` class on <html>. useDark() from @vueuse/core owns that class,
    // and UnoCSS `dark:` utilities compile to `.dark .dark\:…` in this project.
    withThemeByClassName<Renderer>({
      themes: { light: '', dark: 'dark' },
      defaultTheme: 'light',
      parentSelector: 'html',
    }),

    // defineThemes() resolves light/dark from the Pinia store, not from the DOM class.
    // Without this sync, useTheme() returns light values while UnoCSS renders dark,
    // and components appear half-themed.
    (story, context) => ({
      components: { story },
      setup() {
        // Must run inside setup(): the decorator body has no active Pinia instance yet.
        const styleStore = useStyleStore();
        styleStore.isDarkTheme = context.globals.theme === 'dark';
        return { story };
      },
      template: '<div class="p-4"><story /></div>',
    }),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: { toc: true },
  },
};

export default preview;