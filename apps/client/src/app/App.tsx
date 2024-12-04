import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ToasterWithMax } from '@/shared/ui';
import { ErrorPage } from '@/pages/ErrorPage/ErrorPage';
import { lazy, Suspense } from 'react';

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
      <Suspense fallback={<div>홈 페이지로 로딩중...</div>}>
        <HomePage />
      </Suspense>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: '/workspace/:workspaceId',
    element: (
      <Suspense fallback={<div>워크스페이스 페이지로 로딩중...</div>}>
        <WorkspacePage />
      </Suspense>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: '*',
    element: (
      <Suspense fallback={<div>페이지를 찾을 수 없습니다...</div>}>
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
