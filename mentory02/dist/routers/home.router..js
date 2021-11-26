"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const home_controller_1 = __importDefault(require("../controllers/home.controller"));
exports.default = () => {
    const router = (0, express_1.Router)();
    router.get('/', home_controller_1.default.index);
    return router;
};
//# sourceMappingURL=home.router..js.map