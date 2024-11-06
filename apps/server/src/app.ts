import express from 'express';
import routes from './routes/v1/index';
import { swaggerUi } from './docs/swagger';
import swaggerDocument from './docs/swagger-output.json';
import mongoose from 'mongoose';
import 'dotenv/config';

const app = express();

mongoose.connect(
  process.env.MONGO_URI||""
)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => { console.log(err) })

// 미들웨어 설정
app.use(express.json());

app.use('/', routes);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

export default app;
