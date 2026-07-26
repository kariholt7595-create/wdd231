const timestamp = document.querySelector("#timestamp");

timestamp.value = new Date().toISOString();



const npButton = document.querySelector("#open-np");
const bronzeButton = document.querySelector("#open-bronze");
const silverButton = document.querySelector("#open-silver");
const goldButton = document.querySelector("#open-gold");

const npDialog = document.querySelector("#np-modal");
const bronzeDialog = document.querySelector("#bronze-modal");
const silverDialog = document.querySelector("#silver-modal");
const goldDialog = document.querySelector("#gold-modal");

const closeNp = document.querySelector("#close-np");
const closeBronze = document.querySelector("#close-bronze");
const closeSilver = document.querySelector("#close-silver");
const closeGold = document.querySelector("#close-gold");



npButton.addEventListener("click", () => {
    npDialog.showModal();
});

bronzeButton.addEventListener("click", () => {
    bronzeDialog.showModal();
});

silverButton.addEventListener("click", () => {
    silverDialog.showModal();
});

goldButton.addEventListener("click", () => {
    goldDialog.showModal();
});



closeNp.addEventListener("click", () => {
    npDialog.close();
});

closeBronze.addEventListener("click", () => {
    bronzeDialog.close();
});

closeSilver.addEventListener("click", () => {
    silverDialog.close();
});

closeGold.addEventListener("click", () => {
    goldDialog.close();
});



const layoutShiftObserver = new PerformanceObserver((list) => {
    list.getEntries().forEach((entry) => {
        if (!entry.hadRecentInput) {
            console.log("LAYOUT SHIFT:", entry.value);

            entry.sources.forEach((source) => {
                console.log("Shifted element:", source.node);
                console.log("Before:", source.previousRect);
                console.log("After:", source.currentRect);
            });
        }
    });
});

layoutShiftObserver.observe({
    type: "layout-shift",
    buffered: true
});