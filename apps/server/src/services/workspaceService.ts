import { Workspace } from '@/models/workspaceModel';

export const WorkspaceService = () => {
  const createWorkspace = async () => {
    const newWorkspaceId = crypto.randomUUID();
    const workspace = new Workspace({ workspace_id: newWorkspaceId });
    try {
      await workspace.save();
      return newWorkspaceId;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Failed to create workspace : ${error.message}`);
      }
      throw new Error(`Unknown Error ocurred while creating workspace`);
    }
  };

  return {
    createWorkspace,
  };
};
