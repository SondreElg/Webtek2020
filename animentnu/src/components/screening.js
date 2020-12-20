import { useState } from "react";
import { animeDictionary } from "../scripts/anime";
import PopupSynopsis from "./popupSynopsis";

function AnimeScreening(props) {
    const anime = animeDictionary[props.animeKey];
    const [visibilityPopupSynopsis, setVisibilityPopupSynopsis] = useState(
        false
    );

    return (
        <>
            <div
                class="anime_screening"
                onClick={() => {
                    setVisibilityPopupSynopsis(true);
                }}
            >
                <img id={anime.imgsrc} src={anime.imgsrc} alt={anime.title} />
                <h2 class="anime_episodes">
                    {anime.title}
                    {props.episodeInfo}
                </h2>
            </div>
            <PopupSynopsis
                isVisible={visibilityPopupSynopsis}
                callbackVisibility={setVisibilityPopupSynopsis}
                anime={anime}
            />
        </>
    );
}

export default AnimeScreening;
