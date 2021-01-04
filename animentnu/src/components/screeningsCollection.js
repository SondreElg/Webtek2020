import dataAnime from "../data/dataAnime";
import ScreeningContainer from "./screeningContainer";
import dataEpisodes from "../data/dataEpisodes";

function ScreeningsCollection(props) {
    const { episodesInfo, startDate, dayIncr, onlyNext } = props;
    const today = new Date(2020, 8, 30);

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
            const totalEpisodes = dataAnime[key].episodes;
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

ScreeningsCollection.defaultProps = {
    episodesInfo: dataEpisodes,
    startDate: new Date(2020, 7, 26),
    dayIncr: 7,
    onlyNext: false,
};

export default ScreeningsCollection;
