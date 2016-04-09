/*  INSTRUCTIONS
You might know some pretty large perfect squares. But what about the NEXT one?

Complete the findNextSquare method that finds the next integral perfect square 
after the one passed as a parameter. Recall that an integral perfect square is 
an integer n such that sqrt(n) is also an integer.

If the parameter is itself not a perfect square, than -1 should be returned. 
You may assume the parameter is positive.
*/

//Boom :D
function findNextSquare(sq) {
  let sqrt = Math.sqrt(sq);
  if(Number.isInteger(sqrt))
    return Math.pow((sqrt + 1), 2);
  return -1;
}