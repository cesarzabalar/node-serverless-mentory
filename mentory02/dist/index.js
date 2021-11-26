"use strict";
// import express, { Application, Request } from 'express';
// const app: Application = express();
// const port = 3000;
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// app.get('/', (req: Request, res) => {
// 	//if (4 === 4) res.send('same');
// 	let test;
// 	res.send('HomePage' + test);
// });
// app.listen(port, () => {
// 	// eslint-disable-next-line no-console
// 	console.log(`server is listening on ${port}`);
// });
const server_1 = __importDefault(require("./server"));
const server = new server_1.default();
server.start('3000');
//# sourceMappingURL=index.js.map