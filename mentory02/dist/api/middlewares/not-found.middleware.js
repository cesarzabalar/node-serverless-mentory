"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notFoundMiddleware = void 0;
function notFoundMiddleware(_req, res) {
    res.status(404).send({ status: false, message: 'Resource not found' });
}
exports.notFoundMiddleware = notFoundMiddleware;
//# sourceMappingURL=not-found.middleware.js.map