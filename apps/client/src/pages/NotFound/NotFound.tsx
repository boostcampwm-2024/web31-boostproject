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
      <ErrorContent description={`유효한 페이지가 아닙니다! \n다른 페이지에서 만나요!`} />
    </>
  );
};
