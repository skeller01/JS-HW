// Model
var count = 0;

// View

function renderCount() {
  // console.log("made it to render")
  var source = $('#count-template').html();
  var template = Handlebars.compile(source);
  // console.log(source);

  var countHtml = template({
    count: count,
    high: count > 100,
    low: count < 0
  });
  $('#count').html(countHtml);
}

// Controller

function setup() {
  // Setup the styles
  renderCount();

  // Setup the event listeners
  $('#plus').on('click', increment);
  $('#minus').on('click', decrement);
  $('#zero').on('click', zero);
}

function increment() {
  count++;
  renderCount();
}

function decrement() {
  count --;
  renderCount();
}

function zero() {
  count = 0;
  renderCount();
}

$(document).ready(setup);
