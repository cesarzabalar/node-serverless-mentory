import { Request, Response } from 'express';
import HomeService from '../services/home.service';

class HomeController {
	public static index(req: Request, res: Response) {
		const { name, age } = req.body;
		const response = HomeService.greet(name, age);
		return res.status(200).json({ status: true, data: response });
	}
}

export default HomeController;
