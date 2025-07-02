"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var AppError_1 = __importDefault(require("@utils/AppError"));
var unknownEndpoint = function (req, _, next) {
    var error = new AppError_1.default("Page not found '".concat(req.originalUrl, "'"), 404);
    next(error);
};
exports.default = unknownEndpoint;
