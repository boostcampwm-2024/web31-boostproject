export type TcreatedWorkspaceDto = {
  newWorkspaceId: string;
};

export type TpagedWorkspaceListResultDto = {
  pagedWorkspaceListResult: TpagedWorkspaceListResult;
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
