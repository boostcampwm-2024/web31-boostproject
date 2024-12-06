import { useCoachMarkStore } from '@/shared/store/useCoachMarkStore';
import { CircleButton } from '@/shared/ui';
import { coachMarkContent } from '@/shared/utils';
import { useEffect } from 'react';
import * as Blockly from 'blockly/core';
import TabbedToolbox from '@/core/tabbedToolbox';

export const CoachMark = () => {
  const { currentStep, setCurrentStep, closeCoachMark } = useCoachMarkStore();
  const stepsLength = coachMarkContent.length;

  const nextStep = () => {
    if (currentStep < stepsLength - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleDismiss = () => {
    localStorage.setItem('isCoachMarkDismissed', 'true');
    closeCoachMark();
  };

  useEffect(() => {
    const workspace = Blockly.getMainWorkspace() as Blockly.WorkspaceSvg;
    if (!workspace) {
      return;
    }

    const toolbox = workspace.getToolbox() as TabbedToolbox;
    if (!toolbox) return;

    switch (currentStep) {
      case 0:
        toolbox.clickTab('html');
        break;
      case 1:
        toolbox.clickTab('css');
        break;
      case 2:
        toolbox.clickTab('html');
    }
  }, [currentStep]);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-70">
      <div className="z-[99999] min-h-40 min-w-96 rounded-2xl bg-white p-6 pb-4 shadow-2xl">
        <h2 className="text-bold-sm mb-4 text-gray-200">{coachMarkContent[currentStep].title}</h2>
        <p className="text-medium-md mb-6 whitespace-pre-line">
          {coachMarkContent[currentStep].content}
        </p>
        <div className="flex items-center justify-between">
          <div className="text-bold-sm text-green-500">
            {currentStep + 1}/{stepsLength}
          </div>
          <div className="flex gap-2">
            <CircleButton
              onClick={handleDismiss}
              disable={currentStep === stepsLength}
              className="text-bold-sm h-8 w-16"
              variant="outlined"
              aria-label="가이드 그만 보기 버튼"
            >
              그만 보기
            </CircleButton>

            <CircleButton
              className="text-bold-sm h-8 w-16"
              onClick={prevStep}
              disable={currentStep === 0}
              aria-label="가이드 이전 보기 버튼"
            >
              이전
            </CircleButton>

            <CircleButton
              onClick={currentStep < 4 ? nextStep : closeCoachMark}
              disable={currentStep === stepsLength}
              className="text-bold-sm h-8 w-16"
              aria-label="가이드 다음 보기 버튼"
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
