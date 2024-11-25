import { addPreviousTypeName } from '@/shared/utils';

export const toolboxConfig2 = {
  kind: 'categoryToolbox',
  contents: [
    {
      kind: 'button',
      text: '추가하기',
      callbackKey: 'classMakerPrompt',
    },
    { kind: 'block', type: addPreviousTypeName('css_style') },
  ],
};
