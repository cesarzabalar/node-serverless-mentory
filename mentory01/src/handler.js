'use strict';

const config = require('./config');
const request = require('./utils/requests');

const { success, error } = require('./responses');

const get = async (event) => {
	//const params = event.queryStringParameters;
	const params = event.pathParameters;
	const url = `${config.NASA_API}sol=${params.id}&api_key=${config.API_KEY}`;

	try {
		const headers = {
			'Content-Type': 'multipart/form-data; boundary=something',
			Authorization: 'APIKEY4877555669998877788999',
		};
		const response = await request(url, null, headers);
		return success(response.photos[0]);
	} catch (err) {
		return error(err.message);
	}
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
