import {places} from "../data/places.mjs";

const cards = document.querySelector("#cards");

places.forEach((place) => {
    const card = document.createElement("section");
    const title = document.createElement("h2");
    const figure = document.createElement("figure");
    const image = document.createElement("img");
    const address = document.createElement("address");
    const description = document.createElement("p");
    const button = document.createElement("button");

    title.textContent = place.name;
    address.textContent = place.address;
    description.textContent = place.description;
    image.src = place.photoUrl;
    image.alt = place.name;
    image.loading = "lazy";
    button.textContent = "Learn More";

    figure.appendChild(image);

    card.appendChild(title);
    card.appendChild(figure);
    card.appendChild(address);
    card.appendChild(description);
    card.appendChild(button);

    cards.appendChild(card);
});




