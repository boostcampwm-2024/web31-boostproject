export type TcreatedWorkspaceDto = {
  newWorkspaceId: string;
};

export type TpagedWorkspaceListResultDto = {
  pagedWorkspaceListResult: TpagedWorkspaceListResult;
};

export type TgetWorkspaceResponse = {
  workspaceDto: TworkspaceDto;
};

export type TworkspaceDto = {
  workspace_id: string;
  name: string;
};

export type TpagedWorkspaceListResult = {
  workspaceList: Array<Tworkspace>;
  nextCursor: Tcursor | null;
};

export type Tworkspace = {
  name: string;
  updated_at: string;
  user_id: string;
  workspace_id: string;
  thumbnail: string | undefined;
};

export type Tcursor = {
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
