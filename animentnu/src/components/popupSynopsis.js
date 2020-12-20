import TemplatePopup from "./popup";

function PopupSynopsis(props) {
    const anime = props.anime;

    if (!props.isVisible) {
        return null;
    }

    return (
        <TemplatePopup
            id={"popupSynopsis"}
            callbackVisibility={props.callbackVisibility}
        >
            <div class="popupContent">
                <div class="popupHeader">
                    <h3>{anime.title}</h3>
                </div>
                <div class="popupBody">
                    <img
                        id="popupThumbnail"
                        src={anime.imgsrc}
                        alt={anime.title}
                    />
                    <p id="popupDescription">{anime.synopsis}</p>
                </div>
                <div
                    id="popupX"
                    onClick={() => props.callbackVisibility(false)}
                >
                    <span>X</span>
                </div>
            </div>
        </TemplatePopup>
    );
}

export default PopupSynopsis;
