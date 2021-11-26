import dotenv from 'dotenv';
import { IConfig } from '../interfaces/config.interface';

if (process.env.NODE_ENV !== 'prod') {
	dotenv.config();
}

const config: IConfig = {
	PORT: process.env.PORT || 3001,
	DATABASE: process.env.DATABASE || '',
	SECRET_KEY: process.env.SECRET_KEY || '',
	NODE_ENV: process.env.NODE_ENV || '',
};

export default config;
