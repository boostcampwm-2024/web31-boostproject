import { HomePage, NotFound, WorkspacePage } from '@/pages';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { ToasterWithMax } from '@/shared/ui';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/workspace/:workspaceId',
    element: <WorkspacePage />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export const App = () => (
  <>
    <ToasterWithMax />
    <RouterProvider router={router} />
  </>
);

export default App;

// 하이
