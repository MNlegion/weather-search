// logic for weather app api

var getWeather = function() {
    var apiUrl = "http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=e9fe7b78654e60c910997496410c10f6";

    fetch(apiUrl);

    // fetch(apiUrl)
    // .then(response => response.json())
    // .then()
    console.log(apiUrl);


};

getWeather();