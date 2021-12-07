import { NextFunction, Request, Response } from 'express';
import HttpException from '../../exceptions/HttpException';

export function errorMiddleware(
	err: HttpException,
	_req: Request,
	res: Response,
	next: NextFunction,
) {
	const status = err.status || 500;
	const message = err.message || 'Internal server error';

	res.status(status).send({
		status,
		message,
	});
	next();
}
