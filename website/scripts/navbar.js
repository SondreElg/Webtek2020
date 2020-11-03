/**
 * Function for creating a navbar.
 */
function loadNavbar() {
    // Get the containing element to place the navbar in
    let navbar = document.getElementById("navbar");

    // This is the HTML for the navbar. It contains the following:
    // * Logo and Discord link (in the nav-header)
    // * Sandwich button - this is only visible when the window is
    //   small enough. Clicking it will toggle the visibility of
    //   the menu items.
    // * A 'disguised' checkbox - its value determined whether the
    //   sandwich menu items are visible or not
    // * The menu items themselves
    navbar.innerHTML = `
        <div id="main_navbar">
            <div class="nav-items">
                <div class="nav-header">
                    <a class="nav-title" href="index.html">
                        <img src="images/logo.png" alt="Logo" id="navbar-logo">
                    </a>
                    <a class="nav-discord-image" href="https://discord.com/invite/3SQwHyZ" target="_blank">
                        <img src="images/discord.png" alt="Discord logo" id="navbar-discord-logo">
                    </a>
                </div>
                <div class="nav-sandwhichbtn" onclick="toggle_navbar()">
                    <label for="nav-check" onclick="toggle_navbar()">
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                </div>
                <input type="checkbox" id="nav-check">
                <div class="nav-links">
                    <a href="screenings.html">Screenings</a>
                    <a href="voting.html" >Voting</a>
                    <a href="newsfeed.html">Newsfeed</a>
                    <a href="about.html">About us</a>
                    <a class="signup-link" onclick="generateSignup()">Sign up</a>
                    <div class="discord-link">
                        <a href="https://discord.com/invite/3SQwHyZ" target="_blank">Our discord server</a>
                    </div>
                </div>
            </div>
        </div>`;
}

/**
 * Toggles the visibility of the sandwich menu
 */
function toggle_navbar() {
    // The sandwich menu is toggles by a 'disguised' checkbox.
    // Get a reference to this checkbox
    const checkbox = document.getElementById("nav-check");

    // Toggle the value of the checkbox, and thus the visibility of the
    // sandwich menu
    checkbox.checked = !checkbox.checked;
}

loadNavbar();
