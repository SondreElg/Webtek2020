function initPopup(divID) {
    // Create popup background
    const div = document.createElement("div");
    div.id = divID;

    // When clicking on the popup background, the popup will close
    div.onclick = (event) => {
        if (event.target.id === divID) {
            closePopup(divID);
        }
    };

    // Add the popup background to the document
    document.body.appendChild(div);
}

function closePopup(divID) {
    // Hide the popup and its background
    document.getElementById(divID).style.display = "none";
}
