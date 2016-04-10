- - - - - - - - - - - - - -
Defining Objects quicker
- - - - - - - - - - - - - -

//Some variables to make properties
let name = "Sam";
let age = 45;
let friends = ["Brook", "Tyler"];

// Old Way

let user = { name: name, age: age, friends: friends };

// New Way!!!

let user = { name, age, friends };


- - - - - - - - - - - - - -
Making Strings
- - - - - - - - - - - - - -

//Before
let fullName = first + " " + last;

// Now
let fullName = `${first} ${last}`;

//The back-ticks define the limits of your string, and inside spaces and line breaks 
// are preserved. To get some java in there start with $ then put it inside { }


- - - - - - - - - - - - - - - - - - - - - -
Inside an object, you dont need to use 
"function" keyword to define method
- - - - - - - - - - - - - - - - - - - - - -






- - - - - - - - - - - - - -
Object.assign
- - - - - - - - - - - - - -



Object.assign (whereToAssignTo, sourceObject1, sourceObject2)

//Overides from left to right, so the last one has the last say :)


ie   let settings = Object.assign( {} , defaults, extraOptions )

//This way, nothing gets mutated because it goes into blank object, and defaults get overridden




- - - - - - - - - - - - - -
Array destructuring woop woop!
- - - - - - - - - - - - - -

var callSigns = ["alpha", "bravo", "charlie"];

//Old way

let a = callSigns[0];
let b = callSigns[1];
let c = callSigns[2];

// Lickety Split flaster way

var [a, b, c] = callSigns;

console.log(b); // bravo!!

//What if b is for Biotch and we don't like bad words??


var callSigns = ["alpha", "biotch", "charlie"];

var [a, , c] = callSigns; // leave index 1 blank, won't get assigned "b" = undefined

//What about rest parameters?

let [first, ...rest] = callSigns;

-> first = alpha     rest = [bravo, charlie]








- - - - - - - - - - - - - -
For IN For OF
- - - - - - - - - - - - - -


let names = ["Mike", "Steve", "Bella"];


//For IN
for(let index in names){
	console.log(names[index]);
}


//For OF

for(let name of names){
  console.log(name);
}





- - - - - - - - - - - - - -
Array.find method 
- - - - - - - - - - - - - -

let usersArray = [
{user data...}, 
{user data...}, 
{user data...}];


//If what is RETURNED is TRUE, then the argument USER that acheived that true will be returned.
let admin = usersArray.find ( function(user) { return user.admin; } )

........

but

function(user) { return user.admin; }

is just like

(user) => {return user.admin;}

is just like

user => user.admin

THEREFORE

let admin = usersArray.find ( user => user.admin )

is cleaner than

let admin = usersArray.find ( function(user) { return user.admin; } )


........



- - - - - - - - - - - - - - - - - - - -
Fun with Cartography!!! AKA MAKING MAPS
- - - - - - - - - - - - - - - - - - - -

let user1 = { name: "Sam" };
let user2 = { name: "Bob" };

// Make the map
let howOld = new MAP();

//Assign key & value
howOld.set (user1, 25 );
howOld.set (user2, 33 );

//Notice, how you have a WHOLE OBJECT as a key :D

NOW GET SOME VALUES!!

console.log( howOld.get(user1) ); // 25
console.log( howOld.get(user2) ); // 33

[GET] SOME!

..........




let mapSettings = new Map();

mapSettings.set( "user", "Sam");
mapSettings.set( "topic", "ES2015");
mapSettings.set( "replies", ["Can't wait!"], ["So cool"] );

for(let [key, value] of mapSettings) {
  console.log(`${key} = ${value}`);
}

CONFUSED!? YOUR SHOULD BE! EACH ELEMENT OF MAP IS AN ARRAY.

THUS, EACH ELEMENT OF mapSettings is an ARRAY [Key, Value], and the MAP then... Well,
IT is basically an array Of TWO Element Arrays :D



......................................................................
WeakMap  is just like a Map, but only objects can be keys. NO STRINGS!
......................................................................
  - not iterable!
  - any of the methods get, set, delete require a key like "mapSettings.get(user)" or something



















