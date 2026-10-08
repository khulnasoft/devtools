import type { Meta, StoryObj } from '@storybook/vue3-vite';

import CSelect from './c-select.vue';

const meta = {
  title: 'Components/CSelect',
  component: CSelect,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['small', 'medium', 'large'] },
  },
  args: {
    modelValue: '',
    options: [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3', value: 'option3' },
    ],
    placeholder: 'Select an option...',
    size: 'medium',
    disabled: false,
  },
} satisfies Meta<typeof CSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

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
  args: { modelValue: 'option2' },
};

export const DarkMode: Story = {
  globals: { theme: 'dark' },
};
