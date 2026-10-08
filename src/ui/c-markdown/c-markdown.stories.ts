import type { Meta, StoryObj } from '@storybook/vue3-vite';

import CMarkdown from './c-markdown.vue';

const meta = {
  title: 'Components/CMarkdown',
  component: CMarkdown,
  tags: ['autodocs'],
  args: {
    markdown: '# Heading\n\nThis is **bold** and *italic* text.\n\n- Item 1\n- Item 2\n\n[Link](https://example.com)',
  },
} satisfies Meta<typeof CMarkdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithCode: Story = {
  args: {
    markdown: '# Code Example\n\n```javascript\nconst greeting = "Hello";\nconsole.log(greeting);\n```',
  },
};

export const WithLinks: Story = {
  args: {
    markdown: '# Links\n\nVisit [Example](https://example.com) or [Google](https://google.com)',
  },
};

export const DarkMode: Story = {
  globals: { theme: 'dark' },
};
