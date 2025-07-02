import AppError from "@utils/AppError";
import { Request, Response, NextFunction } from "express";

const unknownEndpoint = (req: Request, _: Response, next: NextFunction) => {
  const error = new AppError(`Page not found '${req.originalUrl}'`, 404);
  next(error);
};

export default unknownEndpoint;
