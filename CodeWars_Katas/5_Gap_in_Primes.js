/* INSTRUCTIONS

The prime numbers are not regularly spaced. For example from 2 to 3 the 
gap is 1. From 3 to 5 the gap is 2. From 7 to 11 it is 4. Between 2 and 
50 we have the following pairs of 2-gaps primes: 3-5, 5-7, 11-13, 17-19, 
29-31, 41-43

A prime gap of length n is a run of n-1 consecutive composite numbers 
between two successive primes (see: http://mathworld.wolfram.com/PrimeGaps.html).

We will write a function gap with parameters:

g (integer >= 2) which indicates the gap we are looking for

m (integer >= 2) which gives the start of the search (m inclusive)

n (integer >= m) which gives the end of the search (n inclusive)

In the example above gap(2, 2, 50) will return [3, 5] which is the first 
pair between 2 and 50 with a 2-gap.

So this function should return the first pair of two prime numbers spaced 
with a gap of g between the limits m, n if these numbers exist otherwise 
nil or null or None or Nothing (depending on the language).

Examples:

gap(2, 5, 7) --> [5, 7]

gap(2, 5, 5) --> nil

gap(4, 130, 200) --> [163, 167]

([193, 197] is also such a 4-gap primes between 130 and 200 but it's not 
the first pair)

gap(6,100,110) --> nil : between 100 and 110 we have 101, 103, 107, 109 
but 101-107is not a 6-gap because there is 103in between and 103-109is not 
a 6-gap because there is 107in between.

Ref

https://en.wikipedia.org/wiki/Prime_gap


*/



function gap(g, m, n) {
  for ( var i = m; i <=n; i++){
    if(isPrime(i)){
      if(isPrime(i+g)){
        let match = true;
        for(var j = i+1, lim = i+g-1; j < lim; j++){
          if(isPrime(j)) {
            match = false;
            break;
          }
        }
        if (match) return [i, i+g];
      }
    }
  }
  return null;
}


function isPrime(number){
  if(number < 2) return false;
  let sqrt = Math.sqrt(number);
  if( number%2 === 0) return (number===2);
  if( number%3 === 0) return (number===3);
  for ( var i = 5; i <= sqrt; i += 6){
    if(number % i === 0) return false;
    if(number % (i+2) === 0) return false;
  }
  return true;
}



















