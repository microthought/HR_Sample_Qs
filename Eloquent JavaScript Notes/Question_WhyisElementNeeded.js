/*
The "test" to be run is isZero which needs an argument "x" to compare to zero

Why is element declared in the anonymous function?

The "action" needs no definition of what it acts on, the array itself determines that in forEach.
The "action", which will be "test", will act on the contents of array[i].

If I remove reference to element... it doens't work.

In "count", why tell test to take element as a parameter? forEach was already going to pass array 
contantes into it.
*/

//forEAch
function forEach (array, action){
  for (var i = 0; i < array.length; i++)
    action(array[i]);
}

function count(test, array) {
  var counted = 0;
  forEach(array, function(element) {
    if (test(element)) counted ++
  });
  return counted;
}

function countZeroes (array) {
  function isZero(x) {return x === 0;}
  return count (isZero,array);
}

countZeroes([0,0,1,2,3,0,0]);










