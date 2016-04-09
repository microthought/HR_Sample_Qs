//FizzBuzz Game Ternary conditional
for (var i = 1; i < 101 ; i++){
	i % 5 === 0 && i % 3 === 0 ? console.log("FizzBuzz") : 
	i % 5 === 0 ? console.log("Buzz") :
	i % 3 === 0 ? console.log("Fizz") : console.log(i)
}
