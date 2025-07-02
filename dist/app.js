"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var morgan_1 = __importDefault(require("morgan"));
var config_1 = __importDefault(require("config"));
var infoRoutes_1 = __importDefault(require("routes/infoRoutes"));
var transformResponseBody_1 = __importDefault(require("middleware/transformResponseBody"));
var unknownEndpoint_1 = __importDefault(require("middleware/unknownEndpoint"));
var errorHandler_1 = __importDefault(require("middleware/errorHandler"));
var app = (0, express_1.default)();
// parses incoming requests with JSON payloads and is based on body-parser.
// app.use(express.json())
var path = "/".concat(config_1.default.apiPref, "/").concat(config_1.default.apiVersion);
app.use((0, cors_1.default)()); // --> middleware to support CORS
app.use((0, morgan_1.default)(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));
app.use(transformResponseBody_1.default);
app.use(path + "/info", infoRoutes_1.default);
app.get("/", function (req, res) {
    res.send("<h2>OK</h2><p>System info service up and running.<p>");
});
app.use(unknownEndpoint_1.default);
app.use(errorHandler_1.default);
exports.default = app;
