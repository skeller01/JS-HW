//testing the forEach function 
myArray=[1,2,3]

//create a square function 
function squareMe(x){
	return x*x;
}

//show off the forEach function 
squaredArray=myArray.forEach(squareMe);

//print off the new array
console.log(squaredArray);