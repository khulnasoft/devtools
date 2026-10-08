import type { StorybookConfig } from '@storybook/vue3-vite';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import UnoCSS from 'unocss/vite';

const configDir = dirname(fileURLToPath(import.meta.url));

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: ['@storybook/addon-docs', '@storybook/addon-a11y', '@storybook/addon-themes'],
  framework: {
    name: '@storybook/vue3-vite',
    options: {
      // This repo uses a tsconfig *references* layout. Without an explicit tsconfig,
      // vue-component-meta cannot resolve props or the `@/*` path alias.
      docgen: {
        plugin: 'vue-component-meta',
        tsconfig: 'tsconfig.app.json',
      },
    },
  },
  viteFinal: async (config) => {
    // Required: preview.ts imports 'virtual:uno.css', which only resolves
    // when the UnoCSS Vite plugin is registered.
    config.plugins = [...(config.plugins ?? []), UnoCSS()];
    return config;
  },
  typescript: {
    check: false,
  },
};

export default config;