import { Router } from 'express';
import HomeController from '../controllers/home.controller';

export default (): Router => {
	const router = Router();

	router.get('/', HomeController.index);

	return router;
};
