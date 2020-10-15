const firstScreening = new Date(2020, 7, 26); //Well, this isn't working
const totalScreenings = 13;
const _MS_PER_WEEK = 1000 * 60 * 60 * 24 * 7;

function generateScreening(anime, date, time, location) { //Need functions for calculating episodes
    var screening = `
    <div class="screeningContainer">
        Date: ${date.toString().slice(0, 15)} | Time: ${time} | Location: ${location}`;

    screening += `${generateAnimeScreening(anime)} 
        </div>`;

    document.getElementById("screeningsContainer").innerHTML += screening;
}

function generateAnimeScreening(animeList) {
    var animeScreenings = ``;
    var title = "";
    var imgsrc = "";
    var anime = "";
    var episode = 0;
    var totalEpisodes = 0;

    for (series in animeList) {
        anime = animeList[series];
        episode = nextEpisode[anime];
        totalEpisodes = anime_dictionary[anime][animeTotalEpisodes];
        title = anime_dictionary[anime][animeTitle];
        imgsrc = anime_dictionary[anime][animeImgsrc];

        console.log(anime, episode)

        if (0 < episode && episode < totalEpisodes) {
            animeScreenings += addTwoEpisodes(anime, imgsrc, title, episode)
            //console.log(anime, title, imgsrc, episodes);  
        }
        else if (episode == totalEpisodes) {
            animeScreenings += addSingleEpisode(anime, imgsrc, title, episode)
        }
        else if (episode + 1 == 1) {
            animeScreenings += addSingleEpisode(anime, imgsrc, title, episode+1)
        }
        episodeIncrement(anime, 2);
    }
    return animeScreenings;
}

function addSingleEpisode(anime, imgsrc, title, episode) {
    return `
    <div class="animeScreening" onclick="(generatePopup('${anime}'))">
        <img id="${imgsrc}" src="${imgsrc}" alt="${title}" />
        <h2 class="animeEpisodes">${title}<br />Episode ${episode}</h2>
    </div>`;
}

function addTwoEpisodes(anime, imgsrc, title, episode) {
    return `
    <div class="animeScreening" onclick="(generatePopup('${anime}'))">
        <img id="${imgsrc}" src="${imgsrc}" alt="${title}" />
        <h2 class="animeEpisodes">${title}<br />Episodes ${episode}-${episode+1}</h2>
    </div>`;
}

function weekIncrement(date) {
    return new Date(Math.abs(date) + _MS_PER_WEEK);
}

function episodeIncrement(anime, amount) {
    nextEpisode[anime] += amount;
}

function generateFutureScreenings(date, totalScreenings, animeList) {
    var week = firstScreening;
    var screeningsEnd = new Date(Math.ceil(Math.abs(firstScreening) + totalScreenings * _MS_PER_WEEK));

    while (Math.abs(screeningsEnd) - Math.abs(week) > 0) {
        if (week >= date) {
            generateScreening(animeList, new Date(week).toDateString(), "19:30", "Discord")
        }
        else {
            for (series in animeList) {
                episodeIncrement(animeList[series], 2);
            }
        }
        week = weekIncrement(week); 
    }
}

generateFutureScreenings(new Date(), totalScreenings, ["Rokka", "Hataraku", "Minami", "Zetsubou", "Shirobako"]);