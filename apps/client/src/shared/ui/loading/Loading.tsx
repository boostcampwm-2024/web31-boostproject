import { BarLoader } from 'react-spinners';

type LoadingProps = {
  height?: number;
  width?: number;
  color?: string;
};

export const Loading = ({ height = 10, width = 120, color = '#02D085' }: LoadingProps) => {
  return (
    <div className="fixed z-[99999] flex h-full w-full items-center justify-center bg-black opacity-70">
      <BarLoader height={height} width={width} color={color} />
    </div>
  );
};
