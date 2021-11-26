const { clean_chain, remove_vowel } = require('../src/unit_tests/challenge');

describe('CLEAN STRING', () => {
	test('CLEAN VOWELS', () => {
		const word = 'lucia la guapetona';
		const expected = 'lc l gptn';
		const response = remove_vowel(word);

		expect(response).toEqual(expected);
	});

	test('CLEAN CHAIN', () => {
		const word = 'lucia la guapetona';
		const expected = 'l  pn';
		const response = clean_chain(word);

		expect(response).toEqual(expected);
	});

	// describe('CLEAN PAIRS', () => {
	// })
});
