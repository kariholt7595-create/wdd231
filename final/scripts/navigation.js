const menuButton = document.querySelector ("#menu-button");
const navigation = document.querySelector("#navigation");

menuButton.addEventListener("click", () => {
    menuButton.classList.toggle("open");
    navigation.classList.toggle("open");
});