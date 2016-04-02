// [The Array]
var origArray = [1,2,3,4];

// My functions only work if I declare the counter variable in the global scope :/
var currentTotal = undefined;

// [The Functions]
var sumFn = function (cellValue,index,arg){
	currentTotal = currentTotal || 0;
	currentTotal += cellValue;
};

var negSumFn = function (cellValue){
	currentTotal = currentTotal || 0;
	currentTotal -= cellValue;
};

var multiplyFn = function (cellValue){
	currentTotal = currentTotal || 1;
	currentTotal *= cellValue;
};

var reduceFn = function(passedInArray, passedInFunction){
	/*I WANT to declare a local counter variable, but everything returns undefined 
	if I do. Scope? Closure? Why doesn't array.forEach have access to this? */
	//var currentTotal = undefined;
	if (passedInArray instanceof Array && typeof passedInFunction === "function") {
		passedInArray.forEach(passedInFunction)
		return currentTotal;
	}else if (!(passedInArray instanceof Array)) {
		alert("Your first parameter isn't an array")
	}else if (typeof passedInFunction !== "function") {
		alert("Your second parameter isn't a function");
	} 
};

// [Building Pretty Result]
var iPassed = confirm("I started with " + origArray +
	"\n\nsumFn returns " + reduceFn(origArray, sumFn) +
	"\nnegSumFn returns " + reduceFn(origArray, negSumFn) +
	"\nmultiplyFn returns " + reduceFn(origArray, multiplyFn) +
	"\n\nThese results look ok?"
);

// [Finishing Fanfare]
if(iPassed === true){
document.write("<strong><h1>Hooray!</h1></strong>");
} else {
	document.write("<strong><h1>Crap... Back to the drawing board</h1></strong>");
}
