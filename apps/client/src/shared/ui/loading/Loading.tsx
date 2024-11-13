import { BarLoader } from 'react-spinners';

export const Loading = () => {
  return (
    <div className="fixed z-50 flex h-full w-full items-center justify-center bg-black opacity-70">
      <BarLoader height={10} width={120} color="#02D085" />
    </div>
  );
};
