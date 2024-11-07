import { GuidesBox, HomeHeader, WorkspaceContainer, WorkspaceModal } from '@/widgets';
import { useState } from 'react';

export const HomePage = () => {
  // TODO zustand 활용
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <HomeHeader />
      <GuidesBox />
      <WorkspaceContainer />
      <WorkspaceModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};
