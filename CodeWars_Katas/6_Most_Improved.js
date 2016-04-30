/* INSTRUCTIONS
When being graded in a subject or a course high marks are focused on the most 
but what about most improved? As a computer science teacher you would like to 
create a function which calculates the most improved students and rank them in 
a list.

Task

Your task is to compelete the function calculateImproved to return an array 
sorted by most improved as percentages.

Input

The input you will receive will be an array of students, students will be an 
object containing a name and array of marks (in order of acheived) the marks 
will be out of 100, a student can however have a mark of null if the test was 
not attempted (treat this as 0) 
Example of student Object: {name:'Henry, Johns',marks:[25,50]}

Output

The output expected will be an array of objects similar to the student object, 
containing the name and total improvement percentage out of the first and last 
mark given to calculate the overall improvement percentage. The output array 
must be sorted by most improved (Round the calculated improvement) If there is 
a tie in improvements then order by name.
Example of return Object: {name:'Henry, Johns',improvement:100}

Preloaded

The Student class has been preloaded with the constructor accepting two 
parameters a name and marks which should be an array of numbers.
*/


function calculateImproved(students){
	var results = [];
	for (var i = 0, len = students.length; i < len; i++){
		let stud = students[i];
		let numMarks = stud.marks.length - 1;
		let addStudent = {};
		addStudent.name = stud.name;
		addStudent.improvement = (!stud.marks[0]) ? 0 :
			(!stud.marks[numMarks]) ? -100 :
			Math.round((stud.marks[numMarks] / stud.marks[0] - 1) * 100)
		results.push(addStudent);
	}
	return results.sort(
		function(a,b) { 
			if(a.improvement < b.improvement) return 1;
			if(a.improvement > b.improvement) return -1;
			if(a.name > b.name) return 1;
			if(a.name < b.name) return -1;
			return 0;
		}
	);

}



var zample = [
{name:'Henry, Johns',marks:[25,50]},
{name:'Smith, Bill',marks:[10,100]},
{name:'Ford, Bob',marks:[60,90]},
{name:'Simpson, Steve',marks:[12,50]},
{name:'Griffin, Hank',marks:[2,100]}
]




var letters = ["a","e", "d", "b", "c"]
var fixed = letters.sort(function(a,b){return a.charAt(0) - b.charAt(0);});

console.log(fixed);



Create a sorted array of most improved student! - Expected: 
[{"name":"shaun, broad","improvement":477},{"name":"john, zip","improvement":238},{"name":"brendan, Johns","improvement":119},{"name":"john, Wish","improvement":100},{"name":"vinny, luck","improvement":25},{"name":"alex, cow","improvement":2},{"name":"dick, bright","improvement":-25},{"name":"santa, knight","improvement":-63},{"name":"frog, zip","improvement":-77},{"name":"cat, Act","improvement":-100}], instead got: 
[{"name":"shaun, broad","improvement":477},{"name":"john, zip","improvement":238},{"name":"brendan, Johns","improvement":119},{"name":"john, Wish","improvement":100},{"name":"vinny, luck","improvement":25},{"name":"alex, cow","improvement":2},{"name":"cat, Act","improvement":0},{"name":"dick, bright","improvement":-25},{"name":"santa, knight","improvement":-63},{"name":"frog, zip","improvement":-77}]


Create a sorted array of most improved student! - Expected: [{"name":"horse, King","improvement":112},{"name":"joe, Johns","improvement":33},{"name":"ash, Bug","improvement":0},{"name":"ash, zip","improvement":0},{"name":"john, luck","improvement":0},{"name":"frog, Act","improvement":-95},{"name":"jeff, star","improvement":-97},{"name":"frog, knight","improvement":-100},{"name":"roger, fire","improvement":-100},{"name":"vinny, Act","improvement":-100}], instead got: [{"name":"horse, King","improvement":112},{"name":"joe, Johns","improvement":33},{"name":"ash, Bug","improvement":0},{"name":"ash, zip","improvement":0},{"name":"frog, knight","improvement":0},{"name":"john, luck","improvement":0},{"name":"roger, fire","improvement":0},{"name":"vinny, Act","improvement":0},{"name":"frog, Act","improvement":-95},{"name":"jeff, star","improvement":-97}]


Create a sorted array of most improved student! - Expected: [{"name":"whimpy, white","improvement":235},{"name":"alex, plum","improvement":18},{"name":"lee, star","improvement":0},{"name":"leroy, Bug","improvement":0},{"name":"jeff, King","improvement":-53},{"name":"mary, cassie","improvement":-54},{"name":"alex, zip","improvement":-71},{"name":"lee, star","improvement":-88},{"name":"chosen one, white","improvement":-100},{"name":"vinny, bright","improvement":-100}], instead got: [{"name":"whimpy, white","improvement":235},{"name":"alex, plum","improvement":18},{"name":"chosen one, white","improvement":0},{"name":"lee, star","improvement":0},{"name":"leroy, Bug","improvement":0},{"name":"vinny, bright","improvement":0},{"name":"jeff, King","improvement":-53},{"name":"mary, cassie","improvement":-54},{"name":"alex, zip","improvement":-71},{"name":"lee, star","improvement":-88}]


