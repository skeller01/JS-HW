//for each function 
function forEach(arr,func){
	for(i in arr){
		func(arr[i]);
	};
};


//testing the forEach function 
myArray=[1,2,3];

//create a square function 
function squareMe(x){
	return x*x;
};

//show off the forEach function 
squaredArray=forEach(myArray,squareMe);

//print off the new array
//won't print because forEach doesn't return anything
// console.log(squaredArray);