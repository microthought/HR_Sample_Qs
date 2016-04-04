/* INSTRUCTIONS

Your task is to split the chocolate bar of given dimension n x m into small 
squares. Each square is of size 1x1 and unbreakable. Implement a function 
that will return minimum number of breaks needed.

For example if you are given a chocolate bar of size 2 x 1 you can split it 
to single squares in just one break, but for size 3 x 1 you must do two breaks.

If input data is invalid you should return 0 (as in no breaks are needed if 
we do not have any chocolate to split). Input will always be a non-negative integer.

*/

//First Try
var breakChocolate = function(n, m) {
  if(n < 1 || m < 1 || n === 1 && m === 1) return 0;
  var big = Math.max(n,m), small = n + m - big;
  return (big - 1) + big *(small - 1)
};


//Second try after realizing number properties :D
var breakChocolate = function(n, m) {
  return m && n ? m * n - 1 : 0
};