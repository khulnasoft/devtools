import type { Meta, StoryObj } from '@storybook/vue3-vite';

import CTooltip from './c-tooltip.vue';

const meta = {
  title: 'Components/CTooltip',
  component: CTooltip,
  tags: ['autodocs'],
  argTypes: {
    position: { control: 'select', options: ['top', 'bottom', 'left', 'right'] },
  },
  args: {
    tooltip: 'This is a tooltip',
    position: 'top',
  },
} satisfies Meta<typeof CTooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => ({
    components: { CTooltip },
    setup() {
      return { args };
    },
    template: `
      <CTooltip v-bind="args">
        <button class="px-4 py-2 bg-gray-200 rounded">Hover me</button>
      </CTooltip>
    `,
  }),
};

export const Bottom: Story = {
  args: { position: 'bottom' },
  render: args => ({
    components: { CTooltip },
    setup() {
      return { args };
    },
    template: `
      <CTooltip v-bind="args">
        <button class="px-4 py-2 bg-gray-200 rounded">Hover me</button>
      </CTooltip>
    `,
  }),
};

export const Left: Story = {
  args: { position: 'left' },
  render: args => ({
    components: { CTooltip },
    setup() {
      return { args };
    },
    template: `
      <CTooltip v-bind="args">
        <button class="px-4 py-2 bg-gray-200 rounded">Hover me</button>
      </CTooltip>
    `,
  }),
};

export const Right: Story = {
  args: { position: 'right' },
  render: args => ({
    components: { CTooltip },
    setup() {
      return { args };
    },
    template: `
      <CTooltip v-bind="args">
        <button class="px-4 py-2 bg-gray-200 rounded">Hover me</button>
      </CTooltip>
    `,
  }),
};

export const CustomSlot: Story = {
  args: { tooltip: undefined },
  render: args => ({
    components: { CTooltip },
    setup() {
      return { args };
    },
    template: `
      <CTooltip v-bind="args">
        <button class="px-4 py-2 bg-gray-200 rounded">Hover me</button>
        <template #tooltip>
          <span class="font-bold">Custom tooltip content</span>
        </template>
      </CTooltip>
    `,
  }),
};

export const DarkMode: Story = {
  args: { position: 'top' },
  globals: { theme: 'dark' },
  render: args => ({
    components: { CTooltip },
    setup() {
      return { args };
    },
    template: `
      <CTooltip v-bind="args">
        <button class="px-4 py-2 bg-gray-200 rounded">Hover me</button>
      </CTooltip>
    `,
  }),
};
