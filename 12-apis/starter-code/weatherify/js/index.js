// We needed to install an ajax request system that did three things. First it got the data - this required a utility subsystem for building our request text - next it updated the model and last it re-rendered the display. 


// Model

var weather = {
  city: '',
  country: '',
  temperature: '',
  description: '',
  humidity: '',
  clouds: ''
};

// View

// Compile the template outside of the function, so that we only do it once
// instead of on every render.

var template;
$(document).ready(function() {
  var templateSource = $('#weather-template').html();
  template = Handlebars.compile(templateSource);
});

function renderWeather() {
  var weatherHtml = template(weather);
  $('#weather').html(weatherHtml);
}

// Controller

$(document).ready(function() {
  // First render
  renderWeather();

  // Setup Listeners
  $('#searchForm').on('submit', function(event) {
    event.preventDefault();

    // Get the values enetered by the user
    var city = $('input[name="city"]').val();
    var country = $('input[name="country"]').val();

    // 1. Make the request to OpenWeatherMap API
    //6a45087d66e8ed3f9d0af20ef6014ad1
    $.ajax({
      type: 'GET',
      url: buildURL(city, country),
      success: function (data) {

        // Update the model
        weather.city = city;
        weather.country = country,
        weather.temperature = data.main.temp;
        weather.description = data.weather[0].description;
        weather.humidity = data.main.humidity;
        weather.clouds = data.clouds.all;

        // Rerender the View
        renderWeather();
      }
    })
  });
});
function buildURL(city, country) {
  var baseURL = 'http://api.openweathermap.org/data/2.5/weather?';
  baseURL += 'APPID=6a45087d66e8ed3f9d0af20ef6014ad1';
  baseURL += '&units=imperial';
  baseURL += '&q=' + city + ',' + country;

  return baseURL;
}

