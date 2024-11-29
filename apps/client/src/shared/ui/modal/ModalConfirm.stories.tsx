import { Meta, StoryObj } from '@storybook/react';

import { ModalConfirm } from './ModalConfirm';
import { useState } from 'react';

const meta: Meta<typeof ModalConfirm> = {
  title: 'shared/ui/modal/ModalConfirm',
  component: ModalConfirm,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '모달 재사용 컴포넌트',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ModalConfirm>;

export const Default: Story = {
  args: {
    isOpen: false,
  },
  render: (args) => {
    const [isOpen, setIsOpen] = useState(args.isOpen);
    return (
      <div>
        <button onClick={() => setIsOpen(true)}>모달 열기</button>
        <ModalConfirm {...args} isOpen={isOpen}>
          <div className="flex flex-col items-center justify-center">
            <p>모달창입니다.</p>
            <img src="./images/booduck_modal.png" alt="부덕이" width={100} height={100} />
            <button onClick={() => setIsOpen(false)}>닫기</button>
          </div>
        </ModalConfirm>
      </div>
    );
  },
};
