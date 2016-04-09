var aArray = [1,2,3,4];

var addEm = function (counter, valor){
	counter = counter || 0;
	return counter += valor;
};
var subtractEm = function (counter, valor){
	counter = counter || 0;
	return counter -= valor;
};
var timesEm = function (counter, valor){
	counter = counter || 1;
	return counter *= valor;
};

var reduceEm = function (anArray, aFunction) {
	var result;
	var length = anArray.length;
	for (var i = 0; i < length; i++){
		result = aFunction(result, anArray[i]);
	}
	return result;
};

reduceEm(aArray, timesEm);


