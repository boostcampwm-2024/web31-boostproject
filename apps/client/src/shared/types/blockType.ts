export type TBlockInfo = {
  kind: string;
  type: string;
  description: string;
};

export type TBlockContents = Record<
  'container' | 'text' | 'form' | 'table' | 'list' | 'etc',
  TBlockInfo[]
>;
