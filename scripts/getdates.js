//Get the current year
const currentYear = new Date().getFullYear();

// Set the copyright year
document.getElementById('currentYear').textContent = currentYear;

// Get the last modified date
const lastModifiedDate = document.lastModified;

// Set the last modified date in the second paragraph of the footer
document.getElementById('lastModified').textContent = 'Last Modified: ' + lastModifiedDate;






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
