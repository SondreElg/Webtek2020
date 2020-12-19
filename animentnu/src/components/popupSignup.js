import TemplatePopup from "./popup";

// The icons used in the signup popup has been downloaded from
// FontAwesome (https://fontawesome.com/license). The icons are
// licensed under the Creative Commons Attribution 4.0 International
// license. No changes has been done to the icons.

function PopupSignup(props) {
    // This is the HTML for the popup itself. It consists of:
    // * A header
    // * A signup form, with the fields 'username' and 'email'
    // * A submit button
    // * A button for closing the popup
    // If the user successfully signs up, the form will be hidden, and a
    // text informing the user that the process was successful, will appear.

    if (!props.isVisible) {
        return null;
    }

    return (
        <TemplatePopup
            id={"popupSignup"}
            callbackVisibility={props.callbackVisibility}
        >
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

                        <input
                            type="submit"
                            value="Signup"
                            className="button"
                        />
                    </form>

                    <p id="signupSuccessful">
                        Signup was
                        <span className="successText">successful</span>.
                    </p>

                    <div
                        id="popupX"
                        onClick={() => props.callbackVisibility(false)}
                    >
                        <span>X</span>
                    </div>
                </div>
            </div>
        </TemplatePopup>
    );
}

/**
 * Displays a confirmation when the user signs up successfully.
 *
 * @param {string} event - an event object given by the event handler
 */
/*function submitForm(event) {
    // Prevent redirection to a new page
    event.preventDefault();
    // Hide the signup form
    document.getElementById("signupForm").style.display = "none";
    // Display the confirmation message
    document.getElementById("signupSuccessful").style.display = "inline-block";
}*/

export default PopupSignup;
