import { Application } from 'express';
import { IConfig } from './interfaces/config.interface';
export default class Server {
    private config;
    app: Application;
    constructor(config: IConfig);
    private loaders;
    run(): void;
}
