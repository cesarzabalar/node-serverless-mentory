import { Router } from 'express';
import homeRouter from './home.router';

export default (): Router => {
	const apiRoutes = Router();
	const router = Router();

	//App routes
	apiRoutes.use('/home', homeRouter());

	//Principal endpoint
	router.use('/api/v1', apiRoutes);

	return router;
};
