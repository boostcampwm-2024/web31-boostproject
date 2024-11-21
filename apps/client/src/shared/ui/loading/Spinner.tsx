import { background, foreground, h, w } from '@/shared/utils';

import SpinIcon from '@/shared/assets/spinner.svg?react';

type SpinnerProps = {
  width: keyof typeof w;
  height: keyof typeof h;
  foregroundColor: keyof typeof foreground;
  backgroundColor: keyof typeof background;
};

/**
 * @description
 * 스피너 컴포넌트
 * width, height, foregroundColor, backgroundColor에 들어가는 값은 spinnerStyle.ts에 정의된 객체의 키값만 들어갈 수 있습니다.
 */
export const Spinner = ({ width, height, foregroundColor, backgroundColor }: SpinnerProps) => {
  return (
    <SpinIcon
      className={`inline ${w[width]} ${h[height]} animate-spin ${foreground[foregroundColor]} ${background[backgroundColor]}`}
    />
  );
};
