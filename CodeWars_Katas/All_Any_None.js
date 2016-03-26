/* INSTRUCTIONS

As a part of this Kata, you need to create three functions that one needs 
to be able to call upon an array:

.all()

This function returns true only if the predicate supplied returns true for 
ALL the items in the array

[1, 2, 3].all(isGreaterThanZero) => true
[-1, 0, 2].all(isGreaterThanZero) => false

.none()

This function returns true only if the predicate supplied returns false for 
ALL the items in the array

[-1, 2, 3].none(isLessThanZero) => false
[-1, -2, -3].none(isGreaterThanZero) => true

.any()

This function returns true if at least one of the items in the array returns 
true for the predicate supplied

[-1, 2, 3].any(isGreaterThanZero) => true
[-1, -2, -3].any(isGreaterThanZero) => false

You do not need to worry about the data supplied, it will be an array at all times.
*/

//Given example fuctions to be passed to method
function isGreaterThanZero (num) { return num > 0; }
function isLessThanZero (num) { return num < 0; }


// My work
Array.prototype.all = function (p) {
  let test = true;
  for(var i = 0, length = this.length; i < length; i++){
    if (p(this[i]) === false) test = false;
  }  
  return test;
};

Array.prototype.none = function (p) {
  let test = true;
  for(var i = 0, length = this.length; i < length; i++){
    if (p(this[i]) === true) test = false;
  }  
  return test;
};

Array.prototype.any = function (p) {
  let test = false;
  for(var i = 0, length = this.length; i < length; i++){
    if (p(this[i]) === true) test = true;
  }  
  return test;
};


//sample test
[-1,2,3,-4].all(isLessThanZero);