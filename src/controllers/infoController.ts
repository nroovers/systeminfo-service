// const infoRouter = require('express').Router()
import { Request, Response, NextFunction } from "express";
import info from "models/infoModel";

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
      if (typeof info[f] !== "function") throw new Error("Invalid flag: " + f);
      data[f] = await info[f]();
    }
    res.json(data);
  } catch (error) {
    error.statusCode = 400;
    return next(error);
  }
};
