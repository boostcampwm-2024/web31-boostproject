import { HomePage } from '@/pages/HomePage';
import { NotFound } from '@/pages/NotFound';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { WorkspacePage } from '@/pages/WorkspacePage';

// TODO: 라우팅을 app에서 처리하고, 여기는 page관련 export 코드만! (fsd규칙)
export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/workspace/:workspaceId" element={<WorkspacePage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
