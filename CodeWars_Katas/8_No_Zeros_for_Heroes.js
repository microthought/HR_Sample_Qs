/* INSTRUCTIONS

Numbers ending with zeros are boring.

They might be fun in your world, but not here.

Get rid of them. Only the ending ones.

1450 -> 145
960000 -> 96
1050 -> 105
-1050 -> -105
Zero alone is fine, don't worry about it. Poor guy anyway

*/




//beat it to death with code! (ya know, instead of dividing by 10)
function noBoringZeros(n) {
  if(n===0) return n;
  let derp = n.toString().split('');
  for(var i = derp.length - 1; i > -1; i--){
    if(derp[i] != "0"){ break; }
    if(derp[i] === "0"){derp.pop();}
  }
  return parseInt(derp.join(""));
}




//reverse-over-kill!!
function noBoringZeros(n) {
  let derp = n.toString().split('').reverse();
  for(var i = 0, l = derp.length; i < l; i++){
    if(derp[i] != "0"){ break; }
    if(derp[i] === "0"){derp.shift();}
  }
  return parseInt(derp.reverse().join(""));
}