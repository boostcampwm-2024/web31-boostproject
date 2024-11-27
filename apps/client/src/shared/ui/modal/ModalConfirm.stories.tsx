import { Meta, StoryObj } from '@storybook/react';
import { ModalConfirm } from './ModalConfirm';

const meta: Meta<typeof ModalConfirm> = {
  title: 'shared/ui/modal/ModalConfirm',
  component: ModalConfirm,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ModalConfirm>;

export const Default: Story = {};
