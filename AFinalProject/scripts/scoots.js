/*---Rentals---*/
const rentalsSection = document.querySelector('.rentals');

fetch('data/scoots.json') 
  .then(response => response.json())
  .then(data => {
    data.forEach(rental => {
      const rentalItem = document.createElement('div');
      rentalItem.classList.add('rental-item');

      rentalItem.innerHTML = `
        <img src="images/${rental.image}" alt="${rental.rentalType}">
        <h3>${rental.rentalType}</h3>
        <table>
          <tr>
            <th>Rate</th>
            <th>Half Day</th>
            <th>Full Day</th>
          </tr>
          <tr>
            <th>Reservation</th>
            <td>$${rental.reservation.halfDay}</td>
            <td>$${rental.reservation.fullDay}</td>
          </tr>
          <tr>
            <th>Walk-In</th>
            <td>$${rental.walkIn.halfDay}</td>
            <td>$${rental.walkIn.fullDay}</td>
          </tr>
        </table>
      `;

      rentalsSection.appendChild(rentalItem);
    });
  });

//Hamburger Menu

const hamButton = document.querySelector('#hamburger');
const nav = document.querySelector('.nav');

hamButton.addEventListener('click', () => {
  nav.classList.toggle('open');
  hamButton.classList.toggle('open');
});

// Close navigation when switching to larger view
window.addEventListener('resize', () => {
  if (window.innerWidth > 600) {
      nav.classList.remove('open');
      hamButton.classList.remove('open');
  }
});


  /*---Weather Forecast---*/
  
  //Weather Section

//FETCH Weather API
// Select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?q=Cozumel&appid=60f21ce893739f0dee13f1ab33152b6d'; 

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
const API_KEY = "60f21ce893739f0dee13f1ab33152b6d"; 

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
// Get three-day forecast
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=Cozumel&appid=${API_KEY}`)
        .then((response) => response.json())
        .then((data) => {
            const forecast = data.list.filter((item, index) => index % 8 === 0).slice(0, 3);
            weatherCardsDiv.innerHTML = forecast.map((item) => {
                const weatherItem = {
                    date: item.dt_txt.split(" ")[0],
                    temp: (item.main.temp - 273.15).toFixed(2),
                    description: item.weather[0].description,
                    icon: item.weather[0].icon
                };
                return createWeatherCard(weatherItem);
            }).join("");
        })
        .catch((error) => console.error("Error fetching weather forecast:", error));
};

updateWeatherData();


document.addEventListener("DOMContentLoaded", function() {

  var banner = document.getElementById("Banner");
  var closeBannerButton = document.getElementById("closeBanner");
  if (banner && closeBannerButton) {
      banner.style.display = "block";
      closeBannerButton.addEventListener("click", function() {
          banner.style.display = "none";
      });
  }
});

