/* INSTRUCTIONS

Write a function that takes an array and a function as arguments.
Reduce the elements into a single value using the function supplied.

*/


- - - - - - - - - - -
Reduce with For-Loop (WORKS)
- - - - - - - - - - -


var boop = [1,2,3,4]

var add = function (element, counter) {counter = counter || 0; return counter + element;};
var substract = function (element, counter) {counter = counter || 0; return counter - element;};
var multiply = function (element, counter) {counter = counter || 1; return counter * element;};


var reduce = function (arr, func) {
  var counter = undefined;
  for(var i = 0, len = arr.length; i < len; i++){
    counter = func(arr[i], counter);
  }
  return counter;

};


console.log(reduce(boop, add));
console.log(reduce(boop, substract));
console.log(reduce(boop, multiply));







- - - - - - - - - - - - -
Reduce with forEACH
- - - - - - - - - - - - -


var boop = [1,2,3,4];

var add = function (element) { counter = counter || 0; counter += element; };
var substract = function (element) { counter = counter || 0; counter -= element; };
var multiply = function (element) { counter = counter || 1; counter *= element; };





let counter;

var reduce = function (arr, func) {
  counter = undefined

  arr.forEach(func)

  return counter;
};





console.log(reduce(boop, add));
console.log(reduce(boop, substract));
console.log(reduce(boop, multiply));











- - - - - - - - - - - - -
Reduce with While (Subtract is weak with negative array values)
- - - - - - - - - - - - -


var boop = [1,2,3,4];

var add = function (array) {array[0] += +array.splice(1,1); };
var substract = function (array) {array[0] = -Math.abs(array[0]) - +array.splice(1,1); };
var multiply = function (array) {array[0] *= +array.splice(1,1); };


var reduce = function (arr, func) {
  while(arr[1]){
    func(arr)
  }
  return arr[0];
};


console.log(reduce(boop, add));
boop = [1,2,3,4];
console.log(reduce(boop, substract));
boop = [1,2,3,4];

console.log(reduce(boop, multiply));

