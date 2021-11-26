import express, { Application } from 'express';
import { IConfig } from './interfaces/config.interface';
import Logger from './utils/logger';
import Loaders from './loaders';

export default class Server {
	app: Application;

	constructor(private config: IConfig) {
		this.app = express();
		this.loaders();
	}

	private async loaders(): Promise<void> {
		Loaders(this.app);
	}

	run(): void {
		try {
			this.app.listen(this.config.PORT);
			Logger.info(`server is running on port ${this.config.PORT}`);
		} catch (err) {
			Logger.error(err);
			process.exit(1);
		}
	}
}
