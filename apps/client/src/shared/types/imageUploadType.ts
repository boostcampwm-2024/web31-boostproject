export type TImageItem = {
  src: string;
  isUpload: boolean;
};

export type TImageMap = {
  [filename: string]: TImageItem;
};
