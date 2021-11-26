import { NextFunction, Request, Response } from 'express';
import Logger from '../../utils/logger';

export function loggerMiddleware(
	req: Request,
	res: Response,
	next: NextFunction,
) {
	const { method, path, body } = req;
	Logger.info(`${method}: ${path} - DATA: ${JSON.stringify(body)}`);
	next();
}
