import express from 'express';
import { workspaceRouter } from './workspaceRoute';

const router = express.Router();

router.use('/workspace', workspaceRouter);

export default router;
