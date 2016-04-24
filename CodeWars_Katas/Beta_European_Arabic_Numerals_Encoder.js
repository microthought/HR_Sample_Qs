/* INSTRUCTIONS

The purpose of this Kata is to have others understand that complex-sounding 
labels do not necessarily indicate complexity.

Arabic numerals were introduced to Europe by Leonardo Fibonacci in his book 
Liber Abaci. This introduced the usage of zero, as well as common decimal 
notation to the West. The purpose of this kata is to encourage you to the 
review the evolution of the mathematical concept of numerals as this history 
is often taken for granted. Before Fibonacci, the Western world didn't advance 
much in mathematics simply because of the representation of numbers as Roman numerals.

You will complete the provided functions of the ArabicNumerals object.

With the encode function, you will convert a number to a string of Arabic numerals
With the decode function, you will convert a string of Arabic numerals to a number
The type of Arabic numerals you will be encoding is of the European variety
The character "." will be used to signify a decimal point.
Hint: European Arabic Numerals are the kind used in most programming languages to signify numbers.


*/

//Crap, so the answer was actually way simpler than I thought....
ArabicNumerals = {
  // accepts a number and returns a string in Arabic Numerals
  encode: function (x) {
    return x.toString();
  },
  // accepts a string in Arabic numerals and returns a number
  decode: function (x) {
    return parseFloat(x);
  }
};






//So... I thought this was to convert to ROMAN NUMERALS!!!!
ArabicNumerals = {
 
  encode: function (x = 0) {
    return x.toString().replace(/\d/g, function(match, offset){ return this.romans[x.toString().length - offset][match] });
  },

  decode: function (x) {
  let answer = 0;
  for(var i = 0, len = x.length;i < len; i++){
    if(i+1 === len || this.values[x.charAt(i)] >= this.values[x.charAt(i+1)]) { answer += this.values[x.charAt(i)]; }
      else { answer -= this.values[x.charAt(i)]; }
  }
  return answer.toString();
  },

  romans: [
  ["blank"],
  ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
  ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
  ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],
  ["", "M", "MM", "MMM"],
  ],

  values: { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 }
};





















