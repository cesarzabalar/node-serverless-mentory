if (process.env.NODE_ENV !== 'prod') {
	require('dotenv').config();
}

module.exports = {
	VERSION: process.env.VERSION,
	DATABASE: process.env.DATABASE,
	USER_DB: process.env.USER_DB,
};
