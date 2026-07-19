const spotlightContainer = document.querySelector("#spotlight-cards");
const membersUrl = "data/members.json";

async function getSpotlights() {
    const response = await fetch(membersUrl);
    const data = await response.json();

    const qualifiedMembers = data.filter((member) =>
        member.membership === 2 || member.membership === 3
    );

    const randomMembers = qualifiedMembers
        .sort(() => Math.random() - 0.5)
        .slice(0, 3);

    displaySpotlights(randomMembers);
}

getSpotlights();

function displaySpotlights(members) {
    spotlightContainer.innerHTML = "";

    members.forEach((member) => {
        const card = document.createElement("section");
        card.classList.add("spotlight-card");

        const membershipLevel =
            member.membership === 3 ? "Gold Member" : "Silver Member";

        card.innerHTML = `
            <h3>${member.name}</h3>

            <img
                src="images/${member.image}"
                alt="${member.name} logo"
                width="150"
                height="150"
                loading="lazy"
            >

            <p>${member.address}</p>
            <p>${member.phone}</p>

            <a href="${member.website}" target="_blank">
                Visit Website
            </a>

            <p>${membershipLevel}</p>
        `;

        spotlightContainer.appendChild(card);
    });
}