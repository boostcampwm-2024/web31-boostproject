import * as Blockly from 'blockly/core';

import { useCssPropsStore, useResetCssStore, useWorkspaceStore } from '@/shared/store';

import { Spinner } from '@/shared/ui';
import { cssStyleToolboxConfig } from '@/shared/blockly';
import { useParams } from 'react-router-dom';
import { useSaveWorkspace } from '@/shared/hooks';
import toast from 'react-hot-toast';
import html2canvas from 'html2canvas';

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

  const handleClick = async () => {
    const canvas = Blockly.serialization.workspaces.save(workspace!) as any;

    const previewIframe = document.querySelector('iframe');

    if (!previewIframe) {
      toast.error('미리보기탭을 선택해주세요.');
      return;
    }

    const previewContent = previewIframe.contentWindow!.document.body;
    console.log(previewContent);
    const preview = await html2canvas(previewContent, {});

    const blob = await new Promise<Blob | null>((resolve) => preview.toBlob(resolve, 'image/png'));

    if (!blob) {
      toast.error('이미지 저장에 실패했습니다.');
      return;
    }

    const thumbnail = new File([blob], 'thumbnail.png', { type: 'image/png' });

    saveWorkspace({
      totalCssPropertyObj,
      canvas,
      classBlockList: cssStyleToolboxConfig.contents,
      cssResetStatus: isResetCssChecked,
      thumbnail,
    });
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
