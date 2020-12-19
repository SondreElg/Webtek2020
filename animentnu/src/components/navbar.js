import { useState } from "react";
import imgLogo from "../images/logo.png";
import imgDiscord from "../images/discord.png";
import PopupSignup from "./popupSignup";

/**
 * Function for creating a navbar.
 */

function NavBar() {
    /**
     * Toggles the visibility of the sandwich menu
     */

    const [checked, check] = useState(false);
    const [visibilityPopupSignup, setVisibilityPopupSignup] = useState(false);

    function toggleChecked() {
        check(!checked);
    }

    // This is the HTML for the navbar. It contains the following:
    // * Logo and Discord link (in the nav-header)
    // * Sandwich button - this is only visible when the window is
    //   small enough. Clicking it will toggle the visibility of
    //   the menu items.
    // * A 'disguised' checkbox - its value determined whether the
    //   sandwich menu items are visible or not
    // * The menu items themselves

    return (
        <>
            <div id="main_navbar">
                <div className="nav-items">
                    <div className="nav-header">
                        <a className="nav-title" href="index.html">
                            <img src={imgLogo} alt="Logo" id="navbar-logo" />
                        </a>
                        <a
                            className="nav-discord-image"
                            href="https://discord.com/invite/3SQwHyZ"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                src={imgDiscord}
                                alt="Discord logo"
                                id="navbar-discord-logo"
                            />
                        </a>
                    </div>
                    <div className="nav-sandwhichbtn" onClick={toggleChecked}>
                        <label htmlFor="nav-check" onClick={toggleChecked}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </label>
                    </div>
                    <input
                        type="checkbox"
                        id="nav-check"
                        checked={checked}
                        onChange={() => {}}
                    />
                    <div className="nav-links">
                        <a href="screenings.html">Screenings</a>
                        <a href="voting.html">Voting</a>
                        <a href="newsfeed.html">Newsfeed</a>
                        <a href="about.html">About us</a>
                        <a
                            className="signup-link"
                            onClick={() => setVisibilityPopupSignup(true)}
                        >
                            Sign up
                        </a>
                        <div className="discord-link">
                            <a
                                href="https://discord.com/invite/3SQwHyZ"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Our discord server
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <PopupSignup
                isVisible={visibilityPopupSignup}
                callbackVisibility={setVisibilityPopupSignup}
            />
        </>
    );
}

export default NavBar;
