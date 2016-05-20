/* INSTRUCTIONS

Create an algorithm to count the number of zeros that appear between 1 and N.

Examples:

There are 2 zeros from 1 to 20: 10, 20

There are 11 zeros from 1 to 100: 10, 20, 30, 40, 50, 60, 70, 80, 90, 100

countZeros(10); // returns 1
countZeros(100); // returns 11
countZeros(200); // returns 31

*/




function countZeros(n){
var counter = 0;
for(var i = 10; i<= n;i++){
  (i + "").split("").forEach(function(ele){ if(ele === "0") counter++ }  )
}
return counter;
}



// other attempt
function count0s = (acc, num) => num.toString()split.forEach(ele => ele === "0" ? acc++ : console.log("no"))


//bwahaha only up to 100!
function countZeros(n) { return n > 9 ? Math.floor(n/10) + countZeros(n/10) : 0 }
