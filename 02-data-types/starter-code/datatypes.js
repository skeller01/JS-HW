/**
 * Question 1
 *
 * Calculate the distance between these two points and log the answer
 * to the console.
 *
 * (1, 3) and (4, 9)
 */

 //Math.pow(3,2)
 // this is 3 square = 3^2 

var x1 = 1;
var y1 = 3;
var x2 = 4; 
var y2 = 9; 

// Your code here
var distance
diff_x = (x2 - x1)*(x2 - x1);
diff_y = (y2 - y1)*(y2 - y1);
distance = Math.sqrt(diff_x+diff_y);

console.log(distance);
console.log("3^10 = "+ Math.pow(3,10));


/**
 * Question 2
 *
 * Calculate the volume of a sphere with a radius of 5.
 *
 */

 //Volume of a  sphere is 4/3 pi r^3

var radius = 5;
// Your code here
sphere = (4/3)*Math.PI*Math.pow(radius,3);
console.log(sphere);

/**
 * Question 3
 *
 * Log to the console a random number between 50 and 100.
 *
 */

// Your code here
for(i=1;i<100;i++){
console.log(Math.random()*(100-50)+50);
}

/**
 * Question 4
 *
 * Create variables to store your first name, last name, and age. Then use concatenation
 * to create a sentence about yourself. Log the sentence to the console.
 *
 */

 var firstName = 'Steve';
 var lastName = 'Keller';
 var age = '33';
// Your code here
console.log(firstName+" is an amazing "+lastName+" and he's only "+age+" years old!");
/**
 * Question 5
 *
 * Convert the sentence from question 4 to all caps so that it looks like you are
 * YELLING!
 *
 */
var sentence = firstName+" is an amazing "+lastName+" and he's only "+age+" years old!";
// Your code here
console.log(sentence.toUpperCase());
/**
 * Question 6
 *
 * Represent the following statement using booleans and logical operators.
 * Log the result of the logical expression to the console.
 *
 * The first president of the U.S.A. was George Washington and there are 52 states
 * or the capital is Washington D.C.
 */

var firstPresWashington = true;
var fiftyTwoStates = false;
var capWashDC = true; 
// Your code here
console.log(firstPresWashington&&fiftyTwoStates||capWashDC);