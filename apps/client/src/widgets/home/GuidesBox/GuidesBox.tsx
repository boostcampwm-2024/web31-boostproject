import { GuideVideo } from '@/entities';

/**
 *
 * @description
 * 학습 가이드 영상들을 보여주는 박스 컴포넌트
 */
export const GuidesBox = () => {
  return (
    <div className="bg-gray-black flex w-full justify-center py-6">
      <div className="flex w-[1128px] flex-col">
        <h3 className="text-bold-xl text-white">학습 가이드</h3>
        <section className="my-5 flex gap-6">
          <GuideVideo videoId="s2_xaEvcVI0" />
          <GuideVideo videoId="nXP7OKDCk4Y" />
          <GuideVideo videoId="s2_xaEvcVI0" />
        </section>
      </div>
    </div>
  );
};
