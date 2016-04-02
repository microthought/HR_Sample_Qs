/* INSTRUCTIONS
Lists are data structures composed of nested objects, each containing a single value 
and a reference to the next object.

Here's an example of a list in JavaScript:

{value: 1, next: {value: 2, next: {value: 3, next: null}}}

Write a function listToArray (or list_to_array in Python) that converts a list to an 
array, like this:

[1, 2, 3]
Assume all inputs are valid lists with at least one value. For the purpose of 
simplicity, all values will be either numbers, strings, or Booleans.
*/

function listToArray(list) {
  
  var result = [];
  var stringCall = "list";
  var jsCall = eval(stringCall + ";");

  do {
    result.push(jsCall.value);
    stringCall += ".next";
    jsCall = eval(stringCall);
  } while ( jsCall !== null )

  return result;

}







var theList = {value: 1, next: {value: 2, next: {value: 3, next: null}}}

theList.next.next.hasOwnProperty("value");





while (jsCall.hasOwnProperty("value")){
  result.push(jsCall.value);
  stringcall += ".next"
}

jsCall.hasOwnProperty("value");