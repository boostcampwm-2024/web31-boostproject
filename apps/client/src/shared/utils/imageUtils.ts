import { TParsedBase64Info } from '../types';

export const parseBase64Info = (dataUrl: string): TParsedBase64Info | null => {
  const dataUrlRegex = /^data:(?<mimeType>[a-z]+\/[a-z0-9.-]+);base64,/i;
  const match = dataUrl.match(dataUrlRegex);

  if (!match || !match.groups) {
    return null;
  }

  const { mimeType } = match.groups;
  const format = mimeType.split('/')[1];

  return {
    mimeType,
    format,
  };
};

export const parseFilename = (path: string) => {
  return (
    path
      .split(/(\\|\/)/)
      .pop()
      ?.split('.')[0] || ''
  );
};
