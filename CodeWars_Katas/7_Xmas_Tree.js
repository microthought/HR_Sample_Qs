/* INSTRUCTIONS

Create a function xMasTree(height) that returns a christmas tree of the correct height. The height is passed through 
to the function and the function should return a list containing each line of the tree.

xMasTree(5) should return : ['____#____', '___###___', '__#####__', '_#######_', '#########', '____#____', '____#____']
xMasTree(3) should return : ['__#__', '_###_', '#####', '__#__', '__#__']
The final idea is for the tree to look like this if you decide to print each element of the list:

xMasTree(5) will result in:
____#____              1
___###___              2
__#####__              3
_#######_              4
#########       -----> 5 - Height of Tree
____#____        1      
____#____        2 - Trunk/Stem of Tree

xMasTree(3) will result in:
__#__                  1
_###_                  2
#####          ----->  3 - Height of Tree
__#__           1
__#__           2 - Trunk/Stem of Tree
Pad with underscores i.e _ so each line is the same length. The last line forming the tree having only hashtags, 
no spaces. Also remember the trunk/stem of the tree.

*/


function xMasTree(n){
	if(n<1) return [null, null];
  var maxwidth = n * 2 -1;
  var rowcount = 1;
  var results = [];
  //var padnum = (maxwidth + 1) / 2 - rowcount;

  while (rowcount <= n) {
    var row = "";
    var padding = repeater(n - rowcount,"_");
    var bush = repeater(rowcount * 2 - 1,"#")
    row += padding + bush + padding;
    results.push(row);
    rowcount++;
  }
  var row = "";
  var padding = repeater(n - 1,"_");
  var stump = "#";
  row += padding + stump + padding;
  results.push(row);
  results.push(row);

  return results;
}



function repeater (times, character){
  var str = "";
  for(var i = 0 ; i < times; i++){
      str += character;
    }
  return str;
}







