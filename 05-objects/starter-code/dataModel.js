/**
 * Question 1
 * Let's create a data model for storing information about a class.
 */
var classInfo = {
	students:30,
	name:"Javascript",
	teacher:"Jacob",
	cost:4000

};

console.log(classInfo.teacher);
classInfo.cost=3500;
console.log(classInfo.cost);

/**
 * Question 2
 * Create a data model for a quiz for our class.
 */
var quizScience={
	question1: "C02 = ?",
	question2: "difhifhdhsfh",
	question3:"odfudfuiuf",
	totalPoints:100
};

console.log(quizScience.question1+" "+quizScience.totalPoints)

//another option - for pracice 
var newQuiz = new Object();
newQuiz.question1 = "What the hell man";
newQuiz.points = 100; 

console.log(newQuiz.points);