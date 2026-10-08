import type { Meta, StoryObj } from '@storybook/vue3-vite';

import CLink from './c-link.vue';

const meta = {
  title: 'Components/CLink',
  component: CLink,
  tags: ['autodocs'],
  args: {
    href: '#',
    text: 'Click me',
  },
} satisfies Meta<typeof CLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const CustomText: Story = {
  args: { text: 'Custom link text' },
};

export const ExternalLink: Story = {
  args: { href: 'https://example.com', text: 'External link' },
};

export const DarkMode: Story = {
  globals: { theme: 'dark' },
};
