import { Link } from 'react-router-dom';

import BlackLogoText from '@/shared/assets/boolock_logo_black.svg?react';
import LogoIcon from '@/shared/assets/boolock_icon.svg?react';
import WhiteLogoText from '@/shared/assets/boolock_logo_white.svg?react';

type LogoProps = {
  isBlack: boolean;
};

export const Logo = ({ isBlack }: LogoProps) => {
  return (
    <Link to="/">
      <div className="flex items-center gap-3">
        <LogoIcon className="h-8 w-8" />
        {isBlack ? <WhiteLogoText className="w-28" /> : <BlackLogoText className="w-28" />}
      </div>
    </Link>
  );
};
