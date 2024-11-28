import { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

import { Logo } from './Logo';

const meta: Meta<typeof Logo> = {
  title: 'shared/ui/logo/Logo',
  component: Logo,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Logo>;

export const BlackLogo: Story = {
  args: {
    isBlack: true,
  },
};

export const WhiteLogo: Story = {
  args: {
    isBlack: false,
  },
};
