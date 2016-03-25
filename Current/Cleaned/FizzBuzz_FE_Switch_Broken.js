//Not sure how to get a switch case to evaluate an expression
var fizzBuzzer = function(fizzFactor, buzzFactor, top){
  var output = "";
  for(var i = 1; i <= top; i++) {
    switch(i) {
      case (i % fizzFactor === 0 && i % buzzFactor === 0) : 
        output += "FizzBuzz!<br>";
        break;
      case (i % fizzFactor === 0):
        output += "Fizz!<br>";
        break;
      case (i % buzzFactor === 0):
        output += "Buzz!<br>";
        break;
      default:
        output += i + "<br>";
    }
  }
  document.write(output);
};

fizzBuzzer(3,5,100);


