
// Relying on your newfound knowledge of loops, combine loops and if/else statements together and incrementally build the fuzzbizz loop.

// - In the loop, every time a string's length is divisible by **3**, instead of logging the number itself, the word "fuzz" should appear.
// - If the string's length is divisible by  **5**, the word "bizz" should be logged.
// - If the string's length is divisible by both **3** and  **5**, then the word "fuzzbizz" should be logged.

// Follow the steps below.

var words = [
  'overconfident',
  'receipt',
  'ring',
  'material',
  'whispering',
  'astronautically',
  'typical',
  'stretch',
  'side',
  'upset',
  'river',
  'excellent',
  'tame',
  'pseudopseudohypoparathyroidism',
  'cry',
  'kill',
  'damp',
  'aback',
  'various',
  'ordinary',
  'tense',
  'pass',
  'picayune',
  'gray',
  'berserk',
  'magenta',
  'birds'
];

// ##### Step 1:
// Construct a for loop that iterates through the word array, and `console.log()`'s out the length of each string.

//print out the directions and requirements for fuzz bizz and fuzzbizz
console.log("Fuzz if divisible by 3");
console.log("Bizz if divisible by 5");
console.log("Fuzz if divisible by 3 and 5 then fuzzbizz");



//Full for loop for fuzzbuzz
for(i in words){
  //console.log("the word is " +words[i]+" and the length is "+words[i].length);
  if(words[i].length%3===0 && words[i].length%5===0){
    console.log("fuzzbizz"+" "+words[i]+" "+"the count is "+words[i].length);
  }else if(words[i].length%5===0){
    console.log("bizz"+" "+words[i]+" "+"the count is "+words[i].length);
  }else if(words[i].length%3===0){
    console.log("fuzz"+" "+words[i]+" "+"the count is "+words[i].length);
  }

  else{
    console.log("The word is "+words[i]+" "+"and the length is "+words[i].length);
  }
}


// ##### Step 2:
// Add an `if/else` statement that logs the string `"fuzz"` if the value being iterated over has a length divisible by `3`; otherwise, log out the length.
// Hint: Remember the "modulus" operator.


// ##### Step 3:
// Add an `else if` clause that logs the string `"bizz"` if the value being iterated over has a length divisible by `5`.


// ##### Step 4:
// Add an additional clause that logs the string `"fuzzbizz"` if the value being iterated over has a length divisible by both `3` and `5`.
// Hint: You may have to change the order.
