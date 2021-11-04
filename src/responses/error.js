module.exports = (data, status) => {
	return {
		statusCode: status || 500,
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			status: false,
			message: data || 'Server error',
		}),
	};
};
