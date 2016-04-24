/* INSTRUCTIONS

ROT13 is a simple letter substitution cipher that replaces a letter with 
the letter 13 letters after it in the alphabet. ROT13 is an example of 
the Caesar cipher.

Create a function that takes a string and returns the string ciphered 
with Rot13. If there are numbers or special characters included in the 
string, they should be returned as they are. Only letters from the 
latin/english alphabet should be shifted, like in the original Rot13 
"implementation".

*/


function rot13(message){
  let answer = "";
  message.split("").forEach(cipher);
  return answer;

  function cipher(value){
    let toLet = function(x){return String.fromCharCode (x);}
    let aCode = 65;
    let bigACode = 97;
    let currentCode = value.charCodeAt();
    answer += (currentCode < aCode) ? value :
    (currentCode < (aCode + 13)) ? toLet(currentCode + 13) : 
    (currentCode < (aCode + 26)) ? toLet(currentCode - 13) :
    (currentCode < bigACode) ? value :
    (currentCode < (bigACode + 13)) ? toLet(currentCode + 13) : 
    (currentCode < (bigACode + 26)) ? toLet(currentCode - 13) : value
  }
}












// if's in progress
function(value, index){
  let aCode = 65;
  let currentCode = value.charCodeAt();

  if(currentCode < aCode) return value;

  if(currentCode < (aCode + 13)) return currentCode + 13;
  if(currentCode < (aCode + 26)) return currentCode - 13;
  if(currentCode < (aCode + 13)) return currentCode + 13;
  if(currentCode < (aCode + 13)) return currentCode - 13;
}