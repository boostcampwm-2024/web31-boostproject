import { useIframeStore, useWorkspaceStore } from '@/shared/store';

import { IFRAME_ERROR_MESSAGE } from '@/shared/utils';

export const exportPreviewHtml = () => {
  const previewIframe = useIframeStore.getState().iframeRef?.current;
  const workspaceName = useWorkspaceStore.getState().name;

  if (!previewIframe) {
    throw new Error(IFRAME_ERROR_MESSAGE.SELECT_PREVIEW_TAB);
  }

  const previewDocument = previewIframe?.contentDocument || previewIframe?.contentWindow?.document;
  if (!previewDocument) {
    throw new Error(IFRAME_ERROR_MESSAGE.FAIL_TO_SAVE);
  }

  const previewHtml = previewDocument.documentElement.outerHTML;

  const blob = new Blob([previewHtml], { type: 'text/html' });

  const url = URL.createObjectURL(blob);

  const downloadLink = document.createElement('a');
  downloadLink.href = url;
  downloadLink.download = `${workspaceName}.html`;
  downloadLink.click();
  URL.revokeObjectURL(url);
  return false;
};
