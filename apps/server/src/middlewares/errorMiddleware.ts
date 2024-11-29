import { Request, Response, NextFunction } from 'express';
import { CustomError } from '../utils/customError';
import { errorStatus } from '../utils/constants';

// eslint-disable-next-line no-unused-vars
export const errorMiddleware = (err: Error, req: Request, res: Response, _next: NextFunction) => {
  const handler = errorHandlers[err.constructor.name] || errorHandlers['DefaultError'];
  handler(err as any, res);
};

const errorHandlers: { [key: string]: (err: any, res: Response) => void } = {
  DefaultError: (err: Error, res: Response) => {
    res
      .status(errorStatus.HTTP_500_INTERNAL_SERVER_ERROR)
      .json({ message: 'Internal Server Error', error: err.message });
  },
  CustomError: (err: CustomError, res: Response) => {
    res.status(err.statusCode).json({ message: err.message });
  },
};
