const addTwoHoursToDate = require('../../../src/utils/dates');
// eslint-disable-next-line no-unused-vars
const { stringToArray } = require('../../../src/utils/formats');

describe('addTwoHoursToDate', () => {
	describe('success', () => {
		test('should return number 5', () => {
			const input = 5;
			const response = addTwoHoursToDate(input);
			expect(response).toEqual(input);
		});

		test('should return number error', () => {
			const input = 5;
			const response = addTwoHoursToDate(input);
			expect(response).not.toEqual(8);
		});

		test('should return default values', () => {
			const response = addTwoHoursToDate();
			expect(response).toEqual(9);
		});

		test('convert string to array', () => {
			stringToArray('cesar');
		});
	});
});
