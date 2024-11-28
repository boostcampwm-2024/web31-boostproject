export type TButtonContent = {
  name: string;
  func: () => void;
  type: 'neutral' | 'danger';
  isDisabled?: boolean;
};
