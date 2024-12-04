import { Meta, StoryObj } from '@storybook/react';

import { ImageTagModal } from './ImageTagModal';

const meta: Meta<typeof ImageTagModal> = {
  title: 'widgets/workspace/ImageTagModal',
  component: ImageTagModal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ImageTagModal>;

export const Default: Story = {};
