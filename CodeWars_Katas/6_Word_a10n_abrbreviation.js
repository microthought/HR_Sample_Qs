/* INSTRUCTIONS

The word i18n is a common abbreviation of internationalization the developer 
community use instead of typing the whole word and trying to spell it correctly. 
Similarly, a11y is an abbreviation of accessibility.

Write a function that takes a string and turns any and all words within that 
string of length 4 or greater into an abbreviation following the same rules.

Notes:

A "word" is a sequence of alphabetical characters. By this definition, any other 
character like a space or hyphen (eg. "elephant-ride") will split up a series of 
letters into two words (eg. "elephant" and "ride").
The abbreviated version of the word should have the first letter, then the number 
of removed characters, then the last letter (eg. "e6t-r2e").

*/

function abbreviate(string) {
  let remaining = string.slice(0)
  let abbreviated = "";

  while(findBreak(remaining) > -1) {
    let gap = findBreak(remaining)
    let currentWord = remaining.slice( 0, gap);

    abbreviated += abrev(currentWord) + remaining[gap]; 
    remaining = remaining.slice( gap + 1 );

  }
  abbreviated += abrev(remaining); 
  return abbreviated;
  
}

function abrev (word){
  if(word.length > 3) return word[0] + (word.length - 2) + word.slice(-1);
  return word;
}

function findBreak (string) {
  return string.search(/[^a-zA-Z]/);
}



- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 




// do While Way
function abbreviate(string) {
  let remaining = string.slice(0)
  let abreviated = "";
  do {
    let currentWord = remaining.slice( 0, findBreak(remaining) );
    abbreviated += abrev(currentWord); 
    remaining = remaining.slice( findBreak(remaining) );

  }while(findBreak(remaining) > -1)

  return abbreviated;
  
}









function findWord (string) {

}



- - - - - - - - - - 



[^a-z]








