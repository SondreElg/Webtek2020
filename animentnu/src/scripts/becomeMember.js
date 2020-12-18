import { createPopup, initPopup } from "./utilsPopup";

// The icons used in the signup popup has been downloaded from
// FontAwesome (https://fontawesome.com/license). The icons are
// licensed under the Creative Commons Attribution 4.0 International
// license. No changes has been done to the icons.

function popupSignup() {
    // This is the HTML for the popup itself. It consists of:
    // * A header
    // * A signup form, with the fields 'username' and 'email'
    // * A submit button
    // * A button for closing the popup
    // If the user successfully signs up, the form will be hidden, and a
    // text informing the user that the process was successful, will appear.
    return (
        <div className="popupContent">
            <div className="popupHeader">
                <h3>Join Anime NTNU</h3>
            </div>
            <div className="popupBody">
                <form id="signupForm" onSubmit="submitForm(event)">
                    <div className="inputContainer">
                        <div id="iconUser" className="signupIcon"></div>
                        <input
                            type="text"
                            placeholder="Name"
                            name="name"
                            id="signupName"
                            className="inputBox"
                            required
                        />
                    </div>

                    <div className="inputContainer">
                        <div id="iconEmail" className="signupIcon"></div>
                        <input
                            type="email"
                            placeholder="E-mail"
                            name="email"
                            id="signupEmail"
                            className="inputBox"
                            required
                        />
                    </div>

                    <input type="submit" value="Signup" className="button" />
                </form>

                <p id="signupSuccessful">
                    Signup was <span className="successText">successful</span>.
                </p>

                <div id="popupX" onClick="closePopup('${popupSignup}')">
                    <span>X</span>
                </div>
            </div>
        </div>
    );
}

/**
 * Creates a popup for a user to sign up
 */
function generateSignup() {
    const html = `<div className="popupContent">
        <div className="popupHeader">
            <h3>Join Anime NTNU</h3>
        </div>
        <div className="popupBody">
            <form id="signupForm" onsubmit="submitForm(event)">

                <div className="inputContainer">
                    <div id="iconUser" className="signupIcon"></div>
                    <input type="text" placeholder="Name" name="name" id="signupName" className="inputBox" required>
                </div>

                <div className="inputContainer">
                    <div id="iconEmail" className="signupIcon"></div>
                    <input type="email" placeholder="E-mail" name="email" id="signupEmail" className="inputBox" required>
                </div>

                <input type="submit" value="Signup" className="button">

            </form>

            <p id="signupSuccessful">Signup was <span className="successText">successful</span>.</p>

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
