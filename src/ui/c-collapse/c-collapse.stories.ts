import type { Meta, StoryObj } from '@storybook/vue3-vite';

import CCollapse from './c-collapse.vue';

const meta = {
  title: 'Components/CCollapse',
  component: CCollapse,
  tags: ['autodocs'],
  args: {
    title: 'Click to expand',
  },
} satisfies Meta<typeof CCollapse>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => ({
    components: { CCollapse },
    setup() {
      return { args };
    },
    template: `
      <CCollapse v-bind="args">
        <p>This is the collapsible content that appears when you click the header.</p>
      </CCollapse>
    `,
  }),
};

export const WithCustomTitle: Story = {
  args: { title: 'Custom Section Title' },
  render: args => ({
    components: { CCollapse },
    setup() {
      return { args };
    },
    template: `
      <CCollapse v-bind="args">
        <p>This is the collapsible content that appears when you click the header.</p>
      </CCollapse>
    `,
  }),
};

export const DarkMode: Story = {
  globals: { theme: 'dark' },
  render: args => ({
    components: { CCollapse },
    setup() {
      return { args };
    },
    template: `
      <CCollapse v-bind="args">
        <p>This is the collapsible content that appears when you click the header.</p>
      </CCollapse>
    `,
  }),
};
