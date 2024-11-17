import SpinIcon from '@/shared/assets/spinner.svg?react';

type SpinnerProps = {
  width: number;
  height: number;
  foregroundColor: string;
  backgroundColor: string;
};

/**
 * @description
 * 스피너 컴포넌트
 * width, height에 들어가는 값은 tailwind css에 정의된 값만 들어갈 수 있습니다.
 * @param {string} width
 * @param {string} height
 * @param {string} foregroundColor
 * @param {string} backgroundColor
 *
 * @returns
 */
export const Spinner = ({ width, height, foregroundColor, backgroundColor }: SpinnerProps) => {
  const w = `w-${width}`;
  const h = `h-${height}`;
  const foreground = `fill-${foregroundColor}`;
  const background = `text-${backgroundColor}`;

  return <SpinIcon className={`inline ${h} ${w} animate-spin ${foreground} ${background}`} />;
};
