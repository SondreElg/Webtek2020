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
    const today = new Date(2020, 8, 30);
    const dayIncr = 7;
    const onlyNext = false;

    let counter = 0;
    var allScreenings = [];

    while (true) {
        const date = new Date(startDate);
        date.setDate(startDate.getDate() + dayIncr * counter);

        console.log(date.toDateString());

        if (date < today) {
            counter++;
            continue;
        }

        let animeThisScreening = [];
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
                    date: date,
                });
            }
        });

        if (animeThisScreening.length === 0) {
            break;
        }

        allScreenings.push(animeThisScreening);

        if (onlyNext) {
            break;
        }

        counter++;
    }

    return allScreenings.map((value, index) => {
        return (
            <ScreeningContainer
                key={index}
                animeList={value}
                date={value[0].date.toDateString()}
                time={"19:30"}
                location={"Discord"}
            />
        );
    });
}

export default ScreeningsCollection;
