//class work 


// +++DONE++++Refactor the original code into a "setup" function
function setup(){
	//li items blue 	
	$("li").css('color','blue');
	//bold the first list item
	$('ul li:nth-child(1)').css("font-weight","Bold");
	//make the title say TODO
	$('h1').html("TODO");
	//Add a text input and button after the title 
	$('h1').after("<input type =text><button>submit</button>");

// Find the button element
// When it is clicked, add an item to the list with the value of the input
// BONUS: Make the todo add when enter is pressed too
// Refactor to use classes instead of .css

//++++++++++++++++++EVENTS
//click on list items 

	//This listener looks at ul first and then down at the li's 
	$("ul").on("click","li",addStrike);

	//find button element
	$("button").on("click",addInputToList);


	//+++++++++++++++++LISTENERS
	//create strike through function 
	// +++DONE+++When list items are clicked, add a strikethrough
	function addStrike(){
		$(this).css("text-decoration","line-through");
		//makeLiBlue();
		//$(this).css("color","blue");
	}

	//add item to list with input value 
	function addInputToList(){
		var info=$("input").val();
		var listItem =$("<li>").text(info);
		// $("ul").html("<li>"+info+"</li>");
		$("ul").append(listItem);
	}
	};

//add document ready 
$(document).ready(setup());