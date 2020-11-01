function generatePopup_(title, synopsis, imgsrc) {
    document.getElementById("popup").style.display = "block";
    const html = `
    <div class="popupContent">
        <div class="popupHeader">
            <h3>${title}</h3>
        </div>
        <div class="popupBody">
            <img id="popupThumbnail" src="${imgsrc}" alt="${title}" />
            <p id="popupDescription">
                ${synopsis}
            </p>
        </div>
        <div id="popupX" onClick="closePopup()"><span>X</span></div>
    </div>`;

    document.getElementById("popup").innerHTML = html;
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

/**
 * Generates a popup for the provided anime
 *
 * @param {string} anime - the anime for which you're generating a popup
 */
function generatePopup(anime) {
    generatePopup_(
        animeDictionary[anime][animeTitle],
        animeDictionary[anime][animeSynopsis],
        animeDictionary[anime][animeImgsrc]
    );
}

initPopup("popup");
