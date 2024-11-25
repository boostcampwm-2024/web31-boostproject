export type TbuttonContent = {
  name: string;
  func: () => void;
  type: 'neutral' | 'danger';
  isDisabled?: boolean;
};
