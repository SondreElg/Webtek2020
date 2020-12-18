import { createPopup, initPopup } from "./utilsPopup";

// The icons used in the signup popup has been downloaded from
// FontAwesome (https://fontawesome.com/license). The icons are
// licensed under the Creative Commons Attribution 4.0 International
// license. No changes has been done to the icons.

const popupSignup = "popupSignup";

/**
 * Creates a popup for a user to sign up
 */
function generateSignup() {
    // This is the HTML for the popup itself. It consists of:
    // * A header
    // * A signup form, with the fields 'username' and 'email'
    // * A submit button
    // * A button for closing the popup
    // If the user successfully signs up, the form will be hidden, and a
    // text informing the user that the process was successful, will appear.
    const html = `<div class="popupContent">
        <div class="popupHeader">
            <h3>Join Anime NTNU</h3>
        </div>
        <div class="popupBody">
            <form id="signupForm" onsubmit="submitForm(event)">

                <div class="inputContainer">
                    <div id="iconUser" class="signupIcon"></div>
                    <input type="text" placeholder="Name" name="name" id="signupName" class="inputBox" required>
                </div>

                <div class="inputContainer">
                    <div id="iconEmail" class="signupIcon"></div>
                    <input type="email" placeholder="E-mail" name="email" id="signupEmail" class="inputBox" required>
                </div>

                <input type="submit" value="Signup" class="button">

            </form>

            <p id="signupSuccessful">Signup was <span class="successText">successful</span>.</p>

            <div id="popupX" onClick="closePopup('${popupSignup}')"><span>X</span></div>
        </div>
    </div>`;

    // Create the popup with the given ID and html
    createPopup(popupSignup, html);
}

/**
 * Displays a confirmation when the user signs up successfully.
 *
 * @param {string} event - an event object given by the event handler
 */
function submitForm(event) {
    // Prevent redirection to a new page
    event.preventDefault();
    // Hide the signup form
    document.getElementById("signupForm").style.display = "none";
    // Display the confirmation message
    document.getElementById("signupSuccessful").style.display = "inline-block";
}

initPopup(popupSignup);

export default { generateSignup };
