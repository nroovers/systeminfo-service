import mung from "express-mung";
import { Request, Response } from "express";

/* encapsulate the JSON response in a data object */
const transformResponseBody = (body: any, _: Request, __: Response) => {
  return { data: body };
};

export default mung.json(transformResponseBody);
