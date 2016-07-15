// Model 
var todos = [
	"hello",
	"world"
];


// View 
function renderTodos(){
	var source = $('#todo-template').html();
	var template = Handlebars.compile(source);

	for(i = 0; i <todos.length;i++){

		var todo = {

			text: todos[i]

		};
		//have to call the template function 
		var todoListItem=template(todo);
		//this needs to reference the todoList on the main page 
		$("#todoList").append(todoListItem);
	};

}

function setup(){
	renderTodos();
};

$(document).ready(setup);