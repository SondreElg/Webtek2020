const popupSynopsis = "popupSynopsis";

/**
 * Generates the HTML for a popup for the provided anime
 *
 * @param {string} title - the title of the anime for which you're generating a popup
 * @param {string} synopsis - the synopsis for the anime
 * @param {string} imgsrc - the path to the thumbnail image corresponding to the anime
 */
function generatePopup_(title, synopsis, imgsrc) {
    // This is the HTML for the popup itself. It consists of:
    // * A header with the anime title
    // * A body, with a thumbnail and a synopsis
    // * A button for closing the popup
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
        <div id="popupX" onClick="closePopup('${popupSynopsis}')"><span>X</span></div>
    </div>`;

    createPopup(popupSynopsis, html);
}

/**
 * Generates a popup for the provided anime.
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

initPopup(popupSynopsis);
