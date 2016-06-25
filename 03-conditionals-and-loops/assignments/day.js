// BONUS: What day? (day.js)
// Write a switch statement to log to the console the appropriate day name for a given number.
// 0: Sunday
// 1: Monday
// 2: Tuesday
// 3: Wednesday
// 4: Thursday
// 5: Friday
// 6: Saturday
// Write a second switch statement to log 'Weekday' or 'Weekend' based on a given number. Use fall-through.
var chooseNumber=prompt("Choose a number: 0 to 6");
console.log(typeOf(chooseNumber));

switch(chooseNumber){
	case '0':
		console.log("Sunday");
		break;
	case '1':
		console.log("Monday");
		break;
	case '2':
		console.log("Tuesday");
		break;
	case '3':
		console.log("Wednesday");
		break;
	case '4':
		console.log("Thursday");
		break;
	case '5':
		console.log("Friday");
		break;
    case '6':
		console.log("Saturday");
		break;
	default:
		console.log("Try Again?")
		chooseNumber=prompt("Choose a number: 0 to 6");
}

switch(chooseNumber){
	case ('1'||'2'||'3'||'4'||'5'):
		console.log("Weekday");
		break;
	case ('0'||'6'):
		console.log("Weekend");
		break;
	
}