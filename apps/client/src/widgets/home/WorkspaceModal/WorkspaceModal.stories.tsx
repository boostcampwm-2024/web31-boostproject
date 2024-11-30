import { Meta, StoryObj } from '@storybook/react';

import { WorkspaceModal } from './WorkspaceModal';
import { action } from '@storybook/addon-actions';
import { useEffect } from 'react';
import { useModalStore } from '@/shared/store';

const meta: Meta<typeof WorkspaceModal> = {
  title: 'widgets/home/WorkspaceModal',
  component: WorkspaceModal,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => {
      const {
        setModalContent,
        setHandleModalCloseButton,
        setHandleModalConfirmButton,
        openModal,
        closeModal,
      } = useModalStore();

      useEffect(() => {
        setModalContent('워크스페이스 관련 모달창입니다');
        setHandleModalCloseButton(() => {
          action('closeModal')();
          closeModal();
        });
        setHandleModalConfirmButton(() => {
          action('confirmModal')();
          closeModal();
        });
      }, []);

      return (
        <>
          <button onClick={() => openModal()} className="rounded-2xl border px-4 py-2">
            모달 열기
          </button>
          <Story />
        </>
      );
    },
  ],
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof WorkspaceModal>;

export const Default: Story = {
  args: {
    // propsname: value,
  },
};
