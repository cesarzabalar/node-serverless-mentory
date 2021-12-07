"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const home_service_1 = __importDefault(require("../services/home.service"));
class HomeController {
    static index(req, res) {
        const { name, age } = req.body;
        const response = home_service_1.default.greet(name, age);
        return res.status(200).json({ status: true, data: response });
    }
}
exports.default = HomeController;
//# sourceMappingURL=Home.controller.js.map