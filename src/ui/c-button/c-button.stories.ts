import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { h } from 'vue';

import CButton from './c-button.vue';

const meta = {
  title: 'Components/CButton',
  component: CButton,
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'select', options: ['default', 'primary', 'warning', 'error'] },
    variant: { control: 'select', options: ['basic', 'text'] },
    size: { control: 'select', options: ['small', 'medium', 'large'] },
  },
  args: { type: 'default', variant: 'basic', size: 'medium' },
} satisfies Meta<typeof CButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Primary: Story = { args: { type: 'primary' } };

export const Warning: Story = { args: { type: 'warning' } };

export const Error: Story = { args: { type: 'error' } };

export const Disabled: Story = { args: { disabled: true } };

export const TextVariant: Story = { args: { variant: 'text' } };

export const Small: Story = { args: { size: 'small' } };

export const Large: Story = { args: { size: 'large' } };

export const AllVariants: Story = {
  render: args =>
    h(
      'div',
      { class: 'flex flex-wrap gap-2' },
      (['default', 'primary', 'warning', 'error'] as const).map(type =>
        h(CButton, { ...args, type }, { default: () => type }),
      ),
    ),
};

export const DarkMode: Story = {
  args: { type: 'primary' },
  // Story-level `globals` forces the theme for this story regardless of the toolbar's
  // current selection. `parameters.themes.default` would NOT work here — it only applies
  // when no global selection exists, so it silently renders light if the toolbar was
  // already set. Storybook disables the theme toolbar while viewing this story.
  globals: { theme: 'dark' },
};
