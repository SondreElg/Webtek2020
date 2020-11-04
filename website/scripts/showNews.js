var newsCount = 0 // Total news loaded
var loaded = false // Bool for checking if news have finished loading

function displayFirstTwentyNews() {
    newsCount += 20
    displayNews(0, newsCount, "newsfeed_container")
}

function displayNews(start, end, target) {
    loaded = false
    var thisNewsContent
    var thisNewsAuthor
    var thisNewsDate

    if (end >= newsList.length) {
        end = newsList.length - 1
    }

    for (i = start; i < end; i++) {
        thisNewsContent = newsList[i][newsContent]
        thisNewsAuthor = newsList[i][newsAuthor]
        thisNewsDate = newsList[i][newsDate]

        document.getElementById(target).innerHTML += `
            <div class="info_content">
                <p>
                    ${thisNewsContent}
                </p>
                <span class="author">-${thisNewsAuthor}, ${thisNewsDate}</span>
            </div>`
    }
    newsCount = end
    loaded = true
}

function displayLatestNews() {
    displayNews(0, 1, "news_section")
}

function checkScroll() {
    console.log(window.scrollY, document.documentElement.scrollHeight)
    if (window.scrollY + 1200 >= document.documentElement.scrollHeight && loaded) {
        loaded = false
        displayNews(newsCount, newsCount + 20, "newsfeed_container")
        newsCount += 20
    }
}
