import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage, NotFound, WorkspacePage } from '@/pages';

export const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/workspace/:workspaceId" element={<WorkspacePage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
