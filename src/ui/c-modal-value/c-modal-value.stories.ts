import type { Meta, StoryObj } from '@storybook/vue3-vite';

import CModalValue from './c-modal-value.vue';

const meta = {
  title: 'Components/CModalValue',
  component: CModalValue,
  tags: ['autodocs'],
  args: {
    value: 'This is a long text that will be displayed in a modal when you click the button.',
    label: 'View Full Text',
  },
} satisfies Meta<typeof CModalValue>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithoutLabel: Story = {
  args: { label: undefined },
  render: args => ({
    components: { CModalValue },
    setup() {
      return { args };
    },
    template: `
      <CModalValue v-bind="args">
        <template #label="{ toggleModal }">
          <c-button @click="toggleModal">Open Modal</c-button>
        </template>
      </CModalValue>
    `,
  }),
};

export const ShortValue: Story = {
  args: {
    value: 'Short text',
    label: 'View Text',
  },
};

export const DarkMode: Story = {
  globals: { theme: 'dark' },
};
