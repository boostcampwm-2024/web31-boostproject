import { blockContents } from './htmlBlockContents';

export const htmlTagToolboxConfig = {
  kind: 'categoryToolbox',
  contents: [
    {
      kind: 'category',
      name: '컨테이너',
      categorystyle: 'containerCategory',
      contents: blockContents.container,
    },
    {
      kind: 'category',
      name: '텍스트',
      categorystyle: 'textCategory',
      contents: blockContents.text,
    },
    {
      kind: 'category',
      name: '폼',
      categorystyle: 'formCategory',
      contents: blockContents.form,
    },
    {
      kind: 'category',
      name: '표',
      categorystyle: 'tableCategory',
      contents: blockContents.table,
    },
    {
      kind: 'category',
      name: '리스트',
      categorystyle: 'listCategory',
      contents: blockContents.list,
    },
    {
      kind: 'category',
      name: '내용',
      categorystyle: 'etcCategory',
      contents: blockContents.etc,
    },
  ],
};
