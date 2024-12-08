import { Helmet } from 'react-helmet-async';

import { ErrorContent } from '@/shared/ui/error/ErrorContent';

// TODO: 메세지 상수화 shared/utils/constants.ts 안에 관리
/**
 *
 * @description
 * 워크스페이스 에러 페이지 컴포넌트
 */
export const ErrorPage = () => {
  return (
    <>
      <Helmet>
        <title>BooLock - 에러</title>
        <meta name="description" content="예상치 못한 오류가 발생했습니다. 다시 시도해 주세요." />
      </Helmet>
      <ErrorContent description={`예상치 못한 오류가 발생했습니다.\n 다시 시도해 주세요.`} />
    </>
  );
};
