// Model

var cardInfo = {
  firstName: '',
  lastName: '',
  cardNumber: '',
  expiration: '',
  cvv: ''
};

// View

// Compile the template outside of the function, so that we only do it once
// instead of on every render.

var template;
$(document).ready(function() {
  // console.log("getting to template");
  var templateSource = $('#card-template').html();
  template = Handlebars.compile(templateSource);
});

function renderCard() {
  // console.log("getting to render");
  var cardHtml = template(cardInfo);
  $('#cardContainer').html(cardHtml);
}

// Controller

$(document).ready(function() {
  // First render
  renderCard();
  // console.log("getting to controller1`");

  // Setup Listeners
  $('input[type="text"]').on('input', function() {
    // console.log("getting to input listeners");
    // Get the value enetered by the user
    var enteredValue = $(this).val();

    // Get the name property, which matches the key in the model object
    var inputKey = $(this).attr('name');

    // Update the model
    cardInfo[inputKey] = enteredValue;

    // Rerender the View
    renderCard();
  });

});
