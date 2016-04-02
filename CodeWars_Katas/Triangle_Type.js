/* INSTRUCTIONS

In this kata, you should calculate type of triangle with three given sides a, b and c 
(given in any order).

If all angles are less than 90°, this triangle is acute and function should return 1.

If one angle is strictly 90°, this triangle is right and function should return 2.

If one angle more than 90°, this triangle is obtuse and function should return 3.

If three sides cannot form triangle, or one angle is 180° (which turns triangle into 
segment) - function should return 0.

Input parameters are sides of given triangle. All input values are non-negative 
floating point or integer numbers (or both).

  0 : if ᐃ cannot be made with given sides
  1 : acute ᐃ
  2 : right ᐃ
  3 : obtuse ᐃ

*/



function triangleType(a, b, c) {
	var lilSide = Math.min(a,b,c),
		bigSide = Math.max(a,b,c),
		midSide = (a + b + c) - (lilSide + bigSide),
		lilSquared = lilSide * lilSide,
		bigSquared = bigSide * bigSide,
		midSquared = midSide * midSide;

	if (bigSide >= lilSide + midSide){
		return 0;
	} 
	else if(bigSquared < midSquared + lilSquared) {
		return 1;
	} 
	else if(bigSquared === midSquared + lilSquared){
		return 2;
	}
	else if(bigSquared > midSquared + lilSquared){
		return 3;
	}
}









console.log(lilSide +" "+ midSide +" "+ bigSide)





var a = 3,
	b = 4,
	c = 5;







