const baseURL = "https://armorboyd.github.io/wdd230/";
const linksURL = "https://armorboyd.github.io/wdd230/data/links.json";

async function getLinks() {
  try {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.lessons);
  } catch (error) {
    console.error('Error fetching or parsing links data:', error);
  }
}

function displayLinks(weeks) {
  const linksContainer = document.getElementById('card-container');

  weeks.forEach(week => {
    if (week.lesson && week.links) {
      week.links.forEach(link => {
        const listItem = document.createElement('li');
        const lessonLink = document.createElement('a');
        lessonLink.href = baseURL + link.url;
        lessonLink.target = "_blank";
        lessonLink.textContent = link.title;
        listItem.appendChild(lessonLink);
        linksContainer.appendChild(listItem);
      });
    }
  });
}
