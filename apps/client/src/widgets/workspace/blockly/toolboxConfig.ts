import { htmBlockContents } from '@/widgets';

export const toolboxConfig = {
  kind: 'categoryToolbox',
  contents: [
    {
      kind: 'category',
      name: '컨테이너',
      categorystyle: 'containerCategory',
      contents: htmBlockContents,
    },
    {
      kind: 'category',
      name: '텍스트',
      categorystyle: 'textCategory',
      contents: htmBlockContents,
    },
    {
      kind: 'category',
      name: '폼',
      categorystyle: 'formCategory',
      contents: [
        {
          kind: 'button',
          text: '추가하기',
          callbackKey: 'classMakerPrompt',
        },
        { kind: 'block', type: 'css_style' },
      ],
    },
    {
      kind: 'category',
      name: '표',
      categorystyle: 'tableCategory',
      contents: htmBlockContents,
    },
    {
      kind: 'category',
      name: '리스트',
      categorystyle: 'listCategory',
      contents: htmBlockContents,
    },
    {
      kind: 'category',
      name: '링크',
      categorystyle: 'linkCategory',
      contents: htmBlockContents,
    },
    {
      kind: 'category',
      name: '기타',
      categorystyle: 'etcCategory',
      contents: htmBlockContents,
    },
  ],
};
