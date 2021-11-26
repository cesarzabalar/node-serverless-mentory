import { Application } from 'express';
import expressLoader from './express.loader';
import logger from '../utils/logger';

export default (app: Application) => {
	expressLoader(app);
	logger.info('Express loaded');
};
