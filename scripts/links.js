const baseURL = "https://armorboyd.github.io/wdd230/";
const linksURL = "https://armorboyd.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data);
}

function displayLinks(weeks) {
    const cardContainer = document.querySelector('.card-container');

    // Clear existing content
    cardContainer.innerHTML = '';

    // Loop through each week
    weeks.forEach(weekData => {
        // Create a section for each week
        const section = document.createElement('section');
        section.classList.add('card');

        // Add week title
        const weekTitle = document.createElement('h3');
        weekTitle.textContent = "Week " + weekData.lesson;
        section.appendChild(weekTitle);

        // Create links for the week
        const linksList = document.createElement('ol');
        weekData.links.forEach(link => {
            const listItem = document.createElement('li');
            const linkElement = document.createElement('a');
            linkElement.href = baseURL + link.url;
            linkElement.textContent = link.title;
            listItem.appendChild(linkElement);
            linksList.appendChild(listItem);
        });
        section.appendChild(linksList);

        // Append the section to the card container
        cardContainer.appendChild(section);
    });
}

// Call the function to fetch and display links
getLinks();
