const axios = require('axios').default;

module.exports = async (url, params, headerss, method = 'GET') => {
	const headers = { 'Content-Type': 'application/json', ...headerss };

	const options = {
		method,
		url,
		params,
		data: params,
		headers,
	};

	try {
		const response = await axios.request(options);
		return response.data;
	} catch (err) {
		throw new Error(err.message);
	}
};
