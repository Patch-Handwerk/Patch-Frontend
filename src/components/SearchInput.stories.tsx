import { Meta, StoryObj } from '@storybook/react';

import SearchInput from './SearchInput';

const meta = {
  title: 'Patch Components/Search',
  component: SearchInput,
  tags: ['autodocs'],
  argTypes: {
    onChange: {
      control: false,
    },
    id: {
      control: false,
    },
  },
} satisfies Meta<typeof SearchInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    placeholder: 'Search...',
    id: 'search-input',
  },
};
