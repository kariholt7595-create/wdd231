console.log("date.js is running");

const year = new Date().getFullYear();

document.querySelector("#currentyear").textContent = year;
document.querySelector("#lastModified").textContent = `Last Modified: ${document.lastModified}`;