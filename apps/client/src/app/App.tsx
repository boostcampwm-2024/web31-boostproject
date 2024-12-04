import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ToasterWithMax } from '@/shared/ui';
import { ErrorPage } from '@/pages/ErrorPage/ErrorPage';
import { lazy, Suspense } from 'react';
import { Loading } from '@/shared/ui';

// lazy 로딩
const HomePage = lazy(() =>
  import('@/pages/HomePage/HomePage').then((module) => ({ default: module.HomePage }))
);

const WorkspacePage = lazy(() =>
  import('@/pages/Workspacepage/WorkspacePage').then((module) => ({
    default: module.WorkspacePage,
  }))
);

const NotFound = lazy(() =>
  import('@/pages/NotFound/NotFound').then((module) => ({ default: module.NotFound }))
);

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<Loading />}>
        <HomePage />
      </Suspense>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: '/workspace/:workspaceId',
    element: (
      <Suspense fallback={<Loading />}>
        <WorkspacePage />
      </Suspense>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: '*',
    element: (
      <Suspense fallback={<Loading />}>
        <NotFound />
      </Suspense>
    ),
  },
]);

export const App = () => (
  <>
    <ToasterWithMax />
    <RouterProvider router={router} />
  </>
);

export default App;
