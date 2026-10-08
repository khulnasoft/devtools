import type { Meta, StoryObj } from '@storybook/vue3-vite';

import CInputText from './c-input-text.vue';

const meta = {
  title: 'Components/CInputText',
  component: CInputText,
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'select', options: ['text', 'password'] },
    size: { control: 'select', options: ['small', 'medium', 'large'] },
  },
  args: {
    modelValue: '',
    placeholder: 'Enter text...',
    type: 'text',
    size: 'medium',
    disabled: false,
  },
} satisfies Meta<typeof CInputText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Password: Story = {
  args: { type: 'password', placeholder: 'Enter password...' },
};

export const Small: Story = {
  args: { size: 'small' },
};

export const Large: Story = {
  args: { size: 'large' },
};

export const Disabled: Story = {
  args: { disabled: true },
};

export const WithValue: Story = {
  args: { modelValue: 'Sample text' },
};

export const DarkMode: Story = {
  globals: { theme: 'dark' },
};
