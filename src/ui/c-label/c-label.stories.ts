import type { Meta, StoryObj } from '@storybook/vue3-vite';

import CLabel from './c-label.vue';

const meta = {
  title: 'Components/CLabel',
  component: CLabel,
  tags: ['autodocs'],
  args: {
    label: 'Field Label',
    labelPosition: 'top',
    labelAlign: 'left',
  },
} satisfies Meta<typeof CLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => ({
    components: { CLabel },
    setup() {
      return { args };
    },
    template: `
      <CLabel v-bind="args">
        <input type="text" placeholder="Enter value" class="border p-2 rounded" />
      </CLabel>
    `,
  }),
};

export const LeftPosition: Story = {
  args: { labelPosition: 'left', labelWidth: '120px' },
  render: args => ({
    components: { CLabel },
    setup() {
      return { args };
    },
    template: `
      <CLabel v-bind="args">
        <input type="text" placeholder="Enter value" class="border p-2 rounded" />
      </CLabel>
    `,
  }),
};

export const RightAlign: Story = {
  args: { labelAlign: 'right' },
  render: args => ({
    components: { CLabel },
    setup() {
      return { args };
    },
    template: `
      <CLabel v-bind="args">
        <input type="text" placeholder="Enter value" class="border p-2 rounded" />
      </CLabel>
    `,
  }),
};

export const DarkMode: Story = {
  globals: { theme: 'dark' },
  render: args => ({
    components: { CLabel },
    setup() {
      return { args };
    },
    template: `
      <CLabel v-bind="args">
        <input type="text" placeholder="Enter value" class="border p-2 rounded" />
      </CLabel>
    `,
  }),
};
