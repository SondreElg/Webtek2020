function generatePopup(title, description, imgsrc) {
    const html = `<div class="popupHeader">
        <h3 class="popupTitle">${title}</h3>
    </div>
    <div class="popupBody">
        <img class="popupThumbnail" src="${imgsrc}" alt="${title}" />
        <p class="popupDescription">
            ${description}
        </p>
    </div>
    <div class="popupX" onClick="closePopup()"><span>X</span></div>`;

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
