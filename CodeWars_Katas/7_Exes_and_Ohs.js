/* INSTRUCTIONS
Check to see if a string has the same amount of 'x's and 'o's. The method must 
return a boolean and be case insensitive. The string can contains any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
*/

function XO(str) {
  var exes = 0,
      ohs = 0;

  for(var i = 0, len = str.length; i < len; i++) {
    if (str.charAt(i) === "x" || str.charAt(i) === "X"){
      exes += 1;
    } else if (str.charAt(i) === "o" || str.charAt(i) === "O"){
      ohs++;
    }
  }
  return exes === ohs ? true : false
}


---


var str = "xxooo";
