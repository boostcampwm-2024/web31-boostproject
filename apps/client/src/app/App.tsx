import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ToasterWithMax } from '@/shared/ui';
import { ErrorPage } from '@/pages/ErrorPage/ErrorPage';
import { lazy, Suspense } from 'react';
import { Loading } from '@/shared/ui';
import { Helmet } from 'react-helmet-async';

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
      <>
        <Helmet>
          <title>BooLock - 홈</title>
          <meta
            name="description"
            content="코딩 입문자들이 HTML과 CSS를 블록으로 배우는 BooLock의 메인 페이지입니다."
          />
        </Helmet>
        <Suspense fallback={<Loading />}>
          <HomePage />
        </Suspense>
      </>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: '/workspace/:workspaceId',
    element: (
      <>
        <Helmet>
          <title>BooLock - 작업 공간</title>
          <meta name="description" content={`워크스페이스에서 HTML과 CSS를 연습해보세요.`} />
        </Helmet>
        <Suspense fallback={<Loading />}>
          <WorkspacePage />
        </Suspense>
      </>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: '*',
    element: (
      <>
        <Helmet>
          <title>BooLock - 페이지를 찾을 수 없음</title>
          <meta
            name="description"
            content="요청한 페이지를 찾을 수 없습니다. 다른 페이지를 확인해 주세요."
          />
        </Helmet>
        <Suspense fallback={<Loading />}>
          <NotFound />
        </Suspense>
      </>
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
