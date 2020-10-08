function generatePopup(title, description, imgsrc) {
    const html = `
    <div id="popupContent">
        <div id="popupHeader">
            <h3 id="popupTitle">${title}</h3>
        </div>
        <div id="popupBody">
            <img id="popupThumbnail" src="${imgsrc}" alt="${title}" />
            <p id="popupDescription">
                ${description}
            </p>
        </div>
        <div id="popupX" onClick="closePopup()"><span>X</span></div>
    </div>`;

    document.getElementById("popup").innerHTML = html;
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

generatePopup(
    "Kaguya-Sama: Love is War",
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Fusce eu quam orci. Praesent eget neque nec neque vehicula
eleifend et ut neque. Praesent elementum nibh vitae odio
pulvinar ullamcorper. In eu sapien arcu. Integer pharetra
justo sed risus elementum, porttitor sagittis ante porta.
Aliquam faucibus nunc quis neque semper, et pharetra tortor
vestibulum. Morbi ac ullamcorper nisi. Donec vel congue
urna, sit amet aliquam orci. Lorem ipsum dolor sit amet,
consectetur adipiscing elit. Proin lectus sem, luctus eu ex
eu, volutpat posuere quam. Nullam pellentesque feugiat magna
sit amet luctus. Morbi pharetra quis massa id interdum.`,
    "images/anime1.jpg"
);
