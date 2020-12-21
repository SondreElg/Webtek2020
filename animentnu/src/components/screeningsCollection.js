import { animeDictionary } from "../scripts/anime";
import ScreeningContainer from "./screeningContainer";

function ScreeningsCollection(props) {
    const episodesInfo = {
        Rokka: { start: 1, incr: 2 },
        Hataraku: { start: 1, incr: 2 },
        Minami: { start: -11, incr: 2 },
        Zetsubou: { start: -12, incr: 2 },
        Shirobako: { start: 1, incr: 2 },
        Tokikake: { start: -24, incr: 2 },
    };
    const startDate = new Date(2020, 7, 26);
    const dayIncr = 7;

    var counter = 0;
    var allScreenings = [];

    while (true) {
        var animeThisScreening = [];
        Object.keys(episodesInfo).forEach((key) => {
            const episodesPerScreening = episodesInfo[key].incr;
            const totalEpisodes = animeDictionary[key].episodes;
            const startEpisode =
                episodesInfo[key].start + episodesPerScreening * counter;

            const episodesRaw = Array.from(
                new Array(episodesPerScreening),
                (x, i) => i + startEpisode
            );
            const episodes = episodesRaw.filter(
                (episode) => episode <= totalEpisodes && episode >= 1
            );

            if (episodes.length > 0) {
                animeThisScreening.push({
                    name: key,
                    episodes: episodes,
                });
            }
        });

        if (animeThisScreening.length === 0) {
            break;
        }

        allScreenings.push(animeThisScreening);
        counter++;
    }

    return allScreenings.map((value, index) => {
        const date = new Date(startDate);
        date.setDate(startDate.getDate() + dayIncr * index);
        return (
            <ScreeningContainer
                key={index}
                animeList={value}
                date={date.toDateString()}
                time={"19:30"}
                location={"Discord"}
            />
        );
    });
}

export default ScreeningsCollection;
