import { Router } from "express";
import { getInfo } from "controllers/infoController";

const infoRouter = Router();

infoRouter.get("/", getInfo);

export default infoRouter;
