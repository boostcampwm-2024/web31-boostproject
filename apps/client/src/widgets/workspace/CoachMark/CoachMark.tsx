import { useEffect } from 'react';
import { useCoachMarkStore } from '@/shared/store/useCoachMarkStore';
import { CircleButton } from '@/shared/ui';
import * as Blockly from 'blockly/core';
import TabbedToolbox from '@/core/tabbedToolbox';
import { coachMarkContent } from '@/shared/utils';

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

  useEffect(() => {
    const toolboxDiv = document.querySelector('.blocklyToolboxDiv');
    const blockCanvas = document.querySelector('.blocklyBlockCanvas');

    const toolbox = Blockly.getMainWorkspace()?.getToolbox() as TabbedToolbox;

    if (currentStep === 1) {
      toolbox.clickTab('css');
    } else if (currentStep === 2) {
      toolbox.clickTab('html');
    }

    if (toolboxDiv) {
      if (currentStep <= 1) {
        toolboxDiv.classList.add('coachMarkHighlight');
        blockCanvas.classList.add('coachMarkHighlight');
      } else {
        toolboxDiv.classList.remove('coachMarkHighlight');
        blockCanvas.classList.remove('coachMarkHighlight');
      }
    }
  }, [currentStep]);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-70">
      <div className="z-[99999] min-h-40 min-w-96 rounded-2xl bg-white p-6 pb-4 shadow-lg">
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
              onClick={closeCoachMark}
              disable={currentStep === stepsLength}
              className="text-bold-sm h-8 w-16"
              variant="outlined"
            >
              그만 보기
            </CircleButton>

            {/* TODO: 이전 버튼 - 기능 구현 후 삭제 */}
            <CircleButton
              className="text-bold-sm h-8 w-16"
              onClick={prevStep}
              disable={currentStep === 0}
            >
              이전
            </CircleButton>

            <CircleButton
              onClick={currentStep < 4 ? nextStep : closeCoachMark}
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
