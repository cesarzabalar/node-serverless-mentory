"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("./config"));
const server_1 = __importDefault(require("./server"));
// const main = async () => {
// 	const server = new Server(config);
// 	console.log('test1');
// 	await server.run();
// 	console.log('test2');
// };
// main();
new server_1.default(config_1.default).run();
//# sourceMappingURL=index.js.map