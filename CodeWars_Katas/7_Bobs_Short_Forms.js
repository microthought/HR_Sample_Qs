/* INSTRUCTIONS

Bob is a theoretical coder - he doesn't write code, but comes up with theories, 
formulas and algorithm ideas. You are his secretary, and he has tasked you with 
writing the code for his newest project - a method for making the short form of 
a word. Write a function shortForm(C# ShortForm, Python short_form) that takes 
a string and returns it converted into short form using the rule: Remove all 
vowels, except for those that are the first or last letter. Do not count 'y' as 
a vowel, and ignore case. Also note, the string given will not have any spaces; 
only one word, and only Roman letters. 
Example:

shortForm("assault");
short_form("assault")
ShortForm("assault");
// should return "asslt"


Also, FYI: I got all the words with no vowels from 
https://en.wikipedia.org/wiki/English_words_without_vowels

*/

//My submission OK
function shortForm(str) {
  var start = str.match(/^[aeiou]/gi) || [];
  var meat = str.match(/[^aeiou]/gi) || [];
  var end = str.match(/[aeiou]$/gi) || [];
  return start.join("") + meat.join("") + end.join("")
}


//My rework after seing solutions :D
function shortForm(str) {
 return str[0] + str.slice(1, str.length - 1).replace(/[aeiou]/gi, "") + str[str.length-1];
}






//first try nope!
function shortForm(str) {
  return str.replace(/([aeiou]?[^aeiou]+)[aeiou]*([^aeiou]+)/gi, "$1$2");
}





JUNK JUNK JUNK ALL JUNK BELOW












-------------------

.replace(/([\w ]+), ([\w ]+)/g, "$2 $1"));

"assault".replace(/([aeiou]?[^aeiou]+)[aeiou]*([^aeiou]+)/gi, "$1$2");


-------------------

var nonVowel = /[^aeiou]/gi;
var reg = /e/gi;

var fixer = /^[aeiou]+? [^aeiou]+       /gi

//reg.match("Thelen");

"aThelena".match(reg);




var boop = /^[aeiou]?[^aeiou]/gi;



var buster = "Athelena";


var start = buster.match(/^[aeiou]/gi);
var meat = buster.match(/[^aeiou]/gi);
var end = buster.match(/[aeiou]$/gi);

var derp =  start.join("") + meat.join("") + end.join("")




