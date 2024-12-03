type ImageTagModalSrcProps = {
  tagSrc: string;
  // eslint-disable-next-line no-unused-vars
  onSetTagSrc: (src: string) => void;
};

/**
 * @component
 * @description
 * 실제 img태그에 할당할 src 주소를 직접 수정할 수 있고, 결정할 수 있는 컴포넌트입니다.
 */
export const ImageTagModalSrc = ({ tagSrc, onSetTagSrc }: ImageTagModalSrcProps) => {
  return (
    <input
      className="w-full rounded-lg border-[1px] px-5 py-3 align-middle text-gray-200 focus:outline-none"
      value={tagSrc}
      onChange={(e) => onSetTagSrc(e.target.value)}
    />
  );
};
