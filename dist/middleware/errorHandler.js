"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var errorHandler = function (err, _, res, __) {
    res.status(err.statusCode).json({
        error: {
            code: err.statusCode,
            message: err.message,
            // error: err,
            // stack: err.stack
        },
    });
};
exports.default = errorHandler;
