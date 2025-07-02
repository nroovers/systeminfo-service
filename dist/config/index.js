"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var config = {
    port: Number(process.env.PORT) || 3001,
    nodeEnv: process.env.NODE_ENV || "development",
    apiPref: process.env.API_PREF || "api",
    apiVersion: process.env.API_VERSION || "v1",
};
exports.default = config;
