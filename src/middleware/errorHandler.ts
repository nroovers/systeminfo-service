import AppError from "@utils/AppError";
import { Request, Response, NextFunction } from "express";

const errorHandler = (
  err: AppError,
  _: Request,
  res: Response,
  __: NextFunction
) => {
  res.status(err.statusCode).json({
    error: {
      code: err.statusCode,
      message: err.message,
      // error: err,
      // stack: err.stack
    },
  });
};

export default errorHandler;
