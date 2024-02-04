// weather.js

$(document).ready(function () {
    // Replace 'YOUR_API_KEY' with the API key you obtained from OpenWeatherMap
    const apiKey = '612827c04cfe4379542a37dc86b7db42' ;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Cape%20Town,ZA&appid=612827c04cfe4379542a37dc86b7db42&units=metric`;

    // Make an AJAX request to the OpenWeatherMap API
    $.ajax({
        url: apiUrl,
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            // Handle the response data
            displayWeather(data);
        },
        error: function (error) {
            console.log('Error fetching weather data:', error);
        }
    });

    // Function to display weather information
    function displayWeather(data) {
        const weatherInfo = document.getElementById('weather-info');

        // Extract relevant weather data
        const temperature = data.main.temp;
        const description = data.weather[0].description;

        // Create HTML content for weather information
        const htmlContent = `<p>Temperature: ${temperature} &#8451;</p>
                             <p>Description: ${description}</p>`;

        // Set the HTML content inside the weather-info div
        weatherInfo.innerHTML = htmlContent;
    }
});
