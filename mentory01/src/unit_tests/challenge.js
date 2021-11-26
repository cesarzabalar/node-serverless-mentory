function clean_chain(str) {
	const stringWithoutVowels = remove_vowel(str);
	const stringWithoutCharacterPairs =
		remove_character_pairs(stringWithoutVowels);

	return stringWithoutCharacterPairs;

	//console.log(stringWithoutCharacterPairs);
}

function remove_vowel(str) {
	return str.replace(/[aáAÁeéEÉiíIÍoOóÓuúUÚ]/g, '');
}

function remove_character_pairs(str) {
	let arrayContentFinalString = [];
	for (let index = 0; index < str.length; index++) {
		if (index % 2 === 0) {
			arrayContentFinalString.push(str[index]);
		}
	}
	return arrayContentFinalString.join('');
}

//clean_chain('ejecutarcodigoTESt');

module.exports = {
	clean_chain,
	remove_vowel,
	remove_character_pairs,
};
