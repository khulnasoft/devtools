import type { Meta, StoryObj } from '@storybook/vue3-vite';

import CCard from './c-card.vue';

const meta = {
  title: 'Components/CCard',
  component: CCard,
  tags: ['autodocs'],
  args: {
    title: 'Card Title',
    description: 'This is a card description',
  },
} satisfies Meta<typeof CCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithoutDescription: Story = {
  args: {
    description: undefined,
  },
};

export const WithSlot: Story = {
  render: args => ({
    components: { CCard },
    setup() {
      return { args };
    },
    template: `
      <CCard v-bind="args">
        <template #default>
          <p class="text-gray-600">Custom card content goes here.</p>
        </template>
      </CCard>
    `,
  }),
};

export const DarkMode: Story = {
  globals: { theme: 'dark' },
};
