"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_loader_1 = __importDefault(require("./express.loader"));
const logger_1 = __importDefault(require("../utils/logger"));
exports.default = (app) => {
    (0, express_loader_1.default)(app);
    logger_1.default.info('Express loaded');
};
//# sourceMappingURL=index.js.map