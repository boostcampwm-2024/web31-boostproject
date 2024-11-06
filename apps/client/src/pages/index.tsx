import { HomePage } from '@/pages/HomePage';
import { NotFound } from '@/pages/NotFound';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/workspace/:workspaceId" element={<div>워크스페이스</div>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
