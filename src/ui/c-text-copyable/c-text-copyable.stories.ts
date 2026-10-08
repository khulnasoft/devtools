import type { Meta, StoryObj } from '@storybook/vue3-vite';

import CTextCopyable from './c-text-copyable.vue';

const meta = {
  title: 'Components/CTextCopyable',
  component: CTextCopyable,
  tags: ['autodocs'],
  args: {
    value: 'https://example.com',
    showIcon: true,
  },
} satisfies Meta<typeof CTextCopyable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithoutIcon: Story = {
  args: { showIcon: false },
};

export const CustomDisplay: Story = {
  args: {
    value: 'https://example.com/very-long-url',
    displayedValue: 'example.com',
  },
};

export const DarkMode: Story = {
  globals: { theme: 'dark' },
};
