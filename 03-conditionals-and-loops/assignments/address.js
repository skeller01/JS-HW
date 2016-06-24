// Random Address Generator (address.js)
// Write a script that can generate random addresses
// As a first step, create arrays that contain dummy data for each of the following: street number, street name, city name, state name and zip code
// Your script should randomly select one item from each of these arrays and then use them to construct a random address
// Each time you run the script, it should print a new randomly-generated address to the terminal. For example:
// node random-address.js
// => 34578 Dolphin Street, Wonka NY, 44506

//Create arrays for each element of an address
var streetNumber = Math.round(Math.random()*100,0);
var streetName = ["Oak Street","Willow Drive","Rebecca Street", "Waterbury Lane"];
var cityName = ["Washington", "New York City", "Chicago", "Los Angeles", "San Francisco"];
var stateName = ["DC","New York","Illinois","California"];
var zipCode = ["20001","13414","90210","43212"];

//create different random numbers to pull from the arrays 
var randStreetName = Math.round(Math.random()*streetName.length,0);
var randCityName = Math.round(Math.random()*cityName.length,0);
var randStateName = Math.round(Math.random()*stateName.length,0);
var randZipCode  = Math.round(Math.random()*zipCode.length,0);

console.log(streetNumber);
console.log(streetName[randStreetName]);
console.log(cityName[randCityName]);
console.log(stateName[randStateName]);
console.log(zipCode[randZipCode]);






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

