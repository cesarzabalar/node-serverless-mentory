import express, { Application } from 'express';
import cors from 'cors';
import config from '../config';
import {
	loggerMiddleware,
	notFoundMiddleware,
	errorMiddleware,
} from '../api/middlewares';
import routes from '../api/routers';

export default (app: Application) => {
	/**
	 * Middlewares
	 */
	app.use(cors());
	app.use(express.json());
	app.use(express.urlencoded({ extended: false }));

	// Healtcheck
	app.get('/status', (req, res) => {
		res.status(200).end();
	});

	app.head('/status', (req, res) => {
		res.status(200).end();
	});

	// Path logger
	if (config.NODE_ENV !== 'prod') {
		app.use(loggerMiddleware);
	}

	app.use(routes());

	// NotFound handler and errorHandler
	app.use(notFoundMiddleware).use(errorMiddleware);
};
