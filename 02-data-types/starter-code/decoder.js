/**
 * Question 1
 * Create an empty array and store it in a variable named code.
 */

 // Your code here
var code = [];
 /**
  * Question 2
  * Add the following characters to the end of the code array:
  * 'x', 'e', 's', 'a', 'b', 'l', 'p', 'e', 'h', 'n',
  * 'i', 't', 'l', 'a', 'v', 'o', 'x', 'e', 'r',
  * 'o', 'm', 'c'
  */
  code.push('x', 'e', 's', 'a', 'b', 'l', 'p', 'e', 'h', 'n','i', 't', 'l', 'a', 'v', 'o', 'x', 'e', 'r','o', 'm', 'c');

  console.log(code);

// Your code here

/**
 * Question 3
 * Remove the first and last elements of the array.
 * Hint: You may need to look up a method we haven't talked about.
 */

// Your code here
//console.log(code);
code.pop();
code.shift();
console.log(code);

/**
 * Question 4
 * Reverse the array.
 */

// Your code here
code.reverse();
console.log(code);
/**
 * Question 5
 * Replace the 5th element and 14th element with space characters.
 * Hint: remember indexes start at 0!
 */

// Your code here
code[4]=" ";
code[13]=" ";
console.log(code);
/**
 * Question 6
 * Join the array with an empty String in between each character and log the
 * result to the console.
 */

 // Your code here
code.join("");
console.log(code);



