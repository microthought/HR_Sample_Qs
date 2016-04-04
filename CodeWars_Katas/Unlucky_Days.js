/* INSTRUCTIONS

Friday 13th or Black Friday is considered as unlucky day. Calculate how many 
unlucky days are in the given year.

Find the number of Friday 13th in the given year.

Input: Year as an integer.

Output: Number of Black Fridays in the year as an integer.

Precondition: 1000 < |year| < 3000

Examples:

unluckyDays(2015) == 3
unluckyDays(1986) == 1

*/


// Tada!
function unluckyDays(year){
  let unlucky = 0;
  for (var i = 0; i < 12; i++) {
    if(new Date(year, i, 13).getDay() === 5){
      unlucky++;
    }
  }
  return unlucky;
}


// For Fun to Spook it up.

document.write("<h1>Want to know how many spooky Friday the 13th's there are in any given year?");
var userWants = prompt("Give me a year.");

function unluckyDays(year){
  let unlucky = 0;
  for (var i = 0; i < 12; i++) {
    if(new Date(year, i, 13).getDay() === 5){
      unlucky++;
    }
  }
  return unlucky;
}

switch(unluckyDays(userWants)) {
  case 1:
    document.write("<h1>Honestly, lame year.<br><br>Only 1 Dark Friday in " + userWants);
    break;
  case 2:
    document.write("<h1>Ooooh, kinda spooky!<br><br>2 Dark Fridays in " + userWants);
    break;
  case 3:
    document.write("<h1>Yikes! Not Safe!<br><br>There are 3 Dark Fridays in " + userWants + "!!");
    break;
}




//Works, but has extra scary var
function unluckyDays(year){
  for (var i = 0; i < 12; i++) {
    var scary = new Date(year, i, 13)
    if(scary.getDay() === 5){
      alert("Got one!")
    }
  }
}





