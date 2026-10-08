import type { Meta, StoryObj } from '@storybook/vue3-vite';

import CKeyValueList from './c-key-value-list.vue';

const meta = {
  title: 'Components/CKeyValueList',
  component: CKeyValueList,
  tags: ['autodocs'],
  args: {
    items: [
      { label: 'Name', value: 'John Doe' },
      { label: 'Email', value: 'john@example.com' },
      { label: 'Status', value: 'Active' },
    ],
  },
} satisfies Meta<typeof CKeyValueList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithNilValues: Story = {
  args: {
    items: [
      { label: 'Name', value: 'John Doe' },
      { label: 'Email', value: null, hideOnNil: true },
      { label: 'Status', value: 'Active' },
    ],
  },
};

export const WithArrays: Story = {
  args: {
    items: [
      { label: 'Tags', value: ['tag1', 'tag2', 'tag3'] },
      { label: 'Roles', value: ['admin', 'user'] },
    ],
  },
};

export const DarkMode: Story = {
  globals: { theme: 'dark' },
};
