/*   INSTRUCTIONS
Given an array of integers, remove the smallest value. If there 
are multiple elements with the same value, remove the one with 
a lower index. If you get an empty array/list, return an empty 
array/list.

Don't change the order of the elements that are left.
*/

function removeSmallest(numbers) {
  if (numbers.length === 0) return numbers;
  let smallest = Math.min(...numbers);
  for (var i = 0, length = numbers.length; i < length; i++) {
    if(numbers[i] === smallest) {
    numbers.splice(i,1);
    return numbers;
    }
  }
}

// To test the function
var set = [1,3,-5,4];

removeSmallest(set);