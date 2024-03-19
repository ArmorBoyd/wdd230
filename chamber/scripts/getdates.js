//Get the current year
const currentYear = new Date().getFullYear();

// Set the copyright year
document.getElementById('currentYear').textContent = currentYear;

// Get the last modified date
const lastModifiedDate = document.lastModified;

// Set the last modified date in the second paragraph of the footer
document.getElementById('lastModified').textContent = 'Last Modified: ' + lastModifiedDate;

//Directory of Members

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}
