// Clean this script later, shouldn't need all the logic in showScreenings
// Alternatively, find a way to separate what

const _MS_PER_WEEK = 1000 * 60 * 60 * 24 * 7

function generateScreening (anime, date, time, location, target) { // Need functions for calculating episodes
  var screening = `
    <div class="screening_container">
        Date: ${date.toString().slice(0, 15)} | Time: ${time} | Location: ${location}`

    screening += `${generateAnimeScreening(anime)} 
        </div>`

    document.getElementById(target).innerHTML += screening
}

function generateAnimeScreening (animeList) {
  var animeScreenings = '';
  var title = '';
  var imgsrc = '';
  var anime = '';
  var episode = 0
    var totalEpisodes = 0

    for (series in animeList) {
    anime = animeList[series]
        episode = nextEpisode[anime]
        totalEpisodes = animeDictionary[anime][animeTotalEpisodes]
        title = animeDictionary[anime][animeTitle]
        imgsrc = animeDictionary[anime][animeImgsrc]

    if (episode > 0 && episode < totalEpisodes) {
      animeScreenings += addTwoEpisodes(anime, imgsrc, title, episode)
    } else if (episode == totalEpisodes) {
      animeScreenings += addSingleEpisode(anime, imgsrc, title, episode)
    } else if (episode + 1 == 1) {
      animeScreenings += addSingleEpisode(anime, imgsrc, title, episode + 1)
    }
    episodeIncrement(anime, 2)
    }
  return animeScreenings
}

function addSingleEpisode (anime, imgsrc, title, episode) {
  return `
    <div class="anime_screening" onclick="(generatePopup('${anime}'))">
        <img id="${imgsrc}" src="${imgsrc}" alt="${title}" />
        <h2 class="anime_episodes">${title}<br />Episode ${episode}</h2>
    </div>`
}

function addTwoEpisodes (anime, imgsrc, title, episode) {
  return `
    <div class="anime_screening" onclick="(generatePopup('${anime}'))">
        <img id="${imgsrc}" src="${imgsrc}" alt="${title}" />
        <h2 class="anime_episodes">${title}<br />Episodes ${episode}-${episode + 1}</h2>
    </div>`
}

function weekIncrement (date) {
  return new Date(Math.abs(date) + _MS_PER_WEEK)
}

function episodeIncrement (anime, amount) {
  nextEpisode[anime] += amount
}

function generateFutureScreenings (date, animeList, target) {
  var week = firstScreening
    var screeningsEnd = new Date(Math.ceil(Math.abs(firstScreening) + totalScreenings * _MS_PER_WEEK))

    while (Math.abs(screeningsEnd) - Math.abs(week) > 0) {
    if (week >= date) {
      generateScreening(animeList, new Date(week).toDateString(), '19:30', 'Discord', target)
    } else {
      for (series in animeList) {
        episodeIncrement(animeList[series], 2)
            }
    }
    week = weekIncrement(week) 
    }
}

function generateNextScreening (date, animeList, target) {
  var week = firstScreening

    var a = 1

    while (a < 20) {
    if (Math.abs(week) >= Math.abs(date)) {
      generateScreening(animeList, new Date(week).toDateString(), '19:30', 'Discord', target)
      break
        } else {
      for (series in animeList) {
        episodeIncrement(animeList[series], 2)
      }
    }
    week = weekIncrement(week) 
    a++
    }
}
