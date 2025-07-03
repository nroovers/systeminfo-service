import AppError from "@utils/AppError";
import { Request, Response, NextFunction } from "express";
import { infoFunc, Info, InfoKey } from "models/infoModel";
import NodeCache from "node-cache";

const infoCache = new NodeCache();

const getFlags = (flag: any): InfoKey[] => {
  if (Array.isArray(flag)) {
    return flag;
  }
  if (flag) {
    return [flag];
  }
  return Object.keys(infoFunc).map((k) => k as InfoKey);
};

export const getInfo = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const flags = getFlags(req.query.flag);
    var data: Info = {};
    for (const f of flags) {
      if (!(f in infoFunc)) throw new AppError("Invalid flag: " + f, 400);

      if (!infoCache.has(f)) infoCache.set(f, await infoFunc[f](), 60); // TODO: adjust caching TTL based on info type

      data[f] = infoCache.get(f);
    }
    res.status(200).json(data);
  } catch (error) {
    return next(error);
  }
};
