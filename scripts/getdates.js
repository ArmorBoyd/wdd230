const currentYear = new Date().getFullYear();

// Set the copyright year
document.getElementById('currentYear').textContent = currentYear;

// Get the last modified date
const lastModifiedDate = document.lastModified;

// Set the last modified date in the second paragraph of the footer
document.getElementById('lastModified').textContent = 'Last Modified: ' + lastModifiedDate;
