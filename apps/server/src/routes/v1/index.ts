import exampleRoutes from './exampleRoute';
import express from 'express';
import { workspaceRouter } from './workspaceRoute';

const router = express.Router();

router.use('/', exampleRoutes);
router.use('/workspace', workspaceRouter);

export default router;
