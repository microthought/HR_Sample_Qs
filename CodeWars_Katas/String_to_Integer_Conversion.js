/* INSTRUCTIONS
Make a modified parseInt method that would return "NaN" (as a string) for "10 apples" 
because the input string is not a valid number.

Write a myParseInt method with the following rules:

It should make the conversion if the given string only contains a single integer value 
(and eventually spaces - including tabs, line feeds... - at both ends)

For all other strings (including the ones representing float values), it should return NaN.

It should assume that all numbers are not signed and written in base 10
*/

// First Attempt - apparently misses some non-integer cases?
function myParseInt(str) {
  function isLegitNum (n) { parseInt(n) >= 0 ? true : false}
  let notANumber = false;
  let length = str.length;
  let foundNum1 = false;
  let foundGap = false;
  let foundNum2 = false;

  for (var i = 0; i < length; i++){
    if (isNaN(str.charAt(i)) === true) {
      notANumber = true;
    } else if (isLegitNum(str.charAt(i)) === true) {
      if (foundNum1 === false) {
        foundNum1 = true;
      }else if (foundGap === true) {
        foundNum2 = true;
        notANumber = true;
      }
    } else {
      foundGap = true;
    }
  }

  var result = notANumber ?  "isNaN" : parseInt(str) 
  return result;
}





// Second attempt with hint - works! (although wouldn't catch "55 32" with the "isNan" return)
function myParseInt(str) {
  var okChars = ["1","2","3","4",'5','6','7','8','9','0'," ","\n","\t"];
  for (let i = 0, length = str.length; i < length; i++){
    if (okChars.indexOf( str.charAt(i) ) < 0) return "isNaN";
  }
  return +str;
}










---
