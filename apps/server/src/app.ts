import './config/dbConnection';

import cors from 'cors';
import express from 'express';
import routes from './routes/v1/index';
import swaggerDocument from './docs/swagger-output.json';
import { swaggerUi } from './docs/swagger';

const app = express();

// 미들웨어 설정
app.use(
  cors({
    origin: 'http://localhost:5173',
  })
);
app.use(express.json());

app.use('/', routes);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

export default app;
