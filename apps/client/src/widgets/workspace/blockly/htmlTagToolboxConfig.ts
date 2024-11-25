import { htmlBlockContents } from './htmlBlockContents';

export const htmlTagToolboxConfig = {
  kind: 'categoryToolbox',
  contents: [
    {
      kind: 'category',
      name: '컨테이너',
      categorystyle: 'containerCategory',
      contents: htmlBlockContents,
    },
    {
      kind: 'category',
      name: '텍스트',
      categorystyle: 'textCategory',
      contents: htmlBlockContents,
    },
    {
      kind: 'category',
      name: '폼',
      categorystyle: 'formCategory',
      contents: htmlBlockContents,
    },
    {
      kind: 'category',
      name: '표',
      categorystyle: 'tableCategory',
      contents: htmlBlockContents,
    },
    {
      kind: 'category',
      name: '리스트',
      categorystyle: 'listCategory',
      contents: htmlBlockContents,
    },
    {
      kind: 'category',
      name: '링크',
      categorystyle: 'linkCategory',
      contents: htmlBlockContents,
    },
    {
      kind: 'category',
      name: '기타',
      categorystyle: 'etcCategory',
      contents: htmlBlockContents,
    },
  ],
};
