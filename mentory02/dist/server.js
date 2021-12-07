"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const logger_1 = __importDefault(require("./utils/logger"));
const loaders_1 = __importDefault(require("./loaders"));
class Server {
    constructor(config) {
        this.config = config;
        this.app = (0, express_1.default)();
        this.loaders();
    }
    async loaders() {
        (0, loaders_1.default)(this.app);
    }
    run() {
        try {
            this.app.listen(this.config.PORT);
            logger_1.default.info(`server is running on port ${this.config.PORT}`);
        }
        catch (err) {
            logger_1.default.error(err);
            process.exit(1);
        }
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map