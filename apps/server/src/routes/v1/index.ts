import express from 'express';
import exampleRoutes from './exampleRoute';

const router = express.Router();

router.use('/', exampleRoutes);

export default router;
