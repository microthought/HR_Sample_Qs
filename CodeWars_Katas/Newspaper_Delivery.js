/*		INSTRUCTIONS
You and your best friend Stripes have just landed your first 
high school jobs! You'll be delivering newspapers to your 
neighbourhood on weekends. For your services you'll be charging 
a set price depending on the quantity of the newspaper bundles.

The cost of deliveries is:

$3.85 for 40 newspapers
$1.93 for 20
$0.97 for 10
$0.49 for 5
$0.10 for 1

Stripes is taking care of the footwork doing door-to-door drops 
and your job is to take care of the finances. What you'll be 
doing is providing the cheapest possible quotes for your services.

Write a function that's passed an integer representing the amount 
of newspapers and returns the cheapest price. The returned number 
must be rounded to two decimal places.
*/

function cheapestQuote(newspapers) {
	let toCharge = 0;
	let toPayFor = newspapers;
	let addToTab = function (){
		toPayFor >= 40 ?
			(toCharge += 3.85, toPayFor -= 40) :
		toPayFor >= 20 ?
			(toCharge += 1.93, toPayFor -= 20) :
		toPayFor >= 10 ?
			(toCharge += 0.97, toPayFor -= 10) :
		toPayFor >= 5 ?
			(toCharge += 0.49, toPayFor -=  5) :
			(toCharge += 0.10, toPayFor -=  1) 
	}

	while (toPayFor > 0) {
		addToTab();
	}
	return Math.round(toCharge * 100)/100;
}

