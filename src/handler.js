'use strict';

const { success, error } = require('./responses');

const get = async (event) => {
	//const params = event.queryStringParameters;
	const params = event.pathParameters;
	return success(params);
};

const save = async (event) => {
	try {
		if (!event.body) throw new Error('Body is empty');
		return success(event.body, 201);
	} catch {
		return error();
	}
};

module.exports = {
	get,
	save,
};
