//FizzBuzz Game If/Else
for (var i = 1; i < 101 ; i++){
	if( i % 5 === 0 && i % 3 === 0){
		console.log("FizzBuzz");
	} else if(i % 5 === 0){
		console.log("Buzz");
	}else if(i % 3 === 0){
		console.log("Fizz");
	}else{
		console.log(i)
	}
}

//FizzBuzz Game Ternary conditional
for (var i = 1; i < 101 ; i++){
	i % 5 === 0 && i % 3 === 0 ? console.log("FizzBuzz") : 
	i % 5 === 0 ? console.log("Buzz") :
	i % 3 === 0 ? console.log("Fizz") : console.log(i)
}


//FizzBuzz Game Logical Operator?
for (var i = 1; i < 101 ; i++){
	var 



	i % 5 === 0 && i % 3 === 0 ? console.log("FizzBuzz") : 
	i % 5 === 0 ? console.log("Buzz") :
	i % 3 === 0 ? console.log("Fizz") : console.log(i)
}