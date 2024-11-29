import { Helmet } from 'react-helmet-async';
import { HomeHeader } from '@/widgets';

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
      <div className="">
        <HomeHeader isBlack={false} />

        <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 transform flex-col gap-6">
          <img src="./images/not_found.png" width={160} height={160} alt="not_found" />
          <p className="text-medium-md text-center text-gray-200">
            유효한 페이지가 아닙니다! <br />
            다른 페이지에서 만나요!
          </p>
        </div>
      </div>
    </>
  );
};
