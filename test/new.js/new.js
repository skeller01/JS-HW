//Practice program 

// create program that sums x consecutive digits 

var totalCount = function(top){
	var sum = 0;

	for(i=1;i<(top+1);i++){
		sum=i+sum;
		console.log('the sum is '+sum+' '+'the current i value is '+i);
				};

	console.log('The total is'+' '+sum);

};

totalCount(100)