"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HomeController {
    static index(req, res) {
        if (req.method === 'get')
            return true;
        return res.status(200).json({ status: true, data: 'Hello' });
    }
}
exports.default = HomeController;
//# sourceMappingURL=home.controller.js.map