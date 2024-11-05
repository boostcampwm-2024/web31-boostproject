import { GuideVideo } from '@/entities/index';

export const GuidesBox = () => {
  return (
    <div className="bg-gray-black py-6">
      <h3 className="text-bold-xl text-white">학습 가이드</h3>
      <section className="my-5 flex gap-6">
        <GuideVideo videoId="s2_xaEvcVI0" />
        <GuideVideo videoId="nXP7OKDCk4Y" />
        <GuideVideo videoId="s2_xaEvcVI0" />
      </section>
    </div>
  );
};
