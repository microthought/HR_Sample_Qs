

Chapter 4 Handling Errors
--- --- ---
[BETWEEN]
--- --- ---


//His (non-inclusive)
function between (string, start, end){
  var startAt = string.indexOf(start) + start.length;
  var endAt = string.indexOf(end, startAt);
  return string.slice(startAt, endAt);
}

//mine (inclusive)
function between (string, start, end){
  var startAt = string.indexOf(start);
  var endAt = string.indexOf(end, startAt);
  return string.slice(startAt, endAt + end.length);
}

//Test
between("Hi guys! I want to go eat some Chicken :D", "want", "Chicken")

// His for errors (non-inclusive!)
function between (string, start, end){
  var startAt = string.indexOf(start);
  if (startAt == -1)
    return undefined;

  startAt += start.length;
  var endAt = string.indexOf(end, startAt);
  if (endAt == -1)
    return undefined;

  return string.slice(startAt, endAt);
}


--- --- ---
[BETWEEN] extension
--- --- ---


//to be used with HIS for Errors
// This just picks out text written between ()'s
var input = prompt("Tell me something", "");
var parenthesized = between(input, "(", ")");
if (parenthesized != undefined)
  console.log("You parenthesized '", parenthesized, "'.");



--- --- ---
[TRY CATCH THROW] 
--- --- ---


var InvalidInputError = new Error ("Invalid numeric input");

function inputNumber() {
  var input = Number(prompt("Give me a number", ""));
  if (isNaN(input))
    throw InvalidInputError;
  return input;
}

// Now we can write our try/catch like this

try {
  alert(inputNumber() + 5);
  //break; (Chrome says this is an illegal break!)
}

catch (e) {
  if (e != InvalidInputError)
    throw e;
  alert(e.message + ":\n\nYou did not input a number. Try again.");

}

--- --- ---
[TEST YOUR BETWEEN] 
--- --- ---


function testBetween (){
  function assert(testName, x) {
    if (!x)
      throw "Assertion failed: " + testName;
  }
  assert("identical delimiters", between("a |b| c", "|", "|") == "b");
  assert("whole string", between("[[n]]", "[[", "]]") == "n");
  assert("reversed", between("]x[", "[", "]") == undefined);
  assert("missing end", between(" -->d ", "-->", "<--") == undefined);
}


--- --- ---
[NEGATE] 
--- --- ---


function negate(func) {
  return function (x) {
    return !func(x);
  };

}

var isNum = negate(isNaN);
isNum(NaN);



--- --- ------ --- ------ --- 
[NEGATE wit more than one argument
--- --- ------ --- ------ --- 



function negate(func) {
  return function () {
    return !func.apply(null, arguments);
  };
}




--- --- ------ --- ------ --- 
[REDUCE forEach Add SUM Magic]
--- --- ------ --- ------ --- 



//forEAch
function forEach (array, action){
  for (var i = 0; i < array.length; i++)
    action(array[i]);
}

// Manual Sum
function sum(numbers) {
  var total = 0;
  forEach(numbers, function (number) {
    total += number;
  });
  return total;
}

function reduce(combine, base, array) {
  forEach(array, function (element) {
    base = combine(base, element);
  });
return base;
}

function add(a, b) {
  return a + b;
}

function multiply (c,d){
  return c * d;
}

//Sum with reduce :D
function sum(numbers) {
  return reduce(add, 0, numbers);
}

function timesEm(numbers) {
  return reduce(multiply, 1, numbers)
}

sum([1,2,3,4]);
timesEm([1,2,3,4])




--- --- ------ --- ------ --- 
Other magic
--- --- ------ --- ------ --- 



function countZeroes (array) {
  function counter (total, element) {
    return total + (element === 0 ? 1 : 0);
  }
  return reduce (counter, 0, array);
}










