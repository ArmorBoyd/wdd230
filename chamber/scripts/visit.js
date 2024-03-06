const todayDisplay = document.querySelector(".today");
const visitsDisplay = document.querySelector(".visits");

// Get the previous visit date from localStorage
const prevVisitTimestamp = window.localStorage.getItem("prevVisitTimestamp");
let prevVisitDate = new Date(prevVisitTimestamp);
let currentDate = new Date();

// Calculate the difference in days between the current visit and the previous visit
let timeDiff = currentDate.getTime() - prevVisitDate.getTime();
let daysDiff = Math.floor(timeDiff / (1000 * 3600 * 24));

// Update the localStorage with the current visit timestamp
window.localStorage.setItem("prevVisitTimestamp", currentDate.getTime());

// Update the number of visits
let numVisits = Number(window.localStorage.getItem("visits-list"));

if (numVisits !== 0) {
    visitsDisplay.textContent = numVisits;
} else {
    visitsDisplay.textContent = `This is your first visit!`;
}

numVisits++;
localStorage.setItem("visits-list", numVisits);

// Display today's date
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
todayDisplay.textContent = currentDate.toLocaleDateString('en-US', options);

// Display message based on the difference in days
if (isNaN(daysDiff) || daysDiff <= 0) {
    // First visit or same day visit
    visitsDisplay.textContent = "Welcome! Let us know if you have any questions.";
} else if (daysDiff === 1) {
    // Visit within 1 day
    visitsDisplay.textContent = "Back so soon! Awesome!";
} else {
    // Visit more than 1 day ago
    visitsDisplay.textContent = `You last visited ${daysDiff} ${daysDiff === 1 ? 'day' : 'days'} ago.`;
}
