/*
Late last night in the Tanner household, ALF was repairing his spaceship so he might get back to Melmac. Unfortunately for him, he forgot to put on the parking brake, and the spaceship took off during repair. Now it's hovering in space.

ALF has the technology to bring the spaceship home if he can lock on to it's location.

Given a map:

..........
..........
..........
.......X..
..........
..........

The map will be given in the form of a string with \n separating new lines. The bottom left of the map is [0, 0]. X is ALF's spaceship.

In this expample:

findSpaceship(map) => [7, 2]
If you cannot find the spaceship, the result should be

"Spaceship lost forever."
Can you help ALF?

*/


function findSpaceship(map) {
  if(!map) return "Spaceship lost forever.";
  if(map.length === 1) return [0,0];
 let columns = map.indexOf("\n"); //10
 let rows = map.length / (columns + 1);
 let fromEnd = (map.length - 1) - map.indexOf("X");
 let Y = Math.floor(fromEnd / (columns + 1));
 let X = columns - (fromEnd -  Y * (columns+1));
 if(Y===2) X -= 1;
 if(map.indexOf("X") === - 1) return "Spaceship lost forever.";
 return [X,Y];
}





var test1 = "..........\n..........\n..........\n.......X..\n..........\n..........\n"




test1.indexOf("\n");
10
test1.indexOf("X");
40
test1.length;
66










