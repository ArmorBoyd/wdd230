const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🕶️")) {
		main.style.background = "#000";
		main.style.color = "#fff";
		modeButton.textContent = "🔆";
	} else {
		main.style.background = "#eee";
		main.style.color = "#000";
		modeButton.textContent = "🕶️";
	}
});


//Weather Section

//FETCH Weather API
// Select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=16.9166&lon=121.7879&units=metric&appid=60f21ce893739f0dee13f1ab33152b6d'; 

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data); // Testing only
            displayResults(data); // Uncomment when ready
        } else {
            throw new Error('Failed to fetch data');
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayResults(data) {
    currentTemp.innerHTML = `${Math.round(data.main.temp)}&deg;C`;

    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    const desc = data.weather[0].description;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc.charAt(0).toUpperCase() + desc.slice(1);
}


   const weatherCardsDiv = document.getElementById("weather-cards");
const API_KEY = "YOUR_API_KEY"; // Replace "YOUR_API_KEY" with your actual API key

const createWeatherCard = (weatherItem) => {
    return `<li class="card">
                <h3>${weatherItem.date}</h3>
                <div class="details">
                    <p>${weatherItem.temp}°C - ${weatherItem.description}</p>
                    <img src="http://openweathermap.org/img/wn/${weatherItem.icon}.png" alt="Weather Icon">
                </div>
            </li>`;
};

const updateWeatherData = () => {
    // Get three-day forecast
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=16.9166&lon=121.7879&units=metric&exclude=current,minutely,hourly&appid=${API_KEY}`)
        .then((response) => response.json())
        .then((data) => {
            const forecast = data.daily.slice(1, 4); // Extracting next three days forecast
            weatherCardsDiv.innerHTML = forecast.map((day) => {
                const weatherItem = {
                    date: new Date(day.dt * 1000).toLocaleDateString('en-US', { weekday: 'long' }), // Convert timestamp to weekday
                    temp: day.temp.day.toFixed(2),
                    description: day.weather[0].description,
                    icon: day.weather[0].icon
                };
                return createWeatherCard(weatherItem);
            }).join("");
        })
        .catch((error) => console.error("Error fetching weather forecast:", error));
};

updateWeatherData();

const banner = document.getElementById("Banner");
const closeButton = document.getElementById("closeBanner");
const isBannerDay = () => {
    const today = new Date();
    const dayOfWeek = today.getDay();
    return dayOfWeek >= 1 && dayOfWeek <= 3;
};
const toggleBanner = () => {
    banner.style.display = isBannerDay() ? "block" : "none";
};
closeButton.addEventListener("click", () => {
    banner.style.display = "none";
});
window.addEventListener("load", toggleBanner);
