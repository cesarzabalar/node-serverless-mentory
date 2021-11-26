const error = require('../../../src/responses/error');

describe('Reponse Error', () => {
	test('error response with empty params', () => {
		const expected = {
			statusCode: 500,
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				status: false,
				message: 'Server error',
			}),
		};
		const resp = error();
		expect(resp).toEqual(expected);
		expect(resp).toHaveProperty('statusCode', 500);
		expect(resp).toMatchObject(expected);
	});

	test('error response with data', () => {
		const expected = {
			statusCode: 500,
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				status: false,
				message: 'Param error',
			}),
		};
		const resp = error('Param error');
		expect(resp).toEqual(expected);
		expect(resp).toHaveProperty('statusCode', 500);
		expect(resp).toMatchObject(expected);
	});

	test('error response with status and data', () => {
		const expected = {
			statusCode: 501,
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				status: false,
				message: 'Param error',
			}),
		};
		const resp = error('Param error', 501);
		expect(resp).toEqual(expected);
		expect(resp).toHaveProperty('statusCode', 501);
		expect(resp).toMatchObject(expected);
	});
});
