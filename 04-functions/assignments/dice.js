/*
 *
 * Question 1
 * Write a function that will "roll a dice". It should generate a random number between 1 and 6 and then log that to the console.
 * Call your function.
 *
 */

function rollDice(sides,rolls){
var x = Math.random(); 
for(i=1;i<=rolls;i++){
	x = Math.random();
	console.log(Math.round(x*(sides-1)+1,0))
	
}
}

//rollDice(6,1);




/*
 *
 * Question 2
 * Write a function that will roll two dice. In addition to logging each dice's value, it should also log the sum.
 * Call your function.
 *
 */
function rollTwoDice(){
	rollDice(6,2);
}

rollTwoDice();
