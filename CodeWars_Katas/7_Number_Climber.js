/* INSTRUCTIONS

For every positive integer N, there exists a unique sequence starting 
with 1 and ending with N and such that every number in the sequence is 
either the double of the preceeding number or the double plus 1. For 
example, given N = 13, the sequence is [1, 3, 6, 13].

Write a function that returns this sequence given a number N. Try 
generating the elements of the resulting list in ascending order, 
i.e., without resorting to a list reversal or prependig the elements 
to a list.

*/


function climb(n){
  let a = [];
  while (n >=1) {
    a.unshift(n);
    n = Math.floor(n/2);
  }
  return a;
}