# LearningToCode
Just looking for ways to get more fluent with JavaScript.

Will save all the practice problems I find here, all feedback welcome :)

-Michael


```javascript
/*
//====================\\
//     Start Here     \\
//====================\\
1. Read, understand the pattern
  -> ie. a calls b, b calls c, c returns to b, b returns to a
2. Predict the output before running it.

*/

var a = function(n){
  var val = 1 + b(n+2);
  return val;
}

var b = function(n){
  var val = 2 + c(n+2);
  return val;
}

var c = function(n){
  var val = "hi!" + n;
  return val;
}

a(5); // UNCOMMENT this line to run



/*
//====================\\
//     Visualize!     \\
//====================\\
1. Read, it's the same code
2. Predice the print order for the logs
3. Run it... notice: In in in... then out out out -> Done

*/

var a = function(n){
  console.log("Start 'a' n:", n);
  var val = 1 + b(n+2);
  console.log("'a', computed val:", val);

  console.log('DONE!');
  return val;
}

var b = function(n){
  console.log("  Start 'b' n:", n);
  var val = 2 + c(n+2);
  console.log("  'b', computed val:", val);
  return val;
}

var c = function(n){
  console.log("    Start 'c' n:", n);
  var val = "hi!" + n;
  console.log("    'c', computed val:", val);
  return val;
}

// a(5); // UNCOMMENT this line to run

```
