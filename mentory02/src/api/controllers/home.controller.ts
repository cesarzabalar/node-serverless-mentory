import { Request, Response } from 'express';
import HomeService from '../services/home.service';
import MessageService from '../services/messages/MessageService';
//import EmailMessageService from '../services/EmailMessageService';
import SMSMessageService from '../services/SMSMessageService';

class HomeController {
	public static index(req: Request, res: Response) {
		const { name, age } = req.body;
		const response = HomeService.greet(name, age);

		const messageService = new MessageService(new SMSMessageService());
		messageService.send();

		return res.status(200).json({ status: true, data: response });
	}
}

export default HomeController;
