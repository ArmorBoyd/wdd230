document.addEventListener("DOMContentLoaded", function() {
    // Get the last modified date of the current HTML file
    var lastModified = document.lastModified;

    // Display the last updated date in the footer
    var lastUpdatedElement = document.getElementById("lastUpdated");
    lastUpdatedElement.textContent = lastModified.substring(0, 16); 
});
