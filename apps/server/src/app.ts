import express from 'express';
import routes from './routes/v1/index';
import { swaggerUi } from './docs/swagger';
import swaggerDocument from './docs/swagger-output.json';
import './config/dbConnection';

const app = express();

// 미들웨어 설정
app.use(express.json());

app.use('/', routes);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

export default app;
