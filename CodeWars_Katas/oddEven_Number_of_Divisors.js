/* INSTRUCTIONS
Given an integer n return 'odd' if the number of its divisors is odd. Otherwise return 'even'.

Examples:

All prime numbers have exactly two divisors (hence 'even')

For n=12 the divisors are [1,2,3,4,6,12] – 'even'

For n=4 the divisors are [1,2,4] – 'odd'
*/


//Attempt 1 (times out)
function oddity(n){
  let index    = 1,
      divisors = 0;
  while (index <= n){
    if (n % index === 0) {divisors++;}
    index++;
  }
  return (divisors % 2) ? "odd" : "even"
}


//Attempt 2: Only check up to Square Root!

function oddity(n){
  let index    = 1,
      divisors = 0,
      limit = Math.sqrt(n);
  while (index <= limit){
    if (n % index === 0) {divisors+=2;}
    index++;
  }
  //If n is a square root, that square root is only 1 divisor not 2
  if(index - 1 === limit) {divisors--;}
  return (divisors % 2) ? "odd" : "even"
}















