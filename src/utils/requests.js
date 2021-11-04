const axios = require('axios').default;

module.exports = async (url, params, headers, method = 'GET') => {
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
