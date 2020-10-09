function loadNavbar() {
    let navbar = document.getElementById("navbar");

    navbar.innerHTML =
    "<main id=\"navbar\">\n"+
    "<div class=\"nav-items\">\n"+


    "  <div class=\"nav-header\">\n"+
    "   <a class=\"nav-title\" href=\"index.html\">\n"+
    "      <img src=\"images/logo.png\" alt=\"Logo\" id=\"navbar-logo\">\n"+
    "    </a>\n"+
    "   <a class=\"nav-discord-image\" href=\"https://discord.com/invite/3SQwHyZ\" target=\"_blank\">\n"+
    "      <img src=\"images/discord.png\" alt=\"Discord logo\" id=\"navbar-discord-logo\">\n"+
    "    </a>\n"+
    "  </div>\n"+



    "  <div class=\"nav-sandwhichbtn\">\n"+
    "    <label for=\"nav-check\">\n"+
    "      <span></span>"+
    "      <span></span>"+
    "      <span></span>"+
    "    </label>"+
    "  </div>"+


    "  <input type=\"checkbox\" id=\"nav-check\">\n"+


    "  <div class=\"nav-links\">\n"+
    "    <a href=\"screenings.html\" >Screenings</a>\n"+
    "    <a href=\"voting.html\" >Voting</a>\n"+
    "    <a href=\"newsfeed.html\">Newsfeed</a>\n"+
    "    <a href=\"about.html\">About us</a>\n"+
    "    <div class=\"discord-link\">\n"+
    "     <a href=\"https://discord.com/invite/3SQwHyZ\" target=\"_blank\">Our discord server</a>\n"+
    "    </div>\n"+
    "  </div>"+


    "</div>"+
    "</div>"+
    "</main>";
}

loadNavbar();
