// ## 1. Given then following API, create a model object with mock data.
//
var Model = {
	token: "kjksdhw232j",
	scores:[
	{
        "points": 14,
        "user": "john",
        "winning": true
    },
    {
        "points": 10,
        "user": "jane",
        "winning":false
       }
	],
	currentGame:{
		{
	    "name": "Test Game",
	    "roundsPlayed": 2,
	    "leader": "john"
		}
	}
};
// **GET /login**
//\
// *Response Body*
//
// ```json
// {
//     "token": "kjksdhw232j"
// }
// ```
//
// **GET /scores**
//
// *Response Body*
//
// ```json
// [
//     {
//         "points": 14,
//         "user": "john",
//         "winning": true
//     },
//     {
//         "points": 10,
//         "user": "jane",
//         "winning": false
//     }
// ]
// ```
//
// **GET /current-game**
//
// *Response Body*
//
// ```json
// {
//     "name": "Test Game",
//     "roundsPlayed": 2,
//     "leader": "john"
// }


// 2. Using the model object from question 1, create a handlebars template that can render the standings if the user is logged in. The resulting HTML should look like this:
//
// ```html
// <ul class="standings">
//     <li class="winning">
//         <h3>John</h3>
//         <h4>14 points</h4>
//         <button class="plus-one">+</button>
//     </li>
//     <li class="">
//         <h3>Jane</h3>
//         <h4>10 points</h4>
//         <button class="plus-one">+</button>
//     </li>
// </ul>

<script id="winning-template" type="text/x-handlebars-template">
	    {{#if token}}
          
			<ul class="standings">
				{{#each scores}}
				    <li class="{{#if winning}}winning{{/if}}">
				        <h3>{{user}}</h3>
				        <h4>{{points}} points</h4>
				        <button class="plus-one">+</button>
				    </li>
				 
				{{/each}} 
			</ul>
         
       {{/if}}
 // </script>


// 3. Attach a fictional event listener to the `<button>`s in the created template that would, in theory, update the score.
// $('.plus-one').on('click',updateScore);
// OR
$('body').on('click','.plus-one',updateScore)
// This delegated listener will work well because we DON"T know the html yet but we're reasonably sure there's a body

// 4. Write an AJAX request to send and receive fake data to the following endpoint and log response body's "status":
// 

$.post('/'+userName+'/score',{"points":20},function(data){
	console.log(data.status);
});
// **PUT /:userName/score**
//
// *Request Body*
//
// ```json
// {
//     "points": 15
// }
// ```
//
// *Response Body*
//
// ```json
// {
//     "status": "success",
//     "points": 15
// }
// ```


// 5. Refactor the following AJAX request to use `$.ajax` instead of `$.post`.
//
$.ajax({
	type:'POST',
	url:'/game',
	success: function(data){
		console.log(data.leader);
	},
	data: newGame
});

// ```js
// var newGame = {
//     name: 'My New Game',
//     roundsPlayed: 0
// };
// $.post('/game', newGame, function(data) {
//     console.log(data.leader);
// });
// ```
