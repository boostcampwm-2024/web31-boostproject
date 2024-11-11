import { WorkspaceController } from '@/controllers/workspaceController';
import express from 'express';

export const workspaceRouter = express.Router();

const workspaceController = WorkspaceController();

workspaceRouter.post('/', workspaceController.createNewWorkspace);
