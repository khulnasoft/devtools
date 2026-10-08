import type { Meta, StoryObj } from '@storybook/vue3-vite';

import CFileUpload from './c-file-upload.vue';

const meta = {
  title: 'Components/CFileUpload',
  component: CFileUpload,
  tags: ['autodocs'],
  args: {
    title: 'Drag and drop files here, or click to select files',
  },
} satisfies Meta<typeof CFileUpload>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const MultipleFiles: Story = {
  args: { multiple: true },
};

export const WithAccept: Story = {
  args: { accept: 'image/*' },
};

export const CustomTitle: Story = {
  args: { title: 'Upload your documents' },
};

export const DarkMode: Story = {
  globals: { theme: 'dark' },
};
