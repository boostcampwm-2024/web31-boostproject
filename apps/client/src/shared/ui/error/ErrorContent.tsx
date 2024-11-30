import { HomeHeader } from '@/widgets';

type ErrorContentProps = {
  description: string;
};

export const ErrorContent = ({ description }: ErrorContentProps) => {
  return (
    <>
      <HomeHeader isBlack={false} />
      <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 transform flex-col items-center gap-6">
        <img src="/images/not_found.png" width={160} height={160} alt="not_found" />
        <p className="text-medium-md whitespace-pre-line text-center text-gray-200">
          {description}
        </p>
      </div>
    </>
  );
};
