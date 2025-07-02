"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var infoController_1 = require("controllers/infoController");
var infoRouter = (0, express_1.Router)();
infoRouter.get("/", infoController_1.getInfo);
exports.default = infoRouter;
