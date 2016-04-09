//FizzBuzz as a function with parameters for factors and top limit
var fizzBuzzer = function(fizzFactor, buzzFactor, top){
  var output = "";
  for(var i = 1; i <= top; i++) {
    if(i % fizzFactor === 0 && i % buzzFactor === 0){
      output += i + " " + "<strong>FIZZBUZZ!</strong><br>";
    } else if (i % fizzFactor === 0){
        output += i + " " + "<strong>Fizz!</strong><br>";
    } else if (i % buzzFactor === 0) {
      output += i + " " + "<strong>Buzz!</strong><br>";
    } else {
      output += i + "<br>";
    }
  }
  document.write(output);
};

fizzBuzzer(3,5,100);