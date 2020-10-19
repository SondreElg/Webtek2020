let signupHtml = 
`<div id="signupContainer">
    <div id="signupHead">
        <h3 id="signupHeader">Join Anime NTNU</h3>
    </div>
    <div id="signupBody">
        <form id="signupForm" onsubmit="submitForm(); return false">

            <div class="inputContainer">
                <i class="fa fa-user fa-lg signupIcon"></i>
                <input type="text" placeholder="Name" name="name" id="signupName" class="inputBox" required>
            </div>

            <div class="inputContainer">
                <i class="fa fa-envelope fa-lg signupIcon"></i>
                <input type="email" placeholder="E-mail" name="email" id="signupEmail" class ="inputBox" required>
            </div>

            <input type="submit" value="Signup" id="signupSubmit">

        </form>

        <p id="signupSuccessful">Signup was <span style="color: rgb(28, 155, 28);">successful</span>.</p>

        <div id="signupClose" onclick="closeSignup()"><i class="fa fa-times-circle fa-2x"></i></div>
    </div>
</div>`;

signupInit();

function signupInit() {
    let signupEl = document.createElement("div");
    signupEl.id = "signup";
    signupEl.style = "display: none;"
    signupEl.innerHTML = signupHtml;

    document.body.appendChild(signupEl);
}

let signupEl = document.querySelector("#signup");

let signupFormEL = document.querySelector("#signupForm");
let signupSuccessfulEl = document.querySelector("#signupSuccessful");

function openSignup() {
    signupEl.style.display = "initial";

    signupFormEL.style.display = "initial";
    signupSuccessfulEl.style.display = "none";
}

function closeSignup() {
    signupEl.style.display = "none";
}

function submitForm() {
    signupFormEL.style.display = "none";
    signupSuccessfulEl.style.display = "inline-block";
}