import type { Meta, StoryObj } from '@storybook/vue3-vite';

import CButtonsSelect from './c-buttons-select.vue';

const meta = {
  title: 'Components/CButtonsSelect',
  component: CButtonsSelect,
  tags: ['autodocs'],
  args: {
    options: ['Option 1', 'Option 2', 'Option 3'],
    value: 'Option 1',
    size: 'medium',
  },
} satisfies Meta<typeof CButtonsSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Small: Story = {
  args: { size: 'small' },
};

export const Large: Story = {
  args: { size: 'large' },
};

export const WithTooltips: Story = {
  args: {
    options: [
      { label: 'Option 1', value: 'opt1', tooltip: 'First option' },
      { label: 'Option 2', value: 'opt2', tooltip: 'Second option' },
      { label: 'Option 3', value: 'opt3', tooltip: 'Third option' },
    ],
  },
};

export const DarkMode: Story = {
  globals: { theme: 'dark' },
};
