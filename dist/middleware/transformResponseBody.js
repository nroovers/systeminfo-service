"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_mung_1 = __importDefault(require("express-mung"));
/* encapsulate the JSON response in a data object */
var transformResponseBody = function (body, _, __) {
    return { data: body };
};
exports.default = express_mung_1.default.json(transformResponseBody);
