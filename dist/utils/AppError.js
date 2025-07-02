"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AppError = /** @class */ (function (_super) {
    __extends(AppError, _super);
    function AppError(message, code) {
        if (code === void 0) { code = 500; }
        var _this = _super.call(this, message) || this;
        // Set the prototype explicitly — needed for `instanceof` to work correctly in TypeScript
        Object.setPrototypeOf(_this, AppError.prototype);
        _this.name = _this.constructor.name;
        _this.statusCode = code;
        return _this;
    }
    return AppError;
}(Error));
exports.default = AppError;
