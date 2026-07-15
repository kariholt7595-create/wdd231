const membersContainer = document.querySelector("#members");
const gridButton = document.querySelector("#grid-button");
const listButton = document.querySelector("#list-button");

async function getMembers() {
    try {
        const response = await fetch("data/members.json");

        if (!response.ok) {
            throw new Error("Could not load the member information.");
        }

        const members = await response.json();
        displayMembers(members);
    } catch (error) {
        console.error(error);
        membersContainer.innerHTML =
            "<p>Sorry, the business directory could not be loaded.</p>";
    }
}

function displayMembers(members) {
    membersContainer.innerHTML = "";

    members.forEach((member) => {
        const card = document.createElement("section");
        const businessName = document.createElement("h2");
        const category = document.createElement("p");
        const image = document.createElement("img");
        const address = document.createElement("p");
        const phone = document.createElement("p");
        const website = document.createElement("a");

        businessName.textContent = member.name;
        category.textContent = member.category;

        image.setAttribute("src", `images/${member.image}`);
        image.setAttribute("alt", `${member.name} logo`);
        image.setAttribute("loading", "lazy");
        image.setAttribute("width", "200");
        image.setAttribute("height", "120");

        address.textContent = member.address;
        phone.textContent = member.phone;

        website.setAttribute("href", member.website);
        website.setAttribute("target", "_blank");
        website.setAttribute("rel", "noopener");
        website.textContent = "Visit Website";

        card.append(
            businessName,
            category,
            image,
            address,
            phone,
            website
        );

        membersContainer.appendChild(card);
    });
}

gridButton.addEventListener("click", () => {
    membersContainer.classList.add("grid");
    membersContainer.classList.remove("list");
});

listButton.addEventListener("click", () => {
    membersContainer.classList.add("list");
    membersContainer.classList.remove("grid");
});

getMembers();