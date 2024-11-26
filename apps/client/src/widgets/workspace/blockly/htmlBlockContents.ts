import { TBlockContents, TBlockInfo } from '@/shared/types';
import { addPreviousTypeName } from '@/shared/utils';

const containerBlockContents: TBlockInfo[] = [
  {
    kind: 'block',
    type: addPreviousTypeName('div'),
    description: '설명 작성',
  },
  {
    kind: 'block',
    type: addPreviousTypeName('span'),
    description: '설명 작성',
  },
  {
    kind: 'block',
    type: addPreviousTypeName('header'),
    description: '설명 작성',
  },
  {
    kind: 'block',
    type: addPreviousTypeName('section'),
    description: '설명 작성',
  },
  {
    kind: 'block',
    type: addPreviousTypeName('nav'),
    description: '설명 작성',
  },
  {
    kind: 'block',
    type: addPreviousTypeName('main'),
    description: '설명 작성',
  },
  {
    kind: 'block',
    type: addPreviousTypeName('article'),
    description: '설명 작성',
  },
  {
    kind: 'block',
    type: addPreviousTypeName('footer'),
    description: '설명 작성',
  },
];

const textBlockContents: TBlockInfo[] = [
  {
    kind: 'block',
    type: addPreviousTypeName('p'),
    description: '설명 작성',
  },
  {
    kind: 'block',
    type: addPreviousTypeName('strong'),
    description: '설명 작성',
  },
  {
    kind: 'block',
    type: addPreviousTypeName('h1'),
    description: '설명 작성',
  },
  {
    kind: 'block',
    type: addPreviousTypeName('h2'),
    description: '설명 작성',
  },
  {
    kind: 'block',
    type: addPreviousTypeName('h3'),
    description: '설명 작성',
  },
  {
    kind: 'block',
    type: addPreviousTypeName('h4'),
    description: '설명 작성',
  },
  {
    kind: 'block',
    type: addPreviousTypeName('h5'),
    description: '설명 작성',
  },
  {
    kind: 'block',
    type: addPreviousTypeName('h6'),
    description: '설명 작성',
  },
  {
    kind: 'block',
    type: addPreviousTypeName('small'),
    description: '설명 작성',
  },
  {
    kind: 'block',
    type: addPreviousTypeName('br'),
    description: '설명 작성',
  },
  {
    kind: 'block',
    type: addPreviousTypeName('em'),
    description: '설명 작성',
  },
  {
    kind: 'block',
    type: addPreviousTypeName('i'),
    description: '설명 작성',
  },
  {
    kind: 'block',
    type: addPreviousTypeName('blockquote'),
    description: '설명 작성',
  },
  {
    kind: 'block',
    type: addPreviousTypeName('hr'),
    description: '설명 작성',
  },
];

const formBlockContents: TBlockInfo[] = [
  {
    kind: 'block',
    type: addPreviousTypeName('input'),
    description: '설명 작성',
  },
  {
    kind: 'block',
    type: addPreviousTypeName('button'),
    description: '설명 작성',
  },
  {
    kind: 'block',
    type: addPreviousTypeName('form'),
    description: '설명 작성',
  },
  {
    kind: 'block',
    type: addPreviousTypeName('option'),
    description: '설명 작성',
  },
  {
    kind: 'block',
    type: addPreviousTypeName('textarea'),
    description: '설명 작성',
  },
  {
    kind: 'block',
    type: addPreviousTypeName('select'),
    description: '설명 작성',
  },
  {
    kind: 'block',
    type: addPreviousTypeName('fieldset'),
    description: '설명 작성',
  },
  {
    kind: 'block',
    type: addPreviousTypeName('legend'),
    description: '설명 작성',
  },
  {
    kind: 'block',
    type: addPreviousTypeName('label'),
    description: '설명 작성',
  },
];

const tableBlockContents: TBlockInfo[] = [
  {
    kind: 'block',
    type: addPreviousTypeName('td'),
    description: '설명 작성',
  },
  {
    kind: 'block',
    type: addPreviousTypeName('tr'),
    description: '설명 작성',
  },
  {
    kind: 'block',
    type: addPreviousTypeName('th'),
    description: '설명 작성',
  },
  {
    kind: 'block',
    type: addPreviousTypeName('caption'),
    description: '설명 작성',
  },
  {
    kind: 'block',
    type: addPreviousTypeName('table'),
    description: '설명 작성',
  },
];

const listBlockContents: TBlockInfo[] = [
  {
    kind: 'block',
    type: addPreviousTypeName('ul'),
    description: '설명 작성',
  },
  {
    kind: 'block',
    type: addPreviousTypeName('ol'),
    description: '설명 작성',
  },
  {
    kind: 'block',
    type: addPreviousTypeName('li'),
    description: '설명 작성',
  },
];

const linkBlockContents: TBlockInfo[] = [
  {
    kind: 'block',
    type: addPreviousTypeName('a'),
    description: '설명 작성',
  },
];

const etcBlockContents: TBlockInfo[] = [
  {
    kind: 'block',
    type: addPreviousTypeName('text'),
    description: '설명 작성',
  },
];

export const blockContents: TBlockContents = {
  container: containerBlockContents,
  text: textBlockContents,
  form: formBlockContents,
  table: tableBlockContents,
  list: listBlockContents,
  link: linkBlockContents,
  etc: etcBlockContents,
};
