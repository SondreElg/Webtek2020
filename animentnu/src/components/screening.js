import { useState } from "react";
import animeInfo from "../scripts/anime";
import PopupSynopsis from "./popupSynopsis";

function AnimeScreening(props) {
    const anime = animeInfo[props.animeKey];
    const episodes = props.episodes;
    const [visibilityPopupSynopsis, setVisibilityPopupSynopsis] = useState(
        false
    );

    var episodesString;

    if (episodes === null) {
        episodesString = "";
    } else if (episodes.length === 1) {
        episodesString = `Episode ${episodes[0]}`;
    } else {
        episodesString = `Episodes ${episodes[0]}-${
            episodes[episodes.length - 1]
        }`;
    }

    return (
        <>
            <div
                className="anime_screening"
                onClick={() => {
                    setVisibilityPopupSynopsis(true);
                }}
            >
                <img id={anime.imgsrc} src={anime.imgsrc} alt={anime.title} />
                <h2 className="anime_episodes">
                    {anime.title}
                    <br />
                    {episodesString}
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
