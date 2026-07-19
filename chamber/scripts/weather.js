const currentTemp = document.querySelector("#current-temp");
const weatherDescription = document.querySelector("#weather-description");
const forecast = document.querySelector("#forecast");

const apiKey = "d9d0c7b31172730536fa893d7b021fec";
const latitude = "38.96";
const longitude = "-111.90";

const currentWeatherUrl =
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${apiKey}`;

const forecastUrl =
    `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=imperial&appid=${apiKey}`;

async function getCurrentWeather() {
    try {
        const response = await fetch(currentWeatherUrl);

        if (!response.ok) {
            throw Error(await response.text());
        }

        const data = await response.json();

        currentTemp.textContent =
            `${Math.round(data.main.temp)}°F`;

        const description = data.weather[0].description;

        weatherDescription.textContent =
            description.charAt(0).toUpperCase() + description.slice(1);
    } catch (error) {
        console.error(error);
    }
}

async function getForecast() {
    try {
        const response = await fetch(forecastUrl);

        if (!response.ok) {
            throw Error(await response.text());
        }

        const data = await response.json();

        const dailyForecasts = data.list.filter((item) =>
            item.dt_txt.includes("18:00:00")
        );

        forecast.innerHTML = "";

        dailyForecasts.slice(0, 3).forEach((day) => {
            const date = new Date(day.dt_txt);

            const dayName = date.toLocaleDateString("en-US", {
                weekday: "long"
            });

            const temperature = Math.round(day.main.temp);

            const forecastParagraph = document.createElement("p");

            forecastParagraph.textContent =
                `${dayName}: ${temperature}°F`;

            forecast.appendChild(forecastParagraph);
        });
    } catch (error) {
        console.error(error);
    }
}

getCurrentWeather();
getForecast();