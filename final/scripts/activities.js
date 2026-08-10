const activityCards = document.querySelector("#activity-cards");
const activityDialog = document.querySelector("#activity-dialog");
const dialogContent = document.querySelector("#dialog-content");
const closeDialog = document.querySelector("#close-dialog");
const filterButtons = document.querySelectorAll(".activity-filters button")
let allActivities = [];

async function getActivities() {
    try {
        const response = await fetch("data/activities.json");
        const activities = await response.json();
        allActivities = activities;

        console.log(activities);
        displayActivities(activities);
    } catch (error) {
        console.error(error);
    }
}

getActivities();

function displayActivities(activities) {
    activityCards.innerHTML = "";

    activities.forEach((activity) => {
        const card = document.createElement("section");
        card.classList.add("activity-card");
        card.classList.add(activity.category);

        const title = document.createElement("h2");
        title.textContent = activity.title;

        const category = document.createElement("p");
        category.textContent = activity.category;

        const categoryCircle = document.createElement("div");
        categoryCircle.classList.add("category-circle");
        categoryCircle.textContent = activity.category.charAt(0).toUpperCase();

        const time = document.createElement("p");
        time.textContent = activity.time;

        const description = document.createElement("p");
        description.textContent = activity.description;

        const learnMore = document.createElement("button")
        learnMore.textContent = "Learn More";

        learnMore.addEventListener("click", () => {
            dialogContent.textContent = activity.details;
            activityDialog.showModal();
        });

        card.appendChild(categoryCircle);
        card.appendChild(title);
        card.appendChild(time);
        card.appendChild(description);
        card.appendChild(learnMore);

        activityCards.appendChild(card);
    });

    closeDialog.addEventListener("click", () => {
        activityDialog.close();
    })

    filterButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const category = button.dataset.category;
            if (category === "all") {
                displayActivities(allActivities);
            } else {
                const filteredActivities = allActivities.filter((activity) =>
                    activity.category === category
                );

                displayActivities(filteredActivities);
            }
        });
    });
}