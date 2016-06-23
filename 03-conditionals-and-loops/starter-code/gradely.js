/**
 * Question 1
 * Create a program that will grade a random test score between 0 and 100.
 *
 * Grading scale:
 * - An "A" is between [90 and 100]
 * - A "B" is between [80 and 90)
 * - A "C" is between [70 and 79)
 * - A "D" is between [60 and 69)
 * - An "F" is between [0 and 60)
 *
 * Log both the random number grade and its corresponding letter grade to the console.
 */

 var testScore = Math.random()*100;

console.log("One test score is "+ testScore);



function grader(testScore){
	if(testScore>=90 && testScore<=100){
		return "A";
	}else if(testScore>=80 && testScore<90){
		return "B";
	}else if(testScore>=70 && testScore<80){
		return "C";
	}else if(testScore>=60 && testScore<70){
		return "D";
	}else{
		return "F";
	}
}



for(i=1;i<21;i++){
	testScore=Math.random()*100;
	console.log(grader(testScore));
 }
 

/**
 * Question 2
 * Create a second random test score between 0 and 100. Calculate the average of the two test scores.
 * If the average is a "B" or better, log to the console "Well done!" else log "Better luck next time".
 *
 */

var firstTestScore= Math.random()*100;
var secondTestScore=Math.random()*100;

var average = (firstTestScore+secondTestScore)/2;

// Use a ternary to assign the message.
//var allowed = (age > 18) ? "yes" : "no";

var message = (average>=80)?"Well done!":"Better luck next time";
console.log(message);