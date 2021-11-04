if (process.env.NODE_ENV !== 'prod') {
	require('dotenv').config();
}

module.exports = {
	VERSION: process.env.VERSION,
	DATABASE: process.env.DATABASE,
	USER_DB: process.env.USER_DB,
	NASA_API: process.env.NASA_API,
	API_KEY: process.env.API_KEY,
};
