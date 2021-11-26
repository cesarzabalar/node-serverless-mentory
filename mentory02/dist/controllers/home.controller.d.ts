import { Request, Response } from 'express';
declare class HomeController {
    static index(req: Request, res: Response): true | Response<any, Record<string, any>>;
}
export default HomeController;
