import { errorStatus } from './constants';

export class CustomError extends Error {
  statusCode: number = errorStatus.HTTP_500_INTERNAL_SERVER_ERROR;
  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
    Error.captureStackTrace(this, this.constructor);
  }
}

export class NotFoundError extends CustomError {
  constructor(message = 'Bad request') {
    super(message, errorStatus.HTTP_400_BAD_REQUEST);
  }
}

export class BadRequestError extends CustomError {
  constructor(message = 'Resource not found') {
    super(message, errorStatus.HTTP_404_NOT_FOUND);
  }
}

export class UnauthorizedError extends CustomError {
  constructor(message = 'Unauthorized') {
    super(message, errorStatus.HTTP_401_UNAUTHORIZED);
  }
}

export class ForbiddenError extends CustomError {
  constructor(message = 'Forbidden') {
    super(message, errorStatus.HTTP_403_FORBIDDEN);
  }
}
