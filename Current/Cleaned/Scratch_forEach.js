var myArray = [1,2,3,4,5]

var myFnPlus2 = function(value){
	value += 2;
};


myArray.forEach(myFnPlus2);
console.log(myArray);

---

// Define the object that contains the callback function.
var obj = {
    showResults: function(value, index) {
        // Call calcSquare by using the this value.
        var squared = this.calcSquare(value);

        document.write("value: " + value);
        document.write(" index: " + index);
        document.write(" squared: " + squared);
        document.write("<br />");
    },
    calcSquare: function(x) { return x * x }
};

// Define an array.
var numbers = [5, 6];

// Call the showResults callback function for each array element.
// The obj is the this value within the 
// callback function.
numbers.forEach(obj.showResults, obj);

// Embed the callback function in the forEach statement.
// The obj argument is the this value within the obj object.
// The output is the same as for the previous statement.
numbers.forEach(function(value, index) { this.showResults(value, index) }, obj);

// Output:
//  value: 5 index: 0 squared: 25
//  value: 6 index: 1 squared: 36
//  value: 5 index: 0 squared: 25
//  value: 6 index: 1 squared: 36


---





var showResults = function(value, index) {
        // Call calcSquare by using the this value.
        var squared = calcSquare(value);

        document.write("value: " + value);
        document.write(" index: " + index);
        document.write(" squared: " + squared);
        document.write("<br />");
    };

var calcSquare = function(x) { return x * x };

var numbers = [3, 7];

numbers.forEach(showResults);


---


var pumpUp = function(value, index) {
	this[index] = value * value
    };


var numbers = [3, 7];

numbers.forEach(pumpUp,numbers);
console.log(numbers);

---

for(var i = 0, w = 5; i < 5; i++){
	console.log(i);
}

console.log("'i' is still " + i + "\n'w' is still " + w);



---
var tester = function(){
	
	for(var i = 0, w = 200; i < 100; i++){
		console.log(i);
	}
};
tester();
console.log("'i' is still " + i + "\n'w' is still " + w);








