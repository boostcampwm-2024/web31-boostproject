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
  totalCssPropertyObj: TtotalCssPropertyObj;
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
  totalTotalCssPropertyObj: TtotalCssPropertyObj;
};

export type TCursor = {
  updatedAt: string;
  workspaceId: string;
};

export type TtotalCssPropertyObj = {
  [key: string]: {
    checkedCssPropertyObj: TcheckedCssPropertyObj;
    cssOptionObj: TcssOptionObj;
  };
};

export type TcheckedCssPropertyObj = {
  [key: string]: boolean;
};

export type TcssOptionObj = {
  [key: string]: string;
};

export type Tcanvas = {
  blocks: {
    languageVersion: number;
    blocks: Tstate[];
  };
};

export type Tstate = {
  type: string;
  id?: string;
  x?: number;
  y?: number;
  inputs?: {
    children: {
      block?: Tstate;
      shadow?: Tstate;
    };
  };
  next?: {
    block?: Tstate;
    shadow?: Tstate;
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
