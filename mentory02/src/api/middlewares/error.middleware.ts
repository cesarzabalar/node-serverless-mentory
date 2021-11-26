import { NextFunction, Request, Response } from 'express';

export function errorMiddleware(
	err: any,
	_req: Request,
	res: Response,
	next: NextFunction,
) {
	const httpStatus = err.status || 500;
	res.status(httpStatus).send({
		status: httpStatus,
		message: err.message || 'Internal server error',
	});
	next();
}
