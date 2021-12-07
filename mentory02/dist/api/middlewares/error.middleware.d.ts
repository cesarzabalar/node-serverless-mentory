import { NextFunction, Request, Response } from 'express';
import HttpException from '../../exceptions/HttpException';
export declare function errorMiddleware(err: HttpException, _req: Request, res: Response, next: NextFunction): void;
