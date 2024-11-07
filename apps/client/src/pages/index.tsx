import { HomePage } from '@/pages/HomePage';
import { NotFound } from '@/pages/NotFound';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { WorkspacePage } from '@/pages/WorkspacePage';

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/workspace/:workspaceId" element={<WorkspacePage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
