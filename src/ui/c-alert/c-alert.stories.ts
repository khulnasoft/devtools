import type { Meta, StoryObj } from '@storybook/vue3-vite';

import CAlert from './c-alert.vue';

const meta = {
  title: 'Components/CAlert',
  component: CAlert,
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'select', options: ['default', 'primary', 'warning', 'error', 'success'] },
  },
  args: {
    type: 'default',
    message: 'This is an alert message',
  },
} satisfies Meta<typeof CAlert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Primary: Story = {
  args: { type: 'primary', message: 'Primary alert message' },
};

export const Warning: Story = {
  args: { type: 'warning', message: 'Warning alert message' },
};

export const Error: Story = {
  args: { type: 'error', message: 'Error alert message' },
};

export const Success: Story = {
  args: { type: 'success', message: 'Success alert message' },
};

export const DarkMode: Story = {
  args: { type: 'primary' },
  globals: { theme: 'dark' },
};
