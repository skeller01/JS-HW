// 1. Write an if/else conditional to assign the value of the description to 'even'
// if the random number is even and 'odd' if the number is odd. Use an equality check.
// var randomNumber = Math.floor(Math.random() * 100);
// var description;

// if(randomNumber%2===0){
// 	console.log('even');
// }else{
//  	console.log('odd');
// }

// // 2. Refactor your answer from number 1 to use truthiness/falsiness in place of the
// // equality check.
// if(randomNumber%2){
// 	console.log('odd');
// }else{
//  	console.log('even');
// }

// // 3. Refactor your answer from question 2 to use a ternary instead of an if/else
// // conditional.
// (randomNumber%2===0)?'even' :'odd';

// 4. Use a nested for loop to log whether each number is even or
// odd in the nested arrays.
// var nestedArrays = [
//   [1, 2, 3, 4, 5],
//   [5, 4, 3, 2, 1],
//   [10, 32, 67, 12],
//   [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)]
// ];

// for(i in nestedArrays){
// 	for(j in nestedArrays[i]){
// 		if(nestedArrays[i][j]%2===0){
// 			console.log('even');
// 			 // console.log(j);
// 		}else{
// 			console.log('odd')
// 			// console.log(j);
// 		}
// 	}
// // }

// function returnOne(text1,text2){
// 	if((Math.floor(Math.random() * 100)%2===0)){
// 		console.log(text1)
// 	}else{
// 		console.log(text2)
// 	}
// }

// for(i=0;i<1000;i++){
// 	returnOne("hixxxxx","hellyfsfhfdsfhfhsafh;so");
// 	}


	function passwordCheck(password){

		if(password.length<8){
			console.log(password)
		}else{
			console.log("too long")
		}
	}


var testWords = ["ghsifhdfhjfsjfsd","dhfsd"];
for(i in testWords){
	console.log(passwordCheck(testWords[i]))
}



