import express, { Request, Response } from 'express';

const app = express();

// 미들웨어 설정
app.use(express.json());

// 간단한 라우트 설정
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, Express with TypeScript!');
});

// 404 핸들러
app.use((req: Request, res: Response) => {
  res.status(404).send('Not Found');
});

export default app;
