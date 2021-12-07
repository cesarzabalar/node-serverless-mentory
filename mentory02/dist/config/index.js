"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
if (process.env.NODE_ENV !== 'prod') {
    dotenv_1.default.config();
}
const config = {
    PORT: process.env.PORT || 3001,
    DATABASE: process.env.DATABASE || '',
    SECRET_KEY: process.env.SECRET_KEY || '',
    NODE_ENV: process.env.NODE_ENV || '',
};
exports.default = config;
//# sourceMappingURL=index.js.map