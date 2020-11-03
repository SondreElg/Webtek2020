/**
 * Initializes a popup by creating a background on which to place the popup
 *
 * @param {string} divID - the ID that the background div will have
 */

function initPopup(divID) {
    // Create popup background
    const div = document.createElement("div");
    div.id = divID;

    // When clicking on the popup background, the popup will close
    div.onclick = (event) => {
        // Make sure that none of the background's children
        // will trigger the event. If so, clicking on the popup
        // itself will close it. This would be especially bad for
        // the signup popup, where the user often will click an
        // input field before starting typing!
        if (event.target.id === divID) {
            closePopup(divID);
        }
    };

    // Add the popup background to the document
    document.body.appendChild(div);
}

/**
 * Creates a popup and attaches it to the given background
 *
 * @param {string} divID - the ID of the background of which to attach the popup
 * @param {string} html - the HTML that the popup will consist of
 */
function createPopup(divID, html) {
    // Make the popup + background visible
    document.getElementById(divID).style.display = "block";
    // Place the popup as a child of the popup background
    document.getElementById(divID).innerHTML = html;
}

/**
 * Closes a popup by disabling its render
 *
 * @param {string} divID - the ID of the background div to remove
 */
function closePopup(divID) {
    // Hide the popup and its background
    document.getElementById(divID).style.display = "none";
}
