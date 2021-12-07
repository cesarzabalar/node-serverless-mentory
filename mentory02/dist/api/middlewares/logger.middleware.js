"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loggerMiddleware = void 0;
const logger_1 = __importDefault(require("../../utils/logger"));
function loggerMiddleware(req, res, next) {
    const { method, path, body } = req;
    logger_1.default.info(`${method}: ${path} - DATA: ${JSON.stringify(body)}`);
    next();
}
exports.loggerMiddleware = loggerMiddleware;
//# sourceMappingURL=logger.middleware.js.map