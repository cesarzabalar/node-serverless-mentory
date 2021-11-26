module.exports = (data, status) => {
	return {
		statusCode: status || 200,
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			status: true,
			message: process.env.NAME_PROJECT,
			data,
		}),
	};
};
