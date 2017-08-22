'use strict';

function isPermutation(str1, str2) {
	
	if (str1.length !== str2.length)
		return false;

	// create an object with a property for each character in each string.
	//  if the char is found in string1, increment the count.
	//  if the char is found in string2, decrement the count.
	//  
	// at the end, if the strings are perumutations, the counts will be 0 for each letter.
	var counts = {};
	
	for (var x=0; x < str1.length; x++) {
		var ch = str1[x];
		
		if (counts[ch] === undefined)
			counts[ch] = 1;
		else
			counts[ch]++;
		
		ch = str2[x];

		if (counts[ch] === undefined)
			counts[ch] = -1;
		else
			counts[ch]--;
	}
	
	var rtn = true;
	for (var prop in counts) {
		rtn = rtn && (counts[prop] === 0);
	}
	
	return rtn;
}

module.exports = isPermutation;