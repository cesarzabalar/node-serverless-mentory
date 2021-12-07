"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const config_1 = __importDefault(require("../config"));
const middlewares_1 = require("../api/middlewares");
const routers_1 = __importDefault(require("../api/routers"));
exports.default = (app) => {
    /**
     * Middlewares
     */
    app.use((0, cors_1.default)());
    app.use(express_1.default.json());
    app.use(express_1.default.urlencoded({ extended: false }));
    // Healtcheck
    app.get('/status', (req, res) => {
        res.status(200).end();
    });
    app.head('/status', (req, res) => {
        res.status(200).end();
    });
    // Path logger
    if (config_1.default.NODE_ENV !== 'prod') {
        app.use(middlewares_1.loggerMiddleware);
    }
    app.use((0, routers_1.default)());
    // NotFound handler and errorHandler
    app.use(middlewares_1.notFoundMiddleware).use(middlewares_1.errorMiddleware);
};
//# sourceMappingURL=express.loader.js.map