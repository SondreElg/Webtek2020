function generatePopup_(title, synopsis, imgsrc) {
    document.getElementById("popup").style.display = "block";
    const html = `
    <div id="popupContent">
        <div id="popupHeader">
            <h3 id="popupTitle">${title}</h3>
        </div>
        <div id="popupBody">
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
        anime_dictionary[anime][animeTitle], anime_dictionary[anime][animeSynopsis], anime_dictionary[anime][animeImgsrc]
    );
}
