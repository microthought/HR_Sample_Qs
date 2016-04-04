/* INSTRUCTIONS

Create a function strCount (takes an object as argument) that will count all 
string values inside an object. For example:

strCount({
  first: "1",
  second: "2",
  third: false,
  fourth: ["anytime",2,3,4],
  fifth:  null
  })
  //returns 3

*/

// Example object
var boop = {
  first: "1",
  second: "2",
  third: false,
  fourth: ["anytime",2,3,4],
  fifth:  null
  };



// Tada!

function strCount(obj){
  var strings = 0;
  for(prop in obj){
    if (typeof obj[prop] === "string") {
      strings++;
    } else if (Object.prototype.toString.call(obj[prop]) === "[object Array]" ||
                Object.prototype.toString.call(obj[prop]) === "[object Object]"){
      strings += strCount(obj[prop]);
    }
  }
  return strings;
}





// Works on single layer, but not recursive.

function strCount(obj){
  var strings = strings || 0;
  for(prop in obj){
    if (typeof obj[prop] === "string") {
      strings++;
    } else if (Object.prototype.toString.call(obj[prop]) === "[object Array]" ||
                Object.prototype.toString.call(obj[prop]) === "[object Object]"){
      for(key in obj[prop]) {
        if (typeof obj[prop][key] === "string") {
          strings++;
        }
      }
    }
  }
  return strings;
}










Object.prototype.toString.call(myVar)

var boop = {
  first: "1",
  second: "2",
  third: false,
  fourth: ["anytime",2,3,4],
  fifth:  null
  };

  for ( frog in boop) console.log(frog);