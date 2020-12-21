import {
    firstScreening,
    totalScreenings,
    nextEpisode,
    animeDictionary,
} from "./anime";

const _MS_PER_WEEK = 1000 * 60 * 60 * 24 * 7;
const time = "19:30";
const place = "Discord";
const weekday = "Wednesdays";

/**
 * Generates screenings from today's date
 *
 * @param {Date} date The lower bound for which screenings will be displayed
 * @param {String[]} animeList A list of the anime which will be screened
 * @param {String} target The div in which the screenings will be contained
 * @param {Boolean} onlyNext A bool for if only the next screening will be generated
 */
function generateScreenings(date, animeList, target, onlyNext = false) {
    var week = firstScreening;
    var currentScreening = 0;

    // Iterates through all screenings, only evaluating those which have yet to happen
    while (currentScreening < totalScreenings) {
        if (week >= date) {
            generateScreening(animeList, new Date(week).toDateString(), target);
            if (onlyNext) {
                break;
            }
        } else {
            for (var series in animeList) {
                episodeIncrement(animeList[series], 2);
            }
        }
        week = weekIncrement(week);
        currentScreening++;
    }
}

/**
 * Generates an overview of all anime will be screened the current semester
 *
 * @param {String[]} animeList A list of the anime which will be screened
 * @param {String} target The div in which the screenings will be contained
 */
function generateSemesterAnime(animeList, target) {
    generateScreening(animeList, weekday, target, false);
}

/**
 * Generates the container "screening_container" for all individual anime screenings
 * in a complete screening and calls functions which generates "anime_screening" divs
 * for the individual anime screenings
 *
 * @param {String[]} animeList A list of the anime which will be screened
 * @param {Date} date The date of the screening
 * @param {String} target The div in which the screenings will be contained
 * @param {Boolean} includeEpisodes Whether or not which episodes will be screened is included in the result
 */
function generateScreening(animeList, date, target, includeEpisodes = true) {
    document.getElementById(target).innerHTML += `
    <div class="screening_container">
        Date: ${date
            .toString()
            .slice(0, 15)} | Time: ${time} | Location: ${place}
          ${generateAnimeScreenings(animeList, includeEpisodes)} 
        </div>`;
}

/**
 * Iterates through each anime in animeList and calls addEpisodes(),
 * which generates the "anime_screening" divs for them
 *
 * @param {String[]} animeList A list of the anime which will be screened
 * @param {Boolean} includeEpisodes Whether or not which episodes will be screened is included in the result
 *
 * @returns {String} A collection of "anime_screening" divs for the screening
 */
function generateAnimeScreenings(animeList, includeEpisodes) {
    var animeScreenings = "";
    var title = "";
    var imgsrc = "";
    var anime = "";
    var episode = 0;
    var totalEpisodes = 0;

    for (var series in animeList) {
        //Iterates through the series in animeList
        anime = animeList[series];
        episode = nextEpisode[anime];
        totalEpisodes = animeDictionary[anime].episodes;
        title = animeDictionary[anime].title;
        imgsrc = animeDictionary[anime].imgsrc;

        if (!includeEpisodes) {
            //Generate div with no episodes
            animeScreenings += addEpisodes(anime, imgsrc, title, 0, 0);
        } else if (episode < 0) {
            //Generate no div, increment anime
            episodeIncrement(anime, 2);
        } else if (episode === 0) {
            //Generate div with first episode of anime
            animeScreenings += addEpisodes(
                anime,
                imgsrc,
                title,
                episode + 1,
                1
            );
            episodeIncrement(anime, 1);
        } else if (episode < totalEpisodes) {
            //Generate div with two episodes of anime
            animeScreenings += addEpisodes(anime, imgsrc, title, episode, 2);
        } else if (episode === totalEpisodes) {
            //Generate div with last episode of anime
            animeScreenings += addEpisodes(anime, imgsrc, title, episode, 1);
        }
    }

    return animeScreenings;
}

/**
 * Generates an "anime_screening" div for the supplied anime
 *
 * @param {String[]} anime The anime for which an "anime_screening" div will be constructed
 * @param {String} imgsrc Path to the thumbnail of the anime
 * @param {String} title The title of the anime
 * @param {Int} episode The first episode which will be screened this screening
 * @param {Int} amount The amount of episodes which will be screened this screening
 *
 * @returns {String} Div for the supplied anime
 */
function addEpisodes(anime, imgsrc, title, episode, amount) {
    var episodeString = ``;
    if (amount === 1) {
        episodeString += `<br />Episode ${episode}`;
    } else if (amount > 1) {
        episodeString += `<br />Episodes ${episode}-${episode + amount - 1}`;
    }
    episodeIncrement(anime, amount);

    return `
    <div class="anime_screening" onclick="(generatePopup('${anime}'))">
        <img id="${imgsrc}" src="${imgsrc}" alt="${title}" />
        <h2 class="anime_episodes">${title} ${episodeString}</h2>
    </div>`;
}

/**
 * Increments a given date by one week and returns the result
 *
 * @param {Date} date The date to be incremented
 *
 * @returns {Date} The supplied date incremented by a week
 */
function weekIncrement(date) {
    return new Date(Math.abs(date) + _MS_PER_WEEK);
}

/**
 * Increments the episode counter of an anime by a certain amount
 *
 * @param {String} anime The anime which will have its episode counter incremented
 * @param {Int} amount How much the episode counter should be incremented
 */
function episodeIncrement(anime, amount) {
    nextEpisode[anime] += amount;
}

export default generateScreenings;
export { generateSemesterAnime };
