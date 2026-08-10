const params = new URLSearchParams(window.location.search);
const styleResult = document.querySelector("#style-result");

const interest = params.get("interest");
const time = params.get("time");
const enjoy = params.getAll("enjoy");

let style = "";
let description = "";
let suggestions = "";

if (interest === "temple" || enjoy.includes("temple")) {
    style = "Temple Contributor";
}
else if (interest === "quick" || time === "short") {
    style = "Quick Contributor";
}
else if (interest === "records" || enjoy.includes("clues")) {
    style = "Discoverer";
}
else if (interest === "memories" || enjoy.includes("stories")) {
    style = "Preserver";
}
else {
    style = "Connector"
}


if (style === "Temple Contributor") {
    description = "You enjoy connecting family history with temple service and preparing family names for ordinances.";

    suggestions = `
        <ul>
            <li>Review family information carefully.</li>
            <li>Check for available temple ordinances.</li>
            <li>Prepare a family name to take to the temple.</li>
        </ul>
    `;
}
else if (style === "Quick Contributor") {
    description = "You like making meaningful family history progress in small amounts of time.";

    suggestions = `
        <ul>
            <li>Review a record hint.</li>
            <li>Check for a possible duplicate.</li>
            <li>Complete a quick Get Involved activity.</li>
        </ul>
    `;
}
else if (style === "Discoverer") {
    description = "You enjoy searching for records, following clues and discovering new information about your family.";

    suggestions = `
        <ul>
            <li>Review and attach a record hint.</li>
            <li>Look for missing information.</li>
            <li>Try the AI Research Assistant.</li>
        </ul>
    `;
}
else if (style === "Preserver") {
    description = "You enjoy saving photos, stories, documents and memories so they can be shared with future generations.";

    suggestions = `
        <ul>
            <li>Upload a family photo.</li>
            <li>Write down a family story.</li>
            <li>Create a memory album.</li>
        </ul>
    `;
}
else {
    description = "You enjoy connecting with relatives, sharing family experiences, and learning through other people.";

    suggestions = `
        <ul>
            <li>Ask for a favorite family recipe.</li>
            <li>Find the story behind a family photo.</li>
            <li>Visit a family cemetery.</li>
        </ul>
    `;
}

localStorage.setItem("familyHistoryStyle", style);

styleResult.innerHTML = `
    <h2>${style}</h2>
    <p>${description}</p>
    ${suggestions}
`;
