/* INSTRUCTIONS

Write a function that takes an array, and a function as arguments
and applies that afunction to each array element

*/


- - - - - - - - - -
Using a For-Loop
- - - - - - - - - - 

//The Array
var boop = [1,2,3,4];

// The Callback functions
var add2 = function (element){ return element += 2; };
var subtract2 = function (element){ return element -= 2; };
var multiply2 = function (element){ return element *= 2; };


//myMap
var myMap = function (arr, func) {
	let newArray = []
  if(Array.isArray(arr)) {
    for (var i = 0, len = arr.length; i < len; i++){
      newArray.push( func( arr[i] ) );
    }
  }
  return newArray;
}
// Let's Call it!
console.log("["+ myMap(boop, add2) + "] [" + myMap(boop, subtract2) + "] [" + myMap(boop, multiply2) + "]")



- - - - - - - - - -
Using a Array.forEach
- - - - - - - - - - 

var boop = [1,2,3,4];
var add2 = function (element, index, array){ array[index] = element += 2; };
var subtract2 = function (element, index, array){ array[index] = element -= 2; };
var multiply2 = function (element, index, array){ array[index] = element *= 2; };

// myMap with forEach

var myMap = function (arr, func) {
    var temp = arr.slice(0);
    temp.forEach( func );
    return temp; 
}


console.log("["+ myMap(boop, add2) + "] [" + myMap(boop, subtract2) + "] [" + myMap(boop, multiply2) + "]")




- - - - - - - - - -
Using a Array.forEach with external side-effects
- - - - - - - - - - 







var resultArray = [];
var boop = [1,2,3,4];
var add2 = function (element, index, derp){ resultArray[index] = element += 2; };
var subtract2 = function (element, index, derp){ resultArray[index] = element -= 2; };
var multiply2 = function (element, index, derp){ resultArray[index] = element *= 2; };

// myMap with forEach

var myMap = function (arr, func) {
    resultArray = [];
    arr.forEach( func );
    return resultArray; 
}


console.log("["+ myMap(boop, add2) + "] [" + myMap(boop, subtract2) + "] [" + myMap(boop, multiply2) + "]")
















