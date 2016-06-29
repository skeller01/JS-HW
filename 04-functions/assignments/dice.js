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


//Program shall log n dice rolls and the sum of those dice rolls
// for example, 2 dice, would be 4,3,7. 
// Those would be returned values 

function sum(){
	var count = 0;
	for(var i = 0; i < array.length; i++)
		{
    		count = count + array[i];
		}
	return count; 
	};

function nRolls(rolls){
	console.log(3);
	console.log(4);
	
}