import { Application } from 'express';
declare class Server {
    app: Application;
    constructor();
    routers(): void;
    start(port: string): void;
}
export default Server;
