"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const home_router_1 = __importDefault(require("./routers/home.router."));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.routers();
    }
    routers() {
        this.app.use('/', (0, home_router_1.default)());
    }
    start(port) {
        this.app.listen(port, () => {
            // eslint-disable-next-line no-console
            console.log(`server is running on port ${port}`);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map