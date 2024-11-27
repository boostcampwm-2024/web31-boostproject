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
  workspace_id: string;
  name: string;
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
};

export type TCursor = {
  updatedAt: string;
  workspaceId: string;
};
