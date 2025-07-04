import AppError from "@utils/AppError";
import { Request, Response, NextFunction } from "express";
import { Info, InfoType } from "models/infoModel";
import NodeCache from "node-cache";
import { getInfoTypes } from "services/infoService";

const infoCache = new NodeCache();

const infoTtl: Record<InfoType, number> = {
  cpu: 60,
  cpuSpeed: 10,
  cpuTemp: 10,
  cpuLoad: 10,
  mem: 60,
  os: 60,
  processes: 60,
  disk: 60,
  fsSize: 60,
  network: 60,
  networkStats: 60,
  wifi: 60,
};

const getFlags = (flag: any): InfoType[] => {
  if (Array.isArray(flag)) {
    return flag;
  }
  if (flag) {
    return [flag];
  }
  return Object.keys(getInfoTypes) as InfoType[];
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
      if (!(f in getInfoTypes)) throw new AppError("Invalid flag: " + f, 400);

      if (!infoCache.has(f))
        infoCache.set(f, await getInfoTypes[f](), infoTtl[f]); // TODO: adjust caching TTL based on info type

      data[f] = infoCache.get(f);
    }
    res.status(200).json(data);
  } catch (error) {
    return next(error);
  }
};
