const message = document.querySelector("#visit-message");

const lastVisit = localStorage.getItem("lastVisit");
const today = Date.now();

if (!lastVisit) {
    message.textContent = "Welcome! Let us know if you have any questions.";
} else {
    const daysBetween = Math.floor((today - Number(lastVisit)) / (1000 * 60 * 60 * 24));

    if (daysBetween < 1) {
        message.textContent = "Back so soon! Awesome!";
    } else if (daysBetween === 1) {
        message.textContent = "Welcome back! Your last visit was 1 day ago.";
    } else {
        message.textContent = `Welcome back! Your las visit was ${daysBetween} days ago.`;
    }
}

localStorage.setItem("lastVisit", today);