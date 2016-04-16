/* INSTRUCTIONS

Paths in the Grid

You have a grid with m rows and n columns.
Return number of ways that you can start from point A to reach point B.
you are only allowed to move right and up.

alt text

In the picture, there are 10 pathes from A to B.

Hint: Use mathematical permutation and combination
*/

//Final
function numberOfRoutes(m, n){
  function factorial (num){
      for(var i = num - 1; i > 0; i--){ num *= i; }
    return num;
  }
  return Math.round(factorial(m+n)/factorial(m)/factorial(n));
}







//err scratch work

function numberOfRoutes(m, n){
  let big = Math.max(m,n), small = Math.min(m,n), sum = m+n;
  function factorial (num){
      for(var i = num - 1; i > 0; i--){ num *= i; }
    return num;
  }

  for(var i = big - 1; i > 0; i--){
    big *= i;
  }
   for(var i = small - 1; i > 0; i--){
    small *= i;
  }
  for(var i = sum - 1; i > 0; i--){
    sum *= i;
  }


  return sum/big/small;
}