const myInfo = new URLSearchParams(window.location.search);

console.log(myInfo);

document.querySelector("#results").innerHTML = `
    <p><strong>Name:</strong> ${myInfo.get("first")} ${myInfo.get("last")}</p>
    <p><strong>Email:</strong> ${myInfo.get("email")}</p>
    <p><strong>Mobile Phone:</strong> ${myInfo.get("phone")}</p>
    <p><strong>Business/Organization:</strong> ${myInfo.get("organization")}</p>
    <p><strong>Membership Level:</strong> ${myInfo.get("membership")}</p>
    <p><strong>Submitted:</strong> ${new Date(myInfo.get("timestamp")).toLocaleString()}</p>
`;