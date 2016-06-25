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
//var chooseNumber=1;

//give directions to the user for both starting and stopping the game
console.log("Please pick a number from 0 to 6");
console.log("When you're done, please press ctrl+c to exit");
console.log("You can also type 'quit' ");

//take text and run the relevant switch statements 
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  var util = require('util');

  process.stdin.on('data', function (text) {
    //console.log('received data:', util.inspect(text));
    day(text);
    weekend(text);
    if (text === 'quit\r\n') {
      done();
    }
  });

  function done() {
    console.log('Now that process.stdin is paused, there is nothing more to do.');
    process.exit();
  }

//switch statement definitions for both the day and weekend/not weekend
function day(util){
		switch(util){
			case "0\r\n":
				console.log("Sunday");
				break;
			case "1\r\n":
				console.log("Monday");
				break;
			case "2\r\n":
				console.log("Tuesday");
				break;
			case "3\r\n":
				console.log("Wednesday");
				break;
			case "4\r\n":
				console.log("Thursday");
				break;
			case "5\r\n":
				console.log("Friday");
				break;
		    case "6\r\n":
				console.log("Saturday");
				break;
			default:
				console.log("Try Again?");
				
		};

		
			}

	//code weekend function with fall-through
	function weekend(util){
			switch(util){
			case "0\r\n":		
			case "6\r\n":
				console.log("Weekend");
				break;
			case "1\r\n":								
			case "2\r\n":				
			case "3\r\n":		
			case "4\r\n":
			case "5\r\n":
				console.log("Weekday");
				break;
			default:
				console.log("Try Again?");
	
			}
		};	