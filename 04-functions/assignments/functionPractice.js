/*
 *
 * Question 1
 * Write a function that logs a random day of the week (i.e. 'Thursday')
 *
 */

function dayOfWeek(){
var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
var choice = Math.round(Math.random()*(7-1)+1,0);
console.log(days[choice]);
//console.log(choice);
}

dayOfWeek();
/*
*
* Question 2
* Write a function that has two numbers parameters and multiplies them together.
*
*/
function multNumbers(a,b){
	return a*b; 
}

console.log("5 and 4 "+multNumbers(5,4));

/*
*
* Question 3
* Write a function that takes an Array of numbers as an and logs the largest number in the Array.
*
*/
bigList = [1,3,4,30,5,10,9];

function findMax(x){
var bigNumber = x[0]
for(i=1;i<x.length;i++){
	if(bigNumber>x[i]){
		continue;
	}else{
		bigNumber=x[i];
	}
	}
	return bigNumber;
}


console.log(findMax(bigList));

/*
*
* Question 5
* Write a function that takes a String and logs the String reversed.
* Hint: Look up "split"
*
*/
var sentence = "Hi, I love this shit";
function reverseTheSentence(sentence){
newSentence = sentence.split("");
revereseSentence = newSentence.reverse();
finalSentence= revereseSentence.join("");
console.log(finalSentence);
}

reverseTheSentence(sentence);
/*
*
* Question 6
* Write a function that takes a given measurment in pounds to ounces. Return the result.
*
*/
function lbsToOzs(pounds){
	ounces=pounds*16;
	return ounces;
}

console.log("5 lbs = "+lbsToOzs(5)+"ozs");

/*
*
* Question 7
* Write a function that takes a given measurment in pounds to grams.
* Use the function from Question 6 to first convert to ounces. Return the result.
*
*/
function poundsToGrams(pounds){
	ounces = lbsToOzs(pounds);
	grams = 28.3495*ounces;
	return grams;
}

console.log("4 ounces = "+poundsToGrams(4)+"grams");

/*
*
* Question 8
* Write a function takes unlimited string parameters and returns them all concatenated together with a space in between each one.
* Hint: Use function "arguments" variable
*
*/
function bringTogether(){
	var sentence = "";
	for(i in arguments){
		//console.log(arguments[i]);
		sentence=sentence+arguments[i];
		sentence=sentence+" ";
	}
	return sentence;
	
}

console.log(bringTogether("f","44","y"));

/*
*
* Question 9
* Write a higher-order function takes takes a function paramter and calls it.
*
*/
