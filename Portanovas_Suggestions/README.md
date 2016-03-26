###1) FizzBuzz
Write a program that prints the numbers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz"

###2) Map

Create a function called "map" that takes an array of values and a function as arguments,  and applies that function to each value in the array, and returns an array of modified values.

map([1,2,3,4], add2Fn) // should return [3,5,6,7]

map([1,2,3,4], subtract2Fn) // should return [-1,0,1,2]

map([1,2,3,4], multiply2Fn) // should return [2,4,6,8]

###3) Reduce

Create a function called "reduce"** that takes an array of values and a function as arguments,  and applies that function against an accumulator and each value of the array (from left-to-right) to reduce it to a single value. (I heard that this was an actual question at one point)

reduce([1,2,3,4], addFn) // should return 10

reduce([1,2,3,4], subtractFn) // should return -10

reduce([1,2,3,4], multiplyFn) // should return 24
