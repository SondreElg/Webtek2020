// Clean this script later, shouldn't need all the logic in showScreenings
// Alternatively, find a way to separate what
var newsCount = 0;

function displayFirstTwentyNews() {
    newsCount += 20;
    displayNews(0, newsCount);
}

function displayAllNews() {
    displayNews(newsCount, newsList.length);
    document.getElementById("buttonDisplayAllNews").style.display = "none";
}

function displayNews(start, end) {
    var thisNewsContent;
    var thisNewsAuthor;
    var thisNewsDate;

    console.log(newsList);
    for (i = start; i < end; i++) {
        if (i > newsList.length) {
            return;
        }

        thisNewsContent = newsList[i][newsContent];
        thisNewsAuthor = newsList[i][newsAuthor];
        thisNewsDate = newsList[i][newsDate];

        console.log(newsList[i]);

        document.getElementById("newsfeed_container").innerHTML += `
            <div class="news_content">
                <p>
                    ${thisNewsContent}
                </p>
                <span class="author">-${thisNewsAuthor}, ${thisNewsDate}</span>
            </div>`;
    }
}

function displayLatestNews() {
    const latestContent = newsList[0][newsContent];
    const latestAuthor = newsList[0][newsAuthor];
    const latestDate = newsList[0][newsDate];

    document.getElementById("news_section").innerHTML += `
    <div class="news_content">
        <p>
            ${latestContent}
        </p>
        <span class="author">-${latestAuthor}, ${latestDate}</span>
    </div>`;
}
