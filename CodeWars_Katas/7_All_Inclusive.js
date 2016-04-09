/* INSTRUCTIONS

Input:

a string strng
an array of strings arr
Output of function contain_all_rots(strng, arr) (or containAllRots or contain-all-rots):

a boolean true if all rotations of strng are included in arr
false otherwise
Examples:

contain_all_rots(
  "bsjq", ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"]) -> true

contain_all_rots(
  "Ajylvpy", ["Ajylvpy", "ylvpyAj", "jylvpyA", "lvpyAjy", "pyAjylv", "vpyAjyl", "ipywee"]) -> false)
Note:

Though not correct in a mathematical sense

we will consider that there are no rotations of strng == ""
and for any array arr: contain_all_rots("", arr) --> true

*/


// WORKS! 

function containAllRots(strng, arr) {
  let iteration = strng;
  for (var i = 0, len = strng.length; i < len; i++){
    if(arr.indexOf(iteration) === -1) { return false; };
    iteration = iteration.slice( -(len - 1 ) ) + iteration.slice(0,1);
  }
  return true;
}


myString = "flop";
myArray = [
"flop",
"pflo",
"opfl",
""
];


containAllRots(myString, myArray);









