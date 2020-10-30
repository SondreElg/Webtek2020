// The icons used in the signup popup has been downloaded from
// FontAwesome (https://fontawesome.com/license). The icons are
// licensed under the Creative Commons Attribution 4.0 International
// license. No changes has been done to the icons.

function generateSignup() {
    document.getElementById("signup").style.display = "block";
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

                <input type="submit" value="Signup" id="signupSubmit">

            </form>

            <p id="signupSuccessful">Signup was <span class="successText">successful</span>.</p>

            <div id="popupX" onClick="closeSignup()"><span>X</span></div>
        </div>
    </div>`;

    document.getElementById("signup").innerHTML = html;
}

function closeSignup() {
    document.getElementById("signup").style.display = "none";
}

function submitForm(event) {
    event.preventDefault();
    document.getElementById("signupForm").style.display = "none";
    document.getElementById("signupSuccessful").style.display = "inline-block";
}

initPopup("signup");
