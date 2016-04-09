/* INSTRUCTIONS

Write a function that will return the count of distinct case-insensitive 
alphabetic characters that occur more than once in the given string. The 
given string can be assumed to contain only uppercase and lowercase alphabets.

Example

"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabbcdeB" -> 2 # 'a' and 'b'
"indivisibility" -> 1 # 'i'
"Indivisibilities" -> 2 # 'i' and 's'

*/

function duplicateCount(text){
  var text = text.toLowerCase();
  var foundOnce = [];
  var foundAgain = [];
  for(var i = 0, len = text.length; i < len; i++) {
    let character = text.charAt(i);
    if(foundOnce.indexOf(character) > -1 && foundAgain.indexOf(character) === -1){
      foundAgain.push(character);
    }
    foundOnce.push(character);
  }
  return foundAgain.length;
}


