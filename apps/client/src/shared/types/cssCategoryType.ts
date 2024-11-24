export type TcssCategoryList = {
  category: TcssCategory;
  items: TcssCategoryItem[];
}[];

export type TcssCategory =
  | '레이아웃'
  | '박스모델'
  | '타이포그래피'
  | '배경'
  | '테두리'
  | '간격'
  | 'flex 속성'
  | 'grid 속성';

export type TcssCategoryItem = {
  label: string;
  type: 'select' | 'input' | 'color';
  option?: string[];
  description: string;
};
