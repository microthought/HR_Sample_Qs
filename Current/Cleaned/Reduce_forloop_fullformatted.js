// [The Array]
var origArray = [1,2,3,4],

	// [The Function Expressions]
	sumFn = function (counter, arrayCell){
		counter = counter || 0;
		return counter + arrayCell
	},
	negSumFn = function (counter, arrayCell){
		counter = counter || 0;
		return counter - arrayCell
	},
	multiplyFn = function (counter, arrayCell){
		counter = counter || 1;
		return counter * arrayCell
	},

	reduceFn = function(passedInArray, passedInFunction){
		// test to see if parameters are valid
		if (passedInArray instanceof Array && typeof passedInFunction === "function") {
			var elResultado;
			for (var i = 0, arrayLength = passedInArray.length; i < arrayLength; i++){
				elResultado = passedInFunction(elResultado, passedInArray[i]);
			}
			return elResultado;
		} else if (!(passedInArray instanceof Array)) {
			alert("Your first parameter isn't an array")
		}else if (typeof passedInFunction !== "function") {
			alert("Your second parameter isn't a function");
		} 
	},

// Format test case results into confirm dialoge box
	iPassed = confirm("I started with " + origArray +
		"\n\nsumFn returns " + reduceFn(origArray, sumFn) +
		"\nnegSumFn returns " + reduceFn(origArray, negSumFn) +
		"\nmultiplyFn returns " + reduceFn(origArray, multiplyFn) +
		"\n\nThese results look ok?"
	);

// Celebrate if results pass approval
if(iPassed === true){
document.write("<strong><h1>Hooray!</h1></strong>");
} else {
	document.write("<strong><h1>Crap... Back to the drawing board</h1></strong>");
}
