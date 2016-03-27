/* INSTRUCTIONS

Create a function, getVillainName, that returns a villain name based on the user's birthday. (The birthday will be passed to the function as a valid Date object, so for simplicity, there's no need to worry about converting strings to dates.)

The first name will come from the month, and the last name will come from the last digit of the date.

Month -> first name

January -> "The Evil"
February -> "The Vile"
March -> "The Cruel"
April -> "The Trashy"
May -> "The Despicable"
June -> "The Embarrassing"
July -> "The Disreputable"
August -> "The Atrocious"
September -> "The Twirling"
October -> "The Orange"
November -> "The Terrifying"
December -> "The Awkward"
Last digit of date -> last name

0 -> "Mustache"
1 -> "Pickle"
2 -> "Hood Ornament"
3 -> "Raisin"
4 -> "Recycling Bin"
5 -> "Potato"
6 -> "Tomato"
7 -> "House Cat"
8 -> "Teaspoon"
9 -> "Laundry Basket"
The returned value should be a string in the form of "First Name Last Name".

For example, a birthday of November 18 would return "The Terrifying Teaspoon"
*/



function strongEnough(earthquake, age) {
	
	let quakePower = 1;

	for (let i = 0, length = earthquake.length; i < length; i++) {
		let shockwavepower = 0;
		for (let j = 0, l = earthquake[i].length; j < l; j++) {
			shockwavepower += earthquake[i][j];
		}
		quakePower *= shockwavepower;
	}	

	let buildingStrength = 1000 * Math.pow(.99, age);

	let message = buildingStrength > quakePower ?  "Safe!" :  "Needs Reinforcement!"

	return message;
}










