/*
 *
 * Question 1
 * Write a function that will "roll a dice". It should generate a random number between 1 and 6 and then log that to the console.
 * Call your function.
 *
 */
console.log("################################### Question 1  ###########################")
function rollDice(sides,rolls){
	var x = Math.random(); 
	for(i=1;i<=rolls;i++){
		x = Math.random();
		console.log(Math.round(x*(sides-1)+1,0))
	}	
		
}

rollDice(6,5);




/*
 *
 * Question 2
 * Write a function that will roll two dice. In addition to logging each dice's value, it should also log the sum.
 * Call your function.
 *
 */
console.log("################################### Question 2 ###########################")
function rollTwoDice(){
	rollDice(6,2);
}

rollTwoDice();


//Program shall log n dice rolls and the sum of those dice rolls
// for example, 2 dice, would be 4,3,7. 
// Those would be returned values 

console.log("################################### Question 3 ###########################")

//var batman = [1,2,3,5];
//First create a sumAll variable for handling the summation of an array
function sumAll(x){
	var count = 0; 
	for(i in x){
		count+=x[i]; 
	};

	return count;	
}

//Next use the sumAll function and rollDice function to sum up a series of rolls 
// we also want to roll n times and with x side, this will sum up the rolls. 
function rollAndSumDice(sides,rolls){
	var store = []; 
	for(i=0;i<=rolls;i++){
		x = Math.random();
		store[i]=Math.round(x*(sides-1)+1,0);
		//console.log(store[i]);
	      };
	console.log(store);
	return sumAll(store);	
		}

console.log(rollAndSumDice(6,6));

// console.log(rollAndSumDice(6,4));
// console.log(" #### the sum is: "+rollAndSumDice(6,2)+" ####");








// function sumAll(){
// 	var count = 0;
// 	for(var i = 0; i < arguments.length; i++)
// 		{
//     		count = count + arguments[i];
// 		}
// 	return count;
// 	};



