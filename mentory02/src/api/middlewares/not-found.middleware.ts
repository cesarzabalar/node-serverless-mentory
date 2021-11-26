import { Request, Response } from 'express';

export function notFoundMiddleware(_req: Request, res: Response) {
	res.status(404).send({ status: false, message: 'Resource not found' });
}
