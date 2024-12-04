import { useIframeStore, useResetCssStore } from '@/shared/store';

import { IFRAME_ERROR_MESSAGE } from '@/shared/utils';
import html2canvas from 'html2canvas';

export const capturePreview = async () => {
  const isResetCssChecked = useResetCssStore.getState().isResetCssChecked;

  const previewIframe = useIframeStore.getState().iframeRef?.current;

  if (!previewIframe) {
    throw new Error(IFRAME_ERROR_MESSAGE.SELECT_PREVIEW_TAB);
  }
  const previewDocument = previewIframe?.contentDocument || previewIframe?.contentWindow?.document;
  if (!previewDocument) {
    throw new Error(IFRAME_ERROR_MESSAGE.FAIL_TO_SAVE);
  }

  /**
   * iframe의 body 태그를 div 태그로 변경하여 html2canvas로 캡쳐할 수 있도록 설정
   */
  const previewHtml = previewDocument.documentElement.outerHTML
    .replace('<body', '<div style="width: 100%; height: 100%;"')
    .replace('</body>', '</div>');
  const div = document.createElement('div'); // iframe의 내용을 담을 div 생성
  if (isResetCssChecked) {
    div.classList.add('reset-css');

    /**
     * 만약 reset css를 적용한 경우, reset-css 클래스를 추가하여 reset css 적용
     * 하지만 reset-css 클래스 사용 시 css 특이성 문제로 인해 기존 css 클래스들이적용되지 않는 경우가 발생함
     * 그래서 해당 문제를 해결하기 위해 기존 css 클래스들에 대한 특이성을 높이기 위해
     * .reset-css 클래스를 부모 클래스로 설정하여 특이성 문제를 해결
     */
    div.innerHTML = previewHtml
      .replace('<style>', '<style>.reset-css {')
      .replace('</style>', '} </style>') as Element['outerHTML'];
  } else {
    div.innerHTML = previewHtml || '';
  }

  /*
   * div를 화면 밖에서 렌더링하도록 설정 (화면에 보이지 않도록)
   * z-index를 -1로 설정하여 화면에 보이지 않도록 설정
   */
  div.style.position = 'absolute';
  div.style.top = '-9999px';
  div.style.zIndex = '-1';
  div.style.width = '800px';
  div.style.height = '800px';
  document.body.appendChild(div);
  const canvas = await html2canvas(div, { useCORS: true, logging: true, scale: 2, width: 800 });
  document.body.removeChild(div);
  const blob = await new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, 'image/webp'));
  const thumbnail = new File([blob as Blob], 'thumbnail.webp', { type: 'image/webp' });
  return thumbnail;
};
