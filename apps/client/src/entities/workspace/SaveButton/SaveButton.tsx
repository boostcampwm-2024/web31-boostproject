import * as Blockly from 'blockly/core';

import { useCssPropsStore, useResetCssStore, useWorkspaceStore } from '@/shared/store';

import { Spinner } from '@/shared/ui';
import { cssStyleToolboxConfig } from '@/shared/blockly';
import html2canvas from 'html2canvas';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import { useSaveWorkspace } from '@/shared/hooks';

/**
 *
 * @description
 * Workspace 상태를 저장하는 버튼입니다.
 * 저장 항목 : css 속성, 캔버스 블록 상태, css class 블록, css 리셋 여부
 */
export const SaveButton = () => {
  const workspaceId = useParams().workspaceId as string;
  const { mutate: saveWorkspace, isPending } = useSaveWorkspace(workspaceId);
  const { totalCssPropertyObj } = useCssPropsStore();
  const { workspace } = useWorkspaceStore();
  const { isResetCssChecked } = useResetCssStore();

  const ERROR_MESSAGE = {
    SELECT_PREVIEW_TAB: '미리보기 탭을 선택해주세요.',
    FAIL_TO_SAVE: '저장에 실패했습니다.',
  };

  const capturePreview = async () => {
    const previewIframe = document.querySelector('iframe');
    if (!previewIframe) {
      throw new Error(ERROR_MESSAGE.SELECT_PREVIEW_TAB);
    }
    const previewContent = previewIframe.contentWindow!.document.body;
    const preview = await html2canvas(previewContent, {});
    const blob = await new Promise<Blob | null>((resolve) => preview.toBlob(resolve, 'image/png'));
    if (!blob) {
      throw new Error(ERROR_MESSAGE.FAIL_TO_SAVE);
    }
    const thumbnail = new File([blob], 'thumbnail.png', { type: 'image/png' });
    if (!thumbnail) {
      throw new Error(ERROR_MESSAGE.FAIL_TO_SAVE);
    }
    return thumbnail;
  };

  const handleClick = async () => {
    try {
      const canvas = Blockly.serialization.workspaces.save(workspace!) as any;
      const thumbnail = await capturePreview();
      saveWorkspace({
        totalCssPropertyObj,
        canvas,
        classBlockList: cssStyleToolboxConfig.contents,
        cssResetStatus: isResetCssChecked,
        thumbnail,
      });
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  };

  return (
    <button
      onClick={handleClick}
      className="text-bold-rg w-16 rounded-[30px] bg-green-500 py-2 text-green-100 hover:border hover:border-green-500 hover:bg-green-100 hover:text-green-500"
      disabled={isPending}
    >
      {isPending ? (
        <Spinner width={4} height={4} backgroundColor="gray200" foregroundColor="grayWhite" />
      ) : (
        <p>저장</p>
      )}
    </button>
  );
};
