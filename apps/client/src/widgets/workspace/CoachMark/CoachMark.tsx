import { useCoachMarkStore } from '@/shared/store/useCoachMarkStore';
import { CircleButton } from '@/shared/ui';

const steps = [
  {
    title: 'HTML 태그 블록 조립하기',
    content: '오른쪽 HTML 태그 탭에서 블록을 가져와 작업 공간에서 조립할 수 있어요',
  },
  {
    title: 'CSS 클래스 블록 생성 후 조립하기',
    content:
      '원하는 CSS 클래스 블록을 생성할 수 있어요. \n 생성된 블록은 HTML 블록에 조립할 수 있어요',
  },
  {
    title: '스타일 속성 추가하기',
    content: '생성한 CSS 클래스 블록을 선택해 원하는 스타일 속성을 추가할 수 있어요',
  },
  {
    title: '미리보기와 코드 확인하기',
    content:
      '미리보기 탭에서는 블록 코딩으로 만든 화면을, HTML/CSS 탭에서는 코드를 확인할 수 있어요.',
  },
  {
    title: '저장하고 불러오기',
    content: '저장하지 않고 나가면 블록이 사라져요. 변경 사항은 되돌리거나 다시 적용할 수 있어요.',
  },
];

export const CoachMark = () => {
  const { currentStep, setCurrentStep, closeCoachMark } = useCoachMarkStore();
  const stepsLength = steps.length;

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  //   const prevStep = () => {
  //     if (currentStep > 0) {
  //       setCurrentStep(currentStep - 1);
  //     }
  //   };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-70">
      <div className="z-[99999] min-h-40 max-w-80 rounded-2xl bg-white p-6 shadow-lg">
        <h2 className="text-bold-sm mb-4 text-gray-200">{steps[currentStep].title}</h2>
        <p className="text-medium-md mb-6">{steps[currentStep].content}</p>
        <div className="flex justify-between">
          <div>
            {currentStep + 1}/{stepsLength}
          </div>
          {/* <button onClick={prevStep} disabled={currentStep === 0}>
            이전
          </button> */}
          <div className="flex gap-2">
            <CircleButton
              onClick={closeCoachMark}
              disable={currentStep === stepsLength}
              className="text-bold-sm h-8 w-16"
            >
              그만 보기
            </CircleButton>
            <CircleButton
              onClick={nextStep}
              disable={currentStep === stepsLength}
              className="text-bold-sm h-8 w-16"
            >
              {currentStep < 4 ? '다음' : '시작하기'}
            </CircleButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoachMark;
