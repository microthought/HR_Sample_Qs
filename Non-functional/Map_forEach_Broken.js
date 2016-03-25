var myArrays = [
  [1,2,3,4],
  [10,20,30,40],
  [7,9,23,45,55,66]
];

var plus2 = function (val) {return val += 2;};
var minus2 = function (val) {return val -= 2;};
var multiply2 = function (val) {return val *= 2;};

var map = function (passedArray, passedFn) {
 var boop = passedArray.forEach(passedFn);
  return boop;
};

console.log(map(myArrays[0],plus2),
            map(myArrays[0], minus2),
            map(myArrays[0], multiply2)
);