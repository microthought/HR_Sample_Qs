/* INSTRUCTIONS
Bob is preparing to pass IQ test. The most frequent task in this test is to 
find out which one of the given numbers differs from the others. Bob observed 
that one number usually differs from the others in evenness. Help Bob — to check 
his answers, he needs a program that among the given numbers finds one that is 
different in evenness, and return a position of this number.

! Keep in mind that your task is to help Bob solve a real IQ test, which means 
indexes of the elements start from 1 (not 0)

Examples :

iqTest("2 4 7 8 10") => 3 // Third number is odd, while the rest of the numbers 
are even

iqTest("1 2 1 1") => 2 // Second number is even, while the rest of the numbers 
are odd
*/

// Works!
  function iqTest(numbers){
    var numArray = numbers.split(" "),
        odds = [],
        evens = [];
    for (var i = 0, len = numArray.length; i < len; i++){
      if (parseInt(numArray[i]) % 2 === 0){
        evens.push(i+1);
      } else {
        odds.push(i+1);
      }
    }
    return odds.length > evens.length ? evens[0] : odds[0];
  }

var tester = "2 4 7 8 10";



// Mysteriously fails 1 of 5 tests...
function iqTest(numbers){
  
  var numArray = numbers.split(" ");
  var odds = 0;
  var evens = 0;
  var oddeven = numArray.map(function(value) {
    if (parseInt(value) % 2 === 0) {
      return "even";
      evens++;
    } else if (parseInt(value) % 2 === 1) {
      return "odd";
      odds++;
    }
  });

  if (odds > evens) {
    return oddeven.indexOf("even") + 1
  } else {
    return oddeven.indexOf("odd") + 1
  }
}


