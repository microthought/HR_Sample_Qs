/* INSTRUCTIONS

Help Suzuki count his vegetables....

Suzuki is the master monk of his monastery so it is up to him to ensure the kitchen 
is operating at full capacity to feed his students and the villagers that come for 
lunch on a daily basis.

This week there was a problem with his deliveries and all the vegetables became mixed 
up. There are two important aspects of cooking in his kitchen, it must be done in 
harmony and nothing can be wasted. Since the monks are a record keeping people the 
first order of business is to sort the mixed up vegetables and then count them to 
ensure there is enough to feed all the students and villagers.

You will be given a string with the following vegetables:

"cabbage", "carrot", "celery", "cucumber", "mushroom", "onion", "pepper", "potato", 
"tofu", "turnip"
Return a list of tuples with the count of each vegetable in descending order. If 
there are any non vegetables mixed in discard them. If the count of two vegetables 
is the same sort in descending alphabetical order.

(119, "pepper"),
(114, "carrot"),
(113, "turnip"),
(102, "onion"),
(101, "tofu"),
(100, "cabbage"),
(93, "mushroom"),
(90, "cucumber"),
(88, "potato"),
(80, "celery")

*/


function countVegetables(string){

	var veggies = ["cabbage", "carrot", "celery", "cucumber", "mushroom", "onion", "pepper", "potato", 
"tofu", "turnip"];

	var count = [0,0,0,0,0,0,0,0,0,0];

	function counter(item){
		if(veggies.indexOf(item) > -1){
			++count[veggies.indexOf(item)];
		}
	}

	function compile (value, index){
		return value = [count[index], value];
	}

	string.split(/\s/).forEach(counter);

	return veggies.map(compile).sort(function(a,b){
		if(a[0] > b[0]) return -1;
		if(a[0] < b[0]) return 1;
		if(a[1] > b[1]) return -1;
		if(a[1] < b[1]) return 1;
		return 0;
	});
}





--- --- --- ---
    SCRAPS
--- --- --- ---




Expected: 
[[15,"turnip"],[15,"mushroom"],[13,"cabbage"],[10,"carrot"],[9,"potato"],[7,"onion"],[6,"tofu"],[6,"pepper"],[5,"cucumber"],[4,"celery"]], instead got: 
[[15,"turnip"],[15,"mushroom"],[13,"cabbage"],[9,"potato"],[9,"carrot"],[7,"onion"],[6,"tofu"],[5,"pepper"],[4,"cucumber"],[4,"celery"]]



s2 = `mushroom chopsticks chopsticks turnip mushroom carrot mushroom cabbage mushroom carrot tofu pepper cabbage potato cucumber 
 mushroom mushroom mushroom potato turnip chopsticks cabbage celery celery turnip pepper chopsticks potato potato onion cabbage cucumber
 onion pepper onion cabbage potato tofu carrot cabbage cabbage turnip mushroom cabbage cabbage cucumber cabbage chopsticks turnip pepper
 onion pepper onion mushroom turnip carrot carrot tofu onion tofu chopsticks chopsticks chopsticks mushroom cucumber chopsticks carrot
 potato cabbage cabbage carrot mushroom chopsticks mushroom celery turnip onion carrot turnip cucumber carrot potato mushroom turnip 
 mushroom cabbage tofu turnip turnip turnip mushroom tofu potato pepper turnip potato turnip celery carrot turnip`;






