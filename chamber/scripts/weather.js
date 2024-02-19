// weather.js
document.addEventListener('DOMContentLoaded', function () {
    // Replace 'YOUR_API_KEY' with the API key you obtained from OpenWeatherMap
    const apiKey = '612827c04cfe4379542a37dc86b7db42';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Cape%20Town,ZA&appid=${apiKey}&units=metric`;

    // Make a fetch request to the OpenWeatherMap API
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Handle the response data
            displayWeather(data);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });

    // Function to display weather information
    function displayWeather(data) {
        const weatherInfo = document.getElementById('weather-info');

        // Extract relevant weather data
        const temperature = data.main.temp;
        const description = data.weather[0].description;


        const htmlContent = `<p>Temperature: ${temperature} &#8451;</p>
                             <p>Description: ${description}</p>`;

     
        weatherInfo.innerHTML = htmlContent;
    }
});
