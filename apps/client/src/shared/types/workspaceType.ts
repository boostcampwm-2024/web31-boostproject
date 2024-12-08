export type TCreatedWorkspaceDto = {
  newWorkspaceId: string;
};

export type TPagedWorkspaceListResultDto = {
  pagedWorkspaceListResult: TPagedWorkspaceListResult;
};

export type TGetWorkspaceResponse = {
  workspaceDto: TWorkspaceDto;
};

export type TWorkspaceDto = {
  workspaceId: string;
  name: string;
  isCssReset: boolean;
  totalCssPropertyObj: TTotalCssPropertyObj;
  canvas: string;
  classBlockList: string;
  thumbnail: string;
  updatedAt: string;
  imageMap: string;
  imageList: string;
};

export type TPagedWorkspaceListResult = {
  workspaceList: Array<TWorkspace>;
  nextCursor: TCursor | null;
};

export type TWorkspace = {
  name: string;
  updated_at: string;
  user_id: string;
  workspace_id: string;
  thumbnail: string | undefined;
  isCssReset: boolean;
  totalTotalCssPropertyObj: TTotalCssPropertyObj;
};

export type TCursor = {
  updatedAt: string;
  workspaceId: string;
};

export type TTotalCssPropertyObj = {
  [key: string]: {
    checkedCssPropertyObj: TCheckedCssPropertyObj;
    cssOptionObj: TCssOptionObj;
  };
};

export type TCheckedCssPropertyObj = {
  [key: string]: boolean;
};

export type TCssOptionObj = {
  [key: string]: string;
};

export type TCanvas = {
  blocks: {
    languageVersion: number;
    blocks: TState[];
  };
};

export type TState = {
  type: string;
  id?: string;
  x?: number;
  y?: number;
  inputs?: {
    children: {
      block?: TState;
      shadow?: TState;
    };
  };
  next?: {
    block?: TState;
    shadow?: TState;
  };
  movable?: boolean;
  inline?: boolean;
  enabled?: boolean;
  extraState?: any;
  editable?: boolean;
  disabledReasons?: string[];
  deletable?: boolean;
  data?: string;
  collapsed?: boolean;
  icons?: Map<string, any>;
  fields?: Map<string, any>;
};
