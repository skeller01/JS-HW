// 99 Bottles of Beer (bottles.js)
// Write a script that logs to the console the lyrics to "99 Bottles of Beer on the Wall" in the terminal. If you're unfamiliar with the song, you can find the lyrics here.
// Make sure your program can handle both singular and plural cases (i.e. both "100 bottles of beer" and "1 bottle of beer").

//lyrics
// x bottles of beer on the wall, x bottles of beer
// you take one down, pass it around, x-1 bottles of beer on the wall. 

//initialize sentences from the lyrics. 
var wall = " bottles of beer on the wall. ";
var bottles = " bottles of beer. ";
var down = " You take one down, pass it around, ";

//need singular 'bottle' when countdown is one bottle
var wall_1 = " bottle of beer on the wall. ";
var bottles_1 = " bottle of beer. ";
var down_1 = " You take it down, pass it around, "

//create a test variable with x 
var x = 99; 
//string together the sentence with the component variables
//create sentence variable 
var sentence = x+wall+x+bottles+down+(x-1)+wall;
//console.log(sentence);


//Beer count-down loop 
for(i=99;i>0;i--){
	//assign x to i for the countdown 
	x=i;
	//log 'sentence' which is defined for x
	//create a conditional to handle the singular case
	// i.e when there is one bottle left 
	// we also need to handle the case of 2 to 1 and 1 to 0
	// makes more sense to say 0 bottles then 0 bottle 
	if(x>2){
	console.log(x+wall+x+bottles+down+(x-1)+wall);
	}else if(x===2){
		console.log(x+wall+x+bottles+down+(x-1)+wall_1)
	}else{
		console.log(x+wall_1+x+bottles_1+down_1+(x-1)+wall);
	}
	//console.log(sentence);
}