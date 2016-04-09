/* INSTRUCTIONS

Write a function isIntArray with the below signature.

function isIntArray(arr) {
    return true;
}
returns true if every element in an array is an integer. 
returns true if array is empty.
returns false for every other input.

*/




//Tada!

function isIntArray(arr) {
  if(!(arr)) {return false;}
  if(arr.length === 0) {return true;}
  for (var i = 0, len = arr.length; i < len; i++){
    var element = arr[i];
    if(element % 1 !== 0 || (!(element)) && arr[i] !== 0 || typeof element === "string") return false;
  }
  return true;
}





//1
  function isIntArray(arr) {
    if(arr === null || arr === undefined || valueIsNaN(arr)) return false;
    if(arr.length === 0) return true;
    for (var i = 0, len = arr.length; i < len; i++){
      if(arr[i] % 1 !== 0) return false;
    }
    return true;
  }



//2


function isIntArray(arr) {
  if(Object.prototype.toString.call(someVar) === "[object Object]"){
    for (var i = 0, len = arr.length; i < len; i++){
      if(arr[i] % 1 !== 0) return false;
    }
  }
  if(arr === null || arr === undefined || isNaN(arr)) return false;
  return true;     
    
}


























