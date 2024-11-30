import { Meta, StoryObj } from '@storybook/react';

import { Logo } from './Logo';
import { action } from '@storybook/addon-actions';

const meta: Meta<typeof Logo> = {
  title: 'shared/ui/logo/Logo',
  component: Logo,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => {
      const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        event.preventDefault();
        action('logo-clicked')({ pathname: '/' });
      };
      return (
        <div onClick={handleClick}>
          <Story />
        </div>
      );
    },
  ],
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Logo>;

export const BlackLogo: Story = {
  args: {
    isBlack: false,
  },
};

export const WhiteLogo: Story = {
  args: {
    isBlack: true,
  },
  parameters: {
    backgrounds: {
      default: 'black',
      values: [{ name: 'black', value: '#000000' }],
    },
  },
};
