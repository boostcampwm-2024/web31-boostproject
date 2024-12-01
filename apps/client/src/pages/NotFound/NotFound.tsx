import { Helmet } from 'react-helmet-async';
import { ErrorContent } from '@/shared/ui/error/ErrorContent';

// TODO: 메세지 상수화 shared/utils/constants.ts 안에 관리
/**
 *
 * @description
 * 404 페이지 컴포넌트
 */
export const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>BooLock - 페이지를 찾을 수 없음</title>
        <meta
          name="description"
          content="요청한 페이지를 찾을 수 없습니다. 다른 페이지를 확인해 주세요."
        />
      </Helmet>
      <ErrorContent description={`유효한 페이지가 아닙니다! \n다른 페이지에서 만나요!`} />
    </>
  );
};
