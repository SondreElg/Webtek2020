import { animeDictionary } from "../scripts/anime";

function AnimeScreening(props) {
    const anime = animeDictionary[props.animeKey];

    return (
        <div class="screening_container">
            <div class="anime_screening" onClick={() => {}}>
                <img id={anime.imgsrc} src={anime.imgsrc} alt={anime.title} />
                <h2 class="anime_episodes">
                    {anime.title}
                    {props.episodeInfo}
                </h2>
            </div>
        </div>
    );
}

export default AnimeScreening;
