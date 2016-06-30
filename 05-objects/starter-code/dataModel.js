/**
 * Question 1
 * Let's create a data model for storing information about a class.
 */
var myClass = {
     name: 'Spaceology 101',
     startDate: '12/10/2020',
     school: 'GA',
     instructor: {
         firstName: 'Jane',
         lastName: 'Doe',
         age: 29
     },
     students: [
         {
             name: 'Jill',
             age: 24,
             grades: [0.95, 0.89]
         },
         {
             name: 'Bill',
             age: 34,
             grades: [0.87, 0.94]
         }
     ]
 };

//console.log(classInfo.lastName);
//classInfo.cost=3500;
//console.log(classInfo.cost);

//this gets the second student's grade. good example 
console.log(myClass.students[1].grades[1]);

/**
 * Question 2
 * Create a data model for a quiz for our class.
 */
var quizScience={
	questions:
	{
	question1: "C02 = ?",
	question2: "difhifhdhsfh",
	question3:"odfudfuiuf"
	},
	totalPoints:100
};

console.log(quizScience.questions.question2)

//console.log(quizScience.question1+" "+quizScience.totalPoints)

//another option - for pracice 
//var newQuiz = new Object();
//newQuiz.question1 = "What the hell man";
//newQuiz.points = 100; 

//console.log(newQuiz.points);