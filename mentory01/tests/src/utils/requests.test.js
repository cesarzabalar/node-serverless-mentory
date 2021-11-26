const request = require('../../../src/utils/requests');
const axios = require('axios').default;

jest.mock('axios');

describe('REQUEST HTTP', () => {
	test('Response success', async () => {
		const dataExpected = { data: { photos: [{ url: 'http' }] } };
		axios.request = () => {
			return new Promise((resolve) => {
				resolve(dataExpected);
			});
		};

		const resp = await request('http://localhost');
		expect(resp).toEqual(dataExpected.data);
	});

	test('Response success with Spy', async () => {
		const dataExpected = { data: { photos: [{ url: 'http' }] } };
		const options = {
			method: 'GET',
			url: 'http://localhost',
			params: undefined,
			data: undefined,
			headers: { 'Content-Type': 'application/json' },
		};

		const spyAxios = jest.spyOn(axios, 'request');
		spyAxios.mockReturnValue(dataExpected);

		const resp = await request('http://localhost');
		expect(axios.request).toBeCalledTimes(1);
		expect(axios.request).toBeCalledWith(options);
		expect(resp).toEqual(dataExpected.data);
	});

	test('Response Exception', async () => {
		const errorMessage = 'request error';
		axios.request = () => {
			return new Promise((resolve, reject) => {
				reject(Error(errorMessage));
			});
		};
		try {
			await request('http://localhost');
		} catch (err) {
			expect(err).toBeInstanceOf(Error);
			expect(err.message).toEqual(errorMessage);
		}
	});
});
