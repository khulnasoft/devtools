import type { Meta, StoryObj } from '@storybook/vue3-vite';

import CModal from './c-modal.vue';

const meta = {
  title: 'Components/CModal',
  component: CModal,
  tags: ['autodocs'],
  args: {
    show: true,
    title: 'Modal Title',
  },
} satisfies Meta<typeof CModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => ({
    components: { CModal },
    setup() {
      return { args };
    },
    template: `
      <CModal v-bind="args">
        <p class="text-gray-600">Modal content goes here.</p>
      </CModal>
    `,
  }),
};

export const DarkMode: Story = {
  globals: { theme: 'dark' },
  render: args => ({
    components: { CModal },
    setup() {
      return { args };
    },
    template: `
      <CModal v-bind="args">
        <p class="text-gray-600">Modal content goes here.</p>
      </CModal>
    `,
  }),
};
