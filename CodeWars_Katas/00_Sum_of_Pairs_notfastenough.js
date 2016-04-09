/* INSTRUCTIONS
Sum of Pairs

Given a list of integers and a single sum value, return the first two values (parse from 
the left please) in order of appearance that add up to form the sum.

sum_pairs([11, 3, 7, 5],         10)
#              ^--^      3 + 7 = 10
== [3, 7]

sum_pairs([4, 3, 2, 3, 4],         6)
#          ^-----^         4 + 2 = 6, indices: 0, 2 *
#             ^-----^      3 + 3 = 6, indices: 1, 3
#                ^-----^   2 + 4 = 6, indices: 2, 4
#  * entire pair is earlier, and therefore is the correct answer
== [4, 2]

sum_pairs([0, 0, -2, 3], 2)
#  there are no pairs of values that can be added to produce 2.
== None/nil/undefined (Based on the language)

sum_pairs([10, 5, 2, 3, 7, 5],         10)
#              ^-----------^   5 + 5 = 10, indices: 1, 5
#                    ^--^      3 + 7 = 10, indices: 3, 4 *
#  * entire pair is earlier, and therefore is the correct answer
== [3, 7]
Negative numbers and duplicate numbers can and will appear.

NOTE: There will also be lists tested of lengths upwards of 10,000,000 elements. Be sure 
your code doesn't time out.

*/


//works
var sum_pairs = function(ints, s){
	let firstPair = [];
	for (let i = 1, len = ints.length ; i < len; i++){
		let j;
		let lookingFor = s - ints[i];
		for (j = (i - 1); j >= 0; j--) {
			if(ints[j] === lookingFor) {
				firstPair = [ints[j],ints[i]];
				return firstPair;
			}
		}
	}
	return undefined;
}


// Hot-Rod Mod 1: for loop then indexOf of what you need

var sum_pairs = function(ints, s){
	for (let i = 1, len = ints.length ; i < len; i++){
		let lookingFor = s - ints[i];
		let position = ints.indexOf(lookingFor);
		if (position > -1 && position < i){
			let firstPair = [ints[position],ints[i]];
				return firstPair;
		}
	}
	return undefined;
}

// Hot-Rod Mod 1.1: for loop then indexOf of what you need

var sum_pairs = function(ints, s){
	for (let i = 1, len = ints.length ; i < len; i++){
		let position = ints.indexOf(s - ints[i]);
		if (position > -1 && position < i){
			let firstPair = [ints[position],ints[i]];
				return firstPair;
		}
	}
	return undefined;
}

// Hot-Rod Mod 2: for loop then indexOf over cached new array

var sum_pairs = function(ints, s){
	let cache = [ints[0]];
	for (let i = 1, len = ints.length ; i < len; i++){
		let temp = ints[i];
			let lookingFor = s - temp;
			let position = cache.indexOf(lookingFor);
			if (position > -1){
				let firstPair = [cache[position], temp];
				return firstPair;
			} else {
				cache.push(temp);
			}	
	}
	return undefined;
}



// Frankenstein??

var sum_pairs = function(ints, s){
	let cache = [ints[0]];

	for (let i = 1, len = ints.length ; i < len; i++){
		let temp = ints[i];

		if (cache.indexOf(temp) === -1){
			let lookingFor = s - temp;
			let position = cache.indexOf(lookingFor);
			if (position > -1){
				let firstPair = [cache[position], temp];
				return firstPair;
			} else {
				cache.push(temp);
			}
		}

	}
	return undefined;
}



// What if as you went, you created array/object with only unique 
//"looking fors" then check each new array element against that.
//only one pass through.













