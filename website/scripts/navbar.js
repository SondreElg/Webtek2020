function loadNavbar() {
    let navbar = document.getElementById("navbar");

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
                <label for="nav-check">
                    <div class="nav-sandwhichbtn">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </label>
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

loadNavbar();
