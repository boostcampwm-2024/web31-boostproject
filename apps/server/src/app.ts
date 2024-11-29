import './config/dbConnection';

import cors from 'cors';
import express from 'express';
import routes from './routes/v1/index';
import swaggerDocument from './docs/swagger-output.json';
import { swaggerUi } from './docs/swagger';
import 'dotenv/config';
import { errorMiddleware } from './middlewares/errorMiddleware';

const app = express();

app.use(
  cors({
    origin: process.env.SERVER_CORS_ACCEPT,
  })
);
app.use(express.json());

app.use('/api', routes);
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(errorMiddleware);

export default app;
