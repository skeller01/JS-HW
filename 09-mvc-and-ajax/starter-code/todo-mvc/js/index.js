// Model 
var todos = [
	{text: "Hello",
	complete:false
		},
	{
		text:"World",
		complete:false
	}
];


// View 
// uses the template to repeatedly outout the values in model
function renderTodos(){
	$("#todoList").html("");
	var source = $('#todo-template').html();
	// console.log(source);
	var template = Handlebars.compile(source);
	// console.log(template);
	for(i = 0; i <todos.length;i++){

		// var todo = {

		// 	text: todos[i]


		// 	};

		// console.log(todo)
		///have to call the template function 
		var todoListItem=template(todos[i]);
		// console.log(todoListItem);
			//this needs to reference the todoList on the main page 
		$("#todoList").append(todoListItem);
	};

}

// controller
// Take text entered, when they hit click, enter it into application 
// listen for click
$("#submit").on("click",addTodo);
$("#todoList").on("click",".complete",completeTodo);
// make the add todo function 
// don't need to add to screen, we add to model 
function addTodo(){
	var input = $("#todoInput").val();
	todos.push({text:input,
		complete:false});
	renderTodos();
};
//complete todo for anchor tab click 
function completeTodo(){
	var todoIndex = $(this).parent().index();
	todos[todoIndex].complete=true;
	renderTodos();
};

function setup(){
	renderTodos();
};

$(document).ready(setup);