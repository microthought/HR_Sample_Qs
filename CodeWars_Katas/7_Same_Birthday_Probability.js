/*

Given n number of people in a room, calculate the probability that any two people 
in that room have the same birthday (assume 365 days every year = ignore leap year). 
Answers should be two decimals unless whole (0 or 1) eg 0.05

*/


function calculateProbability(n){
  var totalProb = 0;
  var pie = 1;
  for(var i = 1; i < n; i++){
    totalProb += pie * ( i/365 );
    pie = 1 - totalProb;
  }
  return Math.round(totalProb * 100)/100
}










// Nope
function calculateProbability(n){
  return n > 1 ? Math.min(Math.round( ( (n-1)/365 + calculateProbability(n-1) ) * 100) / 100, 1) : 0
}