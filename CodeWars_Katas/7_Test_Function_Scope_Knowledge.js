/* INSTRUCTIONS

Write a function that adds from two invocations.

add(3)(4)  // 7
add(12)(20) // 32

*/


//attempt 3

var add = function(number){
return function(x){return number + x;}
}







// attempt 2 nope
var add =  function(num1,num2=0){

	var result = num1+num2;

	num2 = num1;

	return result;

};





//attempt 1 nope
function add (num){
	var hidden = function (num){
		var saved = num;
		return saved;
	}
	return hidden(num);
}





