// const infoRouter = require('express').Router()
import AppError from "@utils/AppError";
import { Request, Response, NextFunction } from "express";
import info from "models/infoModel";
import NodeCache from "node-cache";

const infoCache = new NodeCache();

const getFlags = (flag) => {
  // console.log('flags', flag)
  if (Array.isArray(flag)) {
    return flag;
  }
  if (flag) {
    return [flag];
  }
  return Object.keys(info);
};

export const getInfo = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // console.log('getInfo called')
    const flags = getFlags(req.query.flag);
    var data = {};
    for (const f of flags) {
      if (typeof info[f] !== "function")
        throw new AppError("Invalid flag: " + f);

      if (!infoCache.has(f)) infoCache.set(f, await info[f](), 60); // TODO: adjust caching TTL based on info type

      data[f] = infoCache.get(f);
    }
    res.status(200).json(data);
  } catch (error) {
    return next(error);
  }
};
