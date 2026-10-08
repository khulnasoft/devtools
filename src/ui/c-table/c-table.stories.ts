import type { Meta, StoryObj } from '@storybook/vue3-vite';

import CTable from './c-table.vue';

const meta = {
  title: 'Components/CTable',
  component: CTable,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['small', 'medium', 'large'] },
  },
  args: {
    data: [
      { name: 'John Doe', email: 'john@example.com', role: 'Admin' },
      { name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
      { name: 'Bob Johnson', email: 'bob@example.com', role: 'User' },
    ],
    headers: [
      { key: 'name', label: 'Name' },
      { key: 'email', label: 'Email' },
      { key: 'role', label: 'Role' },
    ],
    hideHeaders: false,
    description: 'Sample data table',
    size: 'medium',
  },
} satisfies Meta<typeof CTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithoutHeaders: Story = {
  args: {
    hideHeaders: true,
  },
};

export const Small: Story = {
  args: {
    size: 'small',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
  },
};

export const CustomHeaders: Story = {
  args: {
    headers: ['name', 'email', 'role'],
  },
};

export const DarkMode: Story = {
  globals: { theme: 'dark' },
};
