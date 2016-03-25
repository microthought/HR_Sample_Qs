// Map with results in confirm

var myOrigArray = [1,2,3,4];
var myAdd2Fn = function myAdd2Fn(eachCell){return eachCell + 2};
var mySubtract2Fn = function mySubtract2Fn(eachCell){return eachCell - 2};
var prettyOutput = "If we start with [" + myOrigArray + "]\n\n";

function myMultiplyBy2Fn (eachCell){return eachCell * 2}

function leMapFunction (someArray, someFunction){
	prettyOutput += someFunction.name + " returns [" + someArray.map(someFunction) + "]\n";
}

leMapFunction(myOrigArray, myAdd2Fn);
leMapFunction(myOrigArray, mySubtract2Fn);
leMapFunction(myOrigArray, myMultiplyBy2Fn);
prettyOutput += "\n\nLooks good yeah?";
confirm(prettyOutput);