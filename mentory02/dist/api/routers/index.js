"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const home_router_1 = __importDefault(require("./home.router"));
exports.default = () => {
    const apiRoutes = (0, express_1.Router)();
    const router = (0, express_1.Router)();
    //App routes
    apiRoutes.use('/home', (0, home_router_1.default)());
    //Principal endpoint
    router.use('/api/v1', apiRoutes);
    return router;
};
//# sourceMappingURL=index.js.map