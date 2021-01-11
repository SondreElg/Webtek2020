import { useState } from "react";
import animeInfo from "../animeInfo";
import PopupSynopsis from "./popupSynopsis";

function Screening(props) { // split into screening and voting
    const anime = animeInfo[props.title];
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
                class={props.className}
                onClick={() => {
                    setVisibilityPopupSynopsis(true);
                }}
            >
                <img id={props.coverImage} src={props.coverImage} alt={anime} />
                <h2 class="anime_episodes">
                    {anime}
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

export default Screening;
