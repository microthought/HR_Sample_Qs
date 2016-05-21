/*

Write a function to shuffle an array.

Ex.:

Input: [1,2,3,4]
Output: [3,1,4,2]
Assume input is array.

Hint: Math.random()

*/


var randomUpto = (x) => Math.round(Math.random()*(x+1)-(0.5))

function shuffle(arr) {
	var results = [];
	var orig = arr.slice();
	for(var i = arr.length - 1; i > -1; i--){
		results.push(
			orig.splice(randomUpto(i),1).pop()
		)

	}
	return results;
}





// DEEEEERRP

for(var i = 0; i < 100; i++){

	console.log(Math.round(Math.random()*3-1.5))
}

var boop = [1,2,3,4];

var yank = boop.splice(0,1)

boop;