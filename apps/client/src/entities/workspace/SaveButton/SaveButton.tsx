import * as Blockly from 'blockly/core';

import { useCssPropsStore, useResetCssStore, useWorkspaceStore } from '@/shared/store';

import { Spinner } from '@/shared/ui';
import { capturePreview } from '@/shared/utils';
import { cssStyleToolboxConfig } from '@/shared/blockly';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import { useSaveWorkspace } from '@/shared/hooks';
import { useState } from 'react';

/**
 *
 * @description
 * Workspace 상태를 저장하는 버튼입니다.
 * 저장 항목 : css 속성, 캔버스 블록 상태, css class 블록, css 리셋 여부, 미리보기 썸네일
 */
export const SaveButton = () => {
  const workspaceId = useParams().workspaceId as string;
  const { mutate: saveWorkspace, isPending } = useSaveWorkspace(workspaceId);
  const { totalCssPropertyObj } = useCssPropsStore();
  const { workspace } = useWorkspaceStore();
  const { isResetCssChecked } = useResetCssStore();
  const [isCapture, setIsCapture] = useState<boolean>(false);

  const handleClick = async () => {
    try {
      const canvas = Blockly.serialization.workspaces.save(workspace!) as any;
      setIsCapture(true);
      const thumbnail = await capturePreview();
      saveWorkspace({
        totalCssPropertyObj,
        canvas,
        classBlockList: cssStyleToolboxConfig.contents,
        cssResetStatus: isResetCssChecked,
        thumbnail,
      });
      setIsCapture(false);
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    } finally {
      setIsCapture(false);
    }
  };

  return (
    <>
      <button
        onClick={handleClick}
        className="text-bold-rg w-16 rounded-[30px] bg-green-500 py-2 text-green-100 hover:border hover:border-green-500 hover:bg-green-100 hover:text-green-500"
        disabled={isPending}
      >
        {isPending || isCapture ? (
          <Spinner width={4} height={4} backgroundColor="gray200" foregroundColor="grayWhite" />
        ) : (
          <p>저장</p>
        )}
      </button>
    </>
  );
};
