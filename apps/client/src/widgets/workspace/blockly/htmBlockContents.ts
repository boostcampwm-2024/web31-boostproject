import { addPreviousTypeName } from '@/shared/utils';

export const htmBlockContents = [
  {
    kind: 'block',
    type: addPreviousTypeName('html'),
  },
  {
    kind: 'block',
    type: addPreviousTypeName('head'),
  },
  {
    kind: 'block',
    type: addPreviousTypeName('body'),
  },
  {
    kind: 'block',
    type: addPreviousTypeName('p'),
  },
  {
    kind: 'block',
    type: addPreviousTypeName('button'),
  },
  {
    kind: 'block',
    type: addPreviousTypeName('text'),
  },
];
