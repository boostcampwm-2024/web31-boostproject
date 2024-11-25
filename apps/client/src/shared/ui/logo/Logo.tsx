import BlackLogoText from '@/shared/assets/boolock_logo_black.svg?react';
import { Link } from 'react-router-dom';
import WhiteLogoText from '@/shared/assets/boolock_logo_white.svg?react';

type LogoProps = {
  isBlack: boolean;
  onClick?: () => void;
};

export const Logo = ({ isBlack, onClick }: LogoProps) => {
  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    }
  };
  return (
    <Link to="/" onClick={handleClick}>
      <div className="flex items-center gap-3">
        <img src="/images/boolock_logo.png" width={32} height={32} />
        {isBlack ? <WhiteLogoText className="w-28" /> : <BlackLogoText className="w-28" />}
      </div>
    </Link>
  );
};
