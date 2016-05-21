/*

Define createSequence(regex) function that returns a string of all characters (in ASCII order) 
matching specified regular expression one-character criterion.

Examples

let digits = /[0-9]/;
// createSequence(digits) === '0123456789'

let hexadecimal = /[0-9A-F]/;
// createSequence(hexadecimal) === '0123456789ABCDEF'

*/



var createSequence = (regex) => {

  var allOfEm = [];
  for(var i = 0; i < 500; i++){
  	allOfEm.push(String.fromCharCode(i));
  };

  return allOfEm.filter(ele => !ele.search(regex)).join("")

}

//testing
var digits = /[0-9]/;
createSequence(digits);


