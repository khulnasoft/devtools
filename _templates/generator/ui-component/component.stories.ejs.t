---
to: src/ui/<%= h.changeCase.param(name) %>/<%= h.changeCase.param(name) %>.stories.ts
---
import type { Meta, StoryObj } from '@storybook/vue3-vite';

import <%= h.changeCase.pascal(name) %> from './<%= h.changeCase.param(name) %>.vue';

const meta = {
  title: 'Components/<%= h.changeCase.pascal(name) %>',
  component: <%= h.changeCase.pascal(name) %>,
  tags: ['autodocs'],
  args: {},
} satisfies Meta<typeof <%= h.changeCase.pascal(name) %>>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const DarkMode: Story = {
  globals: { theme: 'dark' },
};
