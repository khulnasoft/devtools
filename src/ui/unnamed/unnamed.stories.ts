import type { Meta, StoryObj } from '@storybook/vue3-vite';

import Unnamed from './unnamed.vue';

const meta = {
  title: 'Components/Unnamed',
  component: Unnamed,
  tags: ['autodocs'],
  args: {},
} satisfies Meta<typeof Unnamed>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const DarkMode: Story = {
  globals: { theme: 'dark' },
};
