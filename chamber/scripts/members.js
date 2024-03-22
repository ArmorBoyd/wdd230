document.addEventListener("DOMContentLoaded", function() {
    fetch("data/members.json")
    .then(response => response.json())
    .then(data => {
        const members = data.members;
        const main = document.querySelector("main");

        members.forEach(member => {
            const memberCard = document.createElement("div");
            memberCard.classList.add("member-card");

            memberCard.innerHTML = `
                <img src="${member.image}" alt="${member.name}" class="member-image">
                <div class="member-info">
                    <h2>${member.name}</h2>
                    <p>${member.intro}</p>
                    <p>Address: ${member.address1}, ${member.address2}</p>
                    <p>Phone: ${member.phone}</p>
                    <p>Website: <a href="${member.website}" target="_blank">${member.website}</a></p>
                    <p>Membership Level: ${member.membershipLevel}</p>
                </div>
            `;

            main.appendChild(memberCard);
        });

        const gridButton = document.getElementById("grid");
        const listButton = document.getElementById("list");

        gridButton.addEventListener("click", function() {
            main.classList.remove("list-view");
            main.classList.add("grid-view");
        });

        listButton.addEventListener("click", function() {
            main.classList.remove("grid-view");
            main.classList.add("list-view");
        });
    })
    .catch(error => console.error("Error fetching members data:", error));
});


