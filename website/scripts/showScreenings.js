const _MS_PER_WEEK = 1000 * 60 * 60 * 24 * 7
const time = '19:30'
const place = 'Discord'
const weekday = 'Wednesdays'

function generateScreening (animeList, date, target, includeEpisodes = true) {
  document.getElementById(target).innerHTML += `
    <div class="screening_container">
        Date: ${date.toString().slice(0, 15)} | Time: ${time} | Location: ${place}
          ${generateAnimeScreenings(animeList, includeEpisodes)} 
        </div>`
}

function generateAnimeScreenings (animeList, includeEpisodes) {
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

    if (!includeEpisodes) {
      animeScreenings += addEpisodes(anime, imgsrc, title, 0, 0)
    } else if (episode < 0) {
      episodeIncrement(anime, 2)
    } else if (episode == 0) {
      animeScreenings += addEpisodes(anime, imgsrc, title, episode + 1, 1)
      episodeIncrement(anime, 1)
    } else if (episode < totalEpisodes) {
      animeScreenings += addEpisodes(anime, imgsrc, title, episode, 2)
    } else if (episode == totalEpisodes) {
      animeScreenings += addEpisodes(anime, imgsrc, title, episode, 1)
    } 
  }

  return animeScreenings
}

function addEpisodes (anime, imgsrc, title, episode, amount) {
  var episodeString = ``
  if (amount == 1) {
    episodeString += `<br />Episode ${episode}`
  } else if (amount > 1) {
    episodeString += `<br />Episodes ${episode}-${episode + amount - 1}`
  } 

  episodeIncrement(anime, amount)
  return `
    <div class="anime_screening" onclick="(generatePopup('${anime}'))">
        <img id="${imgsrc}" src="${imgsrc}" alt="${title}" />
        <h2 class="anime_episodes">${title} ${episodeString}</h2>
    </div>`
}

function weekIncrement (date) {
  return new Date(Math.abs(date) + _MS_PER_WEEK)
}

function episodeIncrement (anime, amount) {
  nextEpisode[anime] += amount
}

function generateScreenings (date, animeList, target, onlyNext = false) {
  var week = firstScreening
  var currentScreening = 0

  while (currentScreening < totalScreenings) {
    if (week >= date) {
      generateScreening(animeList, new Date(week).toDateString(), target)
      if (onlyNext) {
        break
      }
    } else {
      for (series in animeList) {
        episodeIncrement(animeList[series], 2)
      }
    }
    week = weekIncrement(week) 
    currentScreening++
  }
}

function generateSemesterAnime (animeList, target) {
  generateScreening(animeList, weekday, target, false)
}