/* INSTRUCTIONS
For a given positive integer convert it into its English representation. All words are lower case and are separated with one space. No trailing spaces are allowed.

To keep it simple, hyphens and the writing of the word 'and' both aren't enforced. (But if you are looking for some extra challenge, such an output will pass the tests.)

Large number reference: http://en.wikipedia.org/wiki/Names_of_large_numbers (U.S., Canada and modern British)

Input range: 1 -> 10**26 (10**16 for JS)

Examples:

intToEnglish(1) == 'one'

intToEnglish(10) == 'ten'

intToEnglish(25161045656) == 'twenty five billion one hundred sixty one million forty five thousand six hundred fifty six'
or

intToEnglish(25161045656) == 'twenty five billion one hundred sixty-one million forty-five thousand six hundred and fifty-six'
*/


//Attempt 3 WORKS! 
function intToEnglish(number){
  let numberArray = number.toString().split("").reverse();
  let resultArray = [];
  for (var i = numberArray.length - 1; i >= 0; i--) {
    let num = parseInt(numberArray[i]);
    let nextNum = parseInt(numberArray[i-1]);
    switch(i) {
      case 14:
      case 11:
      case 8:
      case 5:
      case 2:
        if(num !== 0){
          resultArray.push(singles[num] + hundy);
        }
        break;
      case 16:
      case 13:
      case 10:
      case 7:
      case 4:
      case 1:
        if (num === 1) {
          resultArray.push(teens[nextNum]);
        } else {
          if (num > 1){
            resultArray.push(doubleDigits[num]);
          }
          if (nextNum > 0){
            resultArray.push(singles[nextNum]);
          }
        }
        break;
      case 15:
      case 12:
      case 9:  
      case 6:
      case 3:
      case 0:
        if (numberArray[i + 1] === undefined){
          resultArray.push(singles[num]); 
        }
        if(i > 0 && (numberArray[i+1] !== 0 || numberArray[i+1] !== 0) ) {
          resultArray.push(tripleDigits[i / 3]);
        }
        break;
    }
  }
  return resultArray.join(" ");
}

var singles = [
"",
"one",
"two",
"three",
"four",
"five",
"six",
"seven",
"eight",
"nine"
]

var teens = [
"ten",
"eleven",
"twelve",
"thirteen",
"fourteen",
"fifteen",
"sixteen",
"seventeen",
"eighteen",
"nineteen"
]

var doubleDigits = [
"",
"",
"twenty",
"thirty",
"forty",
"fifty",
"sixty",
"seventy",
"eighty",
"ninety",
]

var hundy = " hundred";

var tripleDigits = [
"",
"thousand",
"million",
"billion",
"trillion",
"quadrillion",
"quintillion",
"sextillion",
"septillion",
"octillion"
]


// For Funsies

var magic = prompt("Give me up to 16 digits");

alert("༼ つ ◕_◕ ༽つ Go Computer Go!!!\n\n" + intToEnglish(magic));



--- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
FIN     FIN     FIN     FIN     FIN     FIN     FIN     FIN     FIN  
--- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---








//scrap 2 ALMOST WORKS (spaces missing)
function intToEnglish(number){
  let numberArray = number.toString().split("").reverse();
  let result = "";
  for (var i = 8; i >=0 ; i--)
    if(numberArray[i]){
      let fragment = []
      let num = parseInt(numberArray[i]);
      let nextNum = parseInt(numberArray[i-1])
      switch(i) {
        case 8:
        case 5:
        case 2:
          if(numberArray[i] !== 0){
            result += singles[num] + " " + hundy;
          }
          break;
        case 7:
        case 4:
        case 1:
          if (num === 1) {
            result += teens[nextNum];
          } else {
            if (num > 1){
              result += doubleDigits[num];
            }
            result += singles[num];
          }
          break;
        case 6:
        case 3:
        case 0:
          if (numberArray[i + 1] === undefined){
            result += singles[num]; 
          }
          result += tripleDigits[i / 3];
          break;
    }
  }
  return result;
}















//scrap 1
function intToEnglish(number){
  let numberArray = number.toString().split("").reverse();
  let resultArray = [];
  for (var i = 0, len = numberArray.length; i < len; i++)
    let fragment = 
    switch(i) {
      case 1:
      case 4:
      case 7:
        if(numberArray[i] === 1){
          numberArray.unshift(teens[numberArray[i]])
        }

    }

}





var bigNum = 493840384038403;
var bigNumArray = bigNum.toString().split("").reverse();




switch





var bigin = ["a","b","c","d"];
var frag = ["e","f"];